let mapOptions = {
    center:[12.883781632378646, 77.59591397105872],
    zoom:80
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


let marker = null;
map.on('click', (event)=> {

    if(marker !== null){
        map.removeLayer(marker);
    }

    marker = L.marker([event.latlng.lat , event.latlng.lng]).addTo(map);

    document.getElementById('latitude').value = event.latlng.lat;
    document.getElementById('longitude').value = event.latlng.lng;
    
})
