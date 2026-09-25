# Free API Directory

A maintained, open-source directory of API providers with free tiers, trials, or limited free access.

## Verification standard

This repository is deliberately conservative:

- API-key/token links point to the provider's key-management or key-minting page, not a generic homepage.
- Free-tier claims are only recorded when supported by an official provider pricing/docs page.
- Unknown details are written as `Unverified - check provider page` rather than guessed.
- Every provider has `last_verified`, `verified_by`, source URLs, and a status.
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

## Directory table

**[Open the complete provider table →](docs/providers/all.md)**

The table contains all 339 catalogued providers, their categories, provider/API-key links, tier/pricing links, and major functions & capabilities.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT


## Additional provider URLs

A URL-only catalog of additional providers imported from the supplied source list is maintained in [`data/provider_urls.json`](./data/provider_urls.json) and [`docs/providers/additional-urls.md`](./docs/providers/additional-urls.md). These entries intentionally do not make free-tier or verification claims.
