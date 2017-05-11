from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = '%s://%s:%s@%s/%s' % ()

db = SQLAlchemy(app)

@app.route('/', methods=['GET'])
def index():
    return 'StarCraft: Python Extension'

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
