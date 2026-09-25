import json, urllib.request, sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
providers=json.loads((ROOT/'data/providers.json').read_text(encoding='utf-8'))
failed=[]
for p in providers:
    for field in ('signup_url','pricing_url'):
        req=urllib.request.Request(p[field],headers={'User-Agent':'free-api-directory-link-checker/1.0'},method='GET')
        try:
            with urllib.request.urlopen(req,timeout=20) as r:
                if not 200 <= r.status < 300: failed.append((p['name'],field,p[field],r.status))
        except Exception as e: failed.append((p['name'],field,p[field],str(e)))
if failed:
    print('Broken/unreachable links:')
    for x in failed: print(' | '.join(map(str,x)))
    sys.exit(1)
print(f'Checked {len(providers)*2} source links; all returned 2xx.')
