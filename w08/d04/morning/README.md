# AngularJS - Components

### Why Front-end Frameworks? 

#### Popular front-end frameworks

- AngularJS
- React (kind of)
- Ember
- Backbone.js

#### Front-end frameworks encourage: 

- Scalability 
- Maintainability
- Code reuse 

#### SPA Architecture

Single Page Applications (SPA) are all the rage today. A misconception is that a SPA has only a single view - this is far from the truth!  The single page aspect of a SPA refers to a single page coming from the server, such as our _index.html_ page.  Once loaded, the SPA changes views by using _client-side_ routing, which loads partial HTML snippets called templates.

![spa_architecture](https://cloud.githubusercontent.com/assets/25366/8970635/896c4cce-35ff-11e5-96b2-ef7e62784764.png)

Client-side routing requires something known as a _router_.  A router in AngularJS, at a minimum, is used to define our routes, specify the template for that route, and specify which controller to attach to that view.

## About AngularJS

AngularJS is an open source JS framework maintained by Google - maybe you've heard of them?  It was created nearly 6 years ago - its longevity is a testament to its capability and usefulness.  AngularJS is one of the most widely adopted MVC JS frameworks in use today and is a valuable job skill to put on your resume.

AngularJS provides the following benefits when used to develop web apps:
- Enables us to organize and structure Single Page Apps using the popular MVC design pattern
- Makes us more productive when developing web apps because it provides features, such as data binding, that requires less code from the developer
- Was designed with testing in mind

#### AngularJS is part of the MEAN stack

- (M)ongoDB
- (E)xpress
- (A)ngular
- (N)odeJS

#### Angular 1.0-1.4

#### Angular 1.5
- Components
- One way data binding
- Lifecycle events

#### Angular 2.0
- TypeScript
- Components 
- One way data binding
- Lifecycle events

#### Angular is NOT easy

<img src="http://www.bennadel.com/resources/uploads/2013/feelings_about_angularjs_over_time.png"/>

#### The AngularJS Mindset

Programming a web app with AngularJS requires a different mindset. To use AngularJS effectively, it helps to think of your application being driven by data - you change data, the app responds. We naturally think more procedurally when coding, we attach an event handler and write code to respond.

Let's look at an example of the different approaches.  Say we want an edit form to show when a button is clicked:

- Procedurally, we would attach an event handler to the button.  The handler code would select the element and set its display property to something besides "none".
- Using AngularJS, we declare a click handler on the Button element.  The handler could set a variable named editMode equal to true, and the view would respond automatically.
- Remember, drive your application using data - your data model is the single source of truth!

## Part I - Intro to AngularJS

### What makes up an Angular application?

<img src="https://cloud.githubusercontent.com/assets/25366/8970275/a1ab2ee2-35fd-11e5-8b23-65f4159ff7d6.jpg"/>

#### Modules

Modules are containers for related code.  The concept of *modules* is prevalent throughout programming, and here, we can consider it essentially a container for our app.

#### Config & Routes

Each AngularJS module has a *config* method that allows us to provide code that runs when a module is loaded.  The *config* method is used most commonly to setup routing.

#### Controller

Controllers in AngularJS serve two primary purposes:

- Initialize the data used for the view they are attached to
- Contain the primary code to respond to user events, such as when a user clicks on a button

A controller is a JS constructor function that is instantiated by the _ng-controller_ directive.

#### Services & Factories & Providers

Services provide a way to organize related code and data that can be shared by controllers and even other services. Unlike controllers, which are instantiated and destroyed as the views they are attached to come into and out of view, services are created once (singletons) and persist for the life of the application.

Services should be used to hold the bulk of your application's logic and data, thus keeping controllers focused on what they are responsible for. Often, you can consider a service or factory something like a model or Ruby class.

Services, factories, providers have the same overall goal (abstracting away business logic from the controller) but are different in how they work. Providers are configurable at runtime, factories are a little more robust, and services are the simplest form.

* A service holds a reference to any object (Singletons)
* A factory is a function which returns any object (Objects created each time)
* A provider is a function which returns any function (Configurable)

#### Directives

Directives are "markers" in HTML - most commonly as attributes and custom element tags. When processed by AngularJS's HTML compiler, they attach behavior to DOM elements or even transform them and/or their children.

#### Filters

Filters are used to transform data. They are very flexible and can be used for formatting text in a view, such as making it all uppercase, or used to filter and sort an array of items.

#### Components 

In Angular, a Component is a special kind of directive that uses a simpler configuration which is suitable for a component-based application structure.

This makes it easier to write an app in a way that's similar to using Web Components or using Angular 2's style of application architecture.

Advantages of Components:

* simpler configuration than plain directives
* promote sane defaults and best practices
* optimized for component-based architecture
* writing component directives will make it easier to upgrade to Angular 2

Reference: https://docs.angularjs.org/guide/component

## Let's get to work! 

* Setting up the `index` and `/javascripts/app.js` file
* Link Angular dependencies
* Bootstrap the Angular app
* Expressions
* Develop a basic footer component
* Filters
  - http://www.w3schools.com/angular/angular_filters.asp

## Lab

**20 min**

Let's create another component for practice. 

- Create a `appHeader` component that will output the `header` element in a new file called `appHeader.js` in the `/javascripts/components` folder
- Set a variable in the controller called `title` and set that value to **Cards Against Assembly**
- Use your new `appHeader` to output the title onto the page

## Part II - Directives

* What are directives?
* ng-repeat
* Seed fake card data
* ng-show, ng-hide, ng-if
* ng-click, ng-class

## Lab

**25 min**

It's great that we can see more than one card right now, but normally in a real game the cards wouldn't all be visible until a person draws the card. Let's make it so that by default the questions are hidden until a user clicks on a card.

Review the documentation for the following built in Angular directives: 

* ng-show
* ng-hide
* ng-click
* ng-class

You won't need all of them, but you'll need some combination of them in order to get this to work. Like most things in programming, there's more than one way to accomplish this. 

## Part III - Services

* What are services and how do they differ from controllers?
* What is routing and deep linking? 
* [ngRoute](https://docs.angularjs.org/api/ngRoute)
* Create a navigation menu for `Home` and `Add New Card`
* Create a template `_homeView.html` and move the existing HTML on the homepage to the view
* Create a new route and template for `Add New Card`
* Refactor code that cards come from into a service called `CardsService`

## Lab

**20 min**

Let's add another route for a page that describes how the game is played. 

* Add a new navbar item called **About**
* Create a new route to handle this link
* Create a new HTML template for the instructions

For now, we might use some [placeholder text](http://www.lipsum.com) or the [official instructions](https://en.wikipedia.org/wiki/Cards_Against_Humanity).

## Part IV - Data Binding

* What does "2 way data binding" mean
  - ng-model
* Adding a new card object
  - ng-submit

1. `@` binding is for passing strings. These strings support {{}} expressions for interpolated values. The interpolated expression is evaluated against directive's parent scope.
2. `=` binding is for two-way model binding. The model in parent scope is linked to the model in the directive's isolated scope. Changes to one model affects the other, and vice versa.
3. `&` binding is for passing a method into your directive's scope so that it can be called within your directive. The method is pre-bound to the directive's parent scope, and supports arguments. For example if the method is hello(name) in parent scope, then in order to execute the method from inside your directive, you must call $scope.hello({name:'world'})

## Lab

**20 min**

We're now able to add new questions onto our card stack, however we have a problem. There's no validation and the user is able to submit empty values as questions.

Research how we can use Angular to make the question field required.

#### Bonus

- Figure out how we can require a minimum number of characters for a question

## Part V - Remote Calls 

* Use the `$http` service to read card data from our API, which is connected to a MongoLab database.
* Use the `$http` service to add new cards to our Mongo database. 

**We now have a full MEAN stack application!**
