require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.STARCRAFT_DB_CONN);

var Race = require('./models/race');

var raceData = [
  { name: 'Terran' },
  { name: 'Zerg' },
  { name: 'Protoss' }
];

Race.create(raceData, function(err, races) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('Races inserted: ', races);
  process.exit();
});
