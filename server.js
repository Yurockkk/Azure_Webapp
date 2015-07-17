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

http.createServer(function onRequest(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Gungerger\n');
}).listen(port);
