// Serve the content of this repo
// From https://stackoverflow.com/a/24575241/4746236
var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(3000);

console.log("Serving page on port 3000")