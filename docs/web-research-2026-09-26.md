# Web Research & Catalog Enrichment — 2026-09-26

## Scope

This pass enriches the directory using current web sources while preserving explicit evidence states. Secondary directory listings are not treated as proof of provider pricing or quotas.

## Sources consulted

1. Public API Lists — https://public-api-lists.github.io/public-api-lists/api/all.json
   - Current snapshot: 837 entries.
   - Used as a secondary cross-check for provider names, categories, authentication, HTTPS, CORS, descriptions and discovery of public/keyless APIs.
   - Not treated as authoritative proof of pricing, quota, commercial license, uptime or account requirements.

2. Free APIs List 2026 — https://github.com/Spinov001-art/free-apis-list
   - Describes 200+ APIs intended to work without keys/OAuth/registration.
   - Used as a secondary source for rate-limit clues and keyless discovery.

3. Provider primary documentation
   - Current official documentation was checked for selected high-impact providers where concrete tier details were previously absent.
   - Primary-source research added current quota/licensing/rate-limit information for Algolia, Alchemy, Airtable, AssemblyAI, API Ninjas, Alpaca, AWS, Brave Search, Cohere, ElevenLabs and Cloudflare.

## Changes

- Provider catalog expanded from 669 to 869 records.
- 200 new keyless/public API candidates were added from the secondary public-API cross-check.
- Existing records were enriched where secondary sources supplied missing authentication, HTTPS, CORS or descriptions.
- Additional rate-limit metadata was added where a concrete figure was available.
- Selected provider tiers were verified against primary documentation.
- Catalog index and Student Mode were synchronized.

## Evidence states

- official-primary-source: current provider documentation supports the specific field.
- secondary-directory-crosscheck: an external directory supplied the field; primary verification remains pending.
- research-candidate / candidate: retained for discovery but not treated as fully verified.
- active: catalog entry is treated as active; this does not guarantee uptime or a free quota.
- catalog-only: preserved from a research table without independent verification.

## Current snapshot

- Providers: 869
- Categories: 139
- Free access recorded: 503
- No free tier recorded: 4
- Free status unresolved: 362
- Candidate records: 437
- Active records: 338

## What remains deliberately unknown

The web does not provide one authoritative source proving every provider's current quota, card requirement, commercial rights, regional availability, uptime, endpoint coverage or permanence of a free tier. Those fields remain unknown where evidence is insufficient rather than being fabricated.

The directory is therefore a research catalog with explicit evidence states, not a guarantee that every listed API is currently free or available.

## First-party evidence override layer — final pass

A separate data/web_verified_overrides.json layer now records current first-party evidence for high-impact providers where the canonical catalog previously lacked sufficiently specific fields. The website merges this layer at runtime without replacing the broader catalog.

Current first-party checks added for:
- Groq — official rate-limit documentation and API-key page.
- Google Gemini API — official pricing, billing and rate-limit documentation.
- Brave Search API — official plan and documentation pages.
- AssemblyAI — official pricing and free-signup/API-key documentation.
- OpenRouter — official pricing and documentation.
- Mistral AI — official quickstart/pricing information.
- NVIDIA NIM APIs — official API-key/catalog/documentation pages.
- Anthropic API — official API key, pricing and API documentation.

The override layer is deliberately additive: it never converts an unresolved field into a positive claim merely because a secondary directory lists the provider. Each override carries its source URLs and verification date.

## Important limitation

The broad web contains thousands of APIs and no single source reliably exposes every provider's current quota, card requirement, regional restrictions, commercial license, rate limits and uptime. Where first-party evidence could not be established, the directory continues to display an explicit unknown/unverified state rather than inventing a value.
