var http = require('http');
var url = require('url');
var port = process.env.PORT || 1337;

http.createServer(function(request,response){
	var pathname = url.parse(request.url).pathname;
	console.log('required' + pathname +'request.');

	var routes = {
		'/': function(request,response){
			response.writeHead(200,{'Content-Type':'text/plain'});
			response.write('Hello, gunger');
			response.end();
		},
		'/login':function(request,response){
			response.writeHead(200,{'Content-Type':'application/json'});
			response.write(JSON.stringify({data: 'test'}));
			response.end();

		}
	}

	if(typeof routes[pathname] === 'function'){
		routes[pathname](request,response);
	}else{
			response.writeHead(404);
			response.write('404 not found');
			response.end();
	}
	

}).listen(port);

/*
function start(req, res){
res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}

http.createServer(start).listen(port);
*/

