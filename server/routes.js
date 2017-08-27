var db = require('./services/dbService');
/**
 * 後端路由
 */
module.exports = function(app, dirPath) {
    app.get('/', function(req, res) {
        res.sendFile(dirPath + '/src/views/index.html');
    })

    app.post('/position',function(req,res){
        console.log(req.body.Latitude);
        var mapUrl = "http://api.map.baidu.com/geocoder/v2/";
        
        res.json({status:1, message: "success"})
    })
};