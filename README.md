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

The authoritative runtime source is [data/providers.json](data/providers.json). The website uses the same committed local catalog on every page. The current catalog contains **669 providers**, supporting the public-facing **650+ API providers** claim. Source-listed records remain distinguishable from independently verified provider facts. Generated category tables are under [docs/providers](docs/providers).

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

- [Find an API](finder.html) — search providers with free-tier, card, category and verification filters.
- [Find the Best API Provider](recommend.html) — describe your role, objective and constraints and receive up to 10 explainable provider matches ordered by documented fit.
- [Compare APIs](compare.html) — compare up to four providers without sending keys anywhere.
- [API profiles](api.html) — detailed provider pages with verification status, capabilities and generic code templates.
- [Verification history](changes.html) — official-source change monitoring and verification records.

The website never requires an API key belonging to the directory owner. Unknown provider facts remain explicitly marked as **Not publicly stated**; source-listed/candidate expansion entries are not presented as independently verified. The automated monitor uses only public provider pages and GitHub Actions' built-in repository token; it does not call provider APIs on the site's behalf.


## September 2026 expansion

The public-facing directory now uses a conservative **650+ API providers** claim. The catalog includes independently maintained records plus a researched student-friendly API table. Community/source-listed records remain clearly distinguished from independently verified quotas, card requirements, commercial terms and current uptime.

The student-friendly table is published at [`docs/student-friendly-free-apis.md`](./docs/student-friendly-free-apis.md). A dedicated [`Student Mode`](./student.html) separates free/keyless APIs, free API-key tiers, research/academic APIs, research-key providers, student-project APIs, and records needing verification. It includes 200 provider/key or documentation destinations and a research-notes section for known status changes.