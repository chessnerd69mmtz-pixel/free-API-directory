(function(){
"use strict";
const DB="free-api-directory-vault", STORE="vault", VERSION=1, ITERATIONS=250000;
let db, vaultKey=null, records=[];
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
function nav(){return '<nav class="nav"><a class="logo" href="index.html">Free API Directory</a><a href="finder.html">Find an API</a><a href="recommend.html">Build a project</a><a href="compare.html">Compare</a><a href="keys.html">🔐 My API Keys</a><a href="changes.html">Verified / Changed</a><a href="criteria.html">Browse</a></nav>'}
function openDB(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,VERSION);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(STORE))r.result.createObjectStore(STORE,{keyPath:"id"})};r.onsuccess=()=>{db=r.result;resolve()};r.onerror=()=>reject(r.error)})}
function tx(mode,fn){return new Promise((resolve,reject)=>{const t=db.transaction(STORE,mode),r=fn(t.objectStore(STORE));t.oncomplete=()=>resolve(r?.result);t.onerror=()=>reject(t.error)})}
const all=()=>tx("readonly",s=>s.getAll()).then(x=>x||[]), put=x=>tx("readwrite",s=>s.put(x)), del=id=>tx("readwrite",s=>s.delete(id));
function b64(x){return btoa(String.fromCharCode(...new Uint8Array(x)))} function ub64(x){return Uint8Array.from(atob(x),c=>c.charCodeAt(0))}
async function derive(password,salt){const m=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt,iterations:ITERATIONS,hash:"SHA-256"},m,{name:"AES-GCM",length:256},false,["encrypt","decrypt"])}
async function enc(text){const iv=crypto.getRandomValues(new Uint8Array(12));const data=await crypto.subtle.encrypt({name:"AES-GCM",iv},vaultKey,new TextEncoder().encode(text));return {iv:b64(iv),data:b64(data)}}
async function dec(r){const p=await crypto.subtle.decrypt({name:"AES-GCM",iv:ub64(r.iv)},vaultKey,ub64(r.data));return new TextDecoder().decode(p)}
function hasVault(){return !!localStorage.getItem("apiVaultSalt")}
async function unlock(password){
if(typeof crypto==="undefined"||!crypto.subtle)throw new Error("Web Crypto is unavailable. Open the HTTPS GitHub Pages address.");
if(typeof password!=="string"||password.length<8)throw new Error("Password must contain at least 8 characters.");
let salt;
if(hasVault()){try{salt=ub64(localStorage.getItem("apiVaultSalt"))}catch(_){throw new Error("Saved vault salt is corrupted.")}}
else{salt=crypto.getRandomValues(new Uint8Array(16));localStorage.setItem("apiVaultSalt",b64(salt))}
const candidate=await derive(password,salt);
const previous=vaultKey;vaultKey=candidate;
try{
const verifier=localStorage.getItem("apiVaultVerifier");
let verified=false;
if(verifier){
try{
const v=JSON.parse(verifier);
if(v&&v.iv&&v.data)verified=await dec(v)==="FREE-API-DIRECTORY-VAULT";
}catch(_){}
}
if(!verified){
const existing=await all();
for(const r of existing){
try{
const plain=await dec(r);
if(plain){verified=true;break}
}catch(_){}
}
if(!verified&&verifier)throw new Error("wrong password");
if(!verified&&!verifier&&existing.length)throw new Error("wrong password");
}
if(!verifier) {
localStorage.setItem("apiVaultVerifier",JSON.stringify(await enc("FREE-API-DIRECTORY-VAULT")));
} else if(!verified) throw new Error("wrong password");
records=await all();
}catch(e){vaultKey=previous;throw e}
}
function msg(t){const x=$("#msg");if(x){x.innerHTML='<div class="notice">'+esc(t)+'</div>'}}
function renderLogin(){document.querySelector("#app").innerHTML='<div class="wrap">'+nav()+'<section class="hero"><h1>🔐 My API Keys</h1><p>Your API credentials are encrypted and stored only in this browser.</p></section><div class="card vault-card"><h2>'+(hasVault()?"Unlock your vault":"Create your vault")+'</h2><p class="muted">'+(hasVault()?"Enter your vault password. It never leaves this device.":"Create a password of at least 8 characters. Letters, numbers, spaces and special characters such as * # ! @ $ % & are allowed. If you forget it, the vault cannot be decrypted.")+'</p><div class="password-wrap"><input id="vault-pass" class="input" type="password" placeholder="Vault password (letters, numbers & symbols allowed)" autocomplete="new-password" autocapitalize="off" spellcheck="false"><button id="show-pass" class="btn secondary" type="button">Show</button></div><button id="unlock" class="btn">'+(hasVault()?"Unlock":"Create vault")+'</button><div id="msg"></div></div></div>';$("#show-pass").onclick=()=>{const p=$("#vault-pass"),b=$("#show-pass");p.type=p.type==="password"?"text":"password";b.textContent=p.type==="password"?"Show":"Hide"};$("#vault-pass").addEventListener("keydown",e=>{if(e.key==="Enter")$("#unlock").click()});$("#unlock").onclick=async()=>{try{if($("#vault-pass").value.length<8)throw new Error();await unlock($("#vault-pass").value);renderVault()}catch(_){msg("The password is incorrect or could not unlock the vault.")}}}
function options(selected){return (Array.isArray(window.API_CATALOG)?window.API_CATALOG:[]).map(p=>'<option value="'+esc(p.name)+'" '+(p.name===selected?"selected":"")+'>'+esc(p.name)+'</option>').join("")}
function renderVault(){const q=new URLSearchParams(location.search).get("provider");document.querySelector("#app").innerHTML='<div class="wrap">'+nav()+'<section class="hero"><h1>🔐 My API Keys</h1><p>Encrypted with AES-GCM and stored only on this browser. Nothing is uploaded to the directory.</p></section><div class="card tool"><select id="provider" class="select"><option value="">Choose provider…</option>'+options(q)+'</select><input id="label" class="input" placeholder="Label (optional)"><input id="key" class="input" type="password" name="api-key-value" placeholder="Paste API key or token" autocomplete="off" autocapitalize="off" spellcheck="false"><button id="save" class="btn">Save key</button><button id="lock" class="btn secondary">Lock</button><button id="export" class="btn secondary">Export encrypted vault</button><button id="import" class="btn secondary">Import vault</button><input id="file" type="file" accept=".json" hidden></div><div id="msg"></div><div class="card"><h2>Saved credentials</h2><div id="list"></div></div></div>';$("#save").onclick=save;$("#lock").onclick=()=>{vaultKey=null;records=[];renderLogin()};$("#export").onclick=exportVault;$("#import").onclick=()=>$("#file").click();$("#file").onchange=importVault;renderList()}
async function save(){const provider=$("#provider").value,key=$("#key").value.trim(),label=$("#label").value.trim();if(!provider||!key){msg("Choose a provider and enter a key.");return}const id=crypto.randomUUID();const e=await enc(JSON.stringify({provider,key,label,created:new Date().toISOString()}));await put({id,provider,label,...e});$("#key").value="";msg("Key saved locally and encrypted.");renderList()}
async function renderList(){records=await all();$("#list").innerHTML=records.length?records.map(r=>'<div class="vault-row"><div><b>'+esc(r.provider)+'</b>'+(r.label?' <span class="muted">· '+esc(r.label)+'</span>':'')+'<br><span class="masked">••••••••••••</span></div><div class="vault-actions"><button class="btn secondary" data-copy="'+r.id+'">Copy</button><button class="btn secondary" data-edit="'+r.id+'">Edit</button><button class="btn secondary" data-del="'+r.id+'">Delete</button></div></div>').join(""):'<p class="muted">No keys saved yet.</p>';document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{try{const p=JSON.parse(await dec(records.find(r=>r.id===b.dataset.copy)));await navigator.clipboard.writeText(p.key);msg("Key copied to your clipboard.")}catch(_){msg("Could not decrypt this key.")}});document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=async()=>{try{const r=records.find(x=>x.id===b.dataset.edit),p=JSON.parse(await dec(r));$("#provider").value=p.provider;$("#label").value=p.label||"";$("#key").value=p.key;await del(r.id);msg("Key loaded for editing. Save it again when finished.");renderList()}catch(_){msg("Could not decrypt this key.")}});document.querySelectorAll("[data-del]").forEach(b=>b.onclick=async()=>{if(confirm("Delete this key from this browser?")){await del(b.dataset.del);renderList()}})}
async function exportVault(){const data={version:1,algorithm:"AES-GCM",kdf:"PBKDF2-SHA-256",iterations:ITERATIONS,salt:localStorage.getItem("apiVaultSalt"),verifier:localStorage.getItem("apiVaultVerifier"),records:await all()};const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));a.download="free-api-directory-encrypted-vault.json";a.click();msg("Encrypted backup exported. Keep the file private.")}
async function importVault(){try{const file=$("#file").files[0];if(!file)return;if(file.size>5*1024*1024)throw 0;const d=JSON.parse(await file.text());if(d.version!==1||d.algorithm!=="AES-GCM"||d.kdf!=="PBKDF2-SHA-256"||d.iterations!==ITERATIONS||typeof d.salt!=="string"||!Array.isArray(d.records))throw 0;if(d.verifier!==null&&d.verifier!==undefined&&typeof d.verifier!=="string")throw 0;const ids=new Set();for(const r of d.records){if(!r||typeof r.id!=="string"||ids.has(r.id)||typeof r.provider!=="string"||!r.provider.trim()||typeof r.iv!=="string"||typeof r.data!=="string")throw 0;ids.add(r.id)}if(!confirm("This replaces the encrypted vault in this browser. Continue?"))return;localStorage.setItem("apiVaultSalt",d.salt);if(d.verifier)localStorage.setItem("apiVaultVerifier",d.verifier);else localStorage.removeItem("apiVaultVerifier");for(const r of await all())await del(r.id);for(const r of d.records)await put(r);location.reload()}catch(_){msg("That vault backup is invalid or could not be imported.")}}
(async()=>{try{await openDB();renderLogin()}catch(_){document.querySelector("#app").innerHTML='<div class="wrap"><section class="hero"><h1>Vault unavailable</h1><p>This browser does not support the local encrypted storage required by the key vault.</p></section></div>'}})();
})();