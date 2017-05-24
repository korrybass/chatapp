const PORT = process.env.PORT || 4444;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + "/public"));
io.on('connection', () => {
  console.log('user connected via socket.io');
})

http.listen(PORT, () => {
  console.log('server started...hot loaded!!');
});
