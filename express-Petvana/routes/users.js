var express = require('express');
var router = express.Router();

const usersCtrl = require('../controllers/users');

/* GET users listing. */
// router.get('/', usersCtrl.index);

// // GET /users/new-pet
// router.get('/new-pet', usersCtrl.newPet);

// POST /users
// router.post('/', usersCtrl.createPet);

// DELETE /users
// router.delete('/', usersCtrl.deletePet);

module.exports = router;
