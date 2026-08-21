import{i as e,n as t,r as n,t as r}from"./on_-DViBxOLa.js";import{t as i}from"./craft-use-o8lQjmyY.js";import{o as a}from"./browser-boundaries-Dlc1fQ-Y.js";import{t as o}from"./source_-S3eBChlE.js";import{n as s,t as c}from"./craft-machine-history-3NthL9qO.js";import{A as l,f as u,g as d,i as f,k as p,r as m,u as h,v as g,x as _}from"./hyperscript-LLgsElhq.js";import{b as v,r as y,s as b,y as x}from"./index-DcyLmPYS.js";var S=`:scope {
  display: block;
  max-width: 760px;
  margin: 0 auto;
  color: #1f2937;
}

.intro {
  margin: 0 0 1.5rem;
  color: #475569;
}

.rows {
  display: grid;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.row {
  display: grid;
  gap: 0.6rem;
  padding: 1rem 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  background: #fff;
}

.row__head {
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
}

.row__title {
  font-weight: 600;
}

.badge {
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #1d4ed8;
  background: #eff6ff;
}

.row__note {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.7rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.45rem;
  font: inherit;
}

.row__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
}

:scope button {
  padding: 0.4rem 0.8rem;
  border: 0;
  border-radius: 0.4rem;
  color: #fff;
  background: #2563eb;
  font-weight: 600;
  cursor: pointer;
}

:scope button.secondary {
  color: #1e293b;
  background: #e2e8f0;
}

:scope button:disabled {
  opacity: 0.45;
  cursor: default;
}

:scope button:focus-visible,
:scope input:focus-visible {
  outline: 2px solid #1d4ed8;
  outline-offset: 2px;
}

.row__history {
  color: #64748b;
  font-size: 0.85rem;
}
`,C=[{id:`craft-2941`,title:`Type the transitions record`},{id:`craft-3007`,title:`Anchor the history on the entity`},{id:`craft-3102`,title:`Stop numbering singletons`}],w=l(`TaskRow`,{stylesUrl:S},function*(l){let{id:u,title:d}=i(l()),f=yield*a();return{machine:yield*t(`taskRow`,function*(){return{note:yield*v(`note`,``,({set:e})=>({to:t=>e(t)})),start$:yield*o(`start$`),finish$:yield*o(`finish$`),reopen$:yield*o(`reopen$`)}},function*(t,i){return{todo:e(function*(){yield*n(()=>i()),yield*r(t.reopen$,()=>i())}),doing:e(function*(){yield*r(t.start$,()=>i())}),done:e(function*(){yield*r(t.finish$,()=>i())})}},function*(e){return{todo:{note:e.note},doing:{note:e.note},done:{note:e.note}}},e=>{let t=s({persist:{storeName:`demo`,key:()=>`task-${u}`,storage:f}},c())(e);return{...t,note:e.context.note,setNote:t=>i(e.context.note.to(t)),step:x(`step`,function*(){return(yield*e.currentStep())??`todo`}),isTodo:x(`isTodo`,function*(){return(yield*e.currentStep())===`todo`}),isDoing:x(`isDoing`,function*(){return(yield*e.currentStep())===`doing`}),isDone:x(`isDone`,function*(){return(yield*e.currentStep())===`done`}),startDisabled:x(`startDisabled`,function*(){return(yield*e.currentStep())!==`todo`}),finishDisabled:x(`finishDisabled`,function*(){return(yield*e.currentStep())!==`doing`}),reopenDisabled:x(`reopenDisabled`,function*(){return(yield*e.currentStep())===`todo`}),historyLabel:x(`historyLabel`,function*(){let e=yield*t.history(),n=yield*t.historyCursor();return`${d} · moment ${n+1}/${e.length}`}),backDisabled:x(`backDisabled`,function*(){return!(yield*t.canGoBack())}),forwardDisabled:x(`forwardDisabled`,function*(){return!(yield*t.canGoForward())}),start:()=>e.context.start$.emit(),finish:()=>e.context.finish$.emit(),reopen:()=>e.context.reopen$.emit()}}),title:d,id:u}},({machine:e,title:t})=>u({class:`row`},[f({class:`row__head`},[_({class:`row__title`},t),_({class:`badge`},e.step)]),h(`task-note`,{type:`text`,class:`row__note`,placeholder:`Note recorded with each move…`,value:e.note,*input(t){yield*e.setNote(t.target.value)}}),f({class:`row__actions`},[m(`task-start`,{type:`button`,disabled:e.startDisabled,click:function*(){yield*e.start()}},`Start`),m(`task-finish`,{type:`button`,disabled:e.finishDisabled,click:function*(){yield*e.finish()}},`Finish`),m(`task-reopen`,{type:`button`,class:`secondary`,disabled:e.reopenDisabled,click:function*(){yield*e.reopen()}},`Reopen`)]),f({class:`row__actions`},[m(`task-back`,{type:`button`,class:`secondary`,disabled:e.backDisabled,click:function*(){yield*e.back()}},`← Back`),m(`task-forward`,{type:`button`,class:`secondary`,disabled:e.forwardDisabled,click:function*(){yield*e.forward()}},`Forward →`),_({class:`row__history`},e.historyLabel)])])),T=l(`TaskBoardStateMachineList`,{stylesUrl:S},function*(){return{}},()=>g([b(`State machine — one per row`),d({class:`intro`},`Three rows, three machines, three histories. Rewinding one row leaves the others alone, and each history is anchored on the task id — so it survives a reload and a reorder.`),p({class:`rows`},y(C,{track:e=>e.id},e=>w({task:e})))]));export{T as default};