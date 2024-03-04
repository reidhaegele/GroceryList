USE GroceryProject;

INSERT INTO users (username, password) VALUES
('user1', 'password1'),
('user2', 'password2'),
('user3', 'password3');

INSERT INTO lists (user_id, list_name) VALUES
(1, 'Shopping List'),
(1, 'To-DO List'),
(2, 'Grocery List'),
(3, 'Project Tasks')

INSERT INTO prices (username, password) VALUES
(1, 10.99),
(2, 5.49),
(3, 2.99);

INSERT INTO usergroups (username, password) VALUES
(1, 101),
(2, 101),
(2, 102);