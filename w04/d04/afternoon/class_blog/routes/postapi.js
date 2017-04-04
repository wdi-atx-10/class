var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* Get a blog post */
router.get('/:id',function(req,res,next){
  Post.find({ _id: req.params.id },function(err,post){
    if(err){ console.log(err); }

    res.json(post);
  });
});

/* Add a blog post */
router.post('/',function(req,res,next){

  var newPost = new Post({
    title: req.body.title,
    body: req.body.body
  });

  newPost.save(function(err, post){
    if(err){
      res.status(500).send({
        status: 'Error',
        error: err
      });
    } else {
      res.status(200).json({
        status: 'OK',
        post: post
      })
    }
  });

});

/* Update a blog post */
router.patch('/',function(req,res,next){
  Post.findById(req.body.id , function(err,post){
    if(err) console.log(err);

    post.title = req.body.title || post.title;
    post.body = req.body.body || post.body;

    post.save(function(err,post){
      if(err) console.log(err);

      res.json({
        status: 'updated!',
        updated_post: post
      });
    });

  });
});


/* Delete a blog post */
router.delete('/',function(req,res,next){

  Post.findByIdAndRemove(req.body.id,function(err,post){
    if(err) console.log(err);
    res.json({
      status: 'deleted!',
      post: post
    });
  });

});

module.exports = router;
