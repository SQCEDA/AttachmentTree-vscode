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

window.buildHeightCall=function (params) {
    obj=eval('('+document.querySelector('#blocklyinput').value+')')
    zmin={'':0}
    zmax={'':0}
    lastplane=['']
    obj.layers.map(v=>{
        var bases=v.basenames.split(',')

        if(v.basenames==='')bases=[];
        if(!v.basenoplane)bases=bases.concat(lastplane);
        if(v.basenames==='' && v.basenoplane)bases=[''];

        var basemaxs=bases.map(n=>zmax[n])
        if(v.layertype!=='etch'){
            zmax[v.name]=Math.max(...basemaxs)+v.thickness
            zmin[v.name]=Math.min(...basemaxs)
        }else{
            zmax[v.name]=Math.max(...basemaxs)-v.thickness
            zmin[v.name]=Math.min(...basemaxs)-v.thickness
        }
        if(v.plane===true)lastplane[0]=v.name;
    })
    console.log('obj,zmin,zmax',obj,zmin,zmax)
    document.getElementById('heightinfop').innerText=JSON.stringify(['zmin',zmin,'zmax',zmax])
}