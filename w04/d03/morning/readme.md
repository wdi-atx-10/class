# Mongoose

### Preparation

* What does NoSQL even mean?
* What is MongoDB and how does it differ from a relational database like Postgres?
* Under the hood
  - Documents
    * MongoDB stores all data in documents, which are JSON-style data structures composed of field-and-value pairs
  - Embedded documents
    * Allows us to model one-to-many relationships. Since there are no joins, it's often more efficient to embed document data that is almost always accessed through a single object within that document itself. In the [MongoDB documentation](http://docs.mongodb.org/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/), there is a classic example of a case when you would rather embed documents rather than start a new collection.
  - Referencing documents
    * There are cases where the data in a document might be related to another document, but is accessed frequently outside the context of that document. The data within that document might contain a lot of fields (e.g. User) so repeating that document data multiple times outside of that parent document would not be optimal
  - Collections
    * A collection is a grouping of documents within MongoDB. A collection is the equivalent of RDBMS tables
    * Documents within collections are schemaless, documents within a collection can have different fields
* Pros of MongoDB
  - Schemaless
  - Open source and runs on Linux
  - You can choose the level of consistency you want depending on the data you're saving
    * faster performance = fire and forget inserts to MongoDB
    * slower performance = wait until insert has been replicated to multiple nodes before returning
* Cons of MongoDB
  - Data size is typically higher, field names are repeated for every document stored
  - Less flexibility w/ querying (e.g. no joins)
  - No support for transactions
* BSON vs JSON
  - MongoDB represents JSON documents in binary-encoded format called [BSON](http://docs.mongodb.org/manual/reference/bson-types/) behind the scenes. BSON extends the JSON model to provide additional data types (e.g. dates, binary data) and to be efficient for encoding and decoding within different languages.
  - In practice, you don't have to know much about BSON when working with MongoDB, you just need to use the native types of your language and the supplied types (e.g. ObjectId) will be mapped into the appropriate BSON type by the driver.

## What is Mongoose?

Mongoose is an ODM (Object Data Mapping), that allows us to encapsulate and model our data in our applications. It gives us access to additional helpers, functions and queries to simply and easily preform CRUD actions.

## MongoLab

Generally for development we would create a local MongoDB database to use, but in preparation for the upcoming group project, let's set up an account on [MongoLab](https://mongolab.com) and use a remote cloud database since we'll be deploying our apps to either AWS or Heroku.

#### Requirements

Either log in or set up an account on [MongoLab](https://mongolab.com) if you haven't done so already.

#### Create the database

1. On your dashboard, click the button **Create new** on the right hand side to create a new database.
2. Select the tab **Single-node**
3. Select the free **Sandbox** option
4. Enter a name for your new database, for our purposes let's use something like **ga_express**
5. Click the button **Create new MongoDB deployment** to create the database

#### Create a database user

Now that we have the database, let's create a new database user and get the connection string we'll need to access the database from our Express application.

1. On the dashboard, click into the database you just created
2. Click the **Users** tab
3. Click the **Add database user** button
4. Enter a new username and password. Take note of the values you used.

#### Create the database connection string

At the top, you should now see under "**To connect using a driver via the standard URI**" the connection string to use to access the new database remotely.

1. Replace `<dbuser>` with the username you created
2. Replace `<dbpassword>` with the password you chose above

For example, your database connection string might look something similar to this:

```
# Format: mongodb://<dbuser>:<dbpassword>@<host>:<port>/<database>
mongodb://test_ga:Superfakepassword@ds037824.mongolab.com:37824/ga_express
```

#### Save the database connection string using dotenv

## Mongoose

Install the Mongoose package through NPM and save it to the package.json file.

```
# In the root of the project directory
$ npm install mongoose --save
```

We also need to include Mongoose in our app.js file in Express now.

```js
// app.js
// ...
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose connection
var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONN_GA_EXPRESS);

app.use('/', routes);
app.use('/users', users);
// ...
```

You can now execute all the MongoDB commands over the database ``` ga_express ```.

#### Defining a Model

We must build a Mongoose model before we can use any CRUD operations. Just like a schema.rb file, our Mongoose schema is what we'll use to define our document attributes. Think about it like this: a document is the equivalent of a record/row in a relational database - only here, our attributes (or columns) are flexible.

One large difference from Rails/Sinatra is that we can define methods in our Mongoose schema!

Let's create our models directory in the root of our project

```
$ mkdir models && cd models
$ touch user.js
$ subl user.js
```

Now add the Mongoose schema for our user model:

```js
// /models/user.js
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  favorite: String,
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

// Make this available to our other files
module.exports = User;
```

Here's a look at the datatypes we can use in Mongoose documents:

- String
- Number
- Date
- Boolean
- Array
- Buffer (less commonly used)
- Mixed (less commonly used)
- ObjectId

Also, notice we create the Mongoose model with `mongoose.model`. Remember, we can define custom methods here - this would be where we could do something like write a method to hash passwords.

#### Creating custom methods

Here's the same model, except with a custom method:

```js
// /models/user.js
var userSchema = new mongoose.Schema({
  // ...
});

// Method to "say hello"
userSchema.methods.sayHello = function() {
  console.log("Hi, I'm " + this.name + ' and ' + this.favorite + ' is my favorite');
};

var User = mongoose.model('User', userSchema);

module.exports = User;
```

We can now access our model and call our custom method in app.js or routers like so:

```js
// app.js (or any custom route)
var User = require('./models/user');

// Create a new user
var buddy = new User({
  name: 'Buddy',
  email: 'buddy@thenorthpole.com',
  favorite: 'Smiling'
});

buddy.sayHello();
```

## CRUD with Mongoose

### Create

Now that we have our user model, let's modify the post route in our users.js route handler to save the values to our Mongo database.

```js
// /routes/users.js
var express = require('express');
var router = express.Router();
// Require the User model
var User = require('../models/user');

// ... other routes

router.post('/', function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var favorite = req.body.favorite;     

    var newUser = User({
        name: name,
        email: email,
        favorite: favorite,
    });

    // Save the user
    newUser.save(function(err, user) {
        if (err) console.log(err);

        res.send('User created!');
    });
});

// ... other routes, etc
```

### Read

We have various methods available to access the data in our Mongo database. Aside from the [query builder](http://mongoosejs.com/docs/queries.html), you have:

* `.findById()`
* `.findOne()`
* `.find()`

```js
// This code could live in your routes or even in other models!

// Require the User model
var User = require('./models/user');

// Find a single document by the unique ID
User.findById('533f141070d7654f0c000008', 'name email favorite', function(err, user) {
  if (err) console.log(err);

  // user.name
  // user.email
  // user.favorite

  console.log(user);
});

// Find a single document by a field value. Return the "name", "email", and "favorite" fields of the document
User.findOne({ email: 'buddy@thenorthpole.com' }, 'name email favorite', function(err, user) {
  if (err) console.log(err);

  // user.name
  // user.email
  // user.favorite

  console.log(user);
});

// Find ALL documents that match the criteria passed, only return the "name" and "favorite" fields
User.find({ name: 'buddy' }, 'name favorite', function(err, user) {
  if (err) console.log(err);
  console.log(user);
});
```

### Update

For update, you can do it in one of two ways:

* `.findByIdAndUpdate()`
* `.findOneAndUpdate()`

```js
// This code could live in your routes or even in other models!

// Require the User model
var User = require('./models/user');

// Update a document by the unique id
User.findByIdAndUpdate('533f141070d7654f0c000008', { email: 'buddy@elves.com', favorite: 'laughing' }, function(err, user) {
  if (err) console.log(err);
  console.log(user);
});

// Update a document by another field
User.findOneAndUpdate({ email: 'buddy@thenorthpole.com' }, { email: 'buddy@elves.com', favorite: 'laughing' }, function(err, user) {
  if (err) console.log(err);
  console.log(user);
});
```

### Delete

Mongoose gives you a couple of methods to delete documents:

* `.findByIdAndRemove()`
* `.findOneAndRemove()`

```js
// This code could live in your routes or even in other models!

// Require the User model
var User = require('./models/user');

// Find a document by the unique _id field
User.findByIdAndRemove('533f141070d7654f0c000008', function(err) {
  if (err) console.log(err);
  console.log('User deleted!');
});
```
