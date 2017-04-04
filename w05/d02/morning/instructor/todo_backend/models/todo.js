var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  dueDate: Date,
  userId: { type: String, required: true, index: true }
});

var Todo = mongoose.model('Todo', schema);

// Make this available to our other files
module.exports = Todo;
