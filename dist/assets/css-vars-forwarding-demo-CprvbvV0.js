import{D as e}from"./vnode-yr11NZ26.js";import{A as t,g as n,i as r}from"./hyperscript-LLgsElhq.js";import{s as i}from"./index-DcyLmPYS.js";import{t as a}from"./css-vars-demo.shared-HxsdqA4G.js";import{TokenCard as o}from"./css-vars-required-demo-CgDTmHbU.js";var s=t(`ForwardingExample`,{styles:`
      :scope { display: grid; gap: .6rem; }
      .forwarding-example__note { margin: 0; color: #64748b; font-size: .82rem; }
    `},()=>({}),()=>r([o({cssVars:{"--token-card-ink":e(`#155e75`),"--token-card-bg":e(`#ecfeff`)},label:function*(){return`Default forwarded values`}}),n({class:`forwarding-example__note`},`These values become the parent component's optional API.`)])),c=t(`CssVarsForwardingDemo`,{styles:`
      :scope { display: grid; gap: 1.5rem; max-width: 72rem; margin: 0 auto; color: #172033; }
      h1, p { margin: 0; }
      .css-vars-forwarding__intro { display: grid; gap: .5rem; }
      .css-vars-forwarding__intro p { color: #64748b; line-height: 1.55; }
      .css-vars-forwarding__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: 1rem; }
    
      button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:2px solid currentColor;outline-offset:2px}
    `},()=>({}),()=>r([a(),r({class:`css-vars-forwarding__intro`},[i(`Forwarding and overrides`),n(`On the left, default values are forwarded. On the right, the parent is overridden by its caller.`)]),r({class:`css-vars-forwarding__grid`},[s(),s({cssVars:{"--token-card-ink":`#854d0e`,"--token-card-bg":`#fefce8`}})])]));export{c as CssVarsForwardingDemo,c as default};