import json
from pathlib import Path
from datetime import date,timedelta
ROOT=Path(__file__).resolve().parents[1]
path=ROOT/'data/providers.json'
providers=json.loads(path.read_text(encoding='utf-8'))
cutoff=date.today()-timedelta(days=90)
changed=False
for p in providers:
    if date.fromisoformat(p['last_verified']) < cutoff and p['status']=='active': p['status']='needs re-verification'; changed=True
if changed: path.write_text(json.dumps(providers,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
