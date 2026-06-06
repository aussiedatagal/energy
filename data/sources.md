# Energy Data Sources

All data used in `energy_data.json`. Fetch script: `fetch_sources.py`.

---

## Digital & Technology

### `iea_energy_ai` — IEA: Energy and AI (2024/2025)
- **URL:** https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai
- **Key figures:**
  - All data centres: 415 TWh in 2024 (~1.5% of global electricity)
  - Projected to reach 945 TWh by 2030
  - AI-specific servers: 53–76 TWh in 2024
  - All generative AI queries: ~15 TWh in 2025
  - Per ChatGPT text query: ~0.3 Wh
- **Notes:** Gold-standard source. IEA also has companion article on streaming (see below).

### `iea_streaming` — IEA: Carbon footprint of streaming video (2020)
- **URL:** https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines
- **Key figures:**
  - Corrected streaming carbon estimate significantly downward vs The Shift Project (2019)
  - Netflix external estimate (including CDN/ISP/device): ~94 TWh/yr
- **Notes:** Important corrective article — The Shift Project's 2019 figures were widely reported but overstated by ~30–50x.

### `carbonbrief_streaming` — Carbon Brief: Streaming video factcheck
- **URL:** https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix/
- **Key figures:**
  - Per hour streaming: ~36g CO2e (IEA-corrected figure)
  - Video streaming = 60–70% of global internet traffic

### `cambridge_cbeci` — Cambridge Bitcoin Electricity Consumption Index
- **URL:** https://ccaf.io/cbnsi/cbeci
- **Key figures:**
  - Bitcoin: ~138 TWh/year (2025 Cambridge Digital Mining Industry Report)
  - Network emissions: ~39.8 Mt CO2e
  - ~0.5% of global electricity
- **Notes:** Updated daily. The authoritative source for Bitcoin energy — use live figures from here.

### `greenly_storage` — Greenly: Carbon footprint of data storage
- **URL:** https://greenly.earth/en-gb/blog/industries/what-is-the-carbon-footprint-of-data-storage
- **Key figures:**
  - 3–7 kWh per GB (transfer + storage, Carnegie Mellon study)
  - ~40–70 kWh per TB per year (ongoing storage)

### `ecoflow_storage` — EcoFlow: Energy cost of cloud storage
- **URL:** https://www.ecoflow.com/us/blog/energy-cost-cloud-storage
- **Key figures:**
  - 0.0078 kWh per GB per month (~0.1 kWh/GB/year for ongoing storage)
  - 40–70 kWh per TB per year

### `davidmytton_5g` — David Mytton: How much energy will 5G consume?
- **URL:** https://davidmytton.blog/how-much-energy-will-5g-consume/
- **Key figures:**
  - Wireless networks: ~50 TWh in 2015 (baseline)
  - 5G uses more energy per base station than 4G
- **Notes:** 2015 figure is dated. No reliable 2024 global figure exists yet.

### `lbnl_standby` — Lawrence Berkeley National Laboratory: Standby power
- **URL:** https://standby.lbl.gov/
- **Key figures:**
  - Standby = 5–10% of residential electricity in developed countries

### `iea_standby` — IEA: Standby power
- **URL:** https://www.iea.org/energy-system/buildings/standby-power
- **Key figures:**
  - ~5% of global electricity
  - ~1% of global CO2 (equivalent to ~15 million petrol cars)

---

## Transport

### `iata_2024` — IATA: 2024 Aviation Emissions Report
- **URL:** https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals
- **Key figures:**
  - 942 Mt CO2 gross in 2024
  - International flights = ~60% of aviation emissions (~550 Mt CO2)
  - Grew ~8% YoY

### `ourworldindata_aviation` — Our World in Data: Aviation emissions
- **URL:** https://ourworldindata.org/global-aviation-emissions
- **Key figures:**
  - Annual CO2 from aviation chart (interactive, updated)
  - Per-passenger per-flight estimates

### `atag` — Air Transport Action Group: Facts & Figures
- **URL:** https://atag.org/facts-figures
- **Key figures:**
  - Per-flight CO2 estimates by route type

---

## Agriculture & Land Use

### `fao_livestock` — FAO: Livestock's Long Shadow / Livestock Solutions for Climate Change
- **URL:** https://www.fao.org/family-farming/detail/en/c/1634679/
- **Key figures:**
  - All livestock: 7.1 Gt CO2e = 14.5% of global GHG
  - Cattle = ~2/3 of livestock emissions (~4.7 Gt)
  - 1 kg beef = 99.48 kg CO2e average
  - Sources: feed production (45%), enteric fermentation (39%)

### `wri_beef` — World Resources Institute: Beef and Climate Change
- **URL:** https://www.wri.org/insights/6-pressing-questions-about-beef-and-climate-change-answered
- **Key figures:**
  - Beef alone: ~3 Gt CO2e/year
  - ~7% of total global GHG
  - Beef produces over 300 kg CO2e per kg protein

### `unfccc_foodwaste` — UNFCCC: Food loss and waste
- **URL:** https://unfccc.int/news/food-loss-and-waste-account-for-8-10-of-annual-global-greenhouse-gas-emissions-cost-usd-1-trillion
- **Key figures:**
  - 8–10% of annual global GHG emissions
  - Costs USD $1 trillion annually
  - 1/3 of all food produced is lost or wasted

### `ourworldindata_foodwaste` — Our World in Data: Food waste emissions
- **URL:** https://ourworldindata.org/food-waste-emissions
- **Key figures:**
  - Food waste = 6% of total global emissions
  - Nearly 5x the emissions of the entire aviation sector

---

## Natural Events (Australia)

### `nature_blacksummer` — Nature: Vast CO2 release from Australian fires 2019–2020
- **URL:** https://www.nature.com/articles/s41586-021-03712-y
- **Key figures:**
  - 715 Mt CO2 released
  - Exceeded Australia's normal annual emissions (537 Mt)

### `climatecouncil_blacksummer` — Climate Council: Summer of Crisis
- **URL:** https://www.climatecouncil.org.au/resources/summer-of-crisis/
- **Key figures:**
  - ~900 Mt CO2e estimate (higher methodology)

### `dcceew_bushfires` — Australian DCCEEW: Estimating GHG emissions from bushfires
- **URL:** https://www.dcceew.gov.au/climate-change/publications/estimating-greenhouse-gas-emissions-from-bushfires-in-australias-temperate-forests-focus-on-2019-20
- **Notes:** Australian government methodology document.

---

## Industry

### `semafor_mining` — Semafor: Mining & metals sector 11% of global emissions (2026)
- **URL:** https://www.semafor.com/article/03/10/2026/mining-metals-sector-account-for-11-of-global-emissions-report-finds
- **Key figures:**
  - Mining + metals = 11% of global GHG in 2024
  - Steel/aluminium/coal = 93% of sector
  - Asia = 80% of sector emissions

### `indexbox_mining` — IndexBox: Mining & Metals Emissions Data 2024
- **URL:** https://www.indexbox.io/blog/mining-and-metals-emissions-data-11-of-global-ghg-in-2024-steel-leads/

### `statista_cement` — Statista: Global cement CO2 emissions 2024
- **URL:** https://www.statista.com/statistics/1299532/carbon-dioxide-emissions-worldwide-cement-manufacturing/
- **Key figures:**
  - 1.47 Gt CO2 in 2024

### `wef_cement` — World Economic Forum: Sustainable concrete
- **URL:** https://www.weforum.org/stories/2024/09/cement-production-sustainable-concrete-co2-emissions/
- **Key figures:**
  - Cement = ~7–8% of global CO2
  - Emissions tripled 1990–2020
  - 50% from chemical process, 40% from fuel

---

## Consumer Behaviour

### `earthorg_fashion` — Earth.Org: Fast fashion environmental impact
- **URL:** https://earth.org/fast-fashions-detrimental-effect-on-the-environment/
- **Key figures:**
  - 8–10% of global CO2 = ~1.2 Gt CO2e/year
  - More energy than aviation + shipping combined

### `climateq_fashion` — Climateq: Fast fashion 8-10% of global carbon emissions
- **URL:** https://www.climateq.co.uk/resources/fast-fashion-contributes-8-10-per-cent-of-global-carbon-emissions/

---

## General / Context

- **Global CO2 total:** ~37,000 Mt CO2e/year (2024)
- **Global electricity:** ~29,000 TWh/year (2024)
- **Australia annual emissions:** ~537 Mt CO2e (pre-Black-Summer baseline)
