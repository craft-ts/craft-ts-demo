import{i as e,n as t,r as n,t as r}from"./on_-DViBxOLa.js";import{t as i}from"./source_-S3eBChlE.js";import{A as a,g as o,i as s,r as c,u as l,v as u,x as d}from"./hyperscript-LLgsElhq.js";import{t as f}from"./match-block-D7Smsr_M.js";import{b as p,s as m,y as h}from"./index-DcyLmPYS.js";var g=a(`TextEditorStateMachine`,{stylesUrl:`:scope {
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
  margin-bottom: 1rem;
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

.panel {
  display: grid;
  gap: 0.75rem;
  padding: 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  background: #fff;
}

.field-label {
  font-weight: 600;
  color: #334155;
}

:scope input[type='text'] {
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

:scope button.secondary {
  color: #1e293b;
  background: #e2e8f0;
}

:scope button:focus-visible,
:scope input:focus-visible {
  outline: 2px solid #1d4ed8;
  outline-offset: 2px;
}
`},function*(){return{machine:yield*t(`textEditor`,function*(){let e=yield*i(`text.edit`),t=yield*i(`text.change`),n=yield*i(`text.commit`),a=yield*i(`text.cancel`);return{edit$:e,change$:t,commit$:n,cancel$:a,text:yield*p(`text`,{committedValue:``,value:``},({patch:e})=>({change:r(t,t=>e(()=>({value:t}))),commit:r(n,()=>e(e=>({committedValue:e.value}))),cancel:r(a,()=>e(e=>({value:e.committedValue})))}))}},function*(t,i){return{reading:e(function*(){yield*n(()=>i()),yield*r(t.commit$,()=>i()),yield*r(t.cancel$,()=>i())}),editing:e(function*(){yield*r(t.edit$,()=>i())})}},function*(e){return{reading:{text:e.text},editing:{text:e.text}}},({context:e,currentStep:t})=>({value:h(`value`,function*(){return(yield*e.text()).value}),committedValue:h(`committedValue`,function*(){return(yield*e.text()).committedValue}),stepState:h(`stepState`,function*(){return{step:(yield*t())??`reading`}}),readingClass:h(`readingClass`,function*(){return(yield*t())===`reading`?`step step--active`:`step`}),editingClass:h(`editingClass`,function*(){return(yield*t())===`editing`?`step step--active`:`step`}),edit:()=>e.edit$.emit(),change:t=>e.change$.emit(t),commit:()=>e.commit$.emit(),cancel:()=>e.cancel$.emit()}))}},({machine:e})=>u([m(`State machine — declarative text editor`),o({class:`intro`},`The transitions only move between reading and editing. The text state reacts to change, commit, and cancel with declarative patch reactions.`),s({class:`steps`},[d({class:e.readingClass},`reading`),d({class:e.editingClass},`editing`)]),f.exhaustive(e.stepState,`step`,{reading:()=>s({class:`panel`},[o([`Committed value: `,e.committedValue]),o([`Current value: `,e.value]),c(`text-edit`,{type:`button`,click:function*(){yield*e.edit()}},`Edit`)]),editing:()=>s({class:`panel`},[_(`Value`),l(`text-input`,{type:`text`,value:e.value,input:function*(t){yield*e.change(t.target.value)}}),s({class:`actions`},[c(`text-commit`,{type:`button`,click:function*(){yield*e.commit()}},`Commit`),c(`text-cancel`,{type:`button`,class:`secondary`,click:function*(){yield*e.cancel()}},`Cancel`)])])})]));function _(e){return d({class:`field-label`},e)}export{g as default};