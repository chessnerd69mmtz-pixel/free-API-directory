#!/usr/bin/env python3
import json,time
from concurrent.futures import ThreadPoolExecutor,as_completed
from pathlib import Path
from urllib.error import HTTPError,URLError
from urllib.parse import urlparse
from urllib.request import Request,urlopen
ROOT=Path(__file__).resolve().parents[1]
profiles=json.loads((ROOT/"data/provider_profiles.json").read_text(encoding="utf-8"))
targets={}
for p in profiles:
    for field in ("signup_url","pricing_url","documentation_url"):
        url=p.get(field)
        if url: targets.setdefault(str(url),(p.get("name","Unknown"),field,str(url)))
accepted=set(range(200,400))|{401,403,405,429}
def check(item):
    name,field,url=item; last="unknown"
    for attempt in range(3):
        try:
            u=urlparse(url)
            if u.scheme not in {"http","https"} or not u.netloc:return name,field,url,"invalid URL"
            req=Request(url,headers={"User-Agent":"free-api-directory-link-checker/3.0","Accept":"*/*"},method="HEAD")
            try:
                with urlopen(req,timeout=8) as r: code=r.status
            except HTTPError as e: code=e.code
            if code in accepted:return None
            req=Request(url,headers={"User-Agent":"free-api-directory-link-checker/3.0","Accept":"*/*"},method="GET")
            try:
                with urlopen(req,timeout=8) as r: code=r.status
            except HTTPError as e: code=e.code
            if code in accepted:return None
            last=str(code)
        except (URLError,TimeoutError,OSError) as e:last=type(e).__name__
        except Exception as e:last=type(e).__name__
        time.sleep(.5*(attempt+1))
    return name,field,url,last
failed=[]
with ThreadPoolExecutor(max_workers=16) as pool:
    for f in as_completed([pool.submit(check,x) for x in targets.values()]):
        r=f.result()
        if r:failed.append(r)
failed.sort(key=lambda x:(x[0].lower(),x[1]))
print(f"Checked {len(targets)} unique source URLs.")
if failed:
    print("URLs requiring review:")
    for x in failed:print(" | ".join(x))
    print(f"{len(failed)} URLs require review.")
else:print("All unique provider source URLs passed.")
