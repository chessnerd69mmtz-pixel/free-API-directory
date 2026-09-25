import json
from pathlib import Path
from collections import defaultdict
ROOT=Path(__file__).resolve().parents[1]
providers=json.loads((ROOT/'data/providers.json').read_text(encoding='utf-8'))
groups=defaultdict(list)
for p in providers: groups[p['category']].append(p)
out=ROOT/'docs/providers'; out.mkdir(parents=True,exist_ok=True)
for category,items in sorted(groups.items()):
    items.sort(key=lambda p:p['name'].lower())
    slug=category.lower().replace(' / ','-').replace('/','-').replace(' ','-')
    lines=[f'# {category}','', '| Provider | Free Tier Details | Sign-up Required | Credit Card | Expiry | Last Verified | Get API Key |','|---|---|---|---|---|---|---|']
    for p in items:
        ft=p['free_tier']; details=ft['details'].replace('|','\\|'); expiry=ft['expiry'].replace('|','\\|')
        card=p['requires_credit_card']; card='Unverified' if card=='Unverified' else ('Yes' if card else 'No')
        stale='' if p['status']=='active' else f' — **{p["status"]}**'
        lines.append(f'| {p["name"]} | {details} | {"Yes" if p["signup_requires_account"] else "No"} | {card} | {expiry} | {p["last_verified"]}{stale} | [Create / manage key]({p["signup_url"]}) |')
    (out/f'{slug}.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
index=['# Provider Tables','']
for category in sorted(groups):
    slug=category.lower().replace(' / ','-').replace('/','-').replace(' ','-')
    index.append(f'- [{category}](./providers/{slug}.md)')
(ROOT/'docs/README.md').write_text('\n'.join(index)+'\n',encoding='utf-8')
print(f'Generated {len(groups)} category tables.')
