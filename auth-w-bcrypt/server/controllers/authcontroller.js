'use strict'; 
module.exports.signup = (req, res) => {
  res.render('signup');
};

module.exports.signin = (req, res) => {
  res.render('signin');
};

module.exports.logout = (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
}

module.exports.dashboard = (req, res) => {
  let homeData = {
    msg: "Welcome to the homepage!",
    user: req.user
  };
  res.render('dashboard', homeData);
};