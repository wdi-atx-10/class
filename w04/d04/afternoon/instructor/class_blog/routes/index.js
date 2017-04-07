var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {

  Post.find({},function(err,posts){
    if(err) console.log(err);

    res.render('index', {
      title: 'Express',
      posts: posts
    });
  });

});

module.exports = router;
