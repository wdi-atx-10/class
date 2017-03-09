# DOM Manipulation Practice w/ jQuery

## Review

#### What is the DOM?
Document Object Model - When a web page is loaded, the browser creates a DOM of the page - it is a mechanism for representing and interacting with your HTML.

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

An HTML document is available for us to manipulate as an object, and this object is structured like a tree:

![](http://www.tuxradar.com/files/LXF118.tut_grease.diagram.png)

Or this:

```
html
└── head
│   ├──title
│   ├──meta
│   ├──link[rel="stylesheet"]
|   └──script[type="text/javascript"]
|
└── body
    ├── header
    │   ├── h1
    │   └── nav
    └── section.simplicity
    |   └── h2
    │   └── article
    ├── section.life
    |   └── h2
    │   └── article
    │       └── block_quote
    │       └── block_quote
    └── footer
```
#### Accessing the Document
Each web page loaded in the browser has its own document object. The Document interface serves as an entry point to the web page's content. The DOM defines methods that allow access to the tree, so that they can change the document structure, style and content.

`document`
  - `document.head`
  - `document.body`

##### What is jQuery?

jQuery is a 3rd-party library that is intended to make front-end development tasks — particularly those involving DOM selection and manipulation — easier, faster, and more fun.

A library is just a collection of reusable methods that serve a particular purpose.

jQuery helps us manipulate the DOM, allowing us to perform complex manipulations using less code with less hassle. jQuery's syntax was developed to mimic CSS selector syntax, making code easier to develop, read, and manage; also, the syntax is more concise, and jQuery solves many cross-browser compatibility issues for us.

#### How do we use/install jQuery?
jQuery is a client side library, which means we need to include it in our HTML. To do this, we have two options:

1. **Download**
	- [CDNJS](http://www.cdnjs.com), [Google Hosted Libraries](https://developers.google.com/speed/libraries/), and the [jQuery site](http://www.jquery.com/download) will all allow you to download a copy of jQuery to include in your projects.
	- Minified vs. Uncompressed
		- Minified
			* No whitespace, no comments, shortened variable names.
			* Q: Why would we want something minified?
				- Improve site load time.
				- If something goes wrong with your jQuery code, hard to debug since it's all on one line.
				- Used when a website is ready for production.
		- Uncompressed
			* Unmodified jQuery - can see it all!
			* Will use this in case we need to debug and take a look at what's going on under the hood.
			* Used when a website is in development.
2. **Import**
	- You don't have to host jQuery yourself. You can pull it from the web via a CDN (content delivery network).
	- What is a CDN?
		- "Serve content to end-users with high availability and high performance."
		- Broad term for a distributed system of servers -- sometimes spread across the world -- that serves content to users, whether that's videos, software or, 	in this case, a Javascript library.
			* In the case of jQuery, this CDN is usually Google.
	- Include with a `<script>` tag in HTML that links to some URL.
	- Keep this handy: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>`

#### What is the 'min.js' at the end of some jQuery files?
This means the JavaScript code has been minified. Minification is the process of making a JavaScript file smaller by, among other things, removing all line breaks and whitespace, reducing the length of variable and function names, and stripping out all comments. Minification can significantly reduce the size of a JavaScript file, and in turn, significantly decrease the time it takes our browsers to load the file into memory.

In jQuery's 1.11.1's case, the original unminified code is about 276 kilobytes, whereas the minified code is only 94 kilobytes. That makes the minified version **one-third** the size of the original - not bad!

## DOM Manipulation with jQuery

#### Select an Element with jQuery

To select an element in the DOM, we use the global jQuery function:

```js
// This is the basic syntax for jQuery selections
$(' ')

// To select a particular element by tag, you do
$('h2') // selects all h2 elements

// To select by ID, you use the same syntax as CSS selectors
$('#someID') // Would select the element with ID="someID"

// To select all elements of a particular class, use CSS syntax again
$('.someClass') // Selects all elements of the class "someClass"

// And you can use more complicated CSS selectors as well
$('p.anotherClass') // Selects all <p> tags that also have the class "anotherClass" (<p class="anotherClass")
```

If you use variable assignment when doing a selection, a "jQuery" object is returned.

```js
// We prepend '$' to variable names when a variable is going to be a jQuery object to help us remember what that variable is for.  
`var $jqObject = $('p');` // Returns a jQuery object containing all `<p>` tags on your web page.

// However, we don't have to prepend '$' to our variables. It's just so we can remember what a variable is being used for.
`var jqObject = $('p');` // This is functionally identical to the version above that includes the `$` in front of jqObject.
```

### Traversal methods
Once you've made an initial selection, you can dig deeper using traversal methods.

`.children()`

```js
//jQuery
var ulChildren = $( "ul" ).children();
console.log(ulChildren);

//vanilla js
document.getElementById("red").children
```

`.parent()`

```js
// jQuery
var redParent = $( "#red" ).parent();
console.log(redParent);

// vanilla js
document.getElementById("red").parentNode
```

`.siblings()`

```js
// jQuery
var redSiblings = $( "#red" ).siblings().css("color","green");
console.log(redSiblings);
```
This above example highlights a very cool feature from jQuery called method chaining. Essentially, this allows us to perform multiple methods on the same set of elements in a single line.

`.eq()`

```js
// jQuery
var getRed = $( "li" ).eq(0);
console.log(getRed);

// vanilla
document.getElementById("myID").childNodes[2]
```

### Modify Content
`.html()`
- get or set the HTML contents
- get: no argument, know that it returns the innerHTML of the first jQuery object
- set: one argument that you want the html content to be

  ```javascript
	// get method
  var getInner = $( "#red" ).html();
  console.log(getInner);
	// set method
  $( "ul" ).html("<li>blue</li>");

	// vanilla js
  document.querySelector("ul").innerHTML = "<li>Blue</li>"
  ```
`.text()`
  - similar to `.html()` except it only returns the text of all jQuery objects selected for the getter portion, stripping out the HTML elements
  - get: returns the content of the selected element as a string, and store it in the variable `text`
  - set: removes all of the elements children and replaces with whatever newContent is

  ```javascript
	// get example
  var getText = $( "ul" ).text();
  console.log(getText);

	// set example
  $( "ul" ).text("<li>blue</li>");

	// vanilla js
  document.querySelector("ul").textContent = "<li>Blue</li>"
  ```


`.attr()`
- get: returns the value of an attribute for the first element in the set of matched elements
- set: set the value of an element attribute


  ```javascript
	// get example
  var language = $('html').attr('lang')
  console.log(language);

	// set example
  $('img').attr('src','http://www.clipartlord.com/wp-content/uploads/2014/05/unicorn4.png')

	// vanilla js
	.setAttribute();
	```

`.css()`
- acts as both a getter and setter
- setter: requires 2 arguments(key/value pair), or an object(with multiple key/value pairs)
- getter: requires 1 argument to get the value of the attribute from the jQuery object

### More jQuery methods

- `.val()`
[documentation](http://api.jquery.com/val/)

```html
<input type="text" value="name">
```

```javascript
$("input").val("Britney Jo");
// set

var myName = $("input").val();
console.log(myName)
// get
```

#### Adding content

`.append()`
- adds newly created element to the end of a parent element, making it the last child

```javascript
var blue = $( "<li>blue</li>" );
$( "ul" ).append(blue);
```

`.prepend()`
- adds newly created element to the start of a parent element, making it the first child

```javascript
$( "ul" ).prepend( "<li>pink</li>" );
```

- `.prependTo()`
[documentation](http://api.jquery.com/prependTo/): same as appendto but the content precedes the method call is inserted as the first child of the target container(argument)
	```js
	  $("<div>this div is prepended</div>").prependTo($(".awesome"))
	```
- `.appendTo()`
[documentation](http://api.jquery.com/appendTo/): the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container(argument) as the last element
	```js
	  $("<div>this div is appended</div>").appendTo($(".awesome"))
	```
#### Removing content

`.remove()`
- removes element from DOM

```javascript
$( "#red" ).remove();
```

`.empty()`
- removes all the child elements of the jquery object it is called on

```javascript
$( "ul" ).empty();
```
#### Others
`.hide()`
 - changes elements style to have `display:none`

 ```javascript
 $( "#red" ).hide();
 ```
 - `.show()`
   - changes a `display:none` to `display:block` or whatever it initially was

   ```html
   <li id ="red" style ="display:none">red</li>
   ```

   ```javascript
   $( "#red" ).show();
   ```

`.addClass()`
[documentation](http://api.jquery.com/addClass/)

`.removeClass()`
[documentation](http://api.jquery.com/removeClass/)

`.toggleClass()`
[documentation](http://api.jquery.com/toggleClass/)


##### `.each`

With jquery we might want to do something to each element. Say we have 5 paragraph tags in our html:

```html
<p>paragraph1</p>
<p>paragraph2</p>
<p>paragraph3</p>
<p>paragraph4</p>
<p>paragraph5</p>
```

Say we wanted to add a class to each paragraph. We can do something like this:

```js
$("p").addClass("pizza")
```

And this would go ahead and add the class of `pizza` to each of the paragraph tags. This is happening through something called implicit iteration in jQuery. Under the hood its looping through each paragraph tag and adding a class. What if we wanted to log the html to the console? We might try this:

```js
console.log($("p").html())
```

Hmm, that only gives us the first paragraph tags html. Whelp, we need a way to iterate over each of the paragraph tags. Enter `.each`:

```js
$("p").each(function(){
 console.log($(this).html())
})
```


### MORE PRACTICE

Pixart_js challenge!

Solution:

```js
$(document).ready(function() {
  $("button").on("click", colorBrush);
  //input.val works for both click and return key for steps 1 and 2
  function colorBrush(e) {
    e.preventDefault();
    var brushColor = $("input").val()
    $(".brush").css("background",  brushColor);
  }
  //creating 20 of the square div class, step 3
  for (var i = 0; i <= 20; i++) {
    var square = "<div class='square'></div>"
    $("body").append(square)
  }

  $(".square").on("click", colorSquare)
  //steps 4 and 5, storing the input string in a variable to be used in the line 17 background change
  function colorSquare() {
    var inputColor = $("input").val();
    $(this).css("background", inputColor);
  }

});
```
