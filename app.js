const DATA_URL = new URL("data/provider_profiles.json", document.baseURI).href;
const CHANGE_URL = new URL("data/change_log.json", document.baseURI).href;
const HASH_URL = new URL("data/source_hashes.json", document.baseURI).href;

let APIS = Array.isArray(window.API_CATALOG) ? window.API_CATALOG : [];

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

async function loadApis() {
  if (APIS.length) return APIS;
  APIS = await getJson(DATA_URL);
  if (!Array.isArray(APIS)) throw new Error("The provider catalog is not a valid JSON array.");
  return APIS;
}

async function finder() {
  const a = await loadApis();
  shell(
    '<section class="hero"><h1>Find an API</h1><p>Search by provider, category or capability.</p></section>' +
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
        '</a></td><td>' + esc(p.category) + '</td><td>' + freeTier(p) + '</td><td class="uses">' + uses(p.uses) +
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
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const root = $("#app");
    if (root) root.innerHTML = '<div class="wrap">' + nav() +
      '<section class="hero"><h1>Page could not load</h1><p>' + esc(message) +
      '</p><p>Refresh the page after GitHub Pages finishes publishing the latest commit.</p></section></div>';
  }
}

document.addEventListener("DOMContentLoaded", boot);