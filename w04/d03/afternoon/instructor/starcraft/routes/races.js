var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('show all races');
});

router.get('/:raceId', function(req, res) {
  res.send('show details for a single race: ' + req.params.raceId);
});

router.get('/:raceId/units', function(req, res) {
  res.send('display all units for this race: ' + req.params.raceId);
});

router.post('/:raceId/units', function(req, res) {
  res.send('save a new unit for this race: ' + req.params.raceId);
  // Redirect to index page for all units
});

router.get('/:raceId/units/new', function(req, res) {
  res.send('display the form for adding a new unit');
});

module.exports = router;
