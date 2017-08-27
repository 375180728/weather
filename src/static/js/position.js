function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(postPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function postPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
    var data = {
        "Latitude": position.coords.latitude,
        "Longitude": position.coords.longitude,
    }
    var req = packReq('POSITION', 'POST', null, data);
    request(req, function(result){
        console.log(1);
    })
}

window.onload = getLocation();
