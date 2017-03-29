var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log('This is the users / route');
});

// Create a User
router.post('/', function(req, res, next){
  var formName = req.body.name;
  var formEmail = req.body.email;
  var formFavorite = req.body.favorite;

  var newUser = User({
    name: formName,
    email: formEmail,
    favorite: formFavorite
  });

  newUser.save(function(err, user){
    if (err) console.log(err);
    res.redirect('/');
  });
});

module.exports = router;
