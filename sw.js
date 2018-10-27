self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-stuff').then(function(cache) {
      return cache.addAll([
        '/',
  				'/index.html',
  				'/restaurant.html',
  				'/css/styles.css',
  				'/data/restaurants.json',
  				'/img/1.jpg',
  				'/img/2.jpg',
  				'/img/3.jpg',
  				'/img/4.jpg',
  				'/img/5.jpg',
  				'/img/6.jpg',
  				'/img/7.jpg',
  				'/img/8.jpg',
  				'/img/9.jpg',
  				'/img/10.jpg',
  				'/js/dbhelper.js',
  				'/js/main.js',
  				'/js/restaurant_info.js'
  			]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function (response){
      if(response){
      console.log( e.request, ' is in cache');
      return response;
    }else{
      console.log(e.request, ' is not in cache. Fetching...');
      return fetch (e.request)
      .then (function(response){
        caches.open('my-stuff').then (function(cache){
          cache.put(e.request,response);
        })
        return response;
      })
      .catch(function(error) {
					console.log(error);
				});
    };
  })
  );
});
