var express = require('express');
var router = express.Router();
var Card = require('../models/card');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.get('/cards', function(req, res, next) {
  Card.find({ }, function(err, cards) {
    if (err) console.log(err);
    
    res.json(cards);
  });
});

router.post('/cards', function(req, res, next) {
  var question = req.body.question;  

  var newCard = Card({
      question: question
  });

  // Save the card
  newCard.save(function(err, card) {
      if (err) console.log(err);

      res.json(card);
  });
});

module.exports = router;
