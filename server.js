var http = require('http')
var port = process.env.PORT || 1337;

/*	function onRequest(request, response){
		console.log("request for "+ pathname + "received.");
		response.writeHead(200,{"Content-Type": "text/plain"});
		response.write("Hello Gungerger");
		response.end;
	}

	http.createServer(onRequest).listen(port);
	console.log("Server has started.");
*/

http.createServer(function (req, res) {
	function start(){
		function onRequest(request,response){

			console.log("request for " + pathname + "received.");
			response.writeHead(200,{'Content-Type': 'text/plain'});
			response.end('Hello World\n');
		}
		http.createServer(onRequest).listen(port);
	}
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Gungerger\n');
  console.log("Server has started");
}).listen(port);
