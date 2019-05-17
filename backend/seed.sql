insert into users
(username, email, password, created_at)
VALUES
('player1', 'player@one.com', 'password', '2019-05-17 09:05:35'),
('player2', 'player@two.com', 'password', '2019-05-17 09:05:35'),
('player3', 'player@three.com', 'password', '2019-05-17 09:05:35');

insert into characters 
(name, life, power, toughness, accuracy, initiative, experience, level)
VALUES
('chris', 100, 20, 20, 20, 20, 0, 1),
('victor', 100, 20, 20, 20, 20, 0, 1),
('logan', 100, 20, 20, 20, 20, 0, 1);

insert into attacks 
(characters_id, name, summary, damage, abilities, targets)
values 
(1, 'kick', 'kicks target', 20, '', 'enemy'),
(1, 'punch', 'punches target', 10, '', 'enemy'),
(2, 'kick', 'kicks target', 20, '', 'enemy'),
(2, 'punch', 'punches target', 10, '', 'enemy'),
(3, 'kick', 'kicks target', 20, '', 'enemy');

insert into users_characters 
(user_id, characters_id)
VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3);