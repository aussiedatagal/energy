import type { TreemapRoot } from '../types';

export const TREEMAP_DATA: TreemapRoot = {
  name: 'root',
  children: [
    {
      name: 'Agriculture & Land Use',
      color: '#f78166',
      children: [
        {
          name: 'Beef cattle',
          value: 2542,
          detail:
            'The single largest animal product contributor. Emissions come from methane (enteric fermentation), feed production, and land cleared for grazing. Per kg of protein produced, beef is around 20× more emissions-intensive than chicken.',
          source: 'FAO: Pathways towards lower emissions (2023)',
          quote:
            'Cattle are the primary contributors to GHG emissions, producing around 3.8 Gt CO2eq per year and accounting for approximately 62 percent of all livestock emissions. In terms of commodities, meat production claims the largest share of emissions at 67 percent, followed by milk at 30 percent and eggs 3 percent.',
          sourceUrl: 'https://doi.org/10.4060/cc9029en',
          source2: 'FAO Livestock Environmental Assessment and Performance (LEAP) Partnership',
          quote2:
            'Livestock agrifood systems – which include cattle, buffaloes, sheep, goats, pigs and chickens – are responsible for 6.2 gigatonnes (Gt) of carbon dioxide equivalent emissions.',
          sourceUrl2: 'https://doi.org/10.4060/cc9029en',
        },
        {
          name: 'Dairy cattle',
          value: 1240,
          detail:
            'Milk, cheese, butter and yoghurt. Dairy cattle emit methane similarly to beef cattle. Some emissions are shared with beef when dairy cows are slaughtered.',
          source: 'FAO: Pathways towards lower emissions (2023)',
          quote:
            'Cattle are the primary contributors to GHG emissions, producing around 3.8 Gt CO2eq per year and accounting for approximately 62 percent of all livestock emissions. In terms of commodities, milk accounts for 30 percent of livestock emissions.',
          sourceUrl: 'https://doi.org/10.4060/cc9029en',
        },
        {
          name: 'Food Waste',
          value: 9300,
          detail:
            '~17% of global GHG (2017 estimate). Around 10× aviation. Covers the full food supply chain from farm through to landfill.',
          source: 'Carbon Brief (2021)',
          quote:
            'It finds that, in 2017, global food waste resulted in 9.3bn tonnes of CO2-equivalent (GtCO2e) emissions – roughly the same as the total combined emissions of the US and the EU that same year.',
          sourceUrl:
            'https://www.carbonbrief.org/food-waste-makes-up-half-of-global-food-system-emissions/',
        },
        {
          name: 'Pigs',
          value: 868,
          detail:
            "Pork and pork products. Lower methane than ruminants (pigs don't ferment in the same way), but feed production and manure management contribute significant emissions.",
          source: 'FAO: Pathways towards lower emissions (2023)',
          quote:
            "Pigs, chickens, buffaloes and small ruminants contribute to 14, 9, 8 and 7 percent, respectively, of livestock's overall emissions.",
          sourceUrl: 'https://doi.org/10.4060/cc9029en',
        },
        {
          name: 'Poultry',
          value: 558,
          detail:
            'Chicken, turkey, eggs. The least emissions-intensive of the major meats, roughly 6–7 kg CO₂e per kg compared to ~99 kg CO₂e per kg of beef.',
          source: 'FAO: Pathways towards lower emissions (2023)',
          quote:
            "Pigs, chickens, buffaloes and small ruminants contribute to 14, 9, 8 and 7 percent, respectively, of livestock's overall emissions.",
          sourceUrl: 'https://doi.org/10.4060/cc9029en',
        },
        {
          name: 'Sheep & goats',
          value: 434,
          detail:
            'Like cattle, sheep and goats are ruminants and produce significant methane. Lamb has a high emissions intensity per kg, similar to beef.',
          source: 'FAO: Pathways towards lower emissions (2023)',
          quote:
            "Pigs, chickens, buffaloes and small ruminants contribute to 14, 9, 8 and 7 percent, respectively, of livestock's overall emissions.",
          sourceUrl: 'https://doi.org/10.4060/cc9029en',
        },
        {
          name: 'Other livestock',
          value: 558,
          detail:
            'Buffalo, horses, aquaculture, and other animal products. Also includes emissions from manure management across all categories.',
          source: 'FAO: Pathways towards lower emissions (2023)',
          quote:
            'Livestock agrifood systems – which include cattle, buffaloes, sheep, goats, pigs and chickens – are responsible for 6.2 gigatonnes (Gt) of carbon dioxide equivalent emissions.',
          sourceUrl: 'https://doi.org/10.4060/cc9029en',
        },
      ],
    },
    {
      name: 'Industry',
      color: '#ffa657',
      children: [
        {
          name: 'Mining & Metals',
          value: 6000,
          detail:
            '11% of global GHG in 2024, equivalent to ~6 Gt CO₂e. Metal production (steel, aluminium) accounts for around 8 percentage points; primary mining activities account for the remaining 3.',
          source: 'ICMM: Mining and Metals GHG Emissions Report (2026)',
          quote:
            'The mining and metals sector accounted for around 11 per cent of global greenhouse gas (GHG) emissions in 2024, as Scope 1 (direct on-site) emissions and Scope 2 (indirect, from purchased power) emissions. This is equivalent to approximately six gigatonnes (Gt) of CO₂e. Of this, approximately three per cent comes from primary mining activities and eight per cent from metal production.',
          sourceUrl:
            'https://www.icmm.com/website/data/2026/research_mining-metals-ghg-emissions.pdf',
        },
        {
          name: 'Cement & Concrete',
          value: 1470,
          detail:
            "Around 4% of global CO₂. Roughly half comes from the calcination process (limestone releasing CO₂), which can't be eliminated by switching to renewable energy.",
          source: 'IEA: Cement',
          quote:
            'Cement emissions intensity has remained relatively stable since 2018, at just under 0.6 t CO2 per tonne of cement produced, following several years of modest increase largely due to an increasing clinker-to-cement ratio in China.',
          sourceUrl: 'https://www.iea.org/energy-system/industry/cement',
        },
      ],
    },
    {
      name: 'Consumer & Transport',
      color: '#d2a8ff',
      children: [
        {
          name: 'Fast Fashion',
          value: 1200,
          detail:
            '1.2 Gt CO₂e annually. More than aviation alone. Supply chain spans cotton farming, synthetic fibre production, manufacturing, transport, and textile waste.',
          source: 'Carbon Literacy Project',
          quote:
            'The fashion industry is the second-largest industrial polluter, accounting for 10% of global pollution, ranking higher than emissions from air travel! When factoring in the entire lifecycle of a garment, from manufacturing to transportation to, ultimately, ending up in landfill, in total, 1.2 billion tonnes of carbon emissions are released by the fashion industry every year.',
          sourceUrl: 'https://carbonliteracy.com/fast-fashions-carbon-footprint/',
        },
        {
          name: 'Aviation',
          value: 942,
          detail:
            '942 Mt CO₂ gross in 2024. Grew ~8% year-on-year. Up from 914 Mt in 2019. International flights = ~60% of total.',
          source: 'IATA 2024',
          quote:
            'In 2024, gross emissions totaled 942 million tonnes (Mt) of CO2, up from 882 Mt in 2023, but showing a more modest gain from the 914 Mt emitted in 2019.',
          sourceUrl:
            'https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals',
        },
        {
          name: 'Standby / Vampire Power',
          value: 120,
          detail:
            'IEA estimate: 200–400 TWh per year (1–2% of global electricity). Converted at 0.4 kg CO₂/kWh, midpoint ~120 Mt CO₂e. In OECD homes, standby can reach 5–10% of residential electricity.',
          source: 'IEA (cited in IEA 4E Network Standby report, 2010)',
          quote:
            'The global energy consumption from standby has been estimated by the International Energy Agency (IEA) at between 200 TWh and 400 TWh per year (E3b, 2006), which is equivalent to 1% to 2% of global electricity consumption.',
          sourceUrl:
            'https://www.iea-4e.org/wp-content/uploads/publications/2010/08/Network-Standby-2010-09-final.pdf',
          note: 'Converted: 300 TWh (midpoint of 200–400 TWh) × 0.4 kg CO₂/kWh = 120 Mt CO₂e.',
        },
      ],
    },
    {
      name: 'Digital Technology',
      color: '#56d364',
      children: [
        {
          name: 'Data Centres',
          value: 166,
          detail:
            'Every website, streaming service, social media feed, cloud backup, email, and online game runs on servers in data centres. 415 TWh globally in 2024, ~1.5% of all electricity. US + China = 70% of total. Projected to double by 2030.',
          source: 'IEA Energy and AI 2024',
          quote:
            'In total, electricity consumption from data centres is estimated to amount to around 415 terawatt hours (TWh), or about 1.5% of global electricity consumption in 2024. In the Base Case, electricity consumption from data centres rises to around 945 TWh by 2030, more than doubling from the 2024 level.',
          sourceUrl: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
          note: 'Converted: 415 TWh × 0.4 kg CO₂/kWh = 166 Mt CO₂e.',
        },
        {
          name: 'Video Streaming',
          value: 100,
          detail:
            "Highly contested figure. Conservative estimate: ~250 TWh combined (Netflix external estimate ~94 TWh; YouTube lower-end estimate ~150 TWh). Video = 60–70% of all internet traffic. The Shift Project's widely-reported 2019 figures were overstated by ~30–50× and corrected by IEA and Carbon Brief. Netflix's own reported figure for 2019 was just 0.45 TWh, 200× lower than the contested 94 TWh estimate below.",
          source: 'IEA / Carbon Brief',
          quote:
            'With 167 million Netflix subscribers watching an average of two hours per day, the corrected Shift Project figures imply that Netflix streaming consumes around 94 terawatt hours (TWh) per year, which is 200 times larger than figures reported by Netflix (0.45TWh in 2019).',
          sourceUrl:
            'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines',
          note: "The IEA source presents 94 TWh as what the corrected Shift Project methodology implies, not as its own independent estimate, and explicitly contrasts it with Netflix's actual reported figure. Converted: ~250 TWh (upper-bound, contested estimate) × 0.4 kg CO₂/kWh = ~100 Mt CO₂e. High uncertainty.",
        },
        {
          name: 'Bitcoin Mining',
          value: 40,
          detail:
            '138 TWh annually, 39.8 Mt CO₂e (Cambridge Digital Mining Industry Report 2025). CBECI publishes live electricity estimates that vary with hashrate.',
          source: 'Cambridge Digital Mining Industry Report 2025',
          quote:
            'Our findings reveal an estimated annual electricity usage of Bitcoin mining activity at approximately 138 TWh, resulting in around 39.8 MtCO2e attributable GHG emissions.',
          sourceUrl:
            'https://www.jbs.cam.ac.uk/wp-content/uploads/2025/04/2025-04-cambridge-digital-mining-industry-report.pdf',
          note: 'Live tracker: Cambridge Bitcoin Electricity Consumption Index (CBECI) at ccaf.io/cbnsi/cbeci. Figures update daily.',
        },
      ],
    },
  ],
};
