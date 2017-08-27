

var fir_date = $('.fir-date'),
    cityName = $('.city'),
    quality = $('.quality'),
    temp = $('.temp'),
    weath = $$('.weath'),
    sec_date = $$('.sec-date'),
    max = $$('.max'),
    min = $$('.min'),
    wind = $$('.wind'),
    innerItem = $$('.innerItem'),
    num = $('.num'),
    icon = $$('.icon'),
    shidu = $('.shidu'),
    show = $('.show'),
    weatherItem = $$('.weatherItem'),
    mycanvas = $('.mycanvas');


//获取时间
function getDate() {
    var show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
    var oDate = new Date();
    var day = oDate.getDay();
    var month = oDate.getMonth() + 1;
    var dates = oDate.getDate();
    str = month + "月" + dates + "日" + " " + show_day[oDate.getDay()];
    fir_date.innerHTML = str;
    for (i = 0; i < sec_date.length; i++) {
        if(day == 0){
            day = 7;
        }
        str_day = show_day[day - 1];
        str_dates = month + "月" + dates + "日";
        innerItem[i].innerHTML = str_day;
        day++;
        if(day > 7){
            day = 1;
        }
    }

}

getDate();

//canvas画曲线.. 时间不够了还没完成
function draw(){

}