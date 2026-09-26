# Find the Best API Provider

The **Find the Best API Provider** mode is a deterministic, local matcher. It does not send the user's project description to an external AI provider and it does not require an API key.

## Inputs

Users can provide:

- role
- project objective
- required capabilities
- free-access preference
- account / credit-card constraints
- commercial-use requirement
- expected project scale

## Ranking model

Each catalog provider receives a fit score based on documented fields:

1. **Capability match** — requested terms are compared with provider name, category, description, uses, protocols and SDK metadata.
2. **Role fit** — role-specific terms are matched against the same catalog evidence.
3. **Free-access fit** — providers with recorded free access receive additional weight when the user requests free-only access.
4. **Access constraints** — documented no-card/no-account conditions are rewarded when requested; documented conflicts are penalized.
5. **Commercial-use fit** — documented commercial-use permissions are considered when required.
6. **Scale signals** — documented higher-volume indicators can contribute for production-scale requests.
7. **Verification status** — active, recently verified records receive a small confidence boost; candidate records receive a penalty.

The interface returns **at most 10 providers**, ordered by this fit score. The score is a **request-specific fit score, not a universal quality rating**.

## Conservative handling of unknowns

Unknown provider fields do not receive positive points. A provider is not treated as free, card-free, commercial-friendly, or keyless merely because the catalog lacks information.

## Privacy

The matching logic runs in the browser against the repository's committed catalog. No directory-owner API key is used and no external AI call is required.
