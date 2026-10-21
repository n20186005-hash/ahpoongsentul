import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { transformSync } from 'esbuild';
import vm from 'node:vm';
const compile=(file)=>transformSync(readFileSync(file,'utf8'),{loader:'ts',format:'cjs'}).code;
let module={exports:{}};vm.runInNewContext(compile('worker.ts'),{module,exports:module.exports,Request,Response,URL,Headers});
const worker=module.exports.default;let calls=0;
const env={ASSETS:{fetch:async()=>{calls++;return new Response('missing',{status:404});}}};
for(const url of ['http://ahpoongsentul.com/en/?q=1','https://www.ahpoongsentul.com/en/?q=1']){const r=await worker.fetch(new Request(url),env);assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://ahpoongsentul.com/en/?q=1');}
let r=await worker.fetch(new Request('https://ahpoongsentul.com/privacy?q=1'),env);assert.equal(r.headers.get('location'),'https://ahpoongsentul.com/privacy/?q=1');
r=await worker.fetch(new Request('https://ahpoongsentul.com/unknown'),env);assert.equal(r.status,404);assert.equal(await r.text(),'missing');assert.match(r.headers.get('X-Robots-Tag'),/noindex/);assert.equal(calls,1);
let scripts=[];module={exports:{}};const window={dispatchEvent(){}};const sessionData=new Map();const sessionStorage={getItem:k=>sessionData.get(k)||null,setItem:(k,v)=>sessionData.set(k,v),removeItem:k=>sessionData.delete(k)};const localStorage={getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}};const document={getElementById:()=>scripts[0],createElement:()=>({}),head:{appendChild:s=>scripts.push(s)}};
vm.runInNewContext(compile('client/src/consent.ts'),{module,exports:module.exports,window,localStorage,sessionStorage,document,Date,Event:class{}});const c=module.exports;assert.equal(c.readConsent(),null);c.applyAnalytics(false);assert.equal(scripts.length,0);assert.equal(window['ga-disable-G-HXM22WWPKP'],true);
assert.equal(c.saveConsentChoice({essential:true,preferences:false,analytics:true}),false);assert.equal(scripts.length,1);assert.equal(window['ga-disable-G-HXM22WWPKP'],false);
c.saveConsentChoice({essential:true,preferences:false,analytics:false});assert.equal(window['ga-disable-G-HXM22WWPKP'],true);assert.equal(scripts.length,1);
localStorage.getItem=()=>'{malformed';assert.equal(c.readConsent().analytics,false);
console.log('PASS: canonical redirects and query preservation, ASSETS 404, storage exceptions, explicit current-page grant and immediate refusal.');
