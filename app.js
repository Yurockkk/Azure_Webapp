var TaskList = require('./routes/tasklist');
var taskList = new TaskList(process.env.CUSTOMCONNSTR_MONGOLAB_URI);

console.log("In app.js");

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
//add hello.js
//var hello = require('./routes/hello');
//add banana routing
var banana= require('./routes/banana');
var app = express();

//add log in middleware
router=new routes();
router.use(function(req,res,next){
  console.log(req.method, req.url);

  next();
});

//port setup
//app.set('port', process.env.port || 1337);
//console.log('port');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
console.log('views');
app.set('view engine', 'jade');
console.log('view engine');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routing 
app.get('/', taskList.showTasks.bind(taskList));
//add banana routing
app.get('/banana',banana);
//add extract item by category 7/30
//app.get('/extract/:itemCategory',extract);
app.post('/addtask', taskList.addTask.bind(taskList));
app.post('/completetask', taskList.completeTask.bind(taskList));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


/*
http.createServer(app).listen(app.get('port'), function(req, res) {
    console.log("express server listen to " + app.get('port'));
});
*/
app.listen(3000); // Listen on port 3000
module.exports = app;
//module.exports = app;
