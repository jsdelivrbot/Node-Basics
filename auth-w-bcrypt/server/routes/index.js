'use strict';
const { Router } = require('express');
const router = Router();

router.use(require('./auth'));

// if the http request is a GET for the home page
router.get('/dashboard', (req, res, next) => {
  let homeData = {
    message: 'Welcome to the home page!',
    user: req.body.user
  };
  res.render("dashboard", homeData);
})

module.exports = router;