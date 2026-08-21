import{ut as e}from"./vnode-yr11NZ26.js";import{N as t,O as n,r}from"./craft-service-BN1TCnUQ.js";import{t as i}from"./mutation-Cc8ZS8ZG.js";import{t as a}from"./insert-react-on-mutation-DL5kFJQz.js";import{t as o}from"./insert-typed-pipes-BG2TZ7r6.js";import{A as s,g as c,i as l,r as u,u as d,x as f}from"./hyperscript-LLgsElhq.js";import{b as p,n as m,r as h,s as g,v as _,x as v,y}from"./index-DcyLmPYS.js";var b={false:`⬜`,true:`✅`},x=[{id:1,title:`Learn @craft-ts`,completed:!1},{id:2,title:`Build a playground`,completed:!0},{id:3,title:`Share on StackBlitz`,completed:!1}],{ApiService:S}=r({name:`ApiService`,providedIn:`global`},function*(){let r=yield*p(`nextId`,4,({state:e,update:t})=>({take:function*(){let n=yield*e();return yield*t(e=>e+1),n}}));return{getTodos:n(function*(){return yield*e(500),[...x]}),getTodo:n(function*(n){let r=x.find(e=>e.id===n);return r?(yield*e(500),{...r}):t({_tag:`UNEXPECTED_ERROR`},{error:Error(`Todo ${n} not found`)})}),addTodo:n(function*(t){let n={id:yield*r.take(),title:t,completed:!1};return x.push(n),yield*e(500),n}),toggleTodo:n(function*(n){let r=x.find(e=>e.id===n);return r?(r.completed=!r.completed,yield*e(500),{...r}):t({_tag:`UNEXPECTED_ERROR`},{error:Error(`Todo ${n} not found`)})}),deleteTodo:n(function*(n){let r=x.findIndex(e=>e.id===n);if(r===-1)return t({_tag:`UNEXPECTED_ERROR`},{error:Error(`Todo ${n} not found`)});let i=x.splice(r,1)[0];return yield*e(500),i})}}),{Playground:C}=r({name:`Playground`,providedIn:`function`},function*(){let e=yield*S(),t=yield*i(`addTodo`,{method:e=>e,loader:function*({params:t}){return yield*e.addTodo(t)}}),n=yield*i(`toggleTodo`,{method:e=>e,loader:function*({params:t}){return yield*e.toggleTodo(t)}}),r=yield*i(`deleteTodo`,{method:e=>e,loader:function*({params:t}){return yield*e.deleteTodo(t)}});return{todos:yield*v(`todos`,{params:()=>`all`,loader:function*(){return yield*e.getTodos()}},o(a(t,{reload:{onMutationResolved:!0}}),a(n,{reload:{onMutationResolved:!0}}),a(r,{reload:{onMutationResolved:!0}}))),addTodo:t,toggleTodo:n,deleteTodo:r}}),w=s(`PlaygroundComponent`,{styles:`
    .playground {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 32px;
      font-family: sans-serif;
    }
    .subtitle {
      color: #6b7280;
      margin: 0;
    }
    .add-form {
      display: flex;
      gap: 8px;
    }
    input {
      padding: 8px 12px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      width: 260px;
    }
    button {
      padding: 8px 16px;
      font-size: 1rem;
      cursor: pointer;
      border: 1px solid #ccc;
      border-radius: 6px;
      background: #fff;
    }
    button:hover {
      background: #f0f0f0;
    }
    .list {
      width: 100%;
      max-width: 420px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .todo-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      background: #fff;
    }
    .todo-item.completed .title {
      text-decoration: line-through;
      color: #9ca3af;
    }
    .title {
      flex: 1;
    }
    .toggle,
    .delete {
      border: none;
      background: none;
      padding: 4px;
      font-size: 1.1rem;
    }
    .reloading {
      color: #f59e0b;
      font-size: 0.875rem;
      margin: 0;
    }
    .loading {
      color: #6b7280;
    }
    .error {
      color: #ef4444;
    }
    .empty {
      color: #9ca3af;
      font-style: italic;
    }
    
      button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid currentColor;outline-offset:2px}
    `},function*(){let e=yield*C(),t=yield*p(`titleInput`,``,({set:e})=>({setTitle:t=>e(t)}));return{pg:e,add:_(`add`,function*(){let n=(yield*t()).trim();if(n)return yield*e.addTodo.mutate(n),yield*t.setTitle(``),{}}),isAdding:y(`isAdding`,function*(){return yield*e.addTodo.isLoading()}),todos:y(`todos`,function*(){return(yield*e.todos.value())??[]}),titleInput:t,setTitle:t.setTitle}},({pg:e,add:t,isAdding:n,todos:r,titleInput:i,setTitle:a})=>l({class:`playground`},[g(`Playground`),c(`Sandbox for testing @craft-ts — ready to share on StackBlitz`),l({class:`add-form`},[d(`title`,{type:`text`,placeholder:`New todo title…`,value:i,*input(e){yield*a(e.target.value)},*keydown(e){e.key===`Enter`&&(yield*t())}}),u(`add`,{type:`button`,disabled:e.addTodo.isLoading,*click(){yield*t()}},m(n,()=>`Adding…`,()=>`Add`))]),l({class:`list`},h(r,{track:e=>e.id,empty:()=>c(`No todos yet.`)},t=>l({class:function*(){return{"todo-item":!0,completed:(yield*t()).completed}}},[u(`toggle`,{type:`button`,*click(){yield*e.toggleTodo.mutate((yield*t()).id)}},function*(){return b[String((yield*t()).completed)]}),f({class:`title`},function*(){return(yield*t()).title}),u(`delete`,{type:`button`,"aria-label":function*(){return`Delete ${(yield*t()).title}`},*click(){yield*e.deleteTodo.mutate((yield*t()).id)}},`🗑️`)])))]));export{w as default};