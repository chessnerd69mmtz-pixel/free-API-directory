const DATA_URL = new URL("data/provider_profiles.json", document.baseURI).href;
const CHANGE_URL = new URL("data/change_log.json", document.baseURI).href;
const HASH_URL = new URL("data/source_hashes.json", document.baseURI).href;
const PUBLIC_API_LISTS_URL = "https://public-api-lists.github.io/public-api-lists/api/all.json";
const PUBLIC_APIS_URL = "https://api.publicapis.org/entries";
const KIPRIO_URL = "https://kiprio.com/datasets/free-apis.json";
const CATALOG_TARGET = 1000;

let APIS = [];

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (m) => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"
}[m]));

function link(url, label) {
  return url
    ? '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(label || url) + '</a>'
    : '<span class="muted">Unverified</span>';
}

function uses(list) {
  const items = Array.isArray(list) && list.length ? list : ["Not independently specified"];
  return "<ul>" + items.map(x => "<li>" + esc(x) + "</li>").join("") + "</ul>";
}

function freeTier(p) {
  const v = p.free_tier?.has_free_tier;
  if (p.verification_status === "community-free-source") return '<span class="pill good">Community-listed free</span>';
  if (v === true) return '<span class="pill good">Free access recorded</span>';
  if (v === false) return '<span class="pill">No free tier recorded</span>';
  return '<span class="pill warn">Unverified</span>';
}

function status(p) {
  if (p.status === "active") return '<span class="pill good">Active</span>';
  if (p.status === "needs re-verification") return '<span class="pill warn">Needs re-verification</span>';
  return '<span class="pill">' + esc(p.status || "Catalog only") + "</span>";
}

function nav() {
  return '<nav class="nav">' +
    '<a class="logo" href="index.html">Free API Directory</a>' +
    '<a href="finder.html">Find an API</a>' +
    '<a href="recommend.html">Build a project</a>' +
    '<a href="compare.html">Compare</a>' +
    '<a href="keys.html">🔐 My API Keys</a>' +
    '<a href="changes.html">Verified / Changed</a>' +
    '<a href="criteria.html">Browse</a>' +
  "</nav>";
}

function shell(html) {
  const root = $("#app");
  if (!root) return;
  root.innerHTML = '<div class="wrap">' + nav() + html + "</div>";
}

async function getJson(url) {
  const response = await fetch(url, {cache:"no-store"});
  if (!response.ok) throw new Error("Could not load " + url + " (HTTP " + response.status + ")");
  return response.json();
}

function normalizeExternalEntry(x, source, categoryHint) {
  const name = x.name || x.API || x.title;
  const description = x.description || x.Description || "Community-listed public API.";
  const url = x.url || x.Link || x.link || x.provider_url || "";
  if (!name || !url) return null;
  const auth = x.auth || x.Auth || "No";
  const category = x.category || x.Category || categoryHint || "General";
  const requiresKey = auth && String(auth).toLowerCase() !== "no";
  return {
    name: String(name),
    category: String(category),
    description: String(description),
    signup_url: requiresKey ? url : url,
    pricing_url: null,
    documentation_url: url,
    free_tier: {
      has_free_tier: true,
      type: "community-listed-free",
      details: "Listed by a community-maintained directory as a free public API. Exact provider quota, card requirement, commercial-use terms, and current availability should be confirmed on the official provider site.",
      amount: "Not independently quantified",
      expiry: "Not independently verified"
    },
    requires_credit_card: "Unverified",
    authentication: String(auth),
    protocols: [String(x.https || x.HTTPS || "").toLowerCase() === "yes" ? "HTTPS" : "HTTP/HTTPS"],
    sdk_languages: [],
    commercial_use: "Unverified; check provider terms.",
    self_hostable: "Unverified",
    webhooks: "Unverified",
    rate_limit: "Unverified",
    free_tier_reset: "Unverified",
    uses: [String(category), String(description)],
    last_verified: null,
    verified_by: source,
    status: "upstream-community",
    verification_status: "community-free-source",
    verification_sources: { provider: url }
  };
}

async function loadApis() {
  if (APIS.length) return APIS;
  const local = await getJson(DATA_URL);
  if (!Array.isArray(local)) throw new Error("The provider catalog is not a valid JSON array.");
  APIS = [...local];
  const seen = new Set(local.map(p => String(p.name || "").trim().toLowerCase()).filter(Boolean));
  const urls = new Set(local.map(p => String(p.verification_sources?.provider || p.documentation_url || p.signup_url || "").trim().toLowerCase()).filter(Boolean));

  const external = await Promise.allSettled([
    getJson(PUBLIC_API_LISTS_URL),
    getJson(PUBLIC_APIS_URL),
    getJson(KIPRIO_URL)
  ]);

  for (let i = 0; i < external.length && APIS.length < CATALOG_TARGET; i++) {
    if (external[i].status !== "fulfilled") continue;
    const payload = external[i].value;
    const entries = Array.isArray(payload) ? payload :
      Array.isArray(payload?.entries) ? payload.entries :
      Array.isArray(payload?.data) ? payload.data :
      Array.isArray(payload?.apis) ? payload.apis : [];
    for (const raw of entries) {
      if (APIS.length >= CATALOG_TARGET) break;
      const p = normalizeExternalEntry(raw, i === 0 ? "public-api-lists-community" : "public-apis-community");
      if (!p) continue;
      const key = p.name.trim().toLowerCase();
      const url = p.documentation_url.trim().toLowerCase();
      if (seen.has(key) || (url && urls.has(url))) continue;
      seen.add(key);
      if (url) urls.add(url);
      APIS.push(p);
    }
  }
  return APIS;
}

async function finder() {
  const a = await loadApis();
  shell(
    '<section class="hero"><h1>Find an API</h1><p>Search the live 1,000-provider discovery pool by provider, category or capability. Curated records and upstream community-free records are clearly distinguished.</p></section>' +
    '<div class="card tool"><input id="q" class="input" placeholder="Search APIs…">' +
    '<select id="f" class="select"><option value="">Free status: any</option><option value="yes">Free access recorded</option><option value="unknown">Free status unverified</option></select>' +
    '<select id="c" class="select"><option value="">Card requirement: any</option><option value="no">No card recorded</option><option value="unknown">Unverified</option></select></div>' +
    '<div id="r"></div>'
  );

  const render = () => {
    const q = $("#q").value.toLowerCase().trim();
    const f = $("#f").value;
    const c = $("#c").value;
    const rows = a.filter(p => {
      const hay = JSON.stringify([p.name,p.category,p.description,p.uses]).toLowerCase();
      const freeOK = !f || (f === "yes" && p.free_tier?.has_free_tier === true) ||
        (f === "unknown" && p.free_tier?.has_free_tier == null);
      const cardOK = !c || (c === "no" && p.requires_credit_card === false) ||
        (c === "unknown" && typeof p.requires_credit_card !== "boolean");
      return (!q || hay.includes(q)) && freeOK && cardOK;
    });

    $("#r").innerHTML = '<div class="tablebox"><div class="scroll"><table><thead><tr>' +
      '<th>Provider</th><th>Category</th><th>Free tier</th><th>Functions</th><th>Verification</th></tr></thead><tbody>' +
      rows.map(p => '<tr><td class="provider"><a href="api.html?provider=' + encodeURIComponent(p.name) + '">' + esc(p.name) +
        '</a><br><a class="save-key-link" href="keys.html?provider=' + encodeURIComponent(p.name) + '">🔐 Save key</a></td><td>' + esc(p.category) + '</td><td>' + freeTier(p) + '</td><td class="uses">' + uses(p.uses) +
        '</td><td>' + status(p) + '<br>' + esc(p.last_verified || "Not recorded") + '</td></tr>').join("") +
      '</tbody></table></div></div><p class="muted">' + rows.length + " matches</p>";
  };

  $("#q").addEventListener("input", render);
  $("#f").addEventListener("change", render);
  $("#c").addEventListener("change", render);
  render();
}

async function compare() {
  const a = await loadApis();
  shell(
    '<section class="hero"><h1>Compare APIs</h1><p>Compare up to four providers using the catalog data.</p></section>' +
    '<div class="card tool"><select id="p" class="select"><option value="">Add provider…</option>' +
    a.map(x => '<option value="' + esc(x.name) + '">' + esc(x.name) + "</option>").join("") +
    '</select><button id="clear" class="btn secondary">Clear</button></div><div id="r"></div>'
  );

  const chosen = [];
  const select = $("#p");

  select.addEventListener("change", () => {
    if (select.value && !chosen.includes(select.value) && chosen.length < 4) chosen.push(select.value);
    select.value = "";
    render();
  });
  $("#clear").addEventListener("click", () => { chosen.length = 0; render(); });

  function render() {
    if (!chosen.length) {
      $("#r").innerHTML = '<div class="card">Select up to four providers above.</div>';
      return;
    }
    const ps = chosen.map(n => a.find(x => x.name === n)).filter(Boolean);
    const fields = [
      ["Free tier", p => p.free_tier?.has_free_tier === true ? "Recorded" : p.free_tier?.has_free_tier === false ? "No" : "Unverified"],
      ["Free amount", p => p.free_tier?.amount || "Unverified"],
      ["Credit card", p => typeof p.requires_credit_card === "boolean" ? String(p.requires_credit_card) : "Unverified"],
      ["Authentication", p => p.authentication || "Unverified"],
      ["Rate limit", p => p.rate_limit || "Unverified"],
      ["SDKs", p => p.sdk_languages?.length ? p.sdk_languages.join(", ") : "Unverified"],
      ["Protocols", p => p.protocols?.length ? p.protocols.join(", ") : "Unverified"],
      ["Commercial use", p => p.commercial_use || "Unverified"],
      ["Self-hostable", p => p.self_hostable || "Unverified"],
      ["Webhooks", p => p.webhooks || "Unverified"],
      ["Last verified", p => p.last_verified || "Not recorded"]
    ];
    $("#r").innerHTML = '<div class="tablebox"><div class="scroll"><table><thead><tr><th>Field</th>' +
      ps.map(p => "<th>" + esc(p.name) + "</th>").join("") + "</tr></thead><tbody>" +
      fields.map(f => "<tr><td><b>" + esc(f[0]) + "</b></td>" +
        ps.map(p => "<td>" + esc(f[1](p)) + "</td>").join("") + "</tr>").join("") +
      "</tbody></table></div></div>";
  }
  render();
}

async function changes() {
  const a = await loadApis();
  let records = [];
  try { records = await getJson(CHANGE_URL); } catch (_) {}
  if (!Array.isArray(records) || !records.length) {
    records = a.filter(x => x.last_verified)
      .sort((x,y) => String(y.last_verified).localeCompare(String(x.last_verified)))
      .slice(0,100);
  }

  shell(
    '<section class="hero"><h1>Verification history</h1><p>Catalog verification dates and source-change records.</p></section>' +
    '<div class="tablebox"><div class="scroll"><table><thead><tr><th>Provider</th><th>Date</th><th>Status / event</th><th>Source</th></tr></thead><tbody>' +
    records.map(p => {
      const name = p.provider || p.name || "Unknown";
      const date = p.date || p.last_verified || "Not recorded";
      return '<tr><td class="provider"><a href="api.html?provider=' + encodeURIComponent(name) + '">' + esc(name) +
        '</a></td><td>' + esc(date) + '</td><td>' + esc(p.type || p.status || "Verification record") +
        '</td><td>' + (p.source_url ? link(p.source_url,"Open source") : esc(p.verification_status || "Catalog verification")) +
        "</td></tr>";
    }).join("") +
    '</tbody></table></div></div>'
  );
}

async function apiProfile() {
  const a = await loadApis();
  const name = new URLSearchParams(location.search).get("provider");
  const p = a.find(x => x.name === name);
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
    '<b>Authentication</b><span>' + esc(p.authentication || "Unverified") + '</span>' +
    '<b>Credit card</b><span>' + esc(typeof p.requires_credit_card === "boolean" ? (p.requires_credit_card ? "Required" : "Not required") : String(p.requires_credit_card || "Unverified")) + '</span>' +
    '<b>Rate limit</b><span>' + esc(p.rate_limit || "Unverified") + '</span>' +
    '<b>Commercial use</b><span>' + esc(p.commercial_use || "Unverified") + '</span>' +
    '<b>Functions</b><span>' + uses(p.uses) + '</span>' +
    '<b>Provider</b><span>' + link(source, "Official / source page") + '</span>' +
    '<b>API key</b><span><a class="save-key-link" href="keys.html?provider=' + encodeURIComponent(p.name) + '">🔐 Save key locally</a></span>' +
    '<b>Verification</b><span>' + status(p) + ' ' + esc(p.last_verified || "Not independently verified") + '</span>' +
    '</div></div>'
  );
}

async function recommend() {
  const a = await loadApis();
  shell(
    '<section class="hero"><h1>Project API Recommender</h1><p>Describe what you are building. Matching runs locally; no AI service or API key is required.</p></section>' +
    '<div class="card tool"><textarea id="q" class="input" style="min-height:130px" placeholder="Example: weather dashboard with email alerts and maps"></textarea>' +
    '<button id="go" class="btn">Find matching APIs</button></div><div id="r"></div>'
  );

  $("#go").addEventListener("click", () => {
    const q = $("#q").value.toLowerCase();
    const terms = q.split(/[^a-z0-9]+/).filter(x => x.length > 2);
    const scored = a.map(p => {
      const text = (p.name + " " + p.category + " " + p.description + " " + (p.uses || []).join(" ")).toLowerCase();
      const score = terms.reduce((n,t) => n + (text.includes(t) ? 1 : 0), 0);
      return {p,score};
    }).filter(x => x.score > 0)
      .sort((x,y) => y.score - x.score || x.p.name.localeCompare(y.p.name))
      .slice(0,15);

    $("#r").innerHTML = scored.length
      ? '<div class="tablebox"><div class="scroll"><table><thead><tr><th>Provider</th><th>Why it matched</th><th>Free status</th><th>Verification</th></tr></thead><tbody>' +
        scored.map(x => '<tr><td class="provider"><a href="api.html?provider=' + encodeURIComponent(x.p.name) + '">' + esc(x.p.name) +
          '</a></td><td>' + esc(x.p.uses?.filter(u => terms.some(t => u.toLowerCase().includes(t))).join(", ") || x.p.category) +
          '</td><td>' + freeTier(x.p) + '</td><td>' + status(x.p) + '</td></tr>').join("") +
        '</tbody></table></div></div>'
      : '<div class="card">No catalog matches found. Try describing the technologies or functions you need.</div>';
  });
}

async function boot() {
  try {
    const page = document.body.dataset.page;
    if (page === "finder") return await finder();
    if (page === "compare") return await compare();
    if (page === "changes") return await changes();
    if (page === "recommend") return await recommend();
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