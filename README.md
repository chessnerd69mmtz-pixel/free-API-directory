# Free API Directory

A maintained, open-source directory of API providers with free tiers, trials, or limited free access.

## Verification standard

This repository is deliberately conservative:

- API-key/token links point to the provider's key-management or key-minting page, not a generic homepage.
- Free-tier claims are only recorded when supported by an official provider pricing/docs page.
- Unknown details are written as `Not publicly stated` rather than guessed.
- Verified providers have `last_verified`, `verified_by`, source URLs, and a status. The September 2026 expansion also contains clearly marked `candidate` entries whose free-tier details still require provider-side verification.
- Entries older than 90 days are automatically flagged as **Needs re-verification**.
- A working key page does not imply that API usage is unlimited or that a payment method is unnecessary.

## Current catalog

The authoritative runtime source is [data/providers.json](data/providers.json). The website uses the same committed local catalog on every page. The current catalog contains **869 providers**, supporting the public-facing **850+ API providers** claim. Source-listed records remain distinguishable from independently verified provider facts. Generated category tables are under [docs/providers](docs/providers).

Run locally:

```bash
python scripts/validate.py
python scripts/generate_tables.py
python scripts/check_links.py
```

No API keys are stored in this repository.

## Directory by criterion

The provider catalog is split into **149 generated browse categories** including AI & Machine Learning, Coding & Developer Tools, Geospatial, Health, Finance, Data & Research, Jobs & Recruiting, Communication, Media, Weather, and more. Providers may appear in multiple criteria when their capabilities span several use cases.

**[Browse all criteria and tables →](docs/providers/criteria.md)**

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT


## Additional provider URLs

A URL-only catalog of additional providers imported from the supplied source list is maintained in [`data/provider_urls.json`](./data/provider_urls.json) and [`docs/providers/additional-urls.md`](./docs/providers/additional-urls.md). These entries intentionally do not make free-tier or verification claims.

## Developer tools

- [Find an API](finder.html) — search providers with free-tier, card, category, verification and explicit-region filters.
- [Find the Best API Provider](recommend.html) — describe role, objective and constraints and receive up to 10 explainable matches.
- [Build an API Stack](stack.html) — assemble a multi-category starting stack for a project.
- [Free-Tier Calculator](calculator.html) — compare requested volume with documented allowance information without inventing unknown quotas.
- [Compare APIs](compare.html) — compare providers without sending keys to the directory.
- [API profiles](api.html) — inspect provider capabilities, source links and verification.
- [API Playground](playground.html) — prepare browser HTTP requests where provider CORS permits them.
- [Code Generator](code.html) — generate generic Python, JavaScript and cURL starter requests.
- [My API Collections](collections.html) — save personal provider shortlists locally.
- [Verification / Health](health.html) — inspect verification freshness; scheduled GitHub Actions check public source URLs.
- [API Security Center](security.html) — key-handling and secret-management guidance.
- [Submit an API](submit.html) — create a local review submission without automatically changing the catalog.
- [Student Mode](student.html) — student-focused free and research API discovery.
- [Verification history](changes.html) — review catalog verification records.


## September 2026 expansion

The public-facing directory now uses a conservative **850+ API providers** claim. The catalog includes independently maintained records plus a researched student-friendly API table. Community/source-listed records remain clearly distinguished from independently verified quotas, card requirements, commercial terms and current uptime.

The student-friendly table is published at [`docs/student-friendly-free-apis.md`](./docs/student-friendly-free-apis.md). A dedicated [`Student Mode`](./student.html) separates free/keyless APIs, free API-key tiers, research/academic APIs, research-key providers, student-project APIs, and records needing verification. It includes 200 provider/key or documentation destinations and a research-notes section for known status changes.