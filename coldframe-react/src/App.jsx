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
    const heroLogo = document.getElementById('hero-logo-ref');
    const heroTopTagline = document.getElementById('hero-top-tagline');
    const heroCopy = document.getElementById('hero-copy');
    const heroCard = document.getElementById('hero-card');

    if (heroLogo) {
      heroLogo.textContent = 'COLDFRAME';
      Object.assign(heroLogo.style, {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '2',
        color: '#4b2a14',
        fontSize: 'clamp(3rem, 7vw, 6.5rem)',
        fontWeight: '800',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        lineHeight: '1',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        pointerEvents: 'none'
      });
    }

    [heroTopTagline, heroCopy, heroCard].forEach((element) => {
      if (element) {
        element.style.display = 'none';
      }
    });

    const aiTitle = document.getElementById('ai-title');
    if (aiTitle) {
      aiTitle.textContent = 'Powered by ColdFrame';
    }

    const aiBody = document.querySelector('#ai-pre .body1');
    if (aiBody) {
      aiBody.innerHTML = '<span>ColdFrame brings a richer, </span><span>smoother coffee moment </span><span>to the table.</span>';
    }
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
    <>
      <div
        id="coldframe-legacy-root"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
      <div
        id="developer-credit"
        style={{
          textAlign: 'center',
          padding: '16px 0 24px',
          fontSize: '0.9rem',
          letterSpacing: '0.04em',
          opacity: 0.8
        }}
      >
        developed by Vinay
      </div>
    </>
  );
}
