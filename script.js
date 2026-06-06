// ════════════════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════════════════

const TREEMAP_DATA = {
  name: "root",
  children: [
    {
      name: "Agriculture & Land Use",
      color: "#f78166",
      children: [
        {
          name: "Beef cattle",
          value: 2900,
          detail: "The single largest animal product contributor. Emissions come from methane (enteric fermentation), feed production, and land cleared for grazing. Per kg of protein produced, beef is around 20× more emissions-intensive than chicken.",
          source: "FAO: Tackling Climate Change Through Livestock",
        },
        {
          name: "Dairy cattle",
          value: 1700,
          detail: "Milk, cheese, butter and yoghurt. Dairy cattle emit methane similarly to beef cattle. Some emissions are shared with beef when dairy cows are slaughtered.",
          source: "FAO: Tackling Climate Change Through Livestock",
        },
        {
          name: "Food Waste",
          value: 3300,
          detail: "8–10% of global GHG. Around 3–4× aviation emissions. One-third of all food produced is wasted, and all the energy to grow, refrigerate, and transport it goes with it.",
          source: "UNFCCC",
        },
        {
          name: "Pigs",
          value: 640,
          detail: "Pork and pork products. Lower methane than ruminants (pigs don't ferment in the same way), but feed production and manure management contribute significant emissions.",
          source: "FAO: Tackling Climate Change Through Livestock",
        },
        {
          name: "Poultry",
          value: 570,
          detail: "Chicken, turkey, eggs. The least emissions-intensive of the major meats, roughly 6–7 kg CO₂e per kg compared to ~99 kg CO₂e per kg of beef.",
          source: "FAO: Tackling Climate Change Through Livestock",
        },
        {
          name: "Sheep & goats",
          value: 460,
          detail: "Like cattle, sheep and goats are ruminants and produce significant methane. Lamb has a high emissions intensity per kg, similar to beef.",
          source: "FAO: Tackling Climate Change Through Livestock",
        },
        {
          name: "Other livestock",
          value: 830,
          detail: "Buffalo, horses, aquaculture, and other animal products. Also includes emissions from manure management across all categories.",
          source: "FAO: Tackling Climate Change Through Livestock",
        },
      ],
    },
    {
      name: "Industry",
      color: "#ffa657",
      children: [
        {
          name: "Mining & Metals",
          value: 4500,
          detail: "11% of global GHG in 2024. Steel, aluminium, and coal mining = 93% of sector. Asia = 80% of emissions.",
          source: "IndexBox / Semafor 2026",
        },
        {
          name: "Cement & Concrete",
          value: 1470,
          detail: "~8% of global CO₂. Emissions tripled 1990–2020. Half comes from a chemical process that can't be avoided by switching fuels.",
          source: "Statista / WEF 2024",
        },
      ],
    },
    {
      name: "Consumer & Transport",
      color: "#d2a8ff",
      children: [
        {
          name: "Fast Fashion",
          value: 1200,
          detail: "8–10% of global CO₂. More than aviation and shipping combined. Projected 26% of global emissions by 2050 unchanged.",
          source: "Earth.org / Climateq",
        },
        {
          name: "Aviation",
          value: 942,
          detail: "942 Mt CO₂ gross in 2024. Grew ~8% year-on-year. International flights = ~60% of total.",
          source: "IATA 2024",
        },
        {
          name: "Standby / Vampire Power",
          value: 370,
          detail: "~1% of global CO₂ and ~5% of global electricity (different metrics; electricity is lower-carbon on average). Equivalent to 15 million petrol cars running continuously just to power devices that appear to be off.",
          source: "IEA",
        },
      ],
    },
    {
      name: "Digital Technology",
      color: "#56d364",
      children: [
        {
          name: "Data Centres",
          value: 166,
          detail: "Every website, streaming service, social media feed, cloud backup, email, and online game runs on servers in data centres. 415 TWh globally in 2024, ~1.5% of all electricity. US + China = 69% of total. Projected to double by 2030.",
          source: "IEA Energy and AI 2024",
          note: "Converted: 415 TWh × 0.4 kg CO₂/kWh",
        },
        {
          name: "Video Streaming",
          value: 100,
          detail: "Highly contested figure. Conservative estimate: ~250 TWh combined (Netflix external estimate ~94 TWh; YouTube lower-end estimate ~150 TWh). Video = 60–70% of all internet traffic. The Shift Project's widely-reported 2019 figures were overstated by ~30–50× and corrected by IEA and Carbon Brief.",
          source: "IEA / Carbon Brief",
          note: "Converted: ~250 TWh × 0.4 kg CO₂/kWh = ~100 Mt CO₂e. High uncertainty.",
        },
        {
          name: "Bitcoin Mining",
          value: 40,
          detail: "138 TWh / 39.8 Mt CO₂e per Cambridge CBECI 2025 Digital Mining Industry Report.",
          source: "Cambridge CBECI 2025",
        },
        {
          name: "All AI Queries",
          value: 6,
          detail: "All generative AI queries globally in 2025: ChatGPT, image generation, code assistants, everything. Projected 347 TWh by 2030.",
          source: "IEA Energy and AI 2025",
          note: "Converted: 15 TWh × 0.4 kg CO₂/kWh",
          highlight: true,
        },
      ],
    },
  ],
};

const CSTEPS = [
  {
    label: "1 Google search", value: 0.000012, mult: "", color: "#58a6ff",
    proof: {
      primary:   "0.03 Wh per search",
      source:    "IEA (2024)",
      sourceUrl: "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
      calc:      "0.03 Wh × 0.4 kg CO₂/kWh ÷ 1,000",
      result:    "0.000012 kg CO₂e (0.012 g)",
      note:      "0.4 kg CO₂/kWh is the global average grid intensity used throughout this chart.",
    },
  },
  {
    label: "1 ChatGPT prompt (GPT-4o)", value: 0.00048, mult: "baseline", color: "#79c0ff",
    proof: {
      primary:   "1.2 Wh per text prompt (GPT-4o, median)",
      source:    "Chien et al. 2025 — 'Measuring the Energy and Carbon Intensity of AI Models' (arXiv:2505.09598) — direct measurement of GPT-4o",
      sourceUrl: "https://arxiv.org/abs/2505.09598",
      calc:      "1.2 Wh × 0.4 kg CO₂/kWh ÷ 1,000",
      result:  "0.00048 kg CO₂e (0.48 g)",
      note:    "Measured directly on GPT-4o. Shorter prompts use less; longer or reasoning-heavy queries use more. The IEA cites 2.9 Wh as a cross-service average including image generation; 1.2 Wh is the median for text-only GPT-4o queries. 0.4 kg CO₂/kWh is the global average grid intensity used throughout this chart.",
    },
  },
  {
    label: "AI image, 1 generation", value: 0.0012, mult: "×2.5", color: "#80cbc4",
    proof: {
      primary:   "~2–4 Wh per image (modern hardware)",
      source:    "Cañas et al. 2025 'The Hidden Cost of an Image' (arxiv 2506.17016) — measured 17 current models at 0.086–4.08 Wh per image (46× spread). Luccioni et al. 2023 measured 25 Wh on A100 GPUs; H100-era hardware is significantly more efficient.",
      sourceUrl: "https://arxiv.org/abs/2506.17016",
      calc:      "~0.003 kWh × 0.4 kg CO₂/kWh",
      result:    "~0.0012 kg CO₂e (~1.2 g)",
      note:      "Range across 17 models: 0.086–4.08 Wh, with U-Net models lower than Transformer-based ones. Figure uses ~3 Wh as a conservative estimate for commercial models at standard resolution. Very high uncertainty. Multiplier: 0.0012 ÷ 0.00048 = 2.5.",
    },
  },
  {
    label: "Charge a smartphone (daily)", value: 0.004, mult: "~×8", color: "#9cdcfe",
    proof: {
      primary:   "~10 Wh drawn from grid per daily charge",
      source:    "Apple iPhone 16 battery capacity: 13.8 Wh. Standard charger efficiency ~85%.",
      calc:      "13.8 Wh × 70% depth of discharge ÷ 85% charger efficiency = ~11 Wh. × 0.4 kg CO₂/kWh ÷ 1,000",
      result:    "~0.004 kg CO₂e (~4 g)",
      note:      "Charging only, does not include device manufacturing or cellular network energy. Multiplier: 0.004 ÷ 0.00048 ≈ 8.",
    },
  },
  {
    label: "Netflix, 1 hour", value: 0.005, mult: "×10", color: "#56d364",
    proof: {
      primary:   "~5 g CO₂e per hour (data centre + network, excluding viewing device)",
      source:    "IEA (2020) — total figure 36 g CO₂e/hr; device share ~86% per IEA breakdown (laptop). Data centre: ~0.6 g, network: ~4 g.",
      sourceUrl: "https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines",
      calc:    "IEA total 36 g CO₂e/hr. Device (laptop) accounts for ~31 g (~86%). Remaining data centre + CDN + ISP network: ~5 g. Device excluded to match the scope of the ChatGPT figure, which covers server energy only.",
      result:  "~5 g CO₂e (server+network scope)",
      note:    "The full-chain figure including your viewing device is 36 g CO₂e/hr, widely cited but not directly comparable to server-side AI figures. Multiplier: 0.005 ÷ 0.00048 ≈ 10.",
    },
  },
  {
    label: "Microwave popcorn, 3 min", value: 0.020, mult: "×42", color: "#4db6ac",
    proof: {
      primary: "~50 Wh (1 kW microwave for 3 minutes)",
      source:  "Standard microwave power draw 1–1.2 kW; popcorn typically 3 minutes",
      calc:    "1 kW × 3/60 hr = 0.05 kWh × 0.4 kg CO₂/kWh",
      result:  "~0.020 kg CO₂e (20 g)",
      note:    "Multiplier: 0.020 ÷ 0.00048 ≈ 42.",
    },
  },
  {
    label: "Boil a full kettle", value: 0.060, mult: "×125", color: "#7ee787",
    proof: {
      primary: "~0.15 kWh (2.4 kW kettle, full 1.7 L, ~3.5 minutes)",
      source:  "Standard electrical load data. 2.4 kW is typical for Australian and UK kettles.",
      calc:    "2.4 kW × 3.5/60 hr = 0.14 kWh, rounded. × 0.4 kg CO₂/kWh",
      result:  "~0.060 kg CO₂e (60 g)",
      note:    "Multiplier: 0.060 ÷ 0.00048 = 125.",
    },
  },
  {
    label: "Cloud photos, 1 day (1TB)", value: 0.060, mult: "~×125", color: "#f0a050",
    proof: {
      primary:   "~0.15 kWh (1TB stored for 1 day, storage only)",
      source:    "EcoFlow; Greenly. Mid-point of published range 40–70 kWh/TB/yr.",
      sourceUrl: "https://greenly.earth/en-gb/blog/industries/what-is-the-carbon-footprint-of-data-storage",
      calc:    "55 kWh/TB/yr ÷ 365 = ~0.15 kWh/day × 0.4 kg CO₂/kWh",
      result:  "~0.060 kg CO₂e (60 g)",
      note:    "Storage energy only, excludes upload and download. 1 TB holds ~250,000 average smartphone photos. Multiplier: 0.060 ÷ 0.00048 = 125.",
    },
  },
  {
    label: "Bottled water, 500ml", value: 0.100, mult: "~×208", color: "#7dd3fc",
    proof: {
      primary: "~100g CO₂e for a locally sourced 500ml PET bottle",
      source:  "Multiple lifecycle assessment studies (WRAP UK; peer-reviewed LCAs for PET beverage containers)",
      calc:    "PET bottle production: ~50g CO₂e. Water treatment: ~1g. Transport (local, ~100km): ~15g. Chilling at retail: ~10g. Total: ~80–110g.",
      result:  "~100g CO₂e (0.1 kg)",
      note:    "Imported bottles (e.g. shipped internationally) add significantly more transport emissions. The PET bottle itself is the dominant cost: petroleum-derived polymer production is energy-intensive. Multiplier: 0.1 ÷ 0.00048 ≈ 208.",
    },
  },
  {
    label: "AI video, 10 seconds", value: 0.374, mult: "~×780", color: "#ffa726",
    proof: {
      primary:   "~936 Wh per 10-second Sora video (H100 analyst estimate)",
      source:    "SemiAnalysis / Forbes (2024) — analyst estimate based on ~40 minutes of H100 compute per 10-second video, reported by Deepak Mathivanan and AJ Kourabi",
      sourceUrl: "https://reclaimedsystems.substack.com/p/every-sora-ai-video-burns-1-kilowatt",
      calc:      "40 min × 1.3 kW (H100 GPU + cooling overhead) = 0.867–0.936 kWh × 0.4 kg CO₂/kWh",
      result:    "~0.374 kg CO₂e (~374 g)",
      note:      "Sora-class models only. Smaller open-source models use less. This is an analyst estimate derived from compute time, not a direct measurement. OpenAI has published no energy figures for Sora. Multiplier: 0.374 ÷ 0.00048 ≈ 779.",
    },
  },
  {
    label: "Hot shower, 10 min", value: 0.600, mult: "×1,250", color: "#ffa657",
    proof: {
      primary: "1.5 kWh (9 kW instant electric shower, 10 minutes)",
      source:  "Standard household energy data — 9 kW is typical for an Australian/UK electric shower",
      calc:    "9 kW × 10/60 hr = 1.5 kWh × 0.4 kg CO₂/kWh",
      result:  "0.600 kg CO₂e (600 g)",
      note:    "Tank water heaters and gas systems use less. Gas is roughly half. Multiplier: 0.600 ÷ 0.00048 = 1,250.",
    },
  },
  {
    label: "1 kg of raw rice", value: 1.0, mult: "~×2,100", color: "#88c070",
    proof: {
      primary:   "~1 kg CO₂e per kg of raw rice (farm-gate, global average)",
      source:    "FAO: Greenhouse Gas Emissions from Agrifood Systems 2022",
      sourceUrl: "https://openknowledge.fao.org/server/api/core/bitstreams/121cc613-3d0f-431c-b083-cc2031dd8826/content",
      calc:      "FAO farm-gate emission intensity: 1 kg CO₂e/kg rice. Dominated by methane from flooded paddies (50–80% of total emissions).",
      result:    "~1 kg CO₂e (1,000 g)",
      note:      "Excludes land-use change. Higher estimates (2.7–4 kg CO₂e/kg) include supply chain and land conversion. 1 kg of beef (99 kg CO₂e) is about 100× more emissions-intensive than the same weight of rice. Multiplier vs ChatGPT: 1.0 ÷ 0.00048 ≈ 2,100.",
    },
  },
  {
    label: "Drive 10 km, petrol car", value: 1.500, mult: "×3,100", color: "#ff8a65",
    proof: {
      primary: "~150 g CO₂/km (average petrol car)",
      source:  "Australian National Transport Commission (NTC) emission factors; similar to UK DEFRA figures for average new petrol passenger car.",
      calc:    "10 km × 0.150 kg CO₂/km",
      result:  "~1.500 kg CO₂e",
      note:    "Based on average petrol car. SUVs and older vehicles emit more (~180–220 g/km); hybrids less. Does not include vehicle manufacturing. Multiplier: 1.500 ÷ 0.00048 ≈ 3,100.",
    },
  },
  {
    label: "Cotton t-shirt (200g)", value: 7, mult: "~×15,000", color: "#d4a76a",
    proof: {
      primary: "~7 kg CO₂e for a standard 200g cotton t-shirt",
      source:  "Carbon Trust 'Product Carbon Footprinting' guidelines; peer-reviewed LCAs for cotton apparel",
      calc:    "Cotton farming: ~2.5 kg CO₂e (fertiliser, irrigation). Spinning and weaving: ~2 kg CO₂e (often coal-powered mills). Dyeing and finishing: ~1.5 kg CO₂e. Cut, sew, transport: ~1 kg CO₂e.",
      result:  "~7 kg CO₂e (range: 5–10 kg across studies)",
      note:    "Organic cotton reduces fertiliser emissions but yield per hectare is lower. A polyester t-shirt typically has lower production emissions but is petroleum-derived. Multiplier: 7 ÷ 0.00048 ≈ 14,600.",
    },
  },
  {
    label: "1 pair of fast fashion jeans", value: 20, mult: "×42,000", color: "#f472b6",
    proof: {
      primary:   "~20 kg CO₂e per pair",
      source:    "Li et al. 2024 — 'The carbon footprint of fast fashion consumption: a case study of jeans' (Science of the Total Environment)",
      sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0048969724016498",
      calc:      "Direct lifecycle assessment. Covers cotton farming (~40% of total), dyeing, cut & sew, and transport.",
      result:    "~20 kg CO₂e",
      note:      "Range across studies: 10–30 kg CO₂e/pair depending on production methods. Cotton farming and textile dyeing are the largest contributors. Multiplier: 20 ÷ 0.00048 ≈ 42,000.",
    },
  },
  {
    label: "Manufacturing 1 smartphone", value: 65, mult: "×135,000", color: "#c8a2c8",
    proof: {
      primary:   "65 kg CO₂e per device (iPhone 16)",
      source:    "Apple Product Environmental Report (iPhone 16, Sept 2024)",
      sourceUrl: "https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf",
      calc:      "Direct from Apple PER. Production phase = 80% of 81 kg CO₂e total lifecycle; Apple reports 65 kg CO₂e for manufacturing.",
      result:    "~65 kg CO₂e",
      note:      "Manufacturing is the dominant cost; using the phone for its full lifetime adds ~13 kg CO₂e (Apple data). Multiplier: 65 ÷ 0.00048 ≈ 135,000.",
    },
  },
  {
    label: "Beef, 1 kg produced", value: 99.48, mult: "~×207,000", color: "#f78166",
    proof: {
      primary:   "99.48 kg CO₂e per kg of beef (direct figure)",
      source:    "FAO: Tackling Climate Change Through Livestock (2013)",
      sourceUrl: "https://www.fao.org/family-farming/detail/en/c/1634679/",
      calc:    "Direct figure, average across beef herd. Covers methane (enteric fermentation), feed production, land-use change, and manure.",
      result:  "99.48 kg CO₂e",
      note:    "Lamb is similarly high (~39 kg CO₂e/kg). Pork ~7 kg. Chicken ~6 kg. Multiplier: 99.48 ÷ 0.00048 ≈ 207,000.",
    },
  },
  {
    label: "Running a fridge, 1 year", value: 200, mult: "~×417K", color: "#a0c4f0",
    proof: {
      primary:   "~500 kWh/year for a typical household fridge",
      source:    "US DOE / ENERGY STAR appliance data; Australian Energy Council appliance data",
      calc:      "500 kWh/year × 0.4 kg CO₂/kWh global average",
      result:    "~200 kg CO₂e/year",
      note:      "Range: 400–800 kWh/year depending on size, age, and model. An ENERGY STAR certified fridge uses ~400 kWh/year; a large side-by-side with ice maker can reach 700–800 kWh. A chest freezer uses only ~215 kWh/year, less than a fridge despite running colder, because cold air doesn't fall out when opened. Multiplier vs ChatGPT: 200 ÷ 0.00048 ≈ 417,000.",
    },
  },
  {
    label: "1 Bitcoin transaction", value: 450, mult: "~×938K", color: "#f5a623",
    proof: {
      primary:   "~450 kg CO₂e per on-chain Bitcoin transaction",
      source:    "Cambridge Bitcoin Electricity Consumption Index (CBECI), 2024",
      sourceUrl: "https://ccaf.io/cbnsi/cbeci",
      calc:      "Bitcoin network: ~130 TWh/year (CBECI 2024 estimate) × 0.4 kg CO₂/kWh = ~52 Mt CO₂e/year. Annual on-chain transactions: ~115 million. 52,000,000 t ÷ 115,000,000 = ~452 kg CO₂e per transaction.",
      result:    "~450 kg CO₂e (0.45 t)",
      note:      "Bitcoin mining uses an estimated 58–66% low-carbon energy (CCAF 2024), so actual per-transaction CO₂ may be lower than the global grid average implies. Lightning Network transactions are off-chain and use negligible additional energy. A Visa transaction costs ~3 g CO₂e; Bitcoin is roughly 150,000× more carbon-intensive per payment. Multiplier vs ChatGPT: 450 ÷ 0.00048 ≈ 938,000.",
    },
  },
  {
    label: "5m³ of concrete (cement truck load)", value: 1650, mult: "~×3.4M", color: "#94a3b8",
    proof: {
      primary:   "~1,650 kg CO₂e for 5m³ of standard Portland cement concrete",
      source:    "Academic literature consensus: 200–500 kg CO₂e/m³ for typical mixes; 323–332 kg/m³ for standard Portland cement concrete (multiple LCA studies)",
      sourceUrl: "https://ecochain.com/blog/concrete-carbon-footprint/",
      calc:      "5m³ × 330 kg CO₂e/m³ = 1,650 kg CO₂e",
      result:    "~1,650 kg CO₂e (~1.65 t)",
      note:      "About half of cement's CO₂ comes from calcination (the chemical breakdown of limestone), which cannot be eliminated by switching to clean electricity. A ready-mix truck typically carries 6–9m³. Multiplier: 1,650 ÷ 0.00048 ≈ 3,400,000.",
    },
  },
  {
    label: "Flight: SYD to London", value: 3500, mult: "~×7.3M", color: "#ef5350",
    proof: {
      primary:   "~3,500 kg CO₂e (return economy, estimate)",
      source:    "Estimated from ATAG/IATA per-passenger emission factors.",
      sourceUrl: "https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals",
      calc:    "Estimate. Range across published calculators: ~2,300 kg CO₂ only (ICAO) to ~5,800 kg CO₂e with full radiative forcing (×2.7). 3,500 kg is a mid-range figure.",
      result:  "~3,500 kg CO₂e",
      note:    "Radiative forcing: aircraft also produce NOₓ, water vapour, and contrails with warming effects at altitude. A multiplier of ~2.7 is scientifically supported but excluded from most official reporting. Multiplier vs ChatGPT: 3,500 ÷ 0.00048 ≈ 7.3 million.",
    },
  },
  {
    label: "Manufacturing a new car", value: 9000, mult: "~×19M", color: "#c09060",
    proof: {
      primary:   "~9 t CO₂e for the manufacturing phase of a mid-size petrol car",
      source:    "Volkswagen Golf 8 Product LCA (2021); ICCT 'Comparison of lifecycle greenhouse gas emissions of various passenger vehicles' (2021)",
      calc:      "VW-published LCA for Golf 8: 9.3 t CO₂e manufacturing phase. ICCT average for a new ICE passenger car: ~8.4 t CO₂e. Mid-point used.",
      result:    "~9,000 kg CO₂e",
      note:      "Manufacturing only. A car's lifetime fuel emissions are typically 5–10× the production footprint. Electric vehicle manufacturing is similar (~10–14 t CO₂e) but lifetime emissions are much lower. Multiplier: 9,000 ÷ 0.00048 ≈ 18,750,000.",
    },
  },
  {
    label: "Manufacturing a new EV", value: 15000, mult: "~×31M", color: "#70b8d8",
    proof: {
      primary:   "~14–17 t CO₂e manufacturing; battery pack accounts for most of the difference vs a petrol car",
      source:    "Volkswagen ID.3 Product Sustainability Assessment (2021); ICCT 'Lifecycle GHG Emissions of EVs' (2021)",
      sourceUrl: "https://theicct.org/publication/a-global-comparison-of-the-life-cycle-greenhouse-gas-emissions-of-combustion-engine-and-electric-passenger-cars/",
      calc:      "VW ID.3 published LCA: 14.6–16.4 t CO₂e manufacturing phase, depending on battery source. Battery alone: ~8–10 t CO₂e. Body/chassis: ~6 t CO₂e, similar to an ICE car (9 t CO₂e total).",
      result:    "~15,000 kg CO₂e (15 t)",
      note:      "Manufacturing an EV costs about 60–70% more carbon than an equivalent petrol car (9 t CO₂e); the battery is the difference. Lifetime emissions are lower as electricity grids decarbonise, but the production carbon is higher. The break-even point depends on where and how the car is charged. Multiplier vs ChatGPT: 15,000 ÷ 0.00048 ≈ 31 million.",
    },
  },
  // Training-scale one-off events for comparison
  {
    label: "Falcon 9 launch (SpaceX)", value: 233000, mult: "~486M queries", color: "#c8d8e8",
    proof: {
      primary:   "~233 t CO₂e from propellant combustion per launch",
      source:    "SpaceX Falcon 9 User's Guide (propellant masses); IPCC AR6 CO₂ emission factor for kerosene",
      sourceUrl: "https://www.spacex.com/media/falcon-users-guide.pdf",
      calc:      "First stage: ~65,000 kg RP-1. Second stage: ~8,600 kg RP-1. Total: ~73,600 kg × 3.16 kg CO₂/kg = ~233 t CO₂e. Excludes black carbon, N₂O, and manufacturing. First stage is reused across 10–20 flights, amortising hardware carbon.",
      result:    "~233 t CO₂e per launch",
      note:      "SpaceX launched Falcon 9 more than 90 times in 2024, roughly one every four days. Black carbon from rocket exhaust has outsized high-altitude warming effects not captured in the CO₂-only figure. SpaceX has not published lifecycle figures. Multiplier vs ChatGPT: 233,000 ÷ 0.00048 ≈ 486 million.",
    },
  },
  {
    label: "Wikipedia servers, 1 year", value: 1680000, mult: "~3.5B queries", color: "#a8b8d0",
    proof: {
      primary:   "~1,680 t CO₂e per year from data center electricity",
      source:    "Wikimedia Foundation Sustainability Data (FY 2022–23)",
      sourceUrl: "https://wikimediafoundation.org/about/wmf-reports/wmf-annual-report/",
      calc:      "Wikimedia data centers consumed ~4.2 GWh in FY 2022–23. 4,200,000 kWh × 0.4 kg CO₂/kWh = ~1,680 t CO₂e/year (location-based).",
      result:    "~1,680 t CO₂e/year",
      note:      "Wikimedia Foundation uses renewable energy certificates for 100% of its electricity; market-based figure is near zero. Location-based shown for consistency. Wikipedia serves ~1.7 billion unique devices per month across 60+ million articles in 300+ languages. Equivalent GPT-4o queries: 1,680,000 t ÷ 0.00048 kg ≈ 3.5 billion queries.",
    },
  },
  {
    label: "Producing 1 Hollywood blockbuster", value: 3370000, mult: "~7B queries", color: "#ffa726",
    proof: {
      primary:   "~3,370 t CO₂e per tentpole film (budget above $70M)",
      source:    "Sustainable Production Alliance (SPA) 2021 — Carbon Footprint Study, based on 24 large productions",
      calc:      "Direct from SPA lifecycle assessment. Travel and transport = ~65% of footprint; energy use = ~21%.",
      result:    "~3,370 t CO₂e",
      note:      "BFI (UK) puts a comparable figure at ~2,840 t CO₂e for large-budget UK productions. A $30–70M mid-range production averages ~1,081 t CO₂e. Equivalent GPT-4o queries: 3,370,000 t ÷ 0.00048 kg ≈ 7 billion queries.",
    },
  },
  {
    label: "Training Llama 3.1 405B (Meta, 2024)", value: 11390000, mult: "~24B queries", color: "#79c0ff",
    proof: {
      primary:   "27.5 GWh training energy; 11,390 t CO₂e location-based",
      source:    "Meta AI: Llama 3.1 Model Card (2024)",
      sourceUrl: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md",
      calc:      "27.5 GWh × ~0.414 kg CO₂/kWh (US grid intensity, 2024) = 11,390 t CO₂e. Meta reports location-based emissions of 11,390 t CO₂eq and market-based emissions of 0 t CO₂eq (100% renewable energy matching).",
      result:    "11,390 t CO₂e (location-based) / 0 t CO₂e (market-based with renewables)",
      note:      "The chart uses location-based emissions for consistency: this is what training would emit on the average grid. Meta's own reported figure is 0 because they purchase renewable energy certificates. GPT-4o, Claude, and Gemini have not published training emissions. Equivalent GPT-4o queries: 11,390,000 t ÷ 0.00048 kg ≈ 24 billion queries.",
    },
  },
  {
    label: "Formula 1 season 2024 (operational)", value: 168720000, mult: "~×15 Llama", color: "#f97316",
    proof: {
      primary:   "168,720 t CO₂e for the 2024 F1 season (operational footprint)",
      source:    "Formula 1: 'Formula 1 on track to be Net Zero by 2030 with 26% carbon footprint reduction' (Dec 2024)",
      sourceUrl: "https://corp.formula1.com/formula-1-on-track-to-be-net-zero-carbon-by-2030-with-26-reduction-in-carbon-footprint/",
      calc:      "Official figure from Formula 1's own sustainability report. Covers 24 race weekends plus logistics (international freight, team and personnel air travel), factory energy, and event operations.",
      result:    "168,720 t CO₂e (2024 season, operational)",
      note:      "Excludes spectator travel, estimated separately at ~655,000 t CO₂e. F1's operational footprint fell 26% from 2018 to 2024 through logistics optimisation. Multiplier vs Llama 3.1: 168,720 ÷ 11,390 ≈ 15.",
    },
  },
  {
    label: "Sydney Trains, 1 year (pre-renewable)", value: 550000000, mult: "~×48 Llama", color: "#56d364",
    proof: {
      primary:   "~550,000 t CO₂e per year (2019–20 baseline)",
      source:    "Transport for NSW — Sydney Trains corporate emissions reporting",
      sourceUrl: "https://www.transport.nsw.gov.au/data-and-research/transport-data-strategy/case-studies/sydney-trains-using-data-to-achieve-net-zero",
      calc:      "~874 GWh/yr electricity × ~0.63 kg CO₂/kWh (NSW grid pre-2021) ≈ 550,000 t CO₂e",
      result:    "~550,000 t CO₂e",
      note:      "Sydney Trains switched to 100% renewable electricity in 2021, four years ahead of schedule. The pre-renewable figure is used to show the actual cost of running a city rail network. Current electricity emissions are near zero. Multiplier vs Llama 3.1: 550,000 ÷ 11,390 ≈ 48.",
    },
  },
  {
    label: "All AI queries, 2025 (annual)", value: 6000000000, mult: "~×530 Llama", color: "#79c0ff",
    proof: {
      primary:   "~15 TWh for all generative AI inference globally in 2025; ~6 Mt CO₂e on the average grid",
      source:    "IEA: Energy and AI (2024)",
      sourceUrl: "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
      calc:      "15 TWh × 0.4 kg CO₂/kWh = 6,000,000 t CO₂e. Covers all generative AI inference globally: text, image, code, and other modalities. Does not include training.",
      result:    "~6 Mt CO₂e (annual, 2025)",
      note:      "This is the running cost of using AI tools, not training them. Training adds roughly 1–2% on top. Multiplier vs Llama 3.1 training: 6,000,000 ÷ 11,390 ≈ 527.",
    },
  },
  {
    label: "All iPhones manufactured in 2024", value: 15100000000, mult: "~×1,300 Llama", color: "#8b949e",
    proof: {
      primary:   "~15.1 Mt CO₂e",
      source:    "Apple Product Environmental Report (iPhone 16, Sept 2024); IDC global smartphone shipment data 2024",
      sourceUrl: "https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf",
      calc:      "232M iPhones shipped in 2024 (IDC) × ~65 kg CO₂e average (Apple-reported range: 61–74 kg across models) ÷ 1,000",
      result:    "~15,100,000 t CO₂e (15.1 Mt)",
      note:      "80% of each device's emissions occur during manufacturing (Apple data). Covers production only, not usage or end-of-life. Apple reduced per-device footprint ~30% since iPhone 13. Multiplier vs Llama 3.1: 15,100,000 ÷ 11,390 ≈ 1,300.",
    },
  },
  {
    label: "Global gas flaring, 2024", value: 389000000000, mult: "~×26 iPhone fleet", color: "#f78166",
    proof: {
      primary:   "389 Mt CO₂e (2024, global)",
      source:    "World Bank: 2025 Global Gas Flaring Tracker Report",
      sourceUrl: "https://www.worldbank.org/en/programs/gasflaringreduction/publication/2025-global-gas-flaring-tracker-report",
      calc:      "151 billion cubic metres flared globally in 2024. Includes CO₂ from combustion (343 Mt) plus unburnt methane (46 Mt CO₂e). World Bank Global Flaring and Methane Reduction Partnership (GFMR).",
      result:    "389 Mt CO₂e",
      note:      "Gas flaring reached its highest level since 2007 in 2024. Russia, Iraq, Iran, the USA, and Venezuela are the top five flaring countries. The gas is a byproduct of oil extraction. When there is no pipeline to capture it, operators burn it rather than vent raw methane (which is worse for the climate). These emissions rarely appear in public discussion of oil and gas industry impacts.",
    },
  },
  {
    label: "Global commercial aviation, 1 year", value: 942000000000, mult: "~2.4× gas flaring", color: "#7dd3fc",
    proof: {
      primary:   "~942 Mt CO₂ from global aviation, 2023 (direct CO₂ only)",
      source:    "IATA: 'Aviation and Climate' 2024",
      sourceUrl: "https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals",
      calc:      "IATA 2023 figure: approximately 942 Mt CO₂ direct from jet fuel combustion. CO₂-only; no radiative forcing multiplier applied.",
      result:    "~942 Mt CO₂ (direct, no radiative forcing)",
      note:      "Radiative forcing: aviation's full warming effect is roughly 2–3× the direct CO₂ figure, due to NOₓ, contrails, and water vapour at altitude. This multiplier is scientifically established but excluded from official carbon accounting. Multiplier vs gas flaring: 942 ÷ 389 ≈ 2.4.",
    },
  },
  {
    label: "Global fashion industry, 1 year", value: 1200000000000, mult: "~1.3× aviation", color: "#e879f9",
    proof: {
      primary:   "~1,200 Mt CO₂e from global apparel and footwear production",
      source:    "UNEP: Sustainability and the Fashion Industry (2019); McKinsey 'Fashion on Climate' (2020)",
      sourceUrl: "https://unfccc.int/news/un-helps-fashion-industry-shift-to-low-carbon",
      calc:      "Aggregated lifecycle estimate covering cotton farming, synthetic fibre production, textile manufacturing, garment assembly, transport, retail, laundering, and disposal.",
      result:    "~1,200 Mt CO₂e (range: 800–1,800 Mt across studies)",
      note:      "High uncertainty reflects difficulty in measuring global supply chains. Synthetic (polyester) garments require petroleum for production; cotton is land and water-intensive. The industry produces roughly 92 million tonnes of textile waste per year. Multiplier vs aviation: 1,200 ÷ 942 ≈ 1.3.",
    },
  },
  {
    label: "Global food waste, 1 year", value: 3300000000000, mult: "~2.8× fast fashion", color: "#86efac",
    proof: {
      primary:   "~3,300 Mt CO₂e from food produced but never eaten",
      source:    "FAO: Food Wastage Footprint: Impacts on Natural Resources (2013); UNEP Food Waste Index (2021)",
      sourceUrl: "https://www.unep.org/resources/report/unep-food-waste-index-report-2021",
      calc:      "Includes emissions from producing food that is wasted, plus methane from organic waste decomposing in landfill (GWP100 applied). About one-third of all food produced globally is lost or wasted.",
      result:    "~3,300 Mt CO₂e",
      note:      "The UNEP 2021 report found 931 million tonnes of food (by weight) wasted at retail and consumer level alone. Including farm-to-retail losses and the full supply chain brings the total to ~3,300 Mt CO₂e. About 3–4× global aviation. Multiplier vs fast fashion: 3,300 ÷ 1,200 ≈ 2.8.",
    },
  },
  {
    label: "Global beef and dairy, 1 year", value: 4300000000000, mult: "~1.3× food waste", color: "#d97706",
    proof: {
      primary:   "~4,300 Mt CO₂e from beef and dairy cattle worldwide",
      source:    "FAO: Tackling Climate Change Through Livestock (2013)",
      sourceUrl: "https://www.fao.org/3/i3437e/i3437e.pdf",
      calc:      "Beef: 2,891 Mt CO₂e. Dairy: 1,387 Mt CO₂e. Combined: ~4,278 Mt CO₂e. Covers enteric fermentation (digestive methane), manure, feed production (including soya-driven deforestation), and transport.",
      result:    "~4,300 Mt CO₂e",
      note:      "Total global livestock is around 7,100 Mt CO₂e (FAO). Beef and dairy cattle together account for roughly 60% of that. Multiplier vs food waste: 4,300 ÷ 3,300 ≈ 1.3.",
    },
  },
];

const SOURCES = [
  {
    title: "IEA: Energy and AI",
    url: "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
    what: "Data centres (415 TWh, 2024), AI inference (~15 TWh), per-query figures, 2030 projections",
  },
  {
    title: "IEA: Streaming video factcheck",
    url: "https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines",
    what: "Corrected video streaming carbon figures (The Shift Project's 2019 estimates were widely overstated)",
  },
  {
    title: "Carbon Brief: Netflix streaming factcheck",
    url: "https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix/",
    what: "36 Wh/hr corrected figure, methodology breakdown",
  },
  {
    title: "Cambridge CBECI",
    url: "https://ccaf.io/cbnsi/cbeci",
    what: "Bitcoin: 138 TWh / 39.8 Mt CO₂e (2025). Updated daily.",
  },
  {
    title: "IATA: 2024 Aviation Emissions",
    url: "https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals",
    what: "942 Mt CO₂ gross in 2024, grew ~8% YoY, international/domestic breakdown",
  },
  {
    title: "Our World in Data: Aviation emissions",
    url: "https://ourworldindata.org/global-aviation-emissions",
    what: "Historical aviation CO₂, per-passenger figures",
  },
  {
    title: "FAO: Livestock and Climate",
    url: "https://www.fao.org/family-farming/detail/en/c/1634679/",
    what: "Livestock = 14.5% of global GHG (7.1 Gt CO₂e), per-kg beef = 99.48 kg CO₂e",
  },
  {
    title: "WRI: Beef and Climate Change",
    url: "https://www.wri.org/insights/6-pressing-questions-about-beef-and-climate-change-answered",
    what: "Beef alone ~3 Gt CO₂e/year, land-use change component",
  },
  {
    title: "UNFCCC: Food Loss and Waste",
    url: "https://unfccc.int/news/food-loss-and-waste-account-for-8-10-of-annual-global-greenhouse-gas-emissions-cost-usd-1-trillion",
    what: "Food waste = 8–10% of global GHG, ~3.3 Gt CO₂e",
  },
  {
    title: "Nature: Black Summer CO₂",
    url: "https://www.nature.com/articles/s41586-021-03712-y",
    what: "715 Mt CO₂ released in 2019–20 Australian bushfires",
  },
  {
    title: "Climate Council: Summer of Crisis",
    url: "https://www.climatecouncil.org.au/resources/summer-of-crisis/",
    what: "~900 Mt CO₂e estimate for Black Summer, broader impact assessment",
  },
  {
    title: "Australian DCCEEW: Bushfire GHG methodology",
    url: "https://www.dcceew.gov.au/climate-change/publications/estimating-greenhouse-gas-emissions-from-bushfires-in-australias-temperate-forests-focus-on-2019-20",
    what: "Official Australian government methodology for estimating bushfire emissions",
  },
  {
    title: "Semafor / IndexBox: Mining 2024",
    url: "https://www.semafor.com/article/03/10/2026/mining-metals-sector-account-for-11-of-global-emissions-report-finds",
    what: "Mining + metals = 11% of global GHG in 2024",
  },
  {
    title: "WEF: Sustainable concrete",
    url: "https://www.weforum.org/stories/2024/09/cement-production-sustainable-concrete-co2-emissions/",
    what: "Cement ~8% of global CO₂, emissions tripled 1990–2020",
  },
  {
    title: "Earth.org: Fast fashion impact",
    url: "https://earth.org/fast-fashions-detrimental-effect-on-the-environment/",
    what: "Fashion = 8–10% of global CO₂, more than aviation + shipping combined",
  },
  {
    title: "IEA: Standby power",
    url: "https://www.iea.org/energy-system/buildings/standby-power",
    what: "~5% of global electricity, ~1% of global CO₂ from standby/vampire power",
  },
  {
    title: "Greenly: Cloud storage carbon footprint",
    url: "https://greenly.earth/en-gb/blog/industries/what-is-the-carbon-footprint-of-data-storage",
    what: "3–7 kWh per GB (Carnegie Mellon), 40–70 kWh per TB per year",
  },
  {
    title: "Li et al. 2024: Fast fashion jeans LCA",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0048969724016498",
    what: "Lifecycle carbon footprint of fast fashion jeans: ~16–20 kg CO₂e per pair",
  },
  {
    title: "S&P Global: Gold mine GHG emissions",
    url: "https://pages.marketintelligence.spglobal.com/greenhouse-gas-and-gold-mines-EMC.html",
    what: "792 kg CO₂e per troy ounce (2023 average across 329 primary gold mines)",
  },
  {
    title: "Chien et al. 2025: Measuring AI energy and carbon intensity",
    url: "https://arxiv.org/abs/2505.09598",
    what: "Direct measurement of GPT-4o: median 1.2 Wh per query. Basis for ChatGPT per-query figure.",
  },
  {
    title: "Apple: iPhone 16 Product Environmental Report",
    url: "https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf",
    what: "iPhone 16 lifecycle emissions: 61–74 kg CO₂e per device, 80% from manufacturing. Used for both smartphone manufacturing and iPhone fleet figures.",
  },
  {
    title: "ICCT: Lifecycle greenhouse gas emissions of passenger vehicles",
    url: "https://theicct.org/publication/a-global-comparison-of-the-life-cycle-greenhouse-gas-emissions-of-combustion-engine-and-electric-passenger-cars/",
    what: "Manufacturing phase of average ICE car: ~8.4 t CO₂e. Basis for car manufacturing comparison.",
  },
  {
    title: "Transport for NSW: Sydney Trains sustainability",
    url: "https://www.transport.nsw.gov.au/data-and-research/transport-data-strategy/case-studies/sydney-trains-using-data-to-achieve-net-zero",
    what: "Sydney Trains pre-renewable baseline: ~550,000 t CO₂e/yr; switched to 100% renewable 2021",
  },
  {
    title: "Nature: Black Summer bushfire CO₂",
    url: "https://www.nature.com/articles/s41586-021-03712-y",
    what: "715 Mt CO₂ released in 2019–20 Australian bushfires, more than a full year of Australia's normal emissions",
  },
  {
    title: "Meta AI: Llama 3.1 Model Card",
    url: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md",
    what: "Llama 3.1 405B training: 27.5 GWh, 11,390 t CO₂e location-based / 0 t CO₂e market-based (renewable energy matching)",
  },
  {
    title: "World Bank: 2025 Global Gas Flaring Tracker Report",
    url: "https://www.worldbank.org/en/programs/gasflaringreduction/publication/2025-global-gas-flaring-tracker-report",
    what: "Global gas flaring 2024: 151 billion cubic metres, 389 Mt CO₂e; highest since 2007",
  },
];

// ════════════════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════════════════

const tip = document.getElementById("tooltip");

function showTip(event, html) {
  tip.style.display = "block";
  tip.innerHTML = html;
  moveTip(event);
}

function moveTip(event) {
  const pad = 14;
  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  let x = event.clientX + pad;
  let y = event.clientY - pad;
  if (x + tw > window.innerWidth - 10) x = event.clientX - tw - pad;
  if (y + th > window.innerHeight - 10) y = event.clientY - th - pad;
  tip.style.left = x + "px";
  tip.style.top  = y + "px";
}

function hideTip() { tip.style.display = "none"; }

function fmtCO2(kg) {
  if (kg < 0.00005) return `${(kg * 1e6).toFixed(0)} μg CO₂e`;
  if (kg < 0.5)     return `${(kg * 1000).toFixed(2)} g CO₂e`;
  if (kg < 1000)    return `${kg.toLocaleString(undefined, { maximumFractionDigits: 2 })} kg CO₂e`;
  return `${(kg / 1000).toFixed(1)} t CO₂e`;
}

// Compact value for bar chart right-side labels
function fmtBarVal(kg) {
  if (kg < 0.001)  return `${(kg * 1e6).toFixed(0)}μg CO₂e`;
  if (kg < 0.01)   return `${(kg * 1000).toFixed(2)}g CO₂e`;
  if (kg < 1)      return `${(kg * 1000).toFixed(0)}g CO₂e`;
  if (kg < 1000)   return `${kg.toFixed(kg < 10 ? 1 : 0)}kg CO₂e`;
  if (kg < 1e9)    return `${Math.round(kg / 1000).toLocaleString()}t CO₂e`;
  if (kg < 1e12)   return `${+(kg / 1e9).toFixed(1)}Mt CO₂e`;
  return `${+(kg / 1e12).toFixed(1)}Gt CO₂e`;
}

function queriesEquiv(kg) {
  const baseline = 0.00048;
  const n = kg / baseline;
  if (n < 0.5)      return `${(1 / n).toFixed(0)}× less than a ChatGPT query`;
  if (n < 2)        return `≈ 1 ChatGPT query`;
  if (n < 1000)     return `= ${Math.round(n).toLocaleString()} ChatGPT queries`;
  if (n < 1e6)      return `= ${(n / 1000).toFixed(0)}k ChatGPT queries`;
  return `= ${(n / 1e6).toFixed(1)}M ChatGPT queries`;
}

// ════════════════════════════════════════════════════════
// TREEMAP
// ════════════════════════════════════════════════════════

function drawTreemap() {
  const el = document.getElementById("treemap");
  el.innerHTML = "";

  const W = el.clientWidth || 900;
  const H = Math.round(Math.min(W * 0.58, 560));

  const svg = d3.select("#treemap")
    .append("svg")
    .attr("width", W)
    .attr("height", H)
    .style("display", "block");

  const root = d3.hierarchy(TREEMAP_DATA)
    .sum((d) => d.value || 0)
    .sort((a, b) => b.value - a.value);

  d3.treemap()
    .size([W, H])
    .paddingOuter(3)
    .paddingTop(22)
    .paddingInner(2)
    .round(true)(root);

  // Category border + label
  svg.selectAll(".cat-border")
    .data(root.children)
    .join("rect")
    .attr("class", "cat-border")
    .attr("x", (d) => d.x0)
    .attr("y", (d) => d.y0)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0)
    .attr("fill", "none")
    .attr("stroke", (d) => d.data.color)
    .attr("stroke-width", 1)
    .attr("rx", 5);

  svg.selectAll(".cat-label")
    .data(root.children)
    .join("text")
    .attr("class", "cat-label")
    .attr("x", (d) => d.x0 + 6)
    .attr("y", (d) => d.y0 + 15)
    .text((d) => (d.x1 - d.x0 > 70 ? d.data.name : ""))
    .attr("fill", (d) => d.data.color)
    .attr("font-size", "11px")
    .attr("font-weight", "600")
    .attr("font-family", "inherit")
    .style("pointer-events", "none");

  // Leaf nodes
  const leaf = svg.selectAll(".leaf")
    .data(root.leaves())
    .join("g")
    .attr("class", "leaf")
    .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

  leaf.append("rect")
    .attr("width",  (d) => Math.max(0, d.x1 - d.x0))
    .attr("height", (d) => Math.max(0, d.y1 - d.y0))
    .attr("fill",   (d) => d.parent.data.color)
    .attr("opacity",(d) => d.data.highlight ? 1 : 0.72)
    .attr("stroke", (d) => d.data.highlight ? "#fff" : "none")
    .attr("stroke-width", 2)
    .attr("rx", 2)
    .style("cursor", "pointer")
    .on("mousemove", (event, d) => {
      const total = root.value;
      const pct = ((d.data.value / total) * 100).toFixed(2);
      showTip(event, `
        <strong style="display:block;margin-bottom:4px">${d.data.name}</strong>
        ${d.data.value.toLocaleString()} Mt CO₂e<br>
        ${pct}% of sectors shown
        ${d.data.detail ? `<br><br><span style="color:#8b949e;font-style:italic">${d.data.detail}</span>` : ""}
        <br><span style="color:#8b949e;display:block;margin-top:4px">Source: ${d.data.source || d.parent.data.name}</span>
        ${d.data.note ? `<br><span style="color:#f78166">⚠ ${d.data.note}</span>` : ""}
      `);
    })
    .on("mouseleave", hideTip);

  // Name label
  leaf.append("text")
    .attr("x", 5)
    .attr("y", 16)
    .text((d) => {
      const w = d.x1 - d.x0;
      const h = d.y1 - d.y0;
      if (w < 42 || h < 20) return "";
      if (w < 85) return d.data.name.split(" ")[0];
      return d.data.name;
    })
    .attr("fill", "#fff")
    .attr("font-size", (d) => `${Math.min(12, Math.max(9, (d.x1 - d.x0) / 11))}px`)
    .attr("font-weight", "500")
    .attr("font-family", "inherit")
    .style("pointer-events", "none");

  // Value label for larger boxes
  leaf.append("text")
    .attr("x", 5)
    .attr("y", 30)
    .text((d) => {
      const w = d.x1 - d.x0;
      const h = d.y1 - d.y0;
      if (w < 80 || h < 42) return "";
      return `${d.data.value.toLocaleString()} Mt`;
    })
    .attr("fill", "rgba(255,255,255,0.55)")
    .attr("font-size", "10px")
    .attr("font-family", "inherit")
    .style("pointer-events", "none");

  // AI is too small to annotate safely inside the SVG — noted in legend below instead

  // Legend
  const legendEl = document.getElementById("treemap-legend");
  legendEl.innerHTML = root.children
    .map(
      (cat) => `
      <div class="legend-item">
        <div class="legend-dot" style="background:${cat.data.color}"></div>
        ${cat.data.name}
      </div>`
    )
    .join("") + `
      <div class="legend-item legend-ai-note">
        <div class="legend-dot" style="background:#56d364;outline:1.5px solid #fff;outline-offset:1px"></div>
        All AI queries (in Digital Technology): ~6 Mt CO₂e, too small to see at this scale
      </div>`;
}

// ════════════════════════════════════════════════════════
// COMPARISON CHART
// ════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════
// PROOF MODAL
// ════════════════════════════════════════════════════════

function showProof(d) {
  const modal = document.getElementById("proof-modal");
  const content = document.getElementById("proof-content");
  if (!modal || !content || !d.proof) return;
  const p = d.proof;
  content.innerHTML = `
    <p class="proof-content-title">${d.label}</p>
    <dl class="proof-dl">
      <dt>Primary value</dt><dd>${p.primary}</dd>
      <dt>Source</dt><dd>${p.sourceUrl ? `<a href="${p.sourceUrl}" target="_blank" rel="noopener noreferrer">${p.source}</a>` : p.source}</dd>
      <dt>Calculation</dt><dd><code>${p.calc}</code></dd>
      <dt>Result</dt><dd><strong>${p.result}</strong></dd>
      ${p.note ? `<dt>Notes</dt><dd>${p.note}</dd>` : ""}
    </dl>
  `;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProof() {
  const modal = document.getElementById("proof-modal");
  if (modal) modal.hidden = true;
  document.body.style.overflow = "";
}

// ════════════════════════════════════════════════════════
// COMPARISON — scroll-driven progressive bar chart
// ════════════════════════════════════════════════════════

function drawComparison() {
  const container = document.getElementById("comparison-chart");
  if (!container) return;
  container.innerHTML = "";

  const isMobile = window.innerWidth < 640;
  const rm = isMobile ? 86 : 100;  // right margin for multiplier + value labels
  const margin = { top: 6, right: rm, bottom: 6, left: 4 };  // labels go above bars, not left

  const W = container.clientWidth || 360;
  const iW = W - margin.left - margin.right;
  const sticky = container.closest(".comparison-sticky");

  const svg = d3.select("#comparison-chart")
    .append("svg")
    .attr("width", W).attr("height", 100);

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear().range([0, iW]);

  const LABEL_H = isMobile ? 14 : 16;
  const slotH = isMobile ? 36 : 42;  // fixed height per bar slot; old bars scroll off top
  const maxH = isMobile ? 400 : 500;

  function render(data) {
    // Grow the chart to fit all bars up to a max, then clip old bars off top
    const neededH = data.length * slotH + margin.top + margin.bottom;
    const H = Math.min(neededH, maxH);
    const iH = H - margin.top - margin.bottom;
    svg.attr("height", H);
    if (sticky) sticky.style.height = (H + 16) + "px"; // +16 for .comp-chart-inner vertical padding

    x.domain([0, data[data.length - 1].value * 1.08]);

    const t = d3.transition().duration(680).ease(d3.easeCubicInOut);

    const bh = isMobile ? 16 : 20;
    const bY = LABEL_H + 2;
    const midY = bY + bh / 2;
    const lineGap = isMobile ? 10 : 11;

    // As bars accumulate, scroll the group upward so old bars clip off the top
    const totalH = data.length * slotH;
    const gOffsetY = totalH < iH ? margin.top : margin.top + (iH - totalH);
    g.transition(t).attr("transform", `translate(${margin.left},${gOffsetY})`);

    // Exit
    g.selectAll(".bg").data(data, d => d.label).exit()
      .transition(t).style("opacity", 0).remove();

    // Enter
    const enter = g.selectAll(".bg").data(data, d => d.label)
      .enter().append("g").attr("class", "bg")
      .attr("transform", (d, i) => `translate(0,${i * slotH})`)
      .style("opacity", 0);

    // Label above bar
    enter.append("text").attr("class", "bl")
      .attr("x", 0)
      .attr("y", LABEL_H - 3)
      .attr("dominant-baseline", "auto")
      .attr("text-anchor", "start")
      .attr("fill", "#8b949e")
      .attr("font-family", "inherit")
      .attr("font-size", isMobile ? "10px" : "11px")
      .text(d => d.label);

    // Bar rect
    enter.append("rect").attr("class", "br")
      .attr("y", bY).attr("height", bh)
      .attr("width", 0).attr("rx", 3)
      .attr("fill", d => d.color);

    // Right-side labels: multiplier (line 1) + CO₂ value (line 2)
    const multX = iW + 5;
    enter.append("text").attr("class", "bm")
      .attr("x", multX)
      .attr("dominant-baseline", "auto")
      .attr("text-anchor", "start")
      .attr("font-family", "inherit")
      .attr("font-weight", "600")
      .attr("font-size", isMobile ? "10px" : "11px")
      .attr("fill", d => d.color)
      .text(d => d.mult);

    enter.append("text").attr("class", "bv")
      .attr("x", multX)
      .attr("dominant-baseline", "hanging")
      .attr("text-anchor", "start")
      .attr("font-family", "inherit")
      .attr("font-size", isMobile ? "9px" : "10px")
      .attr("fill", "#8b949e")
      .text(d => fmtBarVal(d.value));

    enter.transition(t).style("opacity", 1);

    // Update all (enter + existing)
    const all = g.selectAll(".bg");

    all.transition(t)
      .attr("transform", (d, i) => `translate(0,${i * slotH})`);

    all.select(".bl")
      .attr("y", LABEL_H - 3)
      .attr("font-size", isMobile ? "10px" : "11px");

    all.select(".br").transition(t)
      .attr("y", bY).attr("height", bh)
      .attr("width", d => Math.max(2, x(d.value)));

    all.select(".bm").attr("y", midY - lineGap / 2);
    all.select(".bv").attr("y", midY + lineGap / 2);
  }

  // Start with Google + ChatGPT visible together
  render(CSTEPS.slice(0, 2));

  // Scroll-based step tracking: measures chart bottom dynamically so the reading
  // zone stays in the visible area below the sticky chart regardless of its height.
  let lastCount = 2;
  let rafPending = false;

  function updateFromScroll() {
    rafPending = false;
    const chartBottom = sticky ? sticky.getBoundingClientRect().bottom : 100;
    const vh = window.innerHeight;
    // Reading zone: 20% into the visible area below the chart
    const readingY = chartBottom + (vh - chartBottom) * 0.2;

    let maxStep = -1;
    document.querySelectorAll(".comparison-step").forEach(el => {
      const r = el.getBoundingClientRect();
      const content = el.querySelector(".step-content");
      const inZone = r.top <= readingY && r.bottom >= readingY;
      content?.classList.toggle("active", inZone);
      if (inZone) maxStep = Math.max(maxStep, parseInt(el.dataset.step));
    });

    if (maxStep >= 0) {
      const newCount = Math.max(2, maxStep + 2);
      if (newCount !== lastCount) { lastCount = newCount; render(CSTEPS.slice(0, newCount)); }
    }
  }

  function scheduleUpdate() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(updateFromScroll);
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
  requestAnimationFrame(updateFromScroll);
}

// ════════════════════════════════════════════════════════
// SOURCES LIST
// ════════════════════════════════════════════════════════

function renderSources() {
  document.getElementById("sources-grid").innerHTML = SOURCES.map(
    (s) => `
    <div class="source-item">
      <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a>
      <div class="source-what">${s.what}</div>
    </div>`
  ).join("");
}

// ════════════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ════════════════════════════════════════════════════════

function initScrollAnimations() {
  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
    { threshold: 0.08 }
  );
  document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
}

// ════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  drawTreemap();
  drawComparison();
  renderSources();
  initScrollAnimations();

  // Proof modal
  const proofModal = document.getElementById("proof-modal");
  if (proofModal) {
    proofModal.addEventListener("click", e => { if (e.target === proofModal) closeProof(); });
    document.querySelector(".proof-close")?.addEventListener("click", closeProof);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeProof(); });
  }

  // Inject proof buttons into scroll step blurbs (skip commentary-only steps)
  document.querySelectorAll(".comparison-step").forEach(el => {
    if (el.dataset.commentary) return;
    const item = CSTEPS[parseInt(el.dataset.step) + 1];
    if (!item?.proof) return;
    const btn = document.createElement("button");
    btn.className = "step-proof-btn";
    btn.textContent = "?";
    btn.setAttribute("aria-label", "Show source");
    btn.addEventListener("click", e => { e.stopPropagation(); showProof(item); });
    el.querySelector(".step-content").appendChild(btn);
  });

  // Smooth scroll nav links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Redraw on resize (comparison re-init resets observers — acceptable on resize)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      drawTreemap();
      drawComparison();
    }, 280);
  });
});
