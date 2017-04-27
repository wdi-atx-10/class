# AngularJS - Morning

Angular is an open source JS framework maintained by Google - maybe you've heard of them?  It was created nearly 6 years ago - its longevity is a testament to its capability and usefulness.  AngularJS is one of the most widely adopted MVC JS frameworks in use today and is a valuable job skill to put on your resume.

AngularJS provides the following benefits when used to develop web apps:
- Enables us to organize and structure Single Page Apps using the popular MVC design pattern
- Makes us more productive when developing web apps because it provides features, such as data binding, that requires less code from the developer
- Was designed with testing in mind

#### The Components of AngularJS

![angular_components](https://cloud.githubusercontent.com/assets/25366/8970275/a1ab2ee2-35fd-11e5-8b23-65f4159ff7d6.jpg)

#### Modules

Modules are containers for related code.  The concept of *modules* is prevalent throughout programming, and here, we can consider it essentially a container for our app.

#### Config & Routes

Each AngularJS module has a *config* method that allows us to provide code that runs when a module is loaded.  The *config* method is used most commonly to setup routing.

#### Controller

Controllers in AngularJS serve two primary purposes:

- Initialize the data used for the view they are attached to
- Contain the primary code to respond to user events, such as when a user clicks on a button

A controller is a JS constructor function that is instantiated by the _ng-controller_ directive.

#### Services & Factories

Services provide a way to organize related code and data that can be shared by controllers and even other services. Unlike controllers, which are instantiated and destroyed as the views they are attached to come into and out of view, services are created once (singletons) and persist for the life of the application.

Services should be used to hold the bulk of your application's logic and data, thus keeping controllers focused on what they are responsible for. Often, you can consider a service or factory something like a model or Ruby class.

#### Directives

Directives are "markers" in HTML - most commonly as attributes and custom element tags. When processed by AngularJS's HTML compiler, they attach behavior to DOM elements or even transform them and/or their children.


#### Filters

Filters are used to transform data. They are very flexible and can be used for formatting text in a view, such as making it all uppercase, or used to filter and sort an array of items.

#### The AngularJS Mindset

Programming a web app with AngularJS requires a different mindset. To use AngularJS effectively, it helps to think of your application being driven by data - you change data, the app responds. We naturally think more procedurally when coding, we attach an event handler and write code to respond.

Let's look at an example of the different approaches.  Say we want an edit form to show when a button is clicked:

- Procedurally, we would attach an event handler to the button.  The handler code would select the element and set its display property to something besides "none".
- Using AngularJS, we declare a click handler on the Button element.  The handler could set a variable named editMode equal to true, and the view would respond automatically.
- Remember, drive your application using data - your data model is the single source of truth!

### SPA Architecture

Single Page Applications (SPA) are all the rage today. A misconception is that a SPA has only a single view - this is far from the truth!  The single page aspect of a SPA refers to a single page coming from the server, such as our _index.html_ page.  Once loaded, the SPA changes views by using _client-side_ routing, which loads partial HTML snippets called templates.

![spa_architecture](https://cloud.githubusercontent.com/assets/25366/8970635/896c4cce-35ff-11e5-96b2-ef7e62784764.png)

Client-side routing requires something known as a _router_.  A router in AngularJS, at a minimum, is used to define our routes, specify the template for that route, and specify which controller to attach to that view. 

## Basic Setup - Modules, Controllers, Views

First, let's get Angular from [Google's CDN](https://developers.google.com/speed/libraries/#angularjs) and paste into script tag in the ```<head>```.

```html
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
```

Now, we set up a module. Go to your `app.js` file, and all it takes is this little line:

```js
// Define a new module. The first argument is what we want to call our app, the second is an array of dependencies (which we don't need at the moment, so there are none)
(function() {
  var app = angular.module('CardsAgainstAssembly', []);
})();
```

This sets our app up. It's important to include that array when defining a module, even if there are no dependencies – that tells Angular we're initializing a module.

Now, back in our HTML, make sure your `app.js` is included in a script tag, and add an `ng-app` directive in the `<html>` tag.
```html
<!DOCTYPE html>
<html lang="en" ng-app="CardsAgainstAssembly">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cards Against Assembly™</title>
    <link rel="stylesheet" href="//cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
    <link rel="stylesheet" href="/stylesheets/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
    <script src="/javascripts/app.js"></script>
</head>
```

Since we defined it in `app.js` with a name of `CardsAgainstAssembly`, we just reference what we named it here. This tells the HTML to use that module.

Now, let's just check to make sure it worked. If it worked correctly, we should be able to put some simple expression in our HTML, and Angular will render it.

```html
<body>
{{ 1 + 1 }}
</body>
```

If Angular's working, it'll add our numbers together and spit out a 2 on the page – that's how templating works in Angular, inside curly brackets.

Open it up in a browser to check. And remember – if it doesn't work, always check your browser's console for errors!


## A Very Basic Controller

So, in Angular's flavor of MVC, controllers are intended to primarily:

1. Respond to user actions.
2. Provide data to the view (occasionally referred to the view-model).

Now, lets stub out a new controller and plug it into our module:

```bash
touch javascripts/cardsController.js
```

```javascript
(function() {
	// When only the name of the module is passed in,
	// the 'module' method returns the specified module.
	var app = angular.module('CardsAgainstAssembly');

  	// This is the function definition for our controller.
  	// Note that we capitalize it as it is used as a constructor function!
	app.controller('CardsController', function(){
		this.question = "I couldn't complete my homework because _________.";
		return this;
	});
})();
```

Now, there are two acceptable methods for defining controllers.  They are commonly referred to as the:

- _$scope_ method
- _controllerAs_ method

Now, they're the same idea – essentially a way to craft a constructor function for each controller you decide to make. Angular started by using $scope, which you can see an example of here:

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('CardsAgainstAssemblyApp')
    .controller('CardsController', CardsController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function CardsController($scope) {
  $scope.question = "I couldn't complete my homework because _________.";
}
```

However, as the industry started using Angular more and more in production, people started realizing that despite the name, $scope wasn't scoped very well.

A lot of professionals have since moved on to doing it a little differently, and a little simpler.

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('CardsAgainstAssemblyApp')
    .controller('CardsController', CardsController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function CardsController() {
  this.question = "I couldn't complete my homework because _________.";
  return this;
}
```

The nice thing is that they're not very different, but that the latter looks far more like a normal constructor function you're used to.

Later, we'll see how you can let controllers just connect models and the views - like we're used to - but since we don't have a model, let's just hardcode some junk in there.

## Connecting Controller To The View

The last step here is to connect our controller to the view. We attach any controllers to some div or HTML tag in our view. But first, make sure to include any newly created JS files.

```html
<script src="/javascripts/cardsController.js"></script>
```

Now:

```html
<section id="cards" class="container-fluid" ng-controller="CardsController as cardCtrl">
  <div class="row">

    <div class="col-sm-6 col-md-6 col-lg-4">
      <div class="card">
        <h4 class="card-title">{{ cardCtrl.question }}</h4>
        <h6>Cards Against Assembly</h6>
      </div>
    </div>

  </div>
</section>
```

When you render the page, it should actually render! That's awesome – that means we're working with data that's coming from our controller, and that's the core building block to more complex apps!

> Note: Keep in mind, while `CardsController` is so named because that's what we called it in the file, the `card` in this example is just a variable we're choosing on the spot. Pick something obvious that makes sense, but it can be anything.

## Lab 

**20 min**

## Directives 

### What Are Directives? 

Directives are additional DOM nodes – think custom attributes on HTML tags – that Angular uses to apply behaviors to HTML elements. Angular comes with a bunch of different directives for different behaviors and gives you the ability to create your own.

There are a few you'll be using all the time that we're gonna walk through together, today. There are also a few you've already used – `ng-app` and `ng-controller`. You added them onto HTML tags to tell your Angular app what module we were using and what controller we wanted to ask for data from. Those are two examples of specific behaviors so let's see a few more.

### ng-repeat 

Let's start filling in our `cardsController` a little bit - add in some initial seed data:

```js
// javascripts/cardsController.js
app.controller('CardsController', function(){
	this.cards = [
		{question: "What is Batman's guilty pleasure?"},
		{question: "I couldn't complete my homework because _________."},
		{question: "I get by with a little help from _________."},
		{question: "_________. It's a trap!"},
		{question: "The class field trip was completely ruined by _________."},
		{question: "What's my secret power?"}
	];
		
	return this;
});
```

Now, let's start filling out the view with this data; head over to `index.ejs`.

How do we actually list out our cards? `ng-repeat`.

```html
<div class="col-sm-6 col-md-6 col-lg-4" ng-repeat="card in cardCtrl.cards">
<div class="card">
<h4 class="card-title">{{ card.question }}</h4>
<h6>Cards Against Assembly</h6>
</div>
</div>
```

Let's walk through that. First, hello `ng-repeat`! This is used for iterating over repeating elements. Rather than our old-fashioned `for` loop, Angular uses `ng-repeat` on the element we want to iterate over. Sort of like Ruby (or JavaScript's forEach), we say:

> "For each item in `cardCtrl.cards`, call the one we're on `card`."

Then, inside that element, we have access to `{{card.whateverAttributesCardHas}}`.

