# Contributing

Before adding a provider, verify it from official provider material.

### Required evidence

1. A real, working API-key/token creation or management URL.
2. An official pricing/free-tier page or official documentation page.
3. The exact free amount/limit, if claimed.
4. Whether an account is required.
5. Whether a payment card is required. If unclear, use `"Unverified"`.
6. Whether the free access expires. If unclear, use `"Unverified - check provider page"`.
7. `last_verified` in YYYY-MM-DD format.
8. `verified_by`.

Do not guess URLs or free quotas. Do not copy claims from aggregator sites when an official source is available.

### Pull requests

Update the relevant JSON entry and regenerate the Markdown tables:

```bash
python scripts/validate.py
python scripts/generate_tables.py
```

A provider older than 90 days is considered stale and will be marked for re-verification by automation.

### Removing a provider

Provide evidence that the API/key service was discontinued, the key page no longer works, or the provider no longer meets the directory scope.
