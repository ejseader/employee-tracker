-- Department Seeds
INSERT INTO departments (dept_name) VALUES 
  ('Sales'),
  ('Customer Success'),
  ('IS'),
  ('Human Resources'),
  ('Accounting');

-- Role Seeds
INSERT INTO roles (title, salary, dept_id) VALUES 
  ('Sales Manager', 200000, 1),
  ('Sales Associate', 90000, 1),
  ('Manager of Customer Success', 140000, 2),
  ('Customer Success Rep', 80000, 2),
  ('IS Manager', 180000, 3),
  ('Software Engineer', 100000, 3),
  ('Help Desk Analyst', 55000, 3),
  ('HR Manager', 120000, 4),
  ('HR Representative', 60000, 4),
  ('Accounting Manager', 100000, 5),
  ('Senior Accounting Associate', 70000, 5);

-- Employee Seeds
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES 
  ('Audrey', 'McMahon', 1, NULL),
  ('Peter', 'Colin', 2, 1),
  ('Joe', 'Razz', 3, NULL),
  ('Rick', 'Simpson', 4, 3),
  ('Fred', 'Flintstone', 5, NULL),
  ('Betty', 'Rubble', 6, 5),
  ('Sajji', 'Lazarus', 7, 5),
  ('Betty', 'Crocker', 8, NULL),
  ('Ernesto', 'Anastasio', 9, 8),
  ('Robin', 'Banks', 10, NULL),
  ('Harley', 'Davidson', 11, 10);