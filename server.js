var http = require('http')
var port = process.env.PORT || 1337;


function start(req, res){
res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}

http.createServer(start).listen(port);


