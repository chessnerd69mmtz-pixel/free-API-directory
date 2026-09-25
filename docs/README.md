# Provider Documentation

The directory is organized by **practical criteria**, with intentional cross-listing for multifunction APIs.

- [Browse all 26 criteria](./criteria.html)
- [All providers by criterion](./providers/all.md)
- [Additional provider URL catalog](./providers/additional-urls.md)
- [Criterion definitions and classification approach](./providers/criteria.md)

The canonical provider data remains in:
- [Primary verified providers](../data/providers.json)
- [Additional provider URLs](../data/provider_urls.json)

Run `python scripts/generate_tables.py` to regenerate the criterion tables from both data sources.

## Developer tools

- [Find an API](../finder.html) — search providers by capability and verified free-tier information.
- [Compare APIs](../compare.html) — compare up to four providers without sending keys anywhere.
- [API profiles](../api.html) — detailed provider pages with verification status, capabilities and generic code templates.
- [Verification history](../changes.html) — official-source change monitoring and verification records.

The website never requires an API key belonging to the directory owner. Unknown provider facts remain explicitly marked as **Unverified**. The automated monitor uses only public provider pages and GitHub Actions' built-in repository token; it does not call provider APIs on the site's behalf.
