const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const healthSchema = new Schema ({
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    },
    sleep: {
        type: Number,
        required: true,
        min: 0,
        max: 24
    },
    exercise: {
        type: Boolean,
        required: true,
        enum: ['yes', 'no']
    },
    poo: {
        type: Boolean, 
        required: true,
        enum: ['yes', 'no']
    },
    eating: {
        type: Boolean,
        required: true,
        enum: ['yes', 'no']
    },
    mood: {
        type: String,
        required: false,
        maxLength: 160
    },
    }, {
        timestamps: true
    });


module.exports = mongoose.model('Health', healthSchema);