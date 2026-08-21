import{w as e}from"./vnode-yr11NZ26.js";import{O as t,r as n}from"./craft-service-BN1TCnUQ.js";import{t as r}from"./mutation-Cc8ZS8ZG.js";import{t as i}from"./insert-react-on-mutation-DL5kFJQz.js";import{t as a}from"./insert-typed-pipes-BG2TZ7r6.js";import{A as o,f as s,g as c,i as l,k as u,r as d,u as f,x as p}from"./hyperscript-LLgsElhq.js";import{b as m,r as h,s as g,x as _}from"./index-DcyLmPYS.js";import{t as v}from"./status.component-D-i5IE-y.js";var y=`:scope {
  display: block;
  min-height: 100%;
  box-sizing: border-box;
  padding: 24px;
  background: #f5f7fa;
  color: #1a202c;
}

h2 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 12px;
  color: #1a202c;
  font-size: 24px;
  line-height: 1.25;
}

p {
  margin: 0 0 20px;
  color: #4a5568;
}

:scope > div {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

input {
  min-width: 240px;
  padding: 9px 12px;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  background: #fff;
  color: #1a202c;
  font: inherit;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

input:focus {
  border-color: #3182ce;
  box-shadow: 0 0 0 3px #bee3f8;
}

button {
  padding: 9px 16px;
  border: 1px solid #3182ce;
  border-radius: 6px;
  background: #3182ce;
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s,
    opacity 0.2s;
}

button:hover:not(:disabled) {
  border-color: #2b6cb0;
  background: #2b6cb0;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

ul {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
}

li > span {
  flex: 1;
}

li button {
  border-color: #c53030;
  background: #fff5f5;
  color: #c53030;
}

li button:hover:not(:disabled) {
  border-color: #c53030;
  background: #fed7d7;
}

@media (prefers-reduced-motion: reduce) {
  :scope,
  :scope * {
    animation: none;
    transition: none;
  }
}
`,b=[{id:1,title:`Compose a craftService`},{id:2,title:`Expose query and mutations`}],{provideTodoStore:x,TodoStore:S}=n({name:`TodoStore`,providedIn:`toProvide`},function*(){let e=yield*m(`nextId`,3,({state:e,update:t})=>({take:function*(){let n=yield*e();return yield*t(e=>e+1),n}})),n=yield*m(`records`,b,({update:e})=>({add:t=>e(e=>[...e,t]),remove:t=>e(e=>e.filter(e=>e.id!==t))})),o=yield*r(`add`,{method:e=>e,loader:function*({params:t}){let r={id:yield*e.take(),title:t};return yield*n.add(r),r}}),s=yield*r(`remove`,{method:e=>e,loader:function*({params:e}){return yield*n.remove(e),e}});return{todos:yield*_(`todos`,{params:()=>!0,loader:t(function*(){return[...b]})},a(i(o,{optimisticUpdate:({queryResource:e,mutationParams:t})=>{let n=e.value()??[],r=n.reduce((e,t)=>Math.max(e,t.id),0)+1;return[...n,{id:r,title:t}]}}),i(s,{optimisticUpdate:({queryResource:e,mutationParams:t})=>(e.value()??[]).filter(e=>e.id!==t)}))),add:o,remove:s}}),C=o(`FullDemoCraft`,{providers:[x()],stylesUrl:y},function*(){let e=yield*S(),t=yield*m(`titleInput`,``,({set:e})=>({setTitle:t=>e(t)}));return{store:e,titleInput:t,setTitle:t.setTitle}},({store:e,titleInput:t,setTitle:n})=>l([g([`Full craftService demo `,v({status:e.todos.status})]),c(`A toProvide service composed from a query and two mutations.`),l([f(`TodoNameToAddInput`,{placeholder:`New todo`,value:t,*input(e){yield*n(e.target.value)}}),d(`AddTodoButton`,{type:`button`,disabled:e.add.isLoading,*click(){yield*e.add.mutate(((yield*t())??``).trim())}},`Add`)]),u(h(e.todos.value,{track:e=>e.id,empty:()=>c(`No todos.`)},t=>s([p(`TodoTitle`,{},function*(){return(yield*t()).title}),d(`RemoveTodoButton`,{type:`button`,disabled:e.remove.isLoading,*click(){yield*e.remove.mutate((yield*t()).id)}},`Remove`)])))])).pipe(e.exhaustive({FAILED_TO_LOAD:{render:()=>c(`⚠️ FAILED_TO_LOAD (handled by catchBlock.exhaustive)`),showSource:!0,position:`after`}}));export{S as TodoStore,C as default,x as provideTodoStore};