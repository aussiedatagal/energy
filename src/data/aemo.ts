import type { Quote } from '../types';
import { SRC } from './sources';

export interface GridUse {
  name: string;
  twh: number;
  detail: string;
  highlight?: boolean;
}

const TOMAGO_MW = 950;
const tomagoTwh = (TOMAGO_MW * 8760) / 1e6;

export const GRID_TOTAL = { now: 175.7, fy36: 249.4 };

// Named uses of electricity on the east coast grid (NEM), in TWh a year.
export const GRID_USES: GridUse[] = [
  {
    name: 'Homes’ rooftop solar and batteries, 2035–36',
    twh: 50.5,
    detail: 'How much less homes will need from the grid because of their own solar and batteries',
  },
  { name: 'Data centres, 2035–36', twh: 34, detail: 'AEMO forecast', highlight: true },
  {
    name: 'Tomago aluminium smelter (one site)',
    twh: +tomagoTwh.toFixed(1),
    detail: `${TOMAGO_MW} MW around the clock, the largest electricity load in Australia (2022)`,
  },
  { name: 'Data centres, 2025–26', twh: 5, detail: 'About 165 data centres', highlight: true },
  {
    name: 'Households switching from gas to electric, 2035–36',
    twh: 4.4,
    detail: 'Heat pumps, electric hot water and cooktops',
  },
  { name: '700,000 electric vehicles', twh: 1.2, detail: 'From AEMO’s faster-uptake estimate' },
];

export const GRID_QUOTES: Quote[] = [
  {
    source: SRC.esoo,
    page: 31,
    text: 'Delivered consumption in this scenario is forecast to increase from 175.7 TWh in 2025-26 to 249.4 TWh in 2035-36.',
  },
  {
    source: SRC.esoo,
    page: 6,
    text: 'Data centre usage is projected to increase seven-fold over the next decade from current levels of 5 terawatt hours (TWh) to around 34 TWh, and to grow from approximately 3% of operational demand to approximately 13%.',
  },
  {
    source: SRC.aemo,
    page: 1,
    text: 'Today, there are around 165 data centres that consumed approximately 5 terawatt hours (TWh) of electricity in financial year (FY) 2026, equivalent to around 3% of total NEM operational electricity consumption.',
  },
  {
    source: SRC.esoo,
    page: 34,
    text: 'increasing rooftop PV generation is projected to supply an expanding share of consumer electricity needs, reducing reliance on wholesale-supplied electricity and therefore widening the gap between underlying and delivered consumption from 23.3 TWh in 2025-26 to 50.5 TWh by 2035-36.',
  },
  {
    source: SRC.esoo,
    page: 34,
    text: 'Electrification (excluding transport electrification), particularly of gas appliances, continues to contribute to growth in residential consumption particularly for winter heating loads, and is estimated to reach 4.4 TWh by 2035-36.',
  },
  {
    source: SRC.esoo,
    page: 41,
    text: 'equivalent to an extra 700,000 EVs on the road, adding an extra 1.2 TWh per year to NEM electricity consumption',
  },
  {
    source: SRC.fau,
    page: 25,
    text: 'Figure 17 shows the EV fleet size projections in the NEM and WEM by scenario.',
  },
  {
    source: SRC.fau,
    page: 26,
    text: 'Vehicle numbers are similar to the 2025 IASR for all scenarios, and are projected to reach between 16 million and 30 million (66% to 98% of the whole fleet) by 2050 across the scenarios.',
  },
  {
    source: SRC.tomago,
    page: 6,
    text: '950MW constant power consumption, 12% of NSW Demand, largest load in Australia',
  },
  {
    source: SRC.aemo,
    page: 1,
    text: 'Electricity supplied through the NEM is used by households, businesses and industry across eastern and south-eastern Australia.',
  },
];
