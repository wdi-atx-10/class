# StarCraft: Mongoose Expansion Pack

> This is an outline for you to begin taking your own notes on how the application in today's lesson is put together from start to finish.

## What's Being Built?

We're going to develop an application that allows us to both view and add new units for the three races within  [StarCraft](http://us.blizzard.com/en-us/games/sc/), the best game ever created.

[List of StarCraft Units](http://starcraft.wikia.com/wiki/List_of_StarCraft_II_units)

## Planning

1. Plan the document structure, what models will be needed and what attributes will be stored in each model?
2. Plan the routes our application will require

## Create a Remote mLab Database

1. Sign into [mLab](https://mlab.com/) or create an account if you don't already have one
2. Create a new sandbox database
3. Create a new database user
4. Take note of the connection string given to us for later

## Create the Express Application

1. Create the project directory
2. `cd` into the project directory
3. Ran `express -e` on the command line
4. Ran `npm install` on the command line
5. Ran `nodemon` to start the server
6. Went to http://localhost:3000 to view our website

## Set up Environment Variables

1. Created .gitignore in the root of the website
2. Added `.env` and `node_modules` to .gitignore
3. Created `.env` file and put our database connection string in

```
# .env
# Note that this is an example value, yours will be different
STARCRAFT_DB_CONN=mongodb://username:password@ds145790.mlab.com:45790/starcraft
```

## Install dotenv and mongoose

1. Ran `npm install dotenv --save`
2. Ran `npm install mongoose --save`
3. Add code needed for dotenv to run at the top of the `app.js` file

```js
require('dotenv').config({ silent: true });
```

4. Add code needed for mongoose to run

```js
var mongoose = require('mongoose');
mongoose.connect(process.env.STARCRAFT_DB_CONN);
```

## Set up Route Placeholders and Views

1. Create a new routes file: `races.js`

```js
// routes/races.js
var express = require('express');
var router = express.Router();

/* GET /races */
router.get('/', function(req, res, next) {
  res.send('show all races');
});

/* GET /races/:raceId */
router.get('/:raceId', function(req, res) {
  res.send('show details for a single race: ' + req.params.raceId);
});

/* GET /races/:raceId/units */
router.get('/:raceId/units', function(req, res) {
  res.send('display all units for this race: ' + req.params.raceId);
});

/* POST /races/:raceId/units */
router.post('/:raceId/units', function(req, res) {
  res.send('save a new unit for this race: ' + req.params.raceId);
  // Redirect to index page for all units
});

/* GET /races/:raceId/units/new */
router.get('/:raceId/units/new', function(req, res) {
  res.send('display the form for adding a new unit');
});

module.exports = router;
```

2. Set up `app.js` to use the new routes

```js
// app.js
// ...
var index = require('./routes/index');
var users = require('./routes/users');
var races = require('./routes/races'); // new
// ...
app.use('/', index);
app.use('/users', users);
app.use('/races', races); // new
```

## Set up Models

1. Create models folder
2. Created model files required: race.js, unit.js, hero.js
3. Added Mongoose schema for race.js

```js
// models/race.js
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true }
});

var Race = mongoose.model('Race', schema);

module.exports = Race;
```

4. Added Mongoose schema for unit.js

```js
// models/unit.js
var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.ObjectId;

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  type: { type: String, required: true },
  cost: {
    gas: { type: Number, required: true },
    mineral: { type: Number, required: true },
    supply: { type: Number, required: true }
  },
  race: { type: ObjectId, required: true }
});

var Unit = mongoose.model('Unit', schema);

module.exports = Unit;

```

## Seed Data

```js
// seedRaces.js
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

```

> TODO: Combine these together, and use the Race Id's generated from creating races instead of hardcoding those values

```
$ node seedRaces.js
```

```js
// seedUnits.js
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

```

```
$ node seedUnits.js
```

## Route for Returning All Races

```js

// code sample

```

## Route for Returning All Units Within a Race

```js
// routes/races.js
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
```

## Route for Displaying a Form for Adding a New Unit

```js

// code sample

```

## Route for Adding a New Unit

```js

// code sample

```

## Bonus

- Add support for structures as well
