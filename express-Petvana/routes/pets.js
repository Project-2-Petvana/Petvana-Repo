var express = require('express');
var router = express.Router();

<<<<<<< HEAD
// const 
=======
>>>>>>> 18ce33f992beceb3b2f4fd27070673834e198f0f
const petsCtrl = require('../controllers/pets');

// // GET/ pets/:id 
router.get('/:id', petsCtrl.show)

// GET pets/:id/edit
router.get('/:id/edit', petsCtrl.editInfo)

// PUT pets/:id
router.put('/:id', petsCtrl.updateInfo)