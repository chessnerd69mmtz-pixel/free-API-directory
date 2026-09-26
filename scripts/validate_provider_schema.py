#!/usr/bin/env python3
"""Strict structural/schema checks for every canonical provider."""
import json,re,sys
from pathlib import Path
from urllib.parse import urlparse
ROOT=Path(__file__).resolve().parents[1]; DATA=ROOT/"data"
REQ=("name","category","description","signup_url","free_tier","requires_credit_card","status","verification_status")
URLS=("signup_url","pricing_url","documentation_url")
BOOL_OR_NULL=("requires_credit_card",)
errors=[]
def url_ok(v):
    if v is None:return True
    u=urlparse(str(v));return u.scheme in {"http","https"} and bool(u.netloc)
def date_ok(v):
    return v is None or bool(re.fullmatch(r"\d{4}-\d{2}-\d{2}",str(v)))
providers=json.loads((DATA/"provider_profiles.json").read_text(encoding="utf-8"))
seen={}
for i,p in enumerate(providers,1):
    if not isinstance(p,dict):errors.append(f"profile {i}: not an object");continue
    n=str(p.get("name","")).strip();k=n.casefold()
    if not n:errors.append(f"profile {i}: empty name")
    elif k in seen:errors.append(f"duplicate provider names: {seen[k]} / {n}")
    else:seen[k]=n
    for f in REQ:
        if f not in p:errors.append(f"{n or i}: missing {f}")
    for f in URLS:
        if not url_ok(p.get(f)):errors.append(f"{n}: invalid {f}")
    if not date_ok(p.get("last_verified")):errors.append(f"{n}: invalid last_verified")
    if p.get("requires_credit_card") is not None and not isinstance(p.get("requires_credit_card"),bool):errors.append(f"{n}: requires_credit_card must be true/false/null")
    ft=p.get("free_tier")
    if not isinstance(ft,dict):errors.append(f"{n}: free_tier must be an object")
    else:
        if ft.get("has_free_tier") not in (True,False,None):errors.append(f"{n}: free_tier.has_free_tier invalid")
        if ft.get("has_free_tier") is True and not ft.get("details"):errors.append(f"{n}: free tier marked true without details")
print(f"Checked {len(providers)} provider profiles.")
if errors:
    print("\n".join("ERROR: "+e for e in errors));sys.exit(1)
print("Schema validation passed.")
