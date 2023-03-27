var express = require('express');
var router = express.Router();

const userCtrl = require('../controllers/user');

/* GET user listing. */
router.get('/user', userCtrl.index);

// // GET /user/new-pet
router.get('/new-pet', userCtrl.newPet);

// POST /user
router.post('/', userCtrl.createPet);

// DELETE /user
router.delete('/', userCtrl.deletePet);

module.exports = router;
