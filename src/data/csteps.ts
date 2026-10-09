import type { CStep } from '../types';
import { GRID_NOTE, GRID_QUOTE, fromKwh, fromWh } from './grid';
import { SRC } from './sources';

type Item = Omit<CStep, 'mult'> & { phase: 'action' | 'training' | 'annual' };

const WATER_J_PER_KG_C = 4184;
const kwhToHeatWater = (litres: number, riseC: number) =>
  (litres * riseC * WATER_J_PER_KG_C) / 3.6e6;

const kg = (x: number) => +x.toPrecision(3);

const heatQuote = {
  source: SRC.usgs,
  text: 'Water has to absorb 4,184 Joules of heat (1 kilocalorie) for the temperature of one kilogram of water to increase 1°C.',
};

const chatgptWh = 0.67;
const imageWh = 2.9;
const phoneWh = (3561 * 3.886) / 1000;
const popcornKwh = 1.8 * (3 / 60);
const kettleKwh = kwhToHeatWater(1, 80);
const showerKwh = kwhToHeatWater(7 * 9, 25);
const netflixKg = 0.056;
const bottleKg = (0.0379 + 0.0625) / 2 + (0.034 + 0.046) / 2 + 0.0002 + 0.0248 / 2;
const flightKm = 17020;
const flightKg = 2 * flightKm * 0.06926;
const flightKgRf = 2 * flightKm * 0.11704;
const fridgeKwh = 397 / 2;

const ITEMS: Item[] = [
  {
    id: 'google',
    phase: 'action',
    label: '1 Google search (2009)',
    value: fromWh(0.3),
    color: '#58a6ff',
    proof: {
      primary: '0.3 Wh per search',
      quotes: [
        {
          source: SRC.google2009,
          text: 'Together with other work performed before your search even starts (such as building the search index) this amounts to 0.0003 kWh of energy per search, or 1 kJ.',
        },
        GRID_QUOTE,
      ],
      calc: '0.3 Wh × 458 g CO₂e/kWh',
      result: `${kg(fromWh(0.3) * 1000)} g CO₂e`,
      note: `Google's own figure from 2009 for a standard web search, before AI answers were added. Google hasn't published a newer one. ${GRID_NOTE}`,
    },
  },
  {
    id: 'chatgpt',
    phase: 'action',
    label: '1 ChatGPT question (default model)',
    value: fromWh(chatgptWh),
    color: '#79c0ff',
    proof: {
      primary: `${chatgptWh} Wh for a short question to GPT-5 without extended reasoning`,
      quotes: [
        {
          source: SRC.openaiNotes,
          text: 'GPT-5 in ChatGPT is our next flagship model and the new default for all logged-in users.',
        },
        {
          source: SRC.jegham,
          page: 11,
          text: 'For instance, a short, minimal reasoning query consumes only 0.67 Wh, a value comparable to GPT-4o’s 0.42 Wh per short prompt.',
        },
        {
          source: SRC.jegham,
          page: 11,
          text: 'Conversely, a long, high-reasoning query reaches an average of 33.8 Wh, comparable to the upper bounds observed among the most energy-intensive models analyzed in this study.',
        },
        {
          source: SRC.altman,
          text: 'the average query uses about 0.34 watt-hours, about what an oven would use in a little over one second, or a high-efficiency lightbulb would use in a couple of minutes.',
        },
        {
          source: SRC.gemini,
          text: 'we estimate the median Gemini Apps text prompt uses 0.24 watt-hours (Wh) of energy, emits 0.03 grams of carbon dioxide equivalent (gCO 2 e), and consumes 0.26 milliliters (or about five drops) of water',
        },
        {
          source: SRC.mistral,
          text: 'the marginal impacts of inference, more precisely the use of our AI assistant Le Chat for a 400-token response - excluding users’ terminals: 1.14 gCO₂e, 45 mL of water',
        },
        GRID_QUOTE,
      ],
      calc: `${chatgptWh} Wh × 458 g CO₂e/kWh`,
      result: `${kg(fromWh(chatgptWh) * 1000)} g CO₂e`,
      note: `GPT-5 is the default ChatGPT model family. This is an independent measurement of GPT-5 (Jegham et al., a preprint) that includes data centre cooling; OpenAI hasn't published figures for newer versions. A long question with heavy reasoning uses about 50 times more (33.8 Wh). Other published figures: OpenAI's own average of 0.34 Wh (June 2025) and Google's median Gemini prompt of 0.24 Wh. Mistral's 1.14 g is a full life-cycle figure that also counts the manufacture of the hardware. None of these per-question figures include training. ${GRID_NOTE}`,
    },
  },
  {
    id: 'image',
    phase: 'action',
    label: '1 AI image',
    value: fromWh(imageWh),
    color: '#80cbc4',
    proof: {
      primary: `${imageWh} Wh per image (average across models measured)`,
      quotes: [
        {
          source: SRC.delavande,
          page: 9,
          text: 'report average costs of ∼0.002 Wh for text classification, 0.047 Wh for text generation, and 2.9 Wh for image generation.',
        },
        {
          source: SRC.bertazzini,
          page: 10,
          text: 'with Lumina being the models consuming the highest energy value (4.08×10−3 kWh) and LCM SSD 1B the lowest one (8.6×10−5 kWh).',
        },
        GRID_QUOTE,
      ],
      calc: `${imageWh} Wh × 458 g CO₂e/kWh`,
      result: `${kg(fromWh(imageWh) * 1000)} g CO₂e`,
      note: `The 2.9 Wh average is from Luccioni et al. (2024), as cited by Delavande et al. A 2025 test of 17 open models found 0.086 to 4.08 Wh per image. Commercial image generators haven't published their figures. ${GRID_NOTE}`,
    },
  },
  {
    id: 'phone',
    phase: 'action',
    label: 'Charge a phone (once)',
    value: fromWh(phoneWh),
    color: '#9cdcfe',
    proof: {
      primary: `${phoneWh.toFixed(1)} Wh battery (iPhone 16)`,
      quotes: [
        { source: SRC.iphoneBattery, text: 'A3287 iPhone 16 3,561 mAh 3.886 V' },
        GRID_QUOTE,
      ],
      calc: `3,561 mAh × 3.886 V = ${phoneWh.toFixed(1)} Wh, × 458 g CO₂e/kWh`,
      result: `${kg(fromWh(phoneWh) * 1000)} g CO₂e`,
      note: `Battery capacity only. Charger losses (roughly 10 to 20%) would add a little. ${GRID_NOTE}`,
    },
  },
  {
    id: 'popcorn',
    phase: 'action',
    label: 'Microwave popcorn, 3 min',
    value: fromKwh(popcornKwh),
    color: '#4db6ac',
    proof: {
      primary: '1.8 kW drawn from the wall for 3 minutes',
      quotes: [
        {
          source: SRC.doeMicrowave,
          page: 24,
          text: 'Whirlpool commented that for a microwave oven with a 1000 W rated cooking output, the total energy consumption is typically 1800 W.',
        },
        GRID_QUOTE,
      ],
      calc: `1.8 kW × 3 min = ${popcornKwh.toFixed(2)} kWh, × 458 g CO₂e/kWh`,
      result: `${kg(fromKwh(popcornKwh) * 1000)} g CO₂e`,
      note: `The wattage on a microwave is its cooking output. It draws more from the wall. ${GRID_NOTE}`,
    },
  },
  {
    id: 'kettle',
    phase: 'action',
    label: 'Boil 1 litre of water',
    value: fromKwh(kettleKwh),
    color: '#7ee787',
    proof: {
      primary: `${(kettleKwh * 1000).toFixed(0)} Wh to heat 1 litre from 20°C to 100°C`,
      quotes: [heatQuote, GRID_QUOTE],
      calc: `1 kg × 80°C × 4,184 J = 334,720 J = ${(kettleKwh * 1000).toFixed(0)} Wh, × 458 g CO₂e/kWh`,
      result: `${kg(fromKwh(kettleKwh) * 1000)} g CO₂e`,
      note: `The minimum energy physics allows, assuming 20°C tap water. A real kettle loses some heat, so it uses a bit more. ${GRID_NOTE}`,
    },
  },
  {
    id: 'netflix',
    phase: 'action',
    label: 'Netflix, 1 hour',
    value: netflixKg,
    color: '#56d364',
    proof: {
      primary: '56 g CO₂e per hour of streaming (Europe, 2020)',
      quotes: [
        {
          source: SRC.carbonTrust,
          page: 48,
          text: 'The European average carbon emissions per hour of video streaming for the year 2020 has been estimated to be 56gCO2e/hour video streaming using the conventional approach',
        },
        {
          source: SRC.carbonTrust,
          page: 7,
          text: 'data centres and content delivery networks (used for encoding and storage); internet network transmission; home routers; end-user viewing devices (e.g. TVs, laptops, tablets, smartphones); and TV peripherals (e.g. set-top boxes), where relevant.',
        },
      ],
      result: '56 g CO₂e',
      note: 'Includes the TV or device you watch on, the home router, the network and the data centre, but not making the equipment. Uses European electricity rather than the world average.',
    },
  },
  {
    id: 'movie',
    phase: 'action',
    label: 'Movie night (show, popcorn, cuppa)',
    value: netflixKg + fromKwh(popcornKwh) + fromKwh(kettleKwh),
    color: '#e3b341',
    proof: {
      primary: '1 hour of Netflix + 3 minutes of microwave popcorn + 1 litre of boiled water',
      quotes: [],
      calc: `${kg(netflixKg * 1000)} g + ${kg(fromKwh(popcornKwh) * 1000)} g + ${kg(fromKwh(kettleKwh) * 1000)} g`,
      result: `${kg((netflixKg + fromKwh(popcornKwh) + fromKwh(kettleKwh)) * 1000)} g CO₂e`,
      note: 'The sum of the three bars above. Sources are in each of those.',
    },
  },
  {
    id: 'water',
    phase: 'action',
    label: 'Bottled water, 500 ml',
    value: bottleKg,
    color: '#7dd3fc',
    proof: {
      primary: 'Making the plastic, making the bottle, filling it and chilling it',
      quotes: [
        { source: SRC.nih, text: '≈ 0.0379 – 0.0625/500mL kg CO2-eq bottle' },
        { source: SRC.nih, text: 'GHG ​emissions: 0.034 – 0.046 kg CO2-eq/ 500 mL bottle' },
        { source: SRC.nih, text: '2 x 10-4 kg CO2-eq/ 500mL PET bottle filled' },
        {
          source: SRC.nih,
          text: 'GHG Emissions: 0.0248 kg CO2-eq/L of water chilled (refrigerated up to 1 week)',
        },
      ],
      calc: 'Plastic resin 38 to 63 g (midpoint 50) + bottle making 34 to 46 g (midpoint 40) + filling 0.2 g + chilling 500 ml 12 g',
      result: `about ${Math.round(bottleKg * 1000)} g CO₂e (range 85 to 121 g)`,
      note: 'Excludes transport to the shop, which the source doesn’t estimate. The bottle itself is almost all of it.',
    },
  },
  {
    id: 'video',
    phase: 'action',
    label: '1 short AI video clip',
    value: fromWh(415),
    color: '#ffa726',
    proof: {
      primary: '415 Wh for one short clip from the largest open video model tested',
      quotes: [
        {
          source: SRC.delavande,
          page: 8,
          text: 'AnimateDiff requires only 0.14 Wh in total, while WAN2.1-T2V-14B consumes over 415 Wh, a factor of nearly 3000×.',
        },
        GRID_QUOTE,
      ],
      calc: '415 Wh × 458 g CO₂e/kWh',
      result: `${kg(fromWh(415) * 1000)} g CO₂e`,
      note: `Measured on open models run at their default settings. Small models use far less. Commercial video generators such as Sora haven't published their energy use. ${GRID_NOTE}`,
    },
  },
  {
    id: 'shower',
    phase: 'action',
    label: 'Hot shower, 7 min',
    value: fromKwh(showerKwh),
    color: '#ffa657',
    proof: {
      primary: `${showerKwh.toFixed(2)} kWh to heat 63 litres by 25°C`,
      quotes: [
        {
          source: SRC.basix,
          text: 'The Plumbing Code of Australia sets a minimum requirement for showerheads with a flowrate of not more than 9 litres per minute in new developments.',
        },
        heatQuote,
        GRID_QUOTE,
      ],
      calc: `7 min × 9 L/min = 63 L. 63 kg × 25°C × 4,184 J = ${showerKwh.toFixed(2)} kWh, × 458 g CO₂e/kWh`,
      result: `${kg(fromKwh(showerKwh))} kg CO₂e`,
      note: `Assumes water comes in at 15°C and you shower at 40°C, heated by electricity with no losses, so a real system uses more. Gas or solar hot water would differ. ${GRID_NOTE}`,
    },
  },
  {
    id: 'drive',
    phase: 'action',
    label: 'Drive 10 km, petrol car',
    value: 10 * 0.16272,
    color: '#ff8a65',
    proof: {
      primary: '163 g CO₂e per km, average petrol car',
      quotes: [
        {
          source: SRC.desnzFactors,
          text: 'Cars (by size) | Average car | Petrol | km | kg CO2e | 0.16272',
        },
      ],
      calc: '10 km × 0.16272 kg CO₂e/km',
      result: `${kg(10 * 0.16272)} kg CO₂e`,
      note: 'UK government factor for an average petrol car, tailpipe only. It doesn’t include producing and shipping the fuel.',
    },
  },
  {
    id: 'tshirt',
    phase: 'action',
    label: 'Cotton t-shirt',
    value: 3.0,
    color: '#d4a76a',
    proof: {
      primary: '3.0 kg CO₂e median for one t-shirt',
      quotes: [
        {
          source: SRC.devera,
          text: 'the carbon footprint of a single t-shirt has a median of 3.0 kg CO₂e and a mean of 3.1 kg CO₂e.',
        },
      ],
      result: '3.0 kg CO₂e',
      note: 'From a commercial life-cycle model (10,000 simulations), not a peer-reviewed study. Its middle 80% of results range from 2.1 to 4.1 kg.',
    },
  },
  {
    id: 'rice',
    phase: 'action',
    label: '1 kg of rice',
    value: 4.45,
    color: '#88c070',
    proof: {
      primary: '4.45 kg CO₂e per kg of rice',
      quotes: [{ source: SRC.poore, text: 'Rice,2010,4.45' }],
      result: '4.45 kg CO₂e',
      note: 'Global average from Poore and Nemecek (2018), the same study used for beef below. Data row from the dataset (product, reference year, kg CO₂e per kg).',
    },
  },
  {
    id: 'jeans',
    phase: 'action',
    label: '1 pair of fast fashion jeans',
    value: 17.5,
    color: '#f472b6',
    proof: {
      primary: '2.50 kg CO₂e per wear, worn 7 times',
      quotes: [
        {
          source: SRC.jeans,
          page: 1,
          text: 'Results show that the carbon footprint of fast fashion consumption is 2.50 kgCO2e/one wear jeans, 11 times higher than that of traditional fashion consumption.',
        },
        {
          source: SRC.jeans,
          page: 13,
          text: 'After being worn 7 times in fast fashion consumption, the discarded jeans were incinerated and landfilled with municipal household waste.',
        },
        {
          source: SRC.jeans,
          page: 6,
          text: 'In the globalized clothing supply chain, fast fashion is transported across borders by air, while traditional fashion is done by cargo ships (Escalona Orcao, 2015).',
        },
      ],
      calc: '2.50 kg CO₂e per wear × 7 wears',
      result: '17.5 kg CO₂e',
      note: 'The study’s fast fashion scenario: jeans flown between countries and thrown out after 7 wears. Jeans shipped by sea and worn for years have a much lower footprint per wear.',
    },
  },
  {
    id: 'iphone',
    phase: 'action',
    label: '1 iPhone 16, whole life',
    value: 61,
    color: '#c8a2c8',
    proof: {
      primary: '61 kg CO₂e for an iPhone 16 256GB',
      quotes: [
        { source: SRC.applePer, page: 10, text: '256GB 61 kg CO2e' },
        {
          source: SRC.applePer,
          page: 9,
          text: 'Apple assumes a three-year period for power use by first owners for iOS, iPadOS, and watchOS devices',
        },
      ],
      result: '61 kg CO₂e',
      note: 'Apple’s figure covers making the phone, shipping it, three years of charging and recycling it. Most of it is manufacturing.',
    },
  },
  {
    id: 'fridge',
    phase: 'action',
    label: 'Running a fridge, 6 months',
    value: fromKwh(fridgeKwh),
    color: '#a0c4f0',
    proof: {
      primary: '397 kWh a year for an efficient full-size fridge',
      quotes: [
        {
          source: SRC.energyStar,
          page: 5,
          text: 'the average energy consumption of full-size refrigerators and refrigerator-freezers meeting the proposed requirements is 397 kWh/year',
        },
        GRID_QUOTE,
      ],
      calc: `397 kWh ÷ 2 = ${fridgeKwh} kWh, × 458 g CO₂e/kWh`,
      result: `${kg(fromKwh(fridgeKwh))} kg CO₂e`,
      note: `US ENERGY STAR figure for fridges meeting its efficiency standard. ${GRID_NOTE}`,
    },
  },
  {
    id: 'beef',
    phase: 'action',
    label: '1 kg of beef',
    value: 99.48,
    color: '#f78166',
    proof: {
      primary: '99.48 kg CO₂e per kg of beef from beef herds',
      quotes: [{ source: SRC.poore, text: 'Beef (beef herd),2010,99.48' }],
      result: '99.5 kg CO₂e',
      note: 'Global average from Poore and Nemecek (2018). Beef from dairy herds averages 33.3 kg in the same dataset. Data row from the dataset (product, reference year, kg CO₂e per kg).',
    },
  },
  {
    id: 'concrete',
    co2Only: true,
    phase: 'action',
    label: '5 m³ of concrete (a truck load)',
    value: 5 * 350,
    color: '#94a3b8',
    proof: {
      primary: '200 to 500 kg CO₂ per cubic metre',
      quotes: [
        {
          source: SRC.ecochain,
          text: 'Concrete emits about 200–500 kg CO2 per m³, mainly from cement.',
        },
      ],
      calc: '5 m³ × 350 kg (middle of the range)',
      result: '1,750 kg CO₂ (range 1,000 to 2,500 kg)',
      note: 'Depends on the mix. Source is a life-cycle software company’s guide.',
    },
  },
  {
    id: 'flight',
    phase: 'action',
    label: 'Return flight, Sydney to London (economy)',
    value: flightKg,
    color: '#ef5350',
    proof: {
      primary: '0.06926 kg CO₂e per passenger-km, long-haul economy',
      quotes: [
        {
          source: SRC.desnzFactors,
          text: 'Long-haul, to/from UK | Economy class | Without RF | passenger.km | kg CO2e | 0.06926',
        },
        {
          source: SRC.desnzFactors,
          text: 'Long-haul, to/from UK | Economy class | With RF | passenger.km | kg CO2e | 0.11704',
        },
        {
          source: SRC.desnzMethod,
          page: 107,
          text: 'This is the methodology recommended to be used with the GHG Conversion factors and is applied already to the conversion factors presented in the 2025 GHG Conversion factors set.',
        },
      ],
      calc: `2 × ${flightKm.toLocaleString('en-AU')} km (great-circle distance, Sydney to Heathrow) × 0.06926 kg`,
      result: `${Math.round(flightKg).toLocaleString('en-AU')} kg CO₂e per passenger`,
      note: `Fuel burnt only. Counting the extra warming from contrails and other high-altitude effects (the UK "with RF" factor) gives ${Math.round(flightKgRf).toLocaleString('en-AU')} kg. The UK factors already add 8% for indirect routes and delays.`,
    },
  },
  {
    id: 'falcon',
    phase: 'action',
    label: '1 Falcon 9 rocket launch',
    value: 31061000 / 60,
    color: '#c8d8e8',
    proof: {
      primary: '31,061 t CO₂e for 60 launches a year',
      quotes: [{ source: SRC.faa, page: 92, text: '60 Falcon 9 launches 31,061' }],
      calc: '31,061 t ÷ 60 launches',
      result: `${Math.round(31061 / 60)} t CO₂e per launch`,
      note: 'From Table 4-5 of the FAA assessment (metric tons CO₂e per year). Excludes building the rocket and the warming effect of soot released high in the atmosphere.',
    },
  },
  {
    id: 'wikipedia',
    phase: 'action',
    label: 'Wikipedia’s servers, 1 year',
    value: 1073000,
    color: '#a8b8d0',
    proof: {
      primary: '1,073 t CO₂e in 2021',
      quotes: [
        {
          source: SRC.wikimedia,
          text: 'The total carbon footprint of the servers was 1,073 metric tons CO2-eq in 2021.',
        },
      ],
      result: '1,073 t CO₂e',
    },
  },
  {
    id: 'film',
    phase: 'action',
    label: 'Making 1 Hollywood blockbuster',
    value: 3370000,
    color: '#ffa726',
    proof: {
      primary: '3,370 t CO₂e average for a tentpole film',
      quotes: [
        {
          source: SRC.spa,
          page: 4,
          text: 'The data from tentpole productions showed the average carbon footprint of 3,370 metric tons – or about 33 metric tons per shooting day.',
        },
      ],
      result: '3,370 t CO₂e',
      note: '“Tentpole” is the study’s top budget category. Covers the production, not cinemas or streaming.',
    },
  },
  {
    id: 'gpt3',
    phase: 'training',
    label: 'Training GPT-3 (OpenAI, 2020)',
    value: 552000,
    color: '#a5d6ff',
    proof: {
      primary: '552 t CO₂e, estimated by Google researchers',
      quotes: [
        {
          source: SRC.patterson,
          page: 7,
          text: 'Its estimated carbon emissions due to training are 552 tCO2e and its energy consumption is 1287 MWh.',
        },
      ],
      result: '552 t CO₂e',
      note: 'OpenAI hasn’t published a figure. This estimate is from Patterson et al. (2021), a study by Google and UC Berkeley researchers.',
    },
  },
  {
    id: 'llama2',
    phase: 'training',
    label: 'Training Llama 2 (Meta, 2023)',
    value: 539000,
    color: '#79c0ff',
    proof: {
      primary: '539 t CO₂e for the three Llama 2 models',
      quotes: [
        {
          source: SRC.llama2,
          text: 'Estimated total emissions were 539 tCO2eq, 100% of which were offset by Meta’s sustainability program.',
        },
        { source: SRC.llama2, text: 'Llama 2 was trained between January 2023 and July 2023.' },
      ],
      result: '539 t CO₂e',
    },
  },
  {
    id: 'llama3',
    phase: 'training',
    label: 'Training Llama 3 (Meta, April 2024)',
    value: 2290000,
    color: '#79c0ff',
    proof: {
      primary: '2,290 t CO₂e for the two Llama 3 models',
      quotes: [
        {
          source: SRC.llama3,
          text: 'Estimated total emissions were 2290 tCO2eq, 100% of which were offset by Meta’s sustainability program.',
        },
        { source: SRC.llama3, text: '**Model Release Date** April 18, 2024.' },
      ],
      result: '2,290 t CO₂e',
    },
  },
  {
    id: 'llama',
    phase: 'training',
    label: 'Training Llama 3.1 (Meta, July 2024)',
    value: 11390000,
    color: '#79c0ff',
    proof: {
      primary: '11,390 t CO₂e to train the three Llama 3.1 models',
      quotes: [
        {
          source: SRC.llama,
          text: 'Estimated total location-based greenhouse gas emissions were **11,390** tons CO2eq for training.',
        },
        {
          source: SRC.llama,
          text: 'Since 2020, Meta has maintained net zero greenhouse gas emissions in its global operations and matched 100% of its electricity use with renewable energy, therefore the total market-based greenhouse gas emissions for training were 0 tons CO2eq.',
        },
        { source: SRC.llama, text: 'Llama 3.1 405B | 30.84M | 700 | 8,930 | 0' },
        { source: SRC.llama, text: '**Model Release Date:** July 23, 2024.' },
      ],
      result: '11,390 t CO₂e',
      note: 'Meta trained three sizes for this release; the largest (405B) was 8,930 t of the total. “Location-based” means using the local grid’s emissions. Meta reports 0 t after buying renewable energy to match. This is a one-off cost for one release, not a yearly cost.',
    },
  },
  {
    id: 'llama4',
    phase: 'training',
    label: 'Training Llama 4 (Meta, April 2025)',
    value: 1999000,
    color: '#79c0ff',
    proof: {
      primary: '1,999 t CO₂e for the two released Llama 4 models',
      quotes: [
        {
          source: SRC.llama4,
          text: 'Estimated total location-based greenhouse gas emissions were **1,999 tons** CO2eq for training.',
        },
        { source: SRC.llama4, text: '**Model Release Date:** April 5, 2025' },
        {
          source: SRC.llama4Blog,
          text: 'These models are our best yet thanks to distillation from Llama 4 Behemoth, a 288 billion active parameter model with 16 experts that is our most powerful yet and among the world’s smartest LLMs.',
        },
        {
          source: SRC.llama4Blog,
          text: 'Llama 4 Behemoth is still training, and we’re excited to share more details about it even while it’s still in flight.',
        },
        {
          source: SRC.epoch,
          text: 'Our expanded AI model database shows that the compute used to train recent models grew 4-5x yearly from 2010 to May 2024.',
        },
      ],
      result: '1,999 t CO₂e',
      note: 'Doesn’t include Behemoth, the larger model these two were distilled from, which Meta was still training when they were released.',
    },
  },
  {
    id: 'mistral',
    phase: 'training',
    label: 'Mistral Large 2: training plus 18 months of use',
    value: 20400000,
    color: '#a5d6ff',
    proof: {
      primary: '20.4 kt CO₂e, full life cycle',
      quotes: [
        {
          source: SRC.mistral,
          text: 'as of January 2025, and after 18 months of usage, Large 2 generated the following impacts: 20,4 ktCO₂e, 281 000 m3 of water consumed',
        },
        {
          source: SRC.mistral,
          text: 'we have initiated the first comprehensive lifecycle analysis (LCA) of an AI model, in collaboration with Carbone 4, a leading consultancy in CSR and sustainability, and the French ecological transition agency (ADEME).',
        },
      ],
      result: '20,400 t CO₂e',
      note: 'Mistral describes it as the first full life-cycle study of an AI model. It covers training, 18 months of people using it and the manufacture of the hardware.',
    },
  },
  {
    id: 'chatgptYear',
    phase: 'annual',
    label: 'Every ChatGPT prompt for a year (2025)',
    // Rounded to the nearest 1,000 t: the inputs are themselves round numbers.
    value: Math.round(fromWh(2.5e9 * 365 * 0.34) / 1e6) * 1e6,
    color: '#79c0ff',
    proof: {
      primary: '2.5 billion prompts a day × 0.34 Wh average, both from OpenAI',
      quotes: [
        {
          source: SRC.techcrunch,
          text: 'ChatGPT receives 2.5 billion prompts from global users every day, OpenAI told Axios',
        },
        {
          source: SRC.altman,
          text: 'the average query uses about 0.34 watt-hours, about what an oven would use in a little over one second, or a high-efficiency lightbulb would use in a couple of minutes.',
        },
        {
          source: SRC.techcrunch,
          text: 'At Altman’s word, the company’s search volume has more than doubled in around eight months.',
        },
        GRID_QUOTE,
      ],
      calc: `2.5 billion × 365 days × 0.34 Wh = ${Math.round((2.5e9 * 365 * 0.34) / 1e9)} GWh, × 458 g CO₂e/kWh`,
      result: `about ${Math.round(fromWh(2.5e9 * 365 * 0.34) / 1000).toLocaleString('en-AU')} t CO₂e`,
      note: 'Both numbers are OpenAI’s, from mid-2025, and usage was still growing fast. Covers answering prompts in ChatGPT only: not training, not other companies’ AI, and not developers using OpenAI’s models through its API.',
    },
  },
  {
    id: 'f1',
    phase: 'annual',
    label: 'Formula 1, 2024 season',
    value: 188732000,
    color: '#f97316',
    proof: {
      primary: '188,732 t CO₂e for 2024, before sustainable aviation fuel certificates',
      quotes: [
        {
          source: SRC.f1,
          page: 2,
          text: 'with the footprint for the sport now standing at 168,720 tCO2e, down from 228,793 tCO²e in 2018.',
        },
        {
          source: SRC.f1,
          page: 11,
          text: 'Total 256,551 228,793 189,496 188,732 228,793 182,801 168,720',
        },
      ],
      result: '188,732 t CO₂e',
      note: 'The emissions table gives 2024 totals without certificates (188,732 t) and with them (168,720 t). We use the first so it’s counted the same way as the AI training figures, before any renewable or offset purchases.',
    },
  },
  {
    id: 'sydneyTrains',
    phase: 'annual',
    label: 'Sydney Trains, 1 year (2018–19)',
    value: 545749000,
    color: '#56d364',
    proof: {
      primary: '545,749 t CO₂e, scope 1 and 2, 2018–19',
      quotes: [
        { source: SRC.climateworks, page: 10, text: '545,749 Sydney Trains' },
        {
          source: SRC.reneweconomy,
          text: 'Sydney’s Train network will become one of the first public transport systems in Australia to transition to net zero emissions after striking a deal to purchase renewable energy certificates to offset its electricity use.',
        },
      ],
      result: '545,749 t CO₂e',
      note: 'Reported under the National Greenhouse and Energy Reporting scheme for 2018–19, before the network started buying renewable energy certificates (announced October 2021). Table row.',
    },
  },
  {
    id: 'iphones',
    phase: 'annual',
    label: 'Every iPhone shipped in 2024',
    value: 232.1e6 * 61,
    color: '#8b949e',
    proof: {
      primary: '232.1 million iPhones × 61 kg CO₂e',
      quotes: [
        { source: SRC.idc, text: '1. Apple 232.1 18.70% 234.3 20.10% -0.90%' },
        { source: SRC.applePer, page: 10, text: '256GB 61 kg CO2e' },
      ],
      calc: '232.1 million × 61 kg',
      result: `${((232.1e6 * 61) / 1e9).toFixed(1)} million t CO₂e`,
      note: 'An estimate: it treats every iPhone shipped as an iPhone 16 256GB. Shipments from IDC (2024 row, millions of units).',
    },
  },
  {
    id: 'jets',
    co2Only: true,
    phase: 'annual',
    label: 'All private jet flights, 2023',
    value: 15.6e9,
    color: '#ff7b72',
    proof: {
      primary: 'At least 15.6 million t CO₂',
      quotes: [
        {
          source: SRC.jets,
          text: 'We find that private aviation contributed at least 15.6 Mt CO 2 in direct emissions in 2023, or about 3.6 t CO 2 per flight.',
        },
      ],
      result: '15.6 million t CO₂',
      note: 'Fuel burnt only, from tracking 25,993 private jets.',
    },
  },
  {
    id: 'bitcoin',
    phase: 'annual',
    label: 'Bitcoin network, 1 year',
    value: 39.8e9,
    color: '#f5a623',
    proof: {
      primary: '138 TWh of electricity, 39.8 million t CO₂e',
      quotes: [
        {
          source: SRC.cambridge,
          page: 8,
          text: 'Our findings reveal an estimated annual electricity usage of Bitcoin mining activity at approximately 138 TWh, resulting in around 39.8 MtCO2e attributable GHG emissions.',
        },
      ],
      result: '39.8 million t CO₂e',
      note: 'Cambridge uses the actual energy mix reported by miners, so this is lower than 138 TWh at the world average grid.',
    },
  },
  {
    id: 'dataCentres',
    co2Only: true,
    phase: 'annual',
    label: 'All data centres in the world, 1 year',
    value: 180e9,
    color: '#56d364',
    proof: {
      primary: 'Around 180 million t CO₂ a year, of which AI is a part',
      quotes: [
        {
          source: SRC.ieaAiClimate,
          text: 'Data centres account for around 180 Mt of indirect CO 2 emissions today from the consumption of electricity, not including any emissions from backup power generation.',
        },
        {
          source: SRC.ieaAiClimate,
          text: 'This includes all workloads by data centres, of which AI is a subset.',
        },
        {
          source: SRC.ieaAiSummary,
          text: 'Data centre electricity consumption is set to more than double to around 945 TWh by 2030.',
        },
        {
          source: SRC.ieaAiSummary,
          text: 'AI is the most important driver of this growth, alongside growing demand for other digital services.',
        },
        {
          source: SRC.aemo,
          page: 2,
          text: 'data centre consumption is forecast to triple to around 15 TWh or 7.8% of forecast operational consumption by FY30 and grow nearly seven times to around 34 TWh or 13% of forecast operational consumption by FY36',
        },
      ],
      result: '180 million t CO₂',
      note: 'Covers every data centre: websites, streaming, banking, cloud storage and AI. The IEA doesn’t publish an AI-only figure. CO₂ from electricity only.',
    },
  },
  {
    id: 'dataCentres2030',
    phase: 'annual',
    co2Only: true,
    label: 'All data centres in the world, 2030 (IEA projection)',
    value: 945e9 * 0.36,
    color: '#56d364',
    proof: {
      primary: '945 TWh of electricity at a forecast 360 g CO₂ per kWh',
      quotes: [
        {
          source: SRC.ieaAiSummary,
          text: 'Data centre electricity consumption is set to more than double to around 945 TWh by 2030.',
        },
        {
          source: SRC.ieaElectricity,
          text: 'down from 435 g CO2/kWh in 2025 to 360 g CO2/kWh in 2030',
        },
      ],
      calc: '945 TWh × 360 g CO₂/kWh (both IEA forecasts)',
      result: `about ${Math.round(945 * 0.36)} million t CO₂`,
      note: 'Our calculation from two IEA forecasts. The IEA expects grids to get cleaner by 2030, so emissions grow less than electricity use.',
    },
  },
  {
    id: 'flaring',
    phase: 'annual',
    label: 'Gas flaring at oil fields, 2025',
    value: 429e9,
    color: '#f78166',
    proof: {
      primary: '429 million t CO₂e',
      quotes: [
        {
          source: SRC.flaring,
          page: 11,
          text: 'Flaring in 2025 generated 429 MMtCO₂e in total emissions, of which 50 MMtCO₂e came from unburned methane due to incomplete combustion.',
        },
      ],
      result: '429 million t CO₂e',
    },
  },
  {
    id: 'aviation',
    co2Only: true,
    phase: 'annual',
    label: 'All airlines, 2025',
    value: 983e9,
    color: '#7dd3fc',
    proof: {
      primary: '983 million t CO₂ (gross)',
      quotes: [
        {
          source: SRC.iata,
          page: 1,
          text: 'In 2025, airlines emitted a (gross) total of 983 million tonnes (Mt) of CO2, of which 1.0% was mitigated through offsets or Sustainable Aviation Fuel (SAF) use, reducing net emissions to 972 Mt CO2.',
        },
      ],
      result: '983 million t CO₂',
      note: 'Fuel burnt only. Excludes contrails and other high-altitude warming effects.',
    },
  },
  {
    id: 'textiles',
    phase: 'annual',
    label: 'Making the world’s clothes and textiles, 1 year',
    value: 1.2e12,
    color: '#e879f9',
    proof: {
      primary: '1.2 billion t CO₂e a year',
      quotes: [
        {
          source: SRC.emf,
          page: 3,
          text: 'total greenhouse gas emissions from textiles production, at 1.2 billion tonnes annually, are more than those of all international flights and maritime shipping combined.',
        },
      ],
      result: '1.2 billion t CO₂e',
      note: 'Covers producing textiles. Published in 2017.',
    },
  },
  {
    id: 'cattle',
    phase: 'annual',
    label: 'All beef and dairy cattle, 1 year',
    value: 3.8e12,
    color: '#d97706',
    proof: {
      primary: 'Around 3.8 billion t CO₂e a year',
      quotes: [
        {
          source: SRC.fao,
          page: 18,
          text: 'Among the livestock species, cattle are the primary contributors to GHG emissions, producing around 3.8 Gt CO2eq per year and accounting for approximately 62 percent of all livestock emissions.',
        },
        {
          source: SRC.fao,
          page: 18,
          text: 'is associated with a total of 6.2 Gt CO2eq of emissions, constituting approximately 12 percent of the estimated 50 to 52 Gt CO2eq total anthropogenic emissions in 2015 (FAO, 2022a).',
        },
      ],
      result: '3.8 billion t CO₂e',
      note: 'Based on 2015 data.',
    },
  },
  {
    id: 'foodWaste',
    phase: 'annual',
    label: 'Food lost and wasted, 1 year',
    value: 9.3e12,
    color: '#86efac',
    proof: {
      primary: '9.3 billion t CO₂e in 2017',
      quotes: [
        {
          source: SRC.carbonBrief,
          text: 'It finds that, in 2017, global food waste resulted in 9.3bn tonnes of CO2-equivalent (GtCO2e) emissions – roughly the same as the total combined emissions of the US and the EU that same year.',
        },
      ],
      result: '9.3 billion t CO₂e',
      note: 'Counts everything it took to produce food that was never eaten, plus landfill. It overlaps with the cattle bar: wasted beef is in both.',
    },
  },
];

function compact(r: number): string {
  if (r < 10) return `${+r.toFixed(1)}`;
  if (r < 1000) return Math.round(r).toLocaleString('en-AU');
  const units: [number, string][] = [
    [1e9, 'B'],
    [1e6, 'M'],
    [1e3, 'K'],
  ];
  const [div, suffix] = units.find(([d]) => r >= d)!;
  return `${+(r / div).toPrecision(2)}${suffix}`;
}

const chatgptKg = ITEMS.find((d) => d.id === 'chatgpt')!.value;
const llamaKg = ITEMS.find((d) => d.id === 'llama')!.value;

function multiplier(d: Item): string {
  if (d.id === 'chatgpt') return 'baseline';
  if (d.phase === 'training') return `~${compact(d.value / chatgptKg)} questions`;
  if (d.phase === 'annual') return `~×${compact(d.value / llamaKg)} Llama 3.1`;
  const r = d.value / chatgptKg;
  return r >= 1e8 ? `~${compact(r)} questions` : `${r >= 1000 ? '~' : ''}×${compact(r)}`;
}

export const CSTEPS: CStep[] = ITEMS.map(({ phase: _phase, ...d }) => ({
  ...d,
  mult: multiplier({ ...d, phase: _phase }),
}));

export const byId = (id: string) => {
  const item = CSTEPS.find((d) => d.id === id);
  if (!item) throw new Error(`Unknown chart item: ${id}`);
  return item;
};
