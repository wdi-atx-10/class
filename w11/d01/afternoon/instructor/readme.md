# CSS Pre-Processors

**Objectives**

* Explain the difference between CSS and SCSS
* Understand why we would want to use Sass
* List the ways you can compile a Sass template
* Describe the difference between Sass and Less
* Use variables to make code more flexible
* Understand how to use nesting to help DRY up selectors and properties
* Differentiate between `@extend`, `@import`, `@mixin` & `@include`, and `@function`

## Review
Downsides to CSS so far:

- Difficult to keep DRY
- Difficult to reuse code
- Separating code into multiple files increases HTTP requests
- Verbose syntax, especially with vendor prefixes (webkit, mozilla, etc)

# Sass

### Why would we want to use Sass?
CSS is primitive and incomplete. Building a function, reusing a definition or inheritance are hard to achieve. For bigger projects, or complex systems, maintenance is a very big problem. Pre-processors, with their advanced features, help to achieve writing reusable, maintainable and extensible codes in CSS. By using a pre-processor, you can easily increase your productivity, and decrease the amount of code you are writing in a project.

### What is a Pre-Processor?
Pre-processors extend CSS with variables, operators, interpolations, functions, mixins and many more other usable assets.

### SASS - Syntactically Awesome Stylesheets

From the [Sass website](http://sass-lang.com/):
> CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

Sass is an extension of CSS with a fully CSS-compatible syntax, it helps keep large stylesheets well-organized. Sass uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties.

You write a combination of CSS and SassScript, which compiles to proper CSS.
- It allows you to use variables, nested rules, mixins, inline imports and more, all with a fully CSS-compatible syntax.
- Sass helps keep large stylesheets well-organized, and helps get small stylesheets up and running quickly...

> Sass syntax originated from [Haml](http://haml.info/). Some developers didn't like a syntax that was so foreign from CSS and so the developers that created Sass introduced SCSS which is 'the new main syntax' for Sass.

#### SCSS

[SCSS (Sassy CSS)](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) came along about 3 years after Sass was introduced. It aimed to close the gap between CSS and Sass by bringing a more CSS style friendly syntax.

> SCSS was introduced in part as an answer to Less, which allowed developers to get started with it much quicker than Sass, since having to adapt to a new syntax and way of writing CSS was a barrier to some.

The Sass compiler knows how to parse the CSS file based on the file extension. SCSS files have a `.scss` extension while files using the original Sass syntax have the `.sass` extension.

### Sass vs SCSS

We'll mostly be sticking with SCSS since it's easier to get started and mirrors the CSS syntax we already know and love.

##### Sass: Indentation is very important and each tab means something very specific. Sass omits semicolons for newlines and tabs for curly braces.

```sass
/* Sass files */
.element-a
    color: hotpink

    .element-b
        float: left
```

```css
/* Compiled output */
.element-a {
    color: hotpink;
}

.element-a .element-b {
    float: left;
}
```

##### Everything that works in CSS works in SCSS

Since the syntax of SCSS mirrors CSS almost exactly, you can start using Sass immediately with an existing project and slowly start migrating CSS to SCSS as time permits. It also allows developers new to Sass the ability to be productive early on.

## Explore Sass Examples

Explore these Codepens. When you open them, you'll notice that the CSS column has a header of CSS (scss). This means that you're currently looking at Sass. Compare this to what you see when you click on the drop-down arrow at the top-right of the column and click "View Compiled CSS". Now you're looking at the CSS after it's been compiled from Sass.

Some things to consider...
* In what ways does Sass look different than Vanilla CSS?
* How might writing out Sass be easier / faster than writing out vanilla CSS?

#### Sass Examples

- [BAMSAY](http://codepen.io/jshawl/pen/cLJal)
- [Boxes](http://codepen.io/jshawl/pen/nHDLz)
- [Bullseye](http://codepen.io/jshawl/pen/wpeit)
- [A Button](http://codepen.io/jshawl/pen/bcjyH)
- [Forest](http://codepen.io/jshawl/pen/cJjIm)
- [Space Invader](http://codepen.io/jshawl/pen/cnyrJ)

----------

## Compiling to CSS

Webpages don't know what to do with raw Sass/SCSS, these files need to be compiled to regular CSS to be used.

This can be done a number of different ways...
- Installing the sass gem `gem install sass` and compile with `$ sassc <whatever-input-filename.scss> <whatever-output-filename.css>`
  - There is also a `--watch` flag that allows you to watch a file and auto-compile every time you save it.
- Using a GUI program/plugin like `sass-autocompile`
  - `npm install sass-autocompile`
- Letting a build tool like Grunt/Gulp/Webpack/npm-scripts handle the compilation with an additional package/plugin.


# Gulp
## Setup Gulp

What is Gulp? Gulp is a javascript task runner that lets you automate tasks such as…

- Bundling and minifying libraries and stylesheets
- Refreshing your browser when you save a file
- Quickly running unit tests
- Running code analysis
- Less/Sass to CSS compilation
- Copying modified files to an output directory

Setup from this [blog post](http://ryanchristiani.com/getting-started-with-gulp-and-sass/)!

Whenever starting a new gulp file from scratch we start by running `npm init`. This will start creating a `package.json` file. Just hit enter and it will setup a default `package.json` file.

```js
npm init //This will run through creating the package.json file
npm install -g gulp //If you haven't installed gulp globally before
npm install --save-dev gulp
npm install --save-dev gulp-sass
```

#### Project Setup

```
- index.html
--sass
   - style.scss
-- css
package.json
Gulpfile.js
```

In our root folder we have a sass and a css folder. Inside the sass folder we have our `style.scss` that we want to compile into css. Setup basic HTML structure in `index.html` and make sure to link to your css stylesheet:

```html
<link rel="stylesheet" href="./css/style.css" >
```

#### Setting up the Gulp file.

Inside the `Gulpfile.js` we need to do a few things. First we need to get access to gulp, and then we have to actually set up the task that will run and compile the sass to css. Since gulp runs on node, we use the `require()` function to get access to our modules.

```js
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
```
Run `gulp` to start gulp task runners.

-------

## Sass Features

### I. Nesting

#### Questions

* What does "nesting" mean in Sass? What problem does it solve?
* What does `&` mean?
* What's the difference between selector nesting and property nesting? Show examples of each.
* How much nesting is too much nesting?

Often when writing CSS, you’ll have several selectors that all begin with the same thing. It’s a pain to repeat the beginning over and over again, especially when it gets long. Sass allows you to avoid this by nesting the child selectors within the parent selector. This provides a visual hierarchy as in the HTML and increases the readability. In some cases, nesting causes oversizing the selectors and something like a "selector train", so use it wisely.

```css
/* styles.scss */
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

```css
/* styles.css */
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```
#### Resources

* [Sass Documentation](http://sass-lang.com/guide)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)

#### II. Variables

#### Questions

* What are Sass variables? What problem do they solve?
* How do you define a variable?
* What values can you store in a variable?
* What are some common use cases?
* How does scope work with Sass variables?

Sass allows you to declare variables that can be used throughout your stylesheet. Variables begin with `$` and are declared just like properties. They can have any value that’s allowed for a CSS property, such as colors, numbers (with units), or text. Variable names should relate to
their usage and not their value e.g. ✅`$border-color` vs. ❌`$red`. One big advantage to using variables it makes it easy to update properties.

```css
/* styles.scss */
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

```css
/* styles.css */
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```
#### Resources

* [Sass Documentation](http://sass-lang.com/guide)
* [Sass Variables](https://robots.thoughtbot.com/sass-variables)
* [Getting Started with Sass](http://alistapart.com/article/getting-started-with-sass)


#### III. Mixins

#### Questions

* What are mixins? What problem do they solve?
* How do we define and use a mixin?
* In what way might a mixin resemble a programming language?
* What is a common example of a mixin?

Mixins are one of the most powerful Sass features. They allow re-use of styles (properties or even selectors) without having to copy and paste them or move them into a non-semantic class. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.

The real power of mixins comes when you pass them arguments. Arguments are declared as a parenthesized, comma-separated list of variables. Each of those variables is assigned a value each time the mixin is used.

```css
/* styles.scss */
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

@mixin large-text {
   font: 20px Helvetica, sans-serif;
}

.box { @include border-radius(10px); }
```
```css
/* styles.css */
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```
#### Resources

* [Sass Documentation](http://sass-lang.com/guide)
* [The Mixin Directive](https://www.sitepoint.com/sass-basics-the-mixin-directive/)
* [Handy Sass Mixins](https://web-design-weekly.com/2013/05/12/handy-sass-mixins/)
* [The Extend Concept](https://css-tricks.com/the-extend-concept/)


#### IV. Extend/Inheritance

#### Questions

* What is Sass inheritance? What problem does it solve?
* How do we use `@extend` to implement inheritance?
* What does an `@extend` example look like when compiled to vanilla CSS.
* What are some common use cases?

Using `@extend` lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY.

```css
/* styles.scss */
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

```css
/* styles.css */
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```
#### Resources

* [Sass Documentation](http://sass-lang.com/guide)
* [Extending In Sass Without A Mess](https://www.smashingmagazine.com/2015/05/extending-in-sass-without-mess/)
* [The Extend Concept](https://css-tricks.com/the-extend-concept/)


#### Others:
There are other SCSS features like color operations, if/else statements, loops, math, imports but we are not going to go over those today. Some good examples can be found [here](http://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus).

# Exercise: Flash

[Flash Exercise](http://codepen.io/adambray/pen/bEgMXr)

Use Sass to style the provided elements to recreate the image at bottom of the Codepen. You shouldn't need to modify the HTML at all.

Don't try to implement all the above Sass features at once. Instead, take the following steps...
* Complete the exercise, making sure to use variables for repeated values and nesting selectors where applicable.
* Once you're done, identify repeated chunks of code and define them in single selectors. Then apply them throughout your code using `@extend` statements.
* **BONUS:** Use mixins and/or functions to to generate the font and background colors for each button.

<details>
  <summary>
	 **SOLUTION:**
  </summary>
  [Only take a peek. No copy-and-pasting.](http://codepen.io/adambray/pen/yegjdj)
</details>


--------


## Less
Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable. Less runs inside Node, in the browser and inside Rhino. There are also many 3rd party tools that allow you to compile your files and watch for changes.

Bootstrap uses LESS but recently switched to SASS in version 3 or 4. I reached out to the Bootstrap team to see if they had a definitive answer on the matter and the graciously replied, saying, “More people use SCSS, libsass is crazy fast, syntax is more explicitly clear, and I’m lazy and use SCSS at GitHub.”

Researching stats on RubyGems.org and npm-stats.com paints a convincing picture, with Sass downloads exceeding Less by almost double. It appears that the Sass community is just simply larger than that of Less.


#### Less vs Sass
good comparison between Less vs Sass https://css-tricks.com/sass-vs-less/

- Sass is in Ruby, LESS is in JavaScript (however they both started in ruby environments)
- variables: LESS uses @, Sass uses $
- both can be nested
- mixin libraries: Compass or Bourbon for SASS, Less Hat for LESS


### Libraries/Frameworks

There a good number of [libraries](http://www.hongkiat.com/blog/mixin-library-for-sass/) of mixins and functions that can extend the functionality of Sass. Most are used by `@import`ing the library `@include`ing the mixins where desired.

Bourbon + Neat are similar to bootstrap but are a lot more flexible and don't
require a bunch of classes everywhere. Super cool!
- [Bourbon](http://bourbon.io/) is "a simple and lightweight mixin library."
  - [Neat](http://neat.bourbon.io/) is "a lightweight semantic grid framework for Sass and Bourbon."

Compass is another framework that adds a bunch of extra features, a lot of the most useful ones are mixins that add vendor prefixes to styles. I've never
used it but it's out there and pretty popular.
- [Compass](http://compass-style.org/examples/compass/tables/all/)

If you're worried about vendor prefixes there is also [autoprefixer](https://github.com/postcss/autoprefixer). It's not a sass thing but cool regardless and potentially a good alternative to compass if you're only concerned with prefixes.

### Want more?  

- [Super cool custom framework](http://www.sassmeister.com/gist/0a041d0fb2d72758c280)
  - From the scotch.io tutoral - [build your own framework](https://scotch.io/tutorials/getting-started-with-sass#function-directives)
]

