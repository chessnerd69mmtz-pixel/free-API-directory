const DATA_VERSION = "20260926-10";
const INDEX_URL = new URL("data/catalog-index.json?v=" + DATA_VERSION, document.baseURI).href;
const PROFILE_URL = new URL("data/provider_profiles.json?v=" + DATA_VERSION, document.baseURI).href;
const CHANGE_URL = new URL("data/change_log.json?v=" + DATA_VERSION, document.baseURI).href;

let INDEX_PROMISE = null;
let PROFILE_PROMISE = null;

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (m) => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"
}[m]));

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
    '<a href="finder.html">Find an API</a>' +
    '<a href="recommend.html">Build a project</a>' +
    '<a href="compare.html">Compare</a>' +
    '<a href="keys.html">🔐 My API Keys</a>' +
    '<a href="changes.html">Verified / Changed</a>' +
    '<a href="criteria.html">Browse</a><a href="student.html">🎓 Student Mode</a><a href="quality.html">Data Quality</a>' +
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
      return prepareIndex(d.providers);
    });
  }
  return INDEX_PROMISE;
}

async function loadProfiles() {
  if (!PROFILE_PROMISE) {
    PROFILE_PROMISE = Promise.all([
      getJson(PROFILE_URL),
      getJson(new URL("data/providers.json?v=" + DATA_VERSION, document.baseURI).href)
    ]).then(([profiles, canonical]) => {
      if (!Array.isArray(profiles) || !Array.isArray(canonical)) throw new Error("Invalid provider profile catalog");
      const byName = new Map(canonical.map(p => [String(p.name).toLowerCase(), p]));
      return profiles.map(profile => ({...profile, ...(byName.get(String(profile.name).toLowerCase()) || {})}));
    });
  }
  return PROFILE_PROMISE;
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
    '<select id="c" class="select"><option value="">Card requirement: any</option><option value="no">No card recorded</option><option value="yes">Card required</option><option value="unknown">Not publicly stated</option></select></div>' +
    '<div id="r"></div>'
  );

  let visible = 100;

  function getRows() {
    const q = $("#q").value.toLowerCase().trim();
    const f = $("#f").value;
    const c = $("#c").value;
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
      return (!q || p._searchText.includes(q)) && freeOK && cardOK;
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
    const profiles = await loadProfiles();
    const ps = chosen.map(n => profiles.find(x => x.name === n)).filter(Boolean);
    const fields = [
      ["Free tier", p => freeValue(p) === true ? "Recorded" : freeValue(p) === false ? "No" : "Not publicly stated"],
      ["Free amount", p => p.free_tier?.amount || "Not publicly stated"],
      ["Credit card", p => typeof p.requires_credit_card === "boolean" ? String(p.requires_credit_card) : "Not publicly stated"],
      ["Authentication", p => p.authentication || "Not publicly stated"],
      ["Rate limit", p => p.rate_limit || "Not publicly stated"],
      ["SDKs", p => p.sdk_languages?.length ? p.sdk_languages.join(", ") : "Not publicly stated"],
      ["Protocols", p => p.protocols?.length ? p.protocols.join(", ") : "Not publicly stated"],
      ["Commercial use", p => p.commercial_use || "Not publicly stated"],
      ["Self-hostable", p => p.self_hostable || "Not publicly stated"],
      ["Webhooks", p => p.webhooks || "Not publicly stated"],
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

async function apiProfile() {
  const name = new URLSearchParams(location.search).get("provider");
  if (!name) {
    shell('<section class="hero"><h1>API not specified</h1><p>Choose a provider from the finder or browse pages.</p></section>');
    return;
  }
  const profiles = await loadProfiles();
  const p = profiles.find(x => x.name === name);
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
    '<b>Commercial use</b><span>' + esc(p.commercial_use || "Not publicly stated") + '</span>' +
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
    '<section class="hero"><h1>Find the Best API Provider</h1><p>Describe your role, objective and technical constraints. The directory scores catalog providers for fit and returns up to 10 matches. No API key or external AI service is required.</p></section>' +
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
    '<div id="method" class="notice">Ranking is based on documented catalog fields: capability match, role/use-case match, free-access fit, authentication/account constraints, commercial-use information, scale indicators and verification status. Unknown fields do not receive a positive score.</div>' +
    '<div id="r"></div>'
  );

  const val = id => ($("#" + id)?.value || "").trim();
  const words = s => [...new Set(String(s || "").toLowerCase().split(/[^a-z0-9]+/).filter(x => x.length > 2))];

  function scoreProvider(p, profile, form) {
    const text = [
      p.name,p.category,p.description,
      ...(p.uses || []),
      ...(p.protocols || []),
      ...(p.sdk_languages || [])
    ].join(" ").toLowerCase();
    const requested = words(form.objective + " " + form.needs);
    const roleTerms = {
      "Student":["student","education","learning","research","academic","project"],
      "Developer":["developer","coding","api","sdk","webhook","backend","software"],
      "Researcher":["research","academic","scientific","metadata","dataset","literature"],
      "Data scientist":["data","analytics","statistics","dataset","machine learning"],
      "Founder / startup":["startup","production","commercial","scalable","business"],
      "Teacher / educator":["education","teaching","learning","academic"],
      "Product / business":["business","analytics","commercial","automation"],
      "Hobbyist":["free","public","simple","open"]
    };
    let score=0, reasons=[];
    const matched=requested.filter(t=>text.includes(t));
    score += Math.min(48, matched.length*8);
    if (matched.length) reasons.push("matches "+matched.slice(0,4).join(", "));
    const role=roleTerms[form.role]||[];
    const roleHits=role.filter(t=>text.includes(t));
    score += Math.min(14, roleHits.length*3);
    if(roleHits.length) reasons.push("fits "+form.role+" use cases");

    const free=freeValue(profile);
    if(form.free==="strict") {
      if(free===true) { score+=16; reasons.push("free access recorded"); }
      else if(free===false) score-=35;
      else score-=8;
    } else if(form.free==="tier") {
      if(free===true) score+=12;
      else if(free===false) score-=12;
    } else if(form.free==="keyless") {
      const auth=String(profile.authentication||"").toLowerCase();
      if(/none|no key|keyless|public/.test(auth)) { score+=14; reasons.push("keyless/public access"); }
      else if(/api key|bearer|oauth/.test(auth)) score-=4;
    }

    const noCard = profile.requires_credit_card === false;
    const noAccount = profile.signup_requires_account === false;
    if(form.access==="nocard" || form.access==="both") {
      if(noCard) {score+=10; reasons.push("no card recorded");}
      else if(profile.requires_credit_card === true) score-=25;
      else score-=3;
    }
    if(form.access==="noaccount" || form.access==="both") {
      if(noAccount) {score+=10; reasons.push("no account recorded");}
      else if(profile.signup_requires_account === true) score-=12;
      else score-=2;
    }

    const commercial=String(profile.commercial_use||"").toLowerCase();
    if(form.commercial!=="any") {
      if(/allow|yes|permitted|commercial/.test(commercial)) {score+=8; reasons.push("commercial-use information supports the request");}
      else if(/no|prohibited|not allowed/.test(commercial)) score-=20;
      else score-=2;
    }

    if(form.scale==="large") {
      const rate=String(profile.rate_limit||"").toLowerCase();
      if(/high|unlimited|1000|10k|10,000|million/.test(rate)) {score+=7; reasons.push("documented higher-scale signal");}
    } else if(form.scale==="small") {
      if(free===true) score+=4;
    }

    if(profile.status==="active" && profile.last_verified) score+=6;
    if(profile.status==="candidate" || profile.research_status==="needs-deeper-provider-review") score-=10;
    if(profile.last_verified) {
      const age=(Date.now()-Date.parse(profile.last_verified+"T00:00:00Z"))/86400000;
      if(Number.isFinite(age) && age>365) score-=5;
    }

    return {score, reasons: reasons.slice(0,4)};
  }

  $("#go").onclick = async () => {
    const form={role:val("role"),objective:val("objective"),needs:val("needs"),free:val("free"),access:val("access"),commercial:val("commercial"),scale:val("scale")};
    if(!form.objective && !form.needs) {
      $("#r").innerHTML='<div class="card notice">Describe your objective or at least one required capability so the matcher has something to evaluate.</div>';
      return;
    }
    $("#r").innerHTML='<div class="card">Analyzing the catalog and verification fields…</div>';
    const profiles=await loadProfiles();
    const byName=new Map(profiles.map(p=>[p.name,p]));
    const ranked=a.map(p=>{
      const profile=byName.get(p.name)||p;
      const s=scoreProvider(p,profile,form);
      return {p,profile,score:s.score,reasons:s.reasons};
    }).filter(x=>x.score>0)
      .sort((x,y)=>y.score-x.score || String(y.profile.last_verified||"").localeCompare(String(x.profile.last_verified||"")) || x.p.name.localeCompare(y.p.name))
      .slice(0,10);

    if(!ranked.length) {
      $("#r").innerHTML='<div class="card"><h2>No strong catalog matches</h2><p>Try broader capability terms or relax one of the access constraints.</p></div>';
      return;
    }

    $("#r").innerHTML='<section class="recommend-results"><div class="notice"><b>'+ranked.length+' provider'+(ranked.length===1?"":"s")+' matched.</b> Results are ordered by the directory fit score; the score is not a universal quality rating.</div>' +
      '<div class="grid">'+ranked.map((x,i)=>{
        const p=x.profile, f=freeValue(p);
        return '<article class="card best-card"><div class="rank">#'+(i+1)+'</div><h2><a href="api.html?provider='+encodeURIComponent(p.name)+'">'+esc(p.name)+'</a></h2>' +
          '<p class="muted">'+esc(p.category||"API provider")+'</p><p>'+esc(p.description||"Cataloged provider.")+'</p>' +
          '<div class="stats"><span class="pill '+(f===true?"good":"warn")+'">'+(f===true?"Free access recorded":f===false?"No free tier recorded":"Free status not publicly stated")+'</span>'+status(p)+'</div>' +
          '<p><b>Why it matched:</b> '+esc(x.reasons.length?x.reasons.join("; "):"capability and catalog fit")+'</p>' +
          '<p class="muted">Fit score: '+x.score+' · Last verified: '+esc(p.last_verified||"Not recorded")+'</p>' +
          '<a class="btn secondary" href="api.html?provider='+encodeURIComponent(p.name)+'">View provider</a></article>';
      }).join("")+'</div></section>';
  };
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
