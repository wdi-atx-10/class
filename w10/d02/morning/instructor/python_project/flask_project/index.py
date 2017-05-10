from flask import Flask, render_template, redirect, url_for, request, jsonify
import requests
import json

# Step 1: make a project directory, with a static, templates
# directory inside of it, and a index.py file

# Step 2: Create a virtual environment, by running the command
# virtualenv env

# Step 3: Activate our virtualenv, by typing "source env/bin/activate"

# Creating a flask app
app = Flask(__name__)

# Declaring a route, and returning something
@app.route('/')
def index():
    return render_template('index.html',myname="Dirk Dunn")

@app.route('/chuck')
def chuck():
    return render_template('chucknorris.html')

@app.route( '/getjoke',methods=['POST'] )
def get_joke():
    get_joke = requests.get('http://api.icndb.com/jokes/random', params={
        'firstName': 'Dirk',
        'lastName': 'Dunn'
    })
    joke = json.loads(get_joke.text)['value']['joke']

    return jsonify(joke)


@app.route('/showformdata', methods=['POST'])
def show_form_data():
    print 'show some data'

    print request.form['firstname']
    return 'Your first name is %s and last name is %s' % (request.form['firstname'], request.form['lastname'])

@app.route('/sendtoindex')
def send():
    return redirect( url_for('index') )

@app.route('/greeting/<firstname>/<int:age>')
def greeting(firstname, age):
    return "Greetings! your first name is: %s and age is: %s" % (firstname, age)

@app.route('/getname', methods=['POST','PUT'])
def getname():
    return 'You cant see this unless its a post or put request'

# if this file is being run directly, then start flask
if __name__ == '__main__':
    app.run(debug=True)
