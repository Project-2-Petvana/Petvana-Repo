var express = require('express');
var router = express.Router();

// const passport = require ('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homePage', { title: 'Petvana' });
});
// API 

// 

module.exports = router;
