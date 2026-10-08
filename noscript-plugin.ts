import type { Plugin } from 'vite';
import { TREEMAP_DATA } from './src/data/treemap';
import { CSTEPS } from './src/data/csteps';
import { CITATIONS } from './src/data/citations';
import { HERO, TAKEAWAY, TREEMAP_INTRO } from './src/data/copy';
import { GRID_NOTE } from './src/data/grid';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fmtKg(kg: number): string {
  const sig = (n: number) => parseFloat(n.toPrecision(3)).toLocaleString('en-AU');
  if (kg < 1) return `${sig(kg * 1000)} g CO₂e`;
  if (kg < 1000) return `${sig(kg)} kg CO₂e`;
  if (kg < 1e9) return `${sig(kg / 1000)} t CO₂e`;
  if (kg < 1e12) return `${Math.round(kg / 1e9)} million t CO₂e`;
  return `${+(kg / 1e12).toFixed(1)} Gt CO₂e`;
}

function fmtMt(mt: number): string {
  if (mt < 1000) return `${Math.round(mt)} million t CO₂e`;
  return `${+(mt / 1000).toFixed(1)} Gt CO₂e`;
}

// Injected inline in <head> so it runs before first paint. It adds data-js to <html>,
// which the CSS below uses to hide the static fallback when JS is active.
const HIDE_SCRIPT = `document.documentElement.dataset.js='1'`;

const CSS = `
[data-js] #static-fallback{display:none}
#static-fallback{max-width:900px;margin:0 auto;padding:1rem 1.25rem;color:#e6edf3;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:15px;line-height:1.6;background:#0d1117}
#static-fallback .ns-nav{display:flex;gap:1.5rem;align-items:center;padding:1rem 0 1.5rem;border-bottom:1px solid #21262d;margin-bottom:2rem;flex-wrap:wrap}
#static-fallback .ns-nav strong{margin-right:auto;font-size:15px}
#static-fallback .ns-nav a{color:#8b949e;text-decoration:none;font-size:14px}
#static-fallback h1{font-size:2.25rem;font-weight:800;margin:0 0 0.5rem;line-height:1.2}
#static-fallback h2{font-size:1.15rem;font-weight:700;margin:3rem 0 0.75rem;color:#c9d1d9;border-bottom:1px solid #21262d;padding-bottom:0.5rem}
#static-fallback p{margin:0 0 0.75rem;color:#c9d1d9}
#static-fallback .ns-stats{display:flex;gap:1rem;flex-wrap:wrap;margin:1.5rem 0 2.5rem}
#static-fallback .ns-stat{background:#161b22;border:1px solid #21262d;border-radius:8px;padding:0.9rem 1.2rem;min-width:180px}
#static-fallback .ns-stat-n{font-size:1.6rem;font-weight:700}
#static-fallback .ns-stat-l{font-size:12px;color:#8b949e;margin-top:0.15rem}
#static-fallback table{width:100%;border-collapse:collapse;margin-bottom:0.5rem;font-size:13px}
#static-fallback th{text-align:left;color:#8b949e;font-weight:600;padding:0.3rem 0.5rem;border-bottom:1px solid #21262d;font-size:11px;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap}
#static-fallback td{padding:0.3rem 0.5rem;border-bottom:1px solid #161b22;vertical-align:top}
#static-fallback tr:last-child td{border-bottom:none}
#static-fallback .cat{color:#8b949e;font-size:12px}
#static-fallback .val{color:#58a6ff;white-space:nowrap;font-weight:600}
#static-fallback .mul{color:#8b949e;font-size:12px}
#static-fallback .note{color:#8b949e;font-size:12px}
#static-fallback a{color:#58a6ff}
#static-fallback footer{margin-top:3rem;padding:1.25rem 0;border-top:1px solid #21262d;color:#8b949e;font-size:13px}
`.trim();

function buildHtml(): string {
  const sectorRows = TREEMAP_DATA.children
    .flatMap((cat) =>
      cat.children.map(
        (item) => `
      <tr>
        <td class="cat">${esc(cat.name)}</td>
        <td>${esc(item.name)}</td>
        <td class="val">${fmtMt(item.value)}</td>
        <td class="note">${esc(item.proof.primary)}</td>
      </tr>`
      )
    )
    .join('');

  const compRows = CSTEPS.map(
    (step) => `
      <tr>
        <td>${esc(step.label)}</td>
        <td class="val">${fmtKg(step.value)}</td>
        <td class="mul">${esc(step.mult)}</td>
      </tr>`
  ).join('');

  const sourceRows = CITATIONS.map(
    ({ source, quotes }) => `
      <tr>
        <td><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)}</a></td>
        <td class="note">${quotes.map((q) => esc(q.text) + (q.page ? ` (PDF page ${q.page})` : '')).join('<br><br>')}</td>
      </tr>`
  ).join('');

  const paras = (list: string[]) => list.map((p) => `<p>${esc(p)}</p>`).join('\n    ');

  return `<div id="static-fallback">
  <nav class="ns-nav">
    <strong>Energy in Perspective</strong>
    <a href="#ns-sectors">Sectors</a>
    <a href="#ns-comparison">Per activity</a>
    <a href="#ns-takeaway">Takeaway</a>
    <a href="#ns-sources">Sources</a>
  </nav>

  <section id="ns-hero">
    <p>${esc(HERO.eyebrow)}</p>
    <h1>${esc(HERO.title)}</h1>
    ${paras(HERO.lines)}
  </section>

  <section id="ns-sectors">
    <h2>Global yearly emissions, by sector</h2>
    ${paras(TREEMAP_INTRO)}
    <table>
      <thead>
        <tr><th>Category</th><th>Item</th><th>Emissions</th><th>Figure</th></tr>
      </thead>
      <tbody>${sectorRows}
      </tbody>
    </table>
  </section>

  <section id="ns-comparison">
    <h2>One ChatGPT question, compared with everything else</h2>
    <p>${esc(GRID_NOTE)} The last column compares each item with one ChatGPT question, and the yearly totals with training Llama 3.1.</p>
    <table>
      <thead>
        <tr><th>Activity</th><th>Emissions</th><th>Compared with</th></tr>
      </thead>
      <tbody>${compRows}
      </tbody>
    </table>
  </section>

  <section id="ns-takeaway">
    <h2>So what does this tell us?</h2>
    ${paras(TAKEAWAY)}
  </section>

  <section id="ns-sources">
    <h2>Sources</h2>
    <table>
      <thead>
        <tr><th>Source</th><th>Quotes</th></tr>
      </thead>
      <tbody>${sourceRows}
      </tbody>
    </table>
  </section>

  <footer>Every figure links to its source. See Sources above.</footer>
</div>`;
}

export function noscriptPlugin(): Plugin {
  return {
    name: 'noscript-fallback',
    transformIndexHtml(html) {
      const headInsert = `<script>${HIDE_SCRIPT}</script>\n  <style>${CSS}</style>`;
      const bodyContent = buildHtml();
      return html
        .replace('</head>', `${headInsert}\n  </head>`)
        .replace('<div id="root"></div>', `${bodyContent}\n  <div id="root"></div>`);
    },
  };
}
