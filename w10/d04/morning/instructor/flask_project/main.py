from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://dirkdunn1:abc123@localhost/wdiflask'

db = SQLAlchemy(app)

class User(db.Model):
    # setup database columns
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True)
    email = db.Column(db.String(30), unique=True)

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return '<User username=%r email=%r >' % (self.username, self.email)


@app.route('/')
def index():
    # get all of our users
    users = User.query.all()
    return render_template('index.html', users=users)

@app.route('/add_user', methods=['POST'])
def add_user():
    # Create a new user from the data sent from the form.
    new_user = User(request.form['username'], request.form['email'])
    db.session.add(new_user)
    db.session.commit()

    return redirect( url_for('index') )

@app.route('/remove_user', methods=["POST"])
def remove_user():
    user_to_delete = User.query.filter_by(username=request.form['username_delete']).first()
    db.session.delete(user_to_delete)
    db.session.commit()

    return redirect( url_for('index') )

@app.route('/update_user', methods=['POST'])
def update_user():
    user_to_update = User.query.filter_by(username=request.form['user_update']).first()

    # Set username to the new username from our form
    user_to_update.username = request.form['new_username']

    # Set email to the new email sent from our form
    user_to_update.email = request.form['new_email']

    db.session.commit()

    return redirect( url_for('index') )


# if you are running this file directly
if __name__ == '__main__':
    app.run(debug=True)
