import{r as e}from"./craft-service-BN1TCnUQ.js";import{A as t,g as n,i as r,r as i}from"./hyperscript-LLgsElhq.js";import{b as a,s as o}from"./index-DcyLmPYS.js";var{Counter:s,provideCounter:c}=e({name:`Counter`,providedIn:`toProvide`},function*(){return yield*a(`counter`,0,({update:e,set:t})=>({increment:()=>e(e=>e+1),decrement:()=>e(e=>e-1),reset:()=>t(0)}))}),l=t(`CraftServiceCounterComponent`,{providers:[c()],styles:`
      :scope{display:flex;flex-direction:column;align-items:center;gap:16px;padding:32px;font-family:sans-serif}
      .value{font-size:3rem;font-weight:bold;margin:0}
      .actions{display:flex;gap:8px}
      button{padding:8px 20px;font-size:1.2rem;cursor:pointer;border:1px solid #ccc;border-radius:6px;background:#fff}
    
      button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid currentColor;outline-offset:2px}
    `},function*(){return{counter:yield*s()}},({counter:e})=>r([o(`craftService Counter (toProvide scope)`),n({class:`value`},e),r({class:`actions`},[i(`decrement`,{type:`button`,click:e.decrement},`-`),i(`reset`,{type:`button`,click:e.reset},`Reset`),i(`increment`,{type:`button`,click:e.increment},`+`)])]));export{l as default};