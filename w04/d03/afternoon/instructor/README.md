# StarCraft: Mongoose Expansion Pack

> This is an outline for you to begin taking your own notes on how the application in today's lesson is put together from start to finish.

## What's Being Built?

We're going to develop an application that allows us to both view and add new units for the three races within  [StarCraft](http://us.blizzard.com/en-us/games/sc/), the best game ever created.

[List of StarCraft Units](http://starcraft.wikia.com/wiki/List_of_StarCraft_II_units)

## Planning

1. Plan the document structure, what models will be needed and what attributes will be stored in each model?
2. Plan the routes our application will require

## Create a Remote mLab Database

1. Create an account on [mLab](https://mlab.com/) if you don't already have one
2. Create a new sandbox database
3. Create a new database user
4. Take note of the connection string given to us for later

## Create the Express Application

1. Create the project directory
2. `cd` into the project directory
3. Ran `express -e` on the command line
4. Ran `npm install` on the command line
5. Ran `nodemon` to start the server
6. Went to http://localhost:3000 to view the webpage

## Set up Environment Variables

1. Created .gitignore in the root of the website
2. Added `.env` and `node_modules` to .gitignore
3. Created `.env` file and put our database connection string in

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

1. Take the routes we planned and create placeholders

## Set up Models

1. Create models folder
2. Created model files required: race.js, unit.js, hero.js
3. Added Mongoose schema for each file.

```js
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true }
});

var Race = mongoose.model('Race', schema);

module.exports = Race;
```

## Seed Data

1. Step one

## Route for Returning All Races

```js

// code sample

```

## Route for Returning All Units Within a Race

```js

// code sample

```

## Route for Adding a New Unit

```js

// code sample

```

## Bonus

- Add support for structures as well
