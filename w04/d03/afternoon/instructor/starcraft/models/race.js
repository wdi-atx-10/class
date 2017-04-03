var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true }
});

var Race = mongoose.model('Race', schema);

module.exports = Race;
