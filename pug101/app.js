"use strict";
const express = require('express');
const app = express();
const names = ["Frank", "Joe", "Bob"];

app.set('view engine', 'pug');

app.use(express.static(__dirname + "/public"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));

app.get('/', (req, res, next) => {
  let homeData = {
    subtitle: 'this is from app.js',
    names
  }
  res.render('index', homeData);
})

app.get('/article', (req, res, next) => {
  res.render('article', {
      subtitle: 'this is from app.js',
      names
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});