import{N as e}from"./craft-service-BN1TCnUQ.js";import{t}from"./craft-router-BJu-Rr8V.js";import{A as n,S as r,g as i,i as a,r as o,v as s}from"./hyperscript-LLgsElhq.js";import{S as c,n as l,s as u,v as d,y as f}from"./index-DcyLmPYS.js";function p(e){return`${e._tag}: ${e.payload.error}`}var m=n(`ExceptionQueryParamsComponent`,{styles:`
      :scope {
        display: block;
        max-width: 620px;
        margin: 2rem auto;
        padding: 1.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        color: #1e293b;
        background: #f8fafc;
      }
      :scope h4 { margin: 0 0 1rem; color: #0f172a; }
      :scope > div {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      :scope button {
        padding: 0.5rem 0.9rem;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        color: #334155;
        background: #fff;
        cursor: pointer;
      }
      :scope button:hover { background: #f1f5f9; }
      :scope p { margin: 0.5rem 0; }
    
      button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid currentColor;outline-offset:2px}
    `},function*(){let n=yield*t(void 0,({navigate:e})=>({navigate:e}));return{modeQueryParams:yield*c(`modeQueryParams`,{state:{mode:{fallbackValue:`fallbackValue`,codec:{decode:(t=>t===`success`?`success`:e({_tag:`UNEXPECTED_ERROR`},{error:Error(`Invalid mode: ${t}`)})),encode:String}}}},({exceptions:e})=>({hasParseException:f(`hasParseException`,function*(){return(yield*e()).parse.mode!==void 0})})),navigate:d(`navigate`,function*(e){n.navigate({to:`exception-query-params`,queryParams:{mode:e},queryParamsHandling:`merge`})})}},({modeQueryParams:e,navigate:t})=>s([u(`QueryParams decode exception`),a([o(`success`,{type:`button`,*click(){yield*t(`success`)}},`Navigate success`),o(`exception`,{type:`button`,*click(){yield*t(`exception`)}},`Navigate exception`)]),i([r(`Parsed value: `),function*(){return String((yield*e()).mode)}]),l(e.hasParseException,()=>i([r(`Exception: `),function*(){return p((yield*e.exceptions()).parse.mode)}]),()=>i([r(`Exception: `),`none`]))]));export{m as default};