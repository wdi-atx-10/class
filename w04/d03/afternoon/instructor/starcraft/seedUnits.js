require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.STARCRAFT_DB_CONN);

var Unit = require('./models/unit');

var unitData = [
  {
    name: 'Marine',
    description: 'The basic terran infantry, able to upgrade hit points with a shield.',
    imageUrl: 'http://vignette1.wikia.nocookie.net/starcraft/images/4/47/Marine_SC2_Icon1.jpg/revision/latest?cb=20160107022344',
    type: 'ground',
    vespene: 0,
    mineral: 50,
    supply: 1,
    race: '58dd2fb40414890fd0d31077'
  },
  {
    name: 'Mutalisk',
    description: 'The basic air offensive unit of the zerg with high movement speed.',
    imageUrl: 'http://vignette1.wikia.nocookie.net/starcraft/images/f/fd/Icon_Zerg_Mutalisk.jpg/revision/latest?cb=20160106233117',
    type: 'air',
    vespene: 100,
    mineral: 100,
    supply: 2,
    race: '58dd2fb40414890fd0d31078'
  },
  {
    name: 'Immortal',
    description: 'Dragoon-like walker with a strong defense against powerful attacks, but vulnerable to weaker attacks.',
    imageUrl: 'http://vignette3.wikia.nocookie.net/starcraft/images/c/c1/Icon_Protoss_Immortal.jpg/revision/latest?cb=20160106180358',
    type: 'ground',
    vespene: 100,
    mineral: 250,
    supply: 4,
    race: '58dd2fb40414890fd0d31079'
  }
];

Unit.remove({}, function(err, removed) {
  if (err) {
    console.log('Database Error: ', err);
  }

  Unit.create(unitData, function(err, units) {
    if (err) {
      console.log('Database Error: ', err);
    }

    console.log('Units inserted: ', units);
    process.exit();
  });
});
