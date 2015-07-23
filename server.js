
var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
	var type = 'Content-Type': 'text/plain';
	var output = ;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);