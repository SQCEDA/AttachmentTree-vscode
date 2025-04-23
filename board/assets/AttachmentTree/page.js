var stoi=s=>'s'+new TextEncoder().encode(s).reduce((acc, val) => acc + val.toString(16).padStart(2, '0'), '')
var itos=i=>new TextDecoder().decode(new Uint8Array(i.slice(1).match(/[\da-fA-F]{2}/gi).map(hex => parseInt(hex, 16))))
// if (localStorage.getItem('AttachmentTree')!=null) {
//     try {
//         document.querySelector('#blocklyinput').value=localStorage.getItem('AttachmentTree')
//     } catch (error) {
//     }
// }
var defaultCode_JSON_withid = function (ruleName,args,block) {
    var rule = AttachmentTreeBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[AttachmentTreeFunctions.defaultCode_JSON_TYPE]=rule.json.type
        ret=block.getNextBlock()==null?'':','
        output._blockid=block.id
        // console.log(block)
    }
    for (var index = 0; index < values.length; index++) {
        var value = values[index];
        if (rule.argsType[index]==='statement') {
            output[rule.args[index]]=eval('['+value+']')
            if (!rule.multi[index]) output[rule.args[index]]=output[rule.args[index]][0];
        } else if (rule.argsType[index]==='value') {
            output[rule.args[index]]=eval('('+value+')')
        } else {
            output[rule.args[index]]=value
        }
    }
    ret=JSON.stringify(output,null,4)+ret
    return ret
}

var lasthandlei=[null,'']
function highlightblock(blockid) {
    console.log(blockid)
    AttachmentTreeFunctions.workspace().centerOnBlock(blockid)
    if (lasthandlei[0]!=null) {
        clearInterval(lasthandlei[0])
        lasthandlei[0]=null
        AttachmentTreeFunctions.workspace().getBlockById(lasthandlei[1]).removeSelect()
    }
    AttachmentTreeFunctions.workspace().getBlockById(blockid).addSelect()
    var handlei=setInterval(() => {
        AttachmentTreeFunctions.workspace().highlightBlock(blockid,true)
        setTimeout(() => {
            AttachmentTreeFunctions.workspace().highlightBlock(blockid,false)
        }, 300);
    }, 600);
    lasthandlei[0]=handlei
    lasthandlei[1]=blockid
    setTimeout(() => {
        if (lasthandlei[0]==handlei) {
            AttachmentTreeFunctions.workspace().getBlockById(blockid).removeSelect()
            clearInterval(handlei)
            lasthandlei[0]=null
        }
    }, 5000);
}

function blinksvg(svgcid) {
    svgcid.children[0].style.fill='black'
    svgcid.children[0].style.stroke = 'red'; // 设置边框颜色为红色
    svgcid.children[0].style.strokeWidth = '2000'; // 设置边框宽度为 2
    setTimeout(() => {
        svgcid.children[0].style=''
    }, 1000);
}

window.buildBlocks=function(params) {
    // console.log('buildBlocks')
    try {
        if (AttachmentTreeFunctions.defaultCode!==defaultCode_JSON_withid) {
            AttachmentTreeFunctions.defaultCode=defaultCode_JSON_withid
                    
            function clickhighlight(event) {
                try {
                    if (event.type!=='ui' || event.element!=='click') return;
                    // console.log(event)
                    // console.log(event.blockId)
                    var svgcid=document.querySelector('#'+stoi(event.blockId))
                    if(AttachmentTreeFunctions.workspace().getBlockById(event.blockId).type=='structure'){
                        svgcid=document.querySelector('#'+stoi(
                            eval('('+Blockly.JavaScript.statementToCode(AttachmentTreeFunctions.workspace().getBlockById(event.blockId),'shape')+'._blockid)')
                        ))
                    }
                    if (svgcid) {
                        globalThis.lastclicksvgid=svgcid
                        blinksvg(svgcid)
                    }
                } catch (error) {
                }
            }
            
            AttachmentTreeFunctions.workspace().addChangeListener(clickhighlight);
        }
        var obj=eval('('+document.querySelector('#blocklyinput').value+')')
        AttachmentTreeFunctions.parse(obj)
        if (!obj._blockid) {
            var code = Blockly.JavaScript.workspaceToCode(AttachmentTreeFunctions.workspace());
            obj=eval('('+code+')')
        }
        walker.import(obj);svgoutput.innerHTML=walker.buildsvg();svgsizefunc();listensvg();
    } catch (error) {
        if(error.message!=='AttachmentTreeFunctions is not defined')console.error(error)
    }
}
window.buildBlocks()

var lastvalue = ['']
window.trigger = function(params) {
    if (params[1]==lastvalue[0]) {
        return
    }
    lastvalue[0]=params[1]
    // try {
    //     if(params[1])localStorage.setItem('AttachmentTree',document.querySelector('#blocklyinput').value)
    // } catch (error) {
    // }
    // console.log(params[1])
    walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg();svgsizefunc();listensvg();
}

globalThis.lastclicksvgid=''
function svgviewboxlastclick(){
    bbox=globalThis.lastclicksvgid.getBBox();svgoutput.children[0].setAttribute("viewBox", `${bbox.x-Math.max(bbox.width,bbox.height)} ${bbox.y-Math.max(bbox.width,bbox.height)} ${3*Math.max(bbox.width,bbox.height)} ${3*Math.max(bbox.height,bbox.width)}`);
    blinksvg(globalThis.lastclicksvgid)
}

function autoresizesvg(params) {
    bbox=svgoutput.children[0].getBBox();svgoutput.children[0].setAttribute("viewBox", `${bbox.x} ${bbox.y} ${Math.max(bbox.width,bbox.height)} ${Math.max(bbox.height,bbox.width)}`);
}

window.svgsizefunc=autoresizesvg
// document.getElementById('blocklyDiv').onmousewheel = function(e){
//     var workspace=AttachmentTreeFunctions.workspace()
//     //console.log(e);
//     e.preventDefault();
//     var hvScroll = e.shiftKey?'hScroll':'vScroll';
//     var mousewheelOffsetValue=20/380*workspace.scrollbar[hvScroll].handleLength_*3;
//     workspace.scrollbar[hvScroll].handlePosition_+=( ((e.deltaY||0)+(e.detail||0)) >0?mousewheelOffsetValue:-mousewheelOffsetValue);
//     workspace.scrollbar[hvScroll].onScroll_();
//     workspace.setScale(workspace.scale);
// }

function listensvg() {
    let svg = document.getElementById("svgoutput").children[0];

    svg.addEventListener("wheel", function(event) {
        event.preventDefault();

        const scaleFactor = 1.1;
        let direction = (event.deltaY > 0) ? 1 : -1; // 1 means zoom out, -1 means zoom in

        let rect = svg.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let correctedY = rect.height - (event.clientY - rect.top); // Corrected Y coordinate

        let viewBox = svg.viewBox.baseVal;

        // Compute new width and height based on the zoom direction
        let newWidth = (direction > 0) ? viewBox.width * scaleFactor : viewBox.width / scaleFactor;
        let newHeight = (direction > 0) ? viewBox.height * scaleFactor : viewBox.height / scaleFactor;

        // Compute the new x and y based on the mouse position and the change in size
        viewBox.x += (x / svg.clientWidth) * (viewBox.width - newWidth);
        viewBox.y += (correctedY / svg.clientHeight) * (viewBox.height - newHeight); // Use corrected Y

        // Assign the new width and height
        viewBox.width = newWidth;
        viewBox.height = newHeight;

        svg.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);

        window.svgsizefunc=()=>0;walker.viewbox=svgviewbox.value=`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
    });
    
    document.querySelectorAll('.svgclickg').forEach(v=>{
        v.addEventListener('click',function (event) {
            // console.log(v,event)
            globalThis.lastclicksvgid=v
            highlightblock(itos(v.id))
        })
    })
}

function quickvarchange(scale){
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
        const info = {}
        info.input = activeElement;
        info.start = activeElement.selectionStart;
        info.end = activeElement.selectionEnd;
        info.value = activeElement.value;

        var oldText=info.value.slice(info.start,info.end)
        console.log(oldText)

        var newvalue=eval(oldText)*scale
        if ((Math.round(newvalue)-newvalue)**2<0.0001) {
            newvalue=Math.round(newvalue)
        }
        var newText=newvalue+''

        info.input.value = info.value.slice(0, info.start) + newText + info.value.slice(info.end);
        
        info.input.setSelectionRange(info.start, info.start + newText.length);

        const event = new Event('input', { bubbles: true, cancelable: true });
        info.input.dispatchEvent(event);
    }
}

var replaceInputinfo={}
function replaceInputSelection() {
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
        const info = replaceInputinfo
        if (activeElement.selectionStart==activeElement.selectionEnd && activeElement!=info.input) {
            return
        }
        
        if (activeElement.selectionStart!=activeElement.selectionEnd) {
            info.input = activeElement;
            info.start = activeElement.selectionStart;
            info.end = activeElement.selectionEnd;
            info.value = activeElement.value;
            
            var oldText=info.value.slice(info.start,info.end)
            console.log(oldText)
    
            var newText=''
    
            info.input.value = info.value.slice(0, info.start) + newText + info.value.slice(info.end);
            
            info.input.setSelectionRange(info.start + newText.length, info.start + newText.length);
        }else{
            let id=info.input.value.slice(info.start,info.start+info.input.value.length-(info.value.length-info.end+info.start))
            let value=info.value.slice(info.start,info.end)
            if (id!=='') {
                insertVarBlock(id,value)
                
                const event = new Event('input', { bubbles: true, cancelable: true });
                info.input.dispatchEvent(event);
            }
        }

    }
}

globalThis.atkeys={
    funcs:{
        define:()=>replaceInputSelection(),
        scale:(x)=>quickvarchange(x),
    },
    map:{'f2':'atkeys.funcs.define()','f3':'atkeys.funcs.scale(1/1.1)','f4':'atkeys.funcs.scale(1.1)'}
}
// 绑定快捷键
document.addEventListener('keydown', (e) => {
    let key = e.key
    if (e.ctrlKey) {
        key='ctrl+'+key
    }
    let content = globalThis.atkeys.map[key.toLowerCase()]
    if (content) {
        e.preventDefault();
        eval(content);
    }
});

// 改成按第一次f2剪切掉选中值, 按第二次f2时设成变量名
window.insertVarBlock=function(id,value){
    console.log(id,value)
    // var obj=eval('['+AttachmentTreeBlocks[b.type].generFunc(b)+'][0]')
    var obj={
        "type": "variable",
        "id": id,
        "value": value,
        "description": ""
    }

    var xml_text = AttachmentTreeFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    a=Blockly.Xml.domToWorkspace(xml, AttachmentTreeFunctions.workspace());
    c=AttachmentTreeFunctions.workspace().getBlockById(a[0])

    var gobj=JSON.parse( document.querySelector('#blocklyinput').value)
    b=AttachmentTreeFunctions.workspace().getBlockById(gobj.define.slice(-1)[0]._blockid)

    b.nextConnection.connect(c.previousConnection)

    // var previousTarget = b.previousConnection.targetConnection;
    // b.previousConnection.disconnect()
    // previousTarget.connect(c.previousConnection)
    // c.nextConnection.connect(b.nextConnection.targetConnection)
    // b.previousConnection.targetConnection.connect(c.previousConnection)
    // b.dispose(true,false)
    // b.dispose(true,true)

}

