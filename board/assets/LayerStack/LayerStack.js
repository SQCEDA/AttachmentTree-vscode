// Generated from LayerStack.g4 by antlr-blockly
// 语句集合和表达式集合
LayerStackBlocks = {
    "lsvariables": [
        "lsvariable",
        "lsvariablenone"
    ],
    "layermeta": [
        "layermetanone",
        "layermetacomment"
    ]
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
            "message0": "变量定义 %1 %2 图层堆叠信息(底片放上面) %3 %4",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "define",
                    "check": LayerStackBlocks.lsvariables
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "groups",
                    "check": "layergroup"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var define = Blockly.JavaScript.statementToCode(block, 'define');
            if (define==='') {
                throw new OmitedError(block,'define','layerstack');
            }
            var groups = Blockly.JavaScript.statementToCode(block, 'groups');
            if (groups==='') {
                throw new OmitedError(block,'groups','layerstack');
            }
            var code = LayerStackFunctions.defaultCode('layerstack',eval('['+LayerStackBlocks['layerstack'].args.join(',')+']'),block);
            return code;
        },
        "args": ["define","groups"],
        "argsType": ["statement","statement"],
        "argsGrammarName": ["lsvariables","layergroup"],
        "omitted": [false,false],
        "multi": [true,true],
        "fieldDefault": function (keyOrIndex) {
            return LayerStackFunctions.fieldDefault('layerstack',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return LayerStackFunctions.xmlText('layerstack',inputs,next,isShadow,comment,attribute);
        }
    },
    "lsvariable": {
        "type": "statement",
        "json": {
            "type": "lsvariable",
            "message0": "id %1 default %2 description %3",
            "args0": [
                Object.assign({},LayerStackBlocks.IdStr,{
                    "name": "id",
                    "text": "h1"
                }),
                Object.assign({},LayerStackBlocks.Evalstr,{
                    "name": "value",
                    "text": 50000
                }),
                Object.assign({},LayerStackBlocks.NormalStr,{
                    "name": "description",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "lsvariable",
            "nextStatement": LayerStackBlocks.lsvariables
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','lsvariable');
            }
            id = LayerStackFunctions.pre('IdStr')(id,block,'id','lsvariable');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','lsvariable');
            }
            value = LayerStackFunctions.pre('Evalstr')(value,block,'value','lsvariable');
            var description = block.getFieldValue('description');
            description = LayerStackFunctions.pre('NormalStr')(description,block,'description','lsvariable');
            var code = LayerStackFunctions.defaultCode('lsvariable',eval('['+LayerStackBlocks['lsvariable'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value","description"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","NormalStr"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return LayerStackFunctions.fieldDefault('lsvariable',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return LayerStackFunctions.xmlText('lsvariable',inputs,next,isShadow,comment,attribute);
        }
    },
    "lsvariablenone": {
        "type": "statement",
        "json": {
            "type": "lsvariablenone",
            "message0": "none",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "lsvariablenone",
            "nextStatement": LayerStackBlocks.lsvariables
        },
        "generFunc": function(block) {
            var code = LayerStackFunctions.defaultCode('lsvariablenone',eval('['+LayerStackBlocks['lsvariablenone'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return LayerStackFunctions.fieldDefault('lsvariablenone',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return LayerStackFunctions.xmlText('lsvariablenone',inputs,next,isShadow,comment,attribute);
        }
    },
    "layergroup": {
        "type": "statement",
        "json": {
            "type": "layergroup",
            "message0": "单片(底层的先定义) 上接触面名称 %1 下接触面名称 %2 片反置 %3 %4 %5",
            "args0": [
                Object.assign({},LayerStackBlocks.IdStr,{
                    "name": "uptouchlayer",
                    "text": ""
                }),
                Object.assign({},LayerStackBlocks.IdStr,{
                    "name": "downtouchlayer",
                    "text": ""
                }),
                Object.assign({},LayerStackBlocks.Bool,{
                    "name": "reverse",
                    "checked": false
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "layers",
                    "check": "layerlevel"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "layergroup",
            "nextStatement": "layergroup"
        },
        "generFunc": function(block) {
            var uptouchlayer = block.getFieldValue('uptouchlayer');
            uptouchlayer = LayerStackFunctions.pre('IdStr')(uptouchlayer,block,'uptouchlayer','layergroup');
            var downtouchlayer = block.getFieldValue('downtouchlayer');
            downtouchlayer = LayerStackFunctions.pre('IdStr')(downtouchlayer,block,'downtouchlayer','layergroup');
            var reverse = block.getFieldValue('reverse') === 'TRUE';
            reverse = LayerStackFunctions.pre('Bool')(reverse,block,'reverse','layergroup');
            var layers = Blockly.JavaScript.statementToCode(block, 'layers');
            if (layers==='') {
                throw new OmitedError(block,'layers','layergroup');
            }
            var code = LayerStackFunctions.defaultCode('layergroup',eval('['+LayerStackBlocks['layergroup'].args.join(',')+']'),block);
            return code;
        },
        "args": ["uptouchlayer","downtouchlayer","reverse","layers"],
        "argsType": ["field","field","field","statement"],
        "argsGrammarName": ["IdStr","IdStr","Bool","layerlevel"],
        "omitted": [true,true,false,false],
        "multi": [false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return LayerStackFunctions.fieldDefault('layergroup',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return LayerStackFunctions.xmlText('layergroup',inputs,next,isShadow,comment,attribute);
        }
    },
    "layerlevel": {
        "type": "statement",
        "json": {
            "type": "layerlevel",
            "message0": "名称 %1 层 %2 材料 %3 厚度 %4 倾角 %5 %6 类型 %7 此层是整平面 %8 基于层(逗号分隔) %9 不基于整平面 %10",
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
                Object.assign({},LayerStackBlocks.Evalstr,{
                    "name": "thickness",
                    "text": 100000
                }),
                Object.assign({},LayerStackBlocks.Evalstr,{
                    "name": "angle",
                    "text": 0
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},LayerStackBlocks.Layertype_List,{
                    "name": "layertype"
                }),
                Object.assign({},LayerStackBlocks.Bool,{
                    "name": "plane",
                    "checked": false
                }),
                Object.assign({},LayerStackBlocks.NormalStr,{
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
            "colour": 70,
            "previousStatement": "layerlevel",
            "nextStatement": "layerlevel"
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','layerlevel');
            }
            name = LayerStackFunctions.pre('IdStr')(name,block,'name','layerlevel');
            var layerid = block.getFieldValue('layerid');
            layerid = LayerStackFunctions.pre('LayerID_List')(layerid,block,'layerid','layerlevel');
            var material = block.getFieldValue('material');
            material = LayerStackFunctions.pre('Material_List')(material,block,'material','layerlevel');
            var thickness = block.getFieldValue('thickness');
            if (thickness==='') {
                throw new OmitedError(block,'thickness','layerlevel');
            }
            thickness = LayerStackFunctions.pre('Evalstr')(thickness,block,'thickness','layerlevel');
            var angle = block.getFieldValue('angle');
            if (angle==='') {
                throw new OmitedError(block,'angle','layerlevel');
            }
            angle = LayerStackFunctions.pre('Evalstr')(angle,block,'angle','layerlevel');
            var layertype = block.getFieldValue('layertype');
            layertype = LayerStackFunctions.pre('Layertype_List')(layertype,block,'layertype','layerlevel');
            var plane = block.getFieldValue('plane') === 'TRUE';
            plane = LayerStackFunctions.pre('Bool')(plane,block,'plane','layerlevel');
            var basenames = block.getFieldValue('basenames');
            basenames = LayerStackFunctions.pre('NormalStr')(basenames,block,'basenames','layerlevel');
            var basenoplane = block.getFieldValue('basenoplane') === 'TRUE';
            basenoplane = LayerStackFunctions.pre('Bool')(basenoplane,block,'basenoplane','layerlevel');
            var code = LayerStackFunctions.defaultCode('layerlevel',eval('['+LayerStackBlocks['layerlevel'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","layerid","material","thickness","angle","layertype","plane","basenames","basenoplane"],
        "argsType": ["field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["IdStr","LayerID_List","Material_List","Evalstr","Evalstr","Layertype_List","Bool","NormalStr","Bool"],
        "omitted": [false,false,false,false,false,false,false,true,false],
        "multi": [false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return LayerStackFunctions.fieldDefault('layerlevel',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return LayerStackFunctions.xmlText('layerlevel',inputs,next,isShadow,comment,attribute);
        }
    },
    "layermetanone": {
        "type": "statement",
        "json": {
            "type": "layermetanone",
            "message0": "no meta",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "layermetanone",
            "nextStatement": LayerStackBlocks.layermeta
        },
        "generFunc": function(block) {
            var code = LayerStackFunctions.defaultCode('layermetanone',eval('['+LayerStackBlocks['layermetanone'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return LayerStackFunctions.fieldDefault('layermetanone',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return LayerStackFunctions.xmlText('layermetanone',inputs,next,isShadow,comment,attribute);
        }
    },
    "layermetacomment": {
        "type": "statement",
        "json": {
            "type": "layermetacomment",
            "message0": "注释 %1",
            "args0": [
                Object.assign({},LayerStackBlocks.NormalStr,{
                    "name": "comment",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "layermetacomment",
            "nextStatement": LayerStackBlocks.layermeta
        },
        "generFunc": function(block) {
            var comment = block.getFieldValue('comment');
            comment = LayerStackFunctions.pre('NormalStr')(comment,block,'comment','layermetacomment');
            var code = LayerStackFunctions.defaultCode('layermetacomment',eval('['+LayerStackBlocks['layermetacomment'].args.join(',')+']'),block);
            return code;
        },
        "args": ["comment"],
        "argsType": ["field"],
        "argsGrammarName": ["NormalStr"],
        "omitted": [true],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return LayerStackFunctions.fieldDefault('layermetacomment',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return LayerStackFunctions.xmlText('layermetacomment',inputs,next,isShadow,comment,attribute);
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
            LayerStackBlocks["lsvariable"].xmlText(),
            LayerStackBlocks["lsvariablenone"].xmlText(),
            LayerStackBlocks["layergroup"].xmlText(),
            LayerStackBlocks["layerlevel"].xmlText(),
            LayerStackBlocks["layermetanone"].xmlText(),
            LayerStackBlocks["layermetacomment"].xmlText(),
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
    