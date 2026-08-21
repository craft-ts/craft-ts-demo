import{Rt as e,Vt as t,kt as n,ut as r}from"./vnode-yr11NZ26.js";import{r as i}from"./craft-service-BN1TCnUQ.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./on_-DViBxOLa.js";import{t as d}from"./craft-use-o8lQjmyY.js";import{o as f}from"./browser-boundaries-Dlc1fQ-Y.js";import{t as p}from"./source_-S3eBChlE.js";import{t as m}from"./mutation-Cc8ZS8ZG.js";import{t as h}from"./insert-react-on-mutation-DL5kFJQz.js";import{n as g,r as _,t as v}from"./insert-typed-pipes-BG2TZ7r6.js";import{n as y,t as b}from"./craft-machine-history-3NthL9qO.js";import{A as x,d as S,g as C,i as w,r as T,u as E,v as D,x as O}from"./hyperscript-LLgsElhq.js";import{t as k}from"./match-block-D7Smsr_M.js";import{E as A,b as j,n as M,s as N,x as P,y as F}from"./index-DcyLmPYS.js";function I(r,i){if(a())return c(r,i);let o=r,s=o(),l=e(s&&i(s));return n(()=>{let e=o();e===void 0?l.set(void 0):t(()=>{let t=i(e);l.set(t)})},{}),Object.assign(l,A)}var L=`:scope {
  display: block;
  max-width: 720px;
  margin: 0 auto;
  color: #1f2937;
}

:scope h2 {
  margin: 0 0 0.25rem;
}

.intro {
  margin: 0 0 1.5rem;
  color: #475569;
}

.steps {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.step {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
  color: #64748b;
  background: #f8fafc;
}

.step--active {
  color: #1d4ed8;
  border-color: #1d4ed8;
  background: #eff6ff;
}

.hint {
  margin: 0 0 1.25rem;
  padding: 0.75rem 1rem;
  border-left: 3px solid #94a3b8;
  color: #475569;
  background: #f1f5f9;
}

.panel {
  display: grid;
  gap: 0.75rem;
  padding: 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  background: #fff;
}

.loading-panel {
  display: flex;
  align-items: center;
  color: #475569;
}

.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid #cbd5e1;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: ProfileEditorStateMachine-profile-editor-spin 0.7s linear infinite;
}

@keyframes ProfileEditorStateMachine-profile-editor-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
  }
}

.field {
  display: grid;
  gap: 0.3rem;
}

.field label {
  font-weight: 600;
  color: #334155;
}

:scope input[type='text'],
:scope input[type='email'] {
  box-sizing: border-box;
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.45rem;
  font: inherit;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

:scope button {
  padding: 0.55rem 1rem;
  border: 0;
  border-radius: 0.45rem;
  color: #fff;
  background: #2563eb;
  font-weight: 600;
  cursor: pointer;
}

:scope button:focus-visible,
:scope input:focus-visible {
  outline: 2px solid #1d4ed8;
  outline-offset: 2px;
}

:scope button.secondary {
  color: #1e293b;
  background: #e2e8f0;
}

.blocked {
  margin: 0;
  color: #b91c1c;
}


.history {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1.5rem;
  color: #64748b;
}

.read-only {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
  color: #475569;
}
`,R={name:`Ada Lovelace`,email:`ada@craft-ts.dev`},{ProfilePermissions:z}=i({name:`ProfilePermissions`,providedIn:`global`},function*(){return{readOnly:yield*j(`readOnly`,!1,({update:e})=>({toggle:()=>e(e=>!e)}))}}),B=x(`ProfileEditorStateMachine`,{stylesUrl:L},function*(){let e=yield*z();return{machine:yield*s(`profileEditor`,function*(){let e=yield*p(`edit$`),t=yield*p(`cancel$`),n=yield*p(`saveRequest$`),i=yield*p(`restore$`),a=yield*m(`saveProfile`,{method:n.value,loader:function*({params:e}){return yield*r(600,{owner:`profile-editor-save`}),e}}),o=yield*P(`profileQuery`,{params:()=>`initial`,loader:function*(){return yield*r(300,{owner:`profile-editor-load`}),{...R}}},v(h(a,{optimisticUpdate:({mutationParams:e})=>e,update:({mutationParams:e})=>e,reload:{onMutationException:!0}}),({resource:e})=>({profileSource:F(`profileSource`,function*(){return(yield*e.value())??R})})));return{profileQuery:o,draft:yield*j(`draft`,o.profileSource,_(({set:e})=>({restoreFromCancel:u(i,t=>e(t))}),({update:e,state:t})=>({setName:t=>e(e=>({...e,name:t})),setEmail:t=>e(e=>({...e,email:t})),isValid:F(`isValid`,function*(){let e=yield*t();return e.name.trim().length>0&&e.email.includes(`@`)})}))),saveProfile:a,edit$:e,cancel$:t,saveRequest$:n,restore$:i}},function*(e,t){return{reading:o(function*(){yield*l(()=>t()),yield*I(e.saveProfile.status,function*(e){e===`resolved`&&(yield*t())}),yield*u(e.cancel$,function*(){yield*t()})}),editing:o(function*(){yield*u(e.edit$,()=>t())}),saving:o(function*(){yield*I(e.saveProfile.isLoading,function*(e){e&&(yield*t())})})}},function*(e){return{reading:{hint:`The saved profile is the source of truth. “Edit” opens the draft.`,draft:e.draft},editing:{hint:`The draft is live. “Save” is validated before the source triggers the mutation.`,draft:e.draft},saving:{hint:`The mutation is in flight. The machine returns to “reading” once it settles.`,saveProfile:e.saveProfile}}},g(function*(e){let t=yield*f();return y({persist:{storeName:`demo`,key:`profile-editor`,storage:t}},b())(e)},({context:t,currentStep:n,stepContext:r,insertions:i})=>{let a=e=>F(`${e}Class`,function*(){return(yield*n())===e?`step step--active`:`step`});return{stepState:F(`stepState`,function*(){return{step:(yield*n())??`reading`}}),profileLabel:F(`profileLabel`,function*(){let e=(yield*t.saveProfile.value())??(yield*t.profileQuery.value())??R;return`${e.name} <${e.email}>`}),profileIsLoading:t.profileQuery.isLoading,draftName:F(`draftName`,function*(){return(yield*t.draft()).name}),draftEmail:F(`draftEmail`,function*(){return(yield*t.draft()).email}),readingClass:a(`reading`),editingClass:a(`editing`),savingClass:a(`saving`),stepHint:F(`stepHint`,function*(){return(yield*r())?.hint??``}),submitBlocked:F(`submitBlocked`,function*(){return!(yield*t.draft.isValid())||(yield*e.readOnly())}),historyLabel:F(`historyLabel`,function*(){let e=yield*i.history();return`step ${(yield*i.historyCursor())+1} of ${e.length}`}),backDisabled:F(`backDisabled`,function*(){return!(yield*i.canGoBack())}),forwardDisabled:F(`forwardDisabled`,function*(){return!(yield*i.canGoForward())}),requestEdit:()=>t.edit$.emit(),requestCancel:function*(){let e=(yield*t.saveProfile.value())??(yield*t.profileQuery.value())??R;t.restore$.emit(e),t.cancel$.emit()},requestSubmit:function*(){let n=yield*t.draft();!n.name.trim()||!n.email.includes(`@`)||(yield*e.readOnly())||t.saveRequest$.emit(n)},setName:e=>d(t.draft.setName(e)),setEmail:e=>d(t.draft.setEmail(e))}})),permissions:e}},({machine:e,permissions:t})=>D([N(`State machine — profile editor`),C({class:`intro`},`reading → editing → saving → reading. Every move goes through transit(), while the save is driven by reactive sources.`),w({class:`steps`},[O({class:e.readingClass},`reading`),O({class:e.editingClass},`editing`),O({class:e.savingClass},`saving`)]),C({class:`hint`},e.stepHint),k.exhaustive(e.stepState,`step`,{reading:()=>M(e.profileIsLoading,()=>w({class:`panel loading-panel`},[O({class:`spinner`,"aria-hidden":`true`}),C(`Loading profile…`)]),()=>w({class:`panel`},[C([`Saved profile: `,e.profileLabel]),w({class:`actions`},[T(`edit`,{type:`button`,click:function*(){yield*e.requestEdit()}},`Edit`)])])),editing:()=>w({class:`panel`},[w({class:`field`},[S(`profile-name-label`,{for:`profile-name`},`Name`),E(`profile-name`,{id:`profile-name`,type:`text`,value:e.draftName,*input(t){yield*e.setName(t.target.value)}})]),w({class:`field`},[S(`profile-email-label`,{for:`profile-email`},`Email`),E(`profile-email`,{id:`profile-email`,type:`email`,value:e.draftEmail,*input(t){yield*e.setEmail(t.target.value)}})]),M(e.submitBlocked,()=>C({class:`blocked`},`Save is blocked: the draft is invalid, or the profile is read-only.`)),w({class:`actions`},[T(`save`,{type:`button`,click:function*(){yield*e.requestSubmit()}},`Save`),T(`cancel`,{type:`button`,class:`secondary`,click:function*(){yield*e.requestCancel()}},`Cancel`)])]),saving:()=>w({class:`panel`},[C(`Saving…`)])}),w({class:`history`},[T(`history-back`,{type:`button`,class:`secondary`,disabled:e.backDisabled,click:function*(){yield*e.back()}},`← Back`),T(`history-forward`,{type:`button`,class:`secondary`,disabled:e.forwardDisabled,click:function*(){yield*e.forward()}},`Forward →`),O(e.historyLabel)]),w({class:`read-only`},[T(`toggle-read-only`,{type:`button`,class:`secondary`,click:function*(){yield*t.readOnly.toggle()}},`Toggle read-only`),M(t.readOnly,()=>O(`read-only: on — saving is blocked`),()=>O(`read-only: off`))])]));export{B as default};