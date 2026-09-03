const CACHE="meine-verwaltung-v27-static-v1";
const STATIC=[
 "./",
 "./index.html",
 "./manifest.webmanifest",
 "./icon-192.png",
 "./icon-512.png"
];

self.addEventListener("install",event=>{
 self.skipWaiting();
 event.waitUntil(
   caches.open(CACHE).then(c=>c.addAll(STATIC)).catch(()=>{})
 );
});

self.addEventListener("activate",event=>{
 event.waitUntil(
   caches.keys()
     .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
     .then(()=>self.clients.claim())
 );
});

self.addEventListener("message",event=>{
 if(event.data && event.data.type==="SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch",event=>{
 const req=event.request;
 if(req.method!=="GET") return;

 const url=new URL(req.url);
 if(url.origin!==self.location.origin) return;

 // For page/navigation requests prefer the current GitHub version.
 if(req.mode==="navigate"){
   event.respondWith(
     fetch(req,{cache:"no-store"})
       .then(res=>{
         const copy=res.clone();
         caches.open(CACHE).then(c=>c.put("./index.html",copy)).catch(()=>{});
         return res;
       })
       .catch(()=>caches.match("./index.html"))
   );
   return;
 }

 // Static files: network first, cache fallback.
 event.respondWith(
   fetch(req,{cache:"no-store"})
     .then(res=>{
       if(res && res.ok){
         const copy=res.clone();
         caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
       }
       return res;
     })
     .catch(()=>caches.match(req))
 );
});
