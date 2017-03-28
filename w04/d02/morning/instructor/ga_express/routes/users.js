var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
  var name = req.body.name;
  var favorite = req.body.favorite;

  res.send('Created new user: ' + name + ': ' + favorite);
});

router.get('/new', function(req, res) {
  res.render('users/new');
});

module.exports = router;
