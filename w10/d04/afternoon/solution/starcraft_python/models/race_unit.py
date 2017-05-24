from models.shared import db, dump_datetime
import datetime

class RaceUnit(db.Model):
    __tablename__ = 'race_units'
    race_id = db.Column(db.Integer, db.ForeignKey('races.id'), primary_key=True)
    unit_id = db.Column(db.Integer, db.ForeignKey('units.id'), primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime)

    def __init__(self, race_id, unit_id):
        self.race_id = race_id
        self.unit_id = unit_id

    @property
    def serialize(self):
       """Return object data in easily serializable format"""
       return {
           'race_id'    : self.race_id,
           'unit_id'    : self.unit_id,
           'created_at' : dump_datetime(self.created_at)
       }

    def __repr__(self):
        return '<RaceUnit race:%i unit:%i>' % (self.race_id, self.unit_id)
