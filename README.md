```
$npm install
$node app.js
```

3000端口

没有按照考核题目给的数据...

自己找了两个接口 

http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding#.E9.80.86.E5.9C.B0.E7.90.86.E7.BC.96.E7.A0.81.E6.9C.8D.E5.8A.A1

http://www.sojson.com/api/weather.html

第一个是将经纬度转换为城市名的接口

第二个是实时的天气接口

用前端拿到用户的经纬度后调用第一个接口将其转化为城市名

然后用这个城市名调用第二个接口

然后拿到实时的天气的值并且渲染

webpack sass less bable es6 canvas都没来得及写....

把时间完全投入到了这两个api的使用上了..

第一个调用的时候跨域问题弄了很久

第二个是jsonp 以前没用过 也弄了很久

已经尽力了...