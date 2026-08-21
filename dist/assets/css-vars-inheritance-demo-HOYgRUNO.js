import{k as e}from"./vnode-yr11NZ26.js";import{A as t,g as n,i as r,x as i}from"./hyperscript-LLgsElhq.js";import{s as a}from"./index-DcyLmPYS.js";import{t as o}from"./css-vars-demo.shared-HxsdqA4G.js";var s=t(`InheritedBadge`,{styles:`
      :scope {
        --inherited-badge-bg: #e0e7ff;
        display: inline-flex;
        width: fit-content;
        padding: .3rem .65rem;
        border-radius: 999px;
        color: var(--inherited-badge-ink);
        background: var(--inherited-badge-bg);
        font-size: .82rem;
        font-weight: 750;
      }
    `},()=>({}),()=>i(`Inherited from parent`)),c=t(`InheritanceExample`,{styles:`
      :scope {
        --inherited-badge-ink: #3730a3;
        display: grid;
        gap: 1rem;
        padding: 1.25rem;
        border: 1px dashed #a5b4fc;
        border-radius: 1rem;
        background: #eef2ff;
      }
    `},()=>({}),()=>r([n(`The parent declares --inherited-badge-ink in its own scope.`),s({cssVars:{"--inherited-badge-ink":e}})])),l=t(`CssVarsInheritanceDemo`,{styles:`
      :scope { display: grid; gap: 1.5rem; max-width: 72rem; margin: 0 auto; color: #172033; }
      h1, p { margin: 0; }
      .css-vars-inheritance__intro { display: grid; gap: .5rem; }
      .css-vars-inheritance__intro p { color: #64748b; line-height: 1.55; }
    
      button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid currentColor;outline-offset:2px}
    `},()=>({}),()=>r([o(),r({class:`css-vars-inheritance__intro`},[a(`Native inheritance`),n(`The inherit marker produces no inline style: the CSS cascade resolves the value from the parent.`)]),c()]));export{l as CssVarsInheritanceDemo,l as default};