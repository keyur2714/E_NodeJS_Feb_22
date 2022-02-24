var http = require('http');
var url = require('url');
var inbuiltUtil = require('util');
var util = require('./util');


var server = http.createServer(function(req,res) {
    var qParam = url.parse(req.url, true).query;
    
    res.write(util.msg+" "+qParam.name+" "+qParam.city);
    res.end();
});

server.listen(5000);
console.log("Server started on port 5000");
