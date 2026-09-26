#!/usr/bin/env python3
import json
from pathlib import Path
from datetime import date,timedelta
ROOT=Path(__file__).resolve().parents[1];path=ROOT/"data/providers.json";providers=json.loads(path.read_text(encoding="utf-8"));cutoff=date.today()-timedelta(days=90);changed=False
for p in providers:
    raw=p.get("last_verified")
    if not isinstance(raw,str) or not raw:continue
    try:verified=date.fromisoformat(raw)
    except ValueError:continue
    if verified<cutoff and p.get("status")=="active":p["status"]="needs re-verification";changed=True
if changed:path.write_text(json.dumps(providers,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
