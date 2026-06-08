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
          value: 2900,
          detail:
            'The single largest animal product contributor. Emissions come from methane (enteric fermentation), feed production, and land cleared for grazing. Per kg of protein produced, beef is around 20× more emissions-intensive than chicken.',
          source: 'FAO: Tackling Climate Change Through Livestock',
        },
        {
          name: 'Dairy cattle',
          value: 1400,
          detail:
            'Milk, cheese, butter and yoghurt. Dairy cattle emit methane similarly to beef cattle. Some emissions are shared with beef when dairy cows are slaughtered.',
          source: 'FAO: Tackling Climate Change Through Livestock',
        },
        {
          name: 'Food Waste',
          value: 3300,
          detail:
            '8–10% of global GHG. Around 3–4× aviation emissions. One-third of all food produced is wasted, and all the energy to grow, refrigerate, and transport it goes with it.',
          source: 'UNFCCC',
        },
        {
          name: 'Pigs',
          value: 640,
          detail:
            "Pork and pork products. Lower methane than ruminants (pigs don't ferment in the same way), but feed production and manure management contribute significant emissions.",
          source: 'FAO: Tackling Climate Change Through Livestock',
        },
        {
          name: 'Poultry',
          value: 570,
          detail:
            'Chicken, turkey, eggs. The least emissions-intensive of the major meats, roughly 6–7 kg CO₂e per kg compared to ~99 kg CO₂e per kg of beef.',
          source: 'FAO: Tackling Climate Change Through Livestock',
        },
        {
          name: 'Sheep & goats',
          value: 460,
          detail:
            'Like cattle, sheep and goats are ruminants and produce significant methane. Lamb has a high emissions intensity per kg, similar to beef.',
          source: 'FAO: Tackling Climate Change Through Livestock',
        },
        {
          name: 'Other livestock',
          value: 830,
          detail:
            'Buffalo, horses, aquaculture, and other animal products. Also includes emissions from manure management across all categories.',
          source: 'FAO: Tackling Climate Change Through Livestock',
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
        },
        {
          name: 'Cement & Concrete',
          value: 1470,
          detail:
            "~8% of global CO₂. Emissions tripled 1990–2020. Half comes from a chemical process that can't be avoided by switching fuels.",
          source: 'Statista / WEF 2024',
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
          source: 'Earth.org / Climateq',
        },
        {
          name: 'Aviation',
          value: 942,
          detail:
            '942 Mt CO₂ gross in 2024. Grew ~8% year-on-year. International flights = ~60% of total.',
          source: 'IATA 2024',
        },
        {
          name: 'Standby / Vampire Power',
          value: 370,
          detail:
            '~1% of global CO₂ and ~5% of global electricity (different metrics; electricity is lower-carbon on average). Equivalent to 15 million petrol cars running continuously just to power devices that appear to be off.',
          source: 'IEA',
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
          note: 'Converted: 415 TWh × 0.4 kg CO₂/kWh',
        },
        {
          name: 'Video Streaming',
          value: 100,
          detail:
            "Highly contested figure. Conservative estimate: ~250 TWh combined (Netflix external estimate ~94 TWh; YouTube lower-end estimate ~150 TWh). Video = 60–70% of all internet traffic. The Shift Project's widely-reported 2019 figures were overstated by ~30–50× and corrected by IEA and Carbon Brief.",
          source: 'IEA / Carbon Brief',
          note: 'Converted: ~250 TWh × 0.4 kg CO₂/kWh = ~100 Mt CO₂e. High uncertainty.',
        },
        {
          name: 'Bitcoin Mining',
          value: 40,
          detail: '138 TWh / 39.8 Mt CO₂e per Cambridge CBECI 2025 Digital Mining Industry Report.',
          source: 'Cambridge CBECI 2025',
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
