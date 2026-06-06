#!/usr/bin/env python3
"""
Fetch and cache raw content from all data sources used in energy_data.json.
Run this to refresh local copies without needing Claude or a search tool.

Usage:
    pip install requests
    python fetch_sources.py

Output: raw HTML/text saved to ./raw/ for manual verification.
"""

import os
import time
import requests

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "raw")
os.makedirs(OUTPUT_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (research bot; energy-viz project)"
}

SOURCES = [
    # --- Digital ---
    {
        "id": "iea_energy_ai",
        "url": "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
        "notes": "IEA Energy and AI — main AI + data centre figures",
    },
    {
        "id": "iea_streaming",
        "url": "https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines",
        "notes": "IEA streaming factcheck — corrected video streaming figures",
    },
    {
        "id": "carbonbrief_streaming",
        "url": "https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix/",
        "notes": "Carbon Brief Netflix factcheck",
    },
    {
        "id": "cambridge_cbeci",
        "url": "https://ccaf.io/cbnsi/cbeci",
        "notes": "Cambridge Bitcoin Electricity Consumption Index — live, updated daily",
    },
    {
        "id": "greenly_storage",
        "url": "https://greenly.earth/en-gb/blog/industries/what-is-the-carbon-footprint-of-data-storage",
        "notes": "Cloud storage carbon footprint — 3-7 kWh/GB figure",
    },
    {
        "id": "ecoflow_storage",
        "url": "https://www.ecoflow.com/us/blog/energy-cost-cloud-storage",
        "notes": "Cloud storage energy — per GB per month figures",
    },
    {
        "id": "davidmytton_5g",
        "url": "https://davidmytton.blog/how-much-energy-will-5g-consume/",
        "notes": "5G energy consumption analysis",
    },
    # --- Transport ---
    {
        "id": "iata_2024",
        "url": "https://www.iata.org/en/iata-repository/publications/economic-reports/2024-aviation-emissions-efficiency-gains-vs.-rising-totals",
        "notes": "IATA 2024 aviation emissions — 942 Mt CO2",
    },
    {
        "id": "ourworldindata_aviation",
        "url": "https://ourworldindata.org/global-aviation-emissions",
        "notes": "Our World in Data aviation emissions overview",
    },
    {
        "id": "atag_facts",
        "url": "https://atag.org/facts-figures",
        "notes": "Air Transport Action Group — per-flight figures",
    },
    # --- Agriculture ---
    {
        "id": "fao_livestock",
        "url": "https://www.fao.org/family-farming/detail/en/c/1634679/",
        "notes": "FAO livestock solutions for climate — 14.5% of global GHG",
    },
    {
        "id": "wri_beef",
        "url": "https://www.wri.org/insights/6-pressing-questions-about-beef-and-climate-change-answered",
        "notes": "WRI beef and climate — 3 Gt CO2e from beef alone",
    },
    {
        "id": "unfccc_foodwaste",
        "url": "https://unfccc.int/news/food-loss-and-waste-account-for-8-10-of-annual-global-greenhouse-gas-emissions-cost-usd-1-trillion",
        "notes": "UNFCCC food waste — 8-10% of global GHG",
    },
    {
        "id": "ourworldindata_foodwaste",
        "url": "https://ourworldindata.org/food-waste-emissions",
        "notes": "Our World in Data food waste emissions",
    },
    # --- Bushfires ---
    {
        "id": "nature_blacksummer",
        "url": "https://www.nature.com/articles/s41586-021-03712-y",
        "notes": "Nature: 715 Mt CO2 from Black Summer (may be paywalled)",
    },
    {
        "id": "climatecouncil_blacksummer",
        "url": "https://www.climatecouncil.org.au/resources/summer-of-crisis/",
        "notes": "Climate Council Summer of Crisis report",
    },
    {
        "id": "dcceew_bushfires",
        "url": "https://www.dcceew.gov.au/climate-change/publications/estimating-greenhouse-gas-emissions-from-bushfires-in-australias-temperate-forests-focus-on-2019-20",
        "notes": "Australian government bushfire GHG methodology",
    },
    # --- Industry ---
    {
        "id": "semafor_mining",
        "url": "https://www.semafor.com/article/03/10/2026/mining-metals-sector-account-for-11-of-global-emissions-report-finds",
        "notes": "Mining + metals = 11% of global GHG (2024 data)",
    },
    {
        "id": "wef_cement",
        "url": "https://www.weforum.org/stories/2024/09/cement-production-sustainable-concrete-co2-emissions/",
        "notes": "WEF cement emissions — 7-8% of global CO2",
    },
    # --- Consumer ---
    {
        "id": "earthorg_fashion",
        "url": "https://earth.org/fast-fashions-detrimental-effect-on-the-environment/",
        "notes": "Fast fashion environmental impact — 8-10% of global CO2",
    },
]


def fetch(source: dict) -> None:
    sid = source["id"]
    url = source["url"]
    out_path = os.path.join(OUTPUT_DIR, f"{sid}.html")

    print(f"Fetching {sid}...", end=" ", flush=True)
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        r.raise_for_status()
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(f"<!-- SOURCE: {sid} -->\n")
            f.write(f"<!-- URL: {url} -->\n")
            f.write(f"<!-- NOTES: {source['notes']} -->\n\n")
            f.write(r.text)
        print(f"OK ({len(r.text):,} chars) → raw/{sid}.html")
    except Exception as e:
        print(f"FAILED: {e}")


if __name__ == "__main__":
    print(f"Fetching {len(SOURCES)} sources into {OUTPUT_DIR}/\n")
    for source in SOURCES:
        fetch(source)
        time.sleep(1)  # polite crawl delay
    print("\nDone. Check raw/ directory.")
    print("Note: some sources (Nature, IATA PDFs) may be paywalled or JS-rendered.")
