var mongoose = require('mongoose');
var moment = require('moment');

var postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: String, default: moment().format('MMMM Do YYYY, h:mm:ss a') }
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
