import{ut as e,x as t}from"./vnode-yr11NZ26.js";import{f as n}from"./take-app-snapshot-Du5NoCLk.js";import{A as r,f as i,g as a,i as o,k as s,r as c,v as l,x as u}from"./hyperscript-LLgsElhq.js";import{s as d,x as f,y as p}from"./index-DcyLmPYS.js";var m=[{id:1,name:`Ada Lovelace`,team:`Analytics`},{id:2,name:`Grace Hopper`,team:`Compilers`},{id:3,name:`Katherine Johnson`,team:`Trajectories`}],h=r(`pendingBlockDemo`,{host:{class:`pending-demo-host`},styles:`
      :scope { display: grid; gap: 1rem; padding: 1rem; justify-items: start; }
      .pending-demo__skeleton {
        padding: .75rem 1rem;
        border-radius: .75rem;
        background: #eef2ff;
        color: #4338ca;
        font-weight: 650;
      }
      .pending-demo__reload {
        width: fit-content;
        padding: .45rem .9rem;
        border: 1px solid #c7d2fe;
        border-radius: .6rem;
        background: #fff;
        font-weight: 650;
        cursor: pointer;
      }
      .pending-demo__list { display: grid; gap: .35rem; margin: 0; padding-left: 1.1rem; }
      .pending-demo__count { opacity: .72; font-size: .9rem; }
    `},function*(){let t=yield*f(`users`,{method:e=>void 0,preservePreviousValue:()=>!1,loader:function*(){return yield*e(900),{items:m}}});return yield*t.call(void 0),{users:t,teams:p(`teams`,function*(){let e=yield*n(t);return[...new Set(e.items.map(e=>e.team))].sort().join(` · `)}),total:p(`total`,function*(){return`${(yield*n(t)).items.length} people`})}},({teams:e,total:n,users:r})=>l({class:`pending-demo`},[d(`settledValue + pendingBlock`),a(`The template reads an always-resolved value; the pendingBlock owns the loading state.`),c(`reload`,{type:`button`,class:`pending-demo__reload`,*click(){yield*r.call(void 0)}},`Reload`),o([s({class:`pending-demo__list`},[i([`Teams: `,u(e)]),i({class:`pending-demo__count`},n)])]).pipe(t.exhaustive({users:()=>a({class:`pending-demo__skeleton`},`Loading teams…`)}))]));export{h as default,h as pendingBlockDemo};