export type Consent = { essential: true; preferences: boolean; analytics: boolean };
const key = 'ahpoong-consent';
const vetoKey=key+'-denied';
const id = 'G-HXM22WWPKP';
let current:Consent|null=null;
let scope:'saved'|'session'|'document'='document';
const denial:Consent={essential:true,preferences:false,analytics:false};
export function readConsent(): Consent | null {
 if(current?.analytics===false)return {...current};
 try{if(sessionStorage.getItem(vetoKey)==='1')return {...denial}}catch{return {...denial}}
 if(current)return {...current};
 try { const c = JSON.parse(localStorage.getItem(key) || 'null'); return c && typeof c.analytics === 'boolean' && typeof c.preferences === 'boolean' ? c : null; } catch { return null; }
}
export function applyAnalytics(granted: boolean) {
 const w = window as unknown as Record<string, any>;
 w[`ga-disable-${id}`] = !granted;
 w.dataLayer=w.dataLayer||[];
 w.gtag=w.gtag||function(...args:unknown[]){w.dataLayer.push(args)};
 w.gtag('consent','update',{analytics_storage:granted?'granted':'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 if(granted&&!document.getElementById('ga4-script')){
  const script=document.createElement('script');script.id='ga4-script';script.async=true;script.src=`https://www.googletagmanager.com/gtag/js?id=${id}`;document.head.appendChild(script);
  w.gtag('js',new Date());w.gtag('config',id);
 }
}
export function saveConsentChoice(choice: Consent): boolean {
 let sessionSaved=false,allow=choice.analytics===true;
 if(!allow)current={...choice,analytics:false};
 try{if(allow){sessionStorage.removeItem(vetoKey);if(sessionStorage.getItem(vetoKey)==='1')throw Error('Veto retained')}else sessionStorage.setItem(vetoKey,'1');sessionSaved=true}catch{
  if(allow){try{if(sessionStorage.getItem(vetoKey)==='1')allow=false}catch{allow=false}}
 }
 current={...choice,analytics:allow};applyAnalytics(allow);
 let saved=false;try{localStorage.setItem(key,JSON.stringify(current));saved=true}catch{}
 scope=saved&&sessionSaved?'saved':!allow&&sessionSaved?'session':'document';
 window.dispatchEvent(new Event('ahpoong:consent-change'));
 return saved&&sessionSaved;
}
export function consentStatus(language:'id'|'en'){
 const en=language==='en',active=readConsent()?.analytics===true;
 return (en?`Google Analytics ${active?'enabled':'disabled'}. `:`Google Analytics ${active?'aktif':'nonaktif'}. `)+(scope==='saved'?(en?'Preferences saved.':'Preferensi tersimpan.'):scope==='session'?(en?'Denial applies to this tab; persistent storage failed. Other tabs or browsers may differ.':'Penolakan berlaku untuk tab ini; penyimpanan permanen gagal. Tab atau peramban lain dapat berbeda.'):(en?'Choice applies to this page; persistence for navigation, reloads, other tabs or browsers is not guaranteed.':'Pilihan berlaku pada halaman ini; penyimpanan untuk navigasi, pemuatan ulang, tab atau peramban lain tidak dijamin.'));
}
export function handleConsentStorage(event:StorageEvent){
 if(event.key!==key)return;
 let grant=false;try{grant=JSON.parse(event.newValue||'{}').analytics===true}catch{}
 if(!grant){current={...denial};try{sessionStorage.setItem(vetoKey,'1')}catch{}}
 applyAnalytics(readConsent()?.analytics===true);window.dispatchEvent(new Event('ahpoong:consent-change'));
}
export function watchConsent(update:()=>void){window.addEventListener('storage',handleConsentStorage);window.addEventListener('ahpoong:consent-change',update);return()=>{window.removeEventListener('storage',handleConsentStorage);window.removeEventListener('ahpoong:consent-change',update)}}
