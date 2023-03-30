var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homePage', { title: 'Petvana' });
});
// API 

//OAuth 
// Google OAuth login route
//passport.authenticate() method will return a middleware function that does the coordinating with google OAUTH server
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
  }
));

// Google OAuth callback route
// localhost:3000/oauth2callback
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/user',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
