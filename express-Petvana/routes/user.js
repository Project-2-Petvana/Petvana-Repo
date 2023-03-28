var express = require('express');
var router = express.Router();

const userCtrl = require('../controllers/user');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// // GET /user/new-pet
router.get('/new-pet', ensureLoggedIn, userCtrl.newPet);

/* GET user listing. */
router.get('/:id', ensureLoggedIn, userCtrl.index);

// POST /user
router.post('/', ensureLoggedIn, userCtrl.createPet);

// DELETE /user
router.delete('/', ensureLoggedIn, userCtrl.deletePet);

module.exports = router;
