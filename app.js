var http = require('http');
var path = require('path');
var routes = require('./server/routes');
var bodyParser = require('body-parser');
var express =require('express');
var session = require('express-session')

var app = new(require('express'))()
var port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use('/libs', express.static('src/libs'));
app.use('/static', express.static('src/static'));

routes(app, __dirname);

var server = http.createServer(app);
server.listen(port, function() {
    console.log("Listening on %j", server.address());
});