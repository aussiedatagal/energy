import { describe, expect, it } from 'vitest';
import { CSTEPS } from '../data/csteps';
import { STEPS } from '../data/steps';
import { TREEMAP_DATA } from '../data/treemap';

describe('chart data', () => {
  it('gives every bar its own id', () => {
    const ids = CSTEPS.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('cites at least one quote for every figure that is not a sum of other bars', () => {
    const leaves = TREEMAP_DATA.children.flatMap((c) => c.children);
    const uncited = [...CSTEPS, ...leaves]
      .filter((d) => d.proof.quotes.length === 0)
      .map((d) => ('label' in d ? d.label : d.name));
    expect(uncited).toEqual(['Movie night (show, popcorn, cuppa)']);
  });

  it('points every step at a bar that exists, in chart order', () => {
    const order = STEPS.filter((s) => s.item).map((s) => CSTEPS.findIndex((d) => d.id === s.item));
    expect(order).not.toContain(-1);
    expect(order).toEqual([...order].sort((a, b) => a - b));
  });

  it('keeps copy free of em dashes and exponent notation', () => {
    const copy = STEPS.map((s) => s.heading + s.sub).join(' ');
    expect(copy).not.toMatch(/—|e\+\d/);
  });
});
