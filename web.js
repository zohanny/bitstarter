
var express = require('express');
var app = express.createServer(express.logger());

fs = require('fs');

//fs.readFile('index.html', 'utf8', function (err,data) {
//  if (err) {
//    return console.log(err);
//  }
//  console.log(data);
//});


var buffer = fs.readFileSync("index.html");
//buffer.toString('utf-8');
//console.log("lalal");


app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
