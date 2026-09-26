(function(){
"use strict";
const VERSION="20260926-2";
const url=new URL("data/providers.json?v="+VERSION,document.baseURI).href;
window.API_CATALOG_PROMISE=fetch(url,{cache:"force-cache"})
  .then(r=>{if(!r.ok)throw new Error("Catalog HTTP "+r.status);return r.json();})
  .then(d=>{if(!Array.isArray(d))throw new Error("Invalid catalog");window.API_CATALOG=d;return d;});
window.API_CATALOG_READY=window.API_CATALOG_PROMISE;
})();