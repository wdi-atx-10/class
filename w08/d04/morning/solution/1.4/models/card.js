var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

var Card = mongoose.model('Card', cardSchema);

// Make this available to our other files
module.exports = Card;