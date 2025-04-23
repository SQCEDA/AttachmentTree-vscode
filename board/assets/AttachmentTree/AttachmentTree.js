// Generated from AttachmentTree.g4 by antlr-blockly
// 语句集合和表达式集合
AttachmentTreeBlocks = {
    "variables": [
        "variable",
        "innervariable",
        "variablenone"
    ],
    "attachments": [
        "attachment",
        "attachmentnone"
    ],
    "structures": [
        "structure",
        "structurefrompts",
        "structurenone"
    ],
    "shapes": [
        "brush",
        "arc",
        "quadrilateral",
        "quadrilateraldagger",
        "triangle",
        "rectangle"
    ]
}


// 所有域的默认行为
Object.assign(AttachmentTreeBlocks,{
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


// 所有方块的实际内容
Object.assign(AttachmentTreeBlocks,{
    "attachmentTree": {
        "type": "statement",
        "json": {
            "type": "attachmentTree",
            "message0": "define %1 %2 leaves %3 %4",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "define",
                    "check": AttachmentTreeBlocks.variables
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "structure",
                    "check": AttachmentTreeBlocks.structures
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var define = Blockly.JavaScript.statementToCode(block, 'define');
            var structure = Blockly.JavaScript.statementToCode(block, 'structure');
            var code = AttachmentTreeFunctions.defaultCode('attachmentTree',eval('['+AttachmentTreeBlocks['attachmentTree'].args.join(',')+']'),block);
            return code;
        },
        "args": ["define","structure"],
        "argsType": ["statement","statement"],
        "argsGrammarName": ["variables","structures"],
        "omitted": [true,true],
        "multi": [true,true],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('attachmentTree',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('attachmentTree',inputs,next,isShadow,comment,attribute);
        }
    },
    "variable": {
        "type": "statement",
        "json": {
            "type": "variable",
            "message0": "id %1 default %2 description %3",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.IdStr,{
                    "name": "id",
                    "text": "armlength"
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "value",
                    "text": 50000
                }),
                Object.assign({},AttachmentTreeBlocks.NormalStr,{
                    "name": "description",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "variable",
            "nextStatement": AttachmentTreeBlocks.variables
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','variable');
            }
            id = AttachmentTreeFunctions.pre('IdStr')(id,block,'id','variable');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','variable');
            }
            value = AttachmentTreeFunctions.pre('Evalstr')(value,block,'value','variable');
            var description = block.getFieldValue('description');
            description = AttachmentTreeFunctions.pre('NormalStr')(description,block,'description','variable');
            var code = AttachmentTreeFunctions.defaultCode('variable',eval('['+AttachmentTreeBlocks['variable'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value","description"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","NormalStr"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('variable',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('variable',inputs,next,isShadow,comment,attribute);
        }
    },
    "innervariable": {
        "type": "statement",
        "json": {
            "type": "innervariable",
            "message0": "id %1 rule %2",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.IdStr,{
                    "name": "id",
                    "text": "armlengthtwice"
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "value",
                    "text": "armlength*2"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "innervariable",
            "nextStatement": AttachmentTreeBlocks.variables
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','innervariable');
            }
            id = AttachmentTreeFunctions.pre('IdStr')(id,block,'id','innervariable');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','innervariable');
            }
            value = AttachmentTreeFunctions.pre('Evalstr')(value,block,'value','innervariable');
            var code = AttachmentTreeFunctions.defaultCode('innervariable',eval('['+AttachmentTreeBlocks['innervariable'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value"],
        "argsType": ["field","field"],
        "argsGrammarName": ["IdStr","Evalstr"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('innervariable',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('innervariable',inputs,next,isShadow,comment,attribute);
        }
    },
    "variablenone": {
        "type": "statement",
        "json": {
            "type": "variablenone",
            "message0": "none",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "variablenone",
            "nextStatement": AttachmentTreeBlocks.variables
        },
        "generFunc": function(block) {
            var code = AttachmentTreeFunctions.defaultCode('variablenone',eval('['+AttachmentTreeBlocks['variablenone'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('variablenone',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('variablenone',inputs,next,isShadow,comment,attribute);
        }
    },
    "attachment": {
        "type": "statement",
        "json": {
            "type": "attachment",
            "message0": "%1 %2 %3",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.Side_List,{
                    "name": "side"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "structure",
                    "check": AttachmentTreeBlocks.structures
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "attachment",
            "nextStatement": AttachmentTreeBlocks.attachments
        },
        "generFunc": function(block) {
            var side = block.getFieldValue('side');
            side = AttachmentTreeFunctions.pre('Side_List')(side,block,'side','attachment');
            var structure = Blockly.JavaScript.statementToCode(block, 'structure');
            var code = AttachmentTreeFunctions.defaultCode('attachment',eval('['+AttachmentTreeBlocks['attachment'].args.join(',')+']'),block);
            return code;
        },
        "args": ["side","structure"],
        "argsType": ["field","statement"],
        "argsGrammarName": ["Side_List","structures"],
        "omitted": [false,true],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('attachment',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('attachment',inputs,next,isShadow,comment,attribute);
        }
    },
    "attachmentnone": {
        "type": "statement",
        "json": {
            "type": "attachmentnone",
            "message0": "none",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "attachmentnone",
            "nextStatement": AttachmentTreeBlocks.attachments
        },
        "generFunc": function(block) {
            var code = AttachmentTreeFunctions.defaultCode('attachmentnone',eval('['+AttachmentTreeBlocks['attachmentnone'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('attachmentnone',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('attachmentnone',inputs,next,isShadow,comment,attribute);
        }
    },
    "structure": {
        "type": "statement",
        "json": {
            "type": "structure",
            "message0": "%1 collection %2 width %3 height %4 %5 %6 leaves %7 %8",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.Side_List,{
                    "name": "side"
                }),
                Object.assign({},AttachmentTreeBlocks.NormalStr,{
                    "name": "collection",
                    "text": "0"
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "width",
                    "text": 50000
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "height",
                    "text": 50000
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "shape",
                    "check": AttachmentTreeBlocks.shapes
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "attachment",
                    "check": AttachmentTreeBlocks.attachments
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "structure",
            "nextStatement": AttachmentTreeBlocks.structures
        },
        "generFunc": function(block) {
            var side = block.getFieldValue('side');
            side = AttachmentTreeFunctions.pre('Side_List')(side,block,'side','structure');
            var collection = block.getFieldValue('collection');
            if (collection==='') {
                throw new OmitedError(block,'collection','structure');
            }
            collection = AttachmentTreeFunctions.pre('NormalStr')(collection,block,'collection','structure');
            var width = block.getFieldValue('width');
            if (width==='') {
                throw new OmitedError(block,'width','structure');
            }
            width = AttachmentTreeFunctions.pre('Evalstr')(width,block,'width','structure');
            var height = block.getFieldValue('height');
            if (height==='') {
                throw new OmitedError(block,'height','structure');
            }
            height = AttachmentTreeFunctions.pre('Evalstr')(height,block,'height','structure');
            var shape = Blockly.JavaScript.statementToCode(block, 'shape');
            if(block.getInputTargetBlock('shape') && 
                block.getInputTargetBlock('shape').getNextBlock())
                throw new MultiStatementError(block,'shape','structure');
            if (shape==='') {
                throw new OmitedError(block,'shape','structure');
            }
            var attachment = Blockly.JavaScript.statementToCode(block, 'attachment');
            var code = AttachmentTreeFunctions.defaultCode('structure',eval('['+AttachmentTreeBlocks['structure'].args.join(',')+']'),block);
            return code;
        },
        "args": ["side","collection","width","height","shape","attachment"],
        "argsType": ["field","field","field","field","statement","statement"],
        "argsGrammarName": ["Side_List","NormalStr","Evalstr","Evalstr","shapes","attachments"],
        "omitted": [false,false,false,false,false,true],
        "multi": [false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('structure',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('structure',inputs,next,isShadow,comment,attribute);
        }
    },
    "structurefrompts": {
        "type": "statement",
        "json": {
            "type": "structurefrompts",
            "message0": "collection %1 scale %2 absolute/relative (☑/☐) %3 %4 points %5 leaves %6 %7",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.NormalStr,{
                    "name": "collection",
                    "text": "0"
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "scale",
                    "text": 1000
                }),
                Object.assign({},AttachmentTreeBlocks.Bool,{
                    "name": "absolute",
                    "checked": true
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},AttachmentTreeBlocks.NormalStr,{
                    "name": "points",
                    "text": "0 0 100 0 200 200"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "attachment",
                    "check": AttachmentTreeBlocks.attachments
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "structurefrompts",
            "nextStatement": AttachmentTreeBlocks.structures
        },
        "generFunc": function(block) {
            var collection = block.getFieldValue('collection');
            if (collection==='') {
                throw new OmitedError(block,'collection','structurefrompts');
            }
            collection = AttachmentTreeFunctions.pre('NormalStr')(collection,block,'collection','structurefrompts');
            var scale = block.getFieldValue('scale');
            if (scale==='') {
                throw new OmitedError(block,'scale','structurefrompts');
            }
            scale = AttachmentTreeFunctions.pre('Evalstr')(scale,block,'scale','structurefrompts');
            var absolute = block.getFieldValue('absolute') === 'TRUE';
            absolute = AttachmentTreeFunctions.pre('Bool')(absolute,block,'absolute','structurefrompts');
            var points = block.getFieldValue('points');
            if (points==='') {
                throw new OmitedError(block,'points','structurefrompts');
            }
            points = AttachmentTreeFunctions.pre('NormalStr')(points,block,'points','structurefrompts');
            var attachment = Blockly.JavaScript.statementToCode(block, 'attachment');
            var code = AttachmentTreeFunctions.defaultCode('structurefrompts',eval('['+AttachmentTreeBlocks['structurefrompts'].args.join(',')+']'),block);
            return code;
        },
        "args": ["collection","scale","absolute","points","attachment"],
        "argsType": ["field","field","field","field","statement"],
        "argsGrammarName": ["NormalStr","Evalstr","Bool","NormalStr","attachments"],
        "omitted": [false,false,false,false,true],
        "multi": [false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('structurefrompts',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('structurefrompts',inputs,next,isShadow,comment,attribute);
        }
    },
    "structurenone": {
        "type": "statement",
        "json": {
            "type": "structurenone",
            "message0": "none",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "structurenone",
            "nextStatement": AttachmentTreeBlocks.structures
        },
        "generFunc": function(block) {
            var code = AttachmentTreeFunctions.defaultCode('structurenone',eval('['+AttachmentTreeBlocks['structurenone'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('structurenone',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('structurenone',inputs,next,isShadow,comment,attribute);
        }
    },
    "brush": {
        "type": "statement",
        "json": {
            "type": "brush",
            "message0": "brush (id,angle,widout,widin) %1 %2 %3 %4",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.IdStr,{
                    "name": "brushid",
                    "text": "brush1"
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "angle",
                    "text": 0
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "widout",
                    "text": 8000
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "widin",
                    "text": 4000
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "brush",
            "nextStatement": AttachmentTreeBlocks.shapes
        },
        "generFunc": function(block) {
            var brushid = block.getFieldValue('brushid');
            if (brushid==='') {
                throw new OmitedError(block,'brushid','brush');
            }
            brushid = AttachmentTreeFunctions.pre('IdStr')(brushid,block,'brushid','brush');
            var angle = block.getFieldValue('angle');
            if (angle==='') {
                throw new OmitedError(block,'angle','brush');
            }
            angle = AttachmentTreeFunctions.pre('Evalstr')(angle,block,'angle','brush');
            var widout = block.getFieldValue('widout');
            if (widout==='') {
                throw new OmitedError(block,'widout','brush');
            }
            widout = AttachmentTreeFunctions.pre('Evalstr')(widout,block,'widout','brush');
            var widin = block.getFieldValue('widin');
            if (widin==='') {
                throw new OmitedError(block,'widin','brush');
            }
            widin = AttachmentTreeFunctions.pre('Evalstr')(widin,block,'widin','brush');
            var code = AttachmentTreeFunctions.defaultCode('brush',eval('['+AttachmentTreeBlocks['brush'].args.join(',')+']'),block);
            return code;
        },
        "args": ["brushid","angle","widout","widin"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","Evalstr","Evalstr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('brush',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('brush',inputs,next,isShadow,comment,attribute);
        }
    },
    "arc": {
        "type": "statement",
        "json": {
            "type": "arc",
            "message0": "◔ %1",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.Side_List,{
                    "name": "side"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "arc",
            "nextStatement": AttachmentTreeBlocks.shapes
        },
        "generFunc": function(block) {
            var side = block.getFieldValue('side');
            side = AttachmentTreeFunctions.pre('Side_List')(side,block,'side','arc');
            var code = AttachmentTreeFunctions.defaultCode('arc',eval('['+AttachmentTreeBlocks['arc'].args.join(',')+']'),block);
            return code;
        },
        "args": ["side"],
        "argsType": ["field"],
        "argsGrammarName": ["Side_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('arc',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('arc',inputs,next,isShadow,comment,attribute);
        }
    },
    "quadrilateral": {
        "type": "statement",
        "json": {
            "type": "quadrilateral",
            "message0": "▱ (t→,r↓,d←,l↑) %1 %2 %3 %4",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "ul",
                    "text": 0
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "ur",
                    "text": 0
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "dr",
                    "text": 0
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "dl",
                    "text": 0
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "quadrilateral",
            "nextStatement": AttachmentTreeBlocks.shapes
        },
        "generFunc": function(block) {
            var ul = block.getFieldValue('ul');
            if (ul==='') {
                throw new OmitedError(block,'ul','quadrilateral');
            }
            ul = AttachmentTreeFunctions.pre('Evalstr')(ul,block,'ul','quadrilateral');
            var ur = block.getFieldValue('ur');
            if (ur==='') {
                throw new OmitedError(block,'ur','quadrilateral');
            }
            ur = AttachmentTreeFunctions.pre('Evalstr')(ur,block,'ur','quadrilateral');
            var dr = block.getFieldValue('dr');
            if (dr==='') {
                throw new OmitedError(block,'dr','quadrilateral');
            }
            dr = AttachmentTreeFunctions.pre('Evalstr')(dr,block,'dr','quadrilateral');
            var dl = block.getFieldValue('dl');
            if (dl==='') {
                throw new OmitedError(block,'dl','quadrilateral');
            }
            dl = AttachmentTreeFunctions.pre('Evalstr')(dl,block,'dl','quadrilateral');
            var code = AttachmentTreeFunctions.defaultCode('quadrilateral',eval('['+AttachmentTreeBlocks['quadrilateral'].args.join(',')+']'),block);
            return code;
        },
        "args": ["ul","ur","dr","dl"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Evalstr","Evalstr","Evalstr","Evalstr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('quadrilateral',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('quadrilateral',inputs,next,isShadow,comment,attribute);
        }
    },
    "quadrilateraldagger": {
        "type": "statement",
        "json": {
            "type": "quadrilateraldagger",
            "message0": "▱ (t←,r↑,d→,l↓) %1 %2 %3 %4",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "ur",
                    "text": 0
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "dr",
                    "text": 0
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "dl",
                    "text": 0
                }),
                Object.assign({},AttachmentTreeBlocks.Evalstr,{
                    "name": "ul",
                    "text": 0
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "quadrilateraldagger",
            "nextStatement": AttachmentTreeBlocks.shapes
        },
        "generFunc": function(block) {
            var ur = block.getFieldValue('ur');
            if (ur==='') {
                throw new OmitedError(block,'ur','quadrilateraldagger');
            }
            ur = AttachmentTreeFunctions.pre('Evalstr')(ur,block,'ur','quadrilateraldagger');
            var dr = block.getFieldValue('dr');
            if (dr==='') {
                throw new OmitedError(block,'dr','quadrilateraldagger');
            }
            dr = AttachmentTreeFunctions.pre('Evalstr')(dr,block,'dr','quadrilateraldagger');
            var dl = block.getFieldValue('dl');
            if (dl==='') {
                throw new OmitedError(block,'dl','quadrilateraldagger');
            }
            dl = AttachmentTreeFunctions.pre('Evalstr')(dl,block,'dl','quadrilateraldagger');
            var ul = block.getFieldValue('ul');
            if (ul==='') {
                throw new OmitedError(block,'ul','quadrilateraldagger');
            }
            ul = AttachmentTreeFunctions.pre('Evalstr')(ul,block,'ul','quadrilateraldagger');
            var code = AttachmentTreeFunctions.defaultCode('quadrilateraldagger',eval('['+AttachmentTreeBlocks['quadrilateraldagger'].args.join(',')+']'),block);
            return code;
        },
        "args": ["ur","dr","dl","ul"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Evalstr","Evalstr","Evalstr","Evalstr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('quadrilateraldagger',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('quadrilateraldagger',inputs,next,isShadow,comment,attribute);
        }
    },
    "triangle": {
        "type": "statement",
        "json": {
            "type": "triangle",
            "message0": "◺ %1",
            "args0": [
                Object.assign({},AttachmentTreeBlocks.Side_List,{
                    "name": "side"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "triangle",
            "nextStatement": AttachmentTreeBlocks.shapes
        },
        "generFunc": function(block) {
            var side = block.getFieldValue('side');
            side = AttachmentTreeFunctions.pre('Side_List')(side,block,'side','triangle');
            var code = AttachmentTreeFunctions.defaultCode('triangle',eval('['+AttachmentTreeBlocks['triangle'].args.join(',')+']'),block);
            return code;
        },
        "args": ["side"],
        "argsType": ["field"],
        "argsGrammarName": ["Side_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('triangle',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('triangle',inputs,next,isShadow,comment,attribute);
        }
    },
    "rectangle": {
        "type": "statement",
        "json": {
            "type": "rectangle",
            "message0": "▭",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "rectangle",
            "nextStatement": AttachmentTreeBlocks.shapes
        },
        "generFunc": function(block) {
            var code = AttachmentTreeFunctions.defaultCode('rectangle',eval('['+AttachmentTreeBlocks['rectangle'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return AttachmentTreeFunctions.fieldDefault('rectangle',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AttachmentTreeFunctions.xmlText('rectangle',inputs,next,isShadow,comment,attribute);
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


AttachmentTreeFunctions={}

AttachmentTreeFunctions.Evalstr_pre = function(str) {
    if (parseFloat(str)+''===str) {
        return parseFloat(str)
    } 
    return str;
}

AttachmentTreeFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

AttachmentTreeBlocks.shapes.forEach(blockname => {
    AttachmentTreeBlocks[blockname].json.nextStatement=undefined
})
AttachmentTreeFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

AttachmentTreeFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
AttachmentTreeFunctions.pre = function(LexerId) {
    if (AttachmentTreeFunctions.hasOwnProperty(LexerId+'_pre')) {
        return AttachmentTreeFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}



// AttachmentTreeFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
AttachmentTreeFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = AttachmentTreeBlocks[ruleName];
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



// AttachmentTreeFunctions.defaultCode_TEXT
AttachmentTreeFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = AttachmentTreeBlocks[ruleName];
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

AttachmentTreeFunctions.defaultCode_JSON_TYPE='type'

AttachmentTreeFunctions.parserPre={}
AttachmentTreeFunctions.parserPre.pre = function(LexerId) {
    if (AttachmentTreeFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return AttachmentTreeFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
AttachmentTreeFunctions.parserClass = function (params) {
}
AttachmentTreeFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[AttachmentTreeFunctions.defaultCode_JSON_TYPE]
    var rule = AttachmentTreeBlocks[blockType]
    if (AttachmentTreeFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = AttachmentTreeFunctions.parserPre[blockType+'_pre'](obj)
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
            input.push(AttachmentTreeFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
AttachmentTreeFunctions.parser=new AttachmentTreeFunctions.parserClass()
AttachmentTreeFunctions.parse=function(obj){
    var xml_text = AttachmentTreeFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    AttachmentTreeFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, AttachmentTreeFunctions.workspace());
}

// AttachmentTreeFunctions.defaultCode_JSON
AttachmentTreeFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = AttachmentTreeBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[AttachmentTreeFunctions.defaultCode_JSON_TYPE]=rule.json.type
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

// AttachmentTreeFunctions.defaultCode
AttachmentTreeFunctions.defaultCode=AttachmentTreeFunctions.defaultCode_JSON



// AttachmentTreeFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
AttachmentTreeFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = AttachmentTreeBlocks[ruleName];
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
        if(noinput && inputType==='field' && AttachmentTreeBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && AttachmentTreeBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = AttachmentTreeBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = AttachmentTreeBlocks[subrulename];
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



// AttachmentTreeFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
AttachmentTreeFunctions.blocksIniter = function(){
    var blocksobj = AttachmentTreeBlocks;
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
                var mixinName = 'contextMenu_AttachmentTree_'+value.json.type
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


AttachmentTreeFunctions.blocksIniter();


var toolbox = (function(){

    var toolboxXml=document.createElement('xml')

    // 调整这个obj来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
    var toolboxObj = {
        // 每个键值对作为一页
        "statement": [
            // 所有语句块
            AttachmentTreeBlocks["attachment"].xmlText([null,AttachmentTreeBlocks["structure"].xmlText()]),
            AttachmentTreeBlocks["brush"].xmlText(),
            AttachmentTreeBlocks["arc"].xmlText(),
            AttachmentTreeBlocks["quadrilateral"].xmlText(),
            AttachmentTreeBlocks["quadrilateraldagger"].xmlText(),
            AttachmentTreeBlocks["triangle"].xmlText(),
            AttachmentTreeBlocks["rectangle"].xmlText(),
            AttachmentTreeBlocks["attachmentTree"].xmlText([AttachmentTreeBlocks["variable"].xmlText(),AttachmentTreeBlocks["structure"].xmlText()]),
            //
            // AttachmentTreeBlocks["attachmentTree"].xmlText(),
            AttachmentTreeBlocks["variable"].xmlText(),
            AttachmentTreeBlocks["innervariable"].xmlText(),
            AttachmentTreeBlocks["structurefrompts"].xmlText(),
            // AttachmentTreeBlocks["variablenone"].xmlText(),
            AttachmentTreeBlocks["attachment"].xmlText(),
            // AttachmentTreeBlocks["attachmentnone"].xmlText(),
            AttachmentTreeBlocks["structure"].xmlText(),
            // AttachmentTreeBlocks["structurenone"].xmlText(),
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


    globalThis.blocklydivinitjson.toolbox=toolbox
    var workspace = Blockly.inject('blocklyDiv',globalThis.blocklydivinitjson);
    AttachmentTreeFunctions.workspace = function(){return workspace}
    
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
    