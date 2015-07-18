
var bb = require('./bb.js');
var http = require('http')
var port = process.env.PORT || 1337;
bb.start();

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