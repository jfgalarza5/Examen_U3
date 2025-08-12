const CACHE_NAME = "espe-app-v1";
const APP_SHELL = [
  "/",
  "/sw.js",
  "/index.html",
  "/js/app.js",
  "/css/app.css",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://code.getmdl.io/1.3.0/material.deep_purple-amber.min.css",
  "https://code.getmdl.io/1.3.0/material.min.js",
];

self.addEventListener("install", (event) => {
  console.log("Instalando Service Worker y cacheando Application Shell...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL);
    }).then(() => {
      console.log("Archivos cacheados correctamente.");
      return self.skipWaiting(); // Activación inmediata
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Borrando caché antigua:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return clients.claim();
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Interceptando:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log("Respondiendo desde caché:", event.request.url);
        return cachedResponse;
      }
      console.log("Recurso no en caché, solicitando a la red:", event.request.url);
      return fetch(event.request);
    })
  );
});

self.addEventListener("sync", (event) => {
  console.log("Evento sync recibido:", event);
});

self.addEventListener("push", (event) => {
  console.log("Notificación push recibida:", event);
});
