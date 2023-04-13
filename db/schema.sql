DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
  dept_id INT AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  role_id INT AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  dept_id INT,
  PRIMARY KEY (role_id)
  FOREIGN KEY (dept_id)
  REFERENCES departments(dept_id)
  ON DELETE SET NULL
);

CREATE TABLE employees (
  emp_id INT AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  title VARCHAR(30),
  manager_id INT DEFAULT NULL,
  CONSTRAINT id PRIMARY KEY (emp_id)
  CONSTRAINT manager_id FOREIGN KEY (manager_id)
  FOREIGN KEY (title)
  REFERENCES roles(title)
  REFERENCES employees(emp_id)
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