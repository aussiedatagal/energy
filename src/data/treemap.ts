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
          value: 3001,
          detail:
            'The single largest animal product contributor. Emissions come from methane (enteric fermentation), feed production, and land cleared for grazing. Per kg of protein produced, beef is around 20× more emissions-intensive than chicken.',
          source: 'Climate Trace 2024 / JavaForge',
          quote:
            'Beef accounts for 41% of total livestock emissions. Applied to 2024 global agriculture sector: 7,320 Mt CO₂e (Climate Trace).',
          sourceUrl: 'https://climatetrace.org/data',
          source2: 'JavaForge Livestock Emissions Analysis',
          quote2: 'Beef: 41% of total livestock emissions',
          sourceUrl2:
            'https://javaforge.com/livestock-emissions-explained-key-numbers-sources-and-solutions/',
        },
        {
          name: 'Dairy cattle',
          value: 1464,
          detail:
            'Milk, cheese, butter and yoghurt. Dairy cattle emit methane similarly to beef cattle. Some emissions are shared with beef when dairy cows are slaughtered.',
          source: 'Climate Trace 2024 / JavaForge',
          quote:
            "Cow's milk accounts for 20% of total livestock emissions. Applied to 2024 global agriculture sector: 7,320 Mt CO₂e (Climate Trace).",
          sourceUrl: 'https://climatetrace.org/data',
          source2: 'JavaForge Livestock Emissions Analysis',
          quote2: "Cow's milk: 20% [of total livestock emissions]",
          sourceUrl2:
            'https://javaforge.com/livestock-emissions-explained-key-numbers-sources-and-solutions/',
        },
        {
          name: 'Food Waste',
          value: 3300,
          detail:
            '8–10% of global GHG. Around 3–4× aviation emissions. One-third of all food produced is wasted, and all the energy to grow, refrigerate, and transport it goes with it.',
          source: 'FAO (via Climate Central)',
          quote:
            'Without accounting for greenhouse gas emissions from land use change, the carbon footprint of food produced and not eaten is estimated at 3.3 Gigatons of CO2 equivalent.',
          sourceUrl:
            'https://www.climatecentral.org/news/food-waste-worsens-greenhouse-gas-emissions-fao-16498',
        },
        {
          name: 'Pigs',
          value: 659,
          detail:
            "Pork and pork products. Lower methane than ruminants (pigs don't ferment in the same way), but feed production and manure management contribute significant emissions.",
          source: 'Climate Trace 2024 / JavaForge',
          quote:
            'Pig meat accounts for 9% of total livestock emissions. Applied to 2024 global agriculture sector: 7,320 Mt CO₂e (Climate Trace).',
          sourceUrl: 'https://climatetrace.org/data',
          source2: 'JavaForge Livestock Emissions Analysis',
          quote2: 'Pig meat: 9% [of total livestock emissions]',
          sourceUrl2:
            'https://javaforge.com/livestock-emissions-explained-key-numbers-sources-and-solutions/',
        },
        {
          name: 'Poultry',
          value: 586,
          detail:
            'Chicken, turkey, eggs. The least emissions-intensive of the major meats, roughly 6–7 kg CO₂e per kg compared to ~99 kg CO₂e per kg of beef.',
          source: 'Climate Trace 2024 / JavaForge',
          quote:
            'Chicken meat and eggs account for 8% of total livestock emissions. Applied to 2024 global agriculture sector: 7,320 Mt CO₂e (Climate Trace).',
          sourceUrl: 'https://climatetrace.org/data',
          source2: 'JavaForge Livestock Emissions Analysis',
          quote2: 'Chicken meat and eggs: 8% [of total livestock emissions]',
          sourceUrl2:
            'https://javaforge.com/livestock-emissions-explained-key-numbers-sources-and-solutions/',
        },
        {
          name: 'Sheep & goats',
          value: 439,
          detail:
            'Like cattle, sheep and goats are ruminants and produce significant methane. Lamb has a high emissions intensity per kg, similar to beef.',
          source: 'Climate Trace 2024 / JavaForge',
          quote:
            'Small ruminant products account for 6% of total livestock emissions. Applied to 2024 global agriculture sector: 7,320 Mt CO₂e (Climate Trace).',
          sourceUrl: 'https://climatetrace.org/data',
          source2: 'JavaForge Livestock Emissions Analysis',
          quote2:
            'Small ruminant products (e.g., sheep and goat): 6% [of total livestock emissions]',
          sourceUrl2:
            'https://javaforge.com/livestock-emissions-explained-key-numbers-sources-and-solutions/',
        },
        {
          name: 'Other livestock',
          value: 1171,
          detail:
            'Buffalo, horses, aquaculture, and other animal products. Also includes emissions from manure management across all categories.',
          source: 'Climate Trace 2024 / JavaForge',
          quote:
            'Buffalo milk and meat account for 8% of total livestock emissions, and other poultry and non-edible outputs account for the remaining 8%. Applied to 2024 global agriculture sector: 7,320 Mt CO₂e (Climate Trace).',
          sourceUrl: 'https://climatetrace.org/data',
          source2: 'JavaForge Livestock Emissions Analysis',
          quote2:
            'Buffalo milk and meat: 8%... Other poultry and non-edible outputs make up the remaining share [8%]',
          sourceUrl2:
            'https://javaforge.com/livestock-emissions-explained-key-numbers-sources-and-solutions/',
        },
      ],
    },
    {
      name: 'Industry',
      color: '#ffa657',
      children: [
        {
          name: 'Mining & Metals',
          value: 4500,
          detail:
            '11% of global GHG in 2024. Steel, aluminium, and coal mining = 93% of sector. Asia = 80% of emissions.',
          source: 'IndexBox / Semafor 2026',
          quote:
            'The global mining and metals sector was responsible for 11% of total greenhouse gas emissions in 2024.',
          sourceUrl:
            'https://www.indexbox.io/blog/mining-and-metals-emissions-data-11-of-global-ghg-in-2024-steel-leads/',
        },
        {
          name: 'Cement & Concrete',
          value: 1470,
          detail:
            "~8% of global CO₂. Emissions tripled 1990–2020. Half comes from a chemical process that can't be avoided by switching fuels.",
          source: 'Statista / WEF 2024',
          quote:
            'Global emissions from the manufacture of cement stood at 1.47 billion metric tons of carbon dioxide (MtCO₂) in 2024.',
          sourceUrl:
            'https://www.statista.com/statistics/1299532/carbon-dioxide-emissions-worldwide-cement-manufacturing/',
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
            '8–10% of global CO₂. More than aviation and shipping combined. Projected 26% of global emissions by 2050 unchanged.',
          source: 'Earth.org',
          quote:
            'Fashion production comprises 10% of total global carbon emissions, as much as the emissions generated by the European Union.',
          sourceUrl: 'https://earth.org/fast-fashions-detrimental-effect-on-the-environment/',
        },
        {
          name: 'Aviation',
          value: 942,
          detail:
            '942 Mt CO₂ gross in 2024. Grew ~8% year-on-year. International flights = ~60% of total.',
          source: 'IATA 2024',
          quote: 'In 2024, airlines emitted a gross total of 942 million tonnes of CO2.',
          sourceUrl:
            'https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals',
        },
        {
          name: 'Standby / Vampire Power',
          value: 370,
          detail:
            '~1% of global CO₂ and 1–2% of global electricity (different metrics; electricity is lower-carbon on average). Equivalent to 15 million petrol cars running continuously just to power devices that appear to be off.',
          source: 'IEA',
          quote:
            'The global energy consumption from standby has been estimated by the International Energy Agency (IEA) at between 200 TWh and 400 TWh per year, which is equivalent to 1% to 2% of global electricity.',
          sourceUrl: 'https://www.iea.org/news/switched-off-but-not-unplugged',
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
            'Every website, streaming service, social media feed, cloud backup, email, and online game runs on servers in data centres. 415 TWh globally in 2024, ~1.5% of all electricity. US + China = 69% of total. Projected to double by 2030.',
          source: 'IEA Energy and AI 2024',
          quote:
            'With an estimated 182 million tons of CO₂ associated with 460 terawatt hours (TWh) of electricity generation for global data centers in 2024',
          sourceUrl: 'https://doi.org/10.1016/j.patter.2025.101430',
          note: 'Converted: 415 TWh × 0.4 kg CO₂/kWh',
        },
        {
          name: 'Video Streaming',
          value: 100,
          detail:
            "Highly contested figure. Conservative estimate: ~250 TWh combined (Netflix external estimate ~94 TWh; YouTube lower-end estimate ~150 TWh). Video = 60–70% of all internet traffic. The Shift Project's widely-reported 2019 figures were overstated by ~30–50× and corrected by IEA and Carbon Brief.",
          source: 'IEA / Carbon Brief',
          quote: 'Netflix streaming consumes around 94 terawatt hours (TWh) per year.',
          sourceUrl:
            'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines',
          note: 'Converted: ~250 TWh × 0.4 kg CO₂/kWh = ~100 Mt CO₂e. High uncertainty.',
        },
        {
          name: 'Bitcoin Mining',
          value: 40,
          detail: '138 TWh / 39.8 Mt CO₂e per Cambridge CBECI 2025 Digital Mining Industry Report.',
          source: 'Cambridge CBECI 2025',
          quote:
            'Annualised Total Bitcoin Footprints: 112.96 Mt CO2 (Comparable to the carbon footprint of Czech Republic)',
          sourceUrl: 'https://digiconomist.net/bitcoin-energy-consumption/',
        },
        {
          name: 'All AI Queries',
          value: 6,
          detail:
            'All generative AI queries globally in 2025: ChatGPT, image generation, code assistants, everything. Projected 347 TWh by 2030.',
          source: 'IEA Energy and AI 2025',
          note: 'Converted: 15 TWh × 0.4 kg CO₂/kWh',
          highlight: true,
        },
      ],
    },
  ],
};
