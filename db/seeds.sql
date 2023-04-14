-- Department Seeds
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Customer Success');
INSERT INTO departments (name) VALUES ('IS');
INSERT INTO departments (name) VALUES ('Human Resources');
INSERT INTO departments (name) VALUES ('Accounting');

-- Role Seeds
INSERT INTO roles (title, salary, dept_id) VALUES ('Sales Manager', 200000, 1);
INSERT INTO roles (title, salary, dept_id) VALUES ('Sales Associate', 90000, 1);
INSERT INTO roles (title, salary, dept_id) VALUES ('Manager of Customer Success', 140000, 2);
INSERT INTO roles (title, salary, dept_id) VALUES ('Customer Success Representative', 80000, 2);
INSERT INTO roles (title, salary, dept_id) VALUES ('IS Manager', 180000, 3);
INSERT INTO roles (title, salary, dept_id) VALUES ('Software Engineer', 100000, 3);
INSERT INTO roles (title, salary, dept_id) VALUES ('Help Desk Analyst', 55000, 3);
INSERT INTO roles (title, salary, dept_id) VALUES ('HR Manager', 120000, 4);
INSERT INTO roles (title, salary, dept_id) VALUES ('HR Representative', 60000, 4);
INSERT INTO roles (title, salary, dept_id) VALUES ('Accounting Manager', 100000, 5);
INSERT INTO roles (title, salary, dept_id) VALUES ('Senior Accounting Associate', 70000, 5);

-- Employee Seeds
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Audrey', 'McMahon', 1, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Peter', 'Colin', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Joe', 'Razz', 3, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Rick', 'Simpson', 4, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Fred', 'Flintstone', 5, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Betty', 'Rubble', 6, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Sajji', 'Lazarus', 7, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Betty', 'Crocker', 8, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Ernesto', 'Anastasio', 9, 8);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Robin', 'Banks', 10, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Harley', 'Davidson', 11, 10);