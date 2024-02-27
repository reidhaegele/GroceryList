USE GroceryProject;

Create Table IF NOT EXISTS users (
    id int AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

Create Table IF NOT EXISTS lists (
    list_id int AUTO_INCREMENT PRIMARY KEY,
    user_id int,
    list_name VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

Create Table IF NOT EXISTS prices (
    product_id int,
    price DECIMAL(10,2)
);

Create Table IF NOT EXISTS usergroups (
    group_id int AUTO_INCREMENT PRIMARY KEY,
    user_id int,
    group_id int,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

