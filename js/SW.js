self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-stuff').then(function(cache) {
      return cache.addAll([
        '/',
        '/img'
      ]);
    });
  );
});
