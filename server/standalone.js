var io = require('socket.io')();
io.on('connection', function(client) {
   //TODO
    console.log("New connection received!");
    //console.log(client);

    client.emit('event','test!');
});
io.listen(3000);