var map;

var loc = {
    "dir1": {
        "lat" : "-34.6775709",
        "long" : "-58.5704461",
        "desc" : "<b>PREPA</b><br>La Matanza",
        "marker" : undefined
    },
    "dir2": {
        "lat" : "-34.6064996",
        "long" : "-58.4356338",
        "desc" : "<b>PREPA</b><br>Parque Centenario",
        "marker" : undefined
    }
}

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

$( document ).ready(function() {
    map = L.map('map');
    initMap();
    locatePerson();
    locateUs();
    
    map.setView([-34.6775709,-58.5704461], 10);
    
    $(".map-link").click(function(event){
        var location = loc[$(this).attr("id")];
        map.setView([location.lat, location.long], 15);
        location.marker.openPopup();
    });
});

 

function initMap() { 
   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2lyb255IiwiYSI6ImNrY3pmaXNlZTBmemYyc3ZwbnJhOWtlajEifQ.fbhbXXJ6c_JLOxpDoFpnLg'
    }).addTo(map);
   
};

function locateUs() {
    loc.dir1.marker = L.marker([loc.dir1.lat,loc.dir1.long], {icon: blueIcon}).addTo(map);
    loc.dir1.marker.bindPopup(loc.dir1.desc).openPopup();

    loc.dir2.marker = L.marker([loc.dir2.lat,loc.dir2.long], {icon: blueIcon}).addTo(map);   
    loc.dir2.marker.bindPopup(loc.dir2.desc).openPopup();
}

function locatePerson() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
        var vos = pos.coords;
        var vosLoc = L.marker([vos.latitude,vos.longitude], {icon: greenIcon}).addTo(map);
        vosLoc.bindPopup("<b>VOS</b>");
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    return navigator.geolocation.getCurrentPosition(success, error, options);
     
}

