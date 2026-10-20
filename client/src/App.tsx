import Home from './pages/Home';
import LegalPage from './pages/LegalPage';
import NotFound from './pages/NotFound';
export default function App() {
 const route = window.location.pathname.replace(/\/+$/, '') || '/';
 const language = route === '/en' || route.startsWith('/en/') ? 'en' : 'id';
 const slug = route.replace(/^\/en(?:\/|$)/, '/').replace(/^\//, '');
 if (!slug) return <Home initialLanguage={language}/>;
 if (slug === 'privacy' || slug === 'terms' || slug === 'cookies') return <LegalPage page={slug} initialLanguage={language}/>;
 return <NotFound/>;
}
