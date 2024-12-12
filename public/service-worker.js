
const cacheName = 'v1';

// call install event
self.addEventListener('install', (e) => {
 console.log('service worker: Installed');

})

//activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log(`Service Worker: Clearing old cache: ${cache}`);
            return caches.delete(cache);
          }
          return null; // Return null for caches not deleted
        })
      );
    })
  );
});

 //call fetch events
 self.addEventListener('fetch', (e) => {
    console.log('Service worker: fetching');
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          // make copy/clone of response
          const resClone = response.clone();
          //open cache
          caches
            .open(cacheName)
            .then(cache => {
              //add the response to cache
                cache.put(e.request, resClone);
            });
            return response;
        })
        .catch((err) => caches.match(e.request).then(response => response))
    );
 });
