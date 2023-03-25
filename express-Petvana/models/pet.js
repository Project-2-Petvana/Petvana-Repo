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
        enum: ['cat', 'dog', 'bird', 'bunny', 'fish']
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    sex: {
        type: String,
        required: true
        enum: ['boy', 'girl']
    },
    favoriteToy: {
        type: String,
        maxLength: 50
    }
    birthday: {  
        type: Date,
    },
    healthTracker: {  
        type: Schema.Types.ObjectId,
        ref: 'Health'
    }
});

module.exports = mongoose.model('Pet', petSchema);