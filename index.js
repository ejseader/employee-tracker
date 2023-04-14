const inquirer = require('inquirer');
require('dotenv').config();
require('console.table');
const { getDepartments, addDepartment } = require('./lib/department');
const { showEmployees, addEmployee, updateEmployee } = require('./lib/employee');
const { getRoles, addRole } = require('./lib/role');


inquirer.prompt([
    {
      name: 'option',
      message: 'What would you like to do?',
      type: 'list',
      choices: [
      'View All Employees', 
      'Add New Employee', 
      'Update Employee Role', 
      'View All Roles', 
      'Add New Role', 
      'View All Departments',
      'Add New Department',
      'Exit',
      ]
    },
    // Add New Employee
    {
      name: 'first_name',
      type: 'input',
      message: "What is the employee's first name?",
      when: (answer) => answer.option === 'Add New Employee'
    },
    {
      name: 'last_name',
      type: 'input',
      message: "What is the employee's last name?",
      when: (answer) => answer.option === 'Add New Employee'
    },
    {
      name: 'role_id',
      type: 'input',
      message: "What is the employee's role ID?",
      when: (answer) => answer.option === 'Add New Employee'
    },
    {
      name: 'manager_id',
      type: 'input',
      message: "What is the employee's manager's ID?",
      when: (answer) => answer.option === 'Add New Employee'
    },
    // Update Employee Role
    {
      name: 'update_employee',
      type: 'input',
      message: "What is the employee's ID?",
      when: (answer) => answer.option === 'Update Employee Role'
    },
    {
      name: 'updated_role',
      type: 'input',
      message: "What is the employee's new role ID?",
      when: (answer) => answer.option === 'Update Employee Role'
    },
    // Add New Role
    {
      name: 'new_role',
      type: 'input',
      message: "What is the new role title?",
      when: (answer) => answer.option === 'Add New Role'
    },
    {
      name: 'role_salary',
      type: 'input',
      message: "What is the salary of the new role?",
      when: (answer) => answer.option === 'Add New Role'
    },
    {
      name: 'new_role_dept',
      type: 'input',
      message: "What is the department ID of the new role?",
      when: (answer) => answer.option === 'Add New Role'
    },
    // Add New Department
    {
      name: 'dept_name',
      type: 'input',
      message: "What is the name of the new department?",
      when: (answer) => answer.option === 'Add New Department'
    },
  ]).then(async (answer)  => {
    switch (answer.option) {
      case 'View All Employees':
        const employees = await showEmployees();
        console.table(employees);
        break;

      case 'Add New Employee':
        let manager = answer.manager_id || null;
        const employee = addEmployee(answer.first_name, answer.last_name, answer.role_id, manager);
        break;

      case 'Update Employee Role':
        updateEmployee(answer.update_employee, answer.updated_role);
        break;

      case 'View All Roles':
        const roles = showRoles();
        console.table(roles);
        break;

      case 'Add New Role':
        const role = addRole(answer.new_role, answer.role_salary, answer.new_role_dept);
        console.table(employees);
        break;
      
      case 'View All Departments':
        const depts = showDepts();
        console.table(depts);
        break;

      case 'Add New Department':
        const dept = addDept(answer.dept_name);
        break;

      case 'Exit':
        console.log('Thank you for using Employee Tracker!');
        process.exit();
    }
  })


// db.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening on port %s', PORT));
// });

