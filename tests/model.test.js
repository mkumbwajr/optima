import {test} from 'node:test';
import assert from 'node:assert/strict';
import {seeds,selectRecords,transition,validateDocument,csv,MODULES,MEMO_TEMPLATES,authenticate} from '../public/model.js';
test('all observed navigation modules are represented',()=>assert.equal(MODULES.length,11));
test('combined module, status, keyword and date filters do not leak other queues',()=>{
 const rows=selectRecords(seeds(),{module:'business',tab:'To review',query:'onboarding',start:'2026-09-10',end:'2026-09-11'});
 assert.equal(rows.length,1);assert.equal(rows[0].id,'sample-1');
 assert.equal(selectRecords(seeds(),{module:'memo',query:'onboarding'}).length,0);
});
test('approve and return actions update immutable records and preserve history',()=>{
 const source=seeds()[0];const approved=transition(source,'Approved','','2026-09-12');
 assert.equal(source.status,'To review');assert.equal(approved.status,'Approved');assert.equal(approved.history.length,source.history.length+1);assert.equal(approved.date,source.date);assert.equal(approved.updatedDate,'2026-09-12');
 assert.throws(()=>transition(source,'Returned','   '),/feedback/);
 const returned=transition(source,'Returned','Clarify the budget.');assert.equal(returned.history.at(-1).note,'Clarify the budget.');
 assert.throws(()=>transition(approved,'Draft'),/Cannot change/);
});
test('draft save is possible before submission requirements are met',()=>{
 const draft={module:'business',title:'New proposal',to:'',body:''};
 assert.deepEqual(validateDocument(draft),{});assert.equal(Object.keys(validateDocument(draft,true)).length,2);
 assert.deepEqual(validateDocument({...draft,to:'Department Head',body:'<p>Ready for review</p>'},true),{});
});
test('a blank rich text body cannot be submitted',()=>assert.ok(validateDocument({module:'memo',title:'Sample',to:'Reviewer',body:'<p><br></p>'},true).body));
test('thank you cards retain the original 3000-character maximum',()=>assert.ok(validateDocument({module:'certificates',title:'Thanks',body:'a'.repeat(3001)}).body));
test('CSV escapes quotation marks and spreadsheet formulas',()=>{
 const out=csv([{...seeds()[0],title:'  =HYPERLINK("example")'}]);
 assert.ok(out.includes('"\'  =HYPERLINK(""example"")"'));
});
test('numeric invoice values sort numerically',()=>{
 const rows=selectRecords([{...seeds()[0],id:'one',amount:'90'},{...seeds()[0],id:'two',amount:'1000'}],{sort:'amount',descending:false});assert.equal(rows[0].id,'one');
});
test('history and reports include all states',()=>assert.equal(selectRecords(seeds(),{tab:'Reports'}).length,seeds().length));
test('Stephen Kagaruki can sign in with the registered prototype credentials',()=>{
 const user=authenticate('skagaruki','1234');
 assert.equal(user?.name,'Stephen Kagaruki');
 assert.equal(user?.email,'Stephen.Kagaruki@crdbbank.co.tz');
 assert.equal(authenticate('skagaruki','wrong'),undefined);
});
test('memo templates contain complete operational content',()=>{
 assert.ok(MEMO_TEMPLATES.some(template=>template.title==='SimBanking New Update Release'));
 assert.ok(MEMO_TEMPLATES.some(template=>template.title==='Optima Revamp'));
 assert.ok(MEMO_TEMPLATES.every(template=>template.body.length>300&&!/lorem ipsum/i.test(template.body)));
});
