'use strict'; 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('models', require('./models'));
const models = app.get('models');
const { Beach, Lifeguard, Sandcastle, Tool } = app.get('models');

//middleware stack
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;