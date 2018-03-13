'use strict'; 
const path = require('path');
const express = require('express');
const { printEgg } = require('./egg.js');

const app = express();


app.get('/', (req, res) => {
  res.send(`Check out our home, chickens, and eggs! They're AMAZING...<br>
          go to the /home, /chickens, or /eggs url extension`);
})

app.use('/eggs', printEgg);

app.use(express.static('public', { extensions: 'html' }));

app.use((req, res, next) => {
  let err = new Error('not found you bum!');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.send('YOU BLEW IT! SAD EASTER FOR EVERYONE!!!');
})

app.listen(8083);