'use strict'; 
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/hello.html'));
});

app.get('/time', (req, res) => {
  let date = new Date;
  res.send(date.toISOString());
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);
