var express = require('express');
var router = express.Router();

const userCtrl = require('../controllers/user');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET user listing. */
router.get('/', ensureLoggedIn, userCtrl.index);

// // GET /user/new-pet
router.get('/new-pet', ensureLoggedIn, userCtrl.newPet);

// POST /user
router.post('/', ensureLoggedIn, userCtrl.createPet);

// DELETE /user
router.delete('/', ensureLoggedIn, userCtrl.deletePet);

module.exports = router;
