import {build} from 'esbuild';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const old=process.argv.includes('--expect-original-failure');
const reactShim=`const h=globalThis.__hookFixture;const React={createElement:(type,props,...children)=>({type,props:{...props,children}})};export default React;export const useState=x=>h.state(x);export const useEffect=(f,d)=>h.effect(f,d);`;
const bundled=await build({entryPoints:['client/src/pages/LegalPage.tsx'],bundle:true,write:false,format:'iife',globalName:'LegalModule',jsx:'transform',plugins:[{name:'isolated-hook-fixture',setup(b){
 b.onResolve({filter:/^react$/},()=>({path:'react',namespace:'fixture'}));
 b.onResolve({filter:/^lucide-react$/},()=>({path:'icons',namespace:'fixture'}));
 b.onLoad({filter:/.*/,namespace:'fixture'},args=>({contents:args.path==='react'?reactShim:'export const ArrowLeft=()=>null,Check=()=>null,Globe2=()=>null,ShieldCheck=()=>null;',loader:'js'}));
 if(old)b.onLoad({filter:/LegalPage\.tsx$/},()=>({contents:execFileSync('git',['show','6b2db4e4abb24682fd72b7abc73bcc312ac290b1:client/src/pages/LegalPage.tsx'],{encoding:'utf8'}),loader:'tsx'}));
}}]});
const key='ahpoong-consent',choice=analytics=>JSON.stringify({essential:true,preferences:false,analytics});
function fixture(lang,shared=new Map()){
 const states=[],effects=[],session=new Map(),scripts=[],listeners={};let index=0,pending=false,tree,queued=[];
 const hooks={state(initial){const at=index++;if(!(at in states))states[at]=initial;return[states[at],value=>{const next=typeof value==='function'?value(states[at]):value;if(!Object.is(next,states[at])){states[at]=next;pending=true;}}];},effect(fn,deps){const at=index++;if(!effects[at]||deps.some((v,i)=>!Object.is(v,effects[at].deps[i])))queued.push(()=>{effects[at]?.cleanup?.();effects[at]={deps,cleanup:fn()};});}};
 const context={__hookFixture:hooks,Event:class{constructor(type){this.type=type;}},Date,localStorage:{getItem:k=>shared.get(k)??null,setItem:(k,v)=>shared.set(k,v)},sessionStorage:{getItem:k=>session.get(k)??null,setItem:(k,v)=>session.set(k,v),removeItem:k=>session.delete(k)},document:{getElementById:id=>scripts.find(x=>x.id===id)||null,createElement:()=>({}),head:{appendChild:s=>scripts.push(s)}},location:{href:''},addEventListener(type,fn){(listeners[type]||=[]).push(fn);},removeEventListener(type,fn){listeners[type]=(listeners[type]||[]).filter(x=>x!==fn);},dispatchEvent(event){for(const fn of listeners[event.type]||[])fn(event);}};
 context.window=context;vm.createContext(context);vm.runInContext(bundled.outputFiles[0].text,context);
 function expand(node){if(node==null||typeof node!=='object')return node;if(Array.isArray(node))return node.map(expand);if(typeof node.type==='function')return expand(node.type(node.props));return{...node,props:{...node.props,children:node.props.children?.map(expand)}};}
 function render(){index=0;pending=false;tree=expand(context.LegalModule.default({page:'cookies',initialLanguage:lang}));const callbacks=queued;queued=[];for(const fn of callbacks)fn();}
 function flush(){let limit=0;while(pending){assert.ok(limit++<10);render();}}
 function all(node=tree){return Array.isArray(node)?node.flatMap(all):node&&typeof node==='object'?[node,...(node.props.children||[]).flatMap(all)]:[];}
 function text(node){return Array.isArray(node)?node.map(text).join(''):node&&typeof node==='object'?text(node.props.children):typeof node==='string'?node:'';}
 function event(fn){fn();flush();}
 render();flush();
 return {shared,scripts,context,toggle(){event(()=>all().find(x=>x.props.role==='switch').props.onClick());},save(){event(()=>all().find(x=>x.type==='button'&&x.props.className==='primary-button').props.onClick());},receive(){event(()=>context.dispatchEvent({type:'storage',key,newValue:shared.get(key)}));},external(value){shared.set(key,choice(value));event(()=>context.dispatchEvent({type:'storage',key,newValue:shared.get(key)}));},state(){return{checked:all().find(x=>x.props.role==='switch').props['aria-checked'],status:text(all().find(x=>x.props.role==='status')),disabled:context['ga-disable-G-HXM22WWPKP'],stored:shared.get(key),libraries:scripts.length};}};
}
for(const lang of ['en','id']){
 const f=fixture(lang);f.toggle();f.save();assert.equal(f.state().checked,true);assert.equal(f.state().disabled,false);assert.match(f.state().status,lang==='en'?/enabled/:/aktif/);
 f.toggle();f.save();
 if(old){assert.equal(f.state().checked,false);assert.equal(f.state().disabled,true);assert.match(f.state().status,lang==='en'?/enabled/:/Google Analytics aktif\./);console.log(lang+': reproduced original stale enabled feedback after off-save with both React state values unchanged.');continue;}
 function verifyOff(){assert.equal(f.state().checked,false);assert.equal(f.state().disabled,true);assert.match(f.state().status,lang==='en'?/disabled/:/nonaktif/);assert.equal(JSON.parse(f.state().stored).analytics,false);}
 verifyOff();f.save();verifyOff();f.toggle();assert.equal(f.state().status,'');f.save();assert.equal(f.state().checked,true);assert.equal(f.state().disabled,false);assert.match(f.state().status,lang==='en'?/enabled/:/Google Analytics aktif\./);f.toggle();f.save();verifyOff();f.save();verifyOff();
 f.toggle();f.save();const other=fixture(lang,f.shared);other.toggle();other.save();f.receive();verifyOff();f.save();verifyOff();assert.equal(f.state().libraries,1);
 console.log(lang+': PASS actual component+consent module allow-save/off-save/on-save/off-save/repeated-save, draft clears old feedback, cross-tab denial status, single library.');
}
console.log('Hook fixture models Object.is state bailout, event batching and effects; it is not React DOM or browser acceptance.');
