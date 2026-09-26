# Student Mode research standard

Student Mode is intentionally stricter than a generic “free APIs” list.

## Inclusion rules

A provider enters Student Mode when the committed catalog records at least one of:

1. A current free/keyless API access path.
2. A current free API-key or free-tier path.
3. Clear research/academic/scientific relevance, including scholarly literature, bibliographic metadata, public scientific data, government/open data, health/science datasets, or research tooling.

Providers with candidate/uncertain verification are retained in the **Verification Needed** category. They are not presented as independently verified free offers.

## Research checks completed for the research-focused layer

### OpenAlex
Current official documentation says the API has a free daily budget, a free account provides an API key, no payment method is required for the free tier, and the key increases the daily budget. The current API documentation also describes works, authors, sources, institutions, topics and funders endpoints.

- API documentation: https://help.openalex.org/api/
- Authentication: https://help.openalex.org/api/authentication/
- Pricing: https://help.openalex.org/access/pricing/

### Crossref
Crossref's current documentation states that its public REST API requires no signup or registration. A polite request can identify the caller with an email address; its paid Metadata Plus service is separate.

- Access/authentication: https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication/
- REST API: https://www.crossref.org/documentation/retrieve-metadata/rest-api/
- Fees: https://www.crossref.org/fees/

### Semantic Scholar
Current Semantic Scholar documentation says most Academic Graph endpoints are available publicly without authentication, while API keys are available for higher limits/support. It also publishes downloadable research datasets.

- API: https://webflow.semanticscholar.org/product/api
- API documentation: https://api.semanticscholar.org/api-docs/

## Important distinction

“Research API” does not automatically mean “free API key.” Some research APIs are entirely public/keyless; others provide free keys; others have free evaluation access but paid production tiers. Student Mode preserves that distinction in the provider record instead of collapsing everything into a single “free” label.

## Full-catalog audit

The Student Mode dataset is generated from every current provider in `data/providers.json`. Each included provider retains its existing verification status, last-verification date, free-tier record, authentication record, and provider/key/documentation URL.

The **Verification Needed** category is deliberately visible so that a future provider-by-provider review can be completed without silently converting uncertain records into claims of free access.
