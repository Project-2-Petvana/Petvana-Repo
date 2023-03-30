const User = require('../models/user');
const Pet = require('../models/pet');
const Health = require('../models/health');

module.exports = {
    createHealth
};

async function createHealth (req, res) {
    // these statements convert a checkbox value into Boolean values that match the Health model
    req.body.exercise = !!req.body.exercise;
    req.body.poo = !!req.body.poo;
    req.body.eating = !!req.body.eating;
    try {
        
        // declares a specific pet reference id
        const petId = req.params.id;
        // declares a specific pet with its petId
        const pet = await Pet.findById(petId);
        //setting what properties will be in req.body
        const { sleep, exercise, poo, eating, mood } = req.body
        // declares a new instance of Health data
        const health = new Health({
            sleep,
            exercise,
            poo, 
            eating,
            mood,
            pet: pet._id
        });
        // saves the data to MongoDB
        await health.save();
        // pushes the health data into the specific pet health data
        pet.health.push(health._id);
        // saves the pet data to MongoDB
        await pet.save();
        // redirects to the specific pet profile page
        res.redirect(`/pets/${pet._id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};