import type { Source } from '../types';

const s = (title: string, url: string): Source => ({ title, url });

export const SRC = {
  ember: s(
    'Ember (2026): Global Electricity Review 2026',
    'https://ember-energy.org/latest-insights/global-electricity-review-2026/electricity-demand-and-supply-trends/'
  ),
  ieaElectricity: s(
    'IEA (2026): Electricity 2026, Emissions',
    'https://www.iea.org/reports/electricity-2026/emissions'
  ),
  google2009: s(
    'Google (2009): Powering a Google search',
    'https://googleblog.blogspot.com/2009/01/powering-google-search.html'
  ),
  jegham: s(
    'Jegham et al. (2025): How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference',
    'https://arxiv.org/pdf/2505.09598'
  ),
  openaiNotes: s(
    'OpenAI Help Center: Model Release Notes',
    'https://help.openai.com/en/articles/9624314-model-release-notes'
  ),
  altman: s(
    'Sam Altman (June 2025): The Gentle Singularity',
    'https://blog.samaltman.com/the-gentle-singularity'
  ),
  gemini: s(
    'Google Cloud (August 2025): Measuring the environmental impact of AI inference',
    'https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference'
  ),
  mistral: s(
    'Mistral AI (July 2025): Our contribution to a global environmental standard for AI',
    'https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai'
  ),
  bertazzini: s(
    'Bertazzini et al. (2025): The Hidden Cost of an Image',
    'https://arxiv.org/pdf/2506.17016'
  ),
  delavande: s(
    'Delavande, Pierrard and Luccioni (2025): Video Killed the Energy Budget',
    'https://arxiv.org/pdf/2509.19222'
  ),
  iphoneBattery: s(
    'Blog do iPhone (2024): The real battery capacities of the iPhone 16 series',
    'https://blogdoiphone.com/en/news/exclusive-uncovering-the-real-battery-capacities-of-the-iphone-16-series/'
  ),
  carbonTrust: s(
    'Carbon Trust (2021): Carbon impact of video streaming',
    'https://www.carbontrust.com/sites/default/files/documents/resource/public/Carbon-impact-of-video-streaming.pdf'
  ),
  doeMicrowave: s(
    'US Department of Energy (2012): Microwave ovens test procedure, proposed rule',
    'https://www1.eere.energy.gov/buildings/appliance_standards/pdfs/mwo_tp_nopr.pdf'
  ),
  usgs: s(
    'USGS Water Science School: Specific heat capacity and water',
    'https://www.usgs.gov/special-topics/water-science-school/science/specific-heat-capacity-and-water'
  ),
  basix: s(
    'NSW Planning Portal (BASIX): Showerheads',
    'https://www.planningportal.nsw.gov.au/basix-water/fixtures/showerheads'
  ),
  nih: s(
    'US National Institutes of Health: PET water bottle environmental impact',
    'https://nems.nih.gov/sustain/Pages/PETWaterBottleImpact.aspx'
  ),
  poore: s(
    'Our World in Data: Greenhouse gas emissions per kilogram of food product (Poore and Nemecek 2018)',
    'https://ourworldindata.org/grapher/ghg-per-kg-poore.csv'
  ),
  desnzFactors: s(
    'UK DESNZ (2025): Greenhouse gas reporting conversion factors 2025, flat file',
    'https://assets.publishing.service.gov.uk/media/6846b6ea57f3515d9611f0dd/ghg-conversion-factors-2025-flat-format.xlsx'
  ),
  desnzMethod: s(
    'UK DESNZ (2025): Greenhouse gas conversion factors 2025, methodology paper',
    'https://assets.publishing.service.gov.uk/media/6846b0870392ed9b784c0187/2025-GHG-CF-methodology-paper.pdf'
  ),
  devera: s(
    'Devera (2026): Carbon footprint of a t-shirt',
    'https://devera.ai/benchmarks/carbon-footprint-of-a-t-shirt'
  ),
  jeans: s(
    'Guan et al. (2024): The carbon footprint of fast fashion consumption and mitigation strategies, a case study of jeans (accepted manuscript)',
    'https://discovery.ucl.ac.uk/id/eprint/10190661/1/Guan_Revised%20manuscript%20-%20clean%20version.pdf'
  ),
  applePer: s(
    'Apple (2024): iPhone 16 and iPhone 16 Plus Product Environmental Report',
    'https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf'
  ),
  energyStar: s(
    'ENERGY STAR (US EPA): Residential refrigerators and freezers, Version 5.0 draft 1 specification',
    'https://www.energystar.gov/sites/default/files/specs/ENERGY_STAR_Draft_1_Version_5.0_Residential_Refrigerator_and_Freezer_Specification.pdf'
  ),
  ecochain: s(
    'Ecochain: Concrete carbon footprint',
    'https://ecochain.com/blog/concrete-carbon-footprint/'
  ),
  faa: s(
    'US FAA (2020): SpaceX Falcon Program Final Environmental Assessment',
    'https://www.faa.gov/sites/faa.gov/files/space/environmental/nepa_docs/SpaceX_Falcon_Program_Final_EA_and_FONSI.pdf'
  ),
  wikimedia: s(
    'Wikimedia Meta-Wiki: Wikimedia servers',
    'https://meta.wikimedia.org/wiki/Wikimedia_servers'
  ),
  spa: s(
    'Sustainable Production Alliance (2021): Carbon Emissions of Film and Television Production',
    'https://greenproductionguide.com/wp-content/uploads/2021/04/SPA-Carbon-Emissions-Report.pdf'
  ),
  llama: s(
    'Meta: Llama 3.1 model card',
    'https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md'
  ),
  epoch: s(
    'Epoch AI (2024): Training compute of frontier AI models grows by 4-5x per year',
    'https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year'
  ),
  f1: s(
    'Formula 1 (2025): Sustainability update',
    'https://corp.formula1.com/wp-content/uploads/2025/08/F1-Sustainability-Update.pdf'
  ),
  climateworks: s(
    'Climateworks Centre (2020): Net Zero Momentum Tracker, Transport sector',
    'https://www.climateworkscentre.org/wp-content/uploads/2020/06/Net-Zero-Tracker-Transportation-Sector-Report-June-2020.pdf'
  ),
  idc: s(
    'GSMArena (2025): IDC smartphone shipments 2024 (reproduces IDC table)',
    'https://www.gsmarena.com/idc_reports_that_the_smartphone_market_grew_in_2024_apple_and_samsung_still_lead_the_pack-news-66105.php'
  ),
  jets: s(
    'Gössling, Humpe and Leitão (2024): Private aviation is making a growing contribution to climate change',
    'https://www.nature.com/articles/s43247-024-01775-z'
  ),
  cambridge: s(
    'Cambridge Centre for Alternative Finance (2025): Cambridge Digital Mining Industry Report',
    'https://www.jbs.cam.ac.uk/wp-content/uploads/2025/04/2025-04-cambridge-digital-mining-industry-report.pdf'
  ),
  ieaAiClimate: s(
    'IEA (2025): Energy and AI, AI and climate change',
    'https://www.iea.org/reports/energy-and-ai/ai-and-climate-change'
  ),
  ieaAiSummary: s(
    'IEA (2025): Energy and AI, Executive summary',
    'https://www.iea.org/reports/energy-and-ai/executive-summary'
  ),
  aemo: s(
    'AEMO (2026): ESOO data centre forecasting overview',
    'https://www.aemo.com.au/-/media/files/electricity/nem/planning_and_forecasting/nem_esoo/2026/2026-esoo-data-centre-forecasting-overview.pdf'
  ),
  flaring: s(
    'World Bank (2026): Global Gas Flaring Tracker Report',
    'https://thedocs.worldbank.org/en/doc/b34e0c054bb3fe3695e70154c28eef3f-0400072026/original/Global-Gas-FlaringTracker-June-23-2026.pdf'
  ),
  iata: s(
    'IATA (2026): Net Zero Progress Report 2025',
    'https://www.iata.org/contentassets/252e4a52294e4d86928fb5fd8a1ffd5c/net-zero-progress-report-2025.pdf'
  ),
  emf: s(
    'Ellen MacArthur Foundation (2017): A New Textiles Economy, summary of findings',
    'https://content.ellenmacarthurfoundation.org/m/7f818b40f06e1afd/original/Summary-of-findings-A-New-Textiles-Economy.pdf'
  ),
  fao: s(
    'FAO (2023): Pathways towards lower emissions',
    'https://www.fao.org/3/cc9029en/cc9029en.pdf'
  ),
  carbonBrief: s(
    'Carbon Brief (2021): Food waste makes up half of global food system emissions',
    'https://www.carbonbrief.org/food-waste-makes-up-half-of-global-food-system-emissions/'
  ),
  icmm: s(
    'ICMM (2026): Mining and metals GHG emissions',
    'https://www.icmm.com/website/data/2026/research_mining-metals-ghg-emissions.pdf'
  ),
  gcpCement: s(
    'Our World in Data: Annual CO₂ emissions from cement (Global Carbon Project)',
    'https://ourworldindata.org/grapher/annual-co2-cement.csv?country=~OWID_WRL'
  ),
  unep: s(
    'UNEP (2025): Emissions Gap Report 2025 (APO copy)',
    'https://apo.org.au/sites/default/files/resource-files/2025-11/apo-nid332811_0.pdf'
  ),
};
