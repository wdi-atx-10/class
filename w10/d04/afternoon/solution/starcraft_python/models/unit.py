from models.shared import db
import datetime

class Unit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    description = db.Column(db.Text)
    mineral_cost = db.Column(db.Integer)
    vespene_cost = db.Column(db.Integer)
    supply_cost = db.Column(db.Integer)
    build_time = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime)

    def __init__(self, name, description, mineral_cost, vespene_cost, supply_cost, build_time):
        self.name = name
        self.description = description
        self.mineral_cost = mineral_cost
        self.vespene_cost = vespene_cost
        self.supply_cost = supply_cost
        self.build_time = build_time

    def __repr__(self):
        return '<Unit %r>' % self.name
