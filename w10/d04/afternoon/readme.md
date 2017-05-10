# StarCraft: Python Expansion

## What Are We Building?

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
$ touch app.py && atom app.py
```

Add our Flask initialization code

```python  
# app.py
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'StarCraft: Python Extension'
```

Run the development server

```bash
$ export FLASK_APP=app.py
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
GET /races/<race_name>/units/<unit_id>
```

## ERD's


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

## Install SQL Alchemy


## Create Models


## Seed Data


## Test Our API
