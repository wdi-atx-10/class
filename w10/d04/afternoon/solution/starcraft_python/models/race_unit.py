from models.shared import db
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

    def __repr__(self):
        return '<RaceUnit race:%i unit:%i>' % (self.race_id, self.unit_id)
