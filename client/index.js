var socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', function(){
    console.log("Client connected OK to localhost port 3000");
});

socket.on('event', function(data){
    console.log("Event received!");
});

socket.on('disconnect', function(){
    console.log("Client disconnected OK from localhost port 3000");
});