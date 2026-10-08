import type { Quote } from '../types';
import { SRC } from './sources';

// World average emissions per kWh of electricity generated in 2025 (Ember, life-cycle CO₂e).
export const GRID_KG_PER_KWH = 0.458;

export const GRID_QUOTE: Quote = {
  source: SRC.ember,
  text: 'The emissions intensity of electricity has dropped 14% over the last decade, from 533 grams of CO2 equivalent per kWh (gCO2e/kWh) in 2015 to 458 gCO2e/kWh in 2025.',
};

export const GRID_NOTE =
  'Electricity is converted at the 2025 world average of 458 g CO₂e per kWh (Ember). Grids that burn more coal are higher and cleaner grids are lower.';

export const fromWh = (wh: number) => (wh / 1000) * GRID_KG_PER_KWH;
export const fromKwh = (kwh: number) => kwh * GRID_KG_PER_KWH;
