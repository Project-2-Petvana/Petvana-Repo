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
const user = await User.findById(req.user.id).populate('pet');
// const pet = await Pet.find({user: pet._id});
    res.render('user/user', {title: "User Profile", user});
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
      const user = await User.findById(req.user._id); // Get the currently authenticated user
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const { name, species, age, sex, birthday, favoriteToy } = req.body;
      // if (!name || !species || !age || !sex || !birthday || !favoriteToy) {
      //   return res.status(400).json({ error: 'Missing required fields' });
      // }

      const pet = new Pet({
        name,
        species,
        age,
        sex,
        user: user._id,
        birthday,
        favoriteToy
      });

      await pet.save();
      user.pet.push(pet._id);
      await user.save();
      console.log(pet)
      console.log(user)

      res.redirect('/user');
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
}
// This will delete the pet and all their health data from the database, redirecting to user.ejs

async function deletePet(req, res, next) {
    try {
        const user = await User.findById(req.user.id);
        console.log(user, 'user');
        const petId = req.params.id;
        const pet = await Pet.findById(petId);
        console.log(pet, 'pet');
        await Pet.deleteOne(pet);
        console.log('data deleted');
        res.redirect('/user');
    } catch (err) {
        return next(err);
    }
};