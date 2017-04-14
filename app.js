var express = require('express'),
        app = express(),
        server = require('http').createServer(app),
        io = require('socket.io').listen(server);

server.listen(3301);

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html'); 
});

io.sockets.on('connection', function(socket){
    
    
    socket.on('send-message', function(data){
        
        io.sockets.emit('new message', data);
    });
});