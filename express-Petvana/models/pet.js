const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const petSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    sex: {},
    favoriteToy: {}
    birthday: {},
    healthTracker: {}


});

module.exports = mongoose.model('Pet', petSchema);