import{ut as e}from"./vnode-yr11NZ26.js";import{N as t,O as n,r}from"./craft-service-BN1TCnUQ.js";import{n as i,t as a}from"./craft-unique-BfO_kqs5.js";import{t as o}from"./mutation-Cc8ZS8ZG.js";import{t as s}from"./insert-react-on-mutation-DL5kFJQz.js";import{t as c}from"./insert-typed-pipes-BG2TZ7r6.js";import{t as l}from"./craft-router-BJu-Rr8V.js";import{A as u,_ as d,g as f,i as p,r as m,u as h}from"./hyperscript-LLgsElhq.js";import{b as g,n as _,s as v,v as y,x as b,y as x}from"./index-DcyLmPYS.js";import{t as S}from"./status.component-D-i5IE-y.js";var C=`:scope {
  display: block;
  max-width: 420px;
  margin: 2.5rem auto;
  padding: 2.2rem 2rem 2rem 2rem;
  background: #232323;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  color: #eaeaea;
}

:scope div {
  font-size: 1.08rem;
  margin-bottom: 1.5rem;
  color: #eaeaea;
}

:scope button {
  background: #444;
  color: #eaeaea;
  border: none;
  border-radius: 7px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.2rem;
  transition: background 0.2s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

:scope button:hover {
  background: #2a2a2a;
}

:scope .label-checkbox-row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
}

:scope label {
  font-weight: 500;
  color: #bdbdbd;
  font-size: 1rem;
  letter-spacing: 0.02em;
  padding: 0.2rem 0.4rem 0.2rem 0;
  border-radius: 4px;
}

:scope input[type="text"] {
  background: #2a2a2a;
  color: #eaeaea;
  border: 1px solid #444;
  border-radius: 7px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
  margin-right: 0.8rem;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

:scope input[type="text"]:focus {
  outline: none;
  border-color: #666;
  background: #333;
  box-shadow: 0 0 0 3px rgba(68, 68, 68, 0.3);
}

:scope input[type="text"]::placeholder {
  color: #757575;
}

:scope input[type="checkbox"] {
  accent-color: #444;
  transform: scale(1.25);
  margin: 0;
  box-shadow: 0 0 0 2px #333;
  outline: none;
  transition: box-shadow 0.2s;
}
:scope input[type="checkbox"]:focus {
  box-shadow: 0 0 0 2px #888;
}

:scope pre {
  background: #181818;
  color: #d6d6d6;
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.98rem;
  overflow-x: auto;
  margin: 1.2rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

:scope button {
  margin-right: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  :scope,
  :scope * {
    animation: none;
    transition: none;
  }
}
`,{ApiService:w}=r({name:`ApiService`,providedIn:`global`},function*(){let r=yield*g(`dataList`,[{id:`1`,name:`Romain`},{id:`2`,name:`Geffrault`},{id:`3`,name:`Rom1`},{id:`4`,name:`Daniel`},{id:`5`,name:`Toto`},{id:`6`,name:`Julien`},{id:`7`,name:`Kev`},{id:`8`,name:`Lulu`},{id:`9`,name:`Timou`},{id:`10`,name:`Lupette`}],({state:e,update:n})=>({addItem:e=>n(t=>[e,...t]),deleteItem:function*(r){let i=(yield*e()).find(e=>e.id===r);return i?(yield*n(e=>e.filter(e=>e.id!==r)),i):t({_tag:`UNEXPECTED_ERROR`},{error:Error(`Item not found`)})},updateItem:e=>n(t=>t.map(t=>t.id===e.id?e:t))})),i=yield*g(`updateError`,!1);return{updateError:i,getDataList:n(function*(t){let n=(yield*r()).slice((t.page-1)*t.pageSize,t.page*t.pageSize);return yield*e(2e3),n}),getItemById:n(function*(n){let i=(yield*r()).find(e=>e.id===n);return i?(yield*e(2e3),i):t({_tag:`UNEXPECTED_ERROR`},{error:Error(`failed to find the item ${n}`)})}),addItem:n(function*(t){return yield*r.addItem(t),yield*e(5e3),t}),deleteItem:n(function*(t){let n=yield*r.deleteItem(t);return yield*e(2e3),n}),updateItem:n(function*(n){return(yield*i())?(yield*e(3e3),t({_tag:`UNEXPECTED_ERROR`},{error:Error(`Api error during update`)})):(yield*r.updateItem(n),yield*e(2e3),n)})}}),T=u(`MutationDemoComponent`,{stylesUrl:C},function*(e){let t=yield*o(`updateUserName`,{method:e=>({...e.user,name:e.userName}),loader:function*({params:e}){return yield*w.updateItem(e)}}),n=yield*g(`nameInput`,``,({set:e})=>({setName:t=>e(t.trim())})),r=yield*b(`userQuery`,{params:e,loader:function*({params:e}){return yield*w.getItemById(e)},preservePreviousValue:()=>!0},c(({resource:e})=>({hasUser:x(`hasUser`,()=>e.hasValue())}),i(a({storeName:`demo-app`,key:`mutation`})),s(t,{optimisticPatch:{name:({mutationParams:e})=>e.name}}))),u=yield*l(void 0,({navigate:e})=>({navigate:e})),d=y(`goTo`,function*(t){u.navigate({to:`mutation/:userId`,params:{userId:String(Number((yield*e())??`0`)+t)}})});return{userQuery:r,updateUserName:t,update:y(`update`,function*(e){if(!e)return;let n=yield*r.value();n&&(yield*t.mutate({userName:e,user:n}))}),goTo:d,nameInput:n,setName:n.setName}},({userQuery:e,updateUserName:t,update:n,goTo:r,nameInput:i,setName:a})=>p([v(`Update user`),p([`User `,S({status:e.status}),_(e.hasUser,()=>d(`UserValue`,{},function*(){return JSON.stringify(yield*e.value(),null,2)}))]),f(`Reload to see the cached result; update the name optimistically.`),h(`NameInput`,{type:`text`,placeholder:`New name`,value:i,*input(e){yield*a(e.target.value)}}),m(`UpdateUserNameButton`,{type:`button`,class:`update-user-name`,disabled:t.isLoading,click:function*(){yield*n(yield*i())}},[`Update name `,S({status:t.status})]),m(`PreviousUser`,{type:`button`,click:function*(){yield*r(-1)}},`Previous user`),m(`NextUser`,{type:`button`,click:function*(){yield*r(1)}},`Next user`)]));export{T as default};