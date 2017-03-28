var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'WDI',
    cohort: 10
   });
});

router.get('/contact', function(req, res) {
  var name = req.query.agent;
  res.send('Call my agent:' + name);
})



module.exports = router;
