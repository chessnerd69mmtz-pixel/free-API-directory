#!/usr/bin/env python3
"""Build all runtime catalog artifacts from the source datasets.

Source of truth:
  data/providers.json
  data/public_apis_expansion.json
  data/public_api_lists_expansion.json
"""
import json
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"data/catalog-lite.json"

def normalize(x, source):
    name=x.get("name") or x.get("API") or x.get("title")
    url=x.get("provider_url") or x.get("url") or x.get("Link") or x.get("link")
    if not name or not url: return None
    return {
        "name":str(name),"category":str(x.get("category") or x.get("Category") or "General"),
        "description":str(x.get("description") or x.get("Description") or "Community-listed public API."),
        "signup_url":str(x.get("signup_url") or url),
        "pricing_url":x.get("pricing_url"),
        "documentation_url":str(x.get("documentation_url") or url),
        "free_tier":x.get("free_tier") or {
            "has_free_tier":True,"type":"community-listed-free",
            "details":"Community-listed public API; current quota, card requirement, expiry and commercial terms require official-source verification.",
            "amount":"Not independently quantified","expiry":"Not independently verified"},
        "requires_credit_card":x.get("requires_credit_card","Unverified"),
        "authentication":str(x.get("authentication") or x.get("auth") or x.get("Auth") or "No"),
        "protocols":x.get("protocols") or ["HTTPS" if str(x.get("https") or x.get("HTTPS") or "").lower()=="yes" else "HTTP/HTTPS"],
        "sdk_languages":x.get("sdk_languages") or [],
        "commercial_use":x.get("commercial_use") or "Unverified; check provider terms.",
        "self_hostable":x.get("self_hostable") or "Unverified","webhooks":x.get("webhooks") or "Unverified",
        "rate_limit":x.get("rate_limit") or "Unverified","free_tier_reset":x.get("free_tier_reset") or "Unverified",
        "uses":x.get("uses") or [str(x.get("category") or "General"),str(x.get("description") or "Community-listed public API.")],
        "last_verified":x.get("last_verified"),"verified_by":x.get("verified_by") or source,
        "status":x.get("status") or "upstream-community",
        "verification_status":x.get("verification_status") or "community-free-source",
        "verification_sources":x.get("verification_sources") or {"provider":str(url)}
    }

def main():
    primary=json.loads((ROOT/"data/providers.json").read_text())
    names={p["name"].strip().casefold() for p in primary}
    providers=list(primary)
    for fn in ("data/public_apis_expansion.json","data/public_api_lists_expansion.json"):
        for x in json.loads((ROOT/fn).read_text()).get("providers",[]):
            p=normalize(x,"community-source")
            if p and p["name"].strip().casefold() not in names:
                providers.append(p); names.add(p["name"].strip().casefold())
    providers.sort(key=lambda p:p["name"].casefold())
    OUT.write_text(json.dumps({"schema_version":"2.0.0","generated_at":"2026-09-26","provider_count":len(providers),"providers":providers},indent=2,ensure_ascii=False)+"\n")
    print(f"Wrote {len(providers)} providers to {OUT}")

if __name__=="__main__": main()
