DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
  dept_id INT AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (dept_id)
);

CREATE TABLE roles (
  role_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id) ON DELETE SET NULL
);

CREATE TABLE employees (
  emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT DEFAULT NULL,
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  FOREIGN KEY (manager_id) REFERENCES roles(role_id)
);

-- SELECT


-- SELECT
--     e.id AS employees.id,
--     e.first_name AS employees.first_name,
--     e.last_name AS employees.last_name,
--     CONCAT (e.first_name, ' ', e.last_name) AS
--     manager_name
--   FROM employees e
--   JOIN employees m ON e.manager_id = m.id;