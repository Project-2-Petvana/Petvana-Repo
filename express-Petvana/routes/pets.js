var express = require('express');
var router = express.Router();

// const 
const petsCtrl = require('../controllers/pets');

// // GET/ pets/:id 
router.get('/:id', petsCtrl.show)

// GET pets/:id/edit
router.get('/:id/edit', petsCtrl.editInfo)

// PUT pets/:id
router.put('/:id', petsCtrl.updateInfo)

module.exports = router;
