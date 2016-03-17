exports.Google = function() {
  var map;
  var infowindow;
};

exports.Google.prototype.firstMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.450, lng: -112.067},
    zoom: 8
  });
}

exports.Google.prototype.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -12.397, lng: 134.655},
    zoom: 8
  });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

exports.Google.prototype.bicycle = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 42.3726399, lng: -71.1096528}
  });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
}

exports.Google.prototype.bars = function() {
  var portland = {lat: 45.5200, lng: -122.6819};

  map = new google.maps.Map(document.getElementById('map'), {
    center: portland,
    zoom: 15
  });

  var service = new google.maps.places.PlacesService(map);
  var infowindow = new google.maps.InfoWindow();

  service.getDetails({
    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
          'Place ID: ' + place.place_id + '<br>' +

          place.formatted_address + '</div>');
        infowindow.open(map, this);
      });
    }
  });



  service.nearbySearch({
    location: portland,
    radius: 500,
    type: ['bar']
  }, callback);
}

 function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
