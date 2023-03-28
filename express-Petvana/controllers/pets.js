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
        const user = await User.findById(req.user.id);
        console.log(user, 'user')
        const petId= req.params.id;
        const pet = await Pet.findById(petId);
        if (Health) { 
            const health = await Health.findById(req.params.id);
            console.log(pet, 'pet')
            res.render('pets/profile', {title: 'Pet Profile', user, pet, health});
        } else {
            res.render('pets/profile', {title: 'Pet Profile', user, pet});
        }
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};

// This will take the user to the editProfile.ejs view
async function editInfo(req, res) {
    try {
        const user = await User.findById(req.user.id);
        const petId= req.params.id;
        const pet = await Pet.findById(petId);
        res.render(`pets/editProfile`, {title: 'Edit Pet Profile', user, pet});
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};

// This will update the static information on the profile.ejs view
async function updateInfo(req,res) {
    try {
        const user = await User.findById(req.user.id);
        console.log(user, 'user for pet edit');
        const petId= req.params.id;
        const pet = await Pet.findById(petId);
        console.log(pet, 'pet edit page');
        await Pet.updateOne({_id: petId}, req.body);
        console.log('EDITTTTTTTTT', req.body);
        res.redirect(`/pets/${pet._id}`)
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}
// req.params.id, req.body
// {title: 'Pet Profile', user, pet}