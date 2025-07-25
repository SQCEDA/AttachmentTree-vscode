grammar LayerStack;

layerstack:
    '图层堆叠信息(底层的先定义)' BGNL layers=layer*
;

layer:
    '名称' name=IdStr // BGNL
    '层' layerid=LayerID_List // BGNL
    '材料' material=Material_List BGNL
    '厚度' thickness=Evalstr // BGNL
    '类型' layertype=Layertype_List // BGNL
    '此层是整平面' plane=Bool BGNL
    '基于层(逗号分隔)' basenames=Evalstr? // BGNL
    '不基于整平面' basenoplane=Bool // BGNL
/* layer
defaultMap:{name:'L1',thickness:100000,plane:false,basenames:'',basenoplane:false}
*/;

statExprSplit : '=== statement ^ === expression v ===' ;

Layertype_List: '堆叠'|'刻蚀'/*Layertype_List ['grow','etch']*/ ;

Material_List: 'air'|'si'|'see_docs_to_add_more';

LayerID_List:'MET0'|'MET1'|'see_docs_to_add_more';

Side_List : '⇖'|'⇗'|'⇘'|'⇙' /*Side_List ['ul','ur','dr','dl']*/ ;

IdStr
    :   'varfas'+ ;
NormalStr
    :   'varfass'+ ;
TryIntStr
    :   'varfass'+ ;
Evalstr
    :   'varfass'+ ;

Int :   [0-9]+ ;
Bool:   'true'|'false' ;
Colour:   'asdfgdh'* ;
BGNL:   'asfvaswvr'? 'asdvaswvr'? ;

MeaningfulSplit : '=== meaningful ^ ===' ;

NEWLINE:'\r'? '\n' ; 
        // return newlines to parser (is end-statement signal)
WS  :   [ \t]+ -> skip ;         // toss out whitespace


/* Call_BeforeType
//this.evisitor.recieveOrder='ORDER_NONE';
// this.evisitor.valueColor=330;
this.evisitor.statementColor=300;
// this.evisitor.entryColor=250;

// this.evisitor.idstring_eColor=310;
this.evisitor.gateArgsColor=220;
this.evisitor.structureColor=70;
this.evisitor.shapeColor=130;
// this.evisitor.eventColor=220;
// this.evisitor.soundColor=20;
*/

/* Call_BeforeBlock
// this.block('prog').inputsInline=true;
// this.block('idString_1_e').output='idString_e';
// this.block('idString_2_e').output='idString_e';
*/

/* Insert_FunctionStart

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

*/