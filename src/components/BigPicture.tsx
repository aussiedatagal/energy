import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { TREEMAP_INTRO } from '../data/copy';
import { TREEMAP_DATA } from '../data/treemap';
import type { CStep, TreemapCategory, TreemapLeaf } from '../types';

function fmtLeafDisplay(mt: number, co2Only = false): string {
  const unit = co2Only ? 'CO₂' : 'CO₂e';
  return mt >= 1000
    ? `${+(mt / 1000).toPrecision(3)} billion t ${unit}`
    : `${+mt.toPrecision(3)} million t ${unit}`;
}

function fmtLeafLabel(mt: number): string {
  return mt >= 1000 ? `${+(mt / 1000).toPrecision(3)} Gt` : `${+mt.toPrecision(3)}M t`;
}

const MOBILE_LABELS: Record<string, string> = {
  'Food & farming': 'Food',
  'Transport & consumer': 'Transport',
  'Clothes & textiles': 'Textiles',
  'Sheep & goats': 'Sheep',
  'Mining & metals': 'Mining',
  'Cattle (beef & dairy)': 'Cattle',
  'Data centres (incl. AI)': 'Data centres',
};

function fitLeafName(name: string, w: number, h: number, mobile: boolean): string {
  if (w < 22 || h < 14) return '';
  const label = mobile && MOBILE_LABELS[name] ? MOBILE_LABELS[name] : name;
  const maxChars = Math.floor((w - 10) / 5.5);
  if (maxChars < 3) return '';
  if (label.length <= maxChars) return label;
  const short = mobile && MOBILE_LABELS[name] ? MOBILE_LABELS[name] : name.split(/[\s&/]+/)[0];
  return short.length <= maxChars ? short : short.slice(0, maxChars);
}

function fitCategoryName(name: string, w: number, mobile: boolean): string {
  if (w < 44) return '';
  const label = mobile && MOBILE_LABELS[name] ? MOBILE_LABELS[name] : name;
  const maxChars = Math.floor((w - 12) / 6);
  if (maxChars < 3) return '';
  if (label.length <= maxChars) return label;
  const short = MOBILE_LABELS[name] ?? name.split(/[\s&/]+/)[0];
  return short.length <= maxChars ? short : short.slice(0, maxChars);
}

type HierarchyDatum = typeof TREEMAP_DATA | TreemapCategory | TreemapLeaf;
type RectNode = d3.HierarchyRectangularNode<HierarchyDatum>;

function updateTreemapLegend(categories: TreemapCategory[]) {
  const legendEl = document.getElementById('treemap-legend');
  if (!legendEl) return;

  legendEl.innerHTML =
    categories
      .map(
        (cat) => `
        <div class="legend-item">
          <div class="legend-dot" style="background:${cat.color}"></div>
          ${cat.name}
        </div>`
      )
      .join('') +
    `
        <div class="legend-item legend-ai-note">
          <div class="legend-dot" style="background:#56d364;outline:1.5px solid #fff;outline-offset:1px"></div>
          All data centres, including AI: around 180 million t CO₂ a year (IEA)
        </div>`;
}

function appendLeaves(
  parent: d3.Selection<any, unknown, null, undefined>,
  leaves: RectNode[],
  opts: {
    el: HTMLElement;
    color?: string;
    mobile: boolean;
    offsetX: number;
    offsetY: number;
    onShow: (item: CStep) => void;
  }
) {
  const { el, color, mobile, offsetX, offsetY, onShow } = opts;
  const leafColor = (d: RectNode) => color ?? (d.parent!.data as TreemapCategory).color;

  const leaf = parent
    .selectAll<SVGGElement, RectNode>('g.leaf')
    .data(leaves, (d) => (d.data as TreemapLeaf).name)
    .join('g')
    .attr('class', 'leaf')
    .attr('transform', (d) => `translate(${d.x0 + offsetX},${d.y0 + offsetY})`);

  leaf
    .append('rect')
    .attr('width', (d) => Math.max(0, d.x1 - d.x0))
    .attr('height', (d) => Math.max(0, d.y1 - d.y0))
    .attr('fill', (d) => leafColor(d))
    .attr('opacity', 0.72)
    .attr('rx', 2)
    .style('cursor', 'pointer')
    .on('mouseenter', function () {
      d3.select(this).attr('opacity', 0.88);
    })
    .on('mouseleave', function () {
      d3.select(this).attr('opacity', 0.72);
    })
    .on('click', (event, d) => {
      event.stopPropagation();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const leafData = d.data as TreemapLeaf;
      onShow({
        id: leafData.name,
        label: `${leafData.name}: ${fmtLeafDisplay(leafData.value, leafData.co2Only)}`,
        co2Only: leafData.co2Only,
        value: leafData.value,
        mult: '',
        color: leafColor(d),
        proof: leafData.proof,
      });
    });

  leaf
    .append('text')
    .attr('x', 5)
    .attr('y', 16)
    .text((d) => fitLeafName((d.data as TreemapLeaf).name, d.x1 - d.x0, d.y1 - d.y0, mobile))
    .attr('fill', '#fff')
    .attr('font-size', (d) => {
      const w = d.x1 - d.x0;
      const cap = mobile ? 11 : 12;
      const floor = mobile ? 8 : 9;
      return `${Math.min(cap, Math.max(floor, w / 12))}px`;
    })
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
      const minW = mobile ? 38 : 45;
      const minH = mobile ? 28 : 24;
      if (w < minW || h < minH) return '';
      return fmtLeafLabel((d.data as TreemapLeaf).value);
    })
    .attr('fill', 'rgba(255,255,255,0.55)')
    .attr('font-size', mobile ? '9px' : '10px')
    .attr('font-family', 'inherit')
    .style('pointer-events', 'none');
}

function drawMobileTreemap(el: HTMLElement, onShow: (item: CStep) => void) {
  const W = el.clientWidth || 360;
  const gap = 8;
  const headerH = 18;
  const minBand = headerH + 30;
  const categories = TREEMAP_DATA.children;

  const catMeta = categories.map((cat) => ({
    cat,
    value: d3.sum(cat.children, (leaf) => leaf.value),
  }));
  const total = d3.sum(catMeta, (d) => d.value) || 1;
  const bodyTarget = Math.round(W * 1.45);
  const bandHeights = catMeta.map(({ value }) => Math.max((value / total) * bodyTarget, minBand));
  const H = Math.round(d3.sum(bandHeights) + gap * (categories.length - 1));

  const svg = d3
    .select(el)
    .append('svg')
    .attr('width', W)
    .attr('height', H)
    .style('display', 'block');

  let y = 0;

  for (let i = 0; i < catMeta.length; i++) {
    const { cat } = catMeta[i];
    const bandH = bandHeights[i];
    const innerW = W - 4;
    const innerH = bandH - headerH - 4;

    svg
      .append('rect')
      .attr('class', 'cat-border')
      .attr('x', 0)
      .attr('y', y)
      .attr('width', W)
      .attr('height', bandH)
      .attr('fill', 'none')
      .attr('stroke', cat.color)
      .attr('stroke-width', 1)
      .attr('rx', 5);

    svg
      .append('text')
      .attr('class', 'cat-label')
      .attr('x', 8)
      .attr('y', y + 14)
      .text(fitCategoryName(cat.name, W - 16, true))
      .attr('fill', cat.color)
      .attr('font-size', '10px')
      .attr('font-weight', '600')
      .attr('font-family', 'inherit')
      .style('pointer-events', 'none');

    const innerRoot = d3
      .hierarchy<TreemapCategory | TreemapLeaf>(cat)
      .sum((d) => ('value' in d ? d.value : 0))
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    d3
      .treemap<TreemapCategory | TreemapLeaf>()
      .size([innerW, innerH])
      .paddingInner(1)
      .paddingOuter(0)
      .round(true)(innerRoot);

    appendLeaves(svg.append('g'), innerRoot.leaves() as RectNode[], {
      el,
      color: cat.color,
      mobile: true,
      offsetX: 2,
      offsetY: y + headerH + 2,
      onShow,
    });

    y += bandH + gap;
  }

  updateTreemapLegend(categories);
}

function drawDesktopTreemap(el: HTMLElement, onShow: (item: CStep) => void) {
  const W = el.clientWidth || 900;
  const H = Math.round(Math.min(W * 0.58, 560));

  const svg = d3
    .select(el)
    .append('svg')
    .attr('width', W)
    .attr('height', H)
    .style('display', 'block');

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
    .text((d) => fitCategoryName((d.data as TreemapCategory).name, d.x1 - d.x0, false))
    .attr('fill', (d) => (d.data as TreemapCategory).color)
    .attr('font-size', '11px')
    .attr('font-weight', '600')
    .attr('font-family', 'inherit')
    .style('pointer-events', 'none');

  appendLeaves(svg.append('g'), root.leaves() as RectNode[], {
    el,
    mobile: false,
    offsetX: 0,
    offsetY: 0,
    onShow,
  });

  updateTreemapLegend(TREEMAP_DATA.children);
}

function drawTreemap(el: HTMLElement, onShow: (item: CStep) => void) {
  el.innerHTML = '';
  const mobile = (el.clientWidth || 900) < 600;
  if (mobile) drawMobileTreemap(el, onShow);
  else drawDesktopTreemap(el, onShow);
}

interface Props {
  onShowProof: (item: CStep) => void;
}

export function BigPicture({ onShowProof }: Props) {
  const treemapRef = useRef<HTMLDivElement>(null);
  const onShowProofRef = useRef(onShowProof);
  onShowProofRef.current = onShowProof;

  useEffect(() => {
    if (!treemapRef.current) return;

    drawTreemap(treemapRef.current, (item) => onShowProofRef.current(item));

    let timer: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (treemapRef.current)
          drawTreemap(treemapRef.current, (item) => onShowProofRef.current(item));
      }, 280);
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
          {TREEMAP_INTRO.map((para) => (
            <p key={para} className="section-sub">
              {para}
            </p>
          ))}
        </div>
        <div ref={treemapRef} id="treemap" className="fade-in" />
        <div className="legend fade-in" id="treemap-legend" />
      </div>
    </section>
  );
}
