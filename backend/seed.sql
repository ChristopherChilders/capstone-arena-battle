insert into players
(username, email, password)
VALUES
('player1', 'player@one.com', '$2a$10$/BRhXDGOiEmna6zhgRb32eVgQxQurQySXAmE1vMXjq/31o4SXSPhu'),
('player2', 'player@two.com', '$2a$10$/BRhXDGOiEmna6zhgRb32eVgQxQurQySXAmE1vMXjq/31o4SXSPhu'),
('player3', 'player@three.com', '$2a$10$/BRhXDGOiEmna6zhgRb32eVgQxQurQySXAmE1vMXjq/31o4SXSPhu');

insert into characters 
(name, life, power, toughness, accuracy, initiative, experience, level)
VALUES
('Git Guy', 100, 20, 20, 20, 20, 0, 1),
('victor', 100, 20, 20, 20, 20, 0, 1),
('logan', 100, 20, 20, 20, 20, 0, 1);

insert into opponents
(name, life, power, toughness, accuracy, initiative, experience, level)
VALUES
('Kobold', 100, 20, 20, 20, 20, 0, 1),
('Slimer', 100, 20, 20, 20, 20, 0, 1),
('Dice Dude', 100, 20, 20, 20, 20, 0, 1);

insert into opponents_attacks 
(opponents_id, name, summary, damage, abilities, targets)
values 
(1, 'kick', 'kicks target', 10, '', 'enemy'),
(1, 'stab', 'stabs target', 20, '', 'enemy'),
(1, 'bite', 'bites target', 15, '', 'enemy'),
(1, 'howl', 'howls at target', 0, '', 'enemy'),
(2, 'kick', 'kicks target', 20, '', 'enemy'),
(2, 'punch', 'punches target', 10, '', 'enemy'),
(3, 'kick', 'kicks target', 20, '', 'enemy'),
(3, 'punch', 'punches target', 10, '', 'enemy');



insert into attacks 
(characters_id, name, summary, damage, abilities, targets)
values 
(1, 'body slam', 'body slams target', 20, '', 'enemy'),
(1, 'tackle', 'tackles target', 10, '', 'enemy'),
(2, 'kick', 'kicks target', 20, '', 'enemy'),
(2, 'punch', 'punches target', 10, '', 'enemy'),
(3, 'kick', 'kicks target', 20, '', 'enemy');

insert into users_characters 
(players_id, characters_id)
VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3);