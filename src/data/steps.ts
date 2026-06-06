import type { StepItem } from '../types';

export const STEPS: StepItem[] = [
  {
    step: 0,
    heading: 'Google search vs ChatGPT',
    sub: 'A ChatGPT query uses about 40× the energy of a traditional Google search. This is a standard keyword search. Google\'s AI-generated answers use more energy per query.',
  },
  {
    step: 1,
    heading: 'AI image generation',
    sub: 'About 2.5× a ChatGPT text prompt on modern hardware. Tap ? on any bar for the source.',
  },
  {
    step: 2,
    heading: 'Charging your phone (daily)',
    sub: 'About 8× a ChatGPT query. And manufacturing the phone was about 16,000× more than that. But we\'ll get to that in a minute.',
  },
  {
    step: 3,
    heading: '1 hour of Netflix HD',
    sub: 'About 10× a ChatGPT query, for the data centre and network only. The IEA\'s full-chain figure of 36g CO₂e includes your viewing device (laptop or TV), which adds another ~31g. That\'s excluded here because ChatGPT\'s figure is server-side only.',
  },
  {
    step: 4,
    heading: 'Microwave popcorn, 3 minutes',
    sub: '42× a ChatGPT query. A microwave draws about 1 kW and converts it directly to heat — no intermediaries, no efficiency losses. The emissions come entirely from the electricity grid.',
  },
  {
    step: 5,
    heading: 'Boiling a full kettle',
    sub: '125× a ChatGPT query. A kettle is essentially a resistor submerged in water — it draws 2.4 kW and converts almost all of it to heat. It\'s one of the highest-draw appliances in most kitchens, just in a very short burst.',
  },
  {
    step: 6,
    heading: '1 day storing 1TB in the cloud',
    sub: 'About 125× a ChatGPT query, just sitting there. Cloud storage means servers in data centres running around the clock to keep your files accessible.',
  },
  {
    step: 7,
    heading: 'A 500ml bottle of water',
    sub: 'About 100g CO₂e for a typical locally sourced bottle. The PET plastic accounts for roughly half of it. Petroleum-derived plastic is energy-intensive to produce, and the emissions are locked into the bottle before it\'s even filled.',
  },
  {
    step: 8,
    heading: 'AI video, 10 seconds',
    sub: 'About 780× a ChatGPT text prompt, based on Sora\'s estimated compute time. Smaller video models use less; this is the high end.',
  },
  {
    step: 9,
    heading: '10-minute electric shower',
    sub: '1,250× a ChatGPT query. An electric shower heats cold water on demand using a resistive element drawing 9 kW continuously for the whole duration. It\'s the same mechanism as a kettle, just running for 10 minutes instead of 3.',
  },
  {
    step: 10,
    heading: '1 kg of raw rice',
    sub: '~1 kg CO₂e, about 100× less than 1 kg of beef. Most of it is methane from flooded paddies, not energy use.',
  },
  {
    step: 11,
    heading: 'Drive 10 km in a petrol car',
    sub: '3,100× a ChatGPT query. Burning petrol releases CO₂ directly from the exhaust — about 150g per kilometre for an average car. Around 80% of the fuel\'s energy is lost as heat; only about 20% actually moves the vehicle.',
  },
  {
    step: 12,
    heading: 'A cotton t-shirt',
    sub: 'About 7 kg CO₂e for a standard 200g cotton shirt. Cotton farming is the biggest cost, needing fertiliser, irrigation, and often coal-powered spinning mills. About 5× the footprint of driving 10 km.',
  },
  {
    step: 13,
    heading: '1 pair of fast fashion jeans',
    sub: '42,000× a ChatGPT query. Cotton farming and dyeing account for most of it.',
  },
  {
    step: 14,
    heading: 'Manufacturing 1 smartphone',
    sub: '135,000× a ChatGPT query. Manufacturing is 80% of the device\'s total lifetime emissions; using it for years adds relatively little.',
  },
  {
    step: 15,
    heading: '1 kilogram of beef',
    sub: '207,000× a ChatGPT query. About 60% of it is methane from the cow\'s digestive system, burped out continuously. Methane has about 28× the warming effect of CO₂ over 100 years. The rest is feed production (fertiliser, land use) and manure.',
  },
  {
    step: 16,
    heading: 'Running a fridge, 1 year',
    sub: '~200 kg CO₂e, more than twice the footprint of 1 kg of beef. It runs 24 hours a day without anyone thinking about it. Over a year, that adds up to about 3 smartphones worth of carbon.',
  },
  {
    step: 17,
    heading: 'One Bitcoin transaction',
    sub: '~450 kg CO₂e. About 2 years of running a fridge, to confirm a single payment. The network consumes ~130 TWh/year globally, split across ~115 million transactions. A Visa payment costs about 3 g CO₂e. Bitcoin is roughly 150,000× more carbon-intensive per transaction.',
  },
  {
    step: 18,
    heading: '5m³ of concrete (cement truck load)',
    sub: '3.4 million× a ChatGPT query. About half of it is unavoidable chemistry, not energy use.',
  },
  {
    step: 19,
    heading: 'Return flight, Sydney to London',
    sub: '7.3 million× a ChatGPT query. Kerosene is extremely energy-dense, which is the only reason long-haul flight is possible at all. Burning it releases CO₂ directly into the upper atmosphere. The figure here is direct CO₂ only; contrails and NOₓ effects at altitude roughly double the actual warming impact but are excluded from official accounting.',
  },
  {
    step: 20,
    heading: 'Manufacturing a new car',
    sub: '19 million× a ChatGPT query, just for the production phase. Lifetime fuel emissions are typically 5–10× more on top of that.',
  },
  {
    step: 21,
    heading: 'Manufacturing a new EV',
    sub: '~15 t CO₂e, about 66% more than a new petrol car. The battery pack is the difference. Lifetime emissions are lower as grids decarbonise, but the factory carbon is higher.',
  },
  {
    step: 22,
    heading: 'Falcon 9 launch (SpaceX)',
    sub: '~233 t CO₂e from propellant, one launch. SpaceX flew Falcon 9 more than 90 times in 2024, roughly one every four days. The first stage lands and is reused, so manufacturing carbon is spread across a dozen or more flights.',
  },
  {
    step: 23,
    heading: 'Wikipedia servers, 1 year',
    sub: '~1,680 t CO₂e on the average grid per year, about 3.5 billion GPT-4o queries\' worth of electricity. Covers serving 1.7 billion devices per month across 60 million articles in 300+ languages. The entire annual cost is less than one Llama 3.1 training run.',
  },
  {
    step: 24,
    heading: 'Producing 1 Hollywood blockbuster',
    sub: '~3,370 t CO₂e, about 7 billion GPT-4o queries. A major film production is a one-off global event that takes 2–4 years, involves thousands of people across multiple countries, and happens on roughly the same cadence as major model releases. Travel and transport account for ~65% of production emissions.',
  },
  {
    step: 24,
    commentary: true,
    heading: 'That\'s the per-query cost. What about training?',
    sub: 'Training is a one-time cost per model, not per query. A model like Llama 3.1 is trained once; every query since then runs on those same weights. The figures below are training runs compared to other one-off events at a similar scale.',
  },
  {
    step: 25,
    heading: 'Training Llama 3.1 405B (Meta, 2024)',
    sub: '~11,390 t CO₂e on the average grid, about 24 billion GPT-4o queries. Meta uses renewable energy matching, so their reported figure is 0 t. This is the only publicly verified training figure for a current frontier-scale model.',
  },
  {
    step: 25,
    commentary: true,
    heading: 'Each new model is a new training run',
    sub: 'Since 2023, every major AI lab has shipped at least one new frontier model, each a separate training run at roughly this scale, roughly once a year per lab. None have published verified figures except Meta. The next figures are annual-scale costs for comparison.',
  },
  {
    step: 26,
    heading: 'Formula 1 season 2024',
    sub: '168,720 t CO₂e for the full operational season, about 15 Llama training runs across 24 race weekends. Covers logistics, freight, factory operations, and events. Excludes spectator travel, which adds roughly another 655,000 t.',
  },
  {
    step: 27,
    heading: 'Sydney Trains, 1 year (pre-renewable)',
    sub: '~550,000 t CO₂e. Running a city\'s rail network for a year is about 48× Llama 3.1\'s training. Sydney Trains switched to 100% renewable electricity in 2021.',
  },
  {
    step: 28,
    heading: 'All AI queries, 2025 (annual)',
    sub: '~15 TWh for all generative AI globally in 2025, about 6 Mt CO₂e. That covers every text prompt, image generation, and code completion across all providers. It does not include training, which adds roughly 1–2% on top. Running AI for a full year costs about 530× training a single Llama 3.1 model.',
  },
  {
    step: 29,
    heading: 'All iPhones manufactured in 2024',
    sub: '~15.1 Mt CO₂e. Apple shipped 232 million iPhones in 2024. At ~65 kg CO₂e each, manufacturing the full year\'s fleet is about 1,300× a Llama 3.1 training run.',
  },
  {
    step: 30,
    heading: 'Global oil well gas flaring, 2024',
    sub: 'When an oil well also strikes natural gas, drillers often just burn it off at the wellhead rather than build pipeline infrastructure to capture it. You can see the flames from satellite imagery over Siberia, Iraq, and the US Permian Basin. 389 Mt CO₂e in 2024, the highest in nearly 20 years, just from burning off gas that\'s inconvenient to sell.',
  },
  {
    step: 31,
    heading: 'Global commercial aviation, 1 year',
    sub: '~942 Mt CO₂ from jet fuel combustion in 2023, about 2.4× all gas flaring. That\'s direct CO₂ only. With aircraft\'s radiative forcing effects (contrails, NOₓ, water vapour at altitude), the actual warming impact is roughly 2–3× that figure, but radiative forcing is excluded from official accounting.',
  },
  {
    step: 32,
    heading: 'Global fashion industry, 1 year',
    sub: '~1,200 Mt CO₂e estimated across global apparel and footwear. About 1.3× aviation. The range across studies is wide (800–1,800 Mt) because supply chains are difficult to measure end-to-end.',
  },
  {
    step: 33,
    heading: 'Global food waste, 1 year',
    sub: '~3,300 Mt CO₂e from food that is produced but never eaten. About one-third of all food globally is lost or wasted. Includes the methane from organic matter decomposing in landfill. About 3–4× global aviation.',
  },
  {
    step: 34,
    heading: 'Global beef and dairy, 1 year',
    sub: '~4,300 Mt CO₂e from beef and dairy cattle combined. Digestive methane, manure, feed production, and land clearing for pasture. About 1.3× food waste, and roughly 60% of all livestock emissions globally.',
  },
];
