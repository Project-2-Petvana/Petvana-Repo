const User = require('../models/user');
const Pet = require('../models/pet');
// const pet = require('../models/pet');
// const pet = require('../models/pet');


module.exports = {
    index,
    newPet, 
    createPet,
    deletePet,
};

// This will retrieve user information and show a list of pets belonging to the user, rendering the user.ejs
async function index(req, res) {
try {
const user = await User.findById(req.params.id).populate('pet');
// const pet = await Pet.find({user: pet._id});
    res.render('user/user', {title: 'User Profile', user});
} catch(err) {
    console.log(err);
    res.sendStatus(500);
}
}

// This will render the new-pet.ejs view
async function newPet(req, res) {
    const user = await User.find({});
    // const pet = await Pet.find({});
    res.render('user/new-pet', {title: 'Add a Pet', errorMsg: '', user});
};

//This will submit the pet's information via a form on the addPets/ejs view, redirecting to profile.ejs
async function createPet(req, res) {
try {
    const user = await User.findById(req.params.id);
    // console.log(req.params.id, "id")
    // console.log(req.body.user, "user")
    // console.log(req.body)
    // console.log(user)
    // req.body.user = user._id;
    // console.log(req.body.user, "user test")
    // req.body.name = req.user.name;
    // console.log(req.body.name, "userName")
    // req.body.avatar = req.user.avatar;
    // console.log(req.body.avatar, "avatar")
    // console.log(req.body)

    user.pet.push(req.body);
    console.log(user.pet, "pet")
    console.log(req.body, "body")
    await user.save();
    // await Pet.create(req.body);
    res.redirect('/user');
} catch(err) {
    res.sendStatus(500)
}}

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
}
