/**
 * @class
 */
function walkerType(params) {
    
}

walkerType.prototype.viewbox='-100000 -100000 200000 200000'
walkerType.prototype.pointDistance=1000

walkerType.prototype.import=function (root) {
    this.loadvars(root.define)
    this.walk(root.structure)
    return this
}

walkerType.prototype.buildsvg=function (params) {
    let ret=[]
    let cnum=[0]
    for (const key in this.collection) {
        if (Object.hasOwnProperty.call(this.collection, key)) {
            const element = this.collection[key];
            ret.push(`<g class='c${cnum[0]} cn${key}'>`)
            cnum[0]+=1
            ret.push(element.join('\n'))
            ret.push('</g>')
        }
    }
    let svgstr=`<svg font-family="sans-serif" viewBox="${this.viewbox}" xmlns:xlink="http://www.w3.org/1999/xlink" text-decoration="none"
    font-style="normal" width="100%" xmlns="http://www.w3.org/2000/svg" font-size="1vw" version="1.1"
    font-weight="normal"><g>${ret.join('\n')}</g></svg>`
    this.svgstr=svgstr
    return svgstr
}

walkerType.prototype.loadvars=function (defineList) {
    this.vars={}
    defineList.forEach(element => {
        if (element.type=='variablenone') {
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

walkerType.prototype.addto=function (shape,collection) {
    this.collection[collection]=this.collection[collection]||[]
    this.collection[collection].push(shape)
}

walkerType.prototype.walk = function(structures){
    this.xx=0
    this.yy=0
    this.x1=0
    this.y1=0
    this.x2=0
    this.y2=0
    this.collection={}
    this.traversal([
        {
            "type": "attachment",
            "side": "ul",
            "structure": structures
        }
    ])
}

walkerType.prototype.traversal = function(attachments){
    let walker=this
    let pos=[walker.xx,walker.yy]

    attachments.forEach(attachment => {
        if (attachment.type!='attachment') {
            return
        }
        walker.xx = attachment.side[1]=='l'?walker.x1:walker.x2 
        walker.yy = attachment.side[0]=='d'?walker.y1:walker.y2 
        attachment.structure.forEach(structure =>{
            if (structure.type=='structurenone') {
                return
            }
            let pos12=[walker.x1,walker.y1,walker.x2,walker.y2]
            if (structure.type=='structure') {
                let width=walker.eval(structure.width)
                let height=walker.eval(structure.height)
    
                walker.x1=structure.side[1]=='l'?walker.xx-width:walker.xx
                walker.y1=structure.side[0]=='d'?walker.yy-height:walker.yy
                walker.x2=walker.x1+width
                walker.y2=walker.y1+height
    
                walker.buildshape(structure.shape,width,height,structure.collection)
            } else { // structure.type=='structurefrompts'
                let ptsstr=structure.points.split(/[\s,]+/g)
                let pts=[]
                walker.x1=walker.y1=Infinity
                walker.x2=walker.y2=-Infinity
                let scale=walker.eval(structure.scale)
                while (ptsstr.length) {
                    let xx=walker.xx+scale*walker.eval(ptsstr.shift())
                    let yy=walker.yy+scale*walker.eval(ptsstr.shift())
                    walker.x1=Math.min(walker.x1,xx)
                    walker.x2=Math.max(walker.x2,xx)
                    walker.y1=Math.min(walker.y1,yy)
                    walker.y2=Math.max(walker.y2,yy)
                    if (!structure.absolute) {
                        walker.xx=xx
                        walker.yy=yy
                    }
                    pts.push([xx,yy])
                }
                pts=pts.map(v=>'L'+v.join(','))
                pts[0]=' '+pts[0].slice(1)
                var sstr=`<path stroke="none" d="M${pts.join('')}Z" />`
                walker.addto(sstr,structure.collection)
            }

            walker.traversal(structure.attachment)
            
            ;[walker.x1,walker.y1,walker.x2,walker.y2]=pos12;
            
        })
    });

    [walker.xx,walker.yy]=pos
}

walkerType.prototype.buildshape = function(shape,width,height,collection){
    switch (shape.type) {
        case 'brush':
            var sstr=`<circle stroke="none" pointer-events="none" cy="${this.y1/2+this.y2/2}" cx="${this.x1/2+this.x2/2}" r="3000" fill="#555"></circle>`
            break;
        case 'arc':
            function arc(point0, r, n, angle0, angle1) {
                const angles = [];
                for (let x = 0; x < n; x++) {
                    const angle = angle0 + (x / (n - 1)) * (angle1 - angle0);
                    angles.push(angle);
                }
                return angles.map(angle => ({
                    x: point0.x + r * Math.cos(angle * Math.PI / 180),
                    y: point0.y + r * Math.sin(angle * Math.PI / 180)
                }));
            }
            function generateArcShape(shape, x1, y1, x2, y2, pointDistance) {
                let aa, bb, wbigger;
                if (width < height) {
                    aa = width;
                    bb = height;
                    wbigger = false;
                } else {
                    aa = height;
                    bb = width;
                    wbigger = true;
                }
                const radius = (Math.pow(bb, 2) / aa + aa) / 2;
                const angleDeg = Math.atan2(bb, radius - aa) * 180 / Math.PI;
                const sideMap = { ul: 0, ur: 1, dr: 2, dl: 3 };
                const ptsi = sideMap[shape.side];
                const cases = {
                    '0,true': [ {x: x1, y: y2}, {x: x1, y: y1 + radius}, -90, -90 + angleDeg ],
                    '1,true': [ {x: x2, y: y2}, {x: x2, y: y1 + radius}, -90, -90 - angleDeg ],
                    '2,true': [ {x: x2, y: y1}, {x: x2, y: y2 - radius}, 90, 90 + angleDeg ],
                    '3,true': [ {x: x1, y: y1}, {x: x1, y: y2 - radius}, 90, 90 - angleDeg ],
                    '0,false': [ {x: x1, y: y2}, {x: x2 - radius, y: y2}, 0, 0 - angleDeg ],
                    '1,false': [ {x: x2, y: y2}, {x: x1 + radius, y: y2}, 180, 180 + angleDeg ],
                    '2,false': [ {x: x2, y: y1}, {x: x1 + radius, y: y1}, 180, 180 - angleDeg ],
                    '3,false': [ {x: x1, y: y1}, {x: x2 - radius, y: y1}, 0, 0 + angleDeg ]
                };
                const key = `${ptsi},${wbigger}`;
                const [ptconner, ptcenter, angle0, angle1] = cases[key];
                const n = Math.ceil((radius * angleDeg * Math.PI / 180) / pointDistance) + 2;
                // console.log(n)
                const arcPoints = arc(ptcenter, radius, n, angle0, angle1);
                arcPoints.push(ptconner);
                return arcPoints;
            }
            var pts=generateArcShape(shape, this.x1, this.y1, this.x2, this.y2, this.pointDistance)
            pts=pts.map(v=>'L'+v.x+','+v.y)
            pts[0]=' '+pts[0].slice(1)
            var sstr=`<path stroke="none" d="M${pts.join('')}Z" />`
            // console.log(pts,sstr,this)
            break;
        case 'quadrilateral':
            var sstr=`<path stroke="none" d="M${this.x1+this.eval(shape.ul)},${this.y2}l${width-this.eval(shape.ul)},${-this.eval(shape.ur)}l${-this.eval(shape.dr)},${-height+this.eval(shape.ur)}l${-width+this.eval(shape.dr)},${this.eval(shape.dl)}Z" />`
            break;
        case 'quadrilateraldagger':
            var sstr=`<path stroke="none" d="M${this.x2-this.eval(shape.ur)},${this.y2}l${this.eval(shape.ur)},${this.eval(shape.dr)-height}l${this.eval(shape.dl)-width},${-this.eval(shape.dr)}l${-this.eval(shape.dl)},${height-this.eval(shape.ul)}Z" />`
            break;
        case 'triangle':
            var pts=[
                [this.x1,this.y2],
                [this.x2,this.y2],
                [this.x2,this.y1],
                [this.x1,this.y1],
                [this.x1,this.y2],
                [this.x2,this.y2],
                [this.x2,this.y1],
                [this.x1,this.y1],
                [this.x1,this.y2],
                [this.x2,this.y2],
                [this.x2,this.y1],
                [this.x1,this.y1],
            ]
            var ptsi=({"ul": 0, "ur": 1,"dr": 2,"dl":3}[shape.side])
            pts=pts.splice(ptsi+3,3).map(v=>'L'+v.join(','))
            pts[0]=' '+pts[0].slice(1)
            var sstr=`<path stroke="none" d="M${pts.join('')}Z" />`
            break;
    
        default:// 'rectangle'
            var sstr=`<path stroke="none" d="M${this.x1},${this.y2}l${width},0l0,${-height}l${-width},0Z" />`
            break;
    }
    if (shape._blockid) {
        var stoi=s=>'s'+new TextEncoder().encode(s).reduce((acc, val) => acc + val.toString(16).padStart(2, '0'), '')
        var itos=i=>new TextDecoder().decode(new Uint8Array(i.slice(1).match(/[\da-fA-F]{2}/gi).map(hex => parseInt(hex, 16))))
        sstr=`<g id="${stoi(shape._blockid)}" class="svgclickg">${sstr}</g>`
    }
    this.addto(sstr,collection)
}

var walker=new walkerType()
// walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));document.body.insertAdjacentHTML('beforeend',walker.buildsvg())
// walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg()
