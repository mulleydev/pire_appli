const cacheName = "Worst PWA !";

const fileToCache = [
	'/',
	'/index.html',
	'/bundle.min.js',
	'/images',
];

self.addEventListener('install', (e) => {
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(fileToCache);
		})
  );
});

self.addEventListener('fetch', event => {
	event.responseWith(
    caches.match(event.resquest, {ignoreSearch: true}).then(res => {
    	return res || fetch(event.request);
    }));
});