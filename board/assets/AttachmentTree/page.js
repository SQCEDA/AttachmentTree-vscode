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

function highlightblock(blockid) {
    var handlei=setInterval(() => {
        AttachmentTreeFunctions.workspace().highlightBlock(blockid,true)
        setTimeout(() => {
            AttachmentTreeFunctions.workspace().highlightBlock(blockid,false)
        }, 300);
    }, 600);
    setTimeout(() => {
        clearInterval(handlei)
    }, 5000);
}

window.buildBlocks=function(params) {
    // console.log('buildBlocks')
    try {
        if (AttachmentTreeFunctions.defaultCode!==defaultCode_JSON_withid) {
            AttachmentTreeFunctions.defaultCode=defaultCode_JSON_withid
                    
            function clickhighlight(event) {
                try {
                    if (event.type!=='ui' || event.element!=='click') return;
                    // console.log('clickhighlight')
                    // console.log(event.blockId)
                    // console.log('#'+btoa(event.blockId).split('=')[0])
                    var svgcid=document.querySelector('#'+btoa(event.blockId).split('=')[0])
                    if (svgcid) {
                        svgcid.children[0].style.fill='black'
                        svgcid.children[0].style.stroke = 'red'; // 设置边框颜色为红色
                        svgcid.children[0].style.strokeWidth = '2000'; // 设置边框宽度为 2
                        setTimeout(() => {
                            svgcid.children[0].style=''
                        }, 1000);
                    }
                } catch (error) {
                }
            }
            
            AttachmentTreeFunctions.workspace().addChangeListener(clickhighlight);
        }
        AttachmentTreeFunctions.parse(eval('('+document.querySelector('#blocklyinput').value+')'))
        walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg();svgsizefunc();listensvg();
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

function autoresizesvg(params) {
    bbox=svgoutput.children[0].getBBox();svgoutput.children[0].setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
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
            highlightblock(atob(v.id))
        })
    })
}