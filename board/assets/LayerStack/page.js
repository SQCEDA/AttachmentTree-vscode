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

function generateSVG(data) {
    // 此函数ai生成, 这个svg懒得仔细做
    // 计算最小起点和最大终点
    const minStart = Math.min(...data.map(item => item[1]));
    const maxEnd = Math.max(...data.map(item => item[2]));
    const timeRange = maxEnd - minStart;

    // SVG尺寸参数
    const width = 800;
    const height = data.length * 40 + 40;
    const leftMargin = 100;
    const rightMargin = 50;
    const chartWidth = width - leftMargin - rightMargin;
    const barHeight = 30;
    const verticalSpacing = 10;

    // 创建SVG容器
    let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    svg += '<style>text { font: 12px sans-serif; }</style>';
    
    // 添加背景网格
    for (let i = 0; i <= 10; i++) {
        const x = leftMargin + (i / 10) * chartWidth;
        svg += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="#eee" />`;
        const label = Math.round(minStart + timeRange * (i / 10));
        svg += `<text x="${x}" y="${height - 5}" text-anchor="middle">${label}</text>`;
    }

    // 处理每个数据项
    data.forEach((item, index) => {
        const [name, start, end] = item;
        const y = 20 + index * (barHeight + verticalSpacing);
        
        // 计算位置和宽度
        const scale = timeRange === 0 ? 0 : chartWidth / timeRange;
        const x = leftMargin + (start - minStart) * scale;
        const w = Math.max(1, (end - start) * scale);  // 最小1px宽度
        
        // 绘制柱状条
        const color = name.startsWith('b') || name.startsWith('B') ? '#4e79a7' : 
                     name.startsWith('t') ? '#f28e2c' : 
                     name.startsWith('L') ? '#e15759' : '#76b7b2';
        
        svg += `<rect x="${x}" y="${y}" width="${w}" height="${barHeight}" fill="${color}" rx="3" />`;
        
        // 添加标签
        const textX = Math.max(leftMargin - 5, Math.min(x + 5, width - rightMargin - 5));
        const textAnchor = x < leftMargin ? 'start' : 'end';
        svg += `<text x="${leftMargin - 5}" y="${y + barHeight / 2}" text-anchor="end" dominant-baseline="middle">${name}</text>`;
        
        // 添加时间标签（只在空间足够时显示）
        if (w > 60) {
            svg += `<text x="${x + w / 2}" y="${y + barHeight / 2}" text-anchor="middle" fill="white">${start} - ${end}</text>`;
        }
    });

    // 添加标题和轴
    svg += `<text x="${width / 2}" y="15" text-anchor="middle" font-weight="bold">Genomic Regions</text>`;
    svg += `<line x1="${leftMargin}" y1="${height - 20}" x2="${width - rightMargin}" y2="${height - 20}" stroke="black" stroke-width="2" />`;
    
    svg += '</svg>';
    return svg;
}

window.buildHeightCall=function (params) {
    var obj=eval('('+document.querySelector('#blocklyinput').value+')')
    var walker=new walkerType()
    walker.import(obj)
    console.log(walker)
    console.log(walker.vars,walker.zvalue,walker.groups)
    document.getElementById('heightinfop').innerText=JSON.stringify([walker.vars,walker.zvalue,walker.groups],null,4)
    svgoutput.innerHTML=generateSVG(walker.zvalue)
}