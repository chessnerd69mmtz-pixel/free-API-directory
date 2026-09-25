#!/usr/bin/env python3
"""Check provider source links without letting one slow/blocked site stall the job."""

import json
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
providers = json.loads((ROOT / "data/providers.json").read_text(encoding="utf-8"))

# API-key pages commonly require authentication and may return 401/403.
# A redirect or 405 from a HEAD request also proves the URL is reachable.
ACCEPTED_STATUSES = set(range(200, 400)) | {401, 403, 405}
TIMEOUT = 8
WORKERS = 12
USER_AGENT = "free-api-directory-link-checker/2.0"

def check_url(provider_name, field, url):
    parsed = urlparse(url)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        return (provider_name, field, url, "invalid URL")

    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8",
    }

    # HEAD is cheap, but some providers do not implement it. Fall back to GET.
    try:
        req = Request(url, headers=headers, method="HEAD")
        with urlopen(req, timeout=TIMEOUT) as response:
            if response.status in ACCEPTED_STATUSES:
                return None
            status = response.status
    except HTTPError as exc:
        if exc.code in ACCEPTED_STATUSES:
            return None
        status = exc.code
    except Exception:
        status = None

    try:
        req = Request(url, headers=headers, method="GET")
        with urlopen(req, timeout=TIMEOUT) as response:
            if response.status in ACCEPTED_STATUSES:
                return None
            return (provider_name, field, url, response.status)
    except HTTPError as exc:
        if exc.code in ACCEPTED_STATUSES:
            return None
        return (provider_name, field, url, exc.code)
    except (URLError, TimeoutError, OSError) as exc:
        return (provider_name, field, url, str(exc))
    except Exception as exc:
        return (provider_name, field, url, str(exc))

targets = [
    (p["name"], field, p[field])
    for p in providers
    for field in ("signup_url", "pricing_url")
]

failed = []
with ThreadPoolExecutor(max_workers=WORKERS) as pool:
    futures = [pool.submit(check_url, *target) for target in targets]
    for future in as_completed(futures):
        result = future.result()
        if result:
            failed.append(result)

failed.sort(key=lambda x: (x[0].lower(), x[1]))

if failed:
    print("Broken/unreachable provider source links:")
    for provider, field, url, error in failed:
        print(f"{provider} | {field} | {url} | {error}")
    print(f"\nChecked {len(targets)} source links; {len(failed)} failed.")
    sys.exit(1)

print(
    f"Checked {len(targets)} source links concurrently; "
    "all links were reachable or returned an expected access-restricted status."
)
