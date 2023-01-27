// new platform object with out API key.
// in order for this to work, I had to start a server service on my 
// machine to make the api calls from in order to get around the
// CORS issue. E. Pruneda 1/26/23
// python -m http.server 8888  <-- server set up on bash cli

var platform = new H.service.Platform({
    'apikey': 'SEUg7I2NeQOyvkWCqRxjhcdBI3-h3f6PV81fdKrEwMg'
});
  
// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 7,
      center: { lat: 39.0997, lng: -94.5786 }
    });
