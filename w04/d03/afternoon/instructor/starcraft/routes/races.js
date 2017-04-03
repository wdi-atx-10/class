var express = require('express');
var router = express.Router();

var Race = require('../models/race');
var Unit = require('../models/unit');

router.get('/', function(req, res, next) {
  Race.find({}, function(err, races) {
    if (err) {
      console.log('Database Error:', err);
    }

    console.log('Races: ', races);

    res.render('races/index', {
      races: races
    });
  });
});

router.get('/:raceId', function(req, res) {
  Race.findById(req.params.raceId, function(err, race) {
    if (err) {
      console.log('err: ', err);
    }

    res.render('races/show', {
      race: race
    });
  });
});

router.get('/:raceId/units', function(req, res) {
  Unit.find({ race: req.params.raceId }, function(err, units) {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('Units: ', units);

    res.render('races/units', {
      units: units
    });
  });
});

router.post('/:raceId/units', function(req, res) {
  res.send('save a new unit for this race: ' + req.params.raceId);
  // Redirect to index page for all units
});

router.get('/:raceId/units/new', function(req, res) {
  res.send('display the form for adding a new unit');
});

module.exports = router;
