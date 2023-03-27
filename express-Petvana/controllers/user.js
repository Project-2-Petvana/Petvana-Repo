const User = require('../models/user');
const Pet = require('../models/pet');


module.exports = {
    index,
    newPet, 
    createPet,
    deletePet,
};

// This will retrieve user information and show a list of pets belonging to the user, rendering the user.ejs
async function index(req, res) {
try {
const user = await User.find({});
    res.render('/user', {title: 'User Profile', user});
} catch(err) {
    console.log(err);
    res.sendStatus(500);
}
}

// This will render the new-pet.ejs view
function newPet(req, res) {
    res.render('/pets/new-pet', {title: 'Add a Pet', errorMsg: ''});
};

//This will submit the pet's information via a form on the addPets/ejs view, redirecting to profile.ejs
async function createPet(req, res) {
try {
    const user = await User.findById(req.params.id);
    req.body.user = user._id;
    await Pet.create(req.body);
    res.redirect('/user');
} catch(err) {
    res.sendStatus(500)
}
};

// This will delete the pet and all their health data from the database, redirecting to user.ejs
async function deletePet(req, res) {
    try {
        Pet.findOne({'pet._id': req.params.id}).then (function(user) {
            user.pet.remove(req.params.id);
            user.save().then(function(){
                console.log('data deleted');
                res.redirect('/user');
            })
        })
    } catch(err) {
        return next(err);
    }
};
