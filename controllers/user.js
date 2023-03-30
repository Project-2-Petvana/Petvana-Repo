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
  // declares a specific user with all of the related pet data
  const user = await User.findById(req.user.id).populate('pet');
  // renders the user page
  res.render('user/user', {title: "User Profile", user});
} catch(err) {
    res.sendStatus(500);
}
};

// This will render the new-pet.ejs view
async function newPet(req, res) {
    // grabs the specific user from the database
    const user = await User.find({});
    // renders the page 
    res.render('user/new-pet', {title: 'Add a Pet', errorMsg: '', user});
};

//This will submit the pet's information via a form on the addPets/ejs view, redirecting to profile.ejs
async function createPet(req, res) {
    try {
      // Get the currently authenticated user
      const user = await User.findById(req.user._id); 
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // setting what properties will be in req.body
      const { name, species, age, sex, birthday, favoriteToy } = req.body;

      // declares a new instance of Pet data
      const pet = new Pet({
        name,
        species,
        age,
        sex,
        user: user._id,
        birthday,
        favoriteToy
      });
      // saves the pet data based on the model
      await pet.save();
      // pushes the specific pet data into the user pet data
      user.pet.push(pet._id);
      await user.save();
      // after user.pet has been saved, redirect back to the user profile page
      res.redirect('/user');
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
};

// This will delete the pet and all their health data from the database, redirecting to user.ejs
async function deletePet(req, res, next) {
    try {
        // declares a variable with the pet's id
        const petId = req.params.id;
        // finds and declares the pet by their id
        const pet = await Pet.findById(petId);
        // waits for the pet to be deleted before moving for
        await Pet.deleteOne(pet);
        // redirects back to /user once the pet instance has been deleted
        res.redirect('/user');
    } catch (err) {
        return next(err);
    }
};