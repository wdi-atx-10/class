from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

import os
from os.path import join, dirname
from dotenv import load_dotenv

from models.shared import db
from models.race import Race
from models.unit import Unit
# from models.race_unit import RaceUnit

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = '%s://%s:%s@%s/%s' % (os.environ.get('DB_DRIVER'), os.environ.get('DB_USER'), os.environ.get('DB_PASSWORD'), os.environ.get('DB_HOST'), os.environ.get('DB_NAME'))

db.app = app
db.init_app(app)
# Create tables if they don't already exist
db.create_all()

@app.route('/', methods=['GET'])
def index():
    return 'StarCraft: Python Expansion'

@app.route('/races', methods=['GET'])
def races():
    races = [i.serialize for i in Race.query.all()]
    return jsonify(races)

@app.route('/races/<race_name>', methods=['GET'])
def races_name(race_name):
    race = Race.query.filter_by(name=race_name.capitalize()).first().serialize
    return jsonify(race)

@app.route('/races/<race_name>/units', methods=['GET'])
def races_units(race_name):
    race = Race.query.filter_by(name=race_name.capitalize()).first()
    if race is None:
        return jsonify({})

    race_units = race.units
    return jsonify([i.serialize for i in race_units])

@app.route('/units', methods=['GET', 'POST'])
def units():
    if request.method == 'POST':
        return 'Save new unit'
    else:
        # Return all units
        units = [i.serialize for i in Unit.query.all()]
        return jsonify(units)

@app.route('/units/<int:unit_id>', methods=['GET'])
def units_id(unit_id):
    unit = Unit.query.get(unit_id).serialize
    return jsonify(unit)


# If this file is being run directly, then start Flask
if __name__ == '__main__':
    app.run(debug=True)
