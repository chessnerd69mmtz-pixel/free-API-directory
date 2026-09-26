#!/usr/bin/env python3
"""Check public verification URLs in the catalog. This is source reachability, not API uptime."""
import json, sys, urllib.request
from urllib.parse import urlparse

with open("data/providers.json", encoding="utf-8") as f:
    providers=json.load(f)

urls=[]
for p in providers:
    for u in p.get("verification_urls",[]) if isinstance(p.get("verification_urls"),list) else []:
        if isinstance(u,str) and urlparse(u).scheme in ("http","https"):
            urls.append((p["name"],u))

seen=set(); failures=[]
for name,u in urls:
    if u in seen: continue
    seen.add(u)
    try:
        req=urllib.request.Request(u,method="HEAD",headers={"User-Agent":"Free-API-Directory-source-monitor/1.0"})
        with urllib.request.urlopen(req,timeout=12) as r:
            if r.status >= 400: failures.append((name,u,r.status))
    except Exception as e:
        failures.append((name,u,type(e).__name__))

print(f"Checked {len(seen)} unique public source URLs; failures: {len(failures)}")
for row in failures[:100]:
    print(" | ".join(map(str,row)))
sys.exit(1 if failures else 0)
