import{$ as e,$t as t,Ct as n,Dt as r,Et as i,Lt as a,Nt as o,Rt as s,Tt as ee,Vt as te,in as ne,jt as c,mt as re,nn as ie,rn as ae,tn as oe,tt as se,ut as l,yt as ce,zt as le}from"./vnode-yr11NZ26.js";import{E as u,N as d,O as f,P as p,c as ue,g as de,u as m,v as fe}from"./craft-service-BN1TCnUQ.js";import{c as h,i as pe,l as g,n as me,r as he,s as ge,t as _e,u as ve}from"./take-app-snapshot-Du5NoCLk.js";import{n as ye}from"./craft-program-runtime-n3Kw4Mpu.js";import{a as be,c as xe,i as Se,l as Ce,n as _,o as we,r as Te,s as Ee,t as De}from"./resource-exception-DlIVwady.js";import{t as Oe}from"./correlation-id-Cebe7Dvx.js";import{a as v,i as ke}from"./craft-primitive-registry-CTYlbaL8.js";import{i as Ae,t as y}from"./schema-validation-BorUwMV2.js";import{i as je,n as Me,r as Ne}from"./primitive-resource-runtime-context-Bw-YUzM9.js";import{t as b}from"./craft-use-o8lQjmyY.js";import{t as x}from"./craft-http-client-Bh-kv_yI.js";import{n as S}from"./craft-program-operators-CjzGrPl_.js";import{r as C}from"./insert-typed-pipes-BG2TZ7r6.js";import{A as w,b as T,g as E,i as D,k as O,l as k,n as A,t as j,u as M,v as N,x as P}from"./hyperscript-LLgsElhq.js";import{t as F}from"./composition-B4ASpABu.js";import{O as Pe,b as I,n as L,r as R,s as z,x as Fe,y as B}from"./index-DcyLmPYS.js";import{t as V}from"./status.component-D-i5IE-y.js";var H=`asyncProcess generators can only yield craftService dependencies or exposed dependency helpers.`,U=`asyncProcess generators do not support onAppStart(...).`;function W(e,t,...n){return v(e,G(e,t,...n))}function G(l,d,...f){let v=new he,x=[{provide:me,useValue:v},...d.providers??[]],S;[`params`in d?d.params:void 0,`method`in d?d.method:void 0,`loader`in d?d.loader:void 0,`stream`in d?d.stream:void 0,...f].some(e=>se(e))&&(ee(W),S=m(c(n),`asyncProcess:${l}`,x));let C=()=>(S||=(ee(W),m(c(n),`asyncProcess:${l}`,x)),S),w=s(void 0),T=s(0),E=`params`in d&&typeof d.params==`function`,D=!E&&Pe(d.method),O=!E&&typeof d.method==`function`&&!o(d.method),k=`identifier`in d,A=s(void 0),j=s({}),M={method:d.methodSchema,params:d.paramsSchema,loader:d.loaderSchema},N=Object.values(M).some(Boolean),P=(e,t)=>{te(()=>{j.update(n=>{let r={...n};return t?r[e]=t:delete r[e],r})})},F=Ae(C(),d.schemaValidationPolicy),I={method:y({schema:M.method,primitive:`asyncProcess`,name:l,policy:F,setException:P}),params:y({schema:M.params,primitive:`asyncProcess`,name:l,policy:F,setException:P}),loader:y({schema:M.loader,primitive:`asyncProcess`,name:l,policy:F,setException:P})},L=r(()=>{let e=j();return{...e.method?{method:e.method}:{},...e.params?{params:e.params}:{},...e.loader?{loader:e.loader}:{}}}),R=e=>{if(!(!k||!(`identifier`in d))&&e!=null)return d.identifier?.(e)},z=e=>{if(!p(e))return e},Fe=r(()=>{if(O)return;let t=j().params;if(t)return _(t,{scope:`params`});if(E){let t=e({factory:d.params,thisArg:void 0,getInjector:C,args:[],invalidYieldErrorMessage:H,multipleAppStartErrorMessage:U,onAppStartNotSupportedErrorMessage:U});return p(t)?_(t,{scope:`params`}):void 0}if(D){let e=d.method();return p(e)?_(e,{scope:`params`}):void 0}}),B=r(()=>O?A():Fe()),{setLoaderException:V,exceptions:G,hasException:K,createSelectExceptions:q,createSelectHasException:J}=De({isUsingIdentifier:k,paramsException:B}),Ie=D?(()=>{let e=z(d.method());if(!M.params||p(e))return e;let t=I.params.parseSync(e,`params`,`source`);return t.accepted?t.value:void 0}):void 0,Le=E?(()=>{let t=e({factory:d.params,thisArg:void 0,getInjector:C,args:[],invalidYieldErrorMessage:H,multipleAppStartErrorMessage:U,onAppStartNotSupportedErrorMessage:U});if(!M.params||p(t))return z(t);let n=I.params.parseSync(t,`params`,`params`);return n.accepted?n.value:void 0}):void 0,Y=`loader`in d&&d.loader?(async e=>{let t=C(),n=t.get(Oe,null),r=n?.lastCorrelationId()??null;r&&n?.startOperation(r);let i=Se(e.params),a={...e,params:i};try{let e=await ye({factory:d.loader,thisArg:void 0,getInjector:C,args:[a],invalidYieldErrorMessage:H,appStartNotSupportedErrorMessage:U});if(e.kind===`shortCircuit`){let t=R(i);V(_(e.exception,{scope:`loader`,identifier:t}),t);return}let t=e.value;if(p(t)){let e=R(i);V(_(t,{scope:`loader`,identifier:e}),e);return}let n=t;if(M.loader){let e=await I.loader.parseAsync(t,`loader`,`loader`,R(i));if(!e.accepted){let t=R(i);V(_(e.exception,{scope:`loader`,identifier:t}),t);return}n=e.value}let r=R(i);return V(void 0,r),n}catch(e){throw p(e)||t.get(pe,null)?.(),e}finally{r&&n?.endOperation(r)}}):void 0,Re=`stream`in d&&d.stream?((...t)=>{let n=e({factory:d.stream,thisArg:void 0,getInjector:C,args:t,invalidYieldErrorMessage:H,multipleAppStartErrorMessage:U,onAppStartNotSupportedErrorMessage:U}),i=e=>{if(!M.loader||!o(e))return e;let t;return r(()=>{let n=e();if(n&&typeof n==`object`&&`error`in n)return n;let r=n&&typeof n==`object`&&`value`in n?n.value:n,i=I.loader.parseSync(r,`loader`,`stream`);return i.accepted?(t=i.value,{value:t}):t===void 0?void 0:{value:t}})};return n&&typeof n.then==`function`?Promise.resolve(n).then(i):i(n)}):void 0,X=D?Ie:E?Le:w,ze=!D&&!E,Be=r(()=>{let e=T();if(e!==0)return be(w(),e)}),Ve={...d,params:ze?Be:X,equal:ze?Te(d.equal):d.equal,loader:Y,stream:Re},Z=k?we({...d,params:X,loader:Y,stream:Re,identifier:d.identifier}):d.preservePreviousValue?.()?Ee(Ve):xe(Ve);if(M.loader){let e=Z,t=e.set.bind(e),n=e.update.bind(e);e.set=e=>{let n=I.loader.parseSync(e,`loader`,`set`);n.accepted&&t(n.value)},e.update=e=>n(t=>{let n=I.loader.parseSync(e(t),`loader`,`update`);return n.accepted?n.value:t})}a(C(),()=>je(k?Me(`asyncProcess`,Z):Ne(`asyncProcess`,Z),l));let He=Z.status,Ue=N?r(()=>({...G(),parse:L()})):G,Q=Object.assign(Z,k?{_resourceById:Z,select:e=>{let t=q(e),n=J(e);return r(()=>{let i=Z()[e];if(!i)return;let a=i.status,o=Object.assign(i,{status:r(()=>Ce(a(),n())),exception:r(()=>t().list[0]),hasException:n,hasSchema:s(N),exceptions:N?r(()=>({...t(),parse:L()})):t});return g(l,o),o})()},selectOrCreate:e=>{let t=Z.addById(e),n=q(e),i=J(e),a=t.status,o=Object.assign(t,{status:r(()=>Ce(a(),i())),exception:r(()=>n().list[0]),hasException:i,hasSchema:s(N),exceptions:N?r(()=>({...n(),parse:L()})):n});return g(l,o),o}}:{},{...k?{}:{status:r(()=>Ce(He(),K())),exception:r(()=>G().list[0])},hasException:K,hasSchema:s(N),exceptions:Ue,...E?{resourceParamsSrc:X}:{method:o(d.method)?void 0:t=>{let n=t;if(M.method){let e=I.method.parseSync(t,`method`,`method`);if(!e.accepted)return A.set(_(e.exception,{scope:`params`})),u(e.exception);n=e.value}let r=e({factory:d.method,thisArg:void 0,getInjector:C,args:[n],invalidYieldErrorMessage:H,multipleAppStartErrorMessage:U,onAppStartNotSupportedErrorMessage:U});if(p(r))return A.set(_(r,{scope:`params`})),u(r);let a=r;if(M.params){let e=I.params.parseSync(r,`params`,`method`);if(!e.accepted)return A.set(_(e.exception,{scope:`params`})),u(e.exception);a=e.value}if(A()&&A.set(void 0),k){let e=d.identifier?.(t);Z.addById(e)}return i(()=>{T.update(e=>e+1),w.set(a)}),u(a)}}});k||g(l,Q);let $=t(Q,{name:l,primitive:`asyncProcess`,path:l}),We=ve(r(k?()=>{let e=b($.resourceParamsSrc());if(e==null)throw new h(l);let t=d.identifier?.(e);if(t==null)throw new h(l);let n=$.select(t);if(!n)throw new h(l);return b(n.settledValue())}:()=>b($.settledValue())),{primitive:`asyncProcess`,insertion:`settledState`,path:`${l}.settledState`}),Ge=f?.reduce((n,r)=>{let i=e({factory:r,thisArg:void 0,getInjector:C,args:[{...k?{resourceById:t(Z,{name:`resourceById`,primitive:`asyncProcess`,path:`${l}.resourceById`})}:{resource:$},resourceParamsSrc:t(X,{name:`resourceParamsSrc`,primitive:`asyncProcess`,path:`${l}.resourceParamsSrc`}),hasException:$.hasException,exceptions:$.exceptions,insertions:n,state:t(Z.state,{name:`state`,primitive:`asyncProcess`,path:`${l}.state`}),settledState:We,set:e=>u(Z.set(e)),update:e=>u(Z.update(e)),patch:e=>u(Z.update(t=>({...t,...e(t)}))),__primitiveKind:`asyncProcess`}],invalidYieldErrorMessage:H,multipleAppStartErrorMessage:U,onAppStartNotSupportedErrorMessage:U}),s=Object.entries(i).reduce((e,[n,r])=>{if(typeof r==`function`&&!o(r)&&!ae(r)&&!fe(r)){let t=C(),i=m(t,`method:${n}`,[ke(`asyncProcess`,{state:Z.state,set:Z.set,update:Z.update,patch:e=>Z.update(t=>({...t,...e(t)}))},r)]),o=a(i,()=>re()(r));e[n]=de(o,{injector:i,invalidYieldErrorMessage:H,multipleAppStartErrorMessage:U,onAppStartNotSupportedErrorMessage:U})}else{let i=ne(r,n,`asyncProcess`,`${l}.${n}`);e[n]=t(i,{name:n,primitive:`asyncProcess`,insertion:n,path:`${l}.${n}`})}return e},{});return{...n,...s}},{});Object.assign(Q,Ge);let Ke=S?S.get(_e,null):(()=>{try{return c(_e,{optional:!0})}catch{return null}})(),qe=S?S.get(ue,null)??[]:(()=>{try{return c(ue,{optional:!0})??[]}catch{return[]}})(),Je=S?S.get(ce,null):(()=>{try{return c(ce,{optional:!0})}catch{return null}})();Ke&&Je&&Ke.triggerSnapshot$.pipe(le(Je)).subscribe(()=>{let e=ge(v),t;try{if(k){let n=Z();t={params:w(),resources:Object.entries(n??{}).reduce((e,[t,n])=>(e[t]=n?.state?.(),e),{}),...e?{insertions:e}:{}}}else{let n=Q.state();t={params:w(),...n,...e?{insertions:e}:{}}}}catch(e){t={error:e instanceof Error?e.message:String(e)}}Ke.allSnapShot$.next({source:`asyncProcess`,from:qe,state:t})}),`resource`in Q||Object.defineProperty(Q,"resource",{value:Q,enumerable:!1,configurable:!0});let Ye=t(Q,{name:l,primitive:`asyncProcess`,path:l});return ie(f)?oe(Ye):Ye}var K=`:scope {
  display: block;
  max-width: 760px;
  margin: 0 auto;
  color: #1f2937;
}

:scope input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.55rem;
  font: inherit;
}

.pipeline-status {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 0.85rem 0;
}

.pipeline-status > span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.hint {
  color: #64748b;
}

.error {
  padding: 0.75rem 1rem;
  border-radius: 0.45rem;
  background: #fee2e2;
  color: #991b1b;
}

.results {
  display: grid;
  gap: 0.65rem;
  padding: 0;
  list-style: none;
}

.book {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 0.7rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.55rem;
}

.book img {
  width: 48px;
  height: 68px;
  object-fit: cover;
  background: #e2e8f0;
}

.book__content {
  display: grid;
  gap: 0.3rem;
}

.book__content a {
  color: #2563eb;
  font-weight: 600;
}

.book__content a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.book__content small {
  color: #64748b;
}
`,q={total:0,books:[]},J=[408,429,500,502,503,504];function Ie(e){let t=e;return{total:t.numFound,books:t.docs.map((e,t)=>{let n=e.key??`unknown-${t}`;return{key:n,title:e.title??`Untitled`,authors:e.author_name?.join(`, `)??`Unknown author`,year:e.first_publish_year,coverUrl:e.cover_i?`https://covers.openlibrary.org/b/id/${e.cover_i}-M.jpg`:``,metadata:[e.author_name?.join(`, `)??`Unknown author`,e.first_publish_year?.toString()].filter(Boolean).join(` · `),url:`https://openlibrary.org${n}`}})}}var Le=f(function*(e){return e.length<2?q:yield*x.get(({response:t})=>({url:`https://openlibrary.org/search.json?q=${encodeURIComponent(e)}&limit=8&fields=key,title,author_name,first_publish_year,cover_i`,success:t({decode:Ie}),exceptions:[function*({status:e}){let t=yield*e();return J.includes(t)?d({_tag:`TransientHttpError`,scope:`OpenLibrarySearch`},{status:t}):d({_tag:`SearchHttpError`,scope:`OpenLibrarySearch`},{status:t})}]}))}),Y=w(`DebouncedWebSearch`,{stylesUrl:K},function*(){let e=yield*I(`searchInput`,``,C(({set:e})=>({setSearchInput:t=>e(t)}),({state:e})=>({currentTerm:B(`currentTerm`,function*(){return(yield*e())?.trim()??``}),tooShort:B(`tooShort`,function*(){return(yield*e()).trim().length<2})}))),t=yield*W(`debouncedSearch`,{params:function*(){return(yield*e()).trim()},loader:function*({params:e}){return e?(yield*l(350,{owner:`open-library-search-debounce`}),{term:e}):{term:``}}},({resource:e})=>({isDebouncing:B(`isDebouncing`,function*(){return yield*e.isLoading()})})),n=yield*Fe(`openLibrarySearch`,{params:function*(){return(yield*t.value())?.term},loader:function*({params:e}){return e?yield*Le(e).pipe(S({times:3,while:[`TransientHttpError`],backoff:`exponential`,delayMs:250})):q}},({resource:t,hasException:n})=>{let r=B(`hasResults`,function*(){return((yield*t.value())?.books.length??0)>0});return{hasResults:r,resultCount:B(`resultCount`,function*(){return String((yield*t.value())?.total??0)}),resultBooks:B(`resultBooks`,function*(){return(yield*t.value())?.books??[]}),hasSearchError:B(`hasSearchError`,function*(){return yield*n()}),showResults:B(`showResults`,function*(){return!(yield*t.isLoading())&&!(yield*n())&&(yield*r())}),showEmpty:B(`showEmpty`,function*(){return(yield*e.currentTerm()).length>=2&&!(yield*t.isLoading())&&!(yield*n())&&!(yield*r())})}}),r=B(`showDebouncing`,function*(){let n=yield*t.isDebouncing();return(yield*e()).trim().length>=2&&n});return{searchInput:e,setSearchInput:e.setSearchInput,debouncedSearch:t,searchQuery:n,showDebouncing:r}},({searchInput:e,debouncedSearch:t,searchQuery:n,showDebouncing:r,setSearchInput:i})=>N([z(`Debounced web search`),E(`Type a book title. The input waits 350 ms in an asyncProcess before the query calls the public Open Library API.`),M(`search`,{type:`search`,value:e,placeholder:`Try “angular”, “dune” or “design patterns”…`,"aria-label":`Search books`,*input(e){yield*i(e.target.value)}}),D({class:`pipeline-status`},[P([`Debounce: `,V({status:t.status})]),P([`HTTP query: `,V({status:n.status})])]),L(e.tooShort,()=>E({class:`hint`},`Enter at least two characters to search.`)),L(r,()=>E({class:`hint`},`Waiting for the debounce window…`)),L(n.hasSearchError,()=>E({class:`error`},`The search failed. Transient HTTP errors are retried up to three times.`)),L(n.showResults,()=>[z([n.resultCount,` results for “`,e,`”`]),O({class:`results`},R(n.resultBooks,{track:e=>e.key},e=>A({class:`book`},[k({src:function*(){return(yield*e()).coverUrl},alt:``}),D({class:`book__content`},[j(`book`,{href:function*(){return(yield*e()).url},target:`_blank`,rel:`noreferrer`},function*(){return(yield*e()).title}),T(function*(){return(yield*e()).metadata})])])))]),L(n.showEmpty,()=>E({class:`hint`},`No books found.`))])).pipe(F.exhaustive({TransientHttpError:function*(){},HttpError:function*(){},HttpResponseDecodeError:function*(){},SearchHttpError:function*(){}}));export{Y as default};