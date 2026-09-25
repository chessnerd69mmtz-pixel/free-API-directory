# Free API Directory

A maintained, open-source directory of API providers with free tiers, trials, or limited free access.

## Verification standard

This repository is deliberately conservative:

- API-key/token links point to the provider's key-management or key-minting page, not a generic homepage.
- Free-tier claims are only recorded when supported by an official provider pricing/docs page.
- Unknown details are written as `Unverified - check provider page` rather than guessed.
- Verified providers have `last_verified`, `verified_by`, source URLs, and a status. The September 2026 expansion also contains clearly marked `candidate` entries whose free-tier details still require provider-side verification.
- Entries older than 90 days are automatically flagged as **Needs re-verification**.
- A working key page does not imply that API usage is unlimited or that a payment method is unnecessary.

## Current catalog

The authoritative source is [data/providers.json](data/providers.json). Generated category tables are under [docs/providers](docs/providers).

Run locally:

```bash
python scripts/validate.py
python scripts/generate_tables.py
python scripts/check_links.py
```

No API keys are stored in this repository.

## Directory by criterion

The provider catalog is split into **36 practical criteria** including AI & Machine Learning, Coding & Developer Tools, Geospatial, Health, Finance, Data & Research, Jobs & Recruiting, Communication, Media, Weather, and more. Providers may appear in multiple criteria when their capabilities span several use cases.

**[Browse all criteria and tables →](docs/providers/criteria.md)**

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT


## Additional provider URLs

A URL-only catalog of additional providers imported from the supplied source list is maintained in [`data/provider_urls.json`](./data/provider_urls.json) and [`docs/providers/additional-urls.md`](./docs/providers/additional-urls.md). These entries intentionally do not make free-tier or verification claims.

## Developer tools

- [Find an API](finder.html) — search providers by capability and verified free-tier information.
- [Compare APIs](compare.html) — compare up to four providers without sending keys anywhere.
- [API profiles](api.html) — detailed provider pages with verification status, capabilities and generic code templates.
- [Verification history](changes.html) — official-source change monitoring and verification records.

The website never requires an API key belonging to the directory owner. Unknown provider facts remain explicitly marked as **Unverified**; candidate expansion entries are not presented as independently verified. The automated monitor uses only public provider pages and GitHub Actions' built-in repository token; it does not call provider APIs on the site's behalf.


## September 2026 expansion

The catalog now contains **576 unique provider records**. The latest expansion added **237 previously absent providers** from a 250-entry candidate pool; 13 names were already present and were deduplicated. Candidate entries are intentionally marked **candidate / candidate-unverified** until their current free access, key page, pricing, and limits are checked against official provider sources.
