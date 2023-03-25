var express = require('express');
var router = express.Router();

const petsCtrl = require('../controllers/pets');


// GET/ pets - need to identify how /pets and /user page are separated
// router.get('/', petsCtrl.index);

// // GET/ pets/new
// router.get('/new', petsCtrl.new);

// POST/ pets
// router.post('/', petsCtrl.createPet)

// // GET/ pets/:id 
// router.get('/:id', petsCtrl.show)