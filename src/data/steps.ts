import type { StepItem } from '../types';
import { CSTEPS } from './csteps';

const v = (prefix: string) => CSTEPS.find((s) => s.label.startsWith(prefix))!.value;

const google = v('1 Google');
const chatgpt = v('1 ChatGPT');
const image = v('AI image');
const phone = v('Charge a smartphone');
const netflix = v('Netflix');
const popcorn = v('Microwave popcorn');
const kettle = v('Boil a full kettle');
const movieNight = v('Movie night');
const water = v('Bottled water');
const video = v('AI video');
const rice = v('1 kg of raw rice');
const drive = v('Drive 10 km');
const tshirt = v('Cotton t-shirt');
const avgGarmentWears = 30; // WRAP UK "Valuing our Clothes" (2020): average across all clothing types, not garment-specific
const phoneReplaceYears = 3; // CIRP (US): Americans replace smartphones every ~3 years on average
const jeans = v('1 pair of fast fashion');
const phoneMfg = v('Manufacturing 1 smartphone');
const beef = v('Beef, 1 kg');
const fridge = v('Running a fridge');
const bitcoin = v('1 Bitcoin');
const concrete = v('5m³ of concrete');
const flight = v('Flight: SYD');
const carMfg = v('Manufacturing a new car');
const evMfg = v('Manufacturing a new EV');
const falcon = v('Falcon 9');
const wiki = v('Wikipedia');
const hollywood = v('Producing 1 Hollywood');
const llama = v('Training Llama');
const f1 = v('Formula 1');
const sydney = v('Sydney Trains');
const ai = v('All AI queries');
const aiProjected = v('All AI queries, 2030');
const dataCentres = v('All data centres globally');
const dataCentresProjected = 378000000000; // IEA Base Case: 945 TWh × 0.4 kg CO₂/kWh
const iphones = v('All iPhones');
const flaring = v('Global gas flaring');
const aviation = v('Global commercial aviation');
const fashion = v('Global fashion industry');
const foodWaste = v('Global food waste');
const beefDairy = v('Global beef and dairy');
const globalGHG = 54e12; // ~54 Gt CO₂e (2023 global total, IEA/IPCC)

// Format helpers — only used in template literals below
const n = (x: number) => Math.round(x).toLocaleString('en-AU');
const t = (kg: number) => n(Math.round(kg / 1000)); // tonnes, with commas
const q = (kg: number) => Math.round(kg / chatgpt); // raw query count
const qn = (kg: number) => n(q(kg)); // query count, formatted
const Mt = (kg: number) => Math.round(kg / 1e9); // million tonnes (integer)
const Gt = (kg: number) => +(kg / 1e12).toFixed(1); // gigatonnes, 1 dp

export const STEPS: StepItem[] = [
  {
    step: 0,
    heading: 'Google search vs ChatGPT',
    sub: `A ChatGPT query uses about ${Math.round(chatgpt / google)}× the energy of a traditional keyword Google search, before they added AI to it. Tap ? to read more about where the data is coming from.`,
  },
  {
    step: 1,
    heading: 'AI image generation',
    sub: `For another ${+(image / chatgpt).toFixed(1)}× the energy you can create an image.`,
  },
  {
    step: 2,
    heading: 'Charging your phone (daily)',
    sub: `To put that into perspective, you can ask ChatGPT ${Math.floor(phone / chatgpt)} questions, or generate just over ${Math.floor(phone / image)} AI images, for the same amount of electricity that your phone uses over a whole day.`,
  },
  {
    step: 3,
    heading: '1 hour of Netflix HD',
    sub: `You can ask ChatGPT about ${q(netflix)} questions for the same cost as watching Netflix for a whole hour. This cost comes just from running the network and data centre, ignoring the laptop or TV that you're watching it on (that would add about 36 g of CO₂e).`,
  },
  {
    step: 4,
    heading: 'Microwave popcorn, 3 minutes',
    sub: `But that popcorn you're eating adds another ${qn(popcorn)} ChatGPT queries worth of energy.`,
  },
  {
    step: 5,
    heading: 'Boiling a full kettle',
    sub: `And your tea adds another ${qn(kettle)}. A kettle is one of the highest-draw appliances in most kitchens, just in a very short burst.`,
  },
  {
    step: 6,
    heading: 'A movie night in queries',
    sub: `So adding that all up, watching your show with some popcorn and a cuppa adds up to about ${Math.round(movieNight * 1000)} g CO₂e, which is around the same as ${q(movieNight)} ChatGPT text queries.`,
  },
  {
    step: 7,
    heading: '1 day storing 1TB in the cloud',
    sub: "That's more than the cost of storing your photos in the cloud for a day. Cloud storage data centres run around the clock to keep your files accessible.",
  },
  {
    step: 8,
    heading: 'A 500ml bottle of water',
    sub: `But a single 500ml bottle of water is worse than either of them, with emissions equivalent to ${Math.round(water * 1000)} g CO₂e. The PET plastic accounts for roughly half of it. Petroleum-derived plastic is energy-intensive to produce, and the emissions are locked into the bottle before it's even filled.`,
  },
  {
    step: 9,
    heading: 'AI video, 10 seconds',
    sub: `But ChatGPT isn't just used for text chat and image generation. The cost of generating a short 10s video costs a whopping ${Math.round(video * 1000)} g CO₂e using Sora.`,
  },
  {
    step: 10,
    heading: '7-minute shower',
    sub: `That 10-second Sora video costs around the same as a 7-minute shower. An electric-powered hot-water shower draws 9 kW continuously, the same mechanism as a kettle but running for minutes rather than seconds.`,
  },
  {
    step: 11,
    heading: '1 kg of raw rice',
    sub: `But agriculture is also a huge emitter. 1 kg of rice produces ${Math.round(rice)} kg of CO₂e. This is mostly from methane from flooded paddies. Obviously, food is a necessity and fake videos of cats saving babies is not. But if we really want to reduce the emitted CO₂e we have to look at where we can make the biggest impact.`,
  },
  {
    step: 12,
    heading: 'Drive 10 km in a petrol car',
    sub: `Like petrol cars. Burning petrol releases CO₂ directly from the exhaust, about 150 g per kilometre for an average car. That's ${n(Math.round(drive / chatgpt / 100) * 100)} ChatGPT queries to travel 10km. And of that, around 80% of the fuel's energy is lost as heat. Only about 20% actually moves the vehicle.`,
  },
  {
    step: 13,
    heading: 'A cotton t-shirt',
    sub: `And it would be remiss to not talk about the fast fashion industry too. A standard 200 g cotton shirt emits about ${Math.round(tshirt)} kg CO₂e in production. Now obviously the t-shirt lasts much longer than anything we've discussed above, but according to WRAP UK research, the average fast-fashion garment is only worn around ${avgGarmentWears} times before disposal. So each time it's worn, it emits the same CO₂e as ${qn(tshirt / avgGarmentWears)} ChatGPT queries.`,
  },
  {
    step: 14,
    heading: '1 pair of fast fashion jeans',
    sub: `And jeans are even higher, with a per-wear cost of ${qn(jeans / avgGarmentWears)} ChatGPT queries (or ${n(Math.round(jeans / chatgpt))} over its lifetime). Cotton farming needs fertiliser, irrigation, and often coal-powered spinning mills. The dyeing process is particularly intensive: synthetic indigo requires multiple dip cycles, and the runoff is one of the more toxic effluents in textile manufacturing.`,
  },
  {
    step: 15,
    heading: 'Manufacturing 1 smartphone',
    sub: `Smartphones are a good example of an environmental tradeoff we've already made and accepted, collectively. Each smartphone costs on average ${n(Math.round(phoneMfg))} kg CO₂e to make. According to CIRP data, Americans replace their phones roughly every ${phoneReplaceYears} years, which makes the manufacturing carbon alone equivalent to about ${qn(phoneMfg / phoneReplaceYears / 365)} ChatGPT queries per day of ownership, and that's not including the emissions from actually using it.`,
  },
  {
    step: 16,
    heading: '1 kilogram of beef',
    sub: `A phone is a purchase every few years, but people in general eat beef multiple times per week. Just 1 kg emits the same as ${n(Math.round(beef / chatgpt / 1000) * 1000)} ChatGPT queries. About 60% of it is methane from the cow's digestive system, burped out continuously.`,
  },
  {
    step: 17,
    heading: 'Running a fridge, 6 months',
    sub: `That 1 kg of beef produces the same emissions as running your fridge for half a year, a device that runs 24 hours a day and keeps your whole household's food safe.`,
  },
  {
    step: 18,
    heading: 'One Bitcoin transaction',
    sub: `While the beef and dairy industry produces around ${Math.round((beefDairy / globalGHG) * 100)}% of global annual emissions, Bitcoin is in a different league when you look at the per-transaction cost. Each Bitcoin transaction costs about ${n(bitcoin)} kg CO₂e. For comparison, Visa only costs 3 g CO₂e per transaction, 150,000× less`,
  },
  {
    step: 19,
    heading: '5m³ of concrete (cement truck load)',
    sub: `But there's huge carbon costs in other industries too. One cement truck worth of concrete costs the same as ${+(concrete / chatgpt / 1e6).toPrecision(2)} million ChatGPT queries. While infrastructure is unavoidable with our growing population, using more sustainable materials can have a big environmental impact`,
  },
  {
    step: 20,
    heading: 'Return flight, Sydney to London',
    sub: `We called out petrol cars earlier, but air travel emits an immense amount. A return flight from Sydney to London emits about ${+(flight / chatgpt / 1e6).toPrecision(2)} million ChatGPT queries worth of CO₂e per passenger. Kerosene's energy density is why long-haul flight is possible at all. No current fuel alternative works at this scale. The figure is direct CO₂ only. Contrails and NOₓ at altitude roughly double the actual warming impact but aren't counted in official accounting.`,
  },
  {
    step: 20,
    commentary: true,
    heading: 'Frequency is the key',
    sub: `Each comparison above was a single action or item: one query, one trip, one garment, one device. You might not fly to London and back very often, but even if you messaged ChatGPT every second around the clock it would take ${Math.round(flight / chatgpt / (24 * 60 * 60)).toPrecision(2)} days to emit the same CO₂e. If your familiy lives in London, don't feel too bad. Because your yearly visit for Christmas (and your ChatGPT usage) is still a drop in the water compared to what's below`,
  },
  {
    step: 21,
    heading: 'Falcon 9 launch (SpaceX)',
    sub: `Each Falcon 9 launch burns through ${t(falcon)} t CO₂e in propellant. In 2024, SpaceX launched it more than 90 times.`,
  },
  {
    step: 22,
    heading: 'Wikipedia servers, 1 year',
    sub: `Data centers are used across the whole internet, not just AI. Wikipedia's servers costs ${t(wiki)} t CO₂e each year, about ${+(wiki / chatgpt / 1e9).toFixed(1)} billion ChatGPT queries' worth of electricity.`,
  },
  {
    step: 23,
    heading: 'Producing 1 Hollywood blockbuster',
    sub: `Producing a major Hollywood film generates around ${t(hollywood)} t CO₂e, roughly ${Math.round(hollywood / chatgpt / 1e9)} billion ChatGPT queries. It takes 2–4 years and moves thousands of people across multiple countries. Travel and transport account for about 65% of it.`,
  },
  {
    step: 23,
    commentary: true,
    heading: 'What about the training?',
    sub: 'Now you might be (rightfully) asking: "What about the cost to train the models?" And that\'s certainly a concerning figure.',
  },
  {
    step: 24,
    heading: "Training Facebook's Llama 3.1 Model",
    sub: `Unfortunately not many of the AI companies are very open about the cost of training (ironic, given the name of one of these companies...). One data point we do have is the cost of training Meta's Llama 3.1 which cost ${t(llama)} t CO₂e on the average grid, roughly ${Math.round(llama / chatgpt / 1e9)} billion ChatGPT queries. That said, Meta uses renewable energy matching, so their reported figure is 0 t.`,
  },
  {
    step: 24,
    commentary: true,
    heading: 'Each new model is a new training run',
    sub: 'Since 2023, every major AI lab has shipped at least one new frontier model, each a separate training run at roughly this scale, roughly once a year per lab. It is a whopping amount of CO₂e, but it is not the only thing emitting at this kind of scale. Lets take a look at other annual emission costs, using this training cost as the annual baseline.',
  },
  {
    step: 25,
    heading: 'Formula 1 season 2024',
    sub: `Formula 1 runs 24 race weekends a year on six continents. The full 2024 season produced ${t(f1)} t CO₂e across logistics, freight, factory operations, and events, about ${Math.round(f1 / llama)} Llama 3.1 training runs. Spectator travel adds roughly another 655,000 t on top.`,
  },
  {
    step: 26,
    heading: 'Sydney Trains, 1 year (pre-renewable)',
    sub: `Running Sydney's entire train network for a year costs ${t(sydney)} t CO₂e on a standard grid, roughly ${Math.round(sydney / llama)}× training Llama 3.1. Sydney Trains switched to 100% renewable electricity in 2021, but it gives an idea of the scale of running a major city's train network.`,
  },
  {
    step: 27,
    heading: 'All AI queries, 2025 (annual)',
    sub: `AI queries are not just people talking to ChatGPT. Every text prompt, image, and code completion across all generative AI providers in 2025 added up to around ${Math.round(ai / 1e9 / 0.4)} TWh, about ${Mt(ai)} million t CO₂e.`,
  },
  {
    step: 28,
    heading: 'All iPhones manufactured in 2024',
    sub: `For context, Apple shipped 232 million iPhones in 2024. At around 65 kg CO₂e each to manufacture, the full year's fleet adds up to ${Mt(iphones)} million t CO₂e, already ${Math.round(iphones / ai)}× the entire global AI query footprint.`,
  },
  {
    step: 29,
    heading: 'All AI queries, 2030 (projected)',
    sub: `But the biggest concern with AI isn't the cost right now, but how fast it is growing. The IEA projects generative AI inference will reach 347 TWh by 2030, around ${Math.round(aiProjected / ai)}× current levels.`,
  },
  {
    step: 30,
    heading: 'All data centres globally, 2024 (annual)',
    sub: `The projected AI cost is just shy of the current data centre costs globally across all industries. Not just AI but every website, every stream, every cloud backup, and every email server. The IEA projects that total roughly doubles to ${Mt(dataCentresProjected)} million t CO₂e by 2030, which means AI moves from ${Math.round((ai / dataCentres) * 100)}% of total data center emissions in 2024 to ${Math.round((aiProjected / dataCentresProjected) * 100)}% in 2030.`,
  },
  {
    step: 31,
    heading: 'Global oil well gas flaring, 2024',
    sub: `But these last few heavy hitters have immense immissions right now and will continue to have them for years to come. When an oil well also strikes natural gas, drillers often burn it off at the wellhead because its cheaper than building pipeline to capture it. This practice emitted ${Mt(flaring)} million t CO₂e in 2024, just from burning off gas that's inconvenient to sell.`,
  },
  {
    step: 32,
    heading: 'Global commercial aviation, 1 year',
    sub: `Global commercial aviation burned through ${Mt(aviation)} million t CO₂ from jet fuel in 2023, about ${+(aviation / flaring).toFixed(1)}× all gas flaring. That's direct CO₂ only, excluding contrails, NOₓ, and water vapour at altitude which roughly double to triple the actual warming impact. While none of us enjoyed being locked down during Covid, the reduced number of flights in 2020 actually halved aviation emissions from the previous year, saving around 485 Mt CO₂, about ${Math.round(485e9 / ai)}× the annual cost of all AI queries worldwide.`,
  },
  {
    step: 33,
    heading: 'Global fashion industry, 1 year',
    sub: `The global fashion industry emits around ${Gt(fashion)} Gt CO₂e per year, roughly ${+(fashion / aviation).toFixed(1)}× commercial aviation. Supply chains are hard to measure end-to-end, so estimates range from 0.8 to 1.8 Gt depending on methodology.`,
  },
  {
    step: 34,
    heading: 'Global food waste, 1 year',
    sub: `Around one-third of all food produced globally is lost or wasted before it reaches a plate. That's ${Gt(foodWaste)} Gt CO₂e per year, including methane from organic matter decomposing in landfill. About ${Math.floor(foodWaste / aviation)}–${Math.ceil(foodWaste / aviation)}× commercial aviation.`,
  },
  {
    step: 35,
    heading: 'Global beef and dairy, 1 year',
    sub: `Beef and dairy cattle together produce ${Gt(beefDairy)} Gt CO₂e per year, roughly ${+(beefDairy / foodWaste).toFixed(1)}× food waste and about 60% of all livestock emissions globally. Digestive methane, manure, feed production, and land clearing for pasture. That's ${Math.round(beefDairy / ai)}× more than all AI queries worldwide.`,
  },
];
