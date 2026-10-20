export type Consent = { essential: true; preferences: boolean; analytics: boolean };
const key = 'ahpoong-consent';
const id = 'G-HXM22WWPKP';
export function readConsent(): Consent | null {
  try { const c = JSON.parse(localStorage.getItem(key) || 'null'); return c && typeof c.analytics === 'boolean' && typeof c.preferences === 'boolean' ? c : null; } catch { return null; }
}
export function applyAnalytics(granted: boolean) {
  const w = window as unknown as Record<string, any>;
  w[`ga-disable-${id}`] = !granted;
  if (!granted) { w.gtag?.('consent', 'update', { analytics_storage: 'denied' }); return; }
  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || function (...args: unknown[]) { w.dataLayer.push(args); };
  w.gtag('consent', 'update', { analytics_storage: 'granted' });
  if (!document.getElementById('ga4-script')) {
    const script = document.createElement('script'); script.id = 'ga4-script'; script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`; document.head.appendChild(script);
    w.gtag('js', new Date()); w.gtag('config', id);
  }
}
export function saveConsentChoice(choice: Consent): boolean {
  applyAnalytics(choice.analytics === true);
  try { localStorage.setItem(key, JSON.stringify(choice)); return true; } catch { return false; }
}
