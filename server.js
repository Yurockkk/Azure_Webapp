var http = require('http');
var url = require('url');
var express = require('express');
var app = express();


//set mongoose
var mongoose = require('mongoose');
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;
console.log('mongoose setup connectionString');

var UserSchema = mongoose.Schema({
	name	   : String,
    phone	   : String,
});
console.log('mongoose setup Schema');

var User= mongoose.model('users',UserSchema);

mongoose.connect(connectionString,function(err){
	if(err){
		console.log('mongoose connection error');
	}
});
console.log('mongoose setup model and connetion');



var user = new User();
	app.set('port',process.env.port || 1337);
	app.get('/',function(req,res){
		 res.send("<a href='/users'>Show Users</a>");
		 console.log('In /');
		//res.send('Hello World');
		//console.log('In /');
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
		
		user.name=req.query.name;
		user.phone=req.query.phone;
		user.save(function( err, user, count ){
    		res.redirect( '/' );
			console.log(" create success!! user= ",req.query.name);
			//res.redirect('/');
		});

	app.get('/users',function(req,res){
		User.find({},function(err,docs){
			res.json(docs);
		});
	});

	app.get('/users/:phone', function (req, res) {
    if (req.params.phone) {
    	console.log("In /users/:phone, phone="+req.params.phone);
        User.find({ phone: req.params.phone }, function (err, docs) {
            res.json(docs);
        });
    }
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