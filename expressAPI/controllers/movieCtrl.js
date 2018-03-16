'use strict';
const { getAll, getOne } = require('../models/Movie');

module.exports.getMovies = (req, res, next) => {
  getAll()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch(err => next(err));
};

module.exports.getMovie = (req, res, next) => {
  getOne(req.params.movieId)
    .then((movie) => {
      if(movie){
        res.status(200).json(movie);
      } else {
        let error = new Error('Movie not found!');
        error.status = 404;
        next(error);
      }
    })
    .catch(err => next(err));
};