# Expansion research provenance — September 2026

## Scope

The directory was expanded from the existing 1,000-entry live discovery pool to a **2,500-entry live pool**.

The broad expansion snapshot contains **1,716 new providers** not already present in the curated provider catalog. They are stored in data/public_apis_expansion.json.

## Primary expansion source

- **public-apis/public-apis** — current GitHub snapshot used for the 1,716-entry broad expansion.
  - Source: https://github.com/public-apis/public-apis
  - Snapshot used: September 24, 2026
  - Unique source records parsed: 1,789
  - New records after deduplication against the repository's existing 576 provider names: 1,716
  - Authentication mix in the source snapshot: 874 no-auth, 768 API-key, 139 OAuth, plus a small number using other authentication labels.
  - The upstream project describes itself as a community-maintained list of free APIs.

## Independent cross-check sources

These sources were reviewed to check the breadth of the current free-API landscape and to identify current categories/provider patterns that should be reflected on the site:

- FreeAPIs / free-api.dev — current directory reports 2,270+ public APIs across 51 categories and states that its records come from the public-apis community dataset: https://free-api.dev/
- GetFreeAPIs — current directory reports 2,737 indexed APIs, with automated health checks and 58 categories: https://www.getfreeapis.com/
- Free API Keys — current directory reports 419+ free public APIs across 42 categories and exposes authentication filters: https://freeapikeys.org/
- Public API Lists — community-maintained free API directory with a JSON API: https://public-api-lists.github.io/public-api-lists/
- Postman Free Public APIs — current public collection for trying free APIs: https://www.postman.com/postman/free-public-apis/overview
- Free LLM API Hub — source-linked free-tier/trial LLM provider research used as an AI-specific cross-check: https://github.com/pacocartones/free-llm-api-hub
- Awesome Free LLM API — source-linked provider and quota research used as an AI-specific cross-check: https://github.com/ma-pony/awesome-free-llm-api

## Verification policy

The 1,716 broad expansion records are intentionally **not** represented as independently verified provider quotas.

Each expansion record is labeled:

- status: upstream-community
- verification_status: community-free-source
- verified_by: public-apis-community-source
- last_verified: null

For these records, the provider URL is retained as the primary navigation/documentation URL. Exact API-key minting pages, quota amounts, card requirements, expiry rules, commercial-use terms and current uptime remain explicitly unverified unless a provider is separately promoted into the curated verified catalog.

This distinction prevents the directory from turning a third-party/community listing into an unsupported claim about a provider's current commercial terms.

## Why the expansion is structured this way

The existing curated records have a much higher evidence standard: direct key-management links, official pricing/docs, verification dates and provider-side sources.

Applying that standard manually to 1,716 additional providers in a single bulk import would create a misleading appearance of verification. The expansion therefore prioritizes **breadth without fabricating certainty**, while preserving the curated layer for higher-confidence provider facts.

The live site deduplicates names and then fills the catalog up to 2,500 entries. The Finder, Compare, API profiles, project recommender, category browser and local key tracker all consume the expanded catalog.


## Second expansion source

- **Public API Lists** — current JSON index: https://public-api-lists.github.io/public-api-lists/api/all.json
  - Snapshot used: September 25, 2026
  - Source entries: 837
  - New entries after deduplication against the curated catalog and first expansion: **338**
  - These records are also labeled community-sourced and are not treated as independently verified provider quotas.


## Deep verification pass — 2026-09-26

This pass audited the canonical provider dataset for literal **Unverified**, **Unavailable**, and unresolved free-tier placeholders. Current first-party research was used to resolve a subset of high-confidence records and to distinguish three states: verified free/paid status, explicitly not-stated provider information, and entries requiring deeper provider review.

### First-party sources reviewed in this pass
- Cerebras Inference: https://www.cerebras.ai/inference and https://inference-docs.cerebras.ai/support/pricing
- Stability AI Developer Platform: https://platform.stability.ai/docs and https://platform.stability.ai/pricing
- AssemblyAI: https://support.assemblyai.com/articles/5370767329-can-i-sign-up-for-free and https://www.assemblyai.com/docs/faq/how-to-get-your-api-key
- Cartesia: https://www.cartesia.ai/pricing
- Weights & Biases: https://wandb.ai/site/pricing/
- Comet: https://www.comet.com/site/pricing/
- Turso: https://turso.tech/pricing
- Upstash QStash: https://upstash.com/pricing/qstash
- MongoDB Atlas: https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/ and https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/
- Brave Search API: https://api-dashboard.search.brave.com/app/plans and https://api-dashboard.search.brave.com/documentation/resources/help-feedback
- NASA APIs: https://api.nasa.gov/assets/html/authentication.html
- USGS APIs: https://www.usgs.gov/products/web-tools/apis and https://www.usgs.gov/faqs/what-usgs-policy-release-scientific-data-are-any-usgs-products-restricted
- NOAA NCEI APIs: https://www.ncei.noaa.gov/cdo-web/faq and https://www.ncei.noaa.gov/cdo-web/webservices/v2
- KEGG API: https://www.kegg.jp/kegg/rest/
- Leonardo AI API: https://www.leonardo.ai/api and https://docs.leonardo.ai/docs/getting-started
- Luma API: https://lumalabs.ai/api and https://lumalabs.ai/learning-hub/dream-machine-credit-system
- FriendliAI: https://friendli.ai/pricing
- WRITER: https://writer.com/plans/
- SambaNova Cloud: https://cloud.sambanova.ai/plans

### Important interpretation rule
A missing provider statement is no longer treated as evidence that a service is free, paid, card-free, or unlimited. Where the current official source does not state the value, the canonical record uses **Not publicly stated**; where the provider itself is not sufficiently resolved, it remains a research candidate.
