const DATA_VERSION = "20261002-01";
const INDEX_URL = new URL("data/catalog-index.json?v=" + DATA_VERSION, document.baseURI).href;
const PROFILE_URL = new URL("data/provider_profiles.json?v=" + DATA_VERSION, document.baseURI).href;
const CHANGE_URL = new URL("data/change_log.json?v=" + DATA_VERSION, document.baseURI).href;
const EVIDENCE_URL = new URL("data/web_verified_overrides.json?v=" + DATA_VERSION, document.baseURI).href;
const QUALITY_EVIDENCE_URL = new URL("data/usage_quality_evidence.json?v=" + DATA_VERSION, document.baseURI).href;
const BILLING_EVIDENCE_URL = new URL("data/billing_evidence.json?v=" + DATA_VERSION, document.baseURI).href;
const LIMIT_EVIDENCE_URL = new URL("data/free_limit_evidence.json?v=" + DATA_VERSION, document.baseURI).href;
const PROFILE_SHARD_BASE = "data/profiles/";

let INDEX_PROMISE = null;
let PROFILE_PROMISE = null;
let EVIDENCE_PROMISE = null;
let LIMIT_EVIDENCE_PROMISE = null;
let QUALITY_EVIDENCE_PROMISE = null;
let BILLING_EVIDENCE_PROMISE = null;

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (m) => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"
}[m]));

function providerSlug(name) { return String(name || "").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim().split(/\s+/).filter(Boolean).join("-") || "general"; }

function safeUrl(url) {
  try { const u = new URL(String(url), document.baseURI); return (u.protocol === "https:" || u.protocol === "http:") ? u.href : null; } catch (_) { return null; }
}
function link(url, label) {
  const safe = safeUrl(url);
  return safe
    ? '<a href="' + esc(safe) + '" target="_blank" rel="noopener noreferrer nofollow">' + esc(label || safe) + '</a>'
    : '<span class="muted">Not publicly stated</span>';
}

function uses(list, fallback) {
  const items = Array.isArray(list) && list.length ? list : (fallback ? [fallback] : ["Not independently specified"]);
  return "<ul>" + items.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>";
}

function freeValue(p) {
  const qs = p.usage_quality?.free_access_status;
  if (qs === "not-free-currently" || qs === "no-api-free-quota") return false;
  if (qs === "free") return true;
  if (typeof p.free_tier === "boolean") return p.free_tier;
  return p.free_tier?.has_free_tier;
}

function isCommunity(p) {
  return p.verification_status === "community-free-source" || p.status === "upstream-community";
}

function freeTier(p) {
  const v = freeValue(p);
  if (isCommunity(p)) return '<span class="pill good">Community-listed free</span>';
  if (v === true) return '<span class="pill good">Free access recorded</span>';
  if (v === false) return '<span class="pill">No free tier recorded</span>';
  return '<span class="pill warn">Not publicly stated</span>';
}

function status(p) {
  if (p.last_verified) {
    const age=(Date.now()-Date.parse(p.last_verified+"T00:00:00Z"))/86400000;
    if (Number.isFinite(age) && age > 365) return '<span class="pill warn">Needs re-verification</span>';
    if (Number.isFinite(age) && age > 180 && p.status !== "active") return '<span class="pill warn">Needs re-verification</span>';
  }
  if (p.status === "active") return '<span class="pill good">Active</span>';
  if (p.status === "needs re-verification") return '<span class="pill warn">Needs re-verification</span>';
  if (p.status === "candidate") return '<span class="pill warn">Candidate</span>';
  return '<span class="pill">' + esc(p.status || "Catalog only") + "</span>";
}

function nav() {
  return '<nav class="nav">' +
    '<a class="logo" href="index.html">Free API Directory</a>' +
    '<a href="finder.html">Find an API</a><a href="usecases.html">🧩 Use Cases</a><a href="learning.html">📚 Learning Hub</a>' +
    '<a href="recommend.html">✨ Find Best API</a>' +
    '<a href="compare.html">Compare</a><a href="stack.html">🏗️ Stack</a><a href="calculator.html">💰 Free Calculator</a><a href="collections.html">⭐ Collections</a>' +
    '<a href="keys.html">🔐 My API Keys</a>' +
    '<a href="changes.html">Verified / Changed</a><a href="health.html">🔄 Health</a><a href="playground.html">🧪 Playground</a><a href="code.html">💻 Code</a>' +
    '<a href="criteria.html">Browse</a><a href="student-friendly.html">🎓 Student APIs</a><a href="security.html">🔐 Security</a><a href="submit.html">📥 Submit API</a><a href="quality.html">Data Quality</a>' +
  "</nav>";
}

function shell(html) {
  const root = $("#app");
  if (!root) return;
  root.innerHTML = '<div class="wrap">' + nav() + html + "</div>";
}

async function getJson(url) {
  const response = await fetch(url, {cache:"force-cache"});
  if (!response.ok) throw new Error("Could not load data (HTTP " + response.status + ")");
  return response.json();
}

function prepareIndex(list) {
  return list.map((p) => {
    if (!p._searchText) {
      p._searchText = [
        p.name, p.category, p.description, p.status
      ].join(" ").toLowerCase();
    }
    return p;
  });
}

async function loadApis() {
  if (!INDEX_PROMISE) {
    INDEX_PROMISE = getJson(INDEX_URL).then((d) => {
      if (!d || !Array.isArray(d.providers)) throw new Error("Invalid catalog index");
      return Promise.all([loadEvidence(), loadQualityEvidence()]).then(([evidence, quality]) => { const byName = new Map((Array.isArray(evidence)?evidence:[]).map(x => [String(x.name).toLowerCase(), x])); const qByName = new Map((Array.isArray(quality)?quality:[]).map(x => [String(x.name).toLowerCase(), x])); return prepareIndex(d.providers.map(p => { const e=byName.get(String(p.name).toLowerCase()); const q=qByName.get(String(p.name).toLowerCase()); return {...p, ...(e||{}), ...(q?{usage_quality:q.usage_quality,usage_quality_source_type:q.source_type,usage_quality_verified_at:q.verified_at,usage_quality_sources:q.source_urls,usage_quality_community_note:q.community_note}:{}), evidence_sources:e?.sources||p.evidence_sources||[]}; })); });
    });
  }
  return INDEX_PROMISE;
}

async function loadEvidence() {
  if (!EVIDENCE_PROMISE) EVIDENCE_PROMISE = getJson(EVIDENCE_URL).catch(() => []);
  return EVIDENCE_PROMISE;
}

async function loadLimitEvidence() {
  if (!LIMIT_EVIDENCE_PROMISE) LIMIT_EVIDENCE_PROMISE = getJson(LIMIT_EVIDENCE_URL).catch(() => []);
  return LIMIT_EVIDENCE_PROMISE;
}

async function loadQualityEvidence() {
  if (!QUALITY_EVIDENCE_PROMISE) QUALITY_EVIDENCE_PROMISE = getJson(QUALITY_EVIDENCE_URL).catch(() => []);
  return QUALITY_EVIDENCE_PROMISE;
}

async function loadBillingEvidence() {
  if (!BILLING_EVIDENCE_PROMISE) BILLING_EVIDENCE_PROMISE = getJson(BILLING_EVIDENCE_URL).catch(() => []);
  return BILLING_EVIDENCE_PROMISE;
}

function billingEvidenceFor(name, evidence) {
  const key = String(name || "").toLowerCase();
  return (Array.isArray(evidence) ? evidence : []).find(x => String(x.name || "").toLowerCase() === key) || null;
}

function limitEvidenceFor(name, evidence) {
  const key = String(name || "").toLowerCase();
  return (Array.isArray(evidence) ? evidence : []).find(x => String(x.name || "").toLowerCase() === key) || null;
}

async function loadProfiles() {
  // Kept as a compatibility API for older callers. Runtime pages now use the
  // lightweight catalog index and load one profile shard only when needed.
  return loadApis();
}

async function loadProfileShard(name) {
  const url = new URL(PROFILE_SHARD_BASE + providerSlug(name) + ".json?v=" + DATA_VERSION, document.baseURI).href;
  try {
    const profile = await getJson(url);
    return profile && profile.name ? profile : null;
  } catch (_) {
    return null;
  }
}

function debounce(fn, wait) {
  let timer = 0;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

async function finder() {
  const a = await loadApis();
  shell(
    '<section class="hero"><h1>Find an API</h1><p>Search the lightweight catalog index. Full provider profiles are loaded only when you open a provider.</p></section>' +
    '<div class="card tool"><input id="q" class="input" placeholder="Search APIs…" autocomplete="off">' +
    '<select id="f" class="select"><option value="">Free status: any</option><option value="yes">Free access recorded</option><option value="unknown">Free status not publicly stated</option><option value="no">No free tier recorded</option></select>' +
    '<select id="c" class="select"><option value="">Card requirement: any</option><option value="no">No card recorded</option><option value="yes">Card required</option><option value="unknown">Not publicly stated</option></select><select id="cat" class="select"><option value="">Category: any</option></select><select id="v" class="select"><option value="">Verification: any</option><option value="verified">Verified active</option><option value="candidate">Candidate / needs review</option></select><select id="uq" class="select"><option value="">Usage-quality evidence: any</option><option value="available">Has source-linked evidence</option><option value="official">Official usage evidence</option><option value="community">Community usage evidence</option></select><select id="region" class="select"><option value="">Region: any / not specified</option><option value="explicit">Explicit regional data only</option></select><select id="auth" class="select"><option value="">Authentication: any</option><option value="key">API key/token</option><option value="none">No authentication recorded</option></select><select id="commercial" class="select"><option value="">Commercial use: any</option><option value="yes">Commercial use recorded</option><option value="unknown">Not publicly stated</option></select><select id="age" class="select"><option value="">Verification age: any</option><option value="30">Verified ≤30 days</option><option value="90">Verified ≤90 days</option><option value="180">Verified ≤180 days</option></select><select id="access" class="select"><option value="">Access: any</option><option value="keyless">Prefer keyless</option><option value="nocard">No card recorded</option><option value="noaccount">No account evidence</option></select></div>' +
    '<div id="r"></div>'
  );

  let visible = 100;
  const categories = [...new Set(a.map(p => p.category).filter(Boolean))].sort();
  $("#cat").innerHTML += categories.map(x => "<option value=\"" + esc(x) + "\">" + esc(x) + "</option>").join("");

  function getRows() {
    const q = $("#q").value.toLowerCase().trim();
    const f = $("#f").value;
    const c = $("#c").value;
    const uq = $("#uq").value; const auth=$("#auth").value; const commercial=$("#commercial").value; const age=Number($("#age").value||0); const access=$("#access").value;
    return a.filter(p => {
      const fv = freeValue(p);
      const freeOK =
        !f ||
        (f === "yes" && fv === true) ||
        (f === "no" && fv === false) ||
        (f === "unknown" && fv == null);
      const cardOK =
        !c ||
        (c === "no" && p.requires_credit_card === false) ||
        (c === "yes" && p.requires_credit_card === true) ||
        (c === "unknown" && typeof p.requires_credit_card !== "boolean");
      const catOK = !$("#cat").value || p.category === $("#cat").value;
      const regionValue=$("#region").value; const regions=[p.region,p.data_region,...(Array.isArray(p.regions)?p.regions:[]),...(Array.isArray(p.data_regions)?p.data_regions:[])].filter(Boolean).map(String).join(" ").toLowerCase(); const regionOK=!regionValue || (regionValue==="explicit" && regions.length>0);
      const v = $("#v").value; const verifiedOK = !v || (v === "verified" ? (p.status === "active" && !!p.last_verified) : (p.status === "candidate" || p.status === "needs re-verification" || p.status === "upstream-community"));
      const usageEvidenceOK = !uq || (uq === "available" ? !!p.usage_quality : uq === "official" ? !!p.usage_quality && p.usage_quality_source_type === "official" : !!p.usage_quality && p.usage_quality_source_type === "community"); const authText=String(p.authentication||"").toLowerCase(); const authOK=!auth || (auth==="key" ? /key|token|oauth|bearer/.test(authText) : /none|not required|keyless|no auth/.test(authText)); const commText=String(p.commercial_use||p.usage_quality?.commercial_use||"").toLowerCase(); const commercialOK=!commercial || (commercial==="yes" ? commText && !/not publicly stated|unknown|unclear/.test(commText) : /not publicly stated|unknown|unclear/.test(commText)); const verifiedDate=p.last_verified?Date.parse(String(p.last_verified).slice(0,10)+"T00:00:00Z"):NaN; const days=Number.isFinite(verifiedDate)?(Date.now()-verifiedDate)/86400000:Infinity; const ageOK=!age || days<=age; const accessText=String(p.access_requirements||p.usage_quality?.access||"").toLowerCase(); const accessOK=!access || (access==="keyless" ? /none|not required|keyless|no auth/.test(authText) : access==="nocard" ? p.requires_credit_card===false : /no account|without account/.test(accessText)); return (!q || p._searchText.includes(q)) && freeOK && cardOK && catOK && regionOK && verifiedOK && usageEvidenceOK && authOK && commercialOK && ageOK && accessOK;
    });
  }

  function render() {
    let rows = getRows();
    const q = $("#q").value.toLowerCase().trim();
    if (q) rows = rows.map(p => {
      const n=p.name.toLowerCase(), d=(p.description||"").toLowerCase(), cat=(p.category||"").toLowerCase();
      let score=n===q?100:n.startsWith(q)?60:n.includes(q)?40:0;
      if(cat.includes(q))score+=15;if(d.includes(q))score+=5;
      return {p,score};
    }).sort((a,b)=>b.score-a.score).map(x=>x.p);
    const shown = rows.slice(0, visible);
    const more = rows.length > shown.length;
    $("#r").innerHTML =
      '<div class="tablebox"><div class="scroll"><table><thead><tr>' +
      '<th>Provider</th><th>Category</th><th>Free tier</th><th>Description</th><th>Verification</th></tr></thead><tbody>' +
      shown.map(p => '<tr><td class="provider"><a href="api.html?provider=' + encodeURIComponent(p.name) + '">' + esc(p.name) +
        '</a><br><a class="save-key-link" href="keys.html?provider=' + encodeURIComponent(p.name) + '">🔐 Save key</a></td><td>' + esc(p.category) +
        '</td><td>' + freeTier(p) + '</td><td class="uses">' + uses(null, p.description) +
        '</td><td>' + status(p) + '<br>' + esc(p.last_verified || "Not recorded") + '</td></tr>').join("") +
      '</tbody></table></div></div>' +
      '<div class="tool"><p class="muted">' + rows.length + ' matches; showing ' + shown.length + '.</p>' +
      (more ? '<button id="more" class="btn secondary">Load 100 more</button>' : '') + '</div>';

    const moreButton = $("#more");
    if (moreButton) moreButton.onclick = () => { visible += 100; render(); };
  }

  const rerender = debounce(() => { visible = 100; render(); }, 120);
  $("#q").addEventListener("input", rerender);
  $("#f").addEventListener("change", () => { visible = 100; render(); });
  $("#c").addEventListener("change", () => { visible = 100; render(); });
  $("#uq").addEventListener("change", () => { visible = 100; render(); }); $("#cat").addEventListener("change",()=>{visible=100;render();}); $("#v").addEventListener("change",()=>{visible=100;render();}); $("#region").addEventListener("change",()=>{visible=100;render();}); $("#auth").addEventListener("change",()=>{visible=100;render();}); $("#commercial").addEventListener("change",()=>{visible=100;render();}); $("#age").addEventListener("change",()=>{visible=100;render();}); $("#access").addEventListener("change",()=>{visible=100;render();});
  render();
}

async function compare() {
  const a = await loadApis();
  shell(
    '<section class="hero"><h1>Compare APIs</h1><p>Search for up to four providers. Detailed fields are fetched only after you select providers.</p></section>' +
    '<div class="card tool"><input id="compare-q" class="input" placeholder="Search providers to add…" autocomplete="off"><button id="clear" class="btn secondary">Clear</button></div>' +
    '<div id="compare-suggestions"></div><div id="compare-selected"></div><div id="r"></div>'
  );

  const chosen = [];
  const query = $("#compare-q");
  const suggestions = $("#compare-suggestions");

  function renderSuggestions() {
    const q = query.value.toLowerCase().trim();
    if (!q) {
      suggestions.innerHTML = '<p class="muted">Start typing a provider name. Up to 15 matches will appear.</p>';
      return;
    }
    const rows = a.filter(p => !chosen.includes(p.name) && p._searchText.includes(q)).slice(0, 15);
    suggestions.innerHTML = rows.length
      ? '<div class="grid">' + rows.map(p =>
          '<button class="card provider-pick" data-name="' + esc(p.name) + '" type="button"><b>' + esc(p.name) +
          '</b><br><span class="muted">' + esc(p.category || "") + '</span></button>').join("") + '</div>'
      : '<p class="muted">No providers found.</p>';
  }

  async function add(name) {
    if (!name || chosen.includes(name) || chosen.length >= 4) return;
    chosen.push(name);
    query.value = "";
    renderSuggestions();
    renderSelected();
    await renderComparison();
  }

  function renderSelected() {
    $("#compare-selected").innerHTML = chosen.length
      ? '<div class="card"><b>Selected:</b> ' + chosen.map(n =>
          '<button class="btn secondary" data-remove="' + esc(n) + '" type="button" style="margin:4px">' + esc(n) + ' ×</button>'
        ).join("") + '</div>'
      : "";
    document.querySelectorAll("[data-remove]").forEach(b => b.onclick = () => {
      const i = chosen.indexOf(b.dataset.remove);
      if (i >= 0) chosen.splice(i, 1);
      renderSelected();
      renderComparison();
    });
  }

  async function renderComparison() {
    if (!chosen.length) {
      $("#r").innerHTML = '<div class="card">Select up to four providers above.</div>';
      return;
    }
    $("#r").innerHTML = '<div class="card">Loading provider details…</div>';
    const ps = chosen.map(n => a.find(x => x.name === n)).filter(Boolean);
    const fields = [
      ["Free tier", p => freeValue(p) === true ? "Recorded" : freeValue(p) === false ? "No" : "Not publicly stated"],
      ["Free amount", p => p.free_tier?.amount || "Not publicly stated"],
      ["Credit card", p => typeof p.requires_credit_card === "boolean" ? String(p.requires_credit_card) : (p.usage_quality?.payment_method || "Not publicly stated")],
      ["Authentication", p => p.authentication || "Not publicly stated"],
      ["Rate limit", p => p.rate_limit || p.usage_quality?.rate_limit || "Not publicly stated"],
      ["SDKs", p => p.sdk_languages?.length ? p.sdk_languages.join(", ") : "Not publicly stated"],
      ["Protocols", p => p.protocols?.length ? p.protocols.join(", ") : "Not publicly stated"],
      ["Commercial use", p => p.commercial_use || p.usage_quality?.commercial_use || "Not publicly stated"],
      ["Self-hostable", p => p.self_hostable || "Not publicly stated"],
      ["Webhooks", p => p.webhooks || "Not publicly stated"],
      ["Usage-quality evidence", p => p.usage_quality ? ((p.usage_quality_source_type || "source") + " · " + (p.usage_quality_verified_at || "date not recorded")) : "Not yet structured"],
      ["Last verified", p => p.last_verified || "Not recorded"]
    ];
    $("#r").innerHTML = '<div class="tablebox"><div class="scroll"><table><thead><tr><th>Field</th>' +
      ps.map(p => "<th>" + esc(p.name) + "</th>").join("") + "</tr></thead><tbody>" +
      fields.map(f => "<tr><td><b>" + esc(f[0]) + "</b></td>" +
        ps.map(p => "<td>" + esc(f[1](p)) + "</td>").join("") + "</tr>").join("") +
      "</tbody></table></div></div>";
  }

  query.addEventListener("input", debounce(renderSuggestions, 100));
  suggestions.addEventListener("click", e => {
    const button = e.target.closest("[data-name]");
    if (button) add(button.dataset.name);
  });
  $("#clear").onclick = () => { chosen.length = 0; query.value = ""; renderSelected(); renderSuggestions(); renderComparison(); };
  renderSuggestions();
  renderSelected();
  renderComparison();
}

async function changes() {
  const a = await loadApis();
  shell(
    '<section class="hero"><h1>Verification history</h1><p>Catalog verification dates and source-change records.</p></section>' +
    '<div class="tablebox"><div class="scroll"><table><thead><tr><th>Provider</th><th>Date</th><th>Status / event</th><th>Source</th></tr></thead><tbody id="changeRows"><tr><td colspan="4">Updating records…</td></tr></tbody></table></div></div>'
  );
  let records = [];
  try { records = await getJson(CHANGE_URL); } catch (_) {}
  if (!Array.isArray(records) || !records.length) {
    records = a.filter(x => x.last_verified)
      .sort((x,y) => String(y.last_verified).localeCompare(String(x.last_verified)))
      .slice(0,100);
  }
  const body = $("#changeRows");
  if (!body) return;
  body.innerHTML = records.map(p => {
    const name = p.provider || p.name || "Unknown";
    const date = p.date || p.last_verified || "Not recorded";
    return '<tr><td class="provider"><a href="api.html?provider=' + encodeURIComponent(name) + '">' + esc(name) +
      '</a></td><td>' + esc(date) + '</td><td>' + esc(p.type || p.status || "Verification record") +
      '</td><td>' + (p.source_url ? link(p.source_url,"Open source") : esc(p.verification_status || "Catalog verification")) +
      "</td></tr>";
  }).join("") || '<tr><td colspan="4">No verification records available.</td></tr>';
}

async function useCasesPage(){const a=await loadApis();const cases=[["🤖 AI & Chatbots","chatbot, conversational AI, language model, text generation, embeddings, agents"],["📷 Images & Vision","image recognition, OCR, computer vision, image generation, image analysis"],["🎙 Audio & Speech","speech to text, text to speech, transcription, voice, audio"],["🗺 Maps & Location","maps, geocoding, routing, directions, places, location"],["🌦 Weather & Climate","weather, forecast, climate, temperature, meteorology"],["🧬 Science & Research","research, scientific, biology, chemistry, astronomy, biodiversity"],["💰 Finance & Markets","finance, stocks, markets, currency, banking, payments"],["📰 News & Content","news, articles, search, content, RSS, publishing"],["💻 Developer Tools","code, GitHub, development, testing, package, developer"],["🎮 Games & Entertainment","games, gaming, sports, music, movies, entertainment"],["📊 Data & Analytics","data, analytics, statistics, datasets, visualization"],["📱 Communication","email, SMS, messaging, notifications, communication"]];shell('<section class="hero"><h1>🧩 API Use Case Explorer</h1><p>Start with what you are building instead of knowing an API name. Choose a use case to find matching providers from the same catalog used everywhere else.</p></section><div class="grid" id="usecase-grid"></div><div id="usecase-results"></div>');const grid=$("#usecase-grid"),results=$("#usecase-results");function render(label,terms){const ts=terms.split(", ").map(x=>x.toLowerCase());const rows=a.map(p=>{const hay=(p._searchText+" "+(p.description||"")+" "+(p.category||"")+" "+(Array.isArray(p.uses)?p.uses.join(" "):"")).toLowerCase();const score=ts.reduce((n,t)=>n+(hay.includes(t)?1:0),0);return {p,score};}).filter(x=>x.score>0).sort((x,y)=>y.score-x.score||String(x.p.name).localeCompare(String(y.p.name))).slice(0,30);results.innerHTML='<div class="card"><h2>'+esc(label)+'</h2><p class="muted">'+rows.length+' matching providers shown.</p><div class="tablebox"><div class="scroll"><table><thead><tr><th>Provider</th><th>Category</th><th>Free</th><th>Verification</th><th></th></tr></thead><tbody>'+rows.map(x=>'<tr><td class="provider"><a href="api.html?provider='+encodeURIComponent(x.p.name)+'">'+esc(x.p.name)+'</a></td><td>'+esc(x.p.category||"Not stated")+'</td><td>'+freeTier(x.p)+'</td><td>'+status(x.p)+'</td><td><a class="btn secondary" href="api.html?provider='+encodeURIComponent(x.p.name)+'">Explain</a></td></tr>').join("")+'</tbody></table></div></div></div>';results.scrollIntoView({behavior:"smooth",block:"start"});}grid.innerHTML=cases.map((c,i)=>'<button class="card" type="button" data-usecase="'+i+'" style="text-align:left;cursor:pointer"><h2>'+c[0]+'</h2><p class="muted">'+c[1].split(", ").slice(0,4).join(" · ")+'</p></button>').join("");document.querySelectorAll("[data-usecase]").forEach(b=>b.onclick=()=>{const c=cases[Number(b.dataset.usecase)];render(c[0],c[1]);});}

async function apiProfile() {
  const name = new URLSearchParams(location.search).get("provider");
  if (!name) {
    shell('<section class="hero"><h1>API not specified</h1><p>Choose a provider from the finder or browse pages.</p></section>');
    return;
  }
  const index = await loadApis();
  const base = index.find(x => x.name === name);
  const shard = base ? await loadProfileShard(base.name) : null;
  const p = base ? {...base, ...(shard || {})} : null;
  if (!p) {
    shell('<section class="hero"><h1>API not found</h1><p>This provider is not currently present in the live catalog.</p></section>');
    return;
  }
  const source = p.verification_sources?.provider || p.documentation_url || p.signup_url;
  shell(
    '<section class="hero"><h1>' + esc(p.name) + '</h1><p>' + esc(p.description || "API provider") + '</p></section>' +
    '<div class="card"><div class="kv">' +
    '<b>Category</b><span>' + esc(p.category) + '</span>' +
    '<b>Free tier</b><span>' + freeTier(p) + ' ' + esc(p.free_tier?.details || "") + '</span>' +
    '<b>Authentication</b><span>' + esc(p.authentication || "Not publicly stated") + '</span>' +
    '<b>Credit card</b><span>' + esc(typeof p.requires_credit_card === "boolean" ? (p.requires_credit_card ? "Required" : "Not required") : String(p.requires_credit_card || "Not publicly stated")) + '</span>' +
    '<b>Rate limit</b><span>' + esc(p.rate_limit || "Not publicly stated") + '</span>' +
    '<b>Commercial use</b><span>' + esc(p.commercial_use || p.usage_quality?.commercial_use || "Not publicly stated") + '</span>' +
    '<b>Functions</b><span>' + uses(p.uses) + '</span>' +
    '<b>Provider</b><span>' + link(source, "Official / source page") + '</span>' +
    '<b>API key</b><span><a class="save-key-link" href="keys.html?provider=' + encodeURIComponent(p.name) + '">🔐 Save key locally</a></span>' +
    '<b>Verification</b><span>' + status(p) + ' ' + esc(p.last_verified || "Not independently verified") + '</span>' +
    '</div></div>' +
    (p.usage_quality ? '<div class="card"><h2>Usage-quality evidence</h2><div class="grid">' +
      Object.entries(p.usage_quality).map(([k,v]) => '<div class="card"><b>' + esc(k.replace(/_/g," ")) + '</b><p>' + esc(typeof v==="string" ? v : JSON.stringify(v)) + '</p></div>').join("") +
      '</div><p class="muted">Evidence source: ' + esc(p.usage_quality_source_type || "source") + ' · Verified: ' + esc(p.usage_quality_verified_at || "Not recorded") + '</p>' +
      (Array.isArray(p.usage_quality_sources) ? '<p>' + p.usage_quality_sources.map(u=>link(u,"Open source")).join(" · ") + '</p>' : '') +
      (p.usage_quality_community_note ? '<div class="notice"><b>Community note:</b> This supplementary information comes from a community/forum source and is not treated as a primary provider claim.</div>' : '') +
      '</div>' : '') +
    '<div class="card"><h2>🧠 Explain this API</h2><p><b>What is it?</b> '+esc(p.description || "This provider offers an API service; consult the linked provider documentation for exact scope.")+'</p><p><b>What can I build?</b> '+esc((Array.isArray(p.uses)&&p.uses.length?p.uses.join(", "):p.category||"Projects in this provider category"))+'</p><p><b>Do I need an API key?</b> '+esc(p.authentication || "Authentication is not publicly stated in the catalog.")+'</p><p><b>Is it free?</b> '+esc(freeValue(p)===true ? "A free-access option is recorded." : freeValue(p)===false ? "No free tier is currently recorded." : "The catalog does not have enough public evidence to state this.")+'</p><p><b>How much can I use?</b> '+esc(p.free_tier?.details || p.rate_limit || "A machine-readable allowance is not publicly stated for this provider.")+'</p><p><b>Do I need a card?</b> '+esc(typeof p.requires_credit_card==="boolean" ? (p.requires_credit_card ? "A card requirement is recorded." : "No card requirement is recorded.") : "Not publicly stated.")+'</p><p><b>Can I use it commercially?</b> '+esc(p.commercial_use || p.usage_quality?.commercial_use || "Not publicly stated; check provider terms before commercial use.")+'</p><p><b>How do I start?</b> Open the provider documentation or API-key destination above, then follow its authentication and first-request instructions. The directory does not guess undocumented setup steps.</p></div>',
    (p.usage_quality ? '' : '<div class="card notice"><b>Usage-quality evidence:</b> No structured source-linked usage-quality record is available yet for this provider. Unknown values are intentionally not guessed.</div>')
  );
}

async function recommend() {
  const a = await loadApis();
  shell(
    '<section class="hero"><h1>Find the Best API Provider</h1><p>Describe exactly what you need. Specific words from your request drive relevance; generic terms such as “API”, “key”, “tool” and “product” are ignored instead of boosting unrelated providers.</p></section>' +
    '<div class="card tool recommend-form">' +
      '<label><b>Your role</b><select id="role" class="select"><option value="">Any role</option><option>Student</option><option>Developer</option><option>Researcher</option><option>Data scientist</option><option>Founder / startup</option><option>Teacher / educator</option><option>Product / business</option><option>Hobbyist</option></select></label>' +
      '<label><b>What are you building?</b><textarea id="objective" class="input" style="min-height:95px;width:100%" placeholder="Example: I am a student building a bird-population dashboard that combines species data, weather and maps."></textarea></label>' +
      '<label><b>Required capabilities</b><input id="needs" class="input" placeholder="weather, maps, biodiversity, analytics"></label>' +
      '<label><b>Free-access preference</b><select id="free" class="select"><option value="any">Any</option><option value="strict">Free only / no paid commitment</option><option value="tier">Free tier is acceptable</option><option value="keyless">Prefer no API key</option></select></label>' +
      '<label><b>Account / card</b><select id="access" class="select"><option value="any">Any</option><option value="noaccount">Prefer no account</option><option value="nocard">No credit card</option><option value="both">No account and no card</option></select></label>' +
      '<label><b>Commercial use</b><select id="commercial" class="select"><option value="any">Any</option><option value="required">Commercial use required</option><option value="preferred">Prefer commercial use</option></select></label>' +
      '<label><b>Scale</b><select id="scale" class="select"><option value="any">Any</option><option value="small">Small project / learning</option><option value="medium">Growing project</option><option value="large">Higher-volume production</option></select></label>' +
      '<button id="go" class="btn">Find my best matches</button>' +
    '</div>' +
    '<div id="method" class="notice">Specific capability terms carry the majority of the score. Common filler, generic API terminology and broad words are filtered out. Scores are proportional to how much of the user’s specific request each provider actually matches, with access constraints and verification used as secondary fit signals.</div>' +
    '<div id="r"></div>'
  );

  const val = id => ($("#" + id)?.value || "").trim();

  // These words are intentionally excluded from capability matching. They
  // describe the delivery mechanism or general intent, not the thing the
  // user actually needs the provider to do.
  const GENERIC_TERMS = new Set([
    "api","apis","key","keys","apikey","token","tokens","auth","authentication",
    "tool","tools","product","products","service","services","platform","provider",
    "providers","solution","solutions","software","application","applications","app",
    "system","systems","technology","tech","resource","resources","project","projects",
    "thing","things","stuff","assistant","assist","assistance","help","helper",
    "use","uses","using","used","need","needs","needed","want","wants","wanted",
    "looking","look","find","finding","best","good","great","make","making","create",
    "build","building","provide","provides","support","supports","work","working",
    "free","cheap","cheapest","paid","price","pricing","cost","costs","keyless",
    "student","developer","developers","researcher","researchers","founder",
    "startup","startups","teacher","educator","education","business","commercial",
    "production","small","medium","large","high","volume","project"
  ]);

  const STOP_WORDS = new Set([
    "a","an","and","are","as","at","be","by","can","do","for","from","how","i","if",
    "in","into","is","it","its","me","my","of","on","or","so","that","the","this",
    "to","up","we","with","you","your","our","their","they","them","than","then",
    "also","about","after","before","between","over","under","via","want","would"
  ]);

  function normalizeTerm(term) {
    let t = String(term || "").toLowerCase().replace(/[^a-z0-9]+/g, "").trim();
    if (!t) return "";
    // Light normalization only; avoid aggressive stemming that could merge
    // unrelated technical terms.
    if (t.length > 5 && t.endsWith("ies")) t = t.slice(0,-3) + "y";
    else if (t.length > 5 && t.endsWith("ing")) t = t.slice(0,-3);
    else if (t.length > 4 && t.endsWith("es")) t = t.slice(0,-2);
    else if (t.length > 4 && t.endsWith("s")) t = t.slice(0,-1);
    return t;
  }

  function specificTerms(text) {
    return [...new Set(String(text || "").toLowerCase()
      .split(/[^a-z0-9]+/)
      .map(normalizeTerm)
      .filter(t => t.length >= 3 && !STOP_WORDS.has(t) && !GENERIC_TERMS.has(t)))];
  }

  function phraseList(text) {
    return [...new Set(String(text || "").toLowerCase()
      .split(/[,.!?;:(){}\[\]"']/)
      .map(x => x.trim())
      .filter(x => {
        const terms = specificTerms(x);
        return terms.length >= 2;
      }))];
  }

  const corpusTerms = a.map(p => new Set(specificTerms([
    p.name,p.category,p.description,
    ...(p.uses || []), ...(p.protocols || []), ...(p.sdk_languages || [])
  ].join(" "))));

  const documentFrequency = new Map();
  corpusTerms.forEach(set => set.forEach(term => {
    documentFrequency.set(term, (documentFrequency.get(term) || 0) + 1);
  }));

  function termWeight(term) {
    const df = documentFrequency.get(term) || 0;
    const n = Math.max(1, a.length);
    // Rare, specific terms count more; common terms count less.
    return 1 + Math.min(3.5, Math.log((n + 1) / (df + 1)));
  }

  function queryTerms(form) {
    const needsTerms = specificTerms(form.needs);
    const objectiveTerms = specificTerms(form.objective);
    const weighted = new Map();

    needsTerms.forEach(t => weighted.set(t, (weighted.get(t) || 0) + 1.8));
    objectiveTerms.forEach(t => weighted.set(t, (weighted.get(t) || 0) + 1));

    return [...weighted.entries()].map(([term, sourceWeight]) => ({
      term,
      weight: sourceWeight * termWeight(term)
    }));
  }

  function scoreProvider(p, profile, form) {
    const searchText = [
      p.name,p.category,p.description,
      ...(p.uses || []), ...(p.protocols || []), ...(p.sdk_languages || [])
    ].join(" ").toLowerCase();
    const providerTerms = new Set(specificTerms(searchText));
    const requested = queryTerms(form);
    const totalQueryWeight = requested.reduce((n,x) => n + x.weight, 0);

    let relevance = 0;
    const matched = [];
    requested.forEach(q => {
      if (providerTerms.has(q.term)) {
        relevance += q.weight;
        matched.push(q.term);
      } else {
        // Small fallback for a direct substring only when the full normalized
        // term is visibly present in a provider field.
        const raw = q.term.length >= 6 && searchText.includes(q.term);
        if (raw) {
          relevance += q.weight * 0.85;
          matched.push(q.term);
        }
      }
    });

    const relevanceRatio = totalQueryWeight ? Math.min(1, relevance / totalQueryWeight) : 0;
    const phrases = [...new Set([
      ...phraseList(form.needs),
      ...phraseList(form.objective)
    ])];
    const phraseHits = phrases.filter(phrase => {
      const terms = specificTerms(phrase);
      return terms.length >= 2 && terms.every(t => providerTerms.has(t)) &&
        searchText.includes(terms.join(" "));
    }).length;
    const phraseRatio = phrases.length ? phraseHits / phrases.length : 0;

    const roleTerms = {
      "Student":["education","learning","academic","research"],
      "Developer":["coding","sdk","webhook","backend","software"],
      "Researcher":["scientific","metadata","dataset","literature"],
      "Data scientist":["data","analytics","statistics","dataset","machine","learning"],
      "Founder / startup":["startup","production","scalable","business"],
      "Teacher / educator":["teaching","learning","academic"],
      "Product / business":["business","analytics","automation"],
      "Hobbyist":["public","simple","open"]
    };
    const rolePool = roleTerms[form.role] || [];
    const roleSpecific = rolePool.map(normalizeTerm).filter(t => t && !GENERIC_TERMS.has(t));
    const roleHits = roleSpecific.filter(t => providerTerms.has(t)).length;
    const roleFit = roleSpecific.length ? roleHits / roleSpecific.length : 0;

    let constraintTotal = 0;
    let constraintMatched = 0;
    const reasons = [];
    const addConstraint = (weight, ok, label) => {
      constraintTotal += weight;
      if (ok) {
        constraintMatched += weight;
        if (label) reasons.push(label);
      }
    };

    const free = freeValue(profile);
    if (form.free === "strict") addConstraint(16, free === true, free === true ? "free access recorded" : "free requirement not fully documented");
    else if (form.free === "tier") addConstraint(10, free === true, free === true ? "free tier recorded" : "free-tier fit uncertain");
    else if (form.free === "keyless") {
      const auth = String(profile.authentication || "").toLowerCase();
      const keyless = /none|no key|keyless|public/.test(auth);
      addConstraint(10, keyless, keyless ? "keyless/public access" : "key required or not documented");
    }

    const noCard = profile.requires_credit_card === false;
    const noAccount = profile.signup_requires_account === false;
    if (form.access === "nocard" || form.access === "both") {
      addConstraint(8, noCard, noCard ? "no card recorded" : profile.requires_credit_card === true ? "card requirement conflicts" : "card requirement unknown");
    }
    if (form.access === "noaccount" || form.access === "both") {
      addConstraint(8, noAccount, noAccount ? "no account recorded" : profile.signup_requires_account === true ? "account requirement conflicts" : "account requirement unknown");
    }

    if (form.commercial !== "any") {
      const commercial = String(profile.commercial_use || "").toLowerCase();
      const allowed = /allow|yes|permitted|commercial/.test(commercial);
      const prohibited = /no|prohibited|not allowed/.test(commercial);
      addConstraint(10, form.commercial === "preferred" ? allowed : allowed, allowed ? "commercial-use information supports the request" : prohibited ? "commercial use conflicts" : "commercial use unknown");
    }

    if (form.scale === "large") {
      const rate = String(profile.rate_limit || "").toLowerCase();
      const highScale = /high|unlimited|1000|10k|10,000|million/.test(rate);
      addConstraint(8, highScale, highScale ? "documented higher-scale signal" : "higher-scale capacity not documented");
    } else if (form.scale === "small") {
      addConstraint(6, free === true, free === true ? "appropriate for a smaller free project" : "small-project free fit uncertain");
    }

    let verificationFit = 0.45;
    if (profile.status === "active" && profile.last_verified) verificationFit = 1;
    else if (profile.status === "candidate" || profile.research_status === "needs-deeper-provider-review") verificationFit = 0.2;
    else if (profile.last_verified) {
      const age=(Date.now()-Date.parse(profile.last_verified+"T00:00:00Z"))/86400000;
      if (Number.isFinite(age) && age > 365) verificationFit = 0.25;
      else verificationFit = 0.65;
    }

    // Dynamic normalization keeps the result proportional to the information
    // the user actually supplied instead of awarding a fixed arbitrary bonus.
    const components = [
      [0.70, relevanceRatio],
      [0.10, phraseRatio],
      [0.05, roleSpecific.length && form.role ? roleFit : null],
      [0.10, constraintTotal ? (constraintMatched / constraintTotal) : null],
      [0.05, verificationFit]
    ].filter(x => x[1] !== null);

    const totalWeight = components.reduce((n,x) => n + x[0], 0);
    const score = Math.round(100 * components.reduce((n,x) => n + x[0] * x[1], 0) / totalWeight);

    const reasonText = matched.length
      ? "specific match: " + matched.slice(0,8).join(", ")
      : "no specific capability term matched";
    reasons.unshift(reasonText);

    return {
      score,
      relevanceRatio,
      matched,
      reasons: [...new Set(reasons)].slice(0,5)
    };
  }

  $("#go").onclick = async () => {
    const form={role:val("role"),objective:val("objective"),needs:val("needs"),free:val("free"),access:val("access"),commercial:val("commercial"),scale:val("scale")};
    const requestedTerms=queryTerms(form);
    if(!requestedTerms.length) {
      $("#r").innerHTML='<div class="card notice"><h2>Enter a specific requirement</h2><p>Use concrete terms such as “weather”, “geocoding”, “bird species”, “satellite imagery”, “OCR”, “speech transcription” or “stock prices”. Generic words such as API, key, tool, assistant and product are ignored.</p></div>';
      return;
    }

    const ignored = [...specificTerms(form.objective + " " + form.needs)];
    $("#r").innerHTML='<div class="card">Analyzing the catalog against your specific requirements…</div>';
    const profiles=a;
    const byName=new Map(profiles.map(p=>[p.name,p]));
    const ranked=a.map(p=>{
      const profile=byName.get(p.name)||p;
      const s=scoreProvider(p,profile,form);
      return {p,profile,score:s.score,reasons:s.reasons,relevanceRatio:s.relevanceRatio,matched:s.matched};
    })
    .filter(x=>x.relevanceRatio>0)
    .sort((x,y)=>y.score-x.score || y.relevanceRatio-x.relevanceRatio || String(y.profile.last_verified||"").localeCompare(String(x.profile.last_verified||"")) || x.p.name.localeCompare(y.p.name))
    .slice(0,10);

    if(!ranked.length) {
      $("#r").innerHTML='<div class="card"><h2>No matching providers found</h2><p>None of the catalog records contains your specific requirement terms. Try adding a more concrete capability or synonym.</p></div>';
      return;
    }

    const termList=requestedTerms.map(x=>x.term).join(", ");
    $("#method").innerHTML='<b>Specific terms used:</b> '+esc(termList)+'<br><span class="muted">Scoring uses weighted term coverage, rarer terms carry more weight, multi-word phrase matches receive additional weight, and generic API/assistant/tool/product language is excluded.</span>';

    $("#r").innerHTML='<section class="recommend-results"><div class="notice"><b>'+ranked.length+' provider'+(ranked.length===1?"":"s")+' matched.</b> Scores are fit percentages for this request, not universal provider quality ratings.</div>' +
      '<div class="grid">'+ranked.map((x,i)=>{
        const p=x.profile, f=freeValue(p);
        return '<article class="card best-card"><div class="rank">#'+(i+1)+'</div><h2><a href="api.html?provider='+encodeURIComponent(p.name)+'">'+esc(p.name)+'</a></h2>' +
          '<p class="muted">'+esc(p.category||"API provider")+'</p><p>'+esc(p.description||"Cataloged provider.")+'</p>' +
          '<div class="stats"><span class="pill '+(f===true?"good":"warn")+'">'+(f===true?"Free access recorded":f===false?"No free tier recorded":"Free status not publicly stated")+'</span>'+status(p)+'</div>' +
          '<p><b>Why it matched:</b> '+esc(x.reasons.length?x.reasons.join("; "):"specific capability and catalog fit")+'</p>' +
          '<p class="muted"><b>Fit score: '+x.score+'%</b> · Specific-term coverage: '+Math.round(x.relevanceRatio*100)+'% · Last verified: '+esc(p.last_verified||"Not recorded")+'</p>' +
          '<a class="btn secondary" href="api.html?provider='+encodeURIComponent(p.name)+'">View provider</a></article>';
      }).join("")+'</div></section>';
  };
}

function providerOptions(a){return '<option value="">Select a provider</option>'+a.map(function(p){return '<option value="'+esc(p.name)+'">'+esc(p.name)+'</option>';}).join('');}
async function stackBuilder(){
 const a=await loadApis();
 shell('<section class="hero"><h1>🏗️ Build My API Stack</h1><p>Describe a project and get a multi-category starting stack using documented catalog data.</p></section><div class="card tool"><textarea id="stackq" class="input" style="min-height:120px;width:100%" placeholder="Example: free bird-monitoring app using weather, biodiversity data, maps and AI"></textarea><select id="stackfree" class="select"><option value="strict">Prefer documented free access</option><option value="any">Any documented access</option></select><button id="stackgo" class="btn">Build stack</button></div><div id="stackr"></div>');
 $("#stackgo").onclick=function(){var q=$("#stackq").value.toLowerCase(),strict=$("#stackfree").value==="strict";var groups=[["AI / ML",["ai","llm","machine learning","model","language"]],["Weather",["weather","forecast","climate","meteorological"]],["Maps / Geo",["map","geocod","geo","location","places"]],["Research / Data",["research","academic","scientific","dataset","data"]],["Images / Media",["image","photo","media","video","audio"]],["Finance",["finance","financial","stock","currency","payment"]],["Database / Infra",["database","storage","realtime","cloud","infra"]],["Developer Tools",["developer","api","webhook","automation","software"]]];var html=groups.map(function(g){var ranked=a.map(function(p){return {p:p,s:g[1].reduce(function(n,t){return n+((p._searchText||"").includes(t)?1:0);},0)+(strict&&freeValue(p)===true?5:0)};}).filter(function(x){return x.s>0;}).sort(function(x,y){return y.s-x.s;}).slice(0,3);if(!ranked.length)return "";return '<div class="card"><h2>'+g[0]+'</h2>'+ranked.map(function(x){return '<p><b><a href="api.html?provider='+encodeURIComponent(x.p.name)+'">'+esc(x.p.name)+'</a></b> '+freeTier(x.p)+'<br><span class="muted">'+esc(x.p.description||"Cataloged provider.")+'</span></p>';}).join("")+'</div>';}).join("");$("#stackr").innerHTML=html||'<div class="card">No matching stack components found.</div>';};
}
async function freeCalculator(){
 const a=await loadApis();
 const limitEvidence=await loadLimitEvidence();
 const billingEvidence=await loadBillingEvidence();

 shell('<section class="hero"><h1>💰 Free-Tier & Billing Calculator</h1><p>Enter the workload you expect to run. The calculator checks documented free limits first, then estimates the paid bill when a current source-linked price exists. You can also enter your own rate when a provider/model is not machine-readable.</p></section>' +
 '<div class="card tool">' +
 '<label><b>Provider</b><select id="calcprovider" class="select">'+providerOptions(a)+'</select></label>' +
 '<label><b>Pricing source</b><select id="calcsource" class="select"><option value="auto">Use directory-verified pricing</option><option value="custom">Enter my own pricing</option></select></label>' +
 '<label id="modelwrap"><b>Model / price tier</b><select id="calcmodel" class="select"></select></label>' +
 '<label><b>Requests per month</b><input id="calcreq" class="input" type="number" min="0" step="1" value="1000"></label>' +
 '<div class="grid">' +
 '<label><b>Input tokens / request</b><input id="calcinput" class="input" type="number" min="0" step="1" value="1000"></label>' +
 '<label><b>Output tokens / request</b><input id="calcoutput" class="input" type="number" min="0" step="1" value="500"></label>' +
 '<label><b>Cached input tokens / request</b><input id="calccached" class="input" type="number" min="0" step="1" value="0"></label>' +
 '</div>' +
 '<div id="custompricing" class="card" style="display:none"><h3>Custom pricing</h3><div class="grid">' +
 '<label>Input $ / 1M tokens<input id="customin" class="input" type="number" min="0" step="any" value="0"></label>' +
 '<label>Cached input $ / 1M tokens<input id="customcache" class="input" type="number" min="0" step="any" value="0"></label>' +
 '<label>Output $ / 1M tokens<input id="customout" class="input" type="number" min="0" step="any" value="0"></label>' +
 '<label>Request fee $ / 1K requests<input id="customreq" class="input" type="number" min="0" step="any" value="0"></label>' +
 '<label>Monthly base fee $<input id="custombase" class="input" type="number" min="0" step="any" value="0"></label>' +
 '<label>Monthly free credit $<input id="customfree" class="input" type="number" min="0" step="any" value="0"></label>' +
 '</div><p class="muted">Use the provider\'s current pricing page. These values are treated as user-supplied, not directory-verified.</p></div>' +
 '<button id="calcgo" class="btn">Calculate free coverage & bill</button></div><div id="calcr"></div>');

 const $v=id=>document.getElementById(id)?.value;
 const num=id=>{const n=Number($v(id));return Number.isFinite(n)&&n>=0?n:0;};
 const money=n=>Number.isFinite(n)?n.toLocaleString(undefined,{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:6}):"—";
 const fmt=n=>Number.isFinite(n)?n.toLocaleString(undefined,{maximumFractionDigits:2}):"—";

 function renderModels(){
   const p=a.find(x=>x.name===$v("calcprovider")), b=billingEvidenceFor(p&&p.name,billingEvidence), sel=document.getElementById("calcmodel");
   if(!sel)return;
   const models=b&&b.models?Object.keys(b.models):[];
   sel.innerHTML=models.length?models.map(m=>'<option value="'+esc(m)+'">'+esc(m)+'</option>').join(""):'<option value="">No directory pricing model</option>';
   document.getElementById("modelwrap").style.display=$v("calcsource")==="auto"&&models.length?"block":"none";
 }

 function renderPricingSource(){
   const custom=$v("calcsource")==="custom";
   document.getElementById("custompricing").style.display=custom?"block":"none";
   renderModels();
 }

 document.getElementById("calcprovider").addEventListener("change",renderModels);
 document.getElementById("calcsource").addEventListener("change",renderPricingSource);
 renderPricingSource();

 document.getElementById("calcgo").onclick=()=>{
   const p=a.find(x=>x.name===$v("calcprovider")), b=billingEvidenceFor(p&&p.name,billingEvidence);
   if(!p){document.getElementById("calcr").innerHTML='<div class="card notice">Choose a provider.</div>';return;}
   const requests=num("calcreq"), inputPerRequest=num("calcinput"), outputPerRequest=num("calcoutput"), cachedPerRequest=num("calccached");
   const totalInput=inputPerRequest*requests, totalOutput=outputPerRequest*requests, totalCached=cachedPerRequest*requests;
   let inputRate=null, cacheRate=null, outputRate=null, requestRate=0, baseFee=0, freeCredit=0, pricingLabel="", sourceType="custom";
   if($v("calcsource")==="auto"){
     const model=$v("calcmodel");
     const price=b&&b.models&&b.models[model];
     if(price){
       inputRate=Number(price.input_per_1m); cacheRate=price.cached_input_per_1m==null?inputRate:Number(price.cached_input_per_1m); outputRate=Number(price.output_per_1m);
       requestRate=Number(price.request_fee_per_1k||0); baseFee=Number(price.monthly_base_fee||0);
       freeCredit=Number(b.free_monthly_credit||0); pricingLabel=(model?model+" · ":"")+(b.pricing_basis||"documented pricing"); sourceType=b.source_type||"official";
     } else {
       freeCredit=Number(b&&b.free_monthly_credit||0);
       pricingLabel=b?("Provider pricing is model-specific; no machine-readable model price is stored for this provider."):"No directory pricing evidence is available.";
     }
   } else {
     inputRate=num("customin"); cacheRate=num("customcache"); outputRate=num("customout"); requestRate=num("customreq"); baseFee=num("custombase"); freeCredit=num("customfree"); pricingLabel="User-supplied rates"; sourceType="user";
   }

   const hasRates=[inputRate,cacheRate,outputRate].some(v=>Number.isFinite(v)&&v>0)||requestRate>0||baseFee>0;
   const grossTokenCost=Number.isFinite(inputRate)?(totalInput/1e6)*inputRate:0;
   const cachedCost=Number.isFinite(cacheRate)?(totalCached/1e6)*cacheRate:0;
   const uncachedInput=Math.max(0,totalInput-totalCached);
   const correctedInputCost=Number.isFinite(inputRate)?(uncachedInput/1e6)*inputRate:0;
   const outputCost=Number.isFinite(outputRate)?(totalOutput/1e6)*outputRate:0;
   const requestCost=(requests/1000)*requestRate;
   const gross=baseFee+correctedInputCost+cachedCost+outputCost+requestCost;
   const net=Math.max(0,gross-freeCredit);

   const q=limitEvidenceFor(p.name,limitEvidence);
   const monthlyReqLimit=q&&q.quota&&Number.isFinite(Number(q.quota.monthly_requests))?Number(q.quota.monthly_requests):null;
   const dailyReqLimit=q&&q.quota&&Number.isFinite(Number(q.quota.daily_requests))?Number(q.quota.daily_requests):null;
   const monthlyTokenLimit=q&&q.quota&&Number.isFinite(Number(q.quota.monthly_tokens))?Number(q.quota.monthly_tokens):null;
   let freeCoverage="Not numerically determined";
   if(monthlyReqLimit!==null) freeCoverage=requests<=monthlyReqLimit?"Within documented monthly request allowance":Math.max(0,monthlyReqLimit).toLocaleString()+" free requests/month; "+Math.max(0,requests-monthlyReqLimit).toLocaleString()+" requests above it";
   else if(monthlyTokenLimit!==null) freeCoverage=(totalInput+totalOutput)<=monthlyTokenLimit?"Within documented monthly token allowance":"Above documented monthly token allowance";
   else if(dailyReqLimit!==null) freeCoverage=Math.ceil(requests/30)<=dailyReqLimit?"Approx. within daily allowance at a 30-day average":"Average daily workload exceeds documented daily allowance";
   else if(p.usage_quality) freeCoverage="Free-tier access may exist, but the numeric free quota is model/tier-specific in the evidence layer.";

   const pricingSource=b&&b.source_urls?b.source_urls:[]; 
   const evidenceLabel=sourceType==="official"?"Directory-verified official pricing":sourceType==="user"?"User-supplied pricing":"Provider-specific pricing not machine-readable";
   const canShowEstimate=hasRates;
   document.getElementById("calcr").innerHTML=
     '<div class="grid">'+
       '<div class="card"><h2>Workload</h2><p><b>'+fmt(requests)+'</b> requests/month</p><p>'+fmt(totalInput+totalCached)+' input tokens/month</p><p>'+fmt(totalOutput)+' output tokens/month</p></div>'+
       '<div class="card"><h2>Free coverage</h2><p>'+esc(freeCoverage)+'</p><p class="muted">'+esc((q&&q.notes)||"No compatible numeric free allowance is stored.")+'</p></div>'+
       '<div class="card"><h2>Estimated paid cost</h2><p class="big"><b>'+ (canShowEstimate?money(net):"Not calculable from verified rates") +'</b> / month</p><p>Gross priced usage: '+money(gross)+'</p><p>Documented/custom credit offset: −'+money(Math.min(gross,freeCredit))+'</p></div>'+
     '</div>'+
     '<div class="card"><h2>Cost breakdown</h2><div class="kv">'+
       '<b>Input cost</b><span>'+ (Number.isFinite(inputRate)?money(correctedInputCost):"Rate not available")+'</span>'+
       '<b>Cached input cost</b><span>'+ (Number.isFinite(cacheRate)&&totalCached?money(cachedCost):"—")+'</span>'+
       '<b>Output cost</b><span>'+ (Number.isFinite(outputRate)?money(outputCost):"Rate not available")+'</span>'+
       '<b>Request charges</b><span>'+money(requestCost)+'</span>'+
       '<b>Base monthly fee</b><span>'+money(baseFee)+'</span>'+
       '<b>Free credit applied</b><span>'+money(Math.min(gross,freeCredit))+'</span>'+
       '<b>Estimated final monthly bill</b><span><b>'+ (canShowEstimate?money(net):"Not calculable") +'</b></span>'+
       '</div></div>'+
     '<div class="card"><h2>Pricing provenance</h2><p><span class="pill '+(sourceType==="official"?"good":"warn")+'">'+esc(evidenceLabel)+'</span> '+esc(pricingLabel)+'</p>'+
       (pricingSource.length?'<p>'+pricingSource.map(u=>link(u,"Open pricing source")).join(" · ")+'</p>':"")+
       (canShowEstimate?"<p class=\"muted\">Estimate assumes the entered average token/request pattern is stable for the month and excludes taxes, discounts, enterprise commitments, overage rules, provider-specific tool charges and model-specific fees not represented in this evidence.</p>":"<div class=\"notice\"><b>No machine-readable rate is stored for this provider/model.</b> Enter current provider pricing in the custom-pricing section and the calculator will still produce a transparent estimate without pretending the rate is verified.</div>")+
     '</div>';
 };
}
async function healthPage(){
 var a=await loadApis(),fresh=a.filter(function(p){return p.last_verified&&(Date.now()-Date.parse(p.last_verified+"T00:00:00Z"))<30*86400000;}).length,stale=a.filter(function(p){return p.last_verified&&(Date.now()-Date.parse(p.last_verified+"T00:00:00Z"))>180*86400000;}).length;
 shell('<section class="hero"><h1>🔄 API Health & Verification</h1><p>Verification freshness is separate from live endpoint uptime. Browser checks can be blocked by CORS, authentication or provider policy.</p></section><div class="stats"><span class="pill good">'+fresh+' verified in last 30 days</span><span class="pill warn">'+stale+' older than 180 days</span><span class="pill">'+a.length+' catalog records</span></div><div class="card"><h2>Verification monitor</h2><p>Inspect official documentation, pricing and source URLs from each provider profile.</p><a class="btn" href="changes.html">View verification history</a></div>');
}
async function securityPage(){
 shell('<section class="hero"><h1>🔐 API Key Security Center</h1><p>Keep provider credentials out of source code and public repositories.</p></section><div class="grid">'+["Never commit secrets to GitHub or frontend source.","Prefer environment variables for server-side applications.","Never expose private server keys in browser JavaScript.","Rotate a key immediately if it is exposed.","Use least-privilege scopes where supported.","Browser local storage is convenience storage, not a production secrets vault.","Use a backend proxy when a provider requires a secret key.","Check provider terms before sending sensitive data."].map(function(x,i){return '<div class="card"><h2>'+(i+1)+'.</h2><p>'+x+'</p></div>';}).join("")+'</div><div class="card"><a class="btn" href="keys.html">Open local key storage</a></div>');
}
async function submitPage(){
 shell('<section class="hero"><h1>📥 Submit an API</h1><p>Create a local submission draft for review. Submitting never automatically marks a provider as verified.</p></section><div class="card tool"><input id="sn" class="input" placeholder="Provider name"><input id="su" class="input" placeholder="Official website"><input id="sd" class="input" placeholder="Documentation URL"><input id="sp" class="input" placeholder="Pricing URL"><textarea id="ss" class="input" style="min-height:100px" placeholder="Free-tier details, authentication, limits and evidence"></textarea><button id="submitgo" class="btn">Create submission</button></div><div id="submitr"></div>');
 $("#submitgo").onclick=function(){var d={name:$("#sn").value,website:$("#su").value,documentation:$("#sd").value,pricing:$("#sp").value,notes:$("#ss").value,created_at:new Date().toISOString()};if(!d.name||!d.website){$("#submitr").innerHTML='<div class="card notice">Provider name and official website are required.</div>';return;}var list=JSON.parse(localStorage.getItem("freeApiSubmissions")||"[]");list.push(d);localStorage.setItem("freeApiSubmissions",JSON.stringify(list));$("#submitr").innerHTML='<div class="card"><h2>Saved as a local draft</h2><p>This has not been added to the verified catalog.</p></div>';};
}
async function collectionsPage(){
 var a=await loadApis(),list=JSON.parse(localStorage.getItem("freeApiFavorites")||"[]");
 shell('<section class="hero"><h1>⭐ My API Collections</h1><p>Save providers locally without creating an account.</p></section><div class="card tool"><select id="fav" class="select">'+providerOptions(a)+'</select><input id="col" class="input" value="My APIs"><button id="savefav" class="btn">Save provider</button></div><div id="favr"></div>');
 function render(){if(!list.length){$("#favr").innerHTML='<div class="card">No saved providers yet.</div>';return;}$("#favr").innerHTML=list.map(function(x,i){return '<div class="card"><h2>'+esc(x.collection)+'</h2><p><a href="api.html?provider='+encodeURIComponent(x.name)+'">'+esc(x.name)+'</a> <button class="btn secondary" data-i="'+i+'">Remove</button></p></div>';}).join("");document.querySelectorAll("[data-i]").forEach(function(b){b.onclick=function(){list.splice(Number(b.dataset.i),1);localStorage.setItem("freeApiFavorites",JSON.stringify(list));render();};});}
 $("#savefav").onclick=function(){if(!$("#fav").value)return;list.push({name:$("#fav").value,collection:$("#col").value||"My APIs"});localStorage.setItem("freeApiFavorites",JSON.stringify(list));render();};render();
}
async function playgroundPage(){
 var a=await loadApis();
 shell('<section class="hero"><h1>🧪 API Playground</h1><p>Select a provider to preload its documented endpoint when one is recorded. Browser execution may still be blocked by CORS or authentication policy.</p></section><div class="card tool"><select id="pgp" class="select">'+providerOptions(a)+'</select><input id="pgu" class="input" placeholder="HTTPS API endpoint"><input id="pgm" class="input" value="GET"><textarea id="pgh" class="input" style="min-height:100px" placeholder="Optional JSON headers"></textarea><div id="pginfo" class="muted"></div><button id="pggo" class="btn">Send request</button></div><div id="pgr"></div>');
 $("#pgp").addEventListener("change",function(){var p=a.find(x=>x.name===this.value);$("#pgu").value=p?.endpoint_url||"";$("#pginfo").innerHTML=p?(p.endpoint_url?'Endpoint loaded from catalog.':'No API endpoint is independently recorded; use the provider documentation link on its profile.'):"";});
 $("#pggo").onclick=async function(){var url=safeUrl($("#pgu").value),headers={};if(!url){$("#pgr").innerHTML='<div class="card notice">Enter a valid HTTP(S) API endpoint. A documentation URL is not automatically treated as an API endpoint.</div>';return;}try{headers=JSON.parse($("#pgh").value||"{}");}catch(e){$("#pgr").innerHTML='<div class="card notice">Headers must be valid JSON.</div>';return;}try{var res=await fetch(url,{method:$("#pgm").value.toUpperCase(),headers:headers}),body=await res.text();$("#pgr").innerHTML='<div class="card"><h2>HTTP '+res.status+'</h2><pre class="code">'+esc(body.slice(0,20000))+'</pre></div>';}catch(e){$("#pgr").innerHTML='<div class="card notice">Request blocked or unavailable. Common causes: CORS, authentication or provider policy. '+esc(e.message)+'</div>';}}; 
}
async function codePage(){
 var a=await loadApis();
 shell('<section class="hero"><h1>💻 API Code Generator</h1><p>Provider-aware starter templates. The catalog never invents an endpoint or authentication method; verify provider-specific requirements before sending real credentials.</p></section><div class="card tool"><select id="codep" class="select">'+providerOptions(a)+'</select><input id="codeurl" class="input" placeholder="HTTPS API endpoint (optional)"><button id="codego" class="btn">Generate</button></div><div id="coder"></div>');
 $("#codep").addEventListener("change",function(){var p=a.find(x=>x.name===this.value);$("#codeurl").value=p?.endpoint_url||"";});
 $("#codego").onclick=function(){
   var p=a.find(x=>x.name===$("#codep").value)||{};
   var url=$("#codeurl").value.trim();
   if(!url){$("#coder").innerHTML='<div class="card notice">No API endpoint is recorded for this provider. Add the endpoint from its documentation instead of using a guessed URL.</div>';return;}
   var auth=String(p.authentication||"").toLowerCase();
   var bearer=/bearer|oauth|token/.test(auth), key=/api key|apikey|key/.test(auth), noauth=/none|no auth|not required|public/.test(auth);
   var headerLine=noauth?'const headers = {};':bearer?'const headers = { Authorization: "Bearer " + process.env.API_KEY };':key?'const headers = { "X-API-Key": process.env.API_KEY };':'const headers = {}; // Authentication not standardized in catalog';
   var pyAuth=noauth?'headers = {}':bearer?'headers = {"Authorization": "Bearer " + os.environ.get("API_KEY", "")}':key?'headers = {"X-API-Key": os.environ.get("API_KEY", "")}':'headers = {} # Authentication not standardized in catalog';
   var py="import os, requests\\n\\nurl = "+JSON.stringify(url)+"\\n"+pyAuth+"\\nresponse = requests.get(url, headers=headers, timeout=30)\\nprint(response.status_code)\\nprint(response.text)";
   var js="const response = await fetch("+JSON.stringify(url)+", { headers: "+headerExpr+" });\\nconsole.log(response.status, await response.text());";
   var ts=js;
   var curl=noauth?"curl "+JSON.stringify(url):bearer?"curl -H \\"Authorization: Bearer $API_KEY\\" "+JSON.stringify(url):key?"curl -H \\"X-API-Key: $API_KEY\\" "+JSON.stringify(url):"curl "+JSON.stringify(url);
   $("#coder").innerHTML='<div class="grid"><div class="card"><h2>Python</h2><pre class="code">'+esc(py)+'</pre></div><div class="card"><h2>Node.js JavaScript</h2><pre class="code">'+esc(js)+'</pre></div><div class="card"><h2>TypeScript</h2><pre class="code">'+esc(ts)+'</pre></div><div class="card"><h2>cURL</h2><pre class="code">'+esc(curl)+'</pre></div></div><div class="notice">Provider: '+esc(p.name||"not selected")+' · Catalog authentication: '+esc(p.authentication||"Not publicly stated")+'. Endpoint and authentication should be confirmed against the provider documentation.</div>';
 };
}async function boot() {
  try {
    const page = document.body.dataset.page;
    if (page === "finder") return await finder();
    if (page === "usecases") return await useCasesPage();
    if (page === "compare") return await compare();
    if (page === "changes") return await changes();
    if (page === "recommend") return await recommend();
    if (page === "stack") return await stackBuilder();
    if (page === "calculator") return await freeCalculator();
    if (page === "health") return await healthPage();
    if (page === "security") return await securityPage();
    if (page === "submit") return await submitPage();
    if (page === "collections") return await collectionsPage();
    if (page === "playground") return await playgroundPage();
    if (page === "code") return await codePage();
    if (page === "api") return await apiProfile();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const root = $("#app");
    if (root) root.innerHTML = '<div class="wrap">' + nav() +
      '<section class="hero"><h1>Page could not load</h1><p>' + esc(message) +
      '</p><p>Refresh the page after GitHub Pages finishes publishing the latest commit.</p></section></div>';
  }
}

document.addEventListener("DOMContentLoaded", boot);
