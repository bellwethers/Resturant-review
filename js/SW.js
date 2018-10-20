self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-stuff').then(function(cache) {
      return cache.addAll([

     ' /mws-restaurant-stage-1-master/js/main.js',
     ' /mws-restaurant-stage-1-master/img/1.jpg',
     ' /mws-restaurant-stage-1-master/img/2.jpg',
     ' /mws-restaurant-stage-1-master/img/3.jpg',
     ' /mws-restaurant-stage-1-master/img/4.jpg',
     ' /mws-restaurant-stage-1-master/img/5.jpg',
     ' /mws-restaurant-stage-1-master/img/5.jpg',
     ' /mws-restaurant-stage-1-master/img/6.jpg',
     ' /mws-restaurant-stage-1-master/img/7.jpg',
     ' /mws-restaurant-stage-1-master/img/8.jpg',
     ' /mws-restaurant-stage-1-master/img/9.jpg',
     ' /mws-restaurant-stage-1-master/img/10.jpg',

      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    cache.match(e.request).then(function (response){
      if(response){
      console.log( e.request, ' is in cache');
      return response;
    }else{
      console.log(e.request, ' is in cache');
      return fetch (e.request)
      .then (function(response){
        caches.open('my-stuff').then (function(cache){
          cache.put(e.request,resopnse)
        })
        return response;
      })
    };
  })
  );
});
