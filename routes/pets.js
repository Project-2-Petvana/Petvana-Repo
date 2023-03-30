var express = require('express');
var router = express.Router();

// const 
const petsCtrl = require('../controllers/pets');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// // GET/ pets/:id 
router.get('/:id', ensureLoggedIn, petsCtrl.show)

// GET pets/:id/edit
router.get('/:id/editProfile', ensureLoggedIn, petsCtrl.editInfo)

// PUT pets/:id
router.put('/:id', ensureLoggedIn, petsCtrl.updateInfo)

module.exports = router;