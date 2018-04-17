"use strict";
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('models', require('./models'));
const models = app.get('models');
const { User, Show, Director } = app.get('models');

//middleware stack
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public', { extensions: 'html' }));

//Show routes
app.get('/shows', (req, res, next) => {
  Show.findAll({ 
    include: [{ model: Director, attributes: ['name']}] 
  })
  .then(shows => {
    res.status(200).json(shows);
  })
  .catch(err => next(err));
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
  .catch(err => next(err));
});

// User routes
app.post('/favorites', ({ body: { UserId, ShowId }}, res, next) => {
  User.findById(UserId)
    .then(foundUser => {
      foundUser.addFavorite(ShowId)
      .then(newRecord => {
        res.status(201).json(newRecord);
      })
    })
    .catch(err => next(err));
})

app.put('/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(foundUser => {
      const func = req.body.ShowId ? 'addFavorite' : 'update';
      foundUser[func](req.body.showId || req.body)
        .then(item => {
          res.status(201).json(item);
        });
    })
    .catch(err => next(err));
});

app.get('/users/:id/favorites', (req, res, next) => {
  User.findById(req.params.id)
  .then(foundUser => {
    foundUser.getFavorites()
      .then(favorites => {
        let userName = foundUser.getFullName();
        const favoriteObj = { userName, favorites }
        res.status(200).send(favoriteObj)
      })
  })
  .catch(err => res.status(501).json(err));
});

// Director routes

app.get('/directors', (req, res, next) => {
  Director.findAll({
    include: [{ model: Show, attributes: ['name']}]
  })
  .then(directors => {
    res.status(200).json(directors);
  })
  .catch(err => next(err));
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
  .catch(err => next(err));
})

app.post("/directors", (req, res, next) => {
  Director.create(req.body)
    .then(newDirector => {
      res.status(201).json(newDirector);
    })
    .catch(err => next(err));
});

// error handler
app.use((err, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: "There was a terrible accident",
    error: error.message
  });
})

app.use((req, res, next) => {
  let err = new Error('Page not found');
  err.status = 404;
  next(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
