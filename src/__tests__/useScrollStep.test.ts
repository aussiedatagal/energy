import { describe, it, expect } from 'vitest';
import { computeNextCount } from '../hooks/useScrollStep';

describe('computeNextCount', () => {
  it('shows the step plus one preview bar ahead', () => {
    expect(computeNextCount(5)).toBe(7);
  });

  it('decreases when scrolling backward — bars should disappear', () => {
    expect(computeNextCount(1)).toBe(3);
  });

  it('starts at minimum 2 bars', () => {
    expect(computeNextCount(0)).toBe(2);
  });
});
