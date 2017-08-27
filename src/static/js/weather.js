//获取天气一系列数据并加入html中

function getWeather(city) {
    var req = packReq('WEATHER', 'GET', [city])
    request(req, function(result) {
        var data = JSON.parse(result);
        jsonData = eval("(" + data + ")");
        console.log(jsonData);
        var _num = jsonData.data.wendu;
        var _quality = jsonData.data.quality;
        var forecast = jsonData.data.forecast;

        //天气类型 每一个类型对应一张图片
        var weatherList = ["晴", "多云", "阴", "大雾", "小雨", "中雨", "大雨", "雷阵雨", "阵雨"];
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


            //点击每一个a弹出一个对应信息
            weatherItem[i].onclick = function() {
                var index = this.getAttribute("index");
                notice = forecast[index].notice;
                sunrise = forecast[index].sunrise;
                sunset = forecast[index].sunset;
                fl = forecast[index].fl;
                show.innerHTML = '<p>小贴士：' + notice + '</p><p>日出：' + sunrise + '</p><p>日落：' + sunset + '</p><p>风量：' + fl + '</p>';
                show.style.display = 'block';
                show.style.zIndex = 1000;
            }
            cityName.innerHTML = jsonData.city;
            shidu.innerHTML = "湿度：" + jsonData.data.shidu;
            num.innerHTML = _num;
            quality.innerHTML = "实时空气质量：" + _quality;
            console.log(jsonData);
        }
    })
}

