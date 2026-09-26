#!/usr/bin/env python3
"""Build the synchronized runtime catalog and detailed profiles from canonical sources."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; DATA=ROOT/"data"
PRIMARY=DATA/"providers.json"; URLS=DATA/"provider_urls.json"
EXPANSIONS=["public_apis_expansion.json","public_api_lists_expansion.json"]
def slug(s):
    s=str(s).lower().replace("&","and")
    return "-".join(filter(None,"".join(c if c.isalnum() else " " for c in s).split())) or "general"
def normalize(x):
    name=str(x.get("name") or x.get("API") or x.get("title") or "").strip()
    url=x.get("signup_url") or x.get("provider_url") or x.get("url") or x.get("Link") or x.get("link")
    if not name or not url:return None
    return {"name":name,"category":str(x.get("category") or x.get("Category") or "General"),"description":str(x.get("description") or x.get("Description") or "Community-listed public API."),"signup_url":str(x.get("signup_url") or url),"pricing_url":x.get("pricing_url") or x.get("tier_verification_url"),"documentation_url":str(x.get("documentation_url") or url),"free_tier":x.get("free_tier") or {"has_free_tier":True,"type":"community-listed-free","details":"Community-listed public API; verify current quota, card requirement, expiry and commercial terms with the provider.","amount":"Not independently quantified","expiry":"Not independently verified"},"requires_credit_card":x.get("requires_credit_card") if isinstance(x.get("requires_credit_card"),bool) else None,"authentication":str(x.get("authentication") or x.get("auth") or "Unverified"),"protocols":x.get("protocols") or ["HTTPS"],"sdk_languages":x.get("sdk_languages") or [],"commercial_use":x.get("commercial_use") or "Unverified; check provider terms.","self_hostable":x.get("self_hostable") or "Unverified","webhooks":x.get("webhooks") or "Unverified","rate_limit":x.get("rate_limit") or "Unverified","free_tier_reset":x.get("free_tier_reset") or "Unverified","uses":x.get("uses") or [str(x.get("category") or "General"),str(x.get("description") or "Community-listed public API.")],"last_verified":x.get("last_verified"),"verified_by":x.get("verified_by") or "community-source","status":x.get("status") or "upstream-community","verification_status":x.get("verification_status") or "community-free-source","verification_sources":x.get("verification_sources") or {"provider":str(url)}}
def main():
    providers=[];seen=set()
    for p in json.loads(PRIMARY.read_text(encoding="utf-8")):
        k=p["name"].strip().casefold()
        if k not in seen:seen.add(k);providers.append(p)
    for fn in EXPANSIONS:
        for x in json.loads((DATA/fn).read_text(encoding="utf-8")).get("providers",[]):
            p=normalize(x)
            if p and p["name"].casefold() not in seen:seen.add(p["name"].casefold());providers.append(p)
    enrich={x.get("name","").strip().casefold():x for x in json.loads(URLS.read_text(encoding="utf-8"))}
    for p in providers:
        e=enrich.get(p["name"].strip().casefold())
        if e:
            p["signup_url"]=p.get("signup_url") or e.get("url")
            p["pricing_url"]=p.get("pricing_url") or e.get("tier_verification_url")
            if not p.get("uses"):p["uses"]=e.get("uses") or []
    providers.sort(key=lambda p:p["name"].casefold())
    cats={}
    for p in providers:
        k=slug(p.get("category","General"));cats.setdefault(k,{"label":p.get("category","General"),"count":0});cats[k]["count"]+=1
    index={"schema_version":"4.0.0","generated_at":"2026-09-26","provider_count":len(providers),"categories":cats,"providers":[{"id":i+1,"name":p["name"],"category":p.get("category","General"),"description":p.get("description",""),"free_tier":p.get("free_tier",{}).get("has_free_tier") if isinstance(p.get("free_tier"),dict) else None,"requires_credit_card":p.get("requires_credit_card") if isinstance(p.get("requires_credit_card"),bool) else None,"signup_url":p.get("signup_url"),"pricing_url":p.get("pricing_url"),"last_verified":p.get("last_verified"),"status":p.get("status","catalog-only")} for i,p in enumerate(providers)]}
    (DATA/"catalog-index.json").write_text(json.dumps(index,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    (DATA/"provider_profiles.json").write_text(json.dumps(providers,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    print(f"Built synchronized catalog: {len(providers)} providers, {len(cats)} categories.")
if __name__=="__main__":main()
