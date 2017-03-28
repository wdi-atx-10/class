# Express Walkthrough

### Review

* What is [Node.js](https://nodejs.org) and what does it enable us to do? 
  - Open-source, cross-platform runtime environment for developing server-side web applications
  - Written in JavaScript and runs on Google's [V8 JavaScript engine](https://developers.google.com/v8/)
* What is [NPM](https://www.npmjs.com/)?  

## What is Express?

- Simple and unopionated web framework for Node.js
- Part of the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)) (**M**ongoDB, **E**xpressJS, **A**ngularJS, **N**ode.js) - full stack JavaScript!

### Requirements

If you haven't already done so, install the [Express Generator](http://expressjs.com/starter/generator.html) by running the following command in terminal: 

```
$ npm install express-generator -g
```

The ```-g``` flag tells NPM to install this package globally, which means we only need to install it once and can now run the ```express``` command from any directory. 

## Getting Started

Let's create an app called **GA Express**. Create a folder for our Express application and change into the directory.

```
$ mkdir ga_express && cd ga_express
```

### Installing Express with a Templating Engine

There are many templating engines available, for now let's use the [EJS templating engine](http://www.embeddedjs.com) because it works similarly to ERB templates from Sinatra. 

> EJS stands for Embedded JavaScript

Here are a couple of other ones you might want to check out:
  * [Hogan.js from Twitter](http://twitter.github.io/hogan.js/)
  * [Jade](http://jade-lang.com/)

```
# Create an Express application with support for the EJS templating engine
$ express -e
```

### Install Dependencies

```
$ npm install
```

### Set Environment Variables

At the very least, let's make sure your machine is set up to be the in development mode. This is the time you would also add any database connection strings, etc needed. If you've already done this before, you can skip to the next step.

```
$ atom ~/.bash_profile
```

Make sure you have the following line anywhere in your bash profile: 

```
export NODE_ENV="development"
```

Save the file, and either restart the terminal to apply the changes or run the following command in the terminal instead:

```
$ source ~/.bash_profile 
```

### Start the Server

```
$ npm start
```

We can now navigate to the our Express application by visiting [http://localhost:3000](http://localhost:3000)

## Middleware

Express applications are essentially a series of middleware calls. Middleware is a function with access to the request object ```req```, response object ```res``` and the next middleware in line in the request-response cycle (denoted by a variable named ```next```).

> Middleware functions are always invoked in the order they are added!

Middleware can: 

* Execute any code
* Make changes to the request/response objects
* End the request-response cycle
* Call the next middleware in the stack

### Application Level Middleware

Bound to an instance of express, using ```app.use()```. You can use application level middleware to include logging, setting a static public directory, anything you want to happen during the request/response lifecycle for each and every request. 

```JS
// Middleware that gets executed for every request to the app
app.use(function(req, res, next) {
  console.log('Time:', Date.now());
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

// Middleware that will be executed for any "/users" subpath in the app
app.use('/users', function(req, res, next) {
  console.log('Always run for this particular path only, could potentially check for a valid session or something similar');
  next();
});
```

After setting up our app and before our routes we tell our app to use a new function we are providing. That's all Middleware is! When writing custom Middleware, it's best practice to pass in the `req` object, the `res` object and finally `next`, even if we don't use it!

### Router Level Middleware

We'll use router level middleware to handle subpaths in our application. For example, in the skeleton Express application we generated, the following code sets the ```users``` router as the handler for any subpath in ```/users``` and below, like ```/users/show```.

```js
// app.js
var users = require('./routes/users');

// ...

app.use('/users', users);
```

Any routes that begin with [http://localhost:3000/users](http://localhost:3000/users) will now be handled by ```/routers/users.js```.

### Custom Middleware

We can write our own middleware. Let's say we want to make some alteration to the request parameters so that further down the chain those alterations can be used.  

```js
// express will call this function on every route with the param of 'name'
app.param('name', function(request, response, next) {
  // get name from params
  var name = request.params.name;
  // capitalize the name
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  // set the value of the name to the capitalized version
  request.params.name = capitalizedName;
  // pass control to the next middleware function
  next();
})

app.get("/greet/:name", function (req, res) {
  res.send( "Hello, " + req.params.name );
});
```

Now every name will be capitalized, both for the `GET /greet/:name` route above and for any others with a name parameter.

## Routes

Let's build support for a new route to add a user [http://localhost:3000/users/new](http://localhost:3000/users/new). 

Open up ```/routes/users.js``` and add the following code to handle the new route: 

```js
// /routes/users.js
router.get('/new', function(req, res, next) {
  res.send('Show a form to add a new user');
});
```

We can now go to [http://localhost:3000/users/new](http://localhost:3000/users/new) and see a response, but this isn't very useful. We'll probably want to create a form on a view and render that instead. 

Let's change the code to render a view instead of outputting text in the response. 

```js
// /routes/users.js
router.get('/new', function(req, res, next) {
  res.render('users/new');
});
```

The code above is going to look for a view file called ```new.ejs``` inside the ```/views/users/``` subdirectory.

**NOTE:** We haven't created the view required, so the route won't work just yet. We'll fix that in just a little bit.

### Restful Routing

As we've already seen with Sinatra, we use the RESTful standard to build our web apps. At the moment, we've just covered how to handle GET requests, but we can create callbacks for all types of requests. For example, if we wanted to create a restful controller for the resource `users`, it would look like:

```js
// /routes/users.js
router.get('/', function(req, res) {
  // INDEX: Return all the users
});

router.get('/:id', function(req, res) {
  // SHOW: Retrieve one user by ID
});

router.get('/new', function(req, res) {
  // NEW: Display form to add a new user
});

router.post('/', function(req, res) {
  // CREATE: Create a new user
});

router.get('/:id/edit', function(req, res) {
  // EDIT: Show the form for editing a user
});

router.put('/:id', function(req, res) {
  // UPDATE: Update an existing user
});

router.delete('/:id', function(req, res) {
  // DELETE: Delete an existing user
});
```

We've defined that the endpoint for the `user` resource will be "/users".
So the code above will create these 7 routes:

```js
GET    /users
GET    /users/:id
GET    /users/new
POST   /users
GET    /users/:id/edit
PUT    /users/:id
DELETE /users/:id
```

### Automatic Restarts

Ok, something is starting to get annoying. Every change to the Express code is requiring a restart to the server. To speed up development, we can use a package called [nodemon](https://github.com/remy/nodemon) that will monitor changes and automatically restart the server. 

If you've never installed **nodemon** before, run the following command to install it globally. 
```
$ npm install -g nodemon
```

Now instead of starting Express with ```npm start```, we'll run the following command inside our directory instead:

```
$ nodemon
```

or 

```
$ nodemon bin/www
```

## Views

If we're using EJS as our template engine, then things should look really familiar here since we used ERB templates for Sinatra and Rails. Like ERB, JavaScript between ```<% %>``` is executed. JavaScript between ```<%= %>``` prints the evaluated expression or variable to the output stream.

> Express doesn't support layout files like Sinatra or Rails does out of the box. We can make use of partials though, which allow us to reuse HTML components in our application. 

Back to the code. Remember that our new route is going to be looking for a view called ```new.ejs``` inside of ```/views/users```. Additionally, let's create partials for the header and footer of our site so we don't have to keep repeating it in every view. Create a new folder inside ```/views``` called ```partials``` and add two new files called ```header.ejs``` and ```footer.ejs```. Your views folder should now look like this:

```
/views
     /partials
       |___ header.ejs
       |___ footer.ejs
     /users
       |___ new.ejs
```

```html
<!-- /views/partials/header.ejs -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>GA Express</title>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<style>

#main {
  margin: 30px;
}

footer {
  font-size: 80%;
  color: gray;
}

</style>
</head>
<body>
  <h1>GA Express</h1>
  <div id="main">
```

```html
  <!-- /views/partials/footer.ejs -->
  </div> <!-- //main -->
  <footer>&copy;2016 General Assembly Austin</footer>
  <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
</body>
</html>
```

```html
<!-- /views/users/new.ejs -->
<% include ../partials/header %>

<form name="new_user_form" id="new_user_form" method="post" action="/users">
  <div>
    Name: <input type="text" name="name" id="name">
  </div>
  <div>
    Favorite thing in the world: <input type="text" name="favorite" id="favorite">
  </div>
  <input type="submit" value="Save">
</form>

<% include ../partials/footer %>
```

## Static Content

Since we used the Express generator, we have a ```/public``` folder that's already set up for us to put our static content (e.g. css, javascript, images, etc) in. Any content in here is publicly accessible and routes don't have to be defined for them.

* Publicly accessible
* Shouldn't create any routes for files in the ```/public``` folder

> Take some time to add a few images and custom CSS to the application. 

## Parameters

For our web applications to be useful, we'll want the ability to CREATE, READ, UPDATE, and DELETE data. 

Let's create a route to handle the form post from the previous step. In our router, we can specify any of the following HTTP verbs to handle that particular request type. 

* get
* post
* put
* delete

There's a special routing method, ```app.all()```, which is not derived from any HTTP method. It's used for loading middleware at a path for all request methods.

In the following example, the handler will be executed for all requests to “/users” whether using GET, POST, PUT, DELETE, or any other HTTP request method supported in the http module.

```js
app.all('/users', function (req, res, next) {
  console.log('This will be executed in all /users routes, regardless of the HTTP verb used');
  next(); // pass control to the next handler
});
```

Let's add the route to handle our form post. 

```js
// /routers/users.js
router.post('/', function(req, res, next) {
  // ...
});
```

### Form Values

We now have a handler to handle the request, but we're not doing anything with the form data. We can access the form variables through ```req.body```.

```js
// /routers/users.js
router.post('/', function(req, res, next) {
  console.log('Name: ' + req.body.name);
  console.log('Favorite thing in the world: ' + req.body.favorite);

  res.end();
});
```

Check the terminal and you should see the correct values. Tomorrow we'll be covering MongoDB and Mongoose for persistence, for now let's just show the values entered. To do that, we'll need to pass our view some data for it to use. 

```js
// /routers/users.js
router.post('/', function(req, res, next) {
  res.render('users/show', {
    name: req.body.name,
    favorite: req.body.favorite
  });
});
```

```html
<!-- /views/users/show.ejs -->
<h2>New User</h2>
<h3><%= name %></h3>
<p><%= favorite %></p>
```

### Query String Values

We can capture query string params using ```req.query```. Remember that in our route handlers, we have access to the request and response objects. 

For example, the following url can be captured using the following code in your route handler: 
[http://localhost:3000/users/show?id=12](http://localhost:3000/users/show?id=12)

```js
// This will give us "12"
req.query.id
```

### Named Parameters

Similarly, ```req.params``` can be used to capture named parameters. 

```js
// /routes/users.js
router.get('/:name', function(req, res, next) {
  res.render('users/show', {
    name: req.params.name,
    favorite: null
  });
});
```
