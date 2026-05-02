import { useEffect } from 'react';
import bodyHtml from './coldframe-body.html?raw';
import { coffeeProducts, getCafeImageUrl } from './data/coffee-products.js';

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

  useEffect(() => {
    const replaceWearableImages = () => {
      const allImages = document.querySelectorAll('img');
      allImages.forEach((img, index) => {
        if (img.src && (img.src.includes('wearable') || img.src.includes('bikini') || img.src.includes('bite') || img.src.includes('glasses') || img.src.includes('intro') || img.src.includes('outro') || img.src.includes('pocket') || img.src.includes('shoulder') || img.src.includes('yoga'))) {
          const coffeeIndex = index % coffeeProducts.length;
          img.src = getCafeImageUrl(coffeeProducts[coffeeIndex].prompt);
        }
      });
    };

    replaceWearableImages();
    const observer = new MutationObserver(replaceWearableImages);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="coldframe-legacy-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
