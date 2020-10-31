-- Notes on PERN stack video:
--
-- psql:
-- for help \?
--
-- list database \l
--
-- Create database
-- CREATE DATABASE database_name
--
-- connect to database:
-- \c database_name

-- list all tables \d

CREATE TABLE products (
  id INT,
  name VARCHAR(50),
  price INT,
  on_sale boolean
);

DROP TABLE restaurants;
CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (name, location, price_range) values ('mcdonalds', 'new yorks', 3);
INSERT INTO restaurants (name, location, price_range) values ('pizza hut', 'vegas', 2);
INSERT INTO restaurants (name, location, price_range) values ('wendys', 'seattle', 2);
