# Python OOP

## Classes

```python
class Person():
  pass
  
someone = Person()
```

### Constructors

```python
class Person():
  def __init__(self):
    pass
```

```python
class Person():
  def __init__(self, name):
    self.name = name
    
hunter = Person('Elmer Fudd')
```

__init__() is the special Python name for a method that initializes an individual object from its class definition. The self argument specifies that it refers to the individual object itself.

## Principles of Object Oriented Design

* **Polymorphism** - Common interface among different objects
* **Inheritance**
* **Encapsulation** - private, protected, public - hiding implementation details
* **Abstraction** - Only showing and implementing what is neccessary

> “An abstraction denotes the essential characteristics of an object that distinguish it from all other kinds of object and thus provide crisply defined conceptual boundaries, relative to the perspective of the viewer.” — G. Booch, Object-Oriented Design With Applications

### Code to an Interface 

Coding to an interface is essentially agreeing to a contract. Certain methods will always be available, the implementation could possibly change but the methods you implement on the surface will remain consistent. 

For example, it would be better to design a method called `login(accessToken)` than `loginWithJWT(accessToken)` because the format of the token could change later. This shouldn't matter for the end user of the library. 

### Inheritance

> Inheriting from nothing creates an old-style class, which has different behaviour to new-style classes. As a general rule, there's no reason to favour old-style classes, so you should always inherit from `object`.

### Overriding Methods

### Super

We can call the parent class with `super()`

```python
class Person(object):
  def __init__(self, name):
    self.name = name
    
class Hero(Person):
  def __init__(self, name, superpower):
    super(Hero, self).__init__(name)
    self.superpower = superpower
    
superman = Hero('Superman', 'Flying')

print(superman.superpower)
```

> With Python 3.x we no longer need to pass arguments into `super()` or pass `object` into the super class 

### Class Methods

```python
class A(object):
  count = 0
  
  def __init__(self):
    A.count += 1
    
  def exclaim(self):
    print("I'm an A!")
    
  @classmethod
  def kids(cls):
    print("A has ", cls.count, " objects")

one = A()
two = A()
three = A()
A.kids()
# A has 3 little objects.
```

### Private Methods

In Python, any method name prefaced by two underscores is automatically private and not accessible from instances of the object. 

## Packages and Modules

A module is a file containing Python definitions and statements. Modules allow us to write code in a reusable manner, any code within modules are loaded once and cached into `.pyc` files as bytecode. 

A Package in Python is just a directory with an `__init__.py` file in it. The file can be empty. Packages help us organize our code another level above just using modules. 

```
.
├── index.py
└── lib
    ├── __init__.py
    └── animals
        ├── __init__.py
        ├── animal.py
        ├── dog.py
```

```python
# lib/animals/animal.py
class Animal(object):
    def __init__(self, name, mammal):
        print('Animal init')
        self.name = name
        self.mammal = mammal

    def isMammal(self):
        return self.mammal
```

```python
# lib/animals/dog.py
from lib.animals.animal import Animal

class Dog(Animal):
    def __init__(self, name):
        print('Dog init')
        super(Dog, self).__init__(name, True)

    def speak(self):
        print('Bark bark! My name is ' + self.name)

    def __str__(self):
        return 'Dog with a name of %s. Mammal: %s' % (self.name, self.isMammal())
```

```python
# index.py
from lib.animals.dog import Dog

scruffy = Dog('Scruffy')
scruffy.speak()

bobo = Dog('Bobo')
bobo.speak()

print(bobo)
```

## Exercise 

Create a new animal object that inherits from the base `Animal` class. This time make it so that `isMammal` equates to false. 

## Composition 

Composition involves *using* other classes and modules, rather than relying on implicit inheritance. 

## Exercise 

Composition in Practice

Create a `User` class that accepts a `name` parameter. Use the Dog/Cat objects from class and have the person object hold an array of pets. Users should be able to call a method named `addPet()` to add a single pet, and `getPets()` to retrieve and iterate through all the pets added. Have each animal invoke the `speak()` method as you iterate. 


## Resources

* [Python 2.7 Documentation](https://docs.python.org/2/)
* Introducing Python - Modern Computing in Simple Packages
