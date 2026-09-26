#!/usr/bin/env python3
"""Validate canonical and generated Free API Directory datasets."""
import json,re,sys
from pathlib import Path
from urllib.parse import urlparse
ROOT=Path(__file__).resolve().parents[1];ERRORS=[];WARNINGS=[]
def load(p):
    try:return json.loads(p.read_text(encoding="utf-8"))
    except Exception as e:ERRORS.append(f"{p.relative_to(ROOT)} invalid JSON: {e}");return None
def valid_url(v):
    if not v:return False
    u=urlparse(str(v));return u.scheme in {"http","https"} and bool(u.netloc)
providers=load(ROOT/"data/providers.json") or [];index=load(ROOT/"data/catalog-index.json") or {};profiles=load(ROOT/"data/provider_profiles.json") or []
def names(data):return [str(x.get("name","")).strip().casefold() for x in data if isinstance(x,dict)]
for label,data in [("providers.json",providers),("provider_profiles.json",profiles)]:
    if not isinstance(data,list):ERRORS.append(f"{label} must be an array")
ip=index.get("providers",[]) if isinstance(index,dict) else []
if not isinstance(ip,list):ERRORS.append("catalog-index providers must be an array");ip=[]
for label,ns in [("providers.json",names(providers)),("catalog-index.json",names(ip)),("provider_profiles.json",names(profiles))]:
    for n in sorted({x for x in ns if ns.count(x)>1}):ERRORS.append(f"{label}: duplicate provider {n}")
if index.get("provider_count")!=len(ip):ERRORS.append("catalog-index provider_count mismatch")
if set(names(ip))!=set(names(profiles)):ERRORS.append("catalog-index and provider_profiles are not synchronized")
for i,p in enumerate(providers,1):
    for f in ("name","category","description","free_tier","signup_url","pricing_url","last_verified","verified_by","status"):
        if f not in p:ERRORS.append(f"providers.json {i}: missing {f}")
    if p.get("signup_url") and not valid_url(p["signup_url"]):ERRORS.append(f"providers.json {i}: invalid signup_url")
    if p.get("pricing_url") and not valid_url(p["pricing_url"]):ERRORS.append(f"providers.json {i}: invalid pricing_url")
    if p.get("last_verified") and not re.fullmatch(r"\d{4}-\d{2}-\d{2}",str(p["last_verified"])):ERRORS.append(f"providers.json {i}: invalid last_verified")
for i,p in enumerate(profiles,1):
    if not p.get("name") or not p.get("category") or not p.get("description") or not p.get("signup_url"):ERRORS.append(f"provider_profiles.json {i}: missing core field")
    if p.get("signup_url") and not valid_url(p["signup_url"]):ERRORS.append(f"provider_profiles.json {i}: invalid signup_url")
# Ensure every source dataset is represented in the synchronized runtime catalog.
catalog_names=set(names(ip))
for fn in ("data/public_apis_expansion.json","data/public_api_lists_expansion.json"):
    d=load(ROOT/fn) or {};arr=d.get("providers",[])
    for x in arr:
        n=str(x.get("name") or x.get("API") or x.get("title") or "").strip().casefold()
        if n and n not in catalog_names: ERRORS.append(f"{fn}: provider missing from catalog: {n}")
    d=load(ROOT/fn) or {};arr=d.get("providers",[])
    if d.get("count")!=len(arr):ERRORS.append(f"{fn}: count mismatch")

# Validate supplemental evidence layers without requiring complete coverage for every provider.
for fn in ("data/free_limit_evidence.json", "data/usage_quality_evidence.json"):
    fp=ROOT/fn
    d=load(fp) or []
    if not isinstance(d,list): ERRORS.append(f"{fn} must be an array")
    else:
        seen=set()
        for i,x in enumerate(d,1):
            if not isinstance(x,dict) or not x.get("name"): ERRORS.append(f"{fn} {i}: missing name")
            else:
                n=str(x["name"]).strip().casefold()
                if n in seen: ERRORS.append(f"{fn}: duplicate provider {n}")
                seen.add(n)
                for u in x.get("source_urls",[]) or []:
                    if not valid_url(u): ERRORS.append(f"{fn} {i}: invalid source URL")
print(f"Canonical providers: {len(providers)}\nSynchronized runtime providers: {len(ip)}\nGenerated categories: {len(index.get('categories',{}))}")
if ERRORS:
    print("\nErrors:\n"+"\n".join(" - "+x for x in sorted(set(ERRORS))));sys.exit(1)
print("\nValidation passed.")
