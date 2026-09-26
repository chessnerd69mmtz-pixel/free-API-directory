#!/usr/bin/env python3
"""Fetch catalog source pages and maintain SHA-256 fingerprints for change detection."""
import hashlib, json, urllib.request
from datetime import datetime, timezone
from urllib.parse import urlparse

with open("data/providers.json", encoding="utf-8") as f:
    providers=json.load(f)

old={}
try:
    with open("data/source-fingerprints.json", encoding="utf-8") as f: old=json.load(f)
except FileNotFoundError: pass

out={}
changes=[]
for p in providers:
    for u in p.get("verification_urls",[]) if isinstance(p.get("verification_urls"),list) else []:
        if not isinstance(u,str) or urlparse(u).scheme not in ("http","https"): continue
        try:
            req=urllib.request.Request(u,headers={"User-Agent":"Free-API-Directory-change-monitor/1.0"})
            with urllib.request.urlopen(req,timeout=15) as r:
                body=r.read(5000000)
                digest=hashlib.sha256(body).hexdigest()
            out[u]={"provider":p["name"],"sha256":digest,"checked_at":datetime.now(timezone.utc).isoformat()}
            if u in old and old[u].get("sha256") and old[u]["sha256"] != digest:
                changes.append((p["name"],u))
        except Exception as e:
            out[u]={"provider":p["name"],"sha256":None,"error":type(e).__name__,"checked_at":datetime.now(timezone.utc).isoformat()}

with open("data/source-fingerprints.json","w",encoding="utf-8") as f:
    json.dump(out,f,indent=2,sort_keys=True)
print(f"Checked {len(out)} source URLs; detected {len(changes)} content changes.")
for name,u in changes[:100]:
    print("CHANGED |",name,"|",u)
