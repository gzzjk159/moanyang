const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(http);
const port = 3002;

io.on("connection" , socket => {
  console.log('a user connected');
  socket.on('chat message' , msg => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});
server.listen(port, () => console.log('server running on port : ' + port));