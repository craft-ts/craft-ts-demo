import{ut as e,x as t}from"./vnode-yr11NZ26.js";import{N as n,O as r,r as i}from"./craft-service-BN1TCnUQ.js";import{n as a,t as o}from"./craft-unique-BfO_kqs5.js";import{t as s}from"./insert-typed-pipes-BG2TZ7r6.js";import{t as c}from"./insert-pagination-placeholder-data-D0TfTzH5.js";import{A as l,C as u,O as d,T as f,h as p,i as m,r as h,w as g,x as _,y as v}from"./hyperscript-LLgsElhq.js";import{S as y,b,r as x,s as S,t as C,v as w,x as T}from"./index-DcyLmPYS.js";import{t as E}from"./status.component-D-i5IE-y.js";var{ApiService:D}=i({name:`ApiService`,providedIn:`global`},function*(){let t=yield*b(`dataList`,[{id:`1`,name:`Romain`},{id:`2`,name:`Geffrault`},{id:`3`,name:`Rom1`},{id:`4`,name:`Daniel`},{id:`5`,name:`Toto`},{id:`6`,name:`Julien`},{id:`7`,name:`Kev`},{id:`8`,name:`Lulu`},{id:`9`,name:`Timou`},{id:`10`,name:`Lupette`}],({state:e,update:t})=>({addItem:e=>t(t=>[e,...t]),deleteItem:function*(r){let i=(yield*e()).find(e=>e.id===r);return i?(yield*t(e=>e.filter(e=>e.id!==r)),i):n({_tag:`UNEXPECTED_ERROR`},{error:Error(`Item not found`)})},updateItem:e=>t(t=>t.map(t=>t.id===e.id?e:t))})),i=yield*b(`updateError`,!1);return{updateError:i,getDataList:r(function*(n){let r=(yield*t()).slice((n.page-1)*n.pageSize,n.page*n.pageSize);return yield*e(2e3),r}),getItemById:r(function*(r){let i=(yield*t()).find(e=>e.id===r);return i?(yield*e(2e3),i):n({_tag:`UNEXPECTED_ERROR`},{error:Error(`failed to find the item ${r}`)})}),addItem:r(function*(n){return yield*t.addItem(n),yield*e(5e3),n}),deleteItem:r(function*(n){let r=yield*t.deleteItem(n);return yield*e(2e3),r}),updateItem:r(function*(r){return(yield*i())?(yield*e(5e3),n({_tag:`UNEXPECTED_ERROR`},{error:Error(`Api error during update`)})):(yield*t.updateItem(r),yield*e(2e3),r)})}}),O=l(`QpListWithPagination`,{stylesUrl:`:scope {
  display: block;
  box-sizing: border-box;
  min-height: 100%;
  padding: 24px;
  background: #f5f7fa;
  color: #1a202c;
}

h2 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 20px;
  color: #1a202c;
  font-size: 24px;
  line-height: 1.25;
}

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
}

.table td {
  padding: 16px;
  border-bottom: 1px solid #edf2f7;
}

.table tr:last-child td {
  border-bottom: 0;
}

.table tbody tr:hover {
  background: #f8fafc;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
}

.pagination select,
.pagination button {
  min-height: 36px;
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: #fff;
  color: #4a5568;
  font: inherit;
  font-weight: 500;
}

.pagination select {
  cursor: pointer;
}

.pagination button {
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;
}

.pagination button:hover {
  border-color: #cbd5e0;
  background: #f8fafc;
}

.pagination button:focus-visible,
.pagination select:focus-visible {
  outline: 3px solid #bee3f8;
  outline-offset: 1px;
}

.current-page {
  min-width: 2ch;
  color: #4a5568;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 36rem) {
  :scope {
    padding: 16px;
  }

  .pagination {
    align-items: stretch;
    flex-wrap: wrap;
  }

  .pagination select,
  .pagination button {
    flex: 1 1 auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  :scope,
  :scope * {
    animation: none;
    transition: none;
  }
}
`},function*(){let e=yield*y(`pagination`,C(),({patch:e,state:t})=>({nextPage:function*(){return yield*e({page:(yield*t()).page+1})},previousPage:function*(){let n=yield*t();return yield*e({page:Math.max(1,n.page-1)})},updatePageSize:function*(t){return yield*e({pageSize:t,page:1})}})),t=yield*D();return{pagination:e,usersQuery:yield*T(`usersQuery`,{params:e,identifier:({page:e,pageSize:t})=>`${e}-${t}`,loader:function*({params:e}){return yield*t.getDataList(e)}},s(a(o({storeName:`demo-app`,key:`route-list-with-pagination`})),c({initialValue:[]}))),updatePageSize:w(`updatePageSize`,function*(t){yield*e.updatePageSize(Number(t.target.value))})}},({pagination:e,updatePageSize:n,usersQuery:r})=>m([S([`Route QueryParams pagination: `,E({status:r.currentPageStatus})]).pipe(t({fallback:()=>S(`Route QueryParams pagination: Loading…`)})),u({class:`table`},g(x(r.currentPageData,{track:e=>e.id},e=>d([f(function*(){return(yield*e()).id}),f(function*(){return(yield*e()).name})])))),m({class:`pagination`},[v(`pageSize`,{"aria-label":`Page size`,value:e.pageSize,change:n},[2,4,8,16].map(e=>p({value:e},e))),h(`previousPage`,{type:`button`,click:e.previousPage},`Previous`),_({class:`current-page`},e.page),h(`nextPage`,{type:`button`,click:e.nextPage},`Next`)])]));export{O as default};