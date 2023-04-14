const connect = require('../db/connection');

async function showEmployees() {
  const db = await connect();
  const employeeList = await db.query('SELECT * FROM employees');
  return employeeList;
}

async function addEmployee(firstName, lastName, roleID, managerID) {
  const db = await connect();
  const employeeList = [firstName, lastName, roleID, managerID];
  await db.query('INSERT INTO `employees`.`employees` (`firstName`, `last_name`, `role_id`, `manager_id`) VALUES (?, ?, ?, ?)', employeeList);
}

async function updateEmployee(empID, roleID) {
  const db = await connect();
  const employee = await db.query('UPDATE employees SET role_id = ? WHERE emp_id = ?', [roleID, empID]);
}


module.exports = { 
  showEmployees,
  addEmployee,
  updateEmployee 
}