import{ut as e}from"./vnode-yr11NZ26.js";import{N as t,O as n,r}from"./craft-service-BN1TCnUQ.js";import{t as i}from"./craft-use-o8lQjmyY.js";import{n as a,t as o}from"./craft-unique-BfO_kqs5.js";import{t as s}from"./mutation-Cc8ZS8ZG.js";import{t as c}from"./insert-react-on-mutation-DL5kFJQz.js";import{t as l}from"./insert-typed-pipes-BG2TZ7r6.js";import{t as u}from"./craft-router-BJu-Rr8V.js";import{A as d,_ as f,g as p,i as m,r as h,u as g}from"./hyperscript-LLgsElhq.js";import{b as _,n as v,s as y,v as b,x,y as S}from"./index-DcyLmPYS.js";import{t as C}from"./status.component-D-i5IE-y.js";var w=`:scope {
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
`,{ApiService:T}=r({name:`ApiService`,providedIn:`global`},function*(){let r=yield*_(`dataList`,[{id:`1`,name:`Romain`},{id:`2`,name:`Geffrault`},{id:`3`,name:`Rom1`},{id:`4`,name:`Daniel`},{id:`5`,name:`Toto`},{id:`6`,name:`Julien`},{id:`7`,name:`Kev`},{id:`8`,name:`Lulu`},{id:`9`,name:`Timou`},{id:`10`,name:`Lupette`}],({state:e,update:n})=>({addItem:e=>n(t=>[e,...t]),deleteItem:function*(r){let i=(yield*e()).find(e=>e.id===r);return i?(yield*n(e=>e.filter(e=>e.id!==r)),i):t({_tag:`UNEXPECTED_ERROR`},{error:Error(`Item not found`)})},updateItem:e=>n(t=>t.map(t=>t.id===e.id?e:t))})),i=yield*_(`updateError`,!1);return{updateError:i,getDataList:n(function*(t){let n=(yield*r()).slice((t.page-1)*t.pageSize,t.page*t.pageSize);return yield*e(2e3),n}),getItemById:n(function*(n){let i=(yield*r()).find(e=>e.id===n);return i?(yield*e(2e3),i):t({_tag:`UNEXPECTED_ERROR`},{error:Error(`failed to find the item ${n}`)})}),addItem:n(function*(t){return yield*r.addItem(t),yield*e(5e3),t}),deleteItem:n(function*(t){let n=yield*r.deleteItem(t);return yield*e(2e3),n}),updateItem:n(function*(n){return(yield*i())?(yield*e(3e3),t({_tag:`UNEXPECTED_ERROR`},{error:Error(`Api error during update`)})):(yield*r.updateItem(n),yield*e(2e3),n)})}}),{provideUserMutation:E,UserMutation:D}=r({name:`UserMutation`,providedIn:`toProvide`},function*(e){let t=yield*s(`updateUserName`,{method:e=>({...e.user,name:e.userName}),loader:function*({params:e}){return yield*T.updateItem(e)}});return{user:yield*x(`user`,{params:e.userId,loader:function*({params:e}){return yield*T.getItemById(e)},preservePreviousValue:()=>!0},l(a(o({storeName:`demo-app-craft`,key:`mutation`})),c(t,{optimisticPatch:{name:({mutationParams:e})=>e.name}}))),updateUserName:t}}),O=d(`MutationCraft`,{stylesUrl:w,providers:[E()]},function*(e){let t=yield*D({userId:()=>i(e())}),n=yield*_(`nameInput`,``,({set:e})=>({setName:t=>e(t)})),r=S(`hasUser`,()=>t.user.hasValue()),a=b(`updateUserNameFn`,function*(e){let{user:t,updateUserName:n}=yield*D(void 0,({user:e,updateUserName:t})=>({user:e,updateUserName:t})),r=yield*t.value();r&&(yield*n.mutate({userName:e,user:r}))}),o=yield*u(void 0,({navigate:e})=>({navigate:e})),s=b(`navigate`,function*(t){o.navigate({to:`craft/mutation/:userId`,params:{userId:String(Number((yield*e())??`0`)+t)}})});return{store:t,nameInput:n,setName:n.setName,hasUser:r,updateUserNameFn:a,navigate:s}},({store:e,nameInput:t,setName:n,hasUser:r,updateUserNameFn:i,navigate:a})=>m([y(`Update user`),m([`User `,C({status:e.user.status}),v(r,()=>f(`UserValue`,{},function*(){return JSON.stringify(yield*e.user.value(),null,2)}))]),p(`Reload to see the cached result; update the name optimistically.`),g(`NameInput`,{type:`text`,placeholder:`New name`,value:t,*input(e){yield*n(e.target.value)}}),h(`UpdateUserNameButton`,{type:`button`,class:`update-user-name`,disabled:e.updateUserName.isLoading,*click(){yield*i((yield*t())??``)}},[`Update name `,C({status:e.updateUserName.status})]),h(`PreviousUser`,{type:`button`,*click(){yield*a(-1)}},`Previous user`),h(`NextUser`,{type:`button`,*click(){yield*a(1)}},`Next user`)]));export{D as UserMutation,O as default,E as provideUserMutation};