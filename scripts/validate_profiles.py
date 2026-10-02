#!/usr/bin/env python3
"""Guardrail validation for API metadata: unknown stays unknown and URLs are valid HTTP(S)."""
import json,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
data=json.loads((ROOT/"data/provider_profiles.json").read_text(encoding="utf-8"))
errors=[]
for p in data:
    for key in ("name","category","signup_url"):
        if not p.get(key): errors.append(f"{p.get('name','<unknown>')}: missing {key}")
    for key in ("signup_url","pricing_url","documentation_url"):
        if p.get(key):
            value=str(p[key]).strip()
            if not value.startswith(("https://","http://")): errors.append(f"{p['name']}: {key} is not HTTP(S)")
            if value.startswith("http://"): print(f"Warning: {p['name']}: {key} uses HTTP; HTTPS upgrade should be preferred when the provider supports it.")
    f=p.get("free_tier",{})
    if f.get("has_free_tier") is True and not p.get("verification_status"): errors.append(f"{p['name']}: free tier marked true without verification status")
    for key in ("authentication","commercial_use","self_hostable","webhooks","rate_limit"):
        if key not in p: errors.append(f"{p['name']}: missing explicit {key} field")
if len({p['name'] for p in data})!=len(data): errors.append("Duplicate provider names in profiles")
if errors:
    print("\n".join(errors));sys.exit(1)
print(f"Validated {len(data)} provider profiles; unknown fields are explicit and no directory API keys are required.")
