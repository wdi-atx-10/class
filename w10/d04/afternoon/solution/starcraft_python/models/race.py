from models.shared import db, dump_datetime
from models.unit import Unit
import datetime

race_units = db.Table('race_units',
    db.Column('race_id', db.Integer, db.ForeignKey('races.id'), primary_key=True),
    db.Column('unit_id', db.Integer, db.ForeignKey('units.id'), primary_key=True)
)

class Race(db.Model):
    __tablename__ = 'races'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    description = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime)
    # This is the connection for many to many relationship between race and units
    units = db.relationship('Unit', secondary=race_units,
        backref=db.backref('race', lazy='dynamic'))

    def __init__(self, name, description):
        self.name = name
        self.description = description

    @property
    def serialize(self):
       """Return object data in easily serializable format"""
       return {
           'id'         : self.id,
           'name'       : self.name,
           'description': self.description,
           'units'      : self.units,
           'created_at' : dump_datetime(self.created_at)
       }

    def __repr__(self):
        return '<Race %r>' % self.name
