//var http = require('http')
//var port = process.env.PORT || 1337;

var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);


/*
function onRequest(request,response){

			console.log("request for " + pathname + "received.");
			response.writeHead(200,{'Content-Type': 'text/plain'});
			response.end('Hello World\n');
		}
function start(){
		
		http.createServer(onRequest).listen(port);
	}
start();
*/