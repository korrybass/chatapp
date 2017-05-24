const PORT = process.env.PORT || 4444;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('user connected via socket.io');

  socket.on('message', (message) => {
    console.log('message has been recieved!', message.text);
    socket.broadcast.emit('message', message)
  });
  socket.on('disconnect', ()=> {
    console.log('has disconnected');
  });
  socket.emit('message', {
    text: "Rap verse started"
  });
})

http.listen(PORT, () => {
  console.log('server started...hot loaded!!' );
});
