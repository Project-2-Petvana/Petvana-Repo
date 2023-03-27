var express = require('express');
var router = express.Router();


const petsCtrl = require('../controllers/pets');

// // GET/ pets/:id 
router.get('/user/:id', petsCtrl.show)

// GET pets/:id/edit
router.get('/user/:id/edit', petsCtrl.editInfo)

// PUT pets/:id
router.put('/user/:id', petsCtrl.updateInfo)

module.exports = router;
