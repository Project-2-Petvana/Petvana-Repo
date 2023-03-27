var express = require('express');
var router = express.Router();


const petsCtrl = require('../controllers/pets');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// // GET/ pets/:id 
router.get('/user/:id', ensureLoggedIn,petsCtrl.show)

// GET pets/:id/edit
router.get('/user/:id/edit', ensureLoggedIn, petsCtrl.editInfo)

// PUT pets/:id
router.put('/user/:id', ensureLoggedIn, petsCtrl.updateInfo)

module.exports = router;
