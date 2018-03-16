'use strict'; 
const { getAll, getOne } = require('../models/Director');

module.exports.getDirectors = (req, res, next) => {
  getAll()
  .then((direx) => {
    res.status(200).json(direx);
  })
  .catch(err => next(err));
};

module.exports.getDirector = (req, res, next) => {
  getOne(req.params.dirId)
  .then((direx) => {
    res.status(200).json(direx);
  })
  .catch(err => next(err));
};

