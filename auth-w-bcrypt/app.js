'use strict'; 
// To run this app:
// Run the PG server
// On the CL, type `npm run start:dev` then go to localhost:3000

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const passport = require('passport');
const session = require('express-session');

const app = express();

// set the template engine
app.set('view engine', 'pug');

const routes = require('./server/routes');

// middleware-- run on every request
app.use(logger('dev'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// For Passport
require('./server/config/passport/passport.js')();
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// We have to require our routes before the app.get('*', ...) catch-all route
// because the catch-all route will match any route and serve the welcome message,
// If we require our other routes after it, those other routes will never be hit.
app.use(routes);
// Default route runs on every request and logs a greeting
app.get('*', (req, res) => {
  res.redirect('/dashboard');
});

module.exports = app;