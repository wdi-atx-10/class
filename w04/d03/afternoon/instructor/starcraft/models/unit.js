var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.ObjectId;

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  type: { type: String, required: true },
  vespene: { type: Number, required: true },
  mineral: { type: Number, required: true },
  supply: { type: Number, required: true },
  race: { type: ObjectId, required: true }
});

var Unit = mongoose.model('Unit', schema);

module.exports = Unit;
