/* Live compatibility catalog for the expanded 2,500-provider directory. */
window.API_CATALOG = [];
(async () => {
  try {
    const [local, expansion] = await Promise.all([
      fetch("data/provider_profiles.json",{cache:"no-store"}).then(r=>r.json()),
      fetch("data/public_apis_expansion.json",{cache:"no-store"}).then(r=>r.json())
    ]);
    const seen = new Set();
    const normalize = x => x.provider_url ? {
      name:x.name, category:x.category, description:x.description,
      signup_url:x.provider_url, documentation_url:x.provider_url,
      free_tier:{has_free_tier:true,type:"community-listed-free",details:"Community-listed free public API; verify current provider terms.",amount:"Not independently quantified",expiry:"Not independently verified"},
      requires_credit_card:"Unverified", authentication:x.auth||"No",
      protocols:[x.https==="Yes"?"HTTPS":"HTTP/HTTPS"], sdk_languages:[],
      commercial_use:"Unverified; check provider terms.", self_hostable:"Unverified",
      webhooks:"Unverified", rate_limit:"Unverified", free_tier_reset:"Unverified",
      uses:[x.category,x.description], last_verified:null,
      verified_by:"public-apis-community-source",status:"upstream-community",
      verification_status:"community-free-source",
      verification_sources:{provider:x.provider_url}
    } : x;
    window.API_CATALOG = [...local,...(expansion.providers||[]).map(normalize)]
      .filter(x => { const k=String(x.name||"").toLowerCase(); if(seen.has(k)) return false; seen.add(k); return true; })
      .slice(0,2500);
    window.dispatchEvent(new Event("api-catalog-ready"));
  } catch (_) {}
})();