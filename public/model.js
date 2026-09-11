export const MODULES = [
 {id:'business',name:'Business Case',plural:'Business cases',icon:'briefcase-business',group:'Documents',desc:'Build, review and track business proposals.'},
 {id:'memo',name:'Internal Memo',plural:'Internal memos',icon:'file-text',group:'Documents',desc:'Keep internal decisions and updates moving.'},
 {id:'internal',name:'Internal Letter',plural:'Internal letters',icon:'mails',group:'Documents',desc:'Manage correspondence within the bank.'},
 {id:'outgoing',name:'Outgoing Letter',plural:'Outgoing letters',icon:'send',group:'Documents',desc:'Prepare and track external correspondence.'},
 {id:'incoming',name:'Incoming Letter',plural:'Incoming letters',icon:'inbox',group:'Documents',desc:'Register received correspondence and follow its progress.'},
 {id:'motivation',name:'Motivation Paper',plural:'Motivation papers',icon:'notebook-pen',group:'Documents',desc:'Prepare supporting papers for review.'},
 {id:'ideas',name:'Innovative Ideas',plural:'Innovative ideas',icon:'lightbulb',group:'Employee services',desc:'Give your next idea a place to grow.'},
 {id:'uniforms',name:'Uniforms',plural:'Uniform requests',icon:'shirt',group:'Employee services',desc:'Manage your staff uniform requests.'},
 {id:'certificates',name:'E-Certificates',plural:'E-certificates',icon:'award',group:'Employee services',desc:'Recognise a colleague with a thank you card.'},
 {id:'duties',name:'Duties',plural:'Duties',icon:'list-checks',group:'Employee services',desc:'Your assigned duties, together in one place.'},
 {id:'invoices',name:'Supplier Invoices',plural:'Supplier invoices',icon:'receipt-text',group:'Finance',desc:'Find and track finance-forwarded invoice reports.'}
];

export const STATUSES = ['To review','Draft','Returned','In review','Approved','Received','Submitted','Archived'];

export const USERS = [
 {username:'skagaruki',password:'1234',name:'Stephen Kagaruki',first:'Stephen',initials:'SK',role:'Head of Software and Digital Solutions Engineering - Innovation and Digital Transformation Unit',department:'Innovation and Digital Transformation Unit',email:'Stephen.Kagaruki@crdbbank.co.tz',id:'skagaruki',avatar:'/assets/kagaruki.jpeg'},
 {username:'demo',password:'demo',name:'Ally Mkumbwa',first:'Ally',initials:'AM',role:'Digital Media Specialist',department:'Marketing',email:'Ally.Mkumbwa@crdbbank.co.tz',id:'amkumbwa',avatar:''}
];
export const DEFAULT_USER = USERS[0];
export function authenticate(username,password){return USERS.find(user=>user.username===String(username).trim()&&user.password===String(password));}

export const MEMO_TEMPLATES = [
 {id:'simbanking-release',title:'SimBanking New Update Release',to:'All Branches and Digital Channels Teams',ufs:'Head of Innovation and Digital Transformation',classification:'Internal',body:`<p><strong>Subject: SimBanking New Update Release</strong></p><p>We are pleased to announce a new SimBanking update designed to make everyday banking faster, clearer and more reliable for our customers.</p><p><strong>What is included</strong></p><ul><li>Improved navigation for frequently used services.</li><li>Clearer transaction confirmation and status messages.</li><li>Performance and security improvements across supported devices.</li></ul><p><strong>Required action</strong></p><p>Branch and contact centre teams should review the release briefing, familiarise themselves with the customer journey and route any incidents through the approved support channel. Digital Channels will monitor adoption, service availability and customer feedback during the release period.</p><p>The confirmed release date and support contacts will be shared after final production readiness approval.</p>`},
 {id:'optima-revamp',title:'Optima Revamp',to:'Innovation and Software Department',ufs:'Head of Department',classification:'Internal',body:`<p><strong>Subject: Optima Employee Portal Revamp</strong></p><p>This memo introduces the proposed revamp of Optima, our employee portal. The initiative will modernise the user experience while retaining the document, approval and employee-service workflows teams rely on today.</p><p><strong>Proposed focus</strong></p><ul><li>A clearer dashboard that brings priority work and recent activity together.</li><li>Consistent document creation, review and approval journeys.</li><li>Responsive access, light and dark modes, and English/Kiswahili language support.</li><li>A reusable design system that helps teams deliver future services faster.</li></ul><p>The next phase will validate the prototype with representative users, map integrations and permissions, and agree a phased migration plan. Feedback will be recorded against usability, task completion time and employee satisfaction.</p>`},
 {id:'release-readiness',title:'Digital Service Release Readiness',to:'Release Governance Committee',ufs:'Head of Software and Digital Solutions Engineering',classification:'Confidential',body:`<p><strong>Subject: Digital Service Release Readiness</strong></p><p>The delivery team requests confirmation that the proposed release has completed the required business, technology and operational checks.</p><p><strong>Readiness checkpoints</strong></p><ul><li>Business owner acceptance and customer-impact review.</li><li>Security, performance and regression testing completed.</li><li>Monitoring, incident ownership and rollback steps confirmed.</li><li>Branch, contact centre and support communications prepared.</li></ul><p>Approval should be recorded only after all critical findings are closed or formally accepted by the accountable owner. The release manager will publish the final deployment window and post-release monitoring plan.</p>`}
];

export function seeds(){
 const rows=[
  ['business','Digital onboarding experience','To review','M. Joseph','Confidential'],
  ['memo','SimBanking New Update Release','Draft','Stephen Kagaruki','Internal'],
  ['memo','Optima Revamp','In review','Stephen Kagaruki','Internal'],
  ['internal','Department planning workshop','To review','S. Hassan','Internal'],
  ['motivation','Digital delivery tooling','Returned','Stephen Kagaruki','Internal'],
  ['business','Employee portal experience','Draft','Stephen Kagaruki','Internal'],
  ['ideas','Payment Link for online sellers','Draft','Ally Mkumbwa','Internal'],
  ['outgoing','Community event partnership','Approved','Ally Mkumbwa','Open'],
  ['incoming','Creative services proposal','Received','Procurement team','Internal'],
  ['uniforms','HQ staff uniform request','Submitted','Stephen Kagaruki','Internal'],
  ['certificates','Thank you for your collaboration','Approved','Stephen Kagaruki','Internal'],
  ['invoices','Creative studio services','Approved','Finance team','Internal']
 ];
 return rows.map((r,i)=>{
  const memo=MEMO_TEMPLATES.find(t=>t.title===r[1]);
  return {id:`sample-${i+1}`,module:r[0],title:r[1],status:r[2],owner:r[3],classification:memo?.classification||r[4],reference:`OPT-2026-${String(1041+i)}`,date:`2026-09-${String(11-i%6).padStart(2,'0')}`,receivedDate:'2026-09-11',to:memo?.to||'Department Head',from:r[3],ufs:memo?.ufs||'',body:memo?.body||'<p>This document supports an active Optima workflow. Review the details, record clear feedback and follow its progress from draft through approval.</p>',recipient:'Sample colleague',category:'Service improvement',segment:'Entrepreneurs',businessCategory:'Digital services',assignee:'Department Head',vendor:'Sample creative studio',contact:'Procurement team',po:'PO-DEMO-2026',invoiceNumber:'INV-DEMO-011',amount:'1200000',vat:'216000',uniform:'HQ staff uniform',size:'M',attachment:'',history:[{action:r[2]==='Draft'?'Draft created':r[2],date:`2026-09-${String(11-i%6).padStart(2,'0')}`,by:r[3]}]};
 });
}

export function selectRecords(records,{module,tab='All',query='',start='',end='',sort='date',descending=true}={}){
 return records.filter(r=>(!module||r.module===module)&&(['All','History','Reports'].includes(tab)||r.status===tab)&&(!query||`${r.title} ${r.owner} ${r.reference} ${r.vendor||''}`.toLowerCase().includes(query.toLowerCase()))&&(!start||r.date>=start)&&(!end||r.date<=end)).sort((a,b)=>String(a[sort]||'').localeCompare(String(b[sort]||''),undefined,{numeric:true})*(descending?-1:1));
}

export function transition(record,status,note='',today=new Date().toISOString().slice(0,10),actor=DEFAULT_USER.name){
 const allowed={Draft:['In review','Submitted','Approved'],Returned:['Draft','In review'],'To review':['Approved','Returned'],'In review':['Draft'],Approved:['Archived'],Received:['Archived'],Submitted:['Archived']};
 if(!allowed[record.status]?.includes(status))throw new Error(`Cannot change ${record.status} to ${status}.`);
 if(status==='Returned'&&!note.trim())throw new Error('Add feedback before returning the document.');
 return {...record,status,updatedDate:today,history:[...record.history,{action:status,date:today,by:actor,note}]};
}

export function validateDocument(record,submit=false){
 const errors={};if(!record.title?.trim())errors.title='Enter a title.';
 if(submit&&!['uniforms','invoices','certificates'].includes(record.module)){if(!record.to?.trim())errors.to='Choose or enter a recipient.';if(!record.body?.replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').trim())errors.body='Add the document content.';}
 if(record.module==='certificates'){if((record.body||'').replace(/<[^>]*>/g,'').length>3000)errors.body='Keep your thank you message within 3,000 characters.';if(submit){if(!record.recipient?.trim())errors.recipient='Enter a colleague’s name.';if(!record.body?.replace(/<[^>]*>/g,'').trim())errors.body='Add your thank you message.';}}
 return errors;
}

export function csv(records){
 const cell=v=>{let value=String(v??'');if(/^[\s]*[=+@-]/.test(value))value="'"+value;return '"'+value.replaceAll('"','""')+'"';};
 return [['Reference','Title','Module','Owner','Status','Date'],...records.map(r=>[r.reference,r.title,MODULES.find(m=>m.id===r.module)?.name,r.owner,r.status,r.date])].map(r=>r.map(cell).join(',')).join('\r\n');
}
