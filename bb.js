var http = require('http')
var port = process.env.PORT || 1337;

function start(){
	http.createServer(function(req, res) {
  	res.writeHead(200, { 'Content-Type': 'text/plain' });
  	res.end('Hello gunger\n');
	}).listen(port);
}
