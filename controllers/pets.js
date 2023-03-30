const User = require('../models/user');
const Pet = require('../models/pet');
const Health = require('../models/health')

module.exports = {
    show,
    editInfo,
    updateInfo
};

// This will show a detail page for the specific pet clicked on profile.ejs
async function show(req, res) {
    try {
        // declares a specific user to be used in the function
        const user = await User.findById(req.user.id);
        // declares a specific pet reference id
        const petId= req.params.id;
        // declares a specific pet with its related health data
        const pet = await Pet.findById(petId).populate('health');
        // if there is health data, render the page and pass through user, pet, and health
        if (Health) { 
            // declares a specific health data to the specific pet
            const health = await Health.findById(req.params.id);
            // renders the pet profile ejs in views with the specific pet of the specific user
            res.render('pets/profile', {title: 'Pet Profile', user, pet, health});
            // if health data is not present, render the page and only pass through user, and pet
        } else {
            res.render('pets/profile', {title: `${pet.name}'s Profile`, user, pet});
        }
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};

// This will take the user to the editProfile.ejs view
async function editInfo(req, res) {
    try {
        // declares a specific user to be used in the function
        const user = await User.findById(req.user.id);
         // declares a specific pet reference id
        const petId= req.params.id;
        // declares a specific pet
        const pet = await Pet.findById(petId);
        // renders the editProfile view with the specific user and pet data
        res.render('pets/editProfile', {title: 'Edit Pet Profile', user, pet});
    } catch(err) {
        res.sendStatus(500);
    }
};

// This will update the static information on the profile.ejs view
async function updateInfo(req,res) {
    try {
        // declares a specific user to be used in the function
        const user = await User.findById(req.user.id);
        // declares a specific pet reference id
        const petId= req.params.id;
        // declares a specific pet
        const pet = await Pet.findById(petId);
        // updates the specific pet with the data based in through the body object
        await Pet.updateOne({_id: petId}, req.body);
        // redirects to the specific pet profile page
        res.redirect(`/pets/${pet._id}`)
    } catch(err) {
        res.sendStatus(500);
    }
}
