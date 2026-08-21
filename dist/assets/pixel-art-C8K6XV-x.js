import{Ct as e,Lt as t,Nt as n,Vt as r,en as i,et as a,jt as o,mt as s,on as c,ot as l,rn as u,u as d,yt as f,zt as p}from"./vnode-yr11NZ26.js";import{E as m,S as h,g,u as _,v}from"./craft-service-BN1TCnUQ.js";import{n as y,o as b}from"./take-app-snapshot-Du5NoCLk.js";import{t as x}from"./craft-linked-signal-DVJMF5qy.js";import{i as S}from"./craft-primitive-registry-CTYlbaL8.js";import{n as C,t as w}from"./craft-unique-BfO_kqs5.js";import{t as T}from"./source_-S3eBChlE.js";import{r as E}from"./insert-typed-pipes-BG2TZ7r6.js";import{A as D,c as O,g as k,i as A,r as j,v as M,x as N}from"./hyperscript-LLgsElhq.js";import{D as P,O as F,b as I,r as L,s as R,v as z,y as B}from"./index-DcyLmPYS.js";function V(e){return u(e)?c(e)():e()}function H(e){return typeof e==`object`&&!!e&&`emit`in e&&typeof e.emit==`function`&&`subscribe`in e&&typeof e.subscribe==`function`}function U(e){return typeof e==`object`&&!!e&&`payload`in e&&`path`in e&&`leaf`in e&&Array.isArray(e.path)&&typeof e.leaf==`object`&&e.leaf!==null&&`item`in e.leaf&&`index`in e.leaf}var W=`insertSelect generators can only yield craftService dependencies or exposed dependency helpers.`,G=`insertSelect generators do not support onAppStart(...).`;function K(r,...c){return d=>{let{state:C,update:w,insertions:T,__primitiveKind:E=`state`}=d,D=o(y,{optional:!0}),O=_(o(e),`selectEntity:${r}`,[{provide:y,useValue:null}]),k=`select${P(r)}`,A=new Map,j=T??{},M=e=>{let t=V(C);if(Array.isArray(t))return t[e]},N=e=>{let r=A.get(e);if(r)return r;if(M(e)===void 0)return;let o=x({source:()=>M(e),computation:e=>e,injector:O}),d=_(O,`selectItem:${e}`),{rawInsertionsOutput:f,exposedInsertionsOutput:p}=c.reduce((r,c)=>{let f=t(d,()=>s()(c)),p={state:i(o,`state`,{primitive:`insertSelect`,path:`${name}.state`}),__primitiveKind:E,set:t=>m((w(n=>{if(!Array.isArray(n)||e<0||e>=n.length||!Number.isInteger(e))return n;let r=[...n];return r[e]=t,r}),t)),update:t=>m((()=>{let n=M(e);if(n===void 0)return;let r=t(n);return w(t=>{if(!Array.isArray(t)||e<0||e>=t.length||!Number.isInteger(e))return t;let n=[...t];return n[e]=r,n}),r})()),patch:t=>m((()=>{let n=M(e);if(n===void 0)return;let r={...n,...t(n)};return w(t=>{if(!Array.isArray(t)||e<0||e>=t.length||!Number.isInteger(e))return t;let n=[...t];return n[e]=r,n}),r})()),insertions:Object.entries(r.rawInsertionsOutput).reduce((e,[t,n])=>(H(n)&&(e[t]=n),e),{...j,...r.exposedInsertionsOutput})},h=f(p),y=a(h)?t(d,()=>l({iterator:h,injector:d,hostScope:`function`,invalidYieldErrorMessage:W,multipleAppStartErrorMessage:G,onAppStartNotSupportedErrorMessage:G}).value):h,b=Object.entries(y).reduce((e,[r,i])=>{if(F(i))return e;if(H(i)){let n=i,a=_(d,`source:${r}`),o=t(a,()=>s()(e=>n.emit(e)));return e[r]=g(e=>o(e),{injector:a,invalidYieldErrorMessage:W,multipleAppStartErrorMessage:G,onAppStartNotSupportedErrorMessage:G}),e}if(typeof i==`function`&&!n(i)&&!u(i)&&!v(i)){let n=_(d,`method:${r}`,[S(E,{...p,state:o},i)]),a=t(n,()=>s()(i));e[r]=g(a,{injector:n,invalidYieldErrorMessage:W,multipleAppStartErrorMessage:G,onAppStartNotSupportedErrorMessage:G})}else e[r]=i;return e},{});return{rawInsertionsOutput:{...r.rawInsertionsOutput,...y},exposedInsertionsOutput:{...r.exposedInsertionsOutput,...b}}},{rawInsertionsOutput:{},exposedInsertionsOutput:{}}),h=new Proxy(p,{get(e,t,n){if(Reflect.has(e,t))return Reflect.get(e,t,n);let r=o();if(!(!r||typeof r!=`object`))return Reflect.get(r,t)}});return A.set(e,h),h},I=()=>{let e=V(C);return Array.isArray(e)?e.reduce((e,t,n)=>{let r=N(n);return r!==void 0&&e.push(r),e},[]):[]},L=V(C);if(Array.isArray(L)&&L.length>0&&N(0),D){let e=o(f);D.trigger$.pipe(p(e)).subscribe(()=>{let e=V(C);if(!Array.isArray(e))return;let t=e.map((e,t)=>{let n=N(t);return b(n,e)});D.allInsertionSnapshot$.next({key:k,value:t})})}return{[k]:h(N),items:h(I)}}}function q(r,...c){return d=>{let{state:C,update:w,insertions:E,__primitiveKind:D=`state`}=d,O=o(y,{optional:!0}),k=_(o(e),`selectProperty:${r}`,[{provide:y,useValue:null}]),A,j=new Map,M=`select${P(r)}`,N=E??{},I=e=>{let t=j.get(e);if(t)return t;let n=T(e);return j.set(e,n),n},L=()=>{let e=V(C);if(!(!e||typeof e!=`object`))return e[r]},R=e=>(w(t=>!t||typeof t!=`object`?t:{...t,[r]:e}),e),z=e=>{let t=e(L());return R(t),t},B=()=>{if(A)return A;let e=x({source:L,computation:e=>e,injector:k}),{rawInsertionsOutput:o,exposedInsertionsOutput:d}=c.reduce((o,c)=>{let d=t(k,()=>s()(c)),f={state:i(e,`state`,{primitive:`insertSelect`,path:`${name}.state`}),__primitiveKind:D,set:e=>(R(e),m(e)),update:e=>m(z(e)),patch:e=>m(z(t=>({...t,...e(t)}))),insertions:Object.entries(o.rawInsertionsOutput).reduce((e,[t,n])=>(H(n)&&(e[t]=n),e),{...N,...o.exposedInsertionsOutput})},p=d(f),h=a(p)?t(k,()=>l({iterator:p,injector:k,hostScope:`function`,invalidYieldErrorMessage:W,multipleAppStartErrorMessage:G,onAppStartNotSupportedErrorMessage:G}).value):p,y=Object.entries(h).reduce((i,[a,o])=>{if(F(o))return i;if(H(o)){let e=o,n=I(a);e.subscribe(e=>{let t=L();if(U(e)){n.emit({payload:e.payload,path:[r,...e.path],leaf:e.leaf});return}n.emit({payload:e,path:[r],leaf:{item:t,index:r}})});let c=_(k,`source:${a}`),l=t(c,()=>s()(t=>e.emit(t)));return i[a]=g(e=>l(e),{injector:c,invalidYieldErrorMessage:W,multipleAppStartErrorMessage:G,onAppStartNotSupportedErrorMessage:G}),i}if(typeof o==`function`&&!n(o)&&!u(o)&&!v(o)){let n=_(k,`method:${a}`,[S(D,{...f,state:e},o)]),r=t(n,()=>s()(o));i[a]=g(r,{injector:n,invalidYieldErrorMessage:W,multipleAppStartErrorMessage:G,onAppStartNotSupportedErrorMessage:G})}else i[a]=o;return i},{});return{rawInsertionsOutput:{...o.rawInsertionsOutput,...h},exposedInsertionsOutput:{...o.exposedInsertionsOutput,...y}}},{rawInsertionsOutput:{},exposedInsertionsOutput:{}});return A=new Proxy(d,{get(e,t,n){if(Reflect.has(e,t))return Reflect.get(e,t,n);let r=L();if(!(!r||typeof r!=`object`))return Reflect.get(r,t)}}),A};if(B(),O){let e=o(f);O.trigger$.pipe(p(e)).subscribe(()=>{let e=B(),t=V(C),n=t&&typeof t==`object`&&r in t?t[r]:void 0;O.allInsertionSnapshot$.next({key:M,value:b(e,n)})})}return{[M]:h(B),...Object.fromEntries(j.entries())}}}function J(n,...i){return a=>{let s=`select${P(n)}`,c=o(e),l,u,d=()=>{let e=Array.isArray(r(()=>V(a.state)));return u&&l===e?u:(l=e,u=t(c,()=>e?K(n,...i)(a):q(n,...i)(a)),u)},f=(...e)=>d()[s](...e);return{[s]:h(f),items:h(()=>d().items?.()??[])}}}function ee(e,...t){return n=>{let r=V(n.state);return r===void 0&&n.__primitiveKind&&n.__primitiveKind!==`state`?J(e,...t)(n):Array.isArray(r)?K(e,...t)(n):q(e,...t)(n)}}var te=`:scope {
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
  display: grid;
  grid-template-columns: repeat(16, minmax(0, 1fr));
  gap: 4px;
}

.pixel-art__cell {
  aspect-ratio: 1;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 120ms ease;
}

.pixel-art__cell:hover {
  transform: scale(1.08);
  z-index: 1;
}

/* Selectors used by the current functional template. */
:scope {
  max-width: 560px;
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
  margin: 0.35rem 0 0;
  color: #334155;
}

:scope .pixel-palette {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0 0.75rem;
}

:scope .pixel-color {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  border: 2px solid #cbd5e1;
  border-radius: 999px;
  cursor: pointer;
}

:scope > button {
  padding: 0.55rem 0.9rem;
  border: 0;
  border-radius: 8px;
  color: #f8fafc;
  background: #0f172a;
  font-weight: 600;
  cursor: pointer;
}

:scope > p {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin: 1rem 0;
  color: #334155;
  font-size: 0.95rem;
}

:scope .pixel-grid {
  display: grid;
  grid-template-columns: repeat(16, minmax(0, 1fr));
  gap: 4px;
}

:scope .pixel-cell {
  width: 100%;
  aspect-ratio: 1;
  padding: 0;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 120ms ease;
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
`,ne=16,Y=`#f8fafc`,X=[`#0f172a`,`#ef4444`,`#22c55e`,`#3b82f6`,`#eab308`],Z=globalThis.location===void 0?void 0:new URLSearchParams(globalThis.location.search),Q=Math.max(1,Number(Z?.get(`cells`))||ne**2),re=Z?.get(`schedule`)===`sync`?`sync`:`frame`,$=Array.from({length:Q},(e,t)=>t),ie=e=>e?.color??Y,ae=D(`PixelArt`,{stylesUrl:te},function*(){let e=yield*I(`ui`,{activeColor:X[0]},E(({update:e})=>({setActiveColor:t=>e(()=>({activeColor:t}))}),C(w({key:`pixel-art-ui-state`,storeName:`pixel-art-ui`})))),t=yield*I(`cells`,$.map(e=>({index:e,color:Y,paintCount:0})),E(C(w({key:`pixel-art-cells-state`,storeName:`pixel-art-cells`})),ee(`cell`,function*({update:t}){return{paint:function*(){let n=yield*e();return yield*t(e=>({...e,color:e.color===n.activeColor?Y:n.activeColor,paintCount:e.paintCount+1}))}}}),({state:e,update:t})=>({clearAll:()=>t(e=>e.map(e=>({...e,color:Y}))),paintedCount:B(`paintedCount`,function*(){return(yield*e()).filter(({color:e})=>e!==Y).length}),totalPaintActions:B(`totalPaintActions`,function*(){return(yield*e()).reduce((e,{paintCount:t})=>e+t,0)})})));return{ui:e,cells:t,paintCell:z(`paintCell`,function*(e){let n=t.selectCell(e);n&&(yield*n.paint())})}},({ui:e,cells:t,paintCell:n})=>{let r=L($,{track:e=>e},(e,r)=>j(`cell`,{type:`button`,class:`pixel-cell`,style:function*(){return{backgroundColor:ie(t.selectCell(r))}},title:`Cell ${r+1}`,*click(){yield*n(r)}})),i=re===`frame`?r.pipe(d({enabled:!0,strategy:`frame`,frameBudgetMs:4})):r;return M([O([R(`Pixel Art Workshop`),k(`${Q} cells with simple state and per-cell insertions.`)]),A({class:`pixel-palette`},L(X,{track:e=>e},t=>j(`color`,{type:`button`,class:`pixel-color`,style:function*(){return{backgroundColor:yield*t()}},"aria-label":function*(){return`Choose ${yield*t()}`},*click(){yield*e.setActiveColor(yield*t())}}))),j(`clear`,{type:`button`,*click(){yield*t.clearAll()}},`Clear`),k([N(function*(){return`Painted cells: ${yield*t.paintedCount()}/${$.length}`}),N(function*(){return` · Clicks: ${yield*t.totalPaintActions()}`})]),A({class:`pixel-grid`,role:`grid`},i)])});export{ae as default};