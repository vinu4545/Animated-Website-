import { useEffect } from 'react';
import bodyHtml from './coldframe-body.html?raw';

const userImages = [
  '/images/Main_Image.jpg',
  '/images/Cold-Coffee-4.webp',
  '/images/Cold-Coffee-with-ice-cream.png',
  '/images/Image1.jpg',
  '/images/oreo-cold-coffee-shake.jpg'
];

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
      let imageIndex = 0;
      allImages.forEach((img) => {
        if (img.src) {
          img.src = userImages[imageIndex % userImages.length];
          imageIndex++;
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
