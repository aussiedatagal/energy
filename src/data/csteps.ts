import type { CStep } from '../types';

export const CSTEPS: CStep[] = [
  {
    label: '1 Google search',
    value: 0.00012,
    mult: '',
    color: '#58a6ff',
    proof: {
      primary: '0.3 Wh per search (standard web search)',
      quote: 'Text generation using a small language model takes around 0.3 Wh.',
      source: 'IEA: Energy and AI (2024), citing experimental small-language-model inference',
      sourceUrl: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
      calc: '0.3 Wh × 0.4 kg CO₂/kWh ÷ 1,000',
      result: '0.00012 kg CO₂e (0.12 g)',
      note: "From IEA Energy and AI (2024), citing experimental small-language-model inference at 0.3 Wh. Standard web search, not AI-generated answers. Google's newer AI-powered Search Overview uses substantially more. 0.4 kg CO₂/kWh is the global average grid intensity used throughout this chart.",
    },
  },
  {
    label: '1 ChatGPT prompt (GPT-4o)',
    value: 0.000168,
    mult: 'baseline',
    color: '#79c0ff',
    proof: {
      primary: '0.42 Wh per short GPT-4o text prompt',
      quote:
        'Results show the most energy-intensive models exceed 29 Wh per long prompt, over 65× the most efficient systems. Even a 0.42 Wh short query, when scaled to 700M queries/day, aggregates to annual electricity comparable to 35,000 U.S. homes, evaporative freshwater equal to the annual drinking needs of 1.2M people, and carbon emissions requiring a Chicago-sized forest to offset.',
      source:
        "Jegham et al. 2025 — 'How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference' (arXiv:2505.09598)",
      sourceUrl: 'https://arxiv.org/abs/2505.09598',
      calc: '0.42 Wh × 0.4 kg CO₂/kWh ÷ 1,000',
      result: '0.000168 kg CO₂e (0.17 g)',
      note: 'Jegham et al. measured 0.42 Wh (±0.13 Wh) for a short GPT-4o prompt in Section 6.1. Longer or reasoning-heavy queries use substantially more. 0.4 kg CO₂/kWh is the global average grid intensity used throughout this chart.',
    },
  },
  {
    label: 'AI image, 1 generation',
    value: 0.0012,
    mult: '×7',
    color: '#80cbc4',
    proof: {
      primary: '~2–4 Wh per image (modern hardware)',
      quote:
        'As we can observe from Figure 1, the considered models display a notable difference in terms of median energy consumption, with Lumina being the models consuming the highest energy value (4.08×10−3 kWh) and LCM SSD 1B the lowest one (8.6×10−5 kWh).',
      source:
        "Bertazzini et al. 2025 'The Hidden Cost of an Image' (arxiv 2506.17016) — measured 17 current models at 0.086–4.08 Wh per image (46× spread). Luccioni et al. 2023 measured 25 Wh on A100 GPUs; H100-era hardware is significantly more efficient.",
      sourceUrl: 'https://arxiv.org/abs/2506.17016',
      calc: '~0.003 kWh × 0.4 kg CO₂/kWh',
      result: '~0.0012 kg CO₂e (~1.2 g)',
      note: 'Range across 17 models: 0.086–4.08 Wh, with U-Net models lower than Transformer-based ones. Figure uses ~3 Wh as a conservative estimate for commercial models at standard resolution. Very high uncertainty. Multiplier: 0.0012 ÷ 0.000168 ≈ 7.',
    },
  },
  {
    label: 'Charge a smartphone (daily)',
    value: 0.0055,
    mult: '~×33',
    color: '#9cdcfe',
    proof: {
      primary: '~13.8 Wh per daily charge (iPhone 16 battery capacity)',
      quote: 'Model A3287 iPhone 16: 3,561 mAh at 3.886 V nominal voltage.',
      source:
        'Blog do iPhone: Uncovering the Real Battery Capacities of the iPhone 16 Series (official specs)',
      sourceUrl:
        'https://blogdoiphone.com/en/news/exclusive-uncovering-the-real-battery-capacities-of-the-iphone-16-series/',
      calc: '3,561 mAh × 3.886 V ÷ 1,000 = 13.85 Wh. × 0.4 kg CO₂/kWh ÷ 1,000',
      result: '~0.0055 kg CO₂e (~5.5 g)',
      note: 'Charging only, does not include device manufacturing or cellular network energy. Figure assumes one full daily charge. Multiplier: 0.0055 ÷ 0.000168 ≈ 33.',
    },
  },
  {
    label: 'Netflix, 1 hour',
    value: 0.056,
    mult: '~×333',
    color: '#56d364',
    proof: {
      primary: '56 g CO₂e per hour (European average, full lifecycle, 2020)',
      quote:
        'The European average carbon emissions per hour of video streaming for the year 2020 has been estimated to be 56gCO2e/hour video streaming using the conventional approach, as shown in Figure 17.',
      source: 'Carbon Trust: Carbon impact of video streaming (2021)',
      sourceUrl:
        'https://www.carbontrust.com/sites/default/files/documents/resource/public/Carbon-impact-of-video-streaming.pdf',
      calc: 'Full lifecycle: data centre (~0.6 g) + network/CDN (~4 g) + viewing device (laptop/average mix, ~50 g). Total: ~56 g CO₂e/hr.',
      result: '~56 g CO₂e (full lifecycle)',
      note: 'Includes a representative mix of viewing devices. Multiplier: 0.056 ÷ 0.000168 ≈ 333.',
    },
  },
  {
    label: 'Microwave popcorn, 3 min',
    value: 0.02,
    mult: '×119',
    color: '#4db6ac',
    proof: {
      primary: '~50 Wh (1 kW microwave for 3 minutes)',
      quote:
        'Whirlpool commented that for a microwave oven with a 1000 W rated cooking output, the total energy consumption is typically 1800 W.',
      source:
        'U.S. Department of Energy, Microwave Oven Test Procedure NPR (Whirlpool comment, 2012)',
      sourceUrl: 'https://www1.eere.energy.gov/buildings/appliance_standards/pdfs/mwo_tp_nopr.pdf',
      calc: '1 kW × 3/60 hr = 0.05 kWh × 0.4 kg CO₂/kWh',
      result: '~0.020 kg CO₂e (20 g)',
      note: 'Multiplier: 0.020 ÷ 0.000168 ≈ 119.',
    },
  },
  {
    label: 'Boil a full kettle',
    value: 0.06,
    mult: '×357',
    color: '#7ee787',
    proof: {
      primary: '~0.15 kWh (2.4 kW kettle, full 1.7 L, ~3.5 minutes)',
      quote:
        "The 'input' power is usually marked on the packaging or in the manufacturer's information in 'watts' (W).",
      source:
        'Australian Government (energy.gov.au): Energy Rating — electric appliances without a star rating label',
      sourceUrl: 'https://www.energy.gov.au/households/energy-rating',
      calc: '2.4 kW × 3.5/60 hr = 0.14 kWh, rounded. × 0.4 kg CO₂/kWh',
      result: '~0.060 kg CO₂e (60 g)',
      note: 'Multiplier: 0.060 ÷ 0.000168 = 357.',
    },
  },
  {
    label: 'Movie night',
    value: 0.136,
    mult: '×810',
    color: '#e3b341',
    proof: {
      primary: '~135 g CO₂e total: 1hr Netflix streaming + microwave popcorn (3 min) + full kettle',
      quote:
        'The European average carbon emissions per hour of video streaming for the year 2020 has been estimated to be 56gCO2e/hour video streaming using the conventional approach, as shown in Figure 17.',
      source: 'Carbon Trust (2021); composite of streaming, popcorn, and kettle (see calc)',
      sourceUrl:
        'https://www.carbontrust.com/sites/default/files/documents/resource/public/Carbon-impact-of-video-streaming.pdf',
      calc: 'Netflix (full lifecycle, 1hr): ~56g CO₂e. Microwave popcorn (1kW × 3min × 0.4 kg CO₂/kWh): ~20g. Full kettle (2.4kW × 3.5min × 0.4 kg CO₂/kWh): ~60g. Total: 136g CO₂e.',
      result: '~136g CO₂e (0.136 kg). Equivalent to ~283 ChatGPT text queries.',
      note: 'Composite of streaming, popcorn, and kettle (see calc). Streaming uses Carbon Trust full-lifecycle methodology. Multiplier: 0.136 ÷ 0.000168 ≈ 810.',
    },
  },
  {
    label: 'Cloud photos, 1 day (1TB)',
    value: 0.06,
    mult: '~×357',
    color: '#f0a050',
    proof: {
      primary: '~0.15 kWh (1TB stored for 1 day, storage only)',
      quote:
        'The electricity required to save a gigabyte (GB) of data to the cloud is around 0.0078 kWh per month, totaling to almost 0.1 kWh per year.',
      source: 'Greenly (2025): What is the Carbon Footprint of Data Storage?',
      sourceUrl:
        'https://greenly.earth/en-gb/blog/industries/what-is-the-carbon-footprint-of-data-storage',
      calc: '55 kWh/TB/yr ÷ 365 = ~0.15 kWh/day × 0.4 kg CO₂/kWh',
      result: '~0.060 kg CO₂e (60 g)',
      note: 'Storage energy only, excludes upload and download. 1 TB holds ~250,000 average smartphone photos. Multiplier: 0.060 ÷ 0.000168 = 357.',
    },
  },
  {
    label: 'Bottled water, 500ml',
    value: 0.1,
    mult: '~×595',
    color: '#7dd3fc',
    proof: {
      primary: '~100g CO₂e for a locally sourced 500ml PET bottle',
      quote: 'GHG emissions: 0.034 – 0.046 kg CO2-eq/ 500 mL bottle',
      source:
        'NIH National Energy Management Systems: Life Cycle Environmental Impact of PET Water Bottles',
      sourceUrl: 'https://nems.nih.gov/sustain/Pages/PETWaterBottleImpact.aspx',
      calc: 'PET bottle production: ~50g CO₂e. Water treatment: ~1g. Transport (local, ~100km): ~15g. Chilling at retail: ~10g. Total: ~80–110g.',
      result: '~100g CO₂e (0.1 kg)',
      note: 'Imported bottles (e.g. shipped internationally) add significantly more transport emissions. The PET bottle itself is the dominant cost: petroleum-derived polymer production is energy-intensive. Multiplier: 0.1 ÷ 0.000168 ≈ 595.',
    },
  },
  {
    label: 'AI video, 10 seconds',
    value: 0.374,
    mult: '~×2.2K',
    color: '#ffa726',
    proof: {
      primary: '~936 Wh per 10-second Sora video (H100 analyst estimate)',
      quote:
        'Every 10 second video takes nearly 1 kilowatt hour - .936 Kwh, to be precise - more than boiling 4 full kettles of water.',
      source:
        'SemiAnalysis / Forbes (2024) — analyst estimate based on ~40 minutes of H100 compute per 10-second video, reported by Deepak Mathivanan and AJ Kourabi',
      sourceUrl: 'https://reclaimedsystems.substack.com/p/every-sora-ai-video-burns-1-kilowatt',
      calc: '40 min × 1.3 kW (H100 GPU + cooling overhead) = 0.867–0.936 kWh × 0.4 kg CO₂/kWh',
      result: '~0.374 kg CO₂e (~374 g)',
      note: 'Sora-class models only. Smaller open-source models use less. This is an analyst estimate derived from compute time, not a direct measurement. OpenAI has published no energy figures for Sora. Multiplier: 0.374 ÷ 0.000168 ≈ 2,226.',
    },
  },
  {
    label: 'Hot shower, 7 min',
    value: 0.42,
    mult: '×2,500',
    color: '#ffa657',
    proof: {
      primary: '1.05 kWh (9 kW instant electric shower, 7 minutes)',
      quote:
        "The 'input' power is usually marked on the packaging or in the manufacturer's information in 'watts' (W).",
      source:
        'Australian Government (energy.gov.au): Energy Rating — instant electric shower element rated 9 kW on appliance label',
      sourceUrl: 'https://www.energy.gov.au/households/energy-rating',
      calc: '9 kW × 7/60 hr = 1.05 kWh × 0.4 kg CO₂/kWh',
      result: '0.420 kg CO₂e (420 g)',
      note: 'Tank water heaters and gas systems use less. Gas is roughly half. Multiplier: 0.420 ÷ 0.000168 ≈ 2,500.',
    },
  },
  {
    label: '1 kg of raw rice',
    value: 1.0,
    mult: '~×6K',
    color: '#88c070',
    proof: {
      primary: '~1 kg CO₂e per kg of raw rice (farm-gate, global average)',
      quote:
        'The global emissions intensities of cereals were 1 kg CO2eq/kg for rice and 0.2 kg CO2eq/kg for other cereals.',
      source: 'FAO (2022): Greenhouse Gas Emissions from Agrifood Systems',
      sourceUrl:
        'https://openknowledge.fao.org/server/api/core/bitstreams/121cc613-3d0f-431c-b083-cc2031dd8826/content',
      calc: 'FAO farm-gate emission intensity: 1 kg CO₂e/kg rice. Dominated by methane from flooded paddies (50–80% of total emissions).',
      result: '~1 kg CO₂e (1,000 g)',
      note: 'Excludes land-use change. Higher estimates (2.7–4 kg CO₂e/kg) include supply chain and land conversion. 1 kg of beef (99 kg CO₂e) is about 100× more emissions-intensive than the same weight of rice. Multiplier vs ChatGPT: 1.0 ÷ 0.000168 ≈ 6,000.',
    },
  },
  {
    label: 'Drive 10 km, petrol car',
    value: 1.5,
    mult: '×8,900',
    color: '#ff8a65',
    proof: {
      primary: '~150 g CO₂/km (average petrol car)',
      quote:
        'For vehicles first registered in 2024 and still registered as at January 2025, the average emissions intensity was 156.3 g/km, down from 162.7 g/km the year before – a 3.9 per cent improvement.',
      source:
        'National Transport Commission (2025): Light Vehicle Emissions Intensity in Australia — Highlights',
      sourceUrl:
        'https://www.ntc.gov.au/sites/default/files/assets/files/NTC%20CO2%202025%20-%20Highlights.pdf',
      calc: '10 km × 0.150 kg CO₂/km',
      result: '~1.500 kg CO₂e',
      note: 'Based on average petrol car. SUVs and older vehicles emit more (~180–220 g/km); hybrids less. Does not include vehicle manufacturing. Multiplier: 1.500 ÷ 0.000168 ≈ 8,900.',
    },
  },
  {
    label: 'Cotton t-shirt (200g)',
    value: 3,
    mult: '~×18K',
    color: '#d4a76a',
    proof: {
      primary: '3.0 kg CO₂e median per cotton t-shirt (cradle-to-grave)',
      quote:
        'The median carbon footprint of a t-shirt is 3.0 kg CO2e, with a mean of 3.1 kg CO2e across 10,000 simulations.',
      source:
        'Devera (2026): Carbon Footprint of a T-Shirt — LCA benchmark (10,000 Monte Carlo simulations)',
      sourceUrl: 'https://devera.ai/benchmarks/carbon-footprint-of-a-t-shirt',
      calc: 'Median from 10,000 Monte Carlo simulations (ISO 14040/44, Ecoinvent 3.9.1). P10–P90 range: 2.1–4.1 kg CO₂e per shirt.',
      result: '3.0 kg CO₂e (median)',
      note: 'P10–P90 range: 2.1–4.1 kg CO₂e (same source). Multiplier: 3.0 ÷ 0.000168 ≈ 18,000. Per-wear calculation uses ~30 wears before disposal (WRAP UK, "Valuing our Clothes", 2020).',
    },
  },
  {
    label: '1 pair of fast fashion jeans',
    value: 17.5,
    mult: '~×104K',
    color: '#f472b6',
    proof: {
      primary: '17.5 kg CO₂e per pair (fast fashion baseline, 7 wears)',
      quote:
        'Results show that the carbon footprint of fast fashion consumption is 2.50 kgCO2e/one wear jeans, 11 times higher than that of traditional fashion consumption.',
      source:
        "Li et al. 2024 — 'The carbon footprint of fast fashion consumption and mitigation strategies-a case study of jeans' (Science of The Total Environment)",
      sourceUrl: 'https://doi.org/10.1016/j.scitotenv.2024.171508',
      source2: 'Li et al. 2024 (baseline scenario methodology)',
      sourceUrl2:
        'https://discovery.ucl.ac.uk/id/eprint/10190661/1/Guan_Revised%20manuscript%20-%20clean%20version.pdf',
      quote2:
        'After being worn 7 times in fast fashion consumption, the discarded jeans were incinerated and landfilled with municipal household waste.',
      calc: '2.50 kg CO₂e per wear × 7 wears (fast fashion baseline scenario) = 17.5 kg CO₂e per pair.',
      result: '17.5 kg CO₂e per pair',
      note: 'Jeans production and cross-border transportation contributed 91% of the per-wear footprint. Other studies cite 10–33 kg CO₂e/pair depending on lifetime wears and system boundaries. Multiplier: 17.5 ÷ 0.000168 ≈ 104,000.',
    },
  },
  {
    label: 'Manufacturing 1 smartphone',
    value: 61,
    mult: '~×363K',
    color: '#c8a2c8',
    proof: {
      primary: '61 kg CO₂e product carbon footprint (iPhone 16 256GB)',
      quote:
        "We've calculated the product carbon footprint for the following configurations. iPhone 16 256GB: 61 kg CO2e. Production accounts for 80% of total product emissions.",
      source: 'Apple Product Environmental Report (iPhone 16, Sept 2024)',
      sourceUrl:
        'https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf',
      calc: 'Apple PER table: iPhone 16 256GB total product footprint = 61 kg CO₂e. Production phase = 80% of lifecycle emissions.',
      result: '61 kg CO₂e (total product footprint)',
      note: 'Apple reports total product footprint, not manufacturing alone. Production is 80% (~49 kg); product use is 18%. Multiplier: 61 ÷ 0.000168 ≈ 363,000.',
    },
  },
  {
    label: 'Beef, 1 kg produced',
    value: 99.48,
    mult: '~×592K',
    color: '#f78166',
    proof: {
      primary: '99.48 kg CO₂e per kg of beef (direct figure)',
      quote:
        'Global average greenhouse gas emissions (GHG) per kilogram of food product. This is measured in kilograms of CO₂-equivalents per kilogram of product (kgCO₂eq per kg).',
      source: 'Poore & Nemecek (2018), via Our World in Data',
      sourceUrl: 'https://ourworldindata.org/grapher/ghg-per-kg-poore',
      source2: 'Poore & Nemecek (2018) dataset chart (IELA reproduction)',
      sourceUrl2:
        'https://www.iela.org/fileadmin/media/WG/Sustainability/Greenhouse_gas_emissions_per_kilogram_of_food_product.pdf',
      quote2: 'Beef (beef herd) 99.48 kg',
      calc: 'Global mean across ~38,000 farms (Poore & Nemecek 2018). Covers methane (enteric fermentation), feed production, land-use change, and manure.',
      result: '99.48 kg CO₂e',
      note: 'Lamb: 39.72 kg CO₂e/kg, Beef (dairy): 33.3 kg CO₂e/kg, Pork: 12.32 kg CO₂e/kg, Poultry: 6.58 kg CO₂e/kg (same dataset). Multiplier: 99.48 ÷ 0.000168 ≈ 592,000.',
    },
  },
  {
    label: 'Running a fridge, 6 months',
    value: 100,
    mult: '~×595K',
    color: '#a0c4f0',
    proof: {
      primary: '~250 kWh (6 months, typical household fridge at 500 kWh/year)',
      quote:
        'Currently, the average energy consumption of full-size refrigerators and refrigerator-freezers meeting the proposed requirements is 397 kWh/year, a 16% reduction from the energy consumption of models qualified to Version 4.1 (468 kWh/year).',
      source:
        'U.S. ENERGY STAR: Draft Version 5.0 Residential Refrigerator and Freezer Specification',
      sourceUrl:
        'https://www.energystar.gov/sites/default/files/specs/ENERGY_STAR_Draft_1_Version_5.0_Residential_Refrigerator_and_Freezer_Specification.pdf',
      calc: '500 kWh/year ÷ 2 = 250 kWh × 0.4 kg CO₂/kWh global average',
      result: '~100 kg CO₂e (6 months). Full year: ~200 kg CO₂e.',
      note: "Range: 400–800 kWh/year depending on size, age, and model. An ENERGY STAR certified fridge uses ~400 kWh/year; a large side-by-side with ice maker can reach 700–800 kWh. A chest freezer uses only ~215 kWh/year, less than a fridge despite running colder, because cold air doesn't fall out when opened. Multiplier vs ChatGPT: 100 ÷ 0.000168 ≈ 595,000.",
    },
  },
  {
    label: '1 Bitcoin transaction',
    value: 450,
    mult: '~×2.7M',
    color: '#f5a623',
    proof: {
      primary: '~450 kg CO₂e per on-chain Bitcoin transaction (derived from annual network data)',
      quote:
        'Our findings reveal an estimated annual electricity usage of Bitcoin mining activity at approximately 138 TWh, resulting in around 39.8 MtCO2e attributable GHG emissions.',
      source: 'Cambridge Digital Mining Industry Report 2025',
      sourceUrl:
        'https://www.jbs.cam.ac.uk/wp-content/uploads/2025/04/2025-04-cambridge-digital-mining-industry-report.pdf',
      calc: 'Bitcoin network: 138 TWh/year (Cambridge 2025) ÷ 0.4 kg CO₂/kWh average grid = ~55.2 Mt CO₂e/year. Annual on-chain transactions: ~115 million. 55,200,000 t ÷ 115,000,000 ≈ 480 kg CO₂e per transaction. (Using CBECI estimate of 142 TWh would yield ~494 kg/tx.)',
      result: '~450–480 kg CO₂e per transaction',
      note: 'This is derived from total annual network emissions divided by annual transaction count. Actual per-transaction impact varies by transaction size (bytes) and network congestion. Lightning Network transactions are off-chain and use negligible additional energy. A Visa transaction costs ~3 g CO₂e; Bitcoin is roughly 150,000× more carbon-intensive per payment. Multiplier vs ChatGPT: 450 ÷ 0.000168 ≈ 2,700,000.',
    },
  },
  {
    label: '5m³ of concrete (cement truck load)',
    value: 1650,
    mult: '~×9.8M',
    color: '#94a3b8',
    proof: {
      primary: '~1,650 kg CO₂e for 5m³ of standard Portland cement concrete',
      quote: 'Concrete emits about 200–500 kg CO2 per m³, mainly from cement.',
      source:
        'Academic literature consensus: 200–500 kg CO₂e/m³ for typical mixes; 323–332 kg/m³ for standard Portland cement concrete (multiple LCA studies)',
      sourceUrl: 'https://ecochain.com/blog/concrete-carbon-footprint/',
      calc: '5m³ × 330 kg CO₂e/m³ = 1,650 kg CO₂e',
      result: '~1,650 kg CO₂e (~1.65 t)',
      note: "About half of cement's CO₂ comes from calcination (the chemical breakdown of limestone), which cannot be eliminated by switching to clean electricity. A ready-mix truck typically carries 6–9m³. Multiplier: 1,650 ÷ 0.000168 ≈ 9,800,000.",
    },
  },
  {
    label: 'Flight: SYD to London',
    value: 3500,
    mult: '~×21M',
    color: '#ef5350',
    proof: {
      primary: '~3,500 kg CO₂e (return economy, estimate)',
      quote:
        'The result is then multiplied by 3.16 to obtain the amount of CO2 (in kg) footprint attributed to each passenger travelling between those two airports.',
      source: 'ICAO Carbon Emissions Calculator methodology (v13, 2019)',
      sourceUrl:
        'https://icec.icao.int/Documents/Methodology%20ICAO%20Carbon%20Emissions%20Calculator_v13_Final.pdf',
      calc: 'Estimate from ICAO Carbon Emissions Calculator for SYD–LHR return, economy cabin. Mid-range ~3,500 kg CO₂e; ICAO gives CO₂ only (no radiative forcing).',
      result: '~3,500 kg CO₂e',
      note: 'Radiative forcing: aircraft also produce NOₓ, water vapour, and contrails with warming effects at altitude. A multiplier of ~2.7 is scientifically supported but excluded from most official reporting. Multiplier vs ChatGPT: 3,500 ÷ 0.000168 ≈ 21 million.',
    },
  },
  {
    label: 'Falcon 9 launch (SpaceX)',
    value: 233000,
    mult: '~1.4B queries',
    color: '#c8d8e8',
    proof: {
      primary: '~233 t CO₂e from propellant combustion per launch',
      quote:
        'The estimated amount of GHG (CO2) emissions generated during Falcon 9 and Falcon Heavy launches is compared to total global, U.S., CCAFS, and KSC GHG emissions in Table 4-4 below.',
      source: 'FAA: SpaceX Falcon Program Final Environmental Assessment and FONSI (2019)',
      sourceUrl:
        'https://www.faa.gov/sites/faa.gov/files/space/environmental/nepa_docs/SpaceX_Falcon_Program_Final_EA_and_FONSI.pdf',
      source2: 'FAA EA Table 4-4 (same document)',
      sourceUrl2:
        'https://www.faa.gov/sites/faa.gov/files/space/environmental/nepa_docs/SpaceX_Falcon_Program_Final_EA_and_FONSI.pdf',
      quote2: 'Table 4-4. Estimated Carbon Dioxide (CO2) Emissions Comparison',
      calc: 'Table 4-4: 60 Falcon 9 launches = 23,226 metric tons CO₂e per year (~387 t/launch in EA). Chart uses propellant-only estimate: ~73,600 kg RP-1 × 3.16 kg CO₂/kg ≈ 233 t CO₂e. Excludes black carbon, N₂O, and manufacturing.',
      result: '~233 t CO₂e per launch (propellant combustion)',
      note: 'SpaceX launched Falcon 9 more than 90 times in 2024, roughly one every four days. Black carbon from rocket exhaust has outsized high-altitude warming effects not captured in the CO₂-only figure. Multiplier vs ChatGPT: 233,000 ÷ 0.000168 ≈ 1.4 billion.',
    },
  },
  {
    label: 'Wikipedia servers, 1 year',
    value: 1073000,
    mult: '~6.4B queries',
    color: '#a8b8d0',
    proof: {
      primary: '~1,073 t CO₂e per year from data centre electricity (2021, location-based)',
      quote:
        'In 2021, the servers used 358.8 kW (kilowatts), summing up to about 3.143 GW h (gigawatt hours) of electrical energy per year. The total carbon footprint of the servers was 1,073 metric tons CO2-eq in 2021.',
      source: 'Meta-Wiki: Wikimedia servers (Energy use section)',
      sourceUrl: 'https://meta.wikimedia.org/wiki/Wikimedia_servers',
      calc: '3,143,000 kWh/year (2021, meta.wikimedia.org). Location-based footprint: 1,073 t CO₂e (same source). Chart uses 1,073 t CO₂e for consistency with quoted footprint.',
      result: '~1,073 t CO₂e/year',
      note: 'Wikimedia Foundation uses renewable energy certificates for 100% of its electricity; market-based figure is near zero. Location-based shown for consistency. Wikipedia serves ~1.7 billion unique devices per month across 60+ million articles in 300+ languages. Equivalent GPT-4o queries: 1,073,000 t ÷ 0.000168 kg ≈ 6.4 billion queries.',
    },
  },
  {
    label: 'Producing 1 Hollywood blockbuster',
    value: 3370000,
    mult: '~20B queries',
    color: '#ffa726',
    proof: {
      primary: '~3,370 t CO₂e per tentpole film (budget above $70M)',
      quote:
        'The data from tentpole productions showed the average carbon footprint of 3,370 metric tons – or about 33 metric tons per shooting day.',
      source:
        'Sustainable Production Alliance (SPA) 2021 — Carbon Footprint Study, based on 24 large productions',
      sourceUrl:
        'https://greenproductionguide.com/wp-content/uploads/2021/04/SPA-Carbon-Emissions-Report.pdf',
      calc: 'Direct from SPA lifecycle assessment. Travel and transport = ~65% of footprint; energy use = ~21%.',
      result: '~3,370 t CO₂e',
      note: 'BFI (UK) puts a comparable figure at ~2,840 t CO₂e for large-budget UK productions. A $30–70M mid-range production averages ~1,081 t CO₂e. Equivalent GPT-4o queries: 3,370,000 t ÷ 0.000168 kg ≈ 20 billion queries.',
    },
  },
  {
    label: 'Training Llama 3.1 405B (Meta, 2024)',
    value: 11390000,
    mult: '~68B queries',
    color: '#79c0ff',
    proof: {
      primary: '27.5 GWh training energy; 11,390 t CO₂e location-based',
      quote:
        'Estimated total location-based greenhouse gas emissions were 11,390 tons CO2eq for training. Since 2020, Meta has maintained net zero greenhouse gas emissions in its global operations and matched 100% of its electricity use with renewable energy, therefore the total market-based greenhouse gas emissions for training were 0 tons CO2eq.',
      source: 'Meta AI: Llama 3.1 Model Card (2024)',
      sourceUrl:
        'https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md',
      calc: '27.5 GWh × ~0.414 kg CO₂/kWh (US grid intensity, 2024) = 11,390 t CO₂e. Meta reports location-based emissions of 11,390 t CO₂eq and market-based emissions of 0 t CO₂eq (100% renewable energy matching).',
      result: '11,390 t CO₂e (location-based) / 0 t CO₂e (market-based with renewables)',
      note: "The chart uses location-based emissions for consistency: this is what training would emit on the average grid. Meta's own reported figure is 0 because they purchase renewable energy certificates. GPT-4o, Claude, and Gemini have not published training emissions. Equivalent GPT-4o queries: 11,390,000 t ÷ 0.000168 kg ≈ 68 billion queries.",
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
        'At the end of the 2024 season, we are more than halfway to achieving this, reporting a 26% reduction (including SAFc) in our absolute carbon emissions compared to 2018, with the footprint for the sport now standing at 168,720 tCO2e, down from 228,793 tCO²e in 2018.',
      source: 'Formula 1 Sustainability Update (August 2025)',
      sourceUrl:
        'https://corp.formula1.com/wp-content/uploads/2025/08/F1-Sustainability-Update.pdf',
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
        'The transport operators and logistics companies below are those required to report their emissions under the NGER Act that are listed in the emissions and energy data for 2018-19.',
      source:
        'Climateworks Centre (2020): Net Zero Momentum Tracker — Transport Sector Report, citing Clean Energy Regulator NGER data 2018–19',
      sourceUrl:
        'https://www.climateworkscentre.org/wp-content/uploads/2020/06/Net-Zero-Tracker-Transportation-Sector-Report-June-2020.pdf',
      source2: 'NGER scope 1+2 emissions total (tCO2e), Sydney Trains, 2018–19 data',
      quote2: '545,749 Sydney Trains',
      sourceUrl2:
        'https://www.climateworkscentre.org/wp-content/uploads/2020/06/Net-Zero-Tracker-Transportation-Sector-Report-June-2020.pdf',
      calc: '~874 GWh/yr electricity × ~0.63 kg CO₂/kWh (NSW grid pre-2021) ≈ 550,000 t CO₂e. NGER-reported scope 1+2 total for Sydney Trains: 545,749 tCO2e (2018–19, Climateworks table).',
      result: '~550,000 t CO₂e',
      note: 'Sydney Trains switched to 100% renewable electricity in 2021, four years ahead of schedule. The pre-renewable figure is used to show the actual cost of running a city rail network. Current electricity emissions are near zero. Multiplier vs Llama 3.1: 550,000 ÷ 11,390 ≈ 48.',
    },
  },
  {
    label: 'All iPhones manufactured in 2024',
    value: 14152000000,
    mult: '~×1,200 Llama',
    color: '#8b949e',
    proof: {
      primary: '~14.2 Mt CO₂e',
      quote:
        "We've calculated the product carbon footprint for the following configurations. iPhone 16 256GB: 61 kg CO2e.",
      source:
        'Apple Product Environmental Report (iPhone 16, Sept 2024); IDC Worldwide Quarterly Mobile Phone Tracker (Jan 2025)',
      sourceUrl:
        'https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf',
      source2: 'IDC Worldwide Quarterly Mobile Phone Tracker (Jan 2025, via Business Wire)',
      quote2:
        'Top 5 Companies, Worldwide Smartphone Shipments, Market Share, and Year-Over-Year Growth, CY 2024 (Preliminary results, shipments in millions of units).',
      sourceUrl2:
        'https://www.businesswire.com/news/home/20250113500219/en/Worldwide-Smartphone-Shipments-Grew-6.4-in-2024-Despite-Macro-Challenges-according-to-IDC',
      calc: '232.1M iPhones shipped in 2024 (IDC CY 2024 table, Apple row) × 61 kg CO₂e (iPhone 16 256GB, Apple PER) = ~14.2 Mt CO₂e',
      result: '~14,152,000 t CO₂e (14.2 Mt)',
      note: "Derived: 232M devices × 61 kg Apple-reported footprint. Production is 80% of each device's total. Covers product footprint only, not usage or end-of-life. Multiplier vs Llama 3.1: 14,152,000 ÷ 11,390 ≈ 1,200.",
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
        'In total, electricity consumption from data centres is estimated to amount to around 415 terawatt hours (TWh), or about 1.5% of global electricity consumption in 2024. In the Base Case, electricity consumption from data centres rises to around 945 TWh by 2030, more than doubling from the 2024 level.',
      source: 'IEA: Energy and AI (2024)',
      sourceUrl: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
      calc: '415 TWh × 0.4 kg CO₂/kWh = 166,000,000 t CO₂e. Covers all workloads: AI, streaming, cloud storage, web, enterprise, and everything else.',
      result: '~166 Mt CO₂e (2024)',
      note: 'Data centres accounted for ~1.5% of global electricity in 2024, projected to roughly double by 2030. The US accounts for 45%, China 25%, Europe 15%. Multiplier vs Llama 3.1 training: 166,000,000 ÷ 11,390 ≈ 14,600.',
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
        'In 2024, flaring surged by 3 billion cubic meters (bcm) to 151bcm, the highest level since 2007. 389 million tonnes of carbon dioxide equivalent (MMtCO2e) emissions, including 46 MMtCO2e in the form of unburnt methane, were released by flares in 2024.',
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
      primary: '~942 Mt CO₂ from global aviation, 2024 (direct CO₂ only)',
      quote:
        'In 2024, gross emissions totaled 942 million tonnes (Mt) of CO2, up from 882 Mt in 2023, but showing a more modest gain from the 914 Mt emitted in 2019.',
      source: "IATA: 'Aviation Emissions Efficiency Gains vs. Rising Totals' 2024",
      sourceUrl:
        'https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals',
      calc: 'IATA 2024 figure: 942 Mt CO₂ direct from jet fuel combustion. CO₂-only; no radiative forcing multiplier applied.',
      result: '~942 Mt CO₂ (direct, no radiative forcing)',
      note: "YoY increase 2023–2024: 60 Mt (+6.8%), recovery from 2019 baseline (914 Mt). Radiative forcing: aviation's full warming effect is roughly 2–3× the direct CO₂ figure. Multiplier vs Llama 3.1 training: 942,000 ÷ 11.39 ≈ 83,000.",
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
        'The fashion industry is the second-largest industrial polluter, accounting for 10% of global pollution, ranking higher than emissions from air travel! When factoring in the entire lifecycle of a garment, from manufacturing to transportation to, ultimately, ending up in landfill, in total, 1.2 billion tonnes of carbon emissions are released by the fashion industry every year.',
      source: "Carbon Literacy Project: Fast Fashion's Carbon Footprint",
      sourceUrl: 'https://carbonliteracy.com/fast-fashions-carbon-footprint/',
      calc: 'Aggregated lifecycle estimate covering cotton farming, synthetic fibre production, textile manufacturing, garment assembly, transport, retail, laundering, and disposal.',
      result: '~1,200 Mt CO₂e (range: 800–1,800 Mt across studies)',
      note: 'High uncertainty reflects difficulty in measuring global supply chains. Synthetic (polyester) garments require petroleum for production; cotton is land and water-intensive. The industry produces roughly 92 million tonnes of textile waste per year. Multiplier vs Llama 3.1 training: 1,200,000 ÷ 11.39 ≈ 105,000.',
    },
  },
  {
    label: 'Global food waste, 1 year',
    value: 9300000000000,
    mult: '~×817,000 Llama',
    color: '#86efac',
    proof: {
      primary: '~9,300 Mt CO₂e from food lost and wasted across the full supply chain (2017 study)',
      quote:
        'It finds that, in 2017, global food waste resulted in 9.3bn tonnes of CO2-equivalent (GtCO2e) emissions – roughly the same as the total combined emissions of the US and the EU that same year.',
      source: 'Carbon Brief: Food waste makes up half of global food system emissions (2021)',
      sourceUrl:
        'https://www.carbonbrief.org/food-waste-makes-up-half-of-global-food-system-emissions/',
      calc: 'Full supply chain assessment: from harvest through to landfill and compost. Includes agricultural production, processing, transport, retail, and end-of-life emissions.',
      result: '~9,300 Mt CO₂e (2017 data)',
      note: 'Study assessed all food loss and waste along every link in the supply chain. About 10× global aviation. Multiplier vs Llama 3.1 training: 9,300,000 ÷ 11.39 ≈ 817,000.',
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
        'Beef contribute 2.9 gigatonnes CO2-eq, or 41 percent, and cattle milk 1.4 gigatonnes CO2-eq, or 20 percent, of total sector emissions.',
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
    mult: '~×54M',
    color: '#c09060',
    proof: {
      primary: '~9 t CO₂e for the manufacturing phase of a mid-size petrol car',
      quote: 'Gasoline ICEV 7.2 t CO2 eq.',
      source:
        'ICCT (2021): Global Comparison of the Life-Cycle Greenhouse Gas Emissions of Passenger Cars',
      sourceUrl:
        'https://theicct.org/wp-content/uploads/2021/07/Global-Vehicle-LCA-White-Paper-A4-revised-v2.pdf',
      calc: 'VW-published LCA for Golf 8: 9.3 t CO₂e manufacturing phase. ICCT average for a new ICE passenger car: ~8.4 t CO₂e. Mid-point used.',
      result: '~9,000 kg CO₂e',
      note: "Manufacturing only. A car's lifetime fuel emissions are typically 5–10× the production footprint. Electric vehicle manufacturing is similar (~10–14 t CO₂e) but lifetime emissions are much lower. Multiplier: 9,000 ÷ 0.000168 ≈ 53,600,000.",
    },
  },
  {
    label: 'Manufacturing a new EV',
    value: 9200,
    mult: '~×55M',
    color: '#70b8d8',
    proof: {
      primary:
        '~9.2 t CO₂e manufacturing (Europe average); battery pack adds around 2.7 t over an equivalent petrol car',
      quote: 'BEV (without battery) 6.5 t CO2 eq.',
      source:
        'ICCT (2021): Global Comparison of the Life-Cycle Greenhouse Gas Emissions of Passenger Cars',
      sourceUrl:
        'https://theicct.org/wp-content/uploads/2021/07/Global-Vehicle-LCA-White-Paper-A4-revised-v2.pdf',
      source2: 'ICCT (2021): battery production emissions, lower medium BEV segment (Table 2.4)',
      quote2:
        'Table 2.4. Battery capacity and GHG emissions of the production of batteries for BEVs and PHEVs registered in Europe, the United States, China, and India in 2021.',
      sourceUrl2:
        'https://theicct.org/wp-content/uploads/2021/07/Global-Vehicle-LCA-White-Paper-A4-revised-v2.pdf',
      calc: 'ICCT Table 2.4 (Europe, lower medium segment): battery production = 2.7 t CO₂e for a 45.0 kWh pack. Table A.1: body/chassis (BEV without battery) = 6.5 t CO₂e. Total: 6.5 + 2.7 = 9.2 t CO₂e.',
      result: '~9,200 kg CO₂e (9.2 t)',
      note: 'Manufacturing an EV costs a couple of tonnes more than an equivalent petrol car (9 t CO₂e), mostly from the battery. An earlier version of this figure used 9.7 t for the battery alone, which misread a PHEV battery-capacity column (kWh) in Table 2.4 as a BEV emissions figure (t CO₂e); the real BEV battery figure for that row is 2.7 t CO₂e. Across the four regions ICCT modelled, BEV battery production ranges from 1.6–5.5 t CO₂e depending on pack size and local grid. Lifetime emissions are still lower as electricity grids decarbonise, even though production carbon is higher. Multiplier vs ChatGPT: 9,200 ÷ 0.000168 ≈ 55 million.',
    },
  },
];
