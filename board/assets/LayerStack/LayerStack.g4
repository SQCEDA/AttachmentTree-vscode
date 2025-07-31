grammar LayerStack;

layerstack:
    '变量定义' BGNL define=lsvariables+ '图层堆叠信息(底片放上面)' BGNL groups=layergroup+
;

lsvariables
    :   'id' id=IdStr 'default' value=Evalstr 'description' description=NormalStr? #lsvariable
/* lsvariable
defaultMap : {id:'h1',value:50000,description:''}
colour : 20
*/
    |   'none' #lsvariablenone
/* lsvariablenone
colour : 20
*/
;

layergroup:
    '单片(底层的先定义)' // BGNL
    '上接触面名称' uptouchlayer=IdStr? '下接触面名称' downtouchlayer=IdStr? '片反置' reverse=Bool BGNL 
    layers=layerlevel+
/* layergroup
color:220
defaultMap:{uptouchlayer:'',downtouchlayer:'',reverse:false}
*/;

layerlevel:
    '名称' name=IdStr // BGNL
    '层' layerid=LayerID_List // BGNL
    '材料' material=Material_List // BGNL
    '厚度' thickness=Evalstr // BGNL
    '倾角' angle=Evalstr BGNL
    '类型' layertype=Layertype_List // BGNL
    '此层是整平面' plane=Bool // BGNL
    '基于层(逗号分隔)' basenames=NormalStr? // BGNL
    '不基于整平面' basenoplane=Bool// BGNL
    //meta=layermeta*
/* layerlevel
color:70
defaultMap:{name:'L1',thickness:100000,angle:0,plane:false,basenames:'',basenoplane:false}
*/;

layermeta
    :   'no meta' #layermetanone
    |   '注释' comment=NormalStr? #layermetacomment
/* layermetacomment
defaultMap:{comment:''}
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