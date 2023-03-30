const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// User model that is generated when a user signs in. 
// Has an array for pet documents that are being referenced
const userSchema = new Schema ({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String,
    pet: [{
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);