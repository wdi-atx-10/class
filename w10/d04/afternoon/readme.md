# StarCraft: Python Expansion

Today we'll be building an API for the greatest game ever created: [StarCraft](https://starcraft.com).

## Set Up Our Environment

**virtualenv** helps us to isolate the version of Python and libraries required on a project basis.

If you haven't already, [install virtualenv](http://flask.pocoo.org/docs/0.12/installation/)

Create a new **virtualenv** for our project.

```bash
$ mkdir starcraft_python && cd starcraft_python
$ virtualenv venv
```

Activate the project

```bash
$ . venv/bin/activate
```

## Set Up Flask

```bash
$ pip install Flask
```

Create our application file

```bash
$ touch main.py && atom main.py
```

Add our Flask initialization code

```python  
# main.py
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'StarCraft: Python Extension'

# If this file is being run directly, then start Flask
if __name__ == '__main__':
    app.run(debug=True)
```

Run the development server

```bash
$ export FLASK_APP=main.py
$ export FLASK_DEBUG=1
$ flask run
 * Serving Flask app "app"
 * Forcing debug mode on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
```

> Setting `FLASK_DEBUG=1` enables logging and automatic restarts

## Create Routes

```
GET /races
GET /races/<race_name>
GET /races/<race_name>/units
GET /units
POST /units
GET /units/<unit_id>
```

```python
# main.py
from flask import Flask
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'StarCraft: Python Expansion'

@app.route('/races', methods=['GET'])
def races():
    return 'List all races'

@app.route('/races/<race_name>', methods=['GET'])
def races_name(race_name):
    return 'Display details for %s' % race_name

@app.route('/races/<race_name>/units', methods=['GET'])
def races_units(race_name):
    return 'List all units for %s' % race_name    

@app.route('/units', methods=['GET', 'POST'])
def units():
    if request.method == 'POST':
        return 'Save new unit'
    else:
        return 'List all units'

@app.route('/units/<int:unit_id>', methods=['GET'])
def units_id(unit_id):
    return 'Display details for unit ID: %i' % unit_id

# If this file is being run directly, then start Flask
if __name__ == '__main__':
    app.run(debug=True)
```

## ERD's

Below might be our first attempt at designing a schema for our database.

![StarCraft ERD 1](./assets/starcraft_erd_1.png)

Thinking through the units though, we realize we have a problem. One of the heroes in StarCraft named Kerrigan was originally a member of the Terrans but is now loyal to Zergs. We should reflect that she could be considered a member of both.

What we need is a link or join table, to allow for the same unit to be associated with multiple races. Since there should never be multiple instances of a `race_id` being paired with a `unit_id`, we could create a composite key using both.

![StarCraft ERD 2](./assets/starcraft_erd_2.png)

## Create Our Database

From the command line, open up the interactive terminal for Postgres

```bash
$ psql
```

Create a new database

```
# CREATE DATABASE starcraft_python
```

Connect to the database

```
# \c starcraft_python
```

View the tables and relations. There's nothing there yet, we'll fix that now.

```
# \dt
```

## Add SQL Alchemy

```bash
$ pip install flask-sqlalchemy
```

The top of our `main.py` file will now look like this:

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://dirkdunn1:abc123@localhost/flaskmovie'

db = SQLAlchemy(app)
```

## Create Models


## Seed Data


## Test Our API
