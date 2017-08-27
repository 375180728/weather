function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}


//从百度地图接口将经纬度值转为地名 jsonp
function getPosition(position) {
    var script = document.createElement('script');
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var Url = 'http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=' + latitude + "," + longitude + '&output=json&pois=1&ak=lEc8dhOhsgIZscFubPO1OH8eknKMLPVm';
    console.log(Url);
    script.setAttribute('src', Url);
    document.getElementsByTagName('head')[0].appendChild(script);
    console.log(Url);
}

//将拿到的城市名除去最后一个省或市字 并将其保存到_city
var renderReverse = function(data) {
    var city = data.result.addressComponent.city;
    city = city.substring(0, city.length - 1);
    getWeather(city)
    console.log(window._city);
};


window.onload = getLocation();
