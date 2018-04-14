"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('models', require('./models'));
const models = app.get('models');
const { User, Show, Director } = app.get('models');

//middleware stack
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/shows', (req, res, next) => {
  Show.findAll({ 
    include: [{ model: Director, attributes: ['name']}] 
  })
  .then(shows => {
    res.status(200).json(shows);
  })
});

app.get('/shows/:id', (req, res, next) => {
  Show.findOne({
    raw: true,
    where: {id: req.params.id},
    include: [{ model: Director, attributes: ['name']}]
  })
  .then(show => {
    res.status(200).json(show);
  })
  .catch((err) => {
    console.log(err);
  })
});

// add user favorite
app.post('/favorites', ({ body: { UserId, ShowId }}, res, next) => {
  User.findById(UserId)
    .then(foundUser => {
      foundUser.addFavorite(ShowId)
      .then(newRecord => {
        res.status(201).json(newRecord);
      })
    })
})

app.get('/directors', (req, res, next) => {
  Director.findAll({
    include: [{ model: Show, attributes: ['name']}]
  })
  .then(directors => {
    res.status(200).json(directors);
  })
})

app.get('/directors/:id', (req, res, next) => {
  Director.findOne({
    raw: true,
    where: { id: req.params.id },
    include: [{ model: Show, attributes: ['name'] }]
  })
  .then(director => {
    res.status(200).json(director);
  })
  .catch((err) => {
    console.log(err);
  })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
