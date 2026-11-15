/* Nahu Pondok — Service Worker (luar talian)
   Tukar VERSION setiap kali fail aplikasi dikemas kini supaya pengguna
   menerima versi baharu. */
const VERSION = 'nahu-pondok-v1.0.0';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './assets/css/app.css',
  './assets/js/data/kitab-1.js', './assets/js/data/kitab-2.js', './assets/js/data/kitab-3.js',
  './assets/js/data/irab.js', './assets/js/data/kamus.js', './assets/js/data/audio.js',
  './assets/js/store.js', './assets/js/engine.js', './assets/js/app.js',
  './assets/fonts/amiri-arabic-400-normal.woff2', './assets/fonts/amiri-arabic-700-normal.woff2',
  './assets/fonts/noto-naskh-arabic-arabic-400-normal.woff2', './assets/fonts/noto-naskh-arabic-arabic-600-normal.woff2',
  './assets/icons/icon.svg', './assets/icons/icon-192.png', './assets/icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
