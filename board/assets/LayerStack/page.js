var uselocal=globalThis?.vscodenoce=='ToBeReplacedByRandomToken'

if (uselocal && localStorage.getItem('LayerStack')!=null) {
    try {
        document.querySelector('#blocklyinput').value=localStorage.getItem('LayerStack')
    } catch (error) {
    }
}

window.buildBlocks=function(params) {
    // console.log('buildBlocks')
    try {
        LayerStackFunctions.parse(eval('('+document.querySelector('#blocklyinput').value+')'))
    } catch (error) {
        if(error.message!=='LayerStackFunctions is not defined')console.error(error);
    }
}
window.buildBlocks()

var lastvalue = ['']
window.trigger = function(params) {
    if (params[1]==lastvalue[0]) {
        return
    }
    lastvalue[0]=params[1]
    try {
        if(uselocal && params[1])localStorage.setItem('LayerStack',document.querySelector('#blocklyinput').value)
    } catch (error) {
    }
}

/**
 * @class
 */
function walkerType(params) {
    
}
walkerType.prototype.import=function (root) {
    this.loadvars(root.define)
    this.walk(root.groups)
    return this
}
walkerType.prototype.loadvars=function (defineList) {
    this.vars={}
    defineList.forEach(element => {
        if (element.type!=='lsvariable') {
            return
        }
        if (element.id in this.vars) {
            return
        } else {
            this.vars[element.id]=this.eval(element.value)
        }
    });
}
walkerType.prototype.eval=function (number){
    if (typeof number==='number') {
        return number
    }
    return eval(number.replace(/[a-zA-Z_]+\w+/g,(ii)=>this.vars[ii]))
}
walkerType.prototype.walklayergroup = function(layergroup){
    var obj=layergroup
    var zmin={'':0}
    var zmax={'':0}
    var lastplane=['']
    obj.layers.map(v=>{
        var bases=v.basenames.split(',')
        var thickness=this.eval(v.thickness)

        if(v.basenames==='')bases=[];
        if(!v.basenoplane)bases=bases.concat(lastplane);
        if(v.basenames==='' && v.basenoplane)bases=[''];

        var basemaxs=bases.map(n=>zmax[n])
        if(v.layertype!=='etch'){
            zmax[v.name]=Math.max(...basemaxs)+thickness
            zmin[v.name]=Math.min(...basemaxs)
        }else{
            zmax[v.name]=Math.max(...basemaxs)-thickness
            zmin[v.name]=Math.min(...basemaxs)-thickness
        }
        if(v.plane===true)lastplane[0]=v.name;
    })
    console.log('zmin,zmax',zmin,zmax)
    var minname=Object.entries(zmin).reduce((cindex, [key, value]) => value < zmin[cindex] ? key : cindex, Object.keys(zmin)[0]);
    var maxname=Object.entries(zmax).reduce((cindex, [key, value]) => value > zmax[cindex] ? key : cindex, Object.keys(zmax)[0]);
    var uptouchlayer=obj.uptouchlayer?obj.uptouchlayer:maxname
    var downtouchlayer=obj.downtouchlayer?obj.downtouchlayer:minname
    var reverse=obj.reverse
    var names=obj.layers.map(v=>v.name)
    return {names,zmax,zmin,maxname,minname,uptouchlayer,downtouchlayer,reverse}
}
walkerType.prototype.walk = function(groups){
    this.groups=groups.map(v=>this.walklayergroup(v))
    // then merge z values
    var zvalue=[]
    var zbase=[0]
    this.groups.map(gv=>{
        if (!gv.reverse) {
            var {names,zmax,zmin,maxname,minname,uptouchlayer,downtouchlayer}=gv
        }else{
            var names=Array.from(gv.names).reverse()
            var zheight=gv.zmax[gv.maxname]
            var zmax={}
            for (var key in gv.zmin) {
                zmax[key]=zheight-gv.zmin[key]
            }
            var zmin={}
            for (var key in gv.zmin) {
                zmin[key]=zheight-gv.zmax[key]
            }
            var maxname=gv.minname
            var minname=gv.maxname
            var uptouchlayer=gv.downtouchlayer
            var downtouchlayer=gv.uptouchlayer
        }
        for (var name of names) {
            zvalue.push([name,
                zbase[0]+zmin[name]-zmin[downtouchlayer],
                zbase[0]+zmax[name]-zmin[downtouchlayer],
            ])
        }
        zbase[0]=zbase[0]+zmax[uptouchlayer]-zmin[downtouchlayer]
    })
    this.zvalue=zvalue
}

window.buildHeightCall=function (params) {
    var obj=eval('('+document.querySelector('#blocklyinput').value+')')
    var walker=new walkerType()
    walker.import(obj)
    console.log(walker)
    console.log(walker.vars,walker.zvalue,walker.groups)
    document.getElementById('heightinfop').innerText=JSON.stringify([walker.vars,walker.zvalue,walker.groups],null,4)
}