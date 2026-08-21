import{V as e,st as t,yt as n}from"./vnode-yr11NZ26.js";import{_ as r}from"./craft-service-BN1TCnUQ.js";import{t as i}from"./craft-use-o8lQjmyY.js";import{A as a,c as o,g as s,i as c,r as l,v as u}from"./hyperscript-LLgsElhq.js";import{b as d,r as f,s as p}from"./index-DcyLmPYS.js";var m=`:scope {
  display: block;
}

.pixel-art {
  max-width: 560px;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(145deg, #f8fafc, #e2e8f0);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
}

.pixel-art__header h1 {
  margin: 0;
  font-size: 1.4rem;
  color: #0f172a;
}

.pixel-art__header p {
  margin: 0.35rem 0 0;
  color: #334155;
}

.pixel-art__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  gap: 0.8rem;
}

.pixel-art__palette {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pixel-art__color {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #cbd5e1;
  border-radius: 999px;
  cursor: pointer;
}

.pixel-art__color.active {
  border-color: #0f172a;
  transform: scale(1.1);
}

.pixel-art__controls button {
  border: 0;
  border-radius: 8px;
  padding: 0.55rem 0.9rem;
  background: #0f172a;
  color: #f8fafc;
  font-weight: 600;
  cursor: pointer;
}

.pixel-art__stats {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  color: #334155;
  font-size: 0.95rem;
}

.pixel-art__grid {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.pixel-art__row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pixel-art__row-cells {
  display: flex;
  gap: 4px;
  flex-wrap: nowrap;
}

.pixel-art__cell {
  width: 24px;
  aspect-ratio: 1;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  cursor: pointer;
  touch-action: manipulation;
  transition: transform 120ms ease;
}

.pixel-art__cell:hover {
  transform: scale(1.08);
  z-index: 1;
}

.pixel-art__add-btn {
  border: 1px dashed #64748b;
  background: #ffffff;
  color: #0f172a;
  border-radius: 6px;
  width: 24px;
  height: 24px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}

.pixel-art__add-btn--row {
  align-self: flex-start;
  width: auto;
  height: auto;
  padding: 0.45rem 0.7rem;
}

/* Selectors used by the current matrix template. */
:scope {
  max-width: 620px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(145deg, #f8fafc, #e2e8f0);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
}

:scope > header h1 {
  margin: 0;
  font-size: 1.4rem;
  color: #0f172a;
}

:scope > header p {
  margin: 0.35rem 0 1rem;
  color: #334155;
}

:scope .matrix-palette {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

:scope .matrix-color {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  border: 2px solid #cbd5e1;
  border-radius: 999px;
  cursor: pointer;
}

:scope > button {
  padding: 0.55rem 0.9rem;
  border: 1px solid #64748b;
  border-radius: 6px;
  color: #0f172a;
  background: #fff;
  cursor: pointer;
}

:scope .matrix-grid {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 1rem 0;
  overflow-x: auto;
}

:scope .matrix-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

:scope .matrix-cell {
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  cursor: pointer;
  touch-action: manipulation;
  transition: transform 120ms ease;
}

:scope .matrix-row > button:last-child {
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 1px dashed #64748b;
  border-radius: 6px;
  color: #0f172a;
  background: #fff;
  font-weight: 700;
  cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
  :scope,
  :scope * {
    animation: none;
    transition: none;
  }
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
`,h=e(`longPress`,[`longPressDuration`,`onLongPress`],e=>{let i=e.injector.get(t),a=e.injector.get(n),o=null,s=!1,c=!1,l=()=>{o?.cancel(),o=null},u=()=>{let t=e.props.longPressDuration,n=typeof t==`function`?r(t,[],e.injector):t;return typeof n==`number`?n:450},d=t=>{l(),c=!1,s=!1,o=i.schedule(()=>{o=null,c=!0,s=!0;let n=e.props.onLongPress;typeof n==`function`&&r(n,[t],e.injector)},u(),{kind:`long-press`,owner:`longPress`,destroyRef:a})},f=e=>{!s&&!c||(e.preventDefault(),e.stopImmediatePropagation(),s=!1,c=!1)},p=e.renderer.listen(e.element,`pointerdown`,d),m=e.renderer.listen(e.element,`pointerup`,l),h=e.renderer.listen(e.element,`pointercancel`,l),g=e.renderer.listen(e.element,`pointerleave`,l);return e.element.addEventListener(`click`,f,!0),()=>{l(),p(),m(),h(),g(),e.element.removeEventListener(`click`,f,!0)}}),g=16,_=`#f8fafc`,v=[`#0f172a`,`#ef4444`,`#22c55e`,`#3b82f6`,`#eab308`],y=g**2,b=e=>e[0]?.id??e.length,x=()=>Array.from({length:g},(e,t)=>Array.from({length:g},(e,n)=>({id:t*g+n,color:_,count:0}))),S=a(`PixelArtMatrix`,{stylesUrl:m},function*(){let e=yield*d(`activeColor`,v[0],({set:e})=>({setColor:t=>e(t)}));return{activeColor:e,grid:yield*d(`grid`,x(),({set:t,update:n})=>({paint:(t,r)=>n(n=>n.map((n,a)=>a===t?n.map((t,n)=>n===r?{...t,color:t.color===i(e())?_:i(e()),count:t.count+1}:t):n)),paintRow:(e,t)=>n(n=>n.map((n,r)=>r===e?n.map(e=>({...e,color:t,count:e.count+1})):n)),paintColumn:(e,t)=>n(n=>n.map(n=>n.map((n,r)=>r===e?{...n,color:t,count:n.count+1}:n))),addRow:()=>n(e=>[...e,Array.from({length:e[0]?.length??g},()=>({id:y++,color:_,count:0}))]),addCell:e=>n(t=>t.map((t,n)=>n===e?[...t,{id:y++,color:_,count:0}]:t)),reset:()=>t(x())}))}},({activeColor:e,grid:t})=>u([o([p(`Pixel Art Workshop (Matrix)`),s(`2D matrix: click paints, right-click paints a row, long-press paints a column.`)]),c({class:`matrix-palette`},f(v,{track:e=>e},t=>l(`color`,{type:`button`,class:`matrix-color`,style:function*(){return{backgroundColor:yield*t()}},"aria-label":function*(){return`Color ${yield*t()}`},*click(){yield*e.setColor(yield*t())}}))),l(`reset`,{type:`button`,click:t.reset},`Reset`),c({class:`matrix-grid`},f(t,{track:b},(e,n)=>c({class:`matrix-row`},[f(e,{track:e=>e.id},(e,r)=>l(`cell`,{type:`button`,class:`matrix-cell`,style:function*(){return{backgroundColor:(yield*e()).color}},"aria-label":function*(){return`Cell ${n+1}, ${r+1}`},longPressDuration:450,*onLongPress(){yield*t.paintColumn(r,(yield*e()).color)},*click(){yield*t.paint(n,r)},*contextmenu(r){r.preventDefault(),yield*t.paintRow(n,(yield*e()).color)}}).pipe(h)),l(`addCell`,{type:`button`,*click(){yield*t.addCell(n)}},`+`)]))),l(`addRow`,{type:`button`,click:t.addRow},`Add row`)]));export{S as default};