import type { Source } from '../types';

export const SOURCES: Source[] = [
  {
    title: 'IEA: Energy and AI',
    url: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
    what: 'Data centres (415 TWh, 2024), AI inference (~15 TWh), per-query figures, 2030 projections',
  },
  {
    title: 'IEA: Streaming video factcheck',
    url: 'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines',
    what: "Corrected video streaming carbon figures (The Shift Project's 2019 estimates were widely overstated)",
  },
  {
    title: 'Carbon Brief: Netflix streaming factcheck',
    url: 'https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix/',
    what: '36 Wh/hr corrected figure, methodology breakdown',
  },
  {
    title: 'Cambridge CBECI',
    url: 'https://ccaf.io/cbnsi/cbeci',
    what: 'Bitcoin: 138 TWh / 39.8 Mt CO₂e (2025). Updated daily.',
  },
  {
    title: 'IATA: 2024 Aviation Emissions',
    url: 'https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals',
    what: '942 Mt CO₂ gross in 2024, grew ~8% YoY, international/domestic breakdown',
  },
  {
    title: 'Our World in Data: Aviation emissions',
    url: 'https://ourworldindata.org/global-aviation-emissions',
    what: 'Historical aviation CO₂, per-passenger figures',
  },
  {
    title: 'FAO: Livestock and Climate',
    url: 'https://www.fao.org/family-farming/detail/en/c/1634679/',
    what: 'Livestock = 14.5% of global GHG (7.1 Gt CO₂e), per-kg beef = 99.48 kg CO₂e',
  },
  {
    title: 'WRI: Beef and Climate Change',
    url: 'https://www.wri.org/insights/6-pressing-questions-about-beef-and-climate-change-answered',
    what: 'Beef alone ~3 Gt CO₂e/year, land-use change component',
  },
  {
    title: 'UNFCCC: Food Loss and Waste',
    url: 'https://unfccc.int/news/food-loss-and-waste-account-for-8-10-of-annual-global-greenhouse-gas-emissions-cost-usd-1-trillion',
    what: 'Food waste = 8–10% of global GHG, ~3.3 Gt CO₂e',
  },
  {
    title: 'Nature: Black Summer CO₂',
    url: 'https://www.nature.com/articles/s41586-021-03712-y',
    what: '715 Mt CO₂ released in 2019–20 Australian bushfires',
  },
  {
    title: 'Climate Council: Summer of Crisis',
    url: 'https://www.climatecouncil.org.au/resources/summer-of-crisis/',
    what: '~900 Mt CO₂e estimate for Black Summer, broader impact assessment',
  },
  {
    title: 'Australian DCCEEW: Bushfire GHG methodology',
    url: 'https://www.dcceew.gov.au/climate-change/publications/estimating-greenhouse-gas-emissions-from-bushfires-in-australias-temperate-forests-focus-on-2019-20',
    what: 'Official Australian government methodology for estimating bushfire emissions',
  },
  {
    title: 'Semafor / IndexBox: Mining 2024',
    url: 'https://www.semafor.com/article/03/10/2026/mining-metals-sector-account-for-11-of-global-emissions-report-finds',
    what: 'Mining + metals = 11% of global GHG in 2024',
  },
  {
    title: 'WEF: Sustainable concrete',
    url: 'https://www.weforum.org/stories/2024/09/cement-production-sustainable-concrete-co2-emissions/',
    what: 'Cement ~8% of global CO₂, emissions tripled 1990–2020',
  },
  {
    title: 'Earth.org: Fast fashion impact',
    url: 'https://earth.org/fast-fashions-detrimental-effect-on-the-environment/',
    what: 'Fashion = 8–10% of global CO₂, more than aviation + shipping combined',
  },
  {
    title: 'IEA: Standby power',
    url: 'https://www.iea.org/energy-system/buildings/standby-power',
    what: '~5% of global electricity, ~1% of global CO₂ from standby/vampire power',
  },
  {
    title: 'Greenly: Cloud storage carbon footprint',
    url: 'https://greenly.earth/en-gb/blog/industries/what-is-the-carbon-footprint-of-data-storage',
    what: '3–7 kWh per GB (Carnegie Mellon), 40–70 kWh per TB per year',
  },
  {
    title: 'Li et al. 2024: Fast fashion jeans LCA',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0048969724016498',
    what: 'Lifecycle carbon footprint of fast fashion jeans: ~16–20 kg CO₂e per pair',
  },
  {
    title: 'S&P Global: Gold mine GHG emissions',
    url: 'https://pages.marketintelligence.spglobal.com/greenhouse-gas-and-gold-mines-EMC.html',
    what: '792 kg CO₂e per troy ounce (2023 average across 329 primary gold mines)',
  },
  {
    title: 'Chien et al. 2025: Measuring AI energy and carbon intensity',
    url: 'https://arxiv.org/abs/2505.09598',
    what: 'Direct measurement of GPT-4o: median 1.2 Wh per query. Basis for ChatGPT per-query figure.',
  },
  {
    title: 'Apple: iPhone 16 Product Environmental Report',
    url: 'https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf',
    what: 'iPhone 16 lifecycle emissions: 61–74 kg CO₂e per device, 80% from manufacturing. Used for both smartphone manufacturing and iPhone fleet figures.',
  },
  {
    title: 'ICCT: Lifecycle greenhouse gas emissions of passenger vehicles',
    url: 'https://theicct.org/publication/a-global-comparison-of-the-life-cycle-greenhouse-gas-emissions-of-combustion-engine-and-electric-passenger-cars/',
    what: 'Manufacturing phase of average ICE car: ~8.4 t CO₂e. Basis for car manufacturing comparison.',
  },
  {
    title: 'Transport for NSW: Sydney Trains sustainability',
    url: 'https://www.transport.nsw.gov.au/data-and-research/transport-data-strategy/case-studies/sydney-trains-using-data-to-achieve-net-zero',
    what: 'Sydney Trains pre-renewable baseline: ~550,000 t CO₂e/yr; switched to 100% renewable 2021',
  },
  {
    title: 'Nature: Black Summer bushfire CO₂',
    url: 'https://www.nature.com/articles/s41586-021-03712-y',
    what: "715 Mt CO₂ released in 2019–20 Australian bushfires, more than a full year of Australia's normal emissions",
  },
  {
    title: 'Meta AI: Llama 3.1 Model Card',
    url: 'https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md',
    what: 'Llama 3.1 405B training: 27.5 GWh, 11,390 t CO₂e location-based / 0 t CO₂e market-based (renewable energy matching)',
  },
  {
    title: 'World Bank: 2025 Global Gas Flaring Tracker Report',
    url: 'https://www.worldbank.org/en/programs/gasflaringreduction/publication/2025-global-gas-flaring-tracker-report',
    what: 'Global gas flaring 2024: 151 billion cubic metres, 389 Mt CO₂e; highest since 2007',
  },
];
