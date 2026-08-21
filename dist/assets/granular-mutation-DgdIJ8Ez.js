import{ut as e,x as t}from"./vnode-yr11NZ26.js";import{N as n,O as r,r as i}from"./craft-service-BN1TCnUQ.js";import{n as a,t as o}from"./craft-unique-BfO_kqs5.js";import{t as s}from"./mutation-Cc8ZS8ZG.js";import{t as c}from"./insert-react-on-mutation-DL5kFJQz.js";import{t as l}from"./insert-typed-pipes-BG2TZ7r6.js";import{t as u}from"./insert-pagination-placeholder-data-D0TfTzH5.js";import{A as d,C as f,D as p,E as m,O as h,T as g,h as _,i as v,p as y,r as b,w as x,x as S,y as C}from"./hyperscript-LLgsElhq.js";import{S as w,b as T,r as E,s as D,t as O,v as k,x as A}from"./index-DcyLmPYS.js";import{t as j}from"./status.component-D-i5IE-y.js";var M=`:scope {
  display: block;
  background: #f5f7fa;
}

:scope.container {
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 24px;
  min-height: 100vh;
  margin: auto;
}

.sidebar {
  width: 300px;
}

.status-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.status-card .checkbox-wrapper {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.content {
  flex: 1;
}

.content-wrapper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 24px;
  text-align: left;
}

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.table th,
.table td {
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid #edf2f7;
}

.table th {
  font-weight: 600;
  color: #4a5568;
  background: #f8fafc;
}

.table tr:last-child td {
  border-bottom: none;
}

.table tbody tr:hover {
  background: #f8fafc;
}

.badge-container {
  display: inline-flex;
  align-items: flex-end;
  gap: 6px;
  margin-left: 8px;
  animation: GranularMutationCraft-fadeIn 0.3s ease-in-out;
}

@keyframes GranularMutationCraft-fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes GranularMutationCraft-pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes GranularMutationCraft-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
}

@keyframes GranularMutationCraft-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.action-btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.action-btn.blue {
  background: #ebf8ff;
  color: #3182ce;
}

.action-btn.blue:hover {
  background: #bee3f8;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
}

.pagination select {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 6px;
  color: #4a5568;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
}

.pagination select:focus {
  border-color: #3182ce;
  box-shadow: 0 0 0 2px #bee3f8;
}

.pagination .btn {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 6px;
  color: #4a5568;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination .btn:hover {
  background: #f8fafc;
  border-color: #cbd5e0;
}

.pagination .btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination .current-page {
  align-self: center;
  font-weight: 500;
  color: #4a5568;
}

/* Status emoji animations */
.status-emoji {
  display: inline-block;
}

.status-emoji.loading {
  animation: GranularMutationCraft-spin 1s linear infinite;
}

.status-emoji.error {
  animation: GranularMutationCraft-shake 0.5s ease-in-out;
}

.status-emoji.success {
  animation: GranularMutationCraft-pulse 0.5s ease-in-out;
}

.action-btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.action-btn.blue {
  background: #ebf8ff;
  color: #3182ce;
}

.action-btn.blue:hover {
  background: #bee3f8;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (prefers-reduced-motion: reduce) {
  :scope,
  :scope * {
    animation: none;
    transition: none;
  }
}
`,{ApiService:N}=i({name:`ApiService`,providedIn:`global`},function*(){let t=yield*T(`dataList`,[{id:`1`,name:`Romain`},{id:`2`,name:`Geffrault`},{id:`3`,name:`Rom1`},{id:`4`,name:`Daniel`},{id:`5`,name:`Toto`},{id:`6`,name:`Julien`},{id:`7`,name:`Kev`},{id:`8`,name:`Lulu`},{id:`9`,name:`Timou`},{id:`10`,name:`Lupette`}],({state:e,update:t})=>({addItem:e=>t(t=>[e,...t]),deleteItem:function*(r){let i=(yield*e()).find(e=>e.id===r);return i?(yield*t(e=>e.filter(e=>e.id!==r)),i):n({_tag:`UNEXPECTED_ERROR`},{error:Error(`Item not found`)})},updateItem:e=>t(t=>t.map(t=>t.id===e.id?e:t))})),i=yield*T(`updateError`,!1);return{updateError:i,getDataList:r(function*(n){let r=(yield*t()).slice((n.page-1)*n.pageSize,n.page*n.pageSize);return yield*e(2e3),r}),getItemById:r(function*(r){let i=(yield*t()).find(e=>e.id===r);return i?(yield*e(2e3),i):n({_tag:`UNEXPECTED_ERROR`},{error:Error(`failed to find the item ${r}`)})}),addItem:r(function*(n){return yield*t.addItem(n),yield*e(5e3),n}),deleteItem:r(function*(n){let r=yield*t.deleteItem(n);return yield*e(2e3),r}),updateItem:r(function*(r){return(yield*i())?(yield*e(5e3),n({_tag:`UNEXPECTED_ERROR`},{error:Error(`Api error during update`)})):(yield*t.updateItem(r),yield*e(2e3),r)})}}),{provideGranularMutation:P,GranularMutation:F}=i({name:`GranularMutation`,providedIn:`toProvide`},function*(){let e=yield*w(`pagination`,O(),({patch:e,state:t})=>({nextPage:function*(){return yield*e({page:(yield*t()).page+1})},previousPage:function*(){let n=yield*t();return yield*e({page:Math.max(1,n.page-1)})},updatePageSize:function*(t){return yield*e({pageSize:t,page:1})}})),t=yield*s(`updateUserName`,{method:e=>({...e,name:`${e.name}-`}),identifier:({id:e})=>e,loader:function*({params:e}){return yield*N.updateItem(e)}});return{pagination:e,users:yield*A(`users`,{params:e,identifier:({page:e,pageSize:t})=>`${e}-${t}`,loader:function*({params:e}){return yield*N.getDataList(e)}},l(a(o({storeName:`demo-app-craft`,key:`granular`})),u({initialValue:[]}),c(t,{filter:({mutationIdentifier:e,queryResource:t})=>t.value()?.some(({id:t})=>t===e)??!1,optimisticUpdate:({queryResource:e,mutationIdentifier:t,mutationParams:n})=>(e.value()??[]).map(e=>e.id===t?n:e)}))),updateUserName:t}}),I=d(`GranularMutationCraft`,{stylesUrl:M,providers:[P()]},function*(){return{store:yield*F(),updatePageSize:k(`updatePageSize`,function*(e){(yield*F()).pagination.updatePageSize(Number(e.target.value))})}},({store:{users:e,updateUserName:n,pagination:r},updatePageSize:i})=>v({class:`container`},[y({class:`content`},[v({class:`content-wrapper`},[v({class:`card`},[D({class:`card-title`},[`User Management: `,S({},[j({status:e.currentPageStatus})]).pipe(t({fallback:()=>S({},`⏳`)}))]),v({class:`table-container`},[f({class:`table`},[p([h([m(`ID`),m(`Name`),m(`Action`)])]),x(E(e.currentPageData,{track:e=>e.id},e=>h([g(function*(){return(yield*e()).id}),g(function*(){return(yield*e()).name}),g(b(`UpdateUserName`,{type:`button`,class:`action-btn`,disabled:function*(){return yield*n.selectOrCreate((yield*e()).id).isLoading()},*click(){yield*n.mutate(yield*e())}},[`Update Name`,j({status:function*(){return yield*n.selectOrCreate((yield*e()).id).status()}})]))])))])]),v({class:`pagination`},[C(`PageSize`,{"aria-label":`Page size`,value:function*(){return String((yield*r()).pageSize)},style:{marginRight:`8px`},*change(e){yield*i(e)}},[2,4,8,16].map(e=>_({value:String(e),selected:function*(){return e===(yield*r()).pageSize}},e))),b(`PreviousPage`,{type:`button`,class:`btn`,click:r.previousPage},`Previous`),S(`CurrentPage`,{class:`current-page`},function*(){return(yield*r()).page}),b(`NextPage`,{type:`button`,class:`btn`,click:r.nextPage},`Next`)])])])])]));export{F as GranularMutation,I as default,P as provideGranularMutation};