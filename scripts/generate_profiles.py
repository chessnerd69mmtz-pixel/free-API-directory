#!/usr/bin/env python3
"""Synchronize structured profiles with the canonical provider catalogs without inventing facts."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
primary=json.loads((ROOT/"data/providers.json").read_text(encoding="utf-8"))
additional=json.loads((ROOT/"data/provider_urls.json").read_text(encoding="utf-8"))
path=ROOT/"data/provider_profiles.json"
old={x["name"]:x for x in json.loads(path.read_text(encoding="utf-8"))} if path.exists() else {}
out=[]
seen=set()
for p in primary+additional:
    if p["name"] in seen:
        continue
    seen.add(p["name"])
    x=old.get(p["name"],{})
    x.update({"name":p["name"],"category":p["category"],"description":p.get("description") or x.get("description") or "Cataloged API provider.","signup_url":p.get("signup_url") or p.get("url"),"pricing_url":p.get("pricing_url") or p.get("tier_verification_url"),"documentation_url":(p.get("verification_urls") or [x.get("documentation_url") or p.get("url")])[0],"free_tier":p.get("free_tier") or x.get("free_tier") or {"has_free_tier":None,"type":"unknown","details":"Not publicly stated","amount":"Not publicly stated","expiry":"Not publicly stated"},"requires_credit_card":p.get("requires_credit_card",x.get("requires_credit_card","Not publicly stated")),"uses":p.get("uses") or x.get("uses") or ["Not independently specified"],"last_verified":p.get("last_verified",x.get("last_verified")),"verified_by":p.get("verified_by",x.get("verified_by")),"status":p.get("status",x.get("status","catalog-only")),"verification_status":p.get("tier_verification_status",x.get("verification_status","source-identified-not-fully-resolved"))})
    for k,d in {"authentication":"Not publicly stated","protocols":[],"sdk_languages":[],"commercial_use":"Not publicly stated","self_hostable":"Not publicly stated","webhooks":"Not publicly stated","rate_limit":"Not publicly stated","free_tier_reset":"Not publicly stated"}.items(): x.setdefault(k,d)
    out.append(x)
path.write_text(json.dumps(out,indent=2)+"\n",encoding="utf-8")
print(f"Synchronized {len(out)} profiles.")
