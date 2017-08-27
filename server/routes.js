var db = require('./services/dbService');
var http = require('http');
/**
 * 後端路由
 */
module.exports = function(app, dirPath) {
    app.get('/', function(req, res) {
        res.sendFile(dirPath + '/src/views/index.html');
    })

    app.post('/position', function(req, res) {
        console.log(req.body.Latitude);
        var mapUrl = "http://api.map.baidu.com/geocoder/v2/";

        res.json({
            status: 1,
            message: "success"
        })
    })


    app.get('/winters/:city', function(req, res) {
        var options = {
                hostname: 'www.sojson.com',
                path: '/open/api/weather/json.shtml?city=' + encodeURI(req.params.city),
                method: 'GET'
            }
            //创建请求  
        result = null;
        var req = http.request(options, function(httpRes) {
            console.log('STATUS:' + httpRes.statusCode);
            console.log('HEADERS:' + JSON.stringify(httpRes.headers));
            httpRes.setEncoding('utf-8');
            httpRes.on('data', function(chunk) {
                result = chunk;
            });
            httpRes.on('end', function() {
                res.json(result)
            });
        });
        req.on('error', function(err) {
            res.json({
                error: 1
            })
        });
        req.end();
    })

};