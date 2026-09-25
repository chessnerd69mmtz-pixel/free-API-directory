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

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
