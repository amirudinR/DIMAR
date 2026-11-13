import { useEffect, useState } from 'react';
import App from './App.jsx';
import Packages from './Packages.jsx';

const route = () => (window.location.pathname.replace(/\/+$/, '') || '/');

export default function Router() {
  const [path, setPath] = useState(route);

  useEffect(() => {
    const onPop = () => setPath(route());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (path === '/paket') return <Packages />;
  return <App />;
}
