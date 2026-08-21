import{n as e}from"./craft-router-BJu-Rr8V.js";import{A as t,g as n,i as r,t as i,v as a}from"./hyperscript-LLgsElhq.js";import{c as o,s}from"./index-DcyLmPYS.js";import{t as c}from"./css-vars-demo.shared-HxsdqA4G.js";var l=[{path:`css-vars/required`,title:`Required and optional values`,description:`Compare multiple instances, fallbacks, and the omit marker.`},{path:`css-vars/inheritance`,title:`Native inheritance`,description:`Observe inherit and how the variable resolves from a parent.`},{path:`css-vars/forwarding`,title:`Forwarding and overrides`,description:`Turn a child's tokens into an optional parent API.`},{path:`css-vars/property`,title:`@property`,description:`Register a numeric token owned by the component.`}],u=t(`CssVarsDemo`,{styles:`
      :scope {
        --css-vars-demo-ink: #172033;
        --css-vars-demo-muted: #64748b;
        --css-vars-demo-panel: #f8fafc;
        --css-vars-demo-border: #dbe3f0;
        display: grid;
        gap: 1.5rem;
        max-width: 72rem;
        margin: 0 auto;
        color: var(--css-vars-demo-ink);
      }
      h1, h2, p { margin: 0; }
      .css-vars-demo__intro { display: grid; gap: .5rem; }
      .css-vars-demo__intro p { color: var(--css-vars-demo-muted); line-height: 1.55; }
      .css-vars-demo__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: 1rem; }
      .css-vars-demo__card {
        display: grid;
        gap: .65rem;
        min-height: 8rem;
        padding: 1.25rem;
        border: 1px solid var(--css-vars-demo-border);
        border-radius: 1rem;
        color: inherit;
        background: var(--css-vars-demo-panel);
        text-decoration: none;
        transition: transform 160ms ease, box-shadow 160ms ease;
      }
      .css-vars-demo__card:hover { transform: translateY(-2px); box-shadow: 0 .8rem 2rem #17203314; }
      .css-vars-demo__card p { color: var(--css-vars-demo-muted); line-height: 1.45; }
    
      button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid currentColor;outline-offset:2px}
    
      @media (prefers-reduced-motion: reduce){:scope{animation:none;transition:none}}
    `},()=>({}),()=>r([c(),r({class:`css-vars-demo__intro`},[s(`Typed CSS variables`),n(`Each mechanism now has its own page to isolate its behavior and contract.`)]),o(a({class:`css-vars-demo__grid`,"aria-label":`Examples`},l.map(({path:t,title:r,description:a})=>i(`cardLink`,{class:`css-vars-demo__card`,craftRouterLink:{to:t}},[s(r),n(a)]).pipe(e))))]));export{u as CssVarsDemo,u as default};