const sig = (n: number) => (+n.toPrecision(3)).toLocaleString('en-AU');

export function fmtBarVal(kg: number, co2Only = false): string {
  const unit = co2Only ? 'CO₂' : 'CO₂e';
  if (kg < 0.001) return `${sig(kg * 1e6)}μg ${unit}`;
  if (kg < 1) return `${sig(kg * 1000)}g ${unit}`;
  if (kg < 1000) return `${sig(kg)}kg ${unit}`;
  if (kg < 1e9) return `${sig(kg / 1000)}t ${unit}`;
  if (kg < 1e12) return `${sig(kg / 1e9)}M t ${unit}`;
  return `${sig(kg / 1e12)}Gt ${unit}`;
}
