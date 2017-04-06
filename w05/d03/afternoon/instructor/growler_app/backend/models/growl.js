var mongoose = require('mongoose');

var growlSchema = new mongoose.Schema({
  text: String,
  provider: String,
  name: String,
  image: String
});

var Growl = mongoose.model('Growl', growlSchema);

module.exports = Growl;
