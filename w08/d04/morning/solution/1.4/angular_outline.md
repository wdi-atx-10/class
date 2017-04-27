## Part I - Intro to AngularJS

* What is AngularJS and why? 
* Modules
  - Config 
  - Routes
  - Controllers
  - Services
  - Directives
  - Filters
* Setting up the `index.html` file
* Expressions
* Develop a basic cardsController
* Filters
  - http://www.w3schools.com/angular/angular_filters.asp

## Lab

**20 min**

Let's create another controller for practice. 

- Create a `headerController` that will be attached to the `header` element in a new file called `headerController.js`
- Set a variable in the controller called `title` and set that value to **Cards Against Assembly**
- Use your new `headerController` to output the title onto the page

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

## Part III - Custom Directives

* Understand the different types of custom directives
  - Element (E)
  - Attribute (A)
* Create a custom `card` directive so we can reuse it

## Part IV - Services

* What are services and how do they differ from controllers?
* What is routing and deep linking? 
* [AngularUI Router](https://github.com/angular-ui/ui-router)
* Create a navigation menu for `Home` and `Add New Card`
* Create a template `_homeView.html` and move the existing HTML on the homepage to the view
* Create a new route and template for `Add New Card`

## Lab

**20 min**

Let's add another route for a page that describes how the game is played. 

* Add a new navbar item called **About**
* Create a new route to handle this link
* Create a new HTML template for the instructions

For now, we might use some [placeholder text](http://www.lipsum.com) or the [official instructions](https://en.wikipedia.org/wiki/Cards_Against_Humanity).

## Part V - Data Binding

* What does "2 way data binding" mean
  - ng-model
* Adding a new card object
  - ng-submit

## Lab

**20 min**

We're now able to add new questions onto our card stack, however we have a problem. There's no validation and the user is able to submit empty values as questions.

Research how we can use Angular to make the question field required.

#### Bonus

- Figure out how we can require a minimum number of characters for a question

## Part VI - Remote Calls 

* Use the `$http` service to read card data from our API, which is connected to a MongoLab database.
* Use the `$http` service to add new cards to our Mongo database. 

> **We now have a full MEAN stack application!**

