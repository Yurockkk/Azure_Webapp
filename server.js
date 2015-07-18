var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function(request,response){
	var pathname = url.parse(request.url).pathname;
	var qs = querystring.parse(url.parse(request.url).query);
	console.log('required' + pathname +'request.');

	var routes = {
		'/': function(request,response){
			response.writeHead(200,{'Content-Type':'text/plain'});
			response.write('Hello, gunger');
			response.end();
			console.log('pathname=' + pathname);
		},
		'/login':function(request,response){
			var type = 'text/plain';
			var output = 'test';

			if (typeof qs.format !== 'undefined' && qs.format === 'json'){
				type = 'application/json';
				output = JSON.stringify({data: 'test'});
			}else if(typeof qs.format !== 'undefined' && qs.format === 'html'){
				var html = fs.readFileSync('testtest.html');
				type = 'text/html';
				output = html;
			}
			response.writeHead(200,{'Content-Type':type});
			response.write(output);
			response.end();
			console.log('pathname=' + pathname);


		}
	}

	if(typeof routes[pathname] === 'function'){
		routes[pathname](request,response);
	}else{
			response.writeHead(404);
			response.write('404 not found');
			response.end();
			console.log('pathname=' + pathname);
	}
	

}).listen(port);

/*
function start(req, res){
res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}

http.createServer(start).listen(port);
*/

