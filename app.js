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
    '<a href="recommend.html">✨ Find Best API</a>' +
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
    '<select id="c" class="select"><option value="">Card requirement: any</option><option value="no">No card recorded</option><option value="yes">Card required</option><option value="unknown">Not publicly stated</option></select><select id="cat" class="select"><option value="">Category: any</option></select><select id="v" class="select"><option value="">Verification: any</option><option value="verified">Verified active</option><option value="candidate">Candidate / needs review</option></select></div>' +
    '<div id="r"></div>'
  );

  let visible = 100;
  const categories = [...new Set(a.map(p => p.category).filter(Boolean))].sort();
  $("#cat").innerHTML += categories.map(x => "<option value=\"" + esc(x) + "\">" + esc(x) + "</option>").join("");

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
      const catOK = !cat || p.category === cat;
      const verifiedOK = !v || (v === "verified" ? (p.status === "active" && !!p.last_verified) : (p.status === "candidate" || p.status === "needs re-verification"));
      return (!q || p._searchText.includes(q)) && freeOK && cardOK && catOK && verifiedOK;
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


function providerOptions(a){return '<option value="">Select a provider</option>'+a.map(function(p){return '<option value="'+esc(p.name)+'">'+esc(p.name)+'</option>';}).join('');}
async function stackBuilder(){
 const a=await loadApis();
 shell('<section class="hero"><h1>🏗️ Build My API Stack</h1><p>Describe a project and get a multi-category starting stack using documented catalog data.</p></section><div class="card tool"><textarea id="stackq" class="input" style="min-height:120px;width:100%" placeholder="Example: free bird-monitoring app using weather, biodiversity data, maps and AI"></textarea><select id="stackfree" class="select"><option value="strict">Prefer documented free access</option><option value="any">Any documented access</option></select><button id="stackgo" class="btn">Build stack</button></div><div id="stackr"></div>');
 $("#stackgo").onclick=function(){var q=$("#stackq").value.toLowerCase(),strict=$("#stackfree").value==="strict";var groups=[["AI / ML",["ai","llm","machine learning","model","language"]],["Weather",["weather","forecast","climate","meteorological"]],["Maps / Geo",["map","geocod","geo","location","places"]],["Research / Data",["research","academic","scientific","dataset","data"]],["Images / Media",["image","photo","media","video","audio"]],["Finance",["finance","financial","stock","currency","payment"]],["Database / Infra",["database","storage","realtime","cloud","infra"]],["Developer Tools",["developer","api","webhook","automation","software"]]];var html=groups.map(function(g){var ranked=a.map(function(p){return {p:p,s:g[1].reduce(function(n,t){return n+((p._searchText||"").includes(t)?1:0);},0)+(strict&&freeValue(p)===true?5:0)};}).filter(function(x){return x.s>0;}).sort(function(x,y){return y.s-x.s;}).slice(0,3);if(!ranked.length)return "";return '<div class="card"><h2>'+g[0]+'</h2>'+ranked.map(function(x){return '<p><b><a href="api.html?provider='+encodeURIComponent(x.p.name)+'">'+esc(x.p.name)+'</a></b> '+freeTier(x.p)+'<br><span class="muted">'+esc(x.p.description||"Cataloged provider.")+'</span></p>';}).join("")+'</div>';}).join("");$("#stackr").innerHTML=html||'<div class="card">No matching stack components found.</div>';};
}
async function freeCalculator(){
 var a=await loadApis();
 shell('<section class="hero"><h1>💰 Free-Tier Calculator</h1><p>Compare your requested volume with documented quota information. Unknown quotas remain unknown.</p></section><div class="card tool"><select id="calcprovider" class="select">'+providerOptions(a)+'</select><input id="calcreq" class="input" type="number" min="1" placeholder="Requests per month"><button id="calcgo" class="btn">Calculate</button></div><div id="calcr"></div>');
 $("#calcgo").onclick=function(){var p=a.find(function(x){return x.name===$("#calcprovider").value;}),req=Number($("#calcreq").value);if(!p||!req){$("#calcr").innerHTML='<div class="card notice">Choose a provider and enter a positive request count.</div>';return;}$("#calcr").innerHTML='<div class="card"><h2>'+esc(p.name)+'</h2><p><b>Your requirement:</b> '+req.toLocaleString()+' requests/month</p><p><b>Free allowance:</b> '+esc(p.free_tier&&p.free_tier.amount||"Not publicly stated")+'</p><p><b>Details:</b> '+esc(p.free_tier&&p.free_tier.details||"Not publicly stated")+'</p><p><b>Rate limit:</b> '+esc(p.rate_limit||"Not publicly stated")+'</p><div class="notice">The directory will not invent a numeric quota when the provider's documented allowance is not present in the catalog.</div></div>';};
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
 shell('<section class="hero"><h1>🧪 API Playground</h1><p>Browser execution may be blocked by CORS or authentication policy.</p></section><div class="card tool"><select id="pgp" class="select">'+providerOptions(a)+'</select><input id="pgu" class="input" placeholder="HTTPS endpoint"><input id="pgm" class="input" value="GET"><textarea id="pgh" class="input" style="min-height:100px" placeholder="Optional JSON headers"></textarea><button id="pggo" class="btn">Send request</button></div><div id="pgr"></div>');
 $("#pggo").onclick=async function(){var url=safeUrl($("#pgu").value),headers={};if(!url){$("#pgr").innerHTML='<div class="card notice">Enter a valid HTTP(S) endpoint.</div>';return;}try{headers=JSON.parse($("#pgh").value||"{}");}catch(e){$("#pgr").innerHTML='<div class="card notice">Headers must be valid JSON.</div>';return;}try{var res=await fetch(url,{method:$("#pgm").value.toUpperCase(),headers:headers}),body=await res.text();$("#pgr").innerHTML='<div class="card"><h2>HTTP '+res.status+'</h2><pre class="code">'+esc(body.slice(0,20000))+'</pre></div>';}catch(e){$("#pgr").innerHTML='<div class="card notice">Request blocked or unavailable. Common causes: CORS, authentication or provider policy. '+esc(e.message)+'</div>';}}; 
}
async function codePage(){
 var a=await loadApis();
 shell('<section class="hero"><h1>💻 API Code Generator</h1><p>Starter templates only; replace endpoint and authentication details with the provider documentation.</p></section><div class="card tool"><select id="codep" class="select">'+providerOptions(a)+'</select><input id="codeurl" class="input" placeholder="HTTPS endpoint"><input id="codetoken" class="input" placeholder="ENVIRONMENT_VARIABLE_NAME"><button id="codego" class="btn">Generate</button></div><div id="coder"></div>');
 $("#codego").onclick=function(){var url=$("#codeurl").value||"https://api.example.com/v1/resource",env=$("#codetoken").value||"API_KEY";var py="import os, requests\\n\\nurl = "+JSON.stringify(url)+"\\nheaders = {\\"Authorization\\": \\"Bearer \\" + os.environ.get(\\""+env+"\\", \\"\\")}\\nresponse = requests.get(url, headers=headers, timeout=30)\\nprint(response.json())";var js="const response = await fetch("+JSON.stringify(url)+", { headers: { Authorization: \\"Bearer \\" + (process.env."+env+" || \\"\\") } });\\nconsole.log(await response.json());";var curl="curl -H \\"Authorization: Bearer $"+env+"\\" "+JSON.stringify(url);$("#coder").innerHTML='<div class="grid"><div class="card"><h2>Python</h2><pre class="code">'+esc(py)+'</pre></div><div class="card"><h2>JavaScript</h2><pre class="code">'+esc(js)+'</pre></div><div class="card"><h2>cURL</h2><pre class="code">'+esc(curl)+'</pre></div></div><div class="notice">Generic template: it does not claim this provider uses Bearer authentication.</div>';};
}

async function boot() {
  try {
    const page = document.body.dataset.page;
    if (page === "finder") return await finder();
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
