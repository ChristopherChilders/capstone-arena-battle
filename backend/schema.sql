create table users (
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
    user_id INTEGER REFERENCES users(id),
    characters_id INTEGER REFERENCES characters(id)
);