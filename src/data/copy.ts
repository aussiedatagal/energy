import { byId } from './csteps';

const mt = (id: string) => Math.round(byId(id).value / 1e9).toLocaleString('en-AU');
const gt = (id: string) => +(byId(id).value / 1e12).toFixed(1);
const kt = (id: string) => (Math.round(byId(id).value / 1e6) * 1000).toLocaleString('en-AU');

export const HERO = {
  eyebrow: 'Emissions in perspective',
  title: 'How big is AI’s carbon footprint?',
  lines: [
    'Here it is next to everyday things and other industries, per use and per year, with a source for every number.',
    'This page covers greenhouse gas emissions only. It doesn’t cover water use, strain on local power grids or the land data centres take up.',
  ],
};

export const TREEMAP_INTRO = [
  "CO₂e (carbon dioxide equivalent) puts all greenhouse gases on one scale, so methane from cattle and CO₂ from a jet engine can be compared by how much warming they cause. Each block's area is proportional to yearly emissions.",
  'The blocks overlap in places (food waste includes wasted beef, which is also in the cattle block), so they shouldn’t be added up. Some sources count CO₂ only and others count all gases. Tap a block for its source and working.',
];

export const TAKEAWAY = [
  `One question to ChatGPT is small next to everyday things like a shower or a short drive. At ChatGPT's scale it adds up: about ${kt('chatgptYear')} t CO₂e a year from answering prompts, around three-quarters of a Formula 1 season. Every data centre in the world, which AI is part of, emits about ${mt('dataCentres')} million t CO₂ a year. Airlines emitted ${mt('aviation')} million t in 2025, and beef and dairy cattle about ${gt('cattle')} billion t a year.`,
  'The bigger question is growth. The IEA expects data centre electricity use to more than double by 2030, with AI the main driver, and AEMO expects Australian data centres to go from about 3% to 13% of east coast grid electricity by 2036. We couldn’t find published training figures for the largest models.',
];
