function getWeather() {
    var req = packReq('WEATHER', 'GET', null)
    request(req, function(result) {
        var data = JSON.parse(result);
        jsonData = eval("(" + data + ")");
        var _num = jsonData.data.wendu;
        var _quality = jsonData.data.quality;
        var forecast = jsonData.data.forecast;
        var weatherList = ["晴", "多云", "阴", "大雾", "小雨", "中雨", "大雨", "雷阵雨","阵雨"];
        for (var i = 0; i < forecast.length; i++) {
            for (var j = 0; j < weatherList.length; j++) {
                if (weatherList[j] == forecast[i].type) {
                    icon[i].innerHTML = "<img src=../static/i/" + j + ".png>";
                }
            }
            sec_date[i].innerHTML = forecast[i].date;
            max[i].innerHTML = forecast[i].high;
            min[i].innerHTML = forecast[i].low;
            weath[i].innerHTML = forecast[i].type;
            wind[i].innerHTML = forecast[i].fx;
        }
        city.innerHTML = jsonData.city;
        shidu.innerHTML = "湿度：" + jsonData.data.shidu;
        num.innerHTML = _num;
        quality.innerHTML = "实时空气质量：" + _quality;

        console.log(jsonData);

        for(var k = 0; k < weatherItem.length; k ++){
            weatherItem[k].onclick = function() {
                console.log(this.attributes.index);
            }
        }
    })
}

getWeather();
