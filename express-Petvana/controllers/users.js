const User = require('../models/user');
const Pet = require('../models/pet');

module.exports = {
    index,
    new: newPet, 
    createPet,
};

//This will retrieve user information and show a list of pets belonging to the user
// function index(req, res) {

// }

// This will redirect the user to the addPets.ejs view
// function newPet(req, res) {

// };

//This will submit the pet's information via a form on the addPets/ejs view
// async function createPet(req, res) {
// try {

// } catch(err) {

// }
// };