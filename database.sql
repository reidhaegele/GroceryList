-- Create the database
CREATE DATABASE IF NOT EXISTS GroceryList;

-- Use the created database
USE GroceryList;

-- Create User
CREATE TABLE IF NOT EXISTS User (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255)
);

-- Create Lists 
CREATE TABLE IF NOT EXISTS Lists (
    list_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    name VARCHAR(255),
    FOREIGN KEY (username) REFERENCES User(username)
);

-- Create Product
CREATE TABLE IF NOT EXISTS Product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
    price float

);

--Create ListsXProduce
CREATE TABLE List_Product (
    list_id INT,
    product_id INT,
    PRIMARY KEY (list_id, product_id),
    FOREIGN KEY (list_id) REFERENCES Lists(list_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

-- Create Store 
CREATE TABLE IF NOT EXISTS Store (
    store_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    latitudes Decimal(8,6),
    longitudes Decimal(9,6)
);

--Create StoreXProduct
CREATE TABLE Store_Product (
    store_id INT,
    product_id INT,
    PRIMARY KEY (store_id, product_id),
    FOREIGN KEY (store_id) REFERENCES Store(store_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);