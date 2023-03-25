const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const petSchema = new Schema ({

});

module.exports = mongoose.model('Pet', petSchema);