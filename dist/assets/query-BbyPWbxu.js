import{ut as e}from"./vnode-yr11NZ26.js";import{N as t,O as n,r}from"./craft-service-BN1TCnUQ.js";import{t as i}from"./craft-use-o8lQjmyY.js";import{i as a}from"./browser-boundaries-Dlc1fQ-Y.js";import{n as o,t as s}from"./craft-unique-BfO_kqs5.js";import{t as c}from"./craft-router-BJu-Rr8V.js";import{A as l,_ as u,g as d,i as f,r as p}from"./hyperscript-LLgsElhq.js";import{b as m,n as h,s as g,v as _,x as v,y}from"./index-DcyLmPYS.js";import{t as b}from"./status.component-D-i5IE-y.js";var x=`:scope {
  --query-ink: #172033;
  --query-muted: #64748b;
  --query-border: #dce4ef;
  --query-accent: #2563eb;
  --query-accent-dark: #1d4ed8;

  display: block;
  box-sizing: border-box;
  width: min(100%, 46rem);
  margin: clamp(1rem, 5vh, 3.5rem) auto;
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid var(--query-border);
  border-radius: 1.25rem;
  color: var(--query-ink);
  background:
    radial-gradient(circle at 100% 0%, #eff6ff 0, transparent 34%),
    #ffffff;
  box-shadow: 0 1.5rem 3rem rgb(15 23 42 / 8%);
}

:scope::before {
  display: block;
  width: 3rem;
  height: 0.25rem;
  margin-bottom: 1.5rem;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--query-accent), #7c3aed);
  content: '';
}

.query-result {
  box-sizing: border-box;
  margin: 0;
  padding: clamp(1rem, 3vw, 1.5rem);
  border: 1px solid #e5eaf2;
  border-radius: 0.9rem;
  background: rgb(248 250 252 / 88%);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.query-result pre {
  box-sizing: border-box;
  margin: 1rem 0 0;
  padding: 1rem 1.1rem;
  overflow-x: auto;
  border: 1px solid #1e293b;
  border-radius: 0.7rem;
  color: #dbeafe;
  background: #0f172a;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 6%);
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  white-space: pre-wrap;
}

.query-note {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-left: 3px solid #93c5fd;
  border-radius: 0 0.6rem 0.6rem 0;
  color: var(--query-muted);
  background: #f8fafc;
  font-size: 0.92rem;
  line-height: 1.5;
}

.query-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.7rem;
  width: 100%;
  margin: 0;
  padding: 0.25rem 0 0;
}

.query-actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.6rem;
  padding: 0.65rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.65rem;
  color: #334155;
  background: #ffffff;
  box-shadow: 0 1px 2px rgb(15 23 42 / 6%);
  cursor: pointer;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  transition: border-color 160ms ease, background 160ms ease, box-shadow 160ms ease, transform 160ms ease;
}

.query-actions button:hover {
  border-color: #93c5fd;
  background: #eff6ff;
  box-shadow: 0 0.35rem 0.8rem rgb(37 99 235 / 12%);
  transform: translateY(-1px);
}

.query-actions button:last-child {
  border-color: var(--query-accent);
  color: #ffffff;
  background: var(--query-accent);
}

.query-actions button:last-child:hover {
  border-color: var(--query-accent-dark);
  background: var(--query-accent-dark);
}

.query-actions button:focus-visible {
  outline: 3px solid rgb(147 197 253 / 65%);
  outline-offset: 2px;
}

@media (max-width: 30rem) {
  .query-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .query-actions button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  :scope,
  :scope * {
    animation: none;
    transition: none;
  }
}
`,{ApiService:S}=r({name:`ApiService`,providedIn:`global`},function*(){let r=yield*m(`dataList`,[{id:`1`,name:`Romain`},{id:`2`,name:`Geffrault`},{id:`3`,name:`Rom1`},{id:`4`,name:`Daniel`},{id:`5`,name:`Toto`},{id:`6`,name:`Julien`},{id:`7`,name:`Kev`},{id:`8`,name:`Lulu`},{id:`9`,name:`Timou`},{id:`10`,name:`Lupette`}],({state:e,update:n})=>({addItem:e=>n(t=>[e,...t]),deleteItem:function*(r){let i=(yield*e()).find(e=>e.id===r);return i?(yield*n(e=>e.filter(e=>e.id!==r)),i):t({_tag:`UNEXPECTED_ERROR`},{error:Error(`Item not found`)})},updateItem:e=>n(t=>t.map(t=>t.id===e.id?e:t))})),i=yield*m(`updateError`,!1);return{updateError:i,getDataList:n(function*(t){let n=(yield*r()).slice((t.page-1)*t.pageSize,t.page*t.pageSize);return yield*e(2e3),n}),getItemById:n(function*(n){let i=(yield*r()).find(e=>e.id===n);return i?(yield*e(2e3),i):t({_tag:`UNEXPECTED_ERROR`},{error:Error(`failed to find the item ${n}`)})}),addItem:n(function*(t){return yield*r.addItem(t),yield*e(5e3),t}),deleteItem:n(function*(t){let n=yield*r.deleteItem(t);return yield*e(2e3),n}),updateItem:n(function*(n){return(yield*i())?(yield*e(3e3),t({_tag:`UNEXPECTED_ERROR`},{error:Error(`Api error during update`)})):(yield*r.updateItem(n),yield*e(2e3),n)})}}),{UserQuery:C}=r({name:`UserQuery`,providedIn:`global`},function*(e){return yield*v(`userQuery`,{params:e.userId,loader:function*({params:e}){return yield*a.log(`Loading user with id:`,e),yield*S.getItemById(e)}},o(s({storeName:`demo-app-craft`,key:`user-query`})))}),w=l(`CraftGlobalQuery`,{stylesUrl:x,cssVars:{"--query-ink":`#172033`,"--query-muted":`#64748b`,"--query-border":`#dce4ef`,"--query-accent":`#2563eb`,"--query-accent-dark":`#1d4ed8`}},function*(e){let t=yield*C({userId:()=>i(e())}),n=yield*c(void 0,({navigate:e})=>({navigate:e})),r=_(`navigate`,function*(t){n.navigate({to:`craft/query/:userId`,params:{userId:String(Number((yield*e())??`0`)+t)}})});return{user:t,hasUser:y(`hasUser`,()=>t.hasValue()),navigate:r}},({user:e,hasUser:t,navigate:n})=>f({class:`query-shell`},[g(`User query`),f({class:`query-result`},[`User `,b({status:e.status}),h(t,()=>u(`QueryValue`,{},function*(){return JSON.stringify(yield*e.value(),null,2)}))]),d({class:`query-note`},`Reload the page to retrieve the query result from the cache.`),f({class:`query-actions`},[p(`GoToPreviousUser`,{type:`button`,*click(){yield*n(-1)}},`Previous user`),p(`GoToNextUser`,{type:`button`,*click(){yield*n(1)}},`Next user`)])]));export{w as default};