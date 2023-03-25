const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

module.exports = mongoose.model('Pet', PetSchema);