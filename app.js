	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	var http = require('http').Server(app);
	var io = require('socket.io')(http);
	app.use(bodyParser.json());
	 
	io.on('connection',function(socket){
	    socket.on('data-message',function(msg){
	        var data = {
	            user: msg.user,
	            message:msg.message
	        }
	       io.emit('send-message', data);
	    });
	});
	 
	http.listen(process.env.PORT || 8888, function(){
	    console.log('listening on *:8888');
	});
