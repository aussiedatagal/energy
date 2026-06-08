import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { CStep } from '../types';
import { fmtBarVal } from '../utils';

interface ChartInstance {
  render: (data: CStep[]) => void;
}

function buildChart(container: HTMLElement, sticky: HTMLElement | null): ChartInstance {
  container.innerHTML = '';

  const isMobile = window.innerWidth < 640;
  const rm = isMobile ? 86 : 100;
  const margin = { top: 6, right: rm, bottom: 6, left: 4 };

  const W = container.clientWidth || 360;
  const iW = W - margin.left - margin.right;

  const svg = d3.select(container).append('svg').attr('width', W).attr('height', 100);

  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear().range([0, iW]);

  const LABEL_H = isMobile ? 14 : 16;
  const slotH = isMobile ? 36 : 42;
  const maxH = isMobile ? 400 : 500;

  function render(data: CStep[]) {
    const neededH = data.length * slotH + margin.top + margin.bottom;
    const H = Math.min(neededH, maxH);
    const iH = H - margin.top - margin.bottom;
    svg.attr('height', H);
    if (sticky) sticky.style.height = H + 16 + 'px';

    x.domain([0, d3.max(data, (d) => d.value)! * 1.08]);

    const t = d3.transition().duration(480).ease(d3.easeCubicInOut);

    const bh = isMobile ? 16 : 20;
    const bY = LABEL_H + 2;
    const midY = bY + bh / 2;
    const lineGap = isMobile ? 10 : 11;

    const totalH = data.length * slotH;
    const gOffsetY = totalH < iH ? margin.top : margin.top + (iH - totalH);
    g.transition(t).attr('transform', `translate(${margin.left},${gOffsetY})`);

    // Cancel in-flight transitions so rapid scrolling can't leave bars stuck at partial opacity.
    g.selectAll<SVGGElement, CStep>('.bg').interrupt();

    const join = g.selectAll<SVGGElement, CStep>('.bg').data(data, (d) => d.label);

    join.exit().transition(t).style('opacity', 0).remove();

    const entering = join
      .enter()
      .append('g')
      .attr('class', 'bg')
      .attr('transform', (_, i) => `translate(0,${i * slotH})`)
      .style('opacity', 0);

    entering
      .append('text')
      .attr('class', 'bl')
      .attr('x', 0)
      .attr('y', LABEL_H - 3)
      .attr('dominant-baseline', 'auto')
      .attr('text-anchor', 'start')
      .attr('fill', '#8b949e')
      .attr('font-family', 'inherit')
      .attr('font-size', isMobile ? '10px' : '11px')
      .text((d) => d.label);

    entering
      .append('rect')
      .attr('class', 'br')
      .attr('y', bY)
      .attr('height', bh)
      .attr('width', 0)
      .attr('rx', 3)
      .attr('fill', (d) => d.color);

    const multX = iW + 5;

    entering
      .append('text')
      .attr('class', 'bm')
      .attr('x', multX)
      .attr('dominant-baseline', 'auto')
      .attr('text-anchor', 'start')
      .attr('font-family', 'inherit')
      .attr('font-weight', '600')
      .attr('font-size', isMobile ? '10px' : '11px')
      .attr('fill', (d) => d.color)
      .text((d) => d.mult);

    entering
      .append('text')
      .attr('class', 'bv')
      .attr('x', multX)
      .attr('dominant-baseline', 'hanging')
      .attr('text-anchor', 'start')
      .attr('font-family', 'inherit')
      .attr('font-size', isMobile ? '9px' : '10px')
      .attr('fill', '#8b949e')
      .text((d) => fmtBarVal(d.value));

    // Merge entering + updating. All bars get opacity 1 and correct position,
    // so any bar caught mid-transition by rapid scrolling is immediately corrected.
    const merged = entering.merge(join);

    merged
      .transition(t)
      .style('opacity', 1)
      .attr('transform', (_, i) => `translate(0,${i * slotH})`);

    merged
      .select('.bl')
      .attr('y', LABEL_H - 3)
      .attr('font-size', isMobile ? '10px' : '11px');

    merged
      .select<SVGRectElement>('.br')
      .transition(t)
      .attr('y', bY)
      .attr('height', bh)
      .attr('width', (d) => Math.max(2, x(d.value)));

    merged
      .select('.bm')
      .attr('y', midY - lineGap / 2)
      .text((d) => d.mult);
    merged.select('.bv').attr('y', midY + lineGap / 2);
  }

  return { render };
}

interface Props {
  data: CStep[];
  stickyRef: React.RefObject<HTMLElement | null>;
}

export function ComparisonChart({ data, stickyRef }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ChartInstance | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    chartRef.current = buildChart(containerRef.current, stickyRef.current);
    return () => {
      chartRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    chartRef.current?.render(data);
  }, [data]);

  return <div ref={containerRef} id="comparison-chart" />;
}
