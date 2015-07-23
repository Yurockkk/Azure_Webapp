var http = require('http');
var url = require('url');
var express = require('express');
var app = express();
var port = process.env.port || 1337;

http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;
	console.log('Received '+pathname +'request');

	app.get('/',function(req,res){
		res.send('Hello World');
	});

	app.get('/login',function(req,res){
		res.send('Hello Gunger');
	});

	app.get('banana',function(req,res){
		res.sendfile(testtest.html);
	})

	/*
	var routes={
		'/': function(req,res){
			res.writeHead(200, { 'Content-Type': 'text/plain' });
   			res.end('Hello World\n');
		},
		'/login': function(req,res){
			res.writeHead(200, { 'Content-Type': 'text/plain' });
   			res.end('Hello Gunger\n');
		},
		'/banana':function(req,res){
			res.sendfile('testtest.html')
		}
	};

	if(typeof routes[pathname] === 'function'){
		routes[pathname](req,res);
	}else{
		res.writeHead(404);
   		res.end('404 not found\n');
	}
	*/

}).listen(port);