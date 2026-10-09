import type { Quote } from '../types';
import { SRC } from './sources';

export interface GridShare {
  name: string;
  percent: number;
  detail: string;
  highlight?: boolean;
}

// AEMO's list of the biggest users of grid electricity in the National Electricity Market in FY36.
export const GRID_FY36: GridShare[] = [
  { name: 'Businesses', percent: 39, detail: 'Commercial and small-to-medium businesses' },
  {
    name: 'Large industrial facilities',
    percent: 21,
    detail: 'Manufacturers, processing plants and mining operations',
  },
  { name: 'Data centres', percent: 13, detail: 'About 3% today', highlight: true },
  {
    name: 'Business electrification',
    percent: 9,
    detail: 'Businesses switching from fossil fuels to electricity',
  },
  { name: 'Electric vehicles', percent: 7, detail: 'Residential and business' },
];

export const GRID_QUOTES: Quote[] = [
  {
    source: SRC.aemo,
    page: 1,
    text: 'Electricity supplied through the NEM is used by households, businesses and industry across eastern and south-eastern Australia.',
  },
  {
    source: SRC.aemo,
    page: 1,
    text: 'While data centres are forecast to become a larger consumer of electricity over the next decade, they aren’t expected to become the largest. By FY36, the biggest consumers of electricity from the grid will be:',
  },
  { source: SRC.aemo, page: 1, text: 'Businesses* 39%' },
  {
    source: SRC.aemo,
    page: 1,
    text: 'Large industrial facilities† 21% Data centres 13% Business electrification‡ 9% Electric vehicle^ 7%',
  },
  {
    source: SRC.aemo,
    page: 1,
    text: 'approximately 5 terawatt hours (TWh) of electricity in financial year (FY) 2026, equivalent to around 3% of total NEM operational electricity consumption.',
  },
  { source: SRC.aemo, page: 1, text: 'Manufacturers, processing plants and mining operations.' },
  {
    source: SRC.aemo,
    page: 1,
    text: 'Where businesses switch equipment and processes from fossil fuels to electricity.',
  },
];
