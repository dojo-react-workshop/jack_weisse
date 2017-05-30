var http = require('http');
let fs = require("fs");

var server = http.createServer(function(request, response) {
  console.log('I got hit!');
  let file = "";
  if(request.url === "/") {
  	file = "./index.html";
  } else if(request.url === "/ninjas") {
  	file = "./ninjas.html";
  } else if(request.url === "/dojos/new") {
  	file = "./dojos.html";
  } else {
  	// file = "./error.html";
  	response.statusCode = 404;
  	response.end("<!DOCTYPE html><html><head><title>Error</title></head><body><h1>Somewhere, over the error...</h1></body></html>");
 	return;
  }
  fs.readFile(file,"utf-8",(err, data)=>{
  	if(err) throw err;
  	response.end(data);
  });
});

server.listen(6789);