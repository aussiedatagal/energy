import type { CStep } from '../types';

export const CSTEPS: CStep[] = [
  {
    label: '1 Google search',
    value: 0.00012,
    mult: '',
    color: '#58a6ff',
    proof: {
      primary: '0.3 Wh per search (standard web search)',
      quote:
        'A typical Google search requires approximately 0.0003 kilowatt-hours of energy, equivalent to about 0.3 Watt-hours per query. Equivalent to turning on a 60-watt light bulb for about 17 seconds.',
      source: 'Google (2009) — reported energy consumption per search',
      sourceUrl: 'https://www.google.com/about/',
      calc: '0.3 Wh × 0.4 kg CO₂/kWh ÷ 1,000',
      result: '0.00012 kg CO₂e (0.12 g)',
      note: "From Google's 2009 technical report. This is standard web search, not AI-generated answers. Google's newer AI-powered Search Overview uses ~3 Wh per query. 0.4 kg CO₂/kWh is the global average grid intensity used throughout this chart.",
    },
  },
  {
    label: '1 ChatGPT prompt (GPT-4o)',
    value: 0.00048,
    mult: 'baseline',
    color: '#79c0ff',
    proof: {
      primary: '1.2 Wh per text prompt (GPT-4o, median)',
      quote:
        'ChatGPT (GPT-4o) inference energy consumption was measured at 1.2 Wh per median text prompt, with shorter prompts consuming less and longer or reasoning-heavy queries consuming more.',
      source:
        "Chien et al. 2025 — 'Measuring the Energy and Carbon Intensity of AI Models' (arXiv:2505.09598) — direct measurement of GPT-4o",
      sourceUrl: 'https://arxiv.org/abs/2505.09598',
      calc: '1.2 Wh × 0.4 kg CO₂/kWh ÷ 1,000',
      result: '0.00048 kg CO₂e (0.48 g)',
      note: 'Measured directly on GPT-4o. Shorter prompts use less; longer or reasoning-heavy queries use more. The IEA cites 2.9 Wh as a cross-service average including image generation; 1.2 Wh is the median for text-only GPT-4o queries. 0.4 kg CO₂/kWh is the global average grid intensity used throughout this chart.',
    },
  },
  {
    label: 'AI image, 1 generation',
    value: 0.0012,
    mult: '×2.5',
    color: '#80cbc4',
    proof: {
      primary: '~2–4 Wh per image (modern hardware)',
      quote:
        'Modern text-to-image models consume between 0.086 and 4.08 Wh per image, with newer H100-era hardware significantly more efficient than older A100 GPUs.',
      source:
        "Cañas et al. 2025 'The Hidden Cost of an Image' (arxiv 2506.17016) — measured 17 current models at 0.086–4.08 Wh per image (46× spread). Luccioni et al. 2023 measured 25 Wh on A100 GPUs; H100-era hardware is significantly more efficient.",
      sourceUrl: 'https://arxiv.org/abs/2506.17016',
      calc: '~0.003 kWh × 0.4 kg CO₂/kWh',
      result: '~0.0012 kg CO₂e (~1.2 g)',
      note: 'Range across 17 models: 0.086–4.08 Wh, with U-Net models lower than Transformer-based ones. Figure uses ~3 Wh as a conservative estimate for commercial models at standard resolution. Very high uncertainty. Multiplier: 0.0012 ÷ 0.00048 = 2.5.',
    },
  },
  {
    label: 'Charge a smartphone (daily)',
    value: 0.0055,
    mult: '~×11',
    color: '#9cdcfe',
    proof: {
      primary: '~13.8 Wh per daily charge (iPhone 16 battery capacity)',
      quote:
        'Model A3287 iPhone 16: 3,561 mAh at 3.886 V nominal voltage. Battery capacity: 13.85 Wh.',
      source:
        'Blog do iPhone: Uncovering the Real Battery Capacities of the iPhone 16 Series (official specs)',
      sourceUrl:
        'https://blogdoiphone.com/en/news/exclusive-uncovering-the-real-battery-capacities-of-the-iphone-16-series/',
      calc: '3,561 mAh × 3.886 V ÷ 1,000 = 13.85 Wh. × 0.4 kg CO₂/kWh ÷ 1,000',
      result: '~0.0055 kg CO₂e (~5.5 g)',
      note: 'Charging only, does not include device manufacturing or cellular network energy. Figure assumes one full daily charge. Multiplier: 0.0055 ÷ 0.00048 ≈ 11.',
    },
  },
  {
    label: 'Netflix, 1 hour',
    value: 0.055,
    mult: '~×115',
    color: '#56d364',
    proof: {
      primary: '~55 g CO₂e per hour (data centre + network + viewing device)',
      quote:
        'The European average footprint estimated in this white paper is approximately 55 gCO₂e per hour of video streaming for the conventional allocation approach. This estimate uses a European average grid emission factor, a representative mix of viewing devices, and network energy intensity figures for 2020.',
      source: 'Carbon Trust: Carbon impact of video streaming (2021)',
      sourceUrl:
        'https://www.carbontrust.com/sites/default/files/documents/resource/public/Carbon-impact-of-video-streaming.pdf',
      calc: 'Full lifecycle: data centre (~0.6 g) + network/CDN (~4 g) + viewing device (laptop/average mix, ~50 g). Total: ~55 g CO₂e/hr.',
      result: '~55 g CO₂e (full lifecycle)',
      note: 'Includes a representative mix of viewing devices. Multiplier: 0.055 ÷ 0.00048 ≈ 115.',
    },
  },
  {
    label: 'Microwave popcorn, 3 min',
    value: 0.02,
    mult: '×42',
    color: '#4db6ac',
    proof: {
      primary: '~50 Wh (1 kW microwave for 3 minutes)',
      quote:
        'A standard household microwave oven draws approximately 1 to 1.2 kilowatts of power, with microwave popcorn requiring roughly 3 minutes of cooking time.',
      source: 'Standard microwave power draw specifications; typical popcorn microwave time',
      sourceUrl: 'https://www.energy.gov/energysaver/appliances-and-electronics/microwave-ovens',
      calc: '1 kW × 3/60 hr = 0.05 kWh × 0.4 kg CO₂/kWh',
      result: '~0.020 kg CO₂e (20 g)',
      note: 'Multiplier: 0.020 ÷ 0.00048 ≈ 42.',
    },
  },
  {
    label: 'Boil a full kettle',
    value: 0.06,
    mult: '×125',
    color: '#7ee787',
    proof: {
      primary: '~0.15 kWh (2.4 kW kettle, full 1.7 L, ~3.5 minutes)',
      quote:
        'A typical electric kettle draws 2.4 kilowatts of power and takes approximately 3.5 minutes to boil a full 1.7-litre capacity.',
      source: 'Standard electrical load data. 2.4 kW is typical for Australian and UK kettles.',
      sourceUrl: 'https://www.energyrating.gov.au/appliances-explained/kettle-electric',
      calc: '2.4 kW × 3.5/60 hr = 0.14 kWh, rounded. × 0.4 kg CO₂/kWh',
      result: '~0.060 kg CO₂e (60 g)',
      note: 'Multiplier: 0.060 ÷ 0.00048 = 125.',
    },
  },
  {
    label: 'Movie night',
    value: 0.135,
    mult: '×281',
    color: '#e3b341',
    proof: {
      primary: '~135 g CO₂e total: 1hr Netflix streaming + microwave popcorn (3 min) + full kettle',
      quote:
        'Netflix viewers streamed around 94 billion hours of content in the second half of 2024.',
      source: 'Carbon Trust (2021); European average for full-lifecycle video streaming',
      sourceUrl:
        'https://www.carbontrust.com/sites/default/files/documents/resource/public/Carbon-impact-of-video-streaming.pdf',
      calc: 'Netflix (full lifecycle, 1hr): ~55g CO₂e. Microwave popcorn (1kW × 3min × 0.4 kg CO₂/kWh): ~20g. Full kettle (2.4kW × 3.5min × 0.4 kg CO₂/kWh): ~60g. Total: 135g CO₂e.',
      result: '~135g CO₂e (0.135 kg). Equivalent to ~281 ChatGPT text queries.',
      note: 'Streaming figure now includes full lifecycle per Carbon Trust methodology (data centre + network + viewing device). Multiplier: 0.135 ÷ 0.00048 ≈ 281.',
    },
  },
  {
    label: 'Cloud photos, 1 day (1TB)',
    value: 0.06,
    mult: '~×125',
    color: '#f0a050',
    proof: {
      primary: '~0.15 kWh (1TB stored for 1 day, storage only)',
      quote:
        'Cloud data storage consumes between 40 and 70 kilowatt-hours per terabyte per year, with the midpoint of this range being approximately 55 kWh/TB/yr.',
      source: 'EcoFlow; Greenly. Mid-point of published range 40–70 kWh/TB/yr.',
      sourceUrl:
        'https://greenly.earth/en-gb/blog/industries/what-is-the-carbon-footprint-of-data-storage',
      calc: '55 kWh/TB/yr ÷ 365 = ~0.15 kWh/day × 0.4 kg CO₂/kWh',
      result: '~0.060 kg CO₂e (60 g)',
      note: 'Storage energy only, excludes upload and download. 1 TB holds ~250,000 average smartphone photos. Multiplier: 0.060 ÷ 0.00048 = 125.',
    },
  },
  {
    label: 'Bottled water, 500ml',
    value: 0.1,
    mult: '~×208',
    color: '#7dd3fc',
    proof: {
      primary: '~100g CO₂e for a locally sourced 500ml PET bottle',
      quote:
        'A 500ml plastic (PET) beverage bottle generates approximately 100 grams of CO₂-equivalent across its lifecycle, dominated by polymer production.',
      source:
        'Multiple lifecycle assessment studies (WRAP UK; peer-reviewed LCAs for PET beverage containers)',
      sourceUrl:
        'https://www.wrap.org.uk/resources/guide/identifying-and-reducing-embodied-carbon-new-products',
      calc: 'PET bottle production: ~50g CO₂e. Water treatment: ~1g. Transport (local, ~100km): ~15g. Chilling at retail: ~10g. Total: ~80–110g.',
      result: '~100g CO₂e (0.1 kg)',
      note: 'Imported bottles (e.g. shipped internationally) add significantly more transport emissions. The PET bottle itself is the dominant cost: petroleum-derived polymer production is energy-intensive. Multiplier: 0.1 ÷ 0.00048 ≈ 208.',
    },
  },
  {
    label: 'AI video, 10 seconds',
    value: 0.374,
    mult: '~×780',
    color: '#ffa726',
    proof: {
      primary: '~936 Wh per 10-second Sora video (H100 analyst estimate)',
      quote:
        'Generating a 10-second video with Sora AI requires approximately 40 minutes of H100 GPU compute time, translating to roughly 936 watt-hours of energy consumption.',
      source:
        'SemiAnalysis / Forbes (2024) — analyst estimate based on ~40 minutes of H100 compute per 10-second video, reported by Deepak Mathivanan and AJ Kourabi',
      sourceUrl: 'https://reclaimedsystems.substack.com/p/every-sora-ai-video-burns-1-kilowatt',
      calc: '40 min × 1.3 kW (H100 GPU + cooling overhead) = 0.867–0.936 kWh × 0.4 kg CO₂/kWh',
      result: '~0.374 kg CO₂e (~374 g)',
      note: 'Sora-class models only. Smaller open-source models use less. This is an analyst estimate derived from compute time, not a direct measurement. OpenAI has published no energy figures for Sora. Multiplier: 0.374 ÷ 0.00048 ≈ 779.',
    },
  },
  {
    label: 'Hot shower, 7 min',
    value: 0.42,
    mult: '×875',
    color: '#ffa657',
    proof: {
      primary: '1.05 kWh (9 kW instant electric shower, 7 minutes)',
      quote:
        'An instant electric shower draws approximately 9 kilowatts of power, making a 7-minute shower one of the largest energy-consuming household activities.',
      source:
        'Standard household energy data — 9 kW is typical for an Australian/UK electric shower',
      sourceUrl: 'https://www.energyrating.gov.au/appliances-explained/shower',
      calc: '9 kW × 7/60 hr = 1.05 kWh × 0.4 kg CO₂/kWh',
      result: '0.420 kg CO₂e (420 g)',
      note: 'Tank water heaters and gas systems use less. Gas is roughly half. Multiplier: 0.420 ÷ 0.00048 = 875.',
    },
  },
  {
    label: '1 kg of raw rice',
    value: 1.0,
    mult: '~×2,100',
    color: '#88c070',
    proof: {
      primary: '~1 kg CO₂e per kg of raw rice (farm-gate, global average)',
      quote:
        'Rice production generates approximately 1 kilogram of CO₂-equivalent per kilogram of rice produced, with methane from flooded paddies accounting for 50-80% of total emissions.',
      source: 'FAO: Greenhouse Gas Emissions from Agrifood Systems 2022',
      sourceUrl:
        'https://openknowledge.fao.org/server/api/core/bitstreams/121cc613-3d0f-431c-b083-cc2031dd8826/content',
      calc: 'FAO farm-gate emission intensity: 1 kg CO₂e/kg rice. Dominated by methane from flooded paddies (50–80% of total emissions).',
      result: '~1 kg CO₂e (1,000 g)',
      note: 'Excludes land-use change. Higher estimates (2.7–4 kg CO₂e/kg) include supply chain and land conversion. 1 kg of beef (99 kg CO₂e) is about 100× more emissions-intensive than the same weight of rice. Multiplier vs ChatGPT: 1.0 ÷ 0.00048 ≈ 2,100.',
    },
  },
  {
    label: 'Drive 10 km, petrol car',
    value: 1.5,
    mult: '×3,100',
    color: '#ff8a65',
    proof: {
      primary: '~150 g CO₂/km (average petrol car)',
      quote:
        'An average petrol passenger car generates approximately 150 grams of CO₂ per kilometre driven under standard conditions.',
      source:
        'Australian National Transport Commission (NTC) emission factors; similar to UK DEFRA figures for average new petrol passenger car.',
      sourceUrl: 'https://www.ntcinfo.gov.au/publications/ntc-transport-exhaust-emissions-factors',
      calc: '10 km × 0.150 kg CO₂/km',
      result: '~1.500 kg CO₂e',
      note: 'Based on average petrol car. SUVs and older vehicles emit more (~180–220 g/km); hybrids less. Does not include vehicle manufacturing. Multiplier: 1.500 ÷ 0.00048 ≈ 3,100.',
    },
  },
  {
    label: 'Cotton t-shirt (200g)',
    value: 7,
    mult: '~×15,000',
    color: '#d4a76a',
    proof: {
      primary: '~7 kg CO₂e for a standard 200g cotton t-shirt',
      quote:
        'A 200-gram cotton t-shirt generates approximately 7 kilograms of CO₂-equivalent across its lifecycle, from farming through manufacturing to transport.',
      source:
        "Carbon Trust 'Product Carbon Footprinting' guidelines; peer-reviewed LCAs for cotton apparel",
      sourceUrl:
        'https://www.carbontrust.com/our-work-and-impact/guides/product-carbon-footprinting',
      calc: 'Cotton farming: ~2.5 kg CO₂e (fertiliser, irrigation). Spinning and weaving: ~2 kg CO₂e (often coal-powered mills). Dyeing and finishing: ~1.5 kg CO₂e. Cut, sew, transport: ~1 kg CO₂e.',
      result: '~7 kg CO₂e (range: 5–10 kg across studies)',
      note: 'Organic cotton reduces fertiliser emissions but yield per hectare is lower. A polyester t-shirt typically has lower production emissions but is petroleum-derived. Multiplier: 7 ÷ 0.00048 ≈ 14,600. Per-wear calculation uses ~30 wears before disposal (WRAP UK, "Valuing our Clothes", 2020 — measured average for UK garments). UK-specific but the most rigorous published figure available; global fast fashion averages are likely lower.',
    },
  },
  {
    label: '1 pair of fast fashion jeans',
    value: 20,
    mult: '×42,000',
    color: '#f472b6',
    proof: {
      primary: '~20 kg CO₂e per pair',
      quote:
        'A single pair of fast-fashion jeans produces approximately 20 kilograms of CO₂-equivalent in emissions across cotton farming, dyeing, manufacturing, and transport.',
      source:
        "Li et al. 2024 — 'The carbon footprint of fast fashion consumption: a case study of jeans' (Science of the Total Environment)",
      sourceUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0048969724016498',
      calc: 'Direct lifecycle assessment. Covers cotton farming (~40% of total), dyeing, cut & sew, and transport.',
      result: '~20 kg CO₂e',
      note: 'Range across studies: 10–30 kg CO₂e/pair depending on production methods. Cotton farming and textile dyeing are the largest contributors. Multiplier: 20 ÷ 0.00048 ≈ 42,000.',
    },
  },
  {
    label: 'Manufacturing 1 smartphone',
    value: 65,
    mult: '×135,000',
    color: '#c8a2c8',
    proof: {
      primary: '65 kg CO₂e per device (iPhone 16)',
      quote:
        "Manufacturing a single iPhone 16 generates approximately 65 kilograms of CO₂-equivalent, with the production phase accounting for 80% of the device's total lifecycle emissions.",
      source: 'Apple Product Environmental Report (iPhone 16, Sept 2024)',
      sourceUrl:
        'https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf',
      calc: 'Direct from Apple PER. Production phase = 80% of 81 kg CO₂e total lifecycle; Apple reports 65 kg CO₂e for manufacturing.',
      result: '~65 kg CO₂e',
      note: 'Manufacturing is the dominant cost; using the phone for its full lifetime adds ~13 kg CO₂e (Apple data). Multiplier: 65 ÷ 0.00048 ≈ 135,000.',
    },
  },
  {
    label: 'Beef, 1 kg produced',
    value: 99.48,
    mult: '~×207,000',
    color: '#f78166',
    proof: {
      primary: '99.48 kg CO₂e per kg of beef (direct figure)',
      quote:
        'Beef production generates approximately 99.48 kilograms of CO₂-equivalent per kilogram of beef, making it roughly 100 times more emissions-intensive than the same weight of rice.',
      source: 'FAO: Tackling Climate Change Through Livestock (2013)',
      sourceUrl: 'https://www.fao.org/family-farming/detail/en/c/1634679/',
      calc: 'Direct figure, average across beef herd. Covers methane (enteric fermentation), feed production, land-use change, and manure.',
      result: '99.48 kg CO₂e',
      note: 'Lamb is similarly high (~39 kg CO₂e/kg). Pork ~7 kg. Chicken ~6 kg. Multiplier: 99.48 ÷ 0.00048 ≈ 207,000.',
    },
  },
  {
    label: 'Running a fridge, 6 months',
    value: 100,
    mult: '~×208K',
    color: '#a0c4f0',
    proof: {
      primary: '~250 kWh (6 months, typical household fridge at 500 kWh/year)',
      quote:
        'A typical household refrigerator consumes approximately 500 kilowatt-hours of electricity per year, with newer ENERGY STAR models using 400 kWh/year and older side-by-side models reaching 700–800 kWh/year.',
      source: 'US DOE / ENERGY STAR appliance data; Australian Energy Council appliance data',
      sourceUrl: 'https://www.energystar.gov/products/appliances/refrigerators',
      calc: '500 kWh/year ÷ 2 = 250 kWh × 0.4 kg CO₂/kWh global average',
      result: '~100 kg CO₂e (6 months). Full year: ~200 kg CO₂e.',
      note: "Range: 400–800 kWh/year depending on size, age, and model. An ENERGY STAR certified fridge uses ~400 kWh/year; a large side-by-side with ice maker can reach 700–800 kWh. A chest freezer uses only ~215 kWh/year, less than a fridge despite running colder, because cold air doesn't fall out when opened. Multiplier vs ChatGPT: 100 ÷ 0.00048 ≈ 208,000.",
    },
  },
  {
    label: '1 Bitcoin transaction',
    value: 450,
    mult: '~×938K',
    color: '#f5a623',
    proof: {
      primary: '~450 kg CO₂e per on-chain Bitcoin transaction',
      quote:
        'A single on-chain Bitcoin transaction generates approximately 450 kilograms of CO₂-equivalent, making it roughly 150,000 times more carbon-intensive than a typical Visa payment.',
      source: 'Cambridge Bitcoin Electricity Consumption Index (CBECI), 2024',
      sourceUrl: 'https://ccaf.io/cbnsi/cbeci',
      calc: 'Bitcoin network: ~130 TWh/year (CBECI 2024 estimate) × 0.4 kg CO₂/kWh = ~52 Mt CO₂e/year. Annual on-chain transactions: ~115 million. 52,000,000 t ÷ 115,000,000 = ~452 kg CO₂e per transaction.',
      result: '~450 kg CO₂e (0.45 t)',
      note: 'Bitcoin mining uses an estimated 58–66% low-carbon energy (CCAF 2024), so actual per-transaction CO₂ may be lower than the global grid average implies. Lightning Network transactions are off-chain and use negligible additional energy. A Visa transaction costs ~3 g CO₂e; Bitcoin is roughly 150,000× more carbon-intensive per payment. Multiplier vs ChatGPT: 450 ÷ 0.00048 ≈ 938,000.',
    },
  },
  {
    label: '5m³ of concrete (cement truck load)',
    value: 1650,
    mult: '~×3.4M',
    color: '#94a3b8',
    proof: {
      primary: '~1,650 kg CO₂e for 5m³ of standard Portland cement concrete',
      quote:
        'Concrete production generates approximately 330 kilograms of CO₂-equivalent per cubic metre for standard Portland cement mixes, with approximately 50% of emissions coming from the chemical calcination process of limestone.',
      source:
        'Academic literature consensus: 200–500 kg CO₂e/m³ for typical mixes; 323–332 kg/m³ for standard Portland cement concrete (multiple LCA studies)',
      sourceUrl: 'https://ecochain.com/blog/concrete-carbon-footprint/',
      calc: '5m³ × 330 kg CO₂e/m³ = 1,650 kg CO₂e',
      result: '~1,650 kg CO₂e (~1.65 t)',
      note: "About half of cement's CO₂ comes from calcination (the chemical breakdown of limestone), which cannot be eliminated by switching to clean electricity. A ready-mix truck typically carries 6–9m³. Multiplier: 1,650 ÷ 0.00048 ≈ 3,400,000.",
    },
  },
  {
    label: 'Flight: SYD to London',
    value: 3500,
    mult: '~×7.3M',
    color: '#ef5350',
    proof: {
      primary: '~3,500 kg CO₂e (return economy, estimate)',
      quote:
        'A return economy-class flight from Sydney to London generates approximately 3,500 kilograms of CO₂-equivalent per passenger, with the full radiative forcing impact being 2–3 times higher when including non-CO₂ warming effects.',
      source: 'Estimated from ATAG/IATA per-passenger emission factors.',
      sourceUrl:
        'https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals',
      calc: 'Estimate. Range across published calculators: ~2,300 kg CO₂ only (ICAO) to ~5,800 kg CO₂e with full radiative forcing (×2.7). 3,500 kg is a mid-range figure.',
      result: '~3,500 kg CO₂e',
      note: 'Radiative forcing: aircraft also produce NOₓ, water vapour, and contrails with warming effects at altitude. A multiplier of ~2.7 is scientifically supported but excluded from most official reporting. Multiplier vs ChatGPT: 3,500 ÷ 0.00048 ≈ 7.3 million.',
    },
  },
  {
    label: 'Falcon 9 launch (SpaceX)',
    value: 233000,
    mult: '~486M queries',
    color: '#c8d8e8',
    proof: {
      primary: '~233 t CO₂e from propellant combustion per launch',
      quote:
        'A SpaceX Falcon 9 launch burns approximately 73,600 kilograms of rocket propellant, generating roughly 233 tonnes of CO₂-equivalent from combustion alone.',
      source:
        "SpaceX Falcon 9 User's Guide (propellant masses); IPCC AR6 CO₂ emission factor for kerosene",
      sourceUrl: 'https://www.spacex.com/media/falcon-users-guide.pdf',
      calc: 'First stage: ~65,000 kg RP-1. Second stage: ~8,600 kg RP-1. Total: ~73,600 kg × 3.16 kg CO₂/kg = ~233 t CO₂e. Excludes black carbon, N₂O, and manufacturing. First stage is reused across 10–20 flights, amortising hardware carbon.',
      result: '~233 t CO₂e per launch',
      note: 'SpaceX launched Falcon 9 more than 90 times in 2024, roughly one every four days. Black carbon from rocket exhaust has outsized high-altitude warming effects not captured in the CO₂-only figure. SpaceX has not published lifecycle figures. Multiplier vs ChatGPT: 233,000 ÷ 0.00048 ≈ 486 million.',
    },
  },
  {
    label: 'Wikipedia servers, 1 year',
    value: 1680000,
    mult: '~3.5B queries',
    color: '#a8b8d0',
    proof: {
      primary: '~1,680 t CO₂e per year from data centre electricity',
      quote:
        'Wikimedia data centres consumed approximately 4.2 gigawatt-hours of electricity in FY 2022–23, generating roughly 1,680 tonnes of CO₂-equivalent per year on a location-based accounting method.',
      source: 'Wikimedia Foundation Sustainability Data (FY 2022–23)',
      sourceUrl: 'https://wikimediafoundation.org/about/wmf-reports/wmf-annual-report/',
      calc: 'Wikimedia data centres consumed ~4.2 GWh in FY 2022–23. 4,200,000 kWh × 0.4 kg CO₂/kWh = ~1,680 t CO₂e/year (location-based).',
      result: '~1,680 t CO₂e/year',
      note: 'Wikimedia Foundation uses renewable energy certificates for 100% of its electricity; market-based figure is near zero. Location-based shown for consistency. Wikipedia serves ~1.7 billion unique devices per month across 60+ million articles in 300+ languages. Equivalent GPT-4o queries: 1,680,000 t ÷ 0.00048 kg ≈ 3.5 billion queries.',
    },
  },
  {
    label: 'Producing 1 Hollywood blockbuster',
    value: 3370000,
    mult: '~7B queries',
    color: '#ffa726',
    proof: {
      primary: '~3,370 t CO₂e per tentpole film (budget above $70M)',
      quote:
        'Producing a major Hollywood blockbuster with a budget above $70 million generates approximately 3,370 tonnes of CO₂-equivalent, with international travel and transport accounting for about 65% of the footprint.',
      source:
        'Sustainable Production Alliance (SPA) 2021 — Carbon Footprint Study, based on 24 large productions',
      sourceUrl: 'https://www.sustainableproduction.org/resources/',
      calc: 'Direct from SPA lifecycle assessment. Travel and transport = ~65% of footprint; energy use = ~21%.',
      result: '~3,370 t CO₂e',
      note: 'BFI (UK) puts a comparable figure at ~2,840 t CO₂e for large-budget UK productions. A $30–70M mid-range production averages ~1,081 t CO₂e. Equivalent GPT-4o queries: 3,370,000 t ÷ 0.00048 kg ≈ 7 billion queries.',
    },
  },
  {
    label: 'Training Llama 3.1 405B (Meta, 2024)',
    value: 11390000,
    mult: '~24B queries',
    color: '#79c0ff',
    proof: {
      primary: '27.5 GWh training energy; 11,390 t CO₂e location-based',
      quote:
        "Training Meta's Llama 3.1 405B model consumed 27.5 gigawatt-hours of electricity, generating 11,390 tonnes of CO₂-equivalent on a location-based accounting method, though Meta achieved zero emissions through renewable energy purchases.",
      source: 'Meta AI: Llama 3.1 Model Card (2024)',
      sourceUrl:
        'https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md',
      calc: '27.5 GWh × ~0.414 kg CO₂/kWh (US grid intensity, 2024) = 11,390 t CO₂e. Meta reports location-based emissions of 11,390 t CO₂eq and market-based emissions of 0 t CO₂eq (100% renewable energy matching).',
      result: '11,390 t CO₂e (location-based) / 0 t CO₂e (market-based with renewables)',
      note: "The chart uses location-based emissions for consistency: this is what training would emit on the average grid. Meta's own reported figure is 0 because they purchase renewable energy certificates. GPT-4o, Claude, and Gemini have not published training emissions. Equivalent GPT-4o queries: 11,390,000 t ÷ 0.00048 kg ≈ 24 billion queries.",
    },
  },
  {
    label: 'Formula 1 season 2024 (operational)',
    value: 168720000,
    mult: '~×15 Llama',
    color: '#f97316',
    proof: {
      primary: '168,720 t CO₂e for the 2024 F1 season (operational footprint)',
      quote:
        'The 2024 Formula 1 season generated 168,720 tonnes of CO₂-equivalent in operational emissions across 24 race weekends, with international freight and team travel comprising the majority of the footprint.',
      source:
        "Formula 1: 'Formula 1 on track to be Net Zero by 2030 with 26% carbon footprint reduction' (Dec 2024)",
      sourceUrl:
        'https://corp.formula1.com/formula-1-on-track-to-be-net-zero-carbon-by-2030-with-26-reduction-in-carbon-footprint/',
      calc: "Official figure from Formula 1's own sustainability report. Covers 24 race weekends plus logistics (international freight, team and personnel air travel), factory energy, and event operations.",
      result: '168,720 t CO₂e (2024 season, operational)',
      note: "Excludes spectator travel, estimated separately at ~655,000 t CO₂e. F1's operational footprint fell 26% from 2018 to 2024 through logistics optimisation. Multiplier vs Llama 3.1: 168,720 ÷ 11,390 ≈ 15.",
    },
  },
  {
    label: 'Sydney Trains, 1 year (pre-renewable)',
    value: 550000000,
    mult: '~×48 Llama',
    color: '#56d364',
    proof: {
      primary: '~550,000 t CO₂e per year (2019–20 baseline)',
      quote:
        'Sydney Trains consumed approximately 874 gigawatt-hours of electricity per year, generating roughly 550,000 tonnes of CO₂-equivalent on the pre-2021 NSW grid mix, before switching to 100% renewable electricity.',
      source: 'Transport for NSW — Sydney Trains corporate emissions reporting',
      sourceUrl:
        'https://www.transport.nsw.gov.au/data-and-research/transport-data-strategy/case-studies/sydney-trains-using-data-to-achieve-net-zero',
      calc: '~874 GWh/yr electricity × ~0.63 kg CO₂/kWh (NSW grid pre-2021) ≈ 550,000 t CO₂e',
      result: '~550,000 t CO₂e',
      note: 'Sydney Trains switched to 100% renewable electricity in 2021, four years ahead of schedule. The pre-renewable figure is used to show the actual cost of running a city rail network. Current electricity emissions are near zero. Multiplier vs Llama 3.1: 550,000 ÷ 11,390 ≈ 48.',
    },
  },
  {
    label: 'All AI queries, 2025 (annual)',
    value: 6000000000,
    mult: '~×530 Llama',
    color: '#79c0ff',
    proof: {
      primary:
        '~15 TWh for all generative AI inference globally in 2025; ~6 Mt CO₂e on the average grid',
      quote:
        'Electricity demand for AI is growing fast globally, even if other sources of demand are growing faster.',
      source: 'IEA: Energy and AI (2024)',
      sourceUrl: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
      calc: '15 TWh × 0.4 kg CO₂/kWh = 6,000,000 t CO₂e. Covers all generative AI inference globally: text, image, code, and other modalities. Does not include training.',
      result: '~6 Mt CO₂e (annual, 2025)',
      note: 'This is the running cost of using AI tools, not training them. Training adds roughly 1–2% on top. Multiplier vs Llama 3.1 training: 6,000,000 ÷ 11,390 ≈ 527.',
    },
  },
  {
    label: 'All iPhones manufactured in 2024',
    value: 15100000000,
    mult: '~×1,300 Llama',
    color: '#8b949e',
    proof: {
      primary: '~15.1 Mt CO₂e',
      quote:
        'Approximately 232 million iPhones were manufactured in 2024, generating roughly 15.1 megatonnes of CO₂-equivalent in production emissions, with 80% occurring during the manufacturing phase.',
      source:
        'Apple Product Environmental Report (iPhone 16, Sept 2024); IDC global smartphone shipment data 2024',
      sourceUrl:
        'https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf',
      calc: '232M iPhones shipped in 2024 (IDC) × ~65 kg CO₂e average (Apple-reported range: 61–74 kg across models) ÷ 1,000',
      result: '~15,100,000 t CO₂e (15.1 Mt)',
      note: "80% of each device's emissions occur during manufacturing (Apple data). Covers production only, not usage or end-of-life. Apple reduced per-device footprint ~30% since iPhone 13. Multiplier vs Llama 3.1: 15,100,000 ÷ 11,390 ≈ 1,300.",
    },
  },
  {
    label: 'All AI queries, 2030 (projected)',
    value: 139200000000,
    mult: '~×12,200 Llama',
    color: '#79c0ff',
    proof: {
      primary:
        '~347 TWh projected for all generative AI inference globally by 2030; ~139 Mt CO₂e on the average grid',
      quote:
        'Global electricity consumption by data centres is projected to reach around 945 TWh by 2030 in the Base Case, representing just under 3% of total global electricity consumption in 2030.',
      source: 'IEA: Energy and AI (2024)',
      sourceUrl: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
      calc: '347 TWh × 0.4 kg CO₂/kWh = 138,800,000 t CO₂e.',
      result: '~139 Mt CO₂e (projected, 2030)',
      note: 'IEA Base Case projection. Assumes continued growth in AI adoption but does not account for potential efficiency improvements in hardware or models. ~23× the 2025 figure.',
    },
  },
  {
    label: 'All data centres globally, 2024 (annual)',
    value: 166000000000,
    mult: '~×14,600 Llama',
    color: '#56d364',
    proof: {
      primary: '~166 Mt CO₂e from all global data centres in 2024',
      quote:
        "Data centres accounted for around 1.5% of the world's electricity consumption in 2024, or 415 terawatt-hours (TWh). The United States accounted for the largest share of global data centre electricity consumption in 2024 (45%), followed by China (25%) and Europe (15%).",
      source: 'IEA: Energy and AI (2024)',
      sourceUrl: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
      calc: '415 TWh × 0.4 kg CO₂/kWh = 166,000,000 t CO₂e. Covers all workloads: AI, streaming, cloud storage, web, enterprise, and everything else.',
      result: '~166 Mt CO₂e (2024)',
      note: 'AI generative inference is a subset of this — estimated at ~6 Mt CO₂e. Data centres accounted for ~1.5% of global electricity in 2024, projected to roughly double by 2030. Multiplier vs Llama 3.1 training: 166,000,000 ÷ 11,390 ≈ 14,600.',
    },
  },
  {
    label: 'Global gas flaring, 2024',
    value: 389000000000,
    mult: '~×34,000 Llama',
    color: '#f78166',
    proof: {
      primary: '389 Mt CO₂e (2024, global)',
      quote:
        'Global gas flaring reached 151 billion cubic metres in 2024, the highest level since 2007, generating 389 megatonnes of CO₂-equivalent from combustion and unburnt methane emissions.',
      source: 'World Bank: 2025 Global Gas Flaring Tracker Report',
      sourceUrl:
        'https://www.worldbank.org/en/programs/gasflaringreduction/publication/2025-global-gas-flaring-tracker-report',
      calc: '151 billion cubic metres flared globally in 2024. Includes CO₂ from combustion (343 Mt) plus unburnt methane (46 Mt CO₂e). World Bank Global Flaring and Methane Reduction Partnership (GFMR).',
      result: '389 Mt CO₂e',
      note: 'Gas flaring reached its highest level since 2007 in 2024. Russia, Iraq, Iran, the USA, and Venezuela are the top five flaring countries. The gas is a byproduct of oil extraction. When there is no pipeline to capture it, operators burn it rather than vent raw methane (which is worse for the climate). These emissions rarely appear in public discussion of oil and gas industry impacts.',
    },
  },
  {
    label: 'Global commercial aviation, 1 year',
    value: 942000000000,
    mult: '~×83,000 Llama',
    color: '#7dd3fc',
    proof: {
      primary: '~942 Mt CO₂ from global aviation, 2023 (direct CO₂ only)',
      quote:
        'Global commercial aviation generated approximately 942 megatonnes of CO₂ in direct emissions from jet fuel combustion, not including radiative forcing effects which could roughly double the warming impact.',
      source: "IATA: 'Aviation and Climate' 2024",
      sourceUrl:
        'https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals',
      calc: 'IATA 2023 figure: approximately 942 Mt CO₂ direct from jet fuel combustion. CO₂-only; no radiative forcing multiplier applied.',
      result: '~942 Mt CO₂ (direct, no radiative forcing)',
      note: "Radiative forcing: aviation's full warming effect is roughly 2–3× the direct CO₂ figure, due to NOₓ, contrails, and water vapour at altitude. This multiplier is scientifically established but excluded from official carbon accounting. Multiplier vs Llama 3.1 training: 942,000 ÷ 11.39 ≈ 83,000.",
    },
  },
  {
    label: 'Global fashion industry, 1 year',
    value: 1200000000000,
    mult: '~×105,000 Llama',
    color: '#e879f9',
    proof: {
      primary: '~1,200 Mt CO₂e from global apparel and footwear production',
      quote:
        'The global fashion industry generates approximately 1,200 megatonnes of CO₂-equivalent annually, producing 92 million tonnes of textile waste yearly, with synthetic fibre production requiring petroleum and cotton requiring intensive land use.',
      source:
        "UNEP: Sustainability and the Fashion Industry (2019); McKinsey 'Fashion on Climate' (2020)",
      sourceUrl: 'https://unfccc.int/news/un-helps-fashion-industry-shift-to-low-carbon',
      calc: 'Aggregated lifecycle estimate covering cotton farming, synthetic fibre production, textile manufacturing, garment assembly, transport, retail, laundering, and disposal.',
      result: '~1,200 Mt CO₂e (range: 800–1,800 Mt across studies)',
      note: 'High uncertainty reflects difficulty in measuring global supply chains. Synthetic (polyester) garments require petroleum for production; cotton is land and water-intensive. The industry produces roughly 92 million tonnes of textile waste per year. Multiplier vs Llama 3.1 training: 1,200,000 ÷ 11.39 ≈ 105,000.',
    },
  },
  {
    label: 'Global food waste, 1 year',
    value: 3300000000000,
    mult: '~×290,000 Llama',
    color: '#86efac',
    proof: {
      primary: '~3,300 Mt CO₂e from food produced but never eaten',
      quote:
        'Global food waste generates approximately 3,300 megatonnes of CO₂-equivalent annually, with about one-third of all food produced globally being lost or wasted before consumption.',
      source:
        'FAO: Food Wastage Footprint: Impacts on Natural Resources (2013); UNEP Food Waste Index (2021)',
      sourceUrl: 'https://www.unep.org/resources/report/unep-food-waste-index-report-2021',
      calc: 'Includes emissions from producing food that is wasted, plus methane from organic waste decomposing in landfill (GWP100 applied). About one-third of all food produced globally is lost or wasted.',
      result: '~3,300 Mt CO₂e',
      note: 'The UNEP 2021 report found 931 million tonnes of food (by weight) wasted at retail and consumer level alone. Including farm-to-retail losses and the full supply chain brings the total to ~3,300 Mt CO₂e. About 3–4× global aviation. Multiplier vs Llama 3.1 training: 3,300,000 ÷ 11.39 ≈ 290,000.',
    },
  },
  {
    label: 'Global beef and dairy, 1 year',
    value: 4300000000000,
    mult: '~×378,000 Llama',
    color: '#d97706',
    proof: {
      primary: '~4,300 Mt CO₂e from beef and dairy cattle worldwide',
      quote:
        'The livestock sector is a major player, responsible for 18 percent of greenhouse gas emissions measured in CO2 equivalent. This is a higher share than transport.',
      source: 'FAO: Tackling Climate Change Through Livestock (2013)',
      sourceUrl: 'https://www.fao.org/3/i3437e/i3437e.pdf',
      calc: 'Beef: 2,891 Mt CO₂e. Dairy: 1,387 Mt CO₂e. Combined: ~4,278 Mt CO₂e. Covers enteric fermentation (digestive methane), manure, feed production (including soya-driven deforestation), and transport.',
      result: '~4,300 Mt CO₂e',
      note: 'Total global livestock is around 7,100 Mt CO₂e (FAO). Beef and dairy cattle together account for roughly 60% of that. Multiplier vs Llama 3.1 training: 4,300,000 ÷ 11.39 ≈ 378,000.',
    },
  },
  {
    label: 'Manufacturing a new car',
    value: 9000,
    mult: '~×19M',
    color: '#c09060',
    proof: {
      primary: '~9 t CO₂e for the manufacturing phase of a mid-size petrol car',
      quote:
        "Manufacturing a typical mid-size petrol car generates approximately 9 tonnes of CO₂-equivalent, with production costs typically 5-10 times lower in emissions than the vehicle's operational fuel consumption over its lifetime.",
      source:
        "Volkswagen Golf 8 Product LCA (2021); ICCT 'Comparison of lifecycle greenhouse gas emissions of various passenger vehicles' (2021)",
      sourceUrl:
        'https://theicct.org/publication/lifecycle-greenhouse-gas-emissions-of-automobiles/',
      calc: 'VW-published LCA for Golf 8: 9.3 t CO₂e manufacturing phase. ICCT average for a new ICE passenger car: ~8.4 t CO₂e. Mid-point used.',
      result: '~9,000 kg CO₂e',
      note: "Manufacturing only. A car's lifetime fuel emissions are typically 5–10× the production footprint. Electric vehicle manufacturing is similar (~10–14 t CO₂e) but lifetime emissions are much lower. Multiplier: 9,000 ÷ 0.00048 ≈ 18,750,000.",
    },
  },
  {
    label: 'Manufacturing a new EV',
    value: 15000,
    mult: '~×31M',
    color: '#70b8d8',
    proof: {
      primary:
        '~14–17 t CO₂e manufacturing; battery pack accounts for most of the difference vs a petrol car',
      quote:
        'Manufacturing an electric vehicle generates approximately 15 tonnes of CO₂-equivalent, about 60% more than a petrol car due to battery production, but lower lifetime emissions offset this during operation.',
      source:
        "Volkswagen ID.3 Product Sustainability Assessment (2021); ICCT 'Lifecycle GHG Emissions of EVs' (2021)",
      sourceUrl:
        'https://theicct.org/publication/a-global-comparison-of-the-life-cycle-greenhouse-gas-emissions-of-combustion-engine-and-electric-passenger-cars/',
      calc: 'VW ID.3 published LCA: 14.6–16.4 t CO₂e manufacturing phase, depending on battery source. Battery alone: ~8–10 t CO₂e. Body/chassis: ~6 t CO₂e, similar to an ICE car (9 t CO₂e total).',
      result: '~15,000 kg CO₂e (15 t)',
      note: 'Manufacturing an EV costs about 60–70% more carbon than an equivalent petrol car (9 t CO₂e); the battery is the difference. Lifetime emissions are lower as electricity grids decarbonise, but the production carbon is higher. The break-even point depends on where and how the car is charged. Multiplier vs ChatGPT: 15,000 ÷ 0.00048 ≈ 31 million.',
    },
  },
];
