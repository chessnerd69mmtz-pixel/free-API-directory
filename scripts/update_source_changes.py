#!/usr/bin/env python3
"""Detect changes in official provider source pages without using any provider API keys."""
import hashlib,json,re
from concurrent.futures import ThreadPoolExecutor,as_completed
from datetime import datetime,timezone
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlparse

ROOT=Path(__file__).resolve().parents[1]
PROFILES=json.loads((ROOT/"data/provider_profiles.json").read_text(encoding="utf-8"))
HASH_FILE=ROOT/"data/source_hashes.json"
LOG_FILE=ROOT/"data/change_log.json"
old=json.loads(HASH_FILE.read_text(encoding="utf-8")) if HASH_FILE.exists() else {}
log=json.loads(LOG_FILE.read_text(encoding="utf-8")) if LOG_FILE.exists() else []
def clean(x):
    x=re.sub(r"\s+"," ",x)
    return x[:2000000]
def check(p):
    u=p.get("pricing_url") or p.get("documentation_url")
    if not u or not u.startswith("https://"): return p["name"],None,"no-source"
    try:
        host=urlparse(u).netloc
        req=Request(u,headers={"User-Agent":"free-api-directory-source-monitor/1.0","Accept":"text/html,text/plain;q=0.8"})
        with urlopen(req,timeout=12) as r: raw=r.read(2000000)
        h=hashlib.sha256(clean(raw.decode("utf-8","ignore")).encode()).hexdigest()
        return p["name"],{"url":u,"hash":h,"checked":datetime.now(timezone.utc).date().isoformat(),"host":host},"ok"
    except Exception as e:
        return p["name"],{"url":u,"checked":datetime.now(timezone.utc).date().isoformat(),"error":type(e).__name__},"error"
new=dict(old);changes=[]
with ThreadPoolExecutor(max_workers=8) as ex:
    fs=[ex.submit(check,p) for p in PROFILES]
    for f in as_completed(fs):
        name,item,state=f.result()
        if item is None: continue
        prev=old.get(name,{})
        if state=="ok" and item.get("hash") and prev.get("hash") and item["hash"]!=prev["hash"]:
            changes.append({"provider":name,"type":"official-source-content-changed","date":item["checked"],"source_url":item["url"]})
        new[name]=item
if changes:
    log=(changes+log)[:500]
HASH_FILE.write_text(json.dumps(new,indent=2,sort_keys=True)+"\n",encoding="utf-8")
LOG_FILE.write_text(json.dumps(log,indent=2)+"\n",encoding="utf-8")
print(f"Checked {len(PROFILES)} providers; detected {len(changes)} source changes.")
