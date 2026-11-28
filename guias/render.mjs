// Genera los PDF de las guías por rol en public/guias/ (se publican con el sitio).
// Uso: node guias/render.mjs [docentes directivos cee asistentes] [--png]
// Necesita Playwright con Chromium (no es dependencia del sitio: se corre a mano).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', 'public', 'guias');
const args = process.argv.slice(2);
const png = args.includes('--png');
const names = args.filter(a => !a.startsWith('--'));
const guides = names.length ? names : ['directivos', 'docentes', 'asistentes', 'cee'];

mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: png ? 1.5 : 1 });
let failed = false;

for (const name of guides) {
  await page.goto(pathToFileURL(join(here, `${name}.html`)).href, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // Una página que se pasa del alto de la hoja se corta: avisar en vez de imprimirla mal.
  const over = await page.$$eval('.page', pages => pages
    .map((p, i) => ({ i: i + 1, extra: Math.max(...[...p.children].map(c => c.getBoundingClientRect().bottom)) - p.getBoundingClientRect().bottom + 36 }))
    .filter(p => p.extra > 0.5));
  for (const p of over) { failed = true; console.error(`${name}: la página ${p.i} se pasa por ${Math.ceil(p.extra)} px`); }
  await page.pdf({ path: join(out, `hanet-guia-${name}.pdf`), width: '8.5in', height: '11in', printBackground: true, preferCSSPageSize: true });
  if (png) {
    const pages = await page.$$('.page');
    for (const [i, el] of pages.entries()) await el.screenshot({ path: join(here, '.previews', `${name}-${i + 1}.png`) });
  }
  console.log(`${name}: ${join('public', 'guias', `hanet-guia-${name}.pdf`)}`);
}

await browser.close();
if (failed) process.exit(1);
