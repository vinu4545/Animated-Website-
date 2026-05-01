/**
 * Copies and patches legacy site assets for ColdFrame branding.
 * Run from coldframe-react: node scripts/prepare-assets.mjs
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  cpSync,
} from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const astroDir = join(publicDir, '_astro');
const repoRoot = join(root, '..');
const sourceHtml = join(repoRoot, 'oryzo.ai', 'index.html');
const sourceJs = join(repoRoot, 'oryzo.ai', '_astro', 'hoisted.CRsATKbF.js');
const cssDest = join(astroDir, 'index.TL6TuoJb.css');
const jsDest = join(astroDir, 'hoisted.CRsATKbF.js');
const bodyDest = join(root, 'src', 'coldframe-body.html');

function patchColdframe(s) {
  const reps = [
    ['https://github.com/lusionltd/ORYZO-1/tree/main/paper.pdf', '#'],
    ['https://github.com/lusionltd/ORYZO-1/tree/main/checkpoints', '#'],
    ['https://github.com/lusionltd/ORYZO-1', '#'],
    ['https://oryzo.ai/', '/'],
    ['https://oryzo.ai', '/'],
    ['lusionltd', 'coldframe'],
    ["Subscribe to Lusion's Newsletter", 'Subscribe to ColdFrame updates'],
    ['Subscribe to Lusion', 'Subscribe to ColdFrame'],
    ['business@lusion.co', 'hello@coldframe.example'],
    ['hello@lusion.co', 'hello@coldframe.example'],
    ['https://lusion.co/', '/'],
    ['https://lusion.co', '/'],
    ['lusion.co', 'ColdFrame'],
    ['https://www.instagram.com/lusionltd', '#'],
    ['https://x.com/lusionltd', '#'],
    ['https://www.linkedin.com/company/lusionltd', '#'],
    ['content="Lusion"', 'content="ColdFrame"'],
    [
      'Designed<br> by Lusion,<br> the award-winning<br> design studio.',
      'Crafted for coffee lovers, cold brew fans,<br>and anyone who believes a great drink<br>deserves a beautiful pause.',
    ],
    [
      'This website was single-shot espresso’d into existence by the creative team at Lusion.',
      'ColdFrame is our love letter to the rituals that make beverages feel special—shared with gratitude and a smile.',
    ],
    ['<span>@</span>oryzo', '<span>@</span>coldframe'],
    ['@oryzo', '@coldframe'],
    ['Oryzo-1', 'ColdFrame-1'],
    ['ORYZO Pro Max', 'ColdFrame Pro Max'],
    ['ORYZO Pro', 'ColdFrame Pro'],
    ['ORYZO AI', 'ColdFrame'],
    ['ORYZO', 'ColdFrame'],
    ['Oryzo', 'ColdFrame'],
    ['oryzo', 'coldframe'],
    ['Lusion', 'ColdFrame'],
    ['id="footer-lusion-logo"', 'id="footer-brand-mark"'],
    ['id="footer-lusion-link"', 'id="footer-brand-link"'],
    ['product-hero-option-oryzo', 'product-hero-option-coldframe'],
    ['product-hero-option-oryzo-pro', 'product-hero-option-coldframe-pro'],
    ['product-hero-option-oryzo-pro-max', 'product-hero-option-coldframe-pro-max'],
    ['href="/terms_and_conditions.pdf"', 'href="#"'],
    ['href="/privacy_policy.pdf"', 'href="#"'],
  ];
  for (const [a, b] of reps) {
    s = s.split(a).join(b);
  }
  return s;
}

mkdirSync(astroDir, { recursive: true });

const legacyRoot = join(repoRoot, 'oryzo.ai');
if (existsSync(legacyRoot)) {
  for (const dir of ['_astro', 'images', 'fonts', 'meta']) {
    const src = join(legacyRoot, dir);
    if (existsSync(src)) {
      cpSync(src, join(publicDir, dir), { recursive: true });
    }
  }
  console.log('Synced images/fonts/meta/_astro from oryzo.ai');
}

/* --- CSS: prefer local mirror, else note in README --- */
const cssMirror = join(repoRoot, 'oryzo.ai', '_astro', 'index.TL6TuoJb.css');
const cssVendor = join(root, 'vendor', 'index.TL6TuoJb.css');
const cssSource = existsSync(cssMirror) ? cssMirror : cssVendor;
if (existsSync(cssSource)) {
  let css = readFileSync(cssSource, 'utf8');
  css = css.replace(/#footer-lusion-logo/g, '#footer-brand-mark');
  css = css.replace(/#footer-lusion-link/g, '#footer-brand-link');
  writeFileSync(cssDest, css, 'utf8');
  console.log('Wrote CSS from', cssSource);
} else {
  console.warn(
    'No CSS found. Add vendor/index.TL6TuoJb.css or oryzo.ai/_astro/index.TL6TuoJb.css',
  );
}

/* --- JS bundle --- */
if (existsSync(sourceJs)) {
  let js = readFileSync(sourceJs, 'utf8');
  js = patchColdframe(js);
  js = js.replace(
    /https:\/\/[a-z0-9.-]*lusion[a-z0-9.-]*\.list-manage\.com[^"'`]*/gi,
    'https://example.com',
  );
  writeFileSync(jsDest, js, 'utf8');
  console.log('Wrote patched hoisted JS');
} else {
  console.warn('Missing source hoisted JS at', sourceJs);
}

/* --- Body HTML fragment for React --- */
if (!existsSync(sourceHtml)) {
  console.error('Missing', sourceHtml);
  process.exit(1);
}
let raw = readFileSync(sourceHtml, 'utf8');
const bodyMatch = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
  console.error('Could not parse body from index.html');
  process.exit(1);
}
let body = bodyMatch[1];
body = body.replace(
  /<script[^>]*cloudflareinsights[^>]*><\/script>/gi,
  '',
);
body = body.replace(/<link[^>]*stylesheet[^>]*_astro\/index\.[^>]*>/i, '');
body = body.replace(/<script[^>]*type="module"[^>]*_astro\/hoisted[^>]*><\/script>/i, '');

const coldframeLogoSymbol = `<symbol id="logo-tmpl" viewBox="0 0 640 100"><text x="0" y="78" fill="currentColor" font-size="72" font-weight="600" font-family="system-ui,Segoe UI,sans-serif" style="letter-spacing:-0.02em">ColdFrame</text></symbol>`;
body = body.replace(/<symbol id="logo-tmpl"[\s\S]*?<\/symbol>/, coldframeLogoSymbol);

const disclaimerText =
  'ColdFrame celebrates the ritual of great drinks—crafted with care, shared with joy, and built to brighten your everyday. Thank you for being here.';
body = body.replace(
  /<span>This entire site is a fictional creative project[\s\S]*?entertainment purposes only\.<\/span>/i,
  `<span>${disclaimerText}</span>`,
);

body = patchColdframe(body);

body = body.replace(
  '<span>We caught your attention with a non-existent product.</span><span>If we can sell a coaster, imagine what we can do for your brand.</span>',
  '<span>Every pour tells a little story.</span><span>ColdFrame celebrates coffee, tea, and cold drinks crafted with heart.</span>',
);
body = body.replace(/>lusion\.co</g, '>ColdFrame<');

writeFileSync(bodyDest, body.trimStart(), 'utf8');
console.log('Wrote', bodyDest);

const manifestPath = join(publicDir, 'meta', 'site.webmanifest');
if (existsSync(manifestPath)) {
  let man = readFileSync(manifestPath, 'utf8');
  man = man.replace(/"name":\s*"[^"]*"/, '"name": "ColdFrame"');
  man = man.replace(/"short_name":\s*"[^"]*"/, '"short_name": "ColdFrame"');
  writeFileSync(manifestPath, man, 'utf8');
}
