var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date }
});

var Card = mongoose.model('Card', cardSchema);

// Make this available to our other files
module.exports = Card;
