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

The authoritative runtime source is [data/providers.json](data/providers.json). The website uses the same committed local catalog on every page. The current catalog contains **2,715 unique providers** across **150 categories**. The canonical catalog, profile catalog, URL index and browse index are regenerated from the same merged provider pool. Source-listed records remain distinguishable from independently verified provider facts. Generated category tables are under [docs/providers](docs/providers).

Run locally:

```bash
python scripts/validate.py
python scripts/generate_tables.py
python scripts/check_links.py
```

No API keys are stored in this repository.

## Directory by criterion

The provider catalog is split into **150 generated browse categories** including AI & Machine Learning, Coding & Developer Tools, Geospatial, Health, Finance, Data & Research, Jobs & Recruiting, Communication, Media, Weather, and more. Providers may appear in multiple criteria when their capabilities span several use cases.

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
- [Free-Tier Calculator](calculator.html) — compare requests, token throughput, provider units and credit balances against structured, source-linked allowance evidence. Model-specific/account-specific limits remain explicitly unknown, and community/source-listed records are visibly marked rather than treated as official facts.
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

The public-facing directory now uses a conservative **2,700+ API providers** claim. The catalog includes the curated records plus maintained community-source expansion records; community-source records are explicitly labeled and are not presented as independently verified free-tier facts. Community/source-listed records remain clearly distinguished from independently verified quotas, card requirements, commercial terms and current uptime.

The student-friendly table is published at [`docs/student-friendly-free-apis.md`](./docs/student-friendly-free-apis.md). A dedicated [`Student Mode`](./student.html) separates free/keyless APIs, free API-key tiers, research/academic APIs, research-key providers, student-project APIs, and records needing verification. It includes 200 provider/key or documentation destinations and a research-notes section for known status changes.

### Current first-party evidence layer

The site also loads `data/web_verified_overrides.json`, a source-linked evidence layer for high-impact providers. It supplements (rather than silently overwrites) the broad catalog with current first-party pricing, quota, rate-limit and access information where directly documented. Each record carries its source URLs and verification date. Unresolved fields remain explicitly unverified.

### Free-limit evidence standard

The calculator uses a separate [`data/free_limit_evidence.json`](data/free_limit_evidence.json) layer so a provider can have multiple independent limits without forcing them into one misleading monthly number. Evidence records identify the source type and verification date. Official documentation is marked **Official source**; information inherited from community/source lists is marked **From community / source-listed**. A missing numeric value is deliberately shown as **Not publicly stated** rather than converted into zero or an estimate.

For quota research, the directory distinguishes recurring allowances (for example requests/day or credits/month), one-time introductory credits, throughput limits (RPM/TPM), and provider-specific units. Where a provider publishes model- or account-dependent limits, the directory records that dependency instead of applying one number to every model.

### Usage-quality evidence layer

The catalog now has a second, source-linked evidence layer at `data/usage_quality_evidence.json`. It records practical constraints that are often missing from simple API directories: rate limits, model/plan dependency, payment requirements, free-credit semantics, regional availability, operational limits, data-use statements, lifecycle/deprecation notes, and other provider-specific constraints. These records supplement the canonical catalog rather than silently replacing unknown fields.

The directory distinguishes **official** evidence from **community/forum** evidence. Community evidence is useful for discovering current behavior or provider announcements, but it is never silently promoted to a provider-confirmed fact. This is especially important when a provider changes a free tier or requires a payment method that older lists still describe differently.

Examples of current evidence corrections include providers whose old “free” claims no longer hold, plan-specific rather than universal rate limits, one-time credits versus recurring quotas, hard database/storage/compute limits, and region or lifecycle restrictions. The provider profile and Data Quality pages expose these distinctions so users can judge practical usability instead of relying on a single green “free” label.
