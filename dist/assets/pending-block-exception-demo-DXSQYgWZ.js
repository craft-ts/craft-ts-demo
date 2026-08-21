import{ut as e,w as t,x as n}from"./vnode-yr11NZ26.js";import{N as r,O as i}from"./craft-service-BN1TCnUQ.js";import{f as a}from"./take-app-snapshot-Du5NoCLk.js";import{t as o}from"./mutation-Cc8ZS8ZG.js";import{A as s,S as c,f as l,g as u,i as d,k as f,r as p,v as m}from"./hyperscript-LLgsElhq.js";import{s as h,y as g}from"./index-DcyLmPYS.js";var _=s(`pendingBlockExceptionDemo`,{host:{class:`pending-exception-host`},styles:`
      :scope { display: grid; gap: 1rem; padding: 1rem; justify-items: start; }
      .pending-exception__actions { display: flex; gap: .5rem; flex-wrap: wrap; }
      .pending-exception__action {
        padding: .45rem .9rem;
        border: 1px solid #c7d2fe;
        border-radius: .6rem;
        background: #fff;
        font-weight: 650;
        cursor: pointer;
      }
      .pending-exception__skeleton {
        padding: .75rem 1rem;
        border-radius: .75rem;
        background: #eef2ff;
        color: #4338ca;
        font-weight: 650;
      }
      .pending-exception__error {
        padding: .75rem 1rem;
        border: 1px solid #fecaca;
        border-radius: .75rem;
        background: #fef2f2;
        color: #b91c1c;
        font-weight: 650;
      }
      .pending-exception__reloading {
        padding: .35rem .75rem;
        border-radius: .6rem;
        background: #fef9c3;
        color: #854d0e;
        font-size: .85rem;
        font-weight: 650;
      }
      .pending-exception__list { display: grid; gap: .35rem; margin: 0; padding-left: 1.1rem; }
    `},function*(){let t=yield*o(`issue`,{method:e=>e,preservePreviousValue:()=>!0,loader:i(function*({params:t}){return yield*e(900),t.reject?r({_tag:`INVOICE_REJECTED`},{reference:t.reference}):{reference:t.reference,amount:4200}})});return{issue:t,summary:g(`summary`,function*(){let e=yield*a(t);return`${e.reference} — ${(e.amount/100).toFixed(2)} €`})}},({issue:e,summary:r})=>m({class:`pending-exception`},[h(`settledValue — the failing path`),u(`The same read suspends to the pendingBlock, then fails to the catchBlock.`),d({class:`pending-exception__actions`},[p(`issueSuccess`,{type:`button`,class:`pending-exception__action`,*click(){yield*e.mutate({reference:`INV-2026-014`,reject:!1})}},`Issue (success)`),p(`issueRejected`,{type:`button`,class:`pending-exception__action`,*click(){yield*e.mutate({reference:`INV-2026-015`,reject:!0})}},`Issue (rejected)`)]),d([f({class:`pending-exception__list`},[l([`Invoice: `,c(r)])])]).pipe(n.exhaustive({issue:{pending:()=>u({class:`pending-exception__skeleton`},`Waiting for an invoice…`),reloading:()=>u({class:`pending-exception__reloading`},`Re-issuing…`)}})).pipe(t.exhaustive({INVOICE_REJECTED:{showSource:!1,render:e=>u({class:`pending-exception__error`},`Invoice rejected (${e._tag})`)}}))]));export{_ as default,_ as pendingBlockExceptionDemo};