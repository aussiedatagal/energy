export function fmtBarVal(kg: number): string {
  if (kg < 0.001)  return `${(kg * 1e6).toFixed(0)}μg CO₂e`;
  if (kg < 0.01)   return `${(kg * 1000).toFixed(2)}g CO₂e`;
  if (kg < 1)      return `${(kg * 1000).toFixed(0)}g CO₂e`;
  if (kg < 1000)   return `${kg.toFixed(kg < 10 ? 1 : 0)}kg CO₂e`;
  if (kg < 1e9)    return `${Math.round(kg / 1000).toLocaleString()}t CO₂e`;
  if (kg < 1e12)   return `${Math.round(kg / 1e9)}M t CO₂e`;
  return `${+(kg / 1e12).toFixed(1)}Gt CO₂e`;
}
