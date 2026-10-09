import type { StepItem } from '../types';
import { byId } from './csteps';

const v = (id: string) => byId(id).value;
const chatgpt = v('chatgpt');

const n = (x: number) => Math.round(x).toLocaleString('en-AU');
// Two significant figures with thousands separators (toPrecision alone gives "2.4e+2").
const sig2 = (x: number) => Number(x.toPrecision(2)).toLocaleString('en-AU');
const q = (kg: number) => (kg / chatgpt >= 1000 ? sig2(kg / chatgpt) : n(kg / chatgpt));
const g = (kg: number) => n(kg * 1000);
const k = (kg: number) => +kg.toPrecision(3);
const t = (kg: number) => n(kg / 1000);
const mt = (kg: number) => (+(kg / 1e9).toPrecision(3)).toLocaleString('en-AU');
const times = (a: number, b: number) => +(a / b).toFixed(1);
const llamaRuns = (kg: number) => sig2(kg / v('llama'));

const flightRfKg = 2 * 17020 * 0.11704;

export const STEPS: StepItem[] = [
  {
    item: 'chatgpt',
    heading: 'A Google search and a ChatGPT question',
    sub: `A short question to ChatGPT's default model uses about ${times(chatgpt, v('google'))} times the energy of a Google search, using Google's own figure from 2009. A long question with heavy reasoning uses about 50 times more. Counting training and the hardware too, Mistral's full life-cycle figure for one answer is about ${Math.round(1.14 / (chatgpt * 1000))} times this one. Tap ? on any step for the sources and the working.`,
  },
  {
    item: 'image',
    heading: 'Making an AI image',
    sub: `Generating one image uses about ${times(v('image'), chatgpt)} times as much as a ChatGPT question.`,
  },
  {
    item: 'phone',
    heading: 'Charging your phone',
    sub: `Charging a phone once uses about the same electricity as ${q(v('phone'))} ChatGPT questions, or ${n(v('phone') / v('image'))} AI images.`,
  },
  {
    item: 'popcorn',
    heading: 'Microwave popcorn',
    sub: `Three minutes of microwave popcorn is about ${q(v('popcorn'))} questions' worth.`,
  },
  {
    item: 'kettle',
    heading: 'Boiling water for a cuppa',
    sub: `Boiling a litre of water is about ${q(v('kettle'))}.`,
  },
  {
    item: 'netflix',
    heading: 'An hour of Netflix',
    sub: `An hour of Netflix, counting the TV, the router and the network, is about ${q(v('netflix'))}.`,
  },
  {
    item: 'movie',
    heading: 'A night in',
    sub: `Together that's about ${g(v('movie'))} g CO₂e for a show, popcorn and a cuppa, or ${q(v('movie'))} ChatGPT questions.`,
  },
  {
    item: 'water',
    heading: 'A bottle of water',
    sub: `A 500 ml bottle of water comes to about ${g(v('water'))} g CO₂e, almost all of it from making the plastic bottle.`,
  },
  {
    item: 'video',
    heading: 'Making an AI video',
    sub: `AI video uses far more. One short clip from the largest open video model tested used 415 Wh, about ${q(v('video'))} ChatGPT questions. Small video models use much less. We couldn't find published figures for commercial tools such as Sora.`,
  },
  {
    item: 'shower',
    heading: 'A hot shower',
    sub: `A 7-minute shower with electrically heated water is about ${times(v('shower'), v('video'))} times that clip, around ${k(v('shower'))} kg CO₂e.`,
  },
  {
    item: 'drive',
    heading: 'A 10 km drive',
    sub: `Driving 10 km in an average petrol car releases about ${k(v('drive'))} kg CO₂e from the exhaust, or ${q(v('drive'))} ChatGPT questions.`,
  },
  {
    item: 'tshirt',
    heading: 'A cotton t-shirt',
    sub: `A cotton t-shirt is about ${k(v('tshirt'))} kg CO₂e, or ${q(v('tshirt'))} questions.`,
  },
  {
    item: 'rice',
    heading: 'A kilo of rice',
    sub: `A kilo of rice is about ${k(v('rice'))} kg CO₂e, or ${q(v('rice'))} questions.`,
  },
  {
    item: 'jeans',
    heading: 'Fast fashion jeans',
    sub: `A pair of fast fashion jeans, flown between countries and worn 7 times, comes to ${k(v('jeans'))} kg CO₂e. That's 2.5 kg every time they're worn, or ${q(2.5)} ChatGPT questions per wear.`,
  },
  {
    item: 'iphone',
    heading: 'A new phone',
    sub: `A new iPhone 16 is ${n(v('iphone'))} kg CO₂e over its life. Apple assumes three years of use, which works out to about ${q(v('iphone') / (3 * 365))} ChatGPT questions for every day you own it.`,
  },
  {
    item: 'fridge',
    heading: 'Running a fridge',
    sub: `Running an efficient fridge for six months is about ${n(v('fridge'))} kg CO₂e.`,
  },
  {
    item: 'beef',
    heading: 'A kilo of beef',
    sub: `A kilo of beef from a beef herd is a little more, about ${n(v('beef'))} kg CO₂e, or ${q(v('beef'))} ChatGPT questions.`,
  },
  {
    item: 'concrete',
    heading: 'A truck load of concrete',
    sub: `A 5 m³ truck load of concrete is around ${n(v('concrete'))} kg CO₂, depending on the mix. That's about ${sig2(v('concrete') / chatgpt / 1e6)} million ChatGPT questions.`,
  },
  {
    item: 'flight',
    heading: 'Sydney to London and back',
    sub: `A return economy flight from Sydney to London is about ${n(v('flight'))} kg CO₂e per passenger from the fuel alone, or ${sig2(v('flight') / chatgpt / 1e6)} million ChatGPT questions. Counting contrails and other high-altitude effects, it's about ${n(flightRfKg)} kg.`,
  },
  {
    heading: 'How often matters',
    sub: `Each bar so far is a single action. If you asked ChatGPT a question every second, day and night, it would take about ${sig2(v('flight') / chatgpt / 86400)} days to match one return flight to London. But ChatGPT answers billions of questions a day, so the totals further down matter more.`,
  },
  {
    item: 'falcon',
    heading: 'A rocket launch',
    sub: `One Falcon 9 launch is about ${t(v('falcon'))} t CO₂e, using the US aviation regulator's own estimate.`,
  },
  {
    item: 'wikipedia',
    heading: 'Wikipedia for a year',
    sub: `Running all of Wikipedia's servers for a year was ${t(v('wikipedia'))} t CO₂e in 2021, about ${sig2(v('wikipedia') / chatgpt / 1e9)} billion ChatGPT questions.`,
  },
  {
    item: 'film',
    heading: 'Making a blockbuster',
    sub: `Making one big-budget Hollywood film averages ${t(v('film'))} t CO₂e.`,
  },
  {
    heading: 'Training the models',
    sub: 'Every question above leaves out the energy used to train the model in the first place. Here are published figures for some well-known models, in the order they came out.',
  },
  {
    item: 'gpt3',
    heading: 'GPT-3 (2020)',
    sub: `Google researchers estimated that training GPT-3 produced ${t(v('gpt3'))} t CO₂e. We couldn't find a training figure from OpenAI itself.`,
  },
  {
    item: 'llama2',
    heading: 'Llama 2 (2023)',
    sub: `Meta publishes figures for its open models. The three Llama 2 models took ${t(v('llama2'))} t CO₂e to train.`,
  },
  {
    item: 'llama3',
    heading: 'Llama 3 (April 2024)',
    sub: `Llama 3 took ${t(v('llama3'))} t CO₂e.`,
  },
  {
    item: 'llama',
    heading: 'Llama 3.1 (July 2024)',
    sub: `Llama 3.1, which added a much larger model, took ${t(v('llama'))} t CO₂e on the local grids, about ${sig2(v('llama') / chatgpt / 1e9)} billion ChatGPT questions. Meta says it offset or matched all of these with renewable energy, so it reports them as zero.`,
  },
  {
    item: 'llama4',
    heading: 'Llama 4 (April 2025)',
    sub: `The two Llama 4 models Meta released took ${t(v('llama4'))} t CO₂e. That doesn't include Llama 4 Behemoth, the bigger model they were trained from, which was still training. We couldn't find published training figures for the largest models from OpenAI, Google, Anthropic or xAI. Epoch AI found the computing used to train leading models grew 4 to 5 times a year from 2010 to 2024.`,
  },
  {
    item: 'mistral',
    heading: 'Training and using a model',
    sub: `Mistral published what it calls the first full life-cycle study of an AI model. Its Large 2 model produced ${t(v('mistral'))} t CO₂e across training, 18 months of use and making the hardware.`,
  },
  {
    heading: 'Yearly totals',
    sub: 'The rest are yearly totals, shown as multiples of the Llama 3.1 training run, the largest published training figure.',
  },
  {
    item: 'chatgptYear',
    heading: 'ChatGPT for a whole year',
    sub: `In mid-2025 OpenAI said ChatGPT received 2.5 billion prompts a day, at an average of 0.34 Wh each. Over a year that's about ${(+(v('chatgptYear') / 1000).toPrecision(3)).toLocaleString('en-AU')} t CO₂e, about ${llamaRuns(v('chatgptYear'))} times the Llama 3.1 training run. Use had more than doubled in the previous eight months.`,
  },
  {
    item: 'f1',
    heading: 'Formula 1',
    sub: `Formula 1's 2024 season was ${t(v('f1'))} t CO₂e by its own count, before the sustainable aviation fuel certificates it buys. That's about ${llamaRuns(v('f1'))} Llama 3.1 training runs.`,
  },
  {
    item: 'sydneyTrains',
    heading: 'Sydney Trains',
    sub: `Sydney Trains reported ${t(v('sydneyTrains'))} t CO₂e in 2018–19. In October 2021 it started buying renewable energy certificates to cover its electricity, which is how it counts as net zero. It's the same approach that lets Meta report zero for Llama.`,
  },
  {
    item: 'iphones',
    heading: 'A year of iPhones',
    sub: `Apple shipped 232.1 million iPhones in 2024. At 61 kg each, that's about ${mt(v('iphones'))} million t CO₂e.`,
  },
  {
    item: 'jets',
    heading: 'Private jets',
    sub: `Private jet flights produced at least ${mt(v('jets'))} million t CO₂ from fuel in 2023.`,
  },
  {
    item: 'bitcoin',
    heading: 'Bitcoin',
    sub: `Bitcoin mining used about 138 TWh of electricity in a year, producing about ${mt(v('bitcoin'))} million t CO₂e.`,
  },
  {
    item: 'dataCentres',
    heading: 'Every data centre',
    sub: `Every data centre in the world, running websites, streaming, banking, cloud storage and AI, emits about ${mt(v('dataCentres'))} million t CO₂ a year, according to the IEA. The IEA expects their electricity use to more than double by 2030, with AI the main driver.`,
  },
  {
    item: 'dataCentres2030',
    heading: 'Every data centre in 2030',
    sub: `Using the IEA's own forecasts for data centre electricity and for how clean the world's grids will be, that comes to about ${mt(v('dataCentres2030'))} million t CO₂ in 2030.`,
  },
  {
    item: 'flaring',
    heading: 'Gas flaring',
    sub: `Burning off unwanted gas at oil fields produced ${mt(v('flaring'))} million t CO₂e in 2025.`,
  },
  {
    item: 'aviation',
    heading: 'Airlines',
    sub: `Airlines emitted ${mt(v('aviation'))} million t CO₂ in 2025 from fuel alone.`,
  },
  {
    item: 'textiles',
    heading: 'Clothes and textiles',
    sub: 'Making the world’s textiles produces about 1.2 billion t CO₂e a year.',
  },
  {
    item: 'cattle',
    heading: 'Beef and dairy cattle',
    sub: 'Beef and dairy cattle produce about 3.8 billion t CO₂e a year (2015 data).',
  },
  {
    item: 'foodWaste',
    heading: 'Food that is never eaten',
    sub: 'Food that was grown but never eaten accounted for 9.3 billion t CO₂e in 2017. This overlaps with the cattle bar, since wasted meat and milk count in both.',
  },
];
