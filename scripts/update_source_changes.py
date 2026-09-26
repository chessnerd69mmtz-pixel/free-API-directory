#!/usr/bin/env python3
"""Monitor signup, pricing and documentation pages for source changes."""
import hashlib,json,re
from concurrent.futures import ThreadPoolExecutor,as_completed
from datetime import datetime,timezone
from pathlib import Path
from urllib.request import Request,urlopen
ROOT=Path(__file__).resolve().parents[1];profiles=json.loads((ROOT/"data/provider_profiles.json").read_text(encoding="utf-8"));hf=ROOT/"data/source_hashes.json";lf=ROOT/"data/change_log.json";old=json.loads(hf.read_text(encoding="utf-8")) if hf.exists() else {};log=json.loads(lf.read_text(encoding="utf-8")) if lf.exists() else []
def check(p):
    out=[]
    for field in ("signup_url","pricing_url","documentation_url"):
        u=p.get(field)
        if not u or not str(u).startswith(("http://","https://")):continue
        try:
            req=Request(u,headers={"User-Agent":"free-api-directory-source-monitor/2.0","Accept":"text/html,text/plain;q=0.8"})
            with urlopen(req,timeout=12) as r:raw=r.read(1000000)
            h=hashlib.sha256(re.sub(rb"\s+",b" ",raw)).hexdigest();out.append((field,u,h,"ok"))
        except Exception as e:out.append((field,u,None,type(e).__name__))
    return p["name"],out
new=dict(old);changes=[]
with ThreadPoolExecutor(max_workers=12) as ex:
    for f in as_completed([ex.submit(check,p) for p in profiles]):
        name,items=f.result()
        for field,u,h,state in items:
            key=name+"::"+field;prev=old.get(key,{})
            if h and prev.get("hash") and h!=prev["hash"]:changes.append({"provider":name,"type":"official-source-content-changed","field":field,"date":datetime.now(timezone.utc).date().isoformat(),"source_url":u})
            new[key]={"url":u,"hash":h,"checked":datetime.now(timezone.utc).date().isoformat(),"status":state}
if changes:log=(changes+log)[:1000]
hf.write_text(json.dumps(new,indent=2,sort_keys=True)+"\n",encoding="utf-8");lf.write_text(json.dumps(log,indent=2)+"\n",encoding="utf-8")
print(f"Checked {len(profiles)} providers across source URLs; detected {len(changes)} changes.")
