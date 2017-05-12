from flask import Flask, jsonify, Response
from flask_sqlalchemy import SQLAlchemy

import os
from os.path import join, dirname
from dotenv import load_dotenv

from models.shared import db
from models.race import Race
from models.unit import Unit
from models.race_unit import RaceUnit

import json

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
    return 'StarCraft: Python Extension'

@app.route('/races', methods=['GET'])
def races():
    # races = Race.query.all()
    # print races

    return jsonify(json_list=[race.serialize for race in Race.query.all()])
    # return jsonify(json.dumps([race.serialize for race in Race.query.all()]))

    # races_out = []
    # for race in races:
    #     print race
    #     races_out.append(dict(race))

    # resp = jsonify(json.dumps(races))
    # print resp


    # return Response(json.dumps(races_out), mimetype='application/json')

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
