import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { TREEMAP_DATA } from '../data/treemap';
import type { TreemapCategory, TreemapLeaf } from '../types';

function fmtLeafDisplay(mt: number): string {
  return mt >= 1000 ? `${+(mt / 1000).toFixed(1)} Gt CO₂e` : `${Math.round(mt)} million t CO₂e`;
}

function fmtLeafLabel(mt: number): string {
  return mt >= 1000 ? `${+(mt / 1000).toFixed(1)} Gt` : `${Math.round(mt)}M t`;
}

interface TooltipState {
  html: string;
  x: number;
  y: number;
  visible: boolean;
}

function drawTreemap(el: HTMLElement, setTooltip: (s: TooltipState) => void) {
  el.innerHTML = '';

  const W = el.clientWidth || 900;
  const H = Math.round(Math.min(W * 0.58, 560));

  const svg = d3
    .select(el)
    .append('svg')
    .attr('width', W)
    .attr('height', H)
    .style('display', 'block');

  type HierarchyDatum = typeof TREEMAP_DATA | TreemapCategory | TreemapLeaf;
  type RectNode = d3.HierarchyRectangularNode<HierarchyDatum>;

  const hier = d3
    .hierarchy<HierarchyDatum>(TREEMAP_DATA as HierarchyDatum)
    .sum((d) => ('value' in d ? (d as TreemapLeaf).value : 0))
    .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

  const root = d3
    .treemap<HierarchyDatum>()
    .size([W, H])
    .paddingOuter(3)
    .paddingTop(22)
    .paddingInner(2)
    .round(true)(hier);

  svg
    .selectAll('.cat-border')
    .data(root.children ?? ([] as RectNode[]))
    .join('rect')
    .attr('class', 'cat-border')
    .attr('x', (d) => d.x0)
    .attr('y', (d) => d.y0)
    .attr('width', (d) => d.x1 - d.x0)
    .attr('height', (d) => d.y1 - d.y0)
    .attr('fill', 'none')
    .attr('stroke', (d) => (d.data as TreemapCategory).color)
    .attr('stroke-width', 1)
    .attr('rx', 5);

  svg
    .selectAll('.cat-label')
    .data(root.children ?? ([] as RectNode[]))
    .join('text')
    .attr('class', 'cat-label')
    .attr('x', (d) => d.x0 + 6)
    .attr('y', (d) => d.y0 + 15)
    .text((d) => (d.x1 - d.x0 > 70 ? (d.data as TreemapCategory).name : ''))
    .attr('fill', (d) => (d.data as TreemapCategory).color)
    .attr('font-size', '11px')
    .attr('font-weight', '600')
    .attr('font-family', 'inherit')
    .style('pointer-events', 'none');

  const leaf = svg
    .selectAll('.leaf')
    .data(root.leaves())
    .join('g')
    .attr('class', 'leaf')
    .attr('transform', (d) => `translate(${d.x0},${d.y0})`);

  leaf
    .append('rect')
    .attr('width', (d) => Math.max(0, d.x1 - d.x0))
    .attr('height', (d) => Math.max(0, d.y1 - d.y0))
    .attr('fill', (d) => (d.parent!.data as TreemapCategory).color)
    .attr('opacity', (d) => ((d.data as TreemapLeaf).highlight ? 1 : 0.72))
    .attr('stroke', (d) => ((d.data as TreemapLeaf).highlight ? '#fff' : 'none'))
    .attr('stroke-width', 2)
    .attr('rx', 2)
    .style('cursor', 'pointer')
    .on('mousemove', (event: MouseEvent, d) => {
      const total = root.value ?? 1;
      const leaf = d.data as TreemapLeaf;
      const pct = ((leaf.value / total) * 100).toFixed(2);
      const pad = 14;
      const tw = 290;
      let x = event.clientX + pad;
      let y = event.clientY - pad;
      if (x + tw > window.innerWidth - 10) x = event.clientX - tw - pad;
      setTooltip({
        visible: true,
        x,
        y,
        html: [
          `<strong style="display:block;margin-bottom:4px">${leaf.name}</strong>`,
          `${fmtLeafDisplay(leaf.value)}<br>${pct}% of sectors shown`,
          leaf.detail
            ? `<br><br><span style="color:#8b949e;font-style:italic">${leaf.detail}</span>`
            : '',
          `<br><span style="color:#8b949e;display:block;margin-top:4px">Source: ${leaf.source}</span>`,
          leaf.note ? `<br><span style="color:#f78166">⚠ ${leaf.note}</span>` : '',
        ].join(''),
      });
    })
    .on('mouseleave', () => setTooltip({ visible: false, html: '', x: 0, y: 0 }));

  leaf
    .append('text')
    .attr('x', 5)
    .attr('y', 16)
    .text((d) => {
      const w = d.x1 - d.x0;
      const h = d.y1 - d.y0;
      const name = (d.data as TreemapLeaf).name;
      if (w < 42 || h < 20) return '';
      if (w < 85) return name.split(' ')[0];
      return name;
    })
    .attr('fill', '#fff')
    .attr('font-size', (d) => `${Math.min(12, Math.max(9, (d.x1 - d.x0) / 11))}px`)
    .attr('font-weight', '500')
    .attr('font-family', 'inherit')
    .style('pointer-events', 'none');

  leaf
    .append('text')
    .attr('x', 5)
    .attr('y', 30)
    .text((d) => {
      const w = d.x1 - d.x0;
      const h = d.y1 - d.y0;
      if (w < 80 || h < 42) return '';
      return fmtLeafLabel((d.data as TreemapLeaf).value);
    })
    .attr('fill', 'rgba(255,255,255,0.55)')
    .attr('font-size', '10px')
    .attr('font-family', 'inherit')
    .style('pointer-events', 'none');

  const legendEl = el.nextElementSibling as HTMLElement | null;
  if (legendEl?.id === 'treemap-legend') {
    legendEl.innerHTML =
      (root.children ?? [])
        .map(
          (cat) => `
        <div class="legend-item">
          <div class="legend-dot" style="background:${(cat.data as TreemapCategory).color}"></div>
          ${(cat.data as TreemapCategory).name}
        </div>`
        )
        .join('') +
      `
        <div class="legend-item legend-ai-note">
          <div class="legend-dot" style="background:#56d364;outline:1.5px solid #fff;outline-offset:1px"></div>
          All AI queries (in Digital Technology): ~6 million t CO₂e, too small to see at this scale
        </div>`;
  }
}

export function BigPicture() {
  const treemapRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!treemapRef.current) return;

    function setTooltip(s: TooltipState) {
      const el = tooltipRef.current;
      if (!el) return;
      el.style.display = s.visible ? 'block' : 'none';
      el.style.left = s.x + 'px';
      el.style.top = s.y + 'px';
      el.innerHTML = s.html;
    }

    drawTreemap(treemapRef.current, setTooltip);

    const onResize = () => {
      if (treemapRef.current) drawTreemap(treemapRef.current, setTooltip);
    };
    let timer: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(timer);
      timer = setTimeout(onResize, 280);
    };
    window.addEventListener('resize', debounced);
    return () => {
      window.removeEventListener('resize', debounced);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="big-picture">
      <div className="section-inner">
        <div className="section-header fade-in">
          <h2>Global annual emissions, by sector</h2>
          <p className="section-sub">
            CO₂e (carbon dioxide equivalent) converts all greenhouse gases into equivalent CO₂ by
            warming effect, so methane from cattle and CO₂ from a flight sit on the same scale. Each
            block's area is proportional to annual emissions in CO₂e. Hover a block to see the
            figure and source.
          </p>
        </div>
        <div ref={treemapRef} id="treemap" className="fade-in" />
        <div className="legend fade-in" id="treemap-legend" />
        <p className="chart-note fade-in">
          Some figures come directly from sources as greenhouse gas totals; others are converted
          from energy use at 0.4 kg CO₂/kWh (global average, conservative). Road transport (~6 Gt
          CO₂e) is not shown; a reliable 2024 primary source was not found.{' '}
          <a href="#sources">Full sources ↓</a>
        </p>

        <details className="methodology fade-in">
          <summary>Data sources, values, and how each was calculated</summary>
          <div className="meth-body">
            <h4>Conversion factor</h4>
            <p>
              Where a source gives energy use (TWh), we convert to CO₂ equivalent using{' '}
              <strong>0.4 kg CO₂/kWh</strong>. The IEA puts the 2023 global average at ~0.46 kg
              CO₂/kWh; 0.4 is used as a conservative figure that partly accounts for major
              data-centre operators' above-average use of renewables. Where a source already gives
              Mt CO₂e, that figure is used directly.
            </p>

            <h4>Direct figures (from primary sources, no conversion)</h4>
            <table>
              <thead>
                <tr>
                  <th>Sector</th>
                  <th>Value</th>
                  <th>Source</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Beef cattle</td>
                  <td>2,900 Mt CO₂e</td>
                  <td>FAO: Tackling Climate Change Through Livestock (2013)</td>
                  <td>
                    ~41% of the 7.1 Gt livestock total. Includes methane, land-use change, and feed.
                  </td>
                </tr>
                <tr>
                  <td>Dairy cattle</td>
                  <td>1,700 Mt CO₂e</td>
                  <td>FAO (2013)</td>
                  <td>~24% of livestock total.</td>
                </tr>
                <tr>
                  <td>Pigs</td>
                  <td>640 Mt CO₂e</td>
                  <td>FAO (2013)</td>
                  <td>~9% of livestock total.</td>
                </tr>
                <tr>
                  <td>Poultry</td>
                  <td>570 Mt CO₂e</td>
                  <td>FAO (2013)</td>
                  <td>~8% of livestock total.</td>
                </tr>
                <tr>
                  <td>Sheep &amp; goats</td>
                  <td>460 Mt CO₂e</td>
                  <td>FAO (2013)</td>
                  <td>~6.5% of livestock total.</td>
                </tr>
                <tr>
                  <td>Other livestock</td>
                  <td>830 Mt CO₂e</td>
                  <td>FAO (2013)</td>
                  <td>
                    Remainder. Sum of all livestock = 7,100 Mt CO₂e = 14.5% of global GHG (FAO).
                  </td>
                </tr>
                <tr>
                  <td>Food waste</td>
                  <td>3,300 Mt CO₂e</td>
                  <td>UNFCCC (2021)</td>
                  <td>
                    8–10% of global GHG. Covers emissions from growing, processing, transporting,
                    and discarding food.
                  </td>
                </tr>
                <tr>
                  <td>Mining &amp; metals</td>
                  <td>4,500 Mt CO₂e</td>
                  <td>IndexBox / Semafor (2026)</td>
                  <td>
                    Reported as 11% of global GHG. Range: 11% × 37 Gt CO₂ = 4,070 Mt; 11% × 57 Gt
                    CO₂e = 6,270 Mt. McKinsey estimates 4–5 Gt for direct emissions. 4,500 Mt used
                    as mid-range.
                  </td>
                </tr>
                <tr>
                  <td>Cement &amp; concrete</td>
                  <td>1,470 Mt CO₂e</td>
                  <td>Statista (2024)</td>
                  <td>
                    Direct figure from global cement CO₂ data. ~8% of global CO₂. Half from
                    calcination (unavoidable by switching fuels).
                  </td>
                </tr>
                <tr>
                  <td>Fast fashion</td>
                  <td>1,200 Mt CO₂e</td>
                  <td>Earth.org; Climateq</td>
                  <td>
                    8–10% of global CO₂. Significant uncertainty; the range is 800–1,800 Mt
                    depending on scope.
                  </td>
                </tr>
                <tr>
                  <td>Aviation</td>
                  <td>942 Mt CO₂e</td>
                  <td>IATA (2024)</td>
                  <td>
                    CO₂ only. Excluding non-CO₂ warming effects (contrails, NOₓ) which may roughly
                    double the effective climate impact.
                  </td>
                </tr>
                <tr>
                  <td>Standby / vampire power</td>
                  <td>370 Mt CO₂e</td>
                  <td>IEA</td>
                  <td>
                    IEA states ~1% of global CO₂ → 1% × 37,000 Mt = 370 Mt. IEA also states ~5% of
                    global electricity (1,450 TWh). At 0.4 kg/kWh that would imply 580 Mt; the gap
                    is because standby power is concentrated in countries with cleaner-than-average
                    grids (lower carbon intensity).
                  </td>
                </tr>
                <tr>
                  <td>Bitcoin mining</td>
                  <td>40 Mt CO₂e</td>
                  <td>Cambridge CBECI 2025 Digital Mining Industry Report</td>
                  <td>
                    39.8 Mt CO₂e, rounded. CBECI uses its own energy-mix data (not the global
                    average grid), implying ~0.29 kg CO₂/kWh for the Bitcoin mining sector, lower
                    than the global average because mining has shifted toward renewable energy
                    sources.
                  </td>
                </tr>
              </tbody>
            </table>

            <h4>Converted from energy use (TWh × 0.4 kg CO₂/kWh ÷ 1,000 = Mt CO₂e)</h4>
            <table>
              <thead>
                <tr>
                  <th>Sector</th>
                  <th>Energy (TWh)</th>
                  <th>Source</th>
                  <th>Calculation</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All data centres</td>
                  <td>415 TWh</td>
                  <td>IEA Energy and AI (2024)</td>
                  <td>
                    <code>415 × 0.4</code>
                  </td>
                  <td>166 Mt CO₂e</td>
                </tr>
                <tr>
                  <td>Video streaming</td>
                  <td>~250 TWh (est.)</td>
                  <td>IEA (2020); Carbon Brief (2020)</td>
                  <td>
                    <code>~250 × 0.4</code>
                  </td>
                  <td>~100 Mt CO₂e</td>
                </tr>
                <tr>
                  <td>All AI queries</td>
                  <td>15 TWh</td>
                  <td>IEA Energy and AI (2025)</td>
                  <td>
                    <code>15 × 0.4</code>
                  </td>
                  <td>6 Mt CO₂e</td>
                </tr>
              </tbody>
            </table>

            <h4>What Mt CO₂e means</h4>
            <p>
              Megatonnes of CO₂ equivalent. Converts all greenhouse gases (CO₂, methane, nitrous
              oxide, etc.) into their equivalent warming effect relative to CO₂ over 100 years
              (GWP100). Methane = ~28–30× CO₂; nitrous oxide = ~265× CO₂. Standard unit in IPCC and
              UN reporting.
            </p>

            <p className="meth-warn">
              <strong>Comparability note:</strong> Not all figures use identical accounting
              boundaries. IATA aviation figures are CO₂-only; FAO livestock figures are full CO₂e
              including methane. The treemap mixes these to show approximate scale; for precise
              sector comparisons, consult the underlying reports linked in Sources.
            </p>
          </div>
        </details>
      </div>
      <div
        ref={tooltipRef}
        className="tooltip"
        style={{ display: 'none', position: 'fixed', pointerEvents: 'none' }}
      />
    </section>
  );
}
