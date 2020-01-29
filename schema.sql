DROP DATABASE IF EXISTS roster_db;

CREATE DATABASE roster_db;

USE roster_db;

CREATE TABLE department (
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE role (
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    salary INTEGER,
    department VARCHAR(40) NOT NULL,
    department_id INTEGER
);

CREATE TABLE employee (
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    role VARCHAR(40) NOT NULL,
    department VARCHAR (20) NOT NULL,
    role_id INTEGER,
    department_id INTEGER
);

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO employee (first_name, last_name, role, department, role_id, department_id)
VALUES ("John", "Smith", "intern", "Sales", 2, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 100000, 2);

SELECT * FROM department;
SELECT * FROM employee;
SELECT * FROM role;
