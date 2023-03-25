const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String
}, {
    timestamps: true
},
    pet: //schema.type ref pet object.id? 
);

module.exports = mongoose.model('User', userSchema);