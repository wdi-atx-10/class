var express = require('express');
var router = express.Router();
var Growl = require('../models/growl');

/* GET home page. */
router.get('/', function(req, res, next) {
  Growl.find({}).exec(function(err,growls){
    if(err) console.log(err);
    res.json(growls.reverse().slice(0,12));
  });
});

// Add a growl to the database
router.post('/', function(req,res,next){
  var addGrowl = new Growl({
    text: req.body.text,
    provider: req.body.provider,
    image: req.body.picture,
    name: req.body.name
  });

  addGrowl.save(function(err,growl){
    if(err) console.log(err);
    res.json(growl);
  });
});

module.exports = router;
