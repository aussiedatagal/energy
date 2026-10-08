import type { Proof, Quote, TreemapLeaf, TreemapRoot } from '../types';
import { byId } from './csteps';
import { SRC } from './sources';

const LIVESTOCK_TOTAL_MT = 6200;

const livestockTotal: Quote = {
  source: SRC.fao,
  page: 12,
  text: 'The findings from GLEAM reveal that livestock agrifood systems – which include cattle, buffaloes, sheep, goats, pigs and chickens – are responsible for 6.2 gigatonnes (Gt) of carbon dioxide equivalent (CO2eq) emissions.',
};

const speciesShares: Quote = {
  source: SRC.fao,
  page: 18,
  text: 'Pigs, chickens, buffaloes and small ruminants contribute to 14, 9, 8 and 7 percent, respectively, of livestock’s overall emissions.',
};

function livestockShare(name: string, percent: number): TreemapLeaf {
  const value = Math.round((LIVESTOCK_TOTAL_MT * percent) / 100);
  const proof: Proof = {
    primary: `${percent}% of 6.2 billion t CO₂e from livestock`,
    quotes: [livestockTotal, speciesShares],
    calc: `6,200 million t × ${percent}%`,
    result: `${value} million t CO₂e`,
    note: 'Based on 2015 data.',
  };
  return { name, value, proof };
}

const fromChart = (name: string, id: string): TreemapLeaf => {
  const item = byId(id);
  return { name, value: item.value / 1e9, co2Only: item.co2Only, proof: item.proof };
};

export const TREEMAP_DATA: TreemapRoot = {
  name: 'root',
  children: [
    {
      name: 'Food & farming',
      color: '#f78166',
      children: [
        fromChart('Food waste', 'foodWaste'),
        fromChart('Cattle (beef & dairy)', 'cattle'),
        livestockShare('Pigs', 14),
        livestockShare('Chickens', 9),
        livestockShare('Buffalo', 8),
        livestockShare('Sheep & goats', 7),
      ],
    },
    {
      name: 'Industry',
      color: '#ffa657',
      children: [
        {
          name: 'Mining & metals',
          value: Math.round(53200 * 0.11),
          proof: {
            primary: '11% of 53.2 billion t CO₂e in 2024',
            quotes: [
              {
                source: SRC.icmm,
                page: 8,
                text: 'The global mining and metals sector accounted for 11 per cent of total global GHG emissions in 2024, 3 per cent from mining activities, 8 per cent from metal production.',
              },
              {
                source: SRC.icmm,
                page: 8,
                text: 'Total global GHG emissions in 2024 were 53.2 Gt CO2e according to the Emissions Database for Global Atmospheric Research (EDGAR9).',
              },
            ],
            calc: '53,200 million t × 11%',
            result: `${Math.round(53200 * 0.11).toLocaleString('en-AU')} million t CO₂e`,
            note: 'Includes coal mine methane and making steel and aluminium.',
          },
        },
        {
          name: 'Cement',
          value: 1473,
          co2Only: true,
          proof: {
            primary: '1,473 million t CO₂ in 2024',
            quotes: [{ source: SRC.gcpCement, text: 'World,OWID_WRL,2024,1472817500' }],
            result: '1,473 million t CO₂',
            note: 'Global Carbon Project data (row: world, 2024, tonnes). This is the CO₂ released by the chemistry of making cement. Fuel burnt in the kilns is extra.',
          },
        },
      ],
    },
    {
      name: 'Transport & consumer',
      color: '#d2a8ff',
      children: [fromChart('Clothes & textiles', 'textiles'), fromChart('Airlines', 'aviation')],
    },
    {
      name: 'Digital',
      color: '#56d364',
      children: [
        fromChart('Data centres (incl. AI)', 'dataCentres'),
        fromChart('Bitcoin', 'bitcoin'),
      ],
    },
  ],
};
