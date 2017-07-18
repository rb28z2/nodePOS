
var colors = require("colors");
console.log("Initializing Express...".green);

var express = require('express');
var path = require('path');
const app = express();



// Define the port to run on
app.use(express.static("assets"));

// Listen for requests
var http = require('http').Server(app);

console.log("Initalizing Socket.IO".green);
var io = require('socket.io')(http);

var jsonFile = require('jsonfile');
var file = __dirname + "/Menutest.json";
var menuFile = jsonFile.readFileSync(file);

http.listen(3000, function () {
	console.log("Listening on port 3000");
});

io.on('connection', function(socket){
	console.log('Connection to client established');
	
	socket.emit("menu-listing", menuFile);
	//console.log(menuFile);
});