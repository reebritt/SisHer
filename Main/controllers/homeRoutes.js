const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('loginpage');
});



module.exports = router;
