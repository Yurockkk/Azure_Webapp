var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var express=require('express');
var app=express();
//var port = process.env.PORT || 1337;

app.set('port',process.env.PORT || 1337); 
app.get('/',function(request,response){
	response.send('Hellooo');
});

http.createServer(app).listen(app.get('port'));


/*
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
	app.set('port',process.env.PORT || 1337);
	console.log('express server listening on port ' + app.get('port'));

}).listen(port);

*/

/*
function start(req, res){
res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}

http.createServer(start).listen(port);
*/

