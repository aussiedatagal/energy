const sig = (n: number) => (+n.toPrecision(3)).toLocaleString('en-AU');

export function fmtBarVal(kg: number, co2Only = false): string {
  const unit = co2Only ? 'CO₂' : 'CO₂e';
  if (kg < 1) return `${sig(kg * 1000)}g ${unit}`;
  if (kg < 1000) return `${(+kg.toPrecision(4)).toLocaleString('en-AU')}kg ${unit}`;
  if (kg < 10000) return `${Math.round(kg).toLocaleString('en-AU')}kg ${unit}`;
  // Tonnes are shown whole so they match the figures sources publish (1,999 t, not 2,000 t).
  if (kg < 1e9) return `${Math.round(kg / 1000).toLocaleString('en-AU')}t ${unit}`;
  if (kg < 1e12) return `${sig(kg / 1e9)}M t ${unit}`;
  return `${sig(kg / 1e12)}Gt ${unit}`;
}
