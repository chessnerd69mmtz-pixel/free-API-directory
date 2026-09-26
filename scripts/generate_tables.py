#!/usr/bin/env python3
"""Generate the API directory's cross-listed criterion tables."""
import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PRIMARY = json.loads((ROOT / "data/providers.json").read_text(encoding="utf-8"))
ADDITIONAL = json.loads((ROOT / "data/provider_urls.json").read_text(encoding="utf-8"))
EXPANSION_RAW = json.loads((ROOT / "data/public_apis_expansion.json").read_text(encoding="utf-8")).get("providers", [])
LISTS_EXPANSION_RAW = json.loads((ROOT / "data/public_api_lists_expansion.json").read_text(encoding="utf-8")).get("providers", [])
EXPANSION = [{
    "name": p["name"], "category": p["category"], "description": p["description"],
    "signup_url": p["provider_url"], "pricing_url": "Unavailable",
    "documentation_url": p["provider_url"],
    "free_tier": {"has_free_tier": True, "type": "community-listed-free",
                   "details": "Community-listed free public API; verify current provider terms before use.",
                   "amount": "Not independently quantified", "expiry": "Not independently verified"},
    "requires_credit_card": "Unverified", "uses": [p["category"], p["description"]],
    "status": "upstream-community", "verification_status": "community-free-source",
    "verification_sources": {"provider": p["provider_url"],
                             "source_1": "https://github.com/public-apis/public-apis/blob/master/README.md"}
} for p in EXPANSION_RAW]
_seen = set()
PROVIDERS = []
for p in PRIMARY + ADDITIONAL + EXPANSION + [{
    "name": p["name"], "category": p["category"], "description": p["description"],
    "signup_url": p["provider_url"], "pricing_url": "Unavailable",
    "documentation_url": p["provider_url"],
    "free_tier": {"has_free_tier": True, "type": "community-listed-free", "details": "Community-listed free public API; verify current provider terms.", "amount": "Not independently quantified", "expiry": "Not independently verified"},
    "requires_credit_card": "Unverified", "uses": [p["category"], p["description"]],
    "status": "upstream-community", "verification_status": "community-free-source",
    "verification_sources": {"provider": p["provider_url"], "source_1": "https://public-api-lists.github.io/public-api-lists/"}
} for p in LISTS_EXPANSION_RAW]:
    key = str(p["name"]).strip().lower()
    if key in _seen: continue
    _seen.add(key)
    PROVIDERS.append(p)

PUBLIC_EXTRA = [
    ("Animals", "animals"), ("Anime", "anime"), ("Anti-Malware", "anti-malware"),
    ("Art & Design", "art-and-design"), ("Authentication & Authorization", "authentication-and-authorization"),
    ("Books & Literature", "books"), ("Business", "business"), ("Calendar & Time", "calendar"),
    ("Cloud Storage & File Sharing", "cloud-storage-and-file-sharing"), ("Dictionaries", "dictionaries"),
    ("Documents & Productivity", "documents-and-productivity"), ("Entertainment", "entertainment"),
    ("Events", "events"), ("Open Data", "open-data"), ("Open Source Projects", "open-source-projects"),
    ("Patent & Intellectual Property", "patent"), ("Personality", "personality"),
    ("Phone & SMS Utilities", "phone"), ("Photography", "photography"), ("Programming", "programming"),
    ("Science & Math", "science-and-math"), ("Shopping", "shopping"), ("Test Data", "test-data"),
    ("Text Analysis", "text-analysis"), ("Tracking & Logistics", "tracking"),
    ("URL Shorteners", "url-shorteners"), ("Vehicle & Auto", "vehicle"), ("Video", "video")
]

CRITERIA = [
    ("AI & Machine Learning", "ai-and-machine-learning"),
    ("Blockchain & Web3", "blockchain-and-web3"),
    ("Coding & Developer Tools", "coding-and-developer-tools"),
    ("Communication, Email & SMS", "communication-email-and-sms"),
    ("Data, Research & Public Data", "data-research-and-public-data"),
    ("E-commerce & Shopping", "e-commerce-and-shopping"),
    ("Finance, Crypto & Economics", "finance-crypto-and-economics"),
    ("Food & Nutrition", "food-and-nutrition"),
    ("Gaming", "gaming"),
    ("Geospatial, Maps & Location", "geospatial-maps-and-location"),
    ("Health & Fitness", "health-and-fitness"),
    ("Images, Media & Video", "images-media-and-video"),
    ("IoT", "iot"),
    ("Jobs & Recruiting", "jobs-and-recruiting"),
    ("Miscellaneous & Utilities", "miscellaneous-and-utilities"),
    ("Music & Entertainment", "music-and-entertainment"),
    ("News & Content", "news-and-content"),
    ("Payments", "payments"),
    ("Real Estate", "real-estate"),
    ("Search, Web & Scraping", "search-web-and-scraping"),
    ("Security & Threat Intelligence", "security-and-threat-intelligence"),
    ("Social Media", "social-media"),
    ("Sports", "sports"),
    ("Translation & Language", "translation-and-language"),
    ("Travel & Transportation", "travel-and-transportation"),
    ("Weather & Environment", "weather-and-environment"),
]
CRITERIA.extend(PUBLIC_EXTRA)
CRITERIA.extend([
    ("AI Observability & Evaluation", "ai-observability-and-evaluation"),
    ("AI Compute & GPU", "ai-compute-and-gpu"),
    ("Databases & Backend", "databases-and-backend"),
    ("Vector Databases", "vector-databases"),
    ("CI/CD & DevOps", "ci-cd-and-devops"),
    ("Web Scraping & Browser Automation", "web-scraping-and-browser-automation"),
    ("Geospatial & Routing", "geospatial-and-routing"),
    ("Scientific Research", "scientific-research"),
    ("Bioinformatics", "bioinformatics"),
    ("Government & Civic Data", "government-and-civic-data"),
])

AI_CROSS = {"OpenAI API","Anthropic API","Google Gemini API","Groq","Mistral AI","DeepSeek API","xAI API","OpenRouter","Hugging Face","Cohere","NVIDIA NIM APIs","Replicate","DeepInfra","Perplexity API","Together AI","Fireworks AI","AI21 Labs","AssemblyAI (speech-to-text)","Clarifai (vision)","Roboflow (vision)","Stability AI","Jina AI","Baseten","Modal","RunPod","Voyage AI (embeddings)","Wit.ai (Meta)","Dialogflow (Google)","Google Cloud Natural Language","Google Cloud Vision API","Amazon Comprehend","Amazon Polly","Amazon Rekognition","Amazon Transcribe","IBM Watson (Cloud)"}
CODING_CROSS = {"OpenAI API","Anthropic API","Google Gemini API","Groq","Mistral AI","DeepSeek API","xAI API","OpenRouter","Hugging Face","Cohere","NVIDIA NIM APIs","Replicate","DeepInfra","Perplexity API","Together AI","Fireworks AI","AI21 Labs","Jina AI","Baseten","Modal","RunPod","Voyage AI (embeddings)"}
MEDIA_CROSS = {"OpenAI API","Anthropic API","Google Gemini API","Hugging Face","NVIDIA NIM APIs","Replicate","fal.ai","Stability AI","DeepAI","Amazon Rekognition","Google Cloud Vision API","Clarifai (vision)","Roboflow (vision)","Deepgram","ElevenLabs","AssemblyAI (speech-to-text)","Amazon Polly","Amazon Transcribe","Cloudinary","Pexels API","Pixabay API","Unsplash API","Giphy API","Flickr API","Getty Images API","Shutterstock API","500px API","OCR.space","Imagga","remove.bg","TinyPNG API","Adobe Stock API","Mux API","Twitch API","Vimeo API","YouTube Data API"}
SEARCH_CROSS = {"OpenAI API","Anthropic API","Google Gemini API","Perplexity API","Tavily","SerpApi","Jina AI","Diffbot","Algolia Search","Google Custom Search API","Bing Web Search API","Bing News Search API","Bright Data","ScraperAPI","ScrapingBee","Reddit API"}
RESEARCH_CROSS = {"OpenAI API","Anthropic API","Google Gemini API","Perplexity API","Tavily","Jina AI","Hugging Face","Cohere","CMS.gov Data API","openFDA API","Fitbit API","Human API","Strava API","Withings API","CDC Data API","WHO API","NASA Open APIs","NASA Exoplanet Archive","GBIF (biodiversity)","PubMed E-utilities","OpenAlex","Semantic Scholar API","CrossRef API","arXiv API","Figshare API","Kaggle API","Zenodo API","Wikidata API","Wikipedia API","US Census Bureau API","USGS Earthquake API","data.gov","data.world","Eurostat API","data.europa.eu","UK data.gov.uk","World Bank API"}
TRANSLATION_CROSS = {"OpenAI API","Anthropic API","Google Gemini API","Cohere","Mistral AI","DeepL API","Google Cloud Translation","LibreTranslate","Lingva/Yandex Translate","Microsoft Translator","Amazon Translate","IBM Watson Language Translator","Systran"}
PAYMENTS_CROSS = {"Stripe (test keys)","PayPal API","Square API","Adyen API","Braintree API","Razorpay API","Plaid (banking)"}
ECOMMERCE_CROSS = {"Amazon Product Advertising API","BigCommerce API","eBay API","Etsy API","Shopify Admin API","WooCommerce REST API","PayPal API","Square API"}
GEO_CROSS = {"Google Maps Platform","HERE API","TomTom Maps","Bing Maps API","Foursquare Places API","Geoapify","OpenCage Geocoding","Positionstack","LocationIQ","MapTiler","Mapbox","Nominatim (OpenStreetMap)","GeoNames","Geocodio","Radar.io","SmartyStreets","ip-api.com","IPinfo","ipstack","Abstract API (geolocation)","IPGeolocation.io"}
SECURITY_CROSS = {"AbuseIPDB","Censys API","Have I Been Pwned API","Shodan API","URLScan.io","VirusTotal API","IPQualityScore","Clearout (email verification)","Kickbox (email verification)","NumVerify (phone validation)","ZeroBounce"}
SOCIAL_CROSS = {"Discord API","Facebook Graph API","Instagram Graph API","LinkedIn API","Mastodon API","Pinterest API","Telegram Bot API","TikTok for Developers","X (Twitter) API","Reddit API"}
SPORTS_CROSS = {"API-Football","API-Baseball","API-Basketball","balldontlie (NBA)","football-data.org","Sportradar","TheSportsDB","MySportsFeeds","SportsDataIO"}
FOOD_CROSS = {"Open Food Facts API","TheCocktailDB","TheMealDB","Yelp Fusion API","Edamam (nutrition/recipes)","Nutritionix API","Spoonacular (recipes)"}
GAMING_CROSS = {"Battle.net API","Riot Games API","Steam Web API","IGDB (games)","RAWG (video games)"}
MUSIC_CROSS = {"Spotify Web API","Apple Music API","Deezer API","Jamendo API","Musixmatch API","SoundCloud API","TheAudioDB","Discogs API","Genius API","Last.fm API","OMDb API","TMDB (movies)","IGDB (games)","RAWG (video games)"}
TRAVEL_CROSS = {"AeroDataBox","Amadeus for Developers","Aviationstack","Booking.com API","Lyft API","Rome2Rio API","Skyscanner API","TripAdvisor Content API","Uber API"}
WEATHER_CROSS = {"OpenWeather","OpenWeatherMap","AccuWeather API","Meteomatics","NOAA Weather API","Tomorrow\\.io","Visual Crossing","WeatherAPI.com","Weatherbit","Ambee (environment)","Foreca","Meteoblue","Open-Meteo","StormGlass (marine)","Weatherstack","Xweather (Aeris)","OpenAQ (air quality)","World Air Quality Index"}
JOBS_CROSS = {"Adzuna API","Indeed Publisher API","Jooble API","USAJobs API"}
DEV_CROSS = {"GitHub API","GitLab API","Postman API Platform","RapidAPI Marketplace","Supabase","Firebase","Vercel API","Netlify API","Render","Railway","Heroku Platform API","DigitalOcean API","Cloudflare API","AWS (free tier)","MongoDB Atlas","Neon (Postgres)","PlanetScale","Redis Cloud","Upstash","Sentry","Auth0"}
MISC_CROSS = {"Bitly API","TinyURL API","Calendarific (holidays)","JSONPlaceholder (fake data)","Mockaroo","RandomUser.me","QR Code API (goqr.me)","Random.org API","Zippopotam.us (zip codes)","Wolfram Alpha API","Clearbit"}

def assign(p):
    n, c = p["name"], p["category"]
    s = set()
    if c.startswith("AI /"): s.add("AI & Machine Learning")
    if c.startswith("Dev Tools /"): s.add("Coding & Developer Tools")
    if c.startswith("Blockchain"): s.add("Blockchain & Web3")
    if c.startswith("Email") or c == "SMS / Communications": s.add("Communication, Email & SMS")
    if c.startswith("Finance"): s.add("Finance, Crypto & Economics")
    if c == "Food": s.add("Food & Nutrition")
    if c == "Gaming": s.add("Gaming")
    if c.startswith("Health"): s.add("Health & Fitness")
    if c.startswith("Images /") or c == "Video / Streaming": s.add("Images, Media & Video")
    if c == "IoT": s.add("IoT")
    if c == "Jobs / Recruiting": s.add("Jobs & Recruiting")
    if c.startswith("Maps /"): s.add("Geospatial, Maps & Location")
    if c.startswith("Music /"): s.add("Music & Entertainment")
    if c.startswith("News"): s.add("News & Content")
    if c.startswith("Payments"): s.add("Payments")
    if c == "Real Estate": s.add("Real Estate")
    if c.startswith("Search /"): s.add("Search, Web & Scraping")
    if c.startswith("Security"): s.add("Security & Threat Intelligence")
    if c == "Social Media": s.add("Social Media")
    if c.startswith("Sports"): s.add("Sports")
    if c.startswith("Translation"): s.add("Translation & Language")
    if c.startswith("Travel"): s.add("Travel & Transportation")
    if c.startswith("Weather"): s.add("Weather & Environment")
    if c.startswith("Public /") or c == "Analytics": s.add("Data, Research & Public Data")
    if c == "E-commerce / Shopping": s.add("E-commerce & Shopping")
    if not s: s.add("Miscellaneous & Utilities")
    for names, criterion in [
        (AI_CROSS,"AI & Machine Learning"),(CODING_CROSS,"Coding & Developer Tools"),
        (MEDIA_CROSS,"Images, Media & Video"),(SEARCH_CROSS,"Search, Web & Scraping"),
        (RESEARCH_CROSS,"Data, Research & Public Data"),(TRANSLATION_CROSS,"Translation & Language"),
        (PAYMENTS_CROSS,"Payments"),(ECOMMERCE_CROSS,"E-commerce & Shopping"),
        (GEO_CROSS,"Geospatial, Maps & Location"),(SECURITY_CROSS,"Security & Threat Intelligence"),
        (SOCIAL_CROSS,"Social Media"),(SPORTS_CROSS,"Sports"),(FOOD_CROSS,"Food & Nutrition"),
        (GAMING_CROSS,"Gaming"),(MUSIC_CROSS,"Music & Entertainment"),(TRAVEL_CROSS,"Travel & Transportation"),
        (WEATHER_CROSS,"Weather & Environment"),(JOBS_CROSS,"Jobs & Recruiting"),(DEV_CROSS,"Coding & Developer Tools"),
        (MISC_CROSS,"Miscellaneous & Utilities")]:
        if n in names: s.add(criterion)
    return s

def link(p, tier=False):
    if tier:
        return p.get("pricing_url") or p.get("tier_verification_url") or p.get("url")
    return p.get("signup_url") or p.get("url")

def main():
    out = ROOT / "docs/providers/criteria"
    out.mkdir(parents=True, exist_ok=True)
    by = defaultdict(list)
    for p in PROVIDERS:
        for criterion in assign(p):
            by[criterion].append(p)
    for criterion in by:
        by[criterion].sort(key=lambda p: p["name"].lower())
    for label, slug in CRITERIA:
        rows = [f"# {label}", "", f"**{len(by[label])} providers in this criterion**", "",
                "| Provider | Original Category | Provider / API-key URL | Tier / pricing URL | Major Functions & Capabilities |",
                "|---|---|---|---|---|"]
        for p in by[label]:
            uses = "<br>".join(p.get("uses", ["See provider documentation"])).replace("|", "\\|")
            rows.append(f'| {p["name"].replace("|","\\|")} | {p["category"]} | [Open]({link(p)}) | [Check tiers]({link(p, True)}) | {uses} |')
        (out / f"{slug}.md").write_text("\n".join(rows) + "\n", encoding="utf-8")
    print(f"Generated {len(CRITERIA)} criterion tables for {len(PROVIDERS)} unique providers.")

if __name__ == "__main__":
    main()
