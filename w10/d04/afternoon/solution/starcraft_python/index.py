from flask import Flask
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'StarCraft: Python Extension'

@app.route('/races', methods=['GET'])
def races():
    return '/races'

@app.route('/races/<race_name>', methods=['GET'])
def races_name(race_name):
    return '/races/%s' % race_name

@app.route('/races/<race_name>/units', methods=['GET'])
def races_units(race_name):
    return '/races/%s/units' % race_name

@app.route('/races/<race_name>/units/<int:unit_id>', methods=['GET'])
def races_unit_id(race_name, unit_id):
    return '/races/%s/units/%i' % (race_name, unit_id)


# If this file is being run directly, then start Flask
if __name__ == '__main__':
    app.run(debug=True)
