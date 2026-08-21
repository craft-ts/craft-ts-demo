import{A as e}from"./vnode-yr11NZ26.js";import{A as t,g as n,i as r,n as i,x as a}from"./hyperscript-LLgsElhq.js";import{s as o}from"./index-DcyLmPYS.js";import{t as s}from"./css-vars-demo.shared-HxsdqA4G.js";var c=t(`TokenCard`,{styles:`
      :scope {
        --token-card-bg: #ffffff;
        --token-card-border: #dbe3f0;
        display: grid;
        gap: .55rem;
        min-height: 7.5rem;
        padding: 1rem;
        border: 1px solid var(--token-card-border);
        border-radius: var(--token-card-radius, 1rem);
        color: var(--token-card-ink);
        background: var(--token-card-bg);
        box-shadow: 0 .8rem 2rem color-mix(in srgb, var(--token-card-ink) 10%, transparent);
      }
      .token-card__label { font-weight: 750; }
      .token-card__contract { opacity: .72; font-size: .82rem; }
    `},e=>({label:e}),({label:e})=>i({class:`token-card`},[a({class:`token-card__label`},e),a({class:`token-card__contract`},`ink: required · bg/radius: optional`)])),l=t(`CssVarsRequiredDemo`,{styles:`
      :scope { display: grid; gap: 1.5rem; max-width: 72rem; margin: 0 auto; color: #172033; }
      h1, p { margin: 0; }
      .css-vars-required__intro { display: grid; gap: .5rem; }
      .css-vars-required__intro p { color: #64748b; line-height: 1.55; }
      .css-vars-required__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr)); gap: 1rem; }
      code { padding: .15rem .35rem; border-radius: .35rem; background: #e2e8f0; }
    
      button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid currentColor;outline-offset:2px}
    `},()=>({}),()=>r([s(),r({class:`css-vars-required__intro`},[o(`Required and optional values`),n([`Without a fallback, `,a(`var(--token-card-ink)`),` becomes required. The other tokens remain optional.`])]),r({class:`css-vars-required__grid`},[c({cssVars:{"--token-card-ink":`#1e3a8a`,"--token-card-bg":`#eff6ff`},label:function*(){return`Calm blue`}}),c({cssVars:{"--token-card-ink":`#9f1239`,"--token-card-bg":`#fff1f2`,"--token-card-radius":`2rem`},label:function*(){return`Rounded pink`}}),c({cssVars:{"--token-card-ink":`#166534`,"--token-card-bg":e},label:function*(){return`Optional token omitted`}})])]));export{l as CssVarsRequiredDemo,l as default,c as TokenCard};