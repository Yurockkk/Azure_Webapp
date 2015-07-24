var http = require('http');
var url = require('url');
var express = require('express');
var app = express();


//set mongoose
var mongoose = require('mongoose');
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;
console.log('mongoose setup connectionString');

//var connectionString = "mongodb://mabobo:JGvKqm8c.ZCdY8osNK83N2UfNH.R_ZLLwiKvcxFPv.U-@ds038888.mongolab.com:38888/mabobo"
//console.log('mongoose setup connectionString');

var TodoSchema = mongoose.Schema({
	name	   : String,
    phone	   : String
});
console.log('mongoose setup Schema');

var Todo= mongoose.model('Todo',TodoSchema);

mongoose.connect(connectionString,function(err){
	if(err){
		console.log('mongoose connection error');
	}
});
console.log('mongoose setup model and connetion');




	app.set('port',process.env.port || 1337);
	app.get('/',function(req,res){
		res.send('Hello World');
		console.log('In /');
	});

	app.get('/login',function(req,res){
		res.send('Hello Gunger');
		console.log('In /login');
	});

	app.get('/banana',function(req,res){
		res.sendfile('testtest.html');
		console.log('In /banana');
	});

	app.get('/create',function(req,res){
		console.log("In /create, name= ", req.query.name);
		console.log("In /create, phone= ", req.query.phone);
		var user = new Todo();
		user.name=req.query.name;
		user.phone=req.query.phone;
		user.save(function( err, todo, count ){
    		todo.redirect( '/' );
			console.log(" create success!!");
			//res.redirect('/');
		});

	app.get('/yubo',function(req,res){
		Todo.find({},function(err,docs){
			res.json(docs);
		});
	});
		/*
		new Todo({
			name	:req.query.name,
			phone	:req.query.phone
		}).save(function( err, todo, count ){
    		todo.redirect( '/' );
			console.log(" create success!!");
			//res.redirect('/');
		});*/
		//res.send('name='+ req.query.name+'.\n'+ 'tel= '+ req.query.tel );
		//res.redirect('/');
	});


	http.createServer(app).listen(app.get('port'),function(req,res){
		console.log("express server listen to "+ app.get('port'));
	});



/*
http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;
	console.log('Received '+pathname +'request');

	

	
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
	

}).listen(port);

*/