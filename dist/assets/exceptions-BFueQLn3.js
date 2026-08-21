import{ut as e}from"./vnode-yr11NZ26.js";import{N as t,O as n}from"./craft-service-BN1TCnUQ.js";import{A as r,S as i,g as a,i as o,r as s,x as c}from"./hyperscript-LLgsElhq.js";import{t as l}from"./composition-B4ASpABu.js";import{t as u}from"./match-block-D7Smsr_M.js";import{n as d,s as f,x as p,y as m}from"./index-DcyLmPYS.js";var h=r(`ExceptionsComponent`,{styles:`
      :scope {
        display: block;
        max-width: 760px;
        margin: 2rem auto;
        padding: 1.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        color: #1e293b;
        background: #f8fafc;
      }
      :scope h3 { margin: 0 0 1rem; color: #0f172a; }
      :scope .exception-actions {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }
      :scope .exception-actions button {
        padding: 0.5rem 1rem;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        color: #334155;
        background: #fff;
        cursor: pointer;
      }
      :scope .exception-actions button:hover { background: #f1f5f9; }
      :scope .exception-loading {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        min-height: 1.25rem;
        margin: 0 0 1rem;
        color: #475569;
        font-size: 0.875rem;
      }
      :scope .exception-spinner {
        width: 0.8rem;
        height: 0.8rem;
        border: 2px solid #cbd5e1;
        border-top-color: #2563eb;
        border-radius: 50%;
        animation: ExceptionsComponent-exception-spin 0.7s linear infinite;
      }
      @keyframes ExceptionsComponent-exception-spin { to { transform: rotate(360deg); } }
      :scope p { margin: 0.5rem 0; }
    
      button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid currentColor;outline-offset:2px}
    `},function*(){let r=yield*p(`userQuery`,{method:e=>e,loader:n(function*({params:n}){return yield*e(600),n===`not-found`?t({_tag:`UserNotFoundException`},{message:`User does not exist`}):n===`consent-missing`?t({_tag:`UserConsentMissingException`},{message:`User consent is required`}):n===`forbidden`?t({_tag:`UserAccessForbiddenException`},{message:`Access forbidden`}):{id:`user-1`,name:`John Doe`,email:`john@doe.dev`}})},({resource:e,exceptions:t})=>({hasUser:m(`hasUser`,()=>e.hasValue()),userExceptionLoader:m(`userExceptionLoader`,function*(){return(yield*t()).loader}),userIsLoading:m(`userIsLoading`,function*(){let t=yield*e.status();return t===`loading`||t===`reloading`})}));return yield*r.call(`success`),{userQuery:r}},({userQuery:e})=>o([f(function*(){return`Query user with business exceptions (${yield*e.status()})`}),o({class:`exception-actions`},[s(`success`,{type:`button`,*click(){yield*e.call(`success`)}},`Success`),s(`notFound`,{type:`button`,*click(){yield*e.call(`not-found`)}},`User not found`),s(`consentMissing`,{type:`button`,*click(){yield*e.call(`consent-missing`)}},`Consent missing`),s(`forbidden`,{type:`button`,*click(){yield*e.call(`forbidden`)}},`Access forbidden`)]),d(e.userIsLoading,()=>o({class:`exception-loading`,role:`status`,"aria-live":`polite`},[c({class:`exception-spinner`,"aria-hidden":`true`}),c(`Loading user…`)])),d(e.hasUser,()=>o([a([i(`ID: `),function*(){return(yield*e.value()).id}]),a([i(`Name: `),function*(){return(yield*e.value()).name}]),a([i(`Email: `),function*(){return(yield*e.value()).email}])]),()=>[u.exhaustive(e.userExceptionLoader,`_tag`,{UserNotFoundException:()=>a(`⚠️ User not found (rendered by matchBlock.exhaustive)`),UserConsentMissingException:()=>a(`⚠️ User consent is required (rendered by matchBlock.exhaustive)`),UserAccessForbiddenException:()=>a(`⚠️ Access forbidden (rendered by matchBlock.exhaustive)`)})])])).pipe(l.exhaustive({UserNotFoundException:function*(){},UserConsentMissingException:function*(){},UserAccessForbiddenException:function*(){}}));export{h as default};