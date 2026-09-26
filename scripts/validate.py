#!/usr/bin/env python3
"""Validate the canonical Free API Directory datasets and generated catalog."""
import json, sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
ERRORS, WARNINGS = [], []

def load(path):
    try: return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        ERRORS.append(f"{path.relative_to(ROOT)}: invalid JSON: {exc}")
        return None

def url_ok(value, allow_http=False):
    if not value: return False
    p = urlparse(str(value))
    return p.scheme in ({"https","http"} if allow_http else {"https"}) and bool(p.netloc)

providers = load(ROOT/"data/providers.json") or []
catalog = load(ROOT/"data/catalog-lite.json") or {}
exp_files = ["data/public_apis_expansion.json","data/public_api_lists_expansion.json"]
expansions = [(f, load(ROOT/f) or {}) for f in exp_files]

if not isinstance(providers, list): ERRORS.append("data/providers.json must be a list"); providers=[]
if not isinstance(catalog, dict) or not isinstance(catalog.get("providers"), list):
    ERRORS.append("data/catalog-lite.json must contain a providers array")
    catalog_providers=[]
else: catalog_providers=catalog["providers"]

required=("name","category","description","free_tier","signup_url","pricing_url","last_verified","verified_by","status")
statuses={"active","candidate","upstream-community","needs re-verification","broken-link","discontinued","retired"}
for i,p in enumerate(providers,1):
    for field in required:
        if field not in p: ERRORS.append(f"providers.json {i}: missing {field}")
    if p.get("status") not in statuses: ERRORS.append(f"providers.json {i}: unsupported status {p.get('status')!r}")
    if p.get("signup_url") and not url_ok(p["signup_url"], allow_http=True): ERRORS.append(f"providers.json {i}: invalid signup_url")
    ft=p.get("free_tier")
    if not isinstance(ft,dict): ERRORS.append(f"providers.json {i}: free_tier must be an object")
    elif not ft.get("type"): ERRORS.append(f"providers.json {i}: free_tier.type is required")
    if p.get("last_verified") and len(str(p["last_verified"])) != 10: ERRORS.append(f"providers.json {i}: last_verified must be YYYY-MM-DD")

names=[str(p.get("name","")).strip().casefold() for p in providers]
dups=sorted({n for n in names if names.count(n)>1})
for n in dups: ERRORS.append(f"providers.json: duplicate provider name: {n}")

catalog_names=[str(p.get("name","")).strip().casefold() for p in catalog_providers]
catalog_dups=sorted({n for n in catalog_names if catalog_names.count(n)>1})
for n in catalog_dups: ERRORS.append(f"catalog-lite.json: duplicate provider name: {n}")
if catalog.get("provider_count") != len(catalog_providers):
    ERRORS.append("catalog-lite.json: provider_count does not match providers length")
for p in catalog_providers:
    if p.get("verification_status") == "community-free-source" and p.get("free_tier",{}).get("has_free_tier") is not True:
        WARNINGS.append(f"catalog: community record has unexpected free flag: {p.get('name')}")

for filename, obj in expansions:
    arr=obj.get("providers",[]) if isinstance(obj,dict) else []
    if not isinstance(arr,list): ERRORS.append(f"{filename}: providers must be a list"); continue
    if obj.get("count") is not None and obj.get("count") != len(arr):
        ERRORS.append(f"{filename}: count does not match providers length")
    for i,p in enumerate(arr,1):
        for field in ("name","category","description","provider_url","auth"):
            if not p.get(field): ERRORS.append(f"{filename} {i}: missing {field}")
        if p.get("provider_url") and not url_ok(p["provider_url"], allow_http=True):
            ERRORS.append(f"{filename} {i}: invalid provider_url")

curated=set(names)
for filename,obj in expansions:
    for p in obj.get("providers",[]) if isinstance(obj,dict) else []:
        if str(p.get("name","")).strip().casefold() in curated:
            WARNINGS.append(f"{filename}: provider also exists in curated catalog: {p.get('name')}")

print(f"Curated providers: {len(providers)}")
print(f"Canonical catalog providers: {len(catalog_providers)}")
print(f"Expansion providers: {sum(len(o.get('providers',[])) for _,o in expansions if isinstance(o,dict))}")
if WARNINGS:
    print("\nWarnings:")
    for w in sorted(set(WARNINGS)): print(" - "+w)
if ERRORS:
    print("\nErrors:")
    for e in ERRORS: print(" - "+e)
    sys.exit(1)
print("\nValidation passed.")
