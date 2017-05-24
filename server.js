const PORT = process.env.PORT || 4444;
const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + "/public"));

http.listen(PORT, () => {
  console.log('server started!');
});
