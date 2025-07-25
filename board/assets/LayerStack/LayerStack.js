// Generated from LayerStack.g4 by antlr-blockly
// 语句集合和表达式集合
LayerStackBlocks = {

}


// 所有域的默认行为
Object.assign(LayerStackBlocks,{
    "Layertype_List": {
        "type": "field_dropdown",
        "options": [
            ["堆叠","grow"],
            ["刻蚀","etch"]
        ],
        "default": "grow"
    },
    "Material_List": {
        "type": "field_dropdown",
        "options": [
            ["air","air"],
            ["si","si"],
            ["see_docs_to_add_more","see_docs_to_add_more"]
        ],
        "default": "air"
    },
    "LayerID_List": {
        "type": "field_dropdown",
        "options": [
            ["MET0","MET0"],
            ["MET1","MET1"],
            ["see_docs_to_add_more","see_docs_to_add_more"]
        ],
        "default": "MET0"
    },
    "Side_List": {
        "type": "field_dropdown",
        "options": [
            ["⇖","ul"],
            ["⇗","ur"],
            ["⇘","dr"],
            ["⇙","dl"]
        ],
        "default": "ul"
    },
    "IdStr": {
        "type": "field_input",
        "text": "IdStr_default"
    },
    "NormalStr": {
        "type": "field_input",
        "text": "NormalStr_default"
    },
    "TryIntStr": {
        "type": "field_input",
        "text": "TryIntStr_default"
    },
    "Evalstr": {
        "type": "field_input",
        "text": "Evalstr_default"
    },
    "Int": {
        "type": "field_number",
        "value": 0,
        "min": 0,
        "precision": 1
    },
    "Bool": {
        "type": "field_checkbox",
        "checked": true
    },
    "Colour": {
        "type": "field_colour",
        "colour": "#ff0000"
    },
    "BGNL": {
        "type": "input_dummy"
    }
});




    if(globalThis?.blocklydynamiclist?.names){
        for (var [kk,vv] of globalThis.blocklydynamiclist.names) {
            LayerStackBlocks[kk].options=vv.map(v=>[v,v])
            LayerStackBlocks[kk].default=vv[0]
        }
    }
    // 所有方块的实际内容
Object.assign(LayerStackBlocks,{
    "layerstack": {
        "type": "statement",
        "json": {
            "type": "layerstack",
            "message0": "图层堆叠信息(底层的先定义) %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "layers",
                    "check": "layer"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var layers = Blockly.JavaScript.statementToCode(block, 'layers');
            var code = LayerStackFunctions.defaultCode('layerstack',eval('['+LayerStackBlocks['layerstack'].args.join(',')+']'),block);
            return code;
        },
        "args": ["layers"],
        "argsType": ["statement"],
        "argsGrammarName": ["layer"],
        "omitted": [true],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return LayerStackFunctions.fieldDefault('layerstack',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return LayerStackFunctions.xmlText('layerstack',inputs,next,isShadow,comment,attribute);
        }
    },
    "layer": {
        "type": "statement",
        "json": {
            "type": "layer",
            "message0": "名称 %1 层 %2 材料 %3 %4 厚度 %5 类型 %6 此层是整平面 %7 %8 基于层(逗号分隔) %9 不基于整平面 %10",
            "args0": [
                Object.assign({},LayerStackBlocks.IdStr,{
                    "name": "name",
                    "text": "L1"
                }),
                Object.assign({},LayerStackBlocks.LayerID_List,{
                    "name": "layerid"
                }),
                Object.assign({},LayerStackBlocks.Material_List,{
                    "name": "material"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},LayerStackBlocks.Evalstr,{
                    "name": "thickness",
                    "text": 100000
                }),
                Object.assign({},LayerStackBlocks.Layertype_List,{
                    "name": "layertype"
                }),
                Object.assign({},LayerStackBlocks.Bool,{
                    "name": "plane",
                    "checked": false
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},LayerStackBlocks.Evalstr,{
                    "name": "basenames",
                    "text": ""
                }),
                Object.assign({},LayerStackBlocks.Bool,{
                    "name": "basenoplane",
                    "checked": false
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "layer",
            "nextStatement": "layer"
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','layer');
            }
            name = LayerStackFunctions.pre('IdStr')(name,block,'name','layer');
            var layerid = block.getFieldValue('layerid');
            layerid = LayerStackFunctions.pre('LayerID_List')(layerid,block,'layerid','layer');
            var material = block.getFieldValue('material');
            material = LayerStackFunctions.pre('Material_List')(material,block,'material','layer');
            var thickness = block.getFieldValue('thickness');
            if (thickness==='') {
                throw new OmitedError(block,'thickness','layer');
            }
            thickness = LayerStackFunctions.pre('Evalstr')(thickness,block,'thickness','layer');
            var layertype = block.getFieldValue('layertype');
            layertype = LayerStackFunctions.pre('Layertype_List')(layertype,block,'layertype','layer');
            var plane = block.getFieldValue('plane') === 'TRUE';
            plane = LayerStackFunctions.pre('Bool')(plane,block,'plane','layer');
            var basenames = block.getFieldValue('basenames');
            basenames = LayerStackFunctions.pre('Evalstr')(basenames,block,'basenames','layer');
            var basenoplane = block.getFieldValue('basenoplane') === 'TRUE';
            basenoplane = LayerStackFunctions.pre('Bool')(basenoplane,block,'basenoplane','layer');
            var code = LayerStackFunctions.defaultCode('layer',eval('['+LayerStackBlocks['layer'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","layerid","material","thickness","layertype","plane","basenames","basenoplane"],
        "argsType": ["field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["IdStr","LayerID_List","Material_List","Evalstr","Layertype_List","Bool","Evalstr","Bool"],
        "omitted": [false,false,false,false,false,false,true,false],
        "multi": [false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return LayerStackFunctions.fieldDefault('layer',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return LayerStackFunctions.xmlText('layer',inputs,next,isShadow,comment,attribute);
        }
    }
});



//生成代码中,当一个不允许省略的值或块省略时,会抛出这个错误
function OmitedError(block, var_, rule, fileName, lineNumber) {
    var message = 'no omitted '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'OmitedError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, OmitedError);
    }
    return instance;
}

OmitedError.prototype = Object.create(Error.prototype);
OmitedError.prototype.constructor = OmitedError;
//处理此错误的omitedcheckUpdateFunction定义在下面

//生成代码中,当一个不允许多个语句输入的块放入多语句时,会抛出这个错误
function MultiStatementError(block, var_, rule, fileName, lineNumber) {
    var message = 'no multi-Statement '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'MultiStatementError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, MultiStatementError);
    }
    return instance;
}

MultiStatementError.prototype = Object.create(Error.prototype);
MultiStatementError.prototype.constructor = MultiStatementError;
//处理此错误的omitedcheckUpdateFunction定义在下面


LayerStackFunctions={}

LayerStackFunctions.Evalstr_pre = function(str) {
    if (parseFloat(str)+''===str) {
        return parseFloat(str)
    } 
    return str;
}

LayerStackFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

// LayerStackBlocks.shapes.forEach(blockname => {
//     LayerStackBlocks[blockname].json.nextStatement=undefined
// })
LayerStackFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

LayerStackFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
LayerStackFunctions.pre = function(LexerId) {
    if (LayerStackFunctions.hasOwnProperty(LexerId+'_pre')) {
        return LayerStackFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}



// LayerStackFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
LayerStackFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = LayerStackBlocks[ruleName];
    var iskey=typeof keyOrIndex==typeof '';
    var isindex=typeof keyOrIndex==typeof 0;
    function args0_content_to_default(cnt) {
        var key = ({
            'field_input':'text',
            'field_multilinetext':'text',
            'field_number':'value',
            'field_dropdown':'default',
            'field_checkbox':'checked',
            'field_colour':'colour',
            'field_angle':'angle',
            // 'field_image':'src'
        })[cnt.type];
        return cnt[key];
    }
    var allDefault=[];
    for(var ii=0,index=-1,cnt;cnt=rule.json.args0[ii];ii++){
        if (!cnt.name || cnt.type.slice(0,5)!='field' || cnt.type=='field_image') continue;
        index++;
        if (iskey && cnt.name==keyOrIndex)return args0_content_to_default(cnt);
        if (isindex && index==keyOrIndex)return args0_content_to_default(cnt);
        allDefault.push(args0_content_to_default(cnt))
    }
    if (iskey || isindex) return undefined;
    return allDefault;
}



// LayerStackFunctions.defaultCode_TEXT
LayerStackFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = LayerStackBlocks[ruleName];
    var message=rule.json.message0;
    var args0=rule.json.args0;
    for(var ii=0,jj=0;ii<args0.length;ii++){
        message=message.split(new RegExp('%'+(ii+1)+'\\b'));
        var content='\n';
        if (args0[ii].type==='input_dummy') {
            message[1]=message[1].slice(1);
        } else if(args0[ii].type==='field_image') {
            content=args0[ii].alt;
        } else {
            content=args[jj++];
        }
        if (args0[ii].type=="input_statement") {
            message[0]=message[0]+'\n';
            message[1]=message[1].slice(1);
        }
        message=message.join(content);
    }
    if (rule.type=='statement') {
        message=message+'\n';
    }
    return message;
}

LayerStackFunctions.defaultCode_JSON_TYPE='type'

LayerStackFunctions.parserPre={}
LayerStackFunctions.parserPre.pre = function(LexerId) {
    if (LayerStackFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return LayerStackFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
LayerStackFunctions.parserClass = function (params) {
}
LayerStackFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[LayerStackFunctions.defaultCode_JSON_TYPE]
    var rule = LayerStackBlocks[blockType]
    if (LayerStackFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = LayerStackFunctions.parserPre[blockType+'_pre'](obj)
    }
    var input = []
    for (var index = 0; index < rule.args.length; index++) {
        var dobj = obj[rule.args[index]];
        if (rule.argsType[index]==='statement') {
            if (!rule.multi[index])dobj=[dobj];
            var snext=null
            while (dobj.length) {
                var ds=dobj.pop()
                snext=this.parse(ds,snext)
            }
            input.push(snext)
        } else if (rule.argsType[index]==='value') {
            input.push(this.parse(dobj))
        } else {
            var LexerId = rule.argsGrammarName[index]
            input.push(LayerStackFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
LayerStackFunctions.parser=new LayerStackFunctions.parserClass()
LayerStackFunctions.parse=function(obj){
    var xml_text = LayerStackFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    LayerStackFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, LayerStackFunctions.workspace());
}

// LayerStackFunctions.defaultCode_JSON
LayerStackFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = LayerStackBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[LayerStackFunctions.defaultCode_JSON_TYPE]=rule.json.type
        ret=block.getNextBlock()==null?'':','
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

// LayerStackFunctions.defaultCode
LayerStackFunctions.defaultCode=LayerStackFunctions.defaultCode_JSON



// LayerStackFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
LayerStackFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = LayerStackBlocks[ruleName];
    var blocktext = isShadow?'shadow':'block';
    var xmlText = [];
    xmlText.push('<'+blocktext+' type="'+ruleName+'"');
    for (var attr in attribute) {
        xmlText.push(' '+attr+'="'+attribute[attr]+'"');
    }
    xmlText.push('>');
    if(!inputs)inputs=[];
    var inputIsArray = inputs instanceof Array;
    for (var ii=0,inputType;inputType=rule.argsType[ii];ii++) {
        var input = inputIsArray?inputs[ii]:inputs[rule.args[ii]];
        var _input = '';
        var noinput = input==null;
        if(noinput && inputType==='field' && LayerStackBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && LayerStackBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = LayerStackBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = LayerStackBlocks[subrulename];
                subList = true;
            }
            _input = subrule.xmlText([],null,true);
            if(noinput && !subList && !isShadow) {
                //无输入的默认行为是: 如果语句块的备选方块只有一个,直接代入方块
                input = subrule.xmlText();
            }
        }
        xmlText.push('<'+inputType+' name="'+rule.args[ii]+'">');
        xmlText.push(_input+input);
        xmlText.push('</'+inputType+'>');
    }
    if(comment){
        xmlText.push('<comment><![CDATA[');
        xmlText.push(comment.replace(/]]>/g,'] ] >'));
        xmlText.push(']]></comment>');
    }
    if (next) {
        xmlText.push('<next>');
        xmlText.push(next);
        xmlText.push('</next>');
    }
    xmlText.push('</'+blocktext+'>');
    return xmlText.join('');
}



// LayerStackFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
LayerStackFunctions.blocksIniter = function(){
    var blocksobj = LayerStackBlocks;
    for(var key in blocksobj) {
        var value = blocksobj[key];
        if(value instanceof Array)continue;
        if(/^[A-Z].*$/.exec(key))continue;
        (function(key,value){
            if (value.menu && value.menu.length) {
                var menuRegisterMixin={
                    customContextMenu: function(options) {
                        for(var ii=0,op;op=value.menu[ii];ii++){
                            var option = {enabled: true};
                            option.text = op[0];
                            var check = 'function('
                            if (option.text.slice(0,check.length)==check){
                                option.text=eval('('+option.text+')(this)');
                            }
                            (function(block,fstr){
                                option.callback = function(){
                                    eval(fstr)
                                }
                            })(this,op[1]);
                            options.push(option);
                        }
                    }
                };
                value.json.extensions=value.json.extensions||[];
                var mixinName = 'contextMenu_LayerStack_'+value.json.type
                value.json.extensions.push(mixinName)
                Blockly.Extensions.registerMixin(mixinName,menuRegisterMixin);
            }
            Blockly.Blocks[key] = {
                init: function() {this.jsonInit(value.json);}
            }
            Blockly.JavaScript[key] = value.generFunc;
        })(key,value);
    }
}


LayerStackFunctions.blocksIniter();


var toolbox = (function(){

    var toolboxXml=document.createElement('xml')

    // 调整这个obj来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
    var toolboxObj = {
        // 每个键值对作为一页
        "statement": [
            // 所有语句块
            LayerStackBlocks["layerstack"].xmlText(),
            LayerStackBlocks["layer"].xmlText(),
        ],
        "value": [
            // 所有值块
        ]
    }

    var getCategory = function(toolboxXml,name,custom){
        var node = document.createElement('category');
        node.setAttribute('name',name);
        if(custom)node.setAttribute('custom',custom);
        toolboxXml.appendChild(node);
        return node;
    }

    var toolboxGap = '<sep gap="5"></sep>'

    for (var name in toolboxObj){
        var custom = null;
        if(name=='xxxxxx')custom='xxxxxx';
        if(name=='zzzzzz')custom='zzzzzz';
        getCategory(toolboxXml,name,custom).innerHTML = toolboxObj[name].join(toolboxGap);
        var node = document.createElement('sep');
        node.setAttribute('gap',5*3);
        toolboxXml.appendChild(node);
    }

    return toolboxXml;
})();



    var workspace = Blockly.inject('blocklyDiv',{
        media: globalThis.blocklymedia,
        toolbox: toolbox,
        zoom:{
            controls: true,
            wheel: false,//false
            startScale: 0.7,
            maxScale: 1.2,
            minScale: 0.2,
            scaleSpeed: 1.08
        },
        trashcan: false,
    });
    LayerStackFunctions.workspace = function(){return workspace}
    
    function omitedcheckUpdateFunction(event) {
        var codeAreaFunc = function(err,data){blocklyinput.value=err?String(err):data;window?.trigger?.call(null,[err,data])}
        try {
            if (["delete","create","move","finished_loading"].indexOf(event.type)!==-1) return;
            var code = Blockly.JavaScript.workspaceToCode(workspace);
            codeAreaFunc(null,code);
        } catch (error) {
            codeAreaFunc(error,null);
            if (error instanceof OmitedError ||error instanceof MultiStatementError){
                var blockName = error.blockName;
                var varName = error.varName;
                var block = error.block;
            }
            console.log(error);
        }
    }
    
    workspace.addChangeListener(omitedcheckUpdateFunction);
    
//自动禁用任何未连接到根块的块
workspace.addChangeListener(Blockly.Events.disableOrphans);


// debugFunctions
function showXML() {
    xml = Blockly.Xml.workspaceToDom(workspace);
    xml_text = Blockly.Xml.domToPrettyText(xml);
    console.log(xml_text);
    xml_text = Blockly.Xml.domToText(xml);
    console.log(xml_text);
    console.log(xml);
}

function runCode() {
    // Generate JavaScript code and run it.
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval('obj=' + code);
        console.log(obj);
    } catch (e) {
        alert(e);
    }
}

    window.buildBlocks&&window.buildBlocks()
    