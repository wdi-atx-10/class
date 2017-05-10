# Databases

## Learning Objectives

#### Domain Modeling & ERD

- Draw an Entity Relationship Diagram (ERD) with crow's foot notation
- Identify and diagram one-to-one, one-to-many and many-to-many relationships between data entities
- Distinguish between entities and attributes
- Discuss data normalization needs and techniques

#### Basics of Databases, and SQL

**Concepts**
- Explain what a database is and why you would use one
- Explain how a database, a database management system (DBMS) and SQL relate to one another
- Describe a database schema and how it relates to tables, rows and columns
- Identify the differences between relational and non-relational databases

**Mechanics**
- Create a new PostgreSQL database
- Set up a PostgreSQL database schema with a saved SQL file
- Seed a PostgreSQL database with a saved SQL file
- Execute basic SQL commands to execute CRUD actions in a database

#### Relationships in SQL / SQL JOINs

- Define what a foreign key is
- Describe how to represent a one-to-many relationship in SQL database
- Explain how to represent one-to-one and many-to-many relationships in a SQL DB
- Distinguish between keys, foreign keys, and indexes
- Describe the purpose of the JOIN
- Use JOIN to combine tables in a SELECT
- Describe what it means for a database to be normalized
-------

# Domain Modeling & ERDs

## Learning Objectives

- Draw an Entity Relationship Diagram (ERD)
- Identify and diagram one-to-one, one-to-many and many-to-many relationships between data entities
- Distinguish between entities and attributes
- Discuss data normalization needs and techniques

## What are Databases?

A database is a place where information gets stored in a hard drive - or distributed across multiple hard drives - on a computer somewhere. Much like we've been creating and storing data, here and there, a database represents a collection of individual pieces of data stored in a highly structured and searchable way; they represent a model of reality, which why we call them models in MVC.

Inside a database, we do basic actions like create, read, update, and destroy data – CRUD!

In modern web development, there are different categories of databases – SQL, NoSQL, Key/Value. We're focusing on SQL because historically that's the father to the others.

SQL stands for Structured Query Language, and it's a language used to manage and get information from considered what are considered "relational" databases.

### Relational databases

We call them "relational" because different models - or pieces of data - can be linked to other models, aka "related". Relational DB's store data in a "table" so think of it like a spreadsheet. The table holds all the data for one model, while the columns define what attributes that model has; we often call columns "attributes" or "fields". A row is an instance (remember instantiation!) like a unique copy of the blueprint that is our model, often called a record.

![relational db](https://cloud.githubusercontent.com/assets/25366/8589355/2646c588-25ca-11e5-9f2d-3d3afe8b7817.png)

- The majority of the databases people use everyday are relational databases, meaning they associate related pieces of data together, even if they are stored in different places (estimated to be around 79% in 2014)
- However, a fairly recent (< 10 years) development in databases is non-relational servers gaining market share. This is due to an increase in complexity of the data we need to structure, and the need for performance when operating on the DB
- SQL vs NoSQL
  - SQL is a relational database system, meaning it can store different types of information in multiple tables that are related together
  - NoSQL is an alternative to SQL that stores information in key/value pairs. There is no concept of "tables" in NoSQL, just different values that can be accessed by certain keys

#### How is a relational database typically organized?

- Tables
  - Columns are for fields or attributes of the content you're storing
  - Rows are individual records of data
- A database schema is the definition of how the database will be organized.
  - Designing the database schema is one of the most important parts of your application, because it requires you to be forward thinking
- **Normalization**
  - Normalization is the process of efficiently organizing data in a database. Essentially this is DRY applied to database schema.
  - There are two goals of the normalization process:
    1. eliminating redundant data (for example, storing the same data in more than one table)
    2. ensuring data dependencies make sense (only storing related data in a table)
    - Both of these are worthy goals as they reduce the amount of space a database consumes and ensure that data is logically stored.
  - **QUESTION**: Why should we use normalization?
    - Answer: Same reason we use DRY in other places. Less typing, saves time to do all operations related to that piece of data, less points of failure
    - Benefits:
      - Eliminate data redundancy
      - Improve performance
      - Query optimization
      - Faster update due to less number of columns in one table
      - Index improvement


![](http://4.bp.blogspot.com/-edz2_QrFvCE/UnzBhKZE3FI/AAAAAAAAAEs/bTEsqnZFTXw/s1600/SQL-MongoDB+Correspondence.PNG)


## Database Design

Developers employ **user stories** to clarify the features we need for a good user experience. What is a user story?

> User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. They typically follow a simple template:
>
> As a `type of user`, I want `some goal` so that `some reason`.

We use them to prioritize order and scope. This morning, we will identify the information required to support those user stories.  We refer to this as the **Domain** or **Domain Model**. The Domain Model specifies the data and the relationships between this data. We use it to decide what needs to be persisted.

## Domain Modeling

Domain Modeling allows us to outline the data values that we need to persist.
- We only consider the attributes of our data, not the behavior of our application
- A domain model in problem solving and software engineering is a conceptual
model of all items and topics related to a specific problem
- It describes the various entities, their attributes, roles and relationships,
plus the constraints that govern the problem domain

The big takeaway here is that domain modeling **does not describe solutions to the problem**. Instead, it defines how our data is structured.

### ERDs

An ERD -- or **Entity Relationship Diagram** -- is a tool we use to visualize and describe the data relating to the major entities that will exist in our programs.
- Ultimately lends itself to planning out and creating our database table structure
- It allows us to outline the data in our application, not the behavior

## Let's Draw on The Board

Let's say we're making an app for a library and look at what some tables would look like (e.g. what information or attributes would be associated with each table?)

- What would the table for a book look like?
- What would the table for an author look like?
- What would the table for a category look like?

### Relationships

Relationships happen when we start seeing multiple duplicative information or when one object needs to "connect" to another object.

> ![crows foot notation cheat sheet](http://www.vivekmchawla.com/content/images/2013/Dec/ERD_Relationship_Symbols_Quick_Reference-1.png)

There are 3 different kinds of Relationships:

**One-to-one:** A Country has one Capital City
- not frequently used, but important to know it's an option
- imagine a Library table ```has_one``` location, and a location ```belongs_to``` a specific library - that lets us look up solely by location, and see the connected library
- often, in situations like that, you can make the location an attribute of the library, but when a location has, for example, multiple fields (address 1, address 2, state, zip, etc.), it might make sense to create another table for addresses and set up a ```has_one``` relationship
  - Usually denotes that one entity should be an attribute of the other

**One-to-many:** An author ```has_many``` books, but a book ```belongs_to``` only one author
- The most common relationship you will define in WDI.

**Many-to-many:** A book probably "has many" categories, and a category also probably "has many" books
- also very frequent
- Requires a join table.

ERDs get more complex the larger your application becomes. Nevertheless, they are still a useful tool when planning and developing.

**In Summary..**
- The squares represent our entities and are filled with the attributes associated with our entity.
- The arrows between the squares indicate how the entities relate to one another.

--------

# Intro to SQL

## Learning Objectives

- Explain how a DBMS, a database, and SQL relate to one another
- Describe a database schema and how it relates to tables, rows and columns
- Create a new PostgreSQL database
- Execute basic SQL commands to execute CRUD actions in a database
- Explain what "auto-incrementing primary key" means for a database table
- Explain what a field constraint is
- List the common SQL data types and when you would use them
- Set up a foreign key for a one-to-many relationship
- Explain SQL syntax and conventions (uppercase)

## What's a Relational Database?

The most popular type of database is a **relational** database.

How do they work?

**Data is stored in tables.**
- These tables are organized by columns and rows, much like a spreadsheet.
- Tables are named according to what they model (e.g., `artists`, `songs`).
- In the case of `artists`, each row represents one artist.
- Each column is called an **attribute** or **field**, such as `id`, `title`, `birth_year`.

**Can relate data between tables**
- Hence the name *relational* database.
- We can relate rows in the `songs` table to rows in the `artists` table.
- We use a `key` to do this, which is a field that is unique for each row in a table.
- The key is often represented using an `id`, which is a unique identifier for each entry in a table.

**Communicate via SQL (Structured Query Language)**
- SQL is a database language used specifically for relational databases.
- This is in contrast to non-relational databases

## What is SQL?

SQL stands for Structured Query Language, and it is a language universally used and adapted to interact with relational databases. When you use a SQL client and connect to a relational database that contains tables with data, the scope of what you can do with SQL commands includes:

- Inserting data
- Querying or retrieving data
- Updating or deleting data
- Creating new tables and entire databases
- Control permissions of who can have access to our data

Note that all these actions depend on what the database administrator sets for user permissions: a lot of times, as an analyst, for example, you'll only have access to retrieving company data; but as a developer, you could have access to all these commands and be in charge of setting the database permissions for your web or mobile application.

### Types of Relational Databases

A database is just a repository to store the data and you need to use systems that dictate how the data will be stored and as a client to interact with the data.  We call these systems "Database Management Systems", they come in _many_ forms:

- MySQL
- SQLite
- PostgreSQL (what we'll be using!)
	- pgAdmin: GUI for postgresql

...and all of these management systems use SQL (or some adaptation of it) as a language to manage data in the system.

They are all similar in that they use SQL, but they do have different features.

MySQL claims to be "the most popular open-source database," while PostgreSQL claims in response to be "the most advanced open-source database". It's true that in most tests, Postgres comes out ahead in terms of speed and has many features MySQL lacks, such as true full-text search and handling geo-data.

If you're interested in pros and cons, check out this [article comparing MySQL, Postgres, and SQLite](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems).


### Terminology

* **Database** - The actual set of data being stored. We may create multiple databases on our computer, usually one for each application.
* **Database Language** - The language used to interact with a database. With relational databases, that is SQL.
* **Database Management System** - The software that lets a user interact (query) the data in a database. Examples are PostgreSQL, MySQL, MongoDB, etc.
* **Database CLI** - A tool offered by most DBMSs that allows us to query the database from the command line. For PostgreSQL, we'll use `psql`.

## Exploring Postgres

We'll use `psql`, which is a REPL for Postgres, a type of SQL database we have installed on our computers, as our primary means of interacting with our databases. Later on we'll use ruby or server-side JS programs to do so in our programs.

Here's a quick demo. Following along is optional.

Once Postgres is running, open your terminal and type:

	$ psql

You should see something like: `your_user_name=#`

Great! You've entered the PostgreSQL equivalent of node or PRY: now, you can execute PSQL commands, or PostgreSQL's version of SQL.


```sql
help -- general help
\?   -- help with psql commands
\h   -- help with SQL commands
\l   -- Lists all databases
\q   -- quits
\d   -- Lists all tables
\d+ table_name -- more info shown
```

In short...
- Backlash commands (e.g. `\l` ) are commands to navigate psql. These are psql-specific.
- Everything else is SQL. The SQL is what actually interacts with the database.
> If you're curious as to where exactly your databases are being stored locally, enter `SHOW data_directory;` while in psql.


### Connect, Create a Database - Codealong
Let's make a database! Let's call it database_name:

```sql
CREATE DATABASE database_name;
CREATE DATABASE
```

The semicolon is important! Be sure to always end your SQL queries and commands with semicolons.

To delete or drop that table:

```sql
DROP DATABASE database_name;
DROP DATABASE
```

Now when you list out the databases, it's gone.

--------

Let's use these commands, but before we can, we must create a database.  Let's call it wdi6:

```sql
CREATE DATABASE wdi6;
CREATE DATABASE
```

Now let's _use_ that database we just created by connecting to it:

```sql
\c wdi6;
You are now connected to database "wdi6" as user "your_user_name".
```

## Creating a Table

### Schema

Every application's database will have one or more tables. You will recall, each table stores information about a particular model (e.g., `artists`, `songs`).

Each table has a **schema**, which defines what columns it has. For each column the schema defines...

- The column's name.
- the column's data type.
- Any constraints for that column.

### Common Data Types

Here are some common data types for SQL DBs. They are all, for the most part, things you've seen before...

- Boolean
- Integer
- Float
- Text / VARCHAR
  - VARCHAR is short, TEXT is long, CHAR(#) lets you set character length
- NULL
- Date
- Time
- Serial
- [And many more...](http://www.postgresql.org/docs/9.3/interactive/datatype.html)

### Constraints

Constraints act as limits on the data that can go in a column.
- e.g., `NOT NULL` and `UNIQUE`.

- primary keys
- foreign keys
- unique
- [And many more...](http://www.postgresql.org/docs/8.1/static/ddl-constraints.html)

## Performing CRUD actions with SQL

CRUD stands for the most basic interactions we want to have with any database:
Create, Read, Update and Destroy.

The most common SQL commands correspond to these 4 actions...

* `INSERT` -> Create a row
* `SELECT` -> Read / get information for rows
* `UPDATE` -> Update a row
* `DELETE` -> Destroy a row


### INSERT Data into Table
Now let's finally _insert_ some data into that table - remember what cannot be left blank!
`INSERT` adds a row to a table... We'll insert five students, Jack, Jill, John, Jackie, and Jimbo. The syntax is as follows:

```sql
INSERT INTO table_name (column1, column2,...) VALUES (value1,value2,...);
```

Let's do it for Jack, together:

```sql
INSERT INTO students VALUES (1, 'Jack Sparrow', 28, '50 Main St, New York, NY');
```

### SELECT Data from our Table
So now that we have this data saved, we're going to need to access it at some point, right? We're going to want to _select_ particular data points in our dataset provided certain conditions. The PostgreSQL SELECT statement is used to fetch the data from a database table which returns data in the form of result table. These result tables are called result-sets. The syntax is just what you would have guessed:

```sql
SELECT column1, column2, columnN FROM table_name;
```

```sql
-- select all columns from all rows
SELECT * FROM students;

-- select only some columns, from all rows
SELECT name, age FROM students;

-- select rows that meet certain criteria
SELECT * FROM students WHERE name = 'Jack Sparrow';
```
#### Getting more specific

Just like Ruby or JavaScript, all of our comparison and boolean operators can do work for us to select more specific data.

- The `WHERE` clause: To use the where clause, we need a field to compare, an operator specifying the type of comparison to be made, and a value that represents our criterion. EX: I want the names of all the students who aren't dinosaurs (old):

  ```sql
	wdi=# SELECT name FROM students WHERE age < 100;

	      name
	----------------
	 Jack Sparrow
	 Jilly Cakes
	 Johnny Bananas
	 Slaggy McRaggy
	(4 rows)
	```

- `ORDER BY`: How about the names of students ordered by age? `ASC`
	```sql
	wdi=# SELECT name, age FROM students ORDER BY age;

	      name      | age
	----------------+-----
	 Johnny Bananas |  25
	 Jack Sparrow   |  28
	 Slaggy McRaggy |  28
	 Jilly Cakes    |  30
	 Jackie Lackie  | 101
	(5 rows)
	```

- How about reversed? `DESC`
	```sql
	wdi=# SELECT name, age FROM students ORDER BY age DESC;

	      name      | age
	----------------+-----
	 Jackie Lackie  | 101
	 Jilly Cakes    |  30
	 Jack Sparrow   |  28
	 Slaggy McRaggy |  28
	 Johnny Bananas |  25
	(5 rows)
	```

- The `LIKE` operator gets used in a WHERE clause: How about those who live in Fivetowns? We can find strings within strings too! `%` is a wildcard character that matches zero or more missing letters in the pattern.

	```sql
	wdi=# SELECT * FROM students WHERE address LIKE '%Fivetowns%';

	 id |      name      | age |                      address
	----+----------------+-----+----------------------------------------------------
	  3 | Johnny Bananas |  25 | 555 Five St, Fivetowns, NY
	  4 | Jackie Lackie  | 101 | 2 OldForThis Ct, Fivetowns, NY
	(2 rows)
	```


- `LIMIT` is a clause that lets you specify the maximum number of rows the result set will have.

	```sql
	SELECT * FROM wdi6 LIMIT 3;
	```

- `COUNT` takes the name of a column(s) as an argument and counts the number of rows where the value(s) is not NULL.


	```sql
	SELECT count(*) FROM wdi6;
	```

- `OFFSET` allows us to exclude the first set of records.

	```sql
	SELECT * FROM wdi6 LIMIT 10 OFFSET 3;
	```

### UPDATE data
Ok, there are some mistakes we've made to our database, but that's ok because we can update it or delete information we don't like. Let's start by adding one more student:

```sql
INSERT INTO students VALUES (6, 'Miss Take', 500, 'asdfasdfasdf');
```


```sql
UPDATE students SET address = '100 Main St., New York, NY' where address = 'asdfasdfasdf';

SELECT * FROM students;

 id |      name      | age |                      address
----+----------------+-----+----------------------------------------------------
  1 | Jack Sparrow   |  28 | 50 Main St, New York, NY
  2 | Jilly Cakes    |  30 | 123 Webdev Dr. Boston, MA
  3 | Johnny Bananas |  25 | 555 Five St, Fivetowns, NY
  4 | Jackie Lackie  | 101 | 2 OldForThis Ct, Fivetowns, NY
  5 | Slaggy McRaggy |  28 |
  6 | Miss Take      | 500 | 100 Main St., New York, NY
(6 rows)
```


```sql
DELETE FROM students where name = 'Miss Take';

SELECT * FROM students;
 id |      name      | age |                      address
----+----------------+-----+----------------------------------------------------
  1 | Jack Sparrow   |  28 | 50 Main St, New York, NY
  2 | Jilly Cakes    |  30 | 123 Webdev Dr. Boston, MA
  3 | Johnny Bananas |  25 | 555 Five St, Fivetowns, NY
  4 | Jackie Lackie  | 101 | 2 OldForThis Ct, Fivetowns, NY
  5 | Slaggy McRaggy |  28 |
(5 rows)
```

### DELETE

`DELETE` removes rows from a table...

```sql
DELETE FROM authors WHERE name = 'Adam B.';
```

### SQL Syntax

- All statements end in a semicolon.
- Whitespace doesn't matter.
- Uppercasing!
- Always use single quotes when typing out string values.
- [Ye olde style guide.](http://leshazlewood.com/software-engineering/sql-style-guide/)

-------

# Relationships in SQL / SQL JOINs

## Learning Objectives

- Define what a foreign key is
- Describe how to represent a one-to-many relationship in SQL database
- Explain how to represent one-to-one and many-to-many relationships in a SQL DB
- Distinguish between keys, foreign keys, and indexes
- Describe the purpose of the JOIN
- Use JOIN to combine tables in a SELECT
- Describe what it means for a database to be normalized

## Introduction

One of the key features of relational databases is that they can represent relationships between rows in different tables.

Going back to our library example, we have two tables: `books` and `authors`. Our goal now is to somehow indicate the relationship between a book and an author. In this case, that relationship indicates who wrote the book.

You can imagine that we'd like to use this information in a number of ways, such as...
- Getting the author information for a given book.
- Getting all books written by a given author.
- Searching for books based on attributes of the author (e.g., all books written by a Chinese author).

## One-to-Many (10 minutes / 2:20)

How might we represent this information in our database? For this example,
let's assume that each book has only one author (even though that's not always
the case in the real world.)

#### Option 1 - Duplicate Info (Wrong :x:)

**authors**
- name
- nationality
- birth_year

**books**
- title
- pub_date
- author_name
- author_nationality
- author_birth_year

<details>
  <summary><strong>What's the problem here?</strong></summary>

  > Duplication, difficult to keep data in sync.

</details>

#### Option 2 - Array of IDs (Wrong :x:)

**authors**
- name
- nationality
- book_ids

**books**
- title
- pub_date

<details>
  <summary><strong>What's the problem here?</strong></summary>

  > Parsing list, can't index (for speed!)

</details>

#### Option 3 (Correct! :white_check_mark:)

**authors**
- name
- nationality

**books**
- title
- pub_date
- author_id


## Bonus: Joins

To SELECT information on two or more tables at ones, we can use a JOIN clause.
This will produce rows that contain information from both tables. When JOINing
two or more tables, we have to tell the database how to 'match up' the rows.
(e.g. to make sure the author information is correct for each book).

This is done using the ON clause, which specifies which properties to match.

### Writing SQL JOINS

```sql
SELECT id FROM authors where name = 'J.K. Rowling';
SELECT * FROM books where author_id = 2;

SELECT * FROM books JOIN authors ON books.author_id = authors.id;
SELECT * FROM books JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'United States of America';
```

## Aside: Less Common Joins

There are actually a number of ways to join multiple tables with `JOIN`, if
you're really curious, check out this article:

[A visual explanation of SQL Joins](http://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)

## Many-to-Many Relationships

Consider if we wanted to add a categories model (e.g. fiction, non-fiction,
sci-fi, romance, etc). Books can belong to many categories (i.e. a book might be
a fiction/romance, or a history/non-fiction). And a given category might have
many books.

Because of this, we can't put a book_id column on categories, nor a category_id
column on books, either way, we might have more than one value in that field
(a no-no in terms of performance).

To solution is to create an additional table, which stores just the
relationships between the two tables. Such a table is called a join table, and
contains two foreign key columns.

In our example, we might create a table called 'categorizations', and it would
have a book_id and category_id. Each row would represent a specific book's
association with a specific category.
