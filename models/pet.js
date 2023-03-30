const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// schema for pet data which references the health schema and user schema
const petSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },    
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true,
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
        required: true,
        enum: ['boy', 'girl']
    },
    favoriteToy: {
        type: String,
        maxLength: 50
    },
    birthday: {  
        type: Date,
        required: true,
    },
    health: [{  
        type: Schema.Types.ObjectId,
        ref: 'Health'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Pet', petSchema);