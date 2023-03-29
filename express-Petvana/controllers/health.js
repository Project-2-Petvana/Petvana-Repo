const User = require('../models/user');
const Pet = require('../models/pet');
const Health = require('../models/health');

module.exports = {
    createHealth
};

async function createHealth (req, res) {
    console.log('createHealth');
    req.body.exercise = !!req.body.exercise;
    req.body.poo = !!req.body.poo;
    req.body.eating = !!req.body.eating;
    try {
        
        //grabbing all models
        const user = await User.findById(req.user.id);
        const petId= req.params.id;
        const pet = await Pet.findById(petId);

        //setting what properties will be in req.body
        const { sleep, exercise, poo, eating, mood } = req.body

        const health = new Health({
            sleep,
            exercise,
            poo, 
            eating,
            mood,
            pet: pet._id
        });

        await health.save();
        pet.health.push(req.body);
        console.log("HEALTH", req.body)
        await pet.save();
        console.log(health)

        res.redirect(`/pets/${pet._id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};