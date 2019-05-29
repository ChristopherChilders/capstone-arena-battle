create table players (
    id serial PRIMARY key,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    created_at TIMESTAMP DEFAULT current_timestamp
);

create TABLE characters (
    id serial primary key,
    name VARCHAR(100),
    life INTEGER,
    power INTEGER,
    toughness INTEGER,
    accuracy INTEGER,
    initiative INTEGER,
    experience INTEGER,
    level INTEGER
);

create TABLE opponents (
    id serial primary key,
    name VARCHAR(100),
    life INTEGER,
    power INTEGER,
    toughness INTEGER,
    accuracy INTEGER,
    initiative INTEGER,
    experience INTEGER,
    level INTEGER
);

create TABLE opponents_attacks (
    id serial primary key,
    opponents_id INTEGER REFERENCES opponents(id),
    name VARCHAR(100),
    summary VARCHAR(100),
    damage INTEGER,
    abilities VARCHAR(100),
    targets VARCHAR(20)
);
create TABLE attacks (
    id serial primary key,
    characters_id INTEGER REFERENCES characters(id),
    name VARCHAR(100),
    summary VARCHAR(100),
    damage INTEGER,
    abilities VARCHAR(100),
    targets VARCHAR(20)
);

create table users_characters (
    id serial primary key,
    players_id INTEGER REFERENCES players(id),
    characters_id INTEGER REFERENCES characters(id)
);