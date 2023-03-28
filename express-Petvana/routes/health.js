var express = require('express');
var router = express.Router();
const healthCtrl = require('../controllers/health')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /pets/:id
router.post('../pets/:id', ensureLoggedIn, healthCtrl.create)

module.exports = router