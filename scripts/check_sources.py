#!/usr/bin/env python3
"""Check public verification URLs. This measures source reachability, not API uptime."""
import json, sys, time
import urllib.request
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse

with open("data/providers.json", encoding="utf-8") as f:
    providers=json.load(f)

urls=[]
for p in providers:
    values=p.get("verification_urls",[])
    if isinstance(values,list):
        for u in values:
            if isinstance(u,str) and urlparse(u).scheme in ("http","https"):
                urls.append((p["name"],u))

seen=set(); failures=[]; soft=[]
for name,u in urls:
    if u in seen: continue
    seen.add(u)
    last=None
    for attempt in range(3):
        try:
            req=urllib.request.Request(u,method="HEAD",headers={"User-Agent":"Free-API-Directory-source-monitor/2.0","Accept":"*/*"})
            try:
                with urllib.request.urlopen(req,timeout=15) as r: code=r.status
            except HTTPError as e: code=e.code
            if code in range(200,400) or code in (401,403,405,429):
                break
            req=urllib.request.Request(u,method="GET",headers={"User-Agent":"Free-API-Directory-source-monitor/2.0","Accept":"text/html,*/*"})
            try:
                with urllib.request.urlopen(req,timeout=15) as r: code=r.status
            except HTTPError as e: code=e.code
            if code in range(200,400) or code in (401,403,405,429):
                break
            last=code
        except (URLError, TimeoutError, OSError) as e:
            last=type(e).__name__
        if attempt < 2: time.sleep(1.0 + attempt)
    else:
        failures.append((name,u,last))

    if u.startswith("http://"):
        soft.append((name,u,"HTTP source; not a reachability failure"))

print(f"Checked {len(seen)} unique public source URLs; hard failures: {len(failures)}; HTTP warnings: {len(soft)}")
for row in failures[:100]:
    print(" | ".join(map(str,row)))
if soft:
    print(f"{len(soft)} HTTP URLs are reachable candidates but should be upgraded to HTTPS when supported.")
# Source health is an informational monitor. Do not fail the maintenance pipeline merely
# because a provider blocks automated requests; expose hard failures in the workflow summary.
summary_path = __import__("os").environ.get("GITHUB_STEP_SUMMARY")
if summary_path:
    with open(summary_path, "a", encoding="utf-8") as f:
        f.write("## Provider source health\\n")
        f.write(f"- Unique URLs checked: {len(seen)}\\n- Hard reachability failures: {len(failures)}\\n- HTTP warnings: {len(soft)}\\n")
        if failures:
            f.write("\\n### Hard failures (first 100)\\n\\n")
            for name,u,last in failures[:100]: f.write(f"- **{name}** — {u} — {last}\\n")
sys.exit(0)
