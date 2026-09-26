#!/usr/bin/env python3
"""Build the synchronized runtime catalog and detailed profiles from canonical sources."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; DATA=ROOT/"data"
PRIMARY=DATA/"providers.json"; URLS=DATA/"provider_urls.json"
EXPANSIONS=["public_apis_expansion.json","public_api_lists_expansion.json"]
OVERRIDES=DATA/"web_verified_overrides.json"
def slug(s):
    s=str(s).lower().replace("&","and")
    return "-".join(filter(None,"".join(c if c.isalnum() else " " for c in s).split())) or "general"
def key_type(url):
    u=str(url or "").lower()
    if any(k in u for k in ("/api-keys","/api_key","/apikey","/settings/api","/keys","/tokens")): return "api-key-page"
    if "dashboard" in u and any(k in u for k in ("api","developer","token","key")): return "dashboard"
    if any(k in u for k in ("signup","register","create-account")): return "signup"
    if "docs" in u or "documentation" in u: return "documentation"
    if "pricing" in u: return "pricing"
    return "provider-page"

def normalize(x):
    name=str(x.get("name") or x.get("API") or x.get("title") or "").strip()
    url=x.get("signup_url") or x.get("provider_url") or x.get("url") or x.get("Link") or x.get("link")
    if not name or not url:return None
    return {"name":name,"category":str(x.get("category") or x.get("Category") or "General"),"description":str(x.get("description") or x.get("Description") or "Community-listed public API."),"signup_url":str(x.get("signup_url") or url),"pricing_url":x.get("pricing_url") or x.get("tier_verification_url"),"documentation_url":str(x.get("documentation_url") or url),"free_tier":x.get("free_tier") or {"has_free_tier":True,"type":"community-listed-free","details":"Community-listed public API; verify current quota, card requirement, expiry and commercial terms with the provider.","amount":"Not independently quantified","expiry":"Not independently verified"},"requires_credit_card":x.get("requires_credit_card") if isinstance(x.get("requires_credit_card"),bool) else None,"authentication":str(x.get("authentication") or x.get("auth") or "Not publicly stated"),"protocols":x.get("protocols") or ["HTTPS"],"sdk_languages":x.get("sdk_languages") or [],"commercial_use":x.get("commercial_use") or "Not publicly stated; check provider terms.","self_hostable":x.get("self_hostable") or "Not publicly stated","webhooks":x.get("webhooks") or "Not publicly stated","rate_limit":x.get("rate_limit") or "Not publicly stated","free_tier_reset":x.get("free_tier_reset") or "Not publicly stated","uses":x.get("uses") or [str(x.get("category") or "General"),str(x.get("description") or "Community-listed public API.")],"last_verified":x.get("last_verified"),"verified_by":x.get("verified_by") or "community-source","status":x.get("status") or "upstream-community","verification_status":x.get("verification_status") or "community-free-source","verification_sources":x.get("verification_sources") or {"provider":str(url)}}
def main():
    providers=[];seen=set()
    for p in json.loads(PRIMARY.read_text(encoding="utf-8")):
        k=p["name"].strip().casefold()
        if k not in seen:seen.add(k);providers.append(p)
    for x in json.loads(URLS.read_text(encoding="utf-8")) if URLS.exists() else []:
        p=normalize(x)
        if p and p["name"].casefold() not in seen: seen.add(p["name"].casefold()); providers.append(p)
    for fn in EXPANSIONS:
        for x in json.loads((DATA/fn).read_text(encoding="utf-8")).get("providers",[]):
            p=normalize(x)
            if p and p["name"].casefold() not in seen:seen.add(p["name"].casefold());providers.append(p)
    overrides={}
    if OVERRIDES.exists():
        for o in json.loads(OVERRIDES.read_text(encoding="utf-8")):
            overrides[str(o.get("name","")).strip().casefold()] = o
    for p in providers:
        o=overrides.get(p["name"].strip().casefold())
        if o:
            for field in ("documentation_url","pricing_url","signup_url","rate_limit","free_tier_reset","requires_credit_card","commercial_use"):
                if field in o and o[field] is not None:
                    p[field]=o[field]
            if o.get("free_tier"):
                if isinstance(p.get("free_tier"),dict):
                    p["free_tier"]=dict(p["free_tier"],details=o["free_tier"])
                else:
                    p["free_tier"]={"has_free_tier":True,"type":"official-source","details":o["free_tier"],"amount":o["free_tier"],"expiry":"See provider terms"}
            p["verification_sources"]={"official":o.get("sources",[])}
            p["last_verified"]=o.get("last_verified") or p.get("last_verified")
            p["verified_by"]="official-source-review"
            p["tier_verification_status"]="official-primary-source"
            p["research_status"]="official-source-reviewed"
        if not p.get("verification_status"): p["verification_status"] = "provider-verified" if p.get("status") == "active" else "source-identified-not-fully-resolved"
        if not isinstance(p.get("requires_credit_card"), bool): p["requires_credit_card"] = None
        ft = p.get("free_tier")
        if not isinstance(ft, dict) or isinstance(ft, list): p["free_tier"] = {"has_free_tier": None, "type": "unknown", "details": "Not publicly stated", "amount": "Not publicly stated", "expiry": "Not publicly stated"}
        elif ft.get("has_free_tier") not in (True, False, None): p["free_tier"] = dict(ft, has_free_tier=None)
        if not p.get("status"): p["status"] = "catalog-only"
    for p in providers:
        if p.get("verified_by") == "community-source" or p.get("status") == "upstream-community":
            if isinstance(p.get("free_tier"), dict):
                p["free_tier"] = dict(p["free_tier"], has_free_tier=None, type="community-listed")
            p["verification_status"] = "community-listed"
        p["key_url_type"] = p.get("key_url_type") or key_type(p.get("signup_url"))
        p["provenance"] = p.get("provenance") or {"primary_source": p.get("verified_by") or "unknown", "provider_url": p.get("signup_url")}
    providers.sort(key=lambda p:p["name"].casefold())
    cats={}
    for p in providers:
        k=slug(p.get("category","General"));cats.setdefault(k,{"label":p.get("category","General"),"count":0});cats[k]["count"]+=1
    index={"schema_version":"4.0.0","generated_at":"2026-09-26","provider_count":len(providers),"categories":cats,"providers":[{"id":i+1,"name":p["name"],"category":p.get("category","General"),"description":p.get("description",""),"free_tier":p.get("free_tier",{}).get("has_free_tier") if isinstance(p.get("free_tier"),dict) else None,"free_tier_details":p.get("free_tier",{}).get("details") if isinstance(p.get("free_tier"),dict) else None,"free_tier_amount":p.get("free_tier",{}).get("amount") if isinstance(p.get("free_tier"),dict) else None,"free_tier_reset":p.get("free_tier_reset"),"requires_credit_card":p.get("requires_credit_card") if isinstance(p.get("requires_credit_card"),bool) else None,"signup_url":p.get("signup_url"),"pricing_url":p.get("pricing_url"),"documentation_url":p.get("documentation_url"),"rate_limit":p.get("rate_limit"),"authentication":p.get("authentication"),"commercial_use":p.get("commercial_use"),"last_verified":p.get("last_verified"),"status":p.get("status","catalog-only"),"verification_status":p.get("verification_status"),"tier_verification_status":p.get("tier_verification_status"),"key_url_type":p.get("key_url_type","unknown")} for i,p in enumerate(providers)]}
    (DATA/"catalog-index.json").write_text(json.dumps(index,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    (DATA/"provider_profiles.json").write_text(json.dumps(providers,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    print(f"Built synchronized catalog: {len(providers)} providers, {len(cats)} categories.")
if __name__=="__main__":main()
