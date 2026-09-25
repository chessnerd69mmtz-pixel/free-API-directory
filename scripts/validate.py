import json, re, sys
from pathlib import Path
from urllib.parse import urlparse
from datetime import date
ROOT=Path(__file__).resolve().parents[1]
data=json.loads((ROOT/'data/providers.json').read_text(encoding='utf-8'))
errors=[]
statuses={'active','candidate','upstream-community','needs re-verification','broken-link','discontinued'}
types={'permanent','monthly-credit','trial','free-models','rate-limited-free','free-during-promotion','community-listed-free','unknown'}
required={'name','category','description','free_tier','signup_requires_account','requires_credit_card','signup_url','pricing_url','last_verified','verified_by','status'}
for i,p in enumerate(data,1):
    missing=required-set(p)
    if missing: errors.append(f'{i}: missing {sorted(missing)}')
    if p.get('status') not in statuses: errors.append(f'{i}: invalid status')
    ft=p.get('free_tier',{})
    if ft.get('type') not in types: errors.append(f'{i}: invalid free_tier.type')
    u=p.get('signup_url',''); q=urlparse(u)
    if q.scheme!='https' or not q.netloc: errors.append(f'{i}: invalid signup_url: {u}')
    u=p.get('pricing_url','')
    if u!='Unavailable':
        q=urlparse(u)
        if q.scheme!='https' or not q.netloc: errors.append(f'{i}: invalid pricing_url: {u}')
    try:
        if p.get('status') in {'candidate','upstream-community'} and p.get('last_verified') is None: pass
        else: date.fromisoformat(p.get('last_verified',''))
    except ValueError: errors.append(f'{i}: invalid last_verified')
    if not p.get('verified_by'): errors.append(f'{i}: missing verified_by')
    if p.get('pricing_url') not in (None,'Unavailable') and p.get('signup_url')==p.get('pricing_url') and p.get('status')!='candidate': errors.append(f'{i}: source URLs must differ')
names=[p['name'].lower() for p in data]
if len(names)!=len(set(names)): errors.append('duplicate provider names')

# Validate the broad community expansion snapshots separately.
curated_names = set(names)
all_expansion_names = set()
for expansion_file in ('data/public_apis_expansion.json','data/public_api_lists_expansion.json'):
    expansion_path = ROOT/expansion_file
    if not expansion_path.exists(): continue
    expansion = json.loads(expansion_path.read_text(encoding='utf-8'))
    exp = expansion.get('providers', [])
    if not isinstance(exp, list):
        errors.append(f'{expansion_file}: providers must be a list')
        continue
    for i, p in enumerate(exp, 1):
        for field in ('name','category','description','provider_url','auth'):
            if not p.get(field): errors.append(f'{expansion_file} {i}: missing {field}')
        n = str(p.get('name','')).lower()
        if n in all_expansion_names: errors.append(f'{expansion_file}: duplicate provider name across expansion snapshots: {p.get("name")}')
        all_expansion_names.add(n)
        if n in curated_names: errors.append(f'{expansion_file}: overlaps curated provider: {p.get("name")}')
        q = urlparse(str(p.get('provider_url','')))
        if q.scheme != 'https' or not q.netloc: errors.append(f'{expansion_file} {i}: invalid provider_url')
    if expansion.get('count') != len(exp): errors.append(f'{expansion_file}: count does not match providers length')

if errors: print('\n'.join(errors)); sys.exit(1)
print(f'Validated {len(data)} providers successfully.')
