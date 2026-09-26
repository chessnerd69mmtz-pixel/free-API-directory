(function(){
  const url = new URL("data/catalog-lite.json", document.baseURI).href;
  window.API_CATALOG_PROMISE = fetch(url, {cache:"force-cache"})
    .then(r=>{ if(!r.ok) throw new Error("Catalog HTTP "+r.status); return r.json(); })
    .then(d=>{ if(!d || !Array.isArray(d.providers)) throw new Error("Invalid catalog"); window.API_CATALOG=d.providers; return d.providers; });
  window.API_CATALOG_READY = window.API_CATALOG_PROMISE;
})();
