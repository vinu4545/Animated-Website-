import { useEffect } from 'react';
import bodyHtml from './coldframe-body.html?raw';

let legacyBootstrapped = false;

export default function App() {
  useEffect(() => {
    if (legacyBootstrapped) return;
    legacyBootstrapped = true;
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/_astro/hoisted.CRsATKbF.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="coldframe-legacy-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
