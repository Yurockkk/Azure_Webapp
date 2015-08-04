var TaskList = require('./routes/tasklist');
var taskList = new TaskList(process.env.CUSTOMCONNSTR_MONGOLAB_URI);

/*
//add push-notification to azure(via baidu)
var azure = require('azure');
var notificationHubService = azure.createNotificationHubService('baidu-push-ns','Endpoint=sb://baidu-push-ns.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=Cz4Z5Ns2Ly0LpAdIumwgtgAwaUf79f/12qOVrZ4/ORQ=');
*/

var Push   = require('baidu-push');
var userId = '984042635465895574';

var pushOption = {
  apiKey: 'ztuEYAE5rQG4df1MwS9jtnfT',
  secretKey: 'fNtMXArMj0eBdA7T4DmXIUWhaTuyYOG2',
  // timeout: 2000, // optional - default is: 5000
  // agent: false   // optional - default is: maxSockets = 20
};

var client = Push.createClient(pushOption);

console.log('setup azure');
console.log("In app.js");

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

//add banana routing
var banana= require('./routes/banana');
var extract= require('./routes/extract');

var app = express();


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

//add baidu push
app.get('/push',function(req,res){
  console.log('In /push');
  
  var option = {
    messages_type: 1,
    push_type: 1,
    user_id: userId,
    messages: [{

      //android必选，ios可选
      "title" : "hello" ,   
      "description": "hello world",
      //android特有字段，可选 
      "notification_builder_id": 0,
      "notification_basic_style": 7,
      "open_type":1,
      "user_confirm": 0,
      "url": "http://developer.baidu.com"
    }],
    msg_keys: ["title"]
  };
  console.log('data setting');
  var runtime =10; 
  var counter = 0;
  /*
  for(var i=0, i<runtime,++i){

    client.pushMsg(option, function(error, result) {
      counter++;
      console.log('counter='+ counter);
  //    if(!error){
  //      console.log('push success');
  //    }
    });
  }
*/
  var timmer= setInterval(function(){
    client.pushMsg(option,function(err,result){
      counter++;
      console.log('setInterval, counter= '+counter);
      if(counter >= 10){
        console.log('clearInterval! counter='+counter);
        clearInterval(timmer);
      }
    });
  },1000);

  
  res.redirect('/');
});
//add extract item by category 7/30
app.use('/extract',extract);

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

app.listen(3000); // Listen on port 3000
module.exports = app;
//module.exports = app;
