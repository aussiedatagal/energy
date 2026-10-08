import { byId } from './csteps';

const mt = (id: string) => Math.round(byId(id).value / 1e9).toLocaleString('en-AU');
const gt = (id: string) => +(byId(id).value / 1e12).toFixed(1);

export const HERO = {
  eyebrow: 'Emissions in perspective',
  title: 'Is AI really the biggest problem?',
  lines: [
    "There's been a lot of talk lately about the environmental impact of AI.",
    'Those concerns are valid, but how big is it next to everything else?',
    'Here it is next to everyday things and other industries, with a source for every number.',
  ],
};

export const TREEMAP_INTRO = [
  "CO₂e (carbon dioxide equivalent) puts all greenhouse gases on one scale, so methane from cattle and CO₂ from a jet engine can be compared by how much warming they cause. Each block's area is proportional to yearly emissions.",
  'The blocks overlap in places (food waste includes wasted beef, which is also in the cattle block), so they shouldn’t be added up. Some sources count CO₂ only and others count all gases. Tap a block for its source and working.',
];

export const TAKEAWAY = [
  `Per question, AI's footprint is small next to everyday things like a shower or a short drive. Added up, every data centre in the world, which AI is part of, emits about ${mt('dataCentres')} million t CO₂ a year. Airlines emitted ${mt('aviation')} million t in 2025, and beef and dairy cattle about ${gt('cattle')} billion t a year.`,
  'What is less certain is where it’s heading. The IEA expects data centre electricity use to more than double by 2030, with AI the main driver. AEMO expects Australian data centres to be using 13% of the grid’s electricity by 2036.',
];
