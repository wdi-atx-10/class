import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

import os
from os.path import join, dirname
from dotenv import load_dotenv

from models.shared import db
from models.race import Race
from models.unit import Unit
from models.race_unit import RaceUnit

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

Base = declarative_base()

SQLALCHEMY_DATABASE_URI = '%s://%s:%s@%s/%s' % (os.environ.get('DB_DRIVER'), os.environ.get('DB_USER'), os.environ.get('DB_PASSWORD'), os.environ.get('DB_HOST'), os.environ.get('DB_NAME'))

engine = create_engine(SQLALCHEMY_DATABASE_URI, echo=False)

Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

'''
Races
'''
race_ids = {}
races = [
    {
        'name': 'Zerg',
        'description': 'The Zerg Swarm is a terrifying and ruthless amalgamation of biologically advanced, arthropodal aliens. Dedicated to the pursuit of genetic perfection, the zerg relentlessly hunt down and assimilate advanced species across the galaxy, incorporating useful genetic code into their own. They are named "the Swarm" per their ability to rapidly create strains, and the relentless assaults they employ to overwhelm their foes.'
    },
    {
        'name': 'Terran',
        'description': 'The terrans are a young species with psionic potential. The terrans of the Koprulu sector descend from the survivors of a disastrous 23rd century colonization mission from Earth.[1] Compared to the protoss and zerg, the terrans are highly factionalized and endure frequent wars amongst themselves in addition to the more recent conflicts with their alien neighbors. Nevertheless, terrans stand as one of the three dominant species of the galaxy.'
    },
    {
        'name': 'Protoss',
        'description': 'The protoss, a.k.a. the Firstborn, are a sapient humanoid race native to Aiur. Their advanced technology complements and enhances their psionic mastery.'
    }
]

for race in races:
    new_race = Race(name=race['name'], description=race['description'])
    session.add(new_race)
    session.commit()
    race_ids[race['name']] = new_race.id

print race_ids

'''
Units
'''
race_units = {
    'Zerg': [
        {
            'name': 'Mutalisk',
            'description': 'The mutalisk\'s attack strikes three targets in succession, dealing 9 damage to the first, 3 to the second, and 1 to the last.',
            'mineral_cost': 100,
            'vespene_cost': 100,
            'supply_cost': 2,
            'build_time': 40
        },
        {
            'name': 'Zergling',
            'description': 'The zergling is the least durable basic troop unit. This is offset by inexpensive production, and high movement and attack rate.',
            'mineral_cost': 25,
            'vespene_cost': 0,
            'supply_cost': 0.5,
            'build_time': 28
        },
        {
            'name': 'Hydralisk',
            'description': 'Hydralisks have a single ranged attack, unlike in the Amerigo cinematic where they may melee attack.',
            'mineral_cost': 75,
            'vespene_cost': 25,
            'supply_cost': 1,
            'build_time': 28
        }
    ],
    'Terran': [
        {
            'name': 'Marine',
            'description': 'The marine is the most versatile tier 1 unit in the game. Compared to the zealot and the zergling, the marine is medium cost, is the only one with a ranged attack, and can even hit both ground and air units.',
            'mineral_cost': 50,
            'vespene_cost': 0,
            'supply_cost': 1,
            'build_time': 24
        },
        {
            'name': 'Medic',
            'description': 'Medics lack any offensive capability, but instead heal fellow infantry. Marines and firebats may make more liberal use of stimpacks when supported by medics; the increased firepower may be sustained so long as the medics have energy remaining to heal.',
            'mineral_cost': 50,
            'vespene_cost': 25,
            'supply_cost': 1,
            'build_time': 30
        },
        {
            'name': 'Battlecruiser',
            'description': 'The battlecruiser has a staggering 500 hit points; no other standard game unit tops this margin.',
            'mineral_cost': 400,
            'vespene_cost': 300,
            'supply_cost': 6,
            'build_time': 133
        }
    ],
    'Protoss': [
        {
            'name': 'Dark Archon',
            'description': 'The dark archon is a "spellcaster" with no regular attack, unlike the archon.',
            'mineral_cost': 250,
            'vespene_cost': 200,
            'supply_cost': 4,
            'build_time': 20
        },
        {
            'name': 'Zealot',
            'description': 'Zealots are the most powerful of the basic starting units and are correspondingly more expensive.',
            'mineral_cost': 100,
            'vespene_cost': 0,
            'supply_cost': 2,
            'build_time': 40
        },
        {
            'name': 'High Templar',
            'description': 'High templar are protoss warriors that use powerful psionic powers to support other protoss forces.',
            'mineral_cost': 50,
            'vespene_cost': 150,
            'supply_cost': 2,
            'build_time': 50
        }
    ]
}

for race in race_units:
    race_id = race_ids[race]
    
    for unit in race_units[race]:
        new_unit = Unit(name=unit['name'], description=unit['description'], mineral_cost=unit['mineral_cost'], vespene_cost=unit['vespene_cost'], supply_cost=unit['supply_cost'], build_time=unit['build_time'])
        session.add(new_unit)
        session.commit()

        new_race_unit = RaceUnit(race_id=race_id, unit_id=new_unit.id)
        session.add(new_race_unit)
        session.commit()
