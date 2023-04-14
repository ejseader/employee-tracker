const inquirer = require('inquirer');
require('dotenv').config();
require('console.table');
const connection = require('./db/connection');


const startMenu = [
    {
      name: 'options',
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
    }
  ];

  inquirer.prompt(startMenu)
  .then(answer => {
    switch (answer.options) {
      case 'View All Employees':
        showEmployees();
        break;

      case 'Add New Employee':
        addEmployee();
        break;

      case 'Update Employee Role':
        updateEmployee();
        break;

      case 'View All Roles':
        showRoles();
        break;

      case 'Add New Role':
        addRole();
        break;
      
      case 'View All Departments':
        showDepts();
        break;

      case 'Add New Department':
        addDept();
        break;

      default:
        console.log('Thank you for using Employee Tracker!');
        process.exit();
    }
  })

  // View All Employees

  function showEmployees() {
    return connection.promise().query(`
    SELECT a.emp_id, a.first_name, a.last_name, roles.title, departments.dept_name, roles.salary, b.first_name AS manager_first_name, b.last_name AS manager_last_name FROM employees a JOIN roles ON a.role_id = roles.role_id JOIN departments ON roles.dept_id = departments.dept_id LEFT JOIN employees b ON a.manager_id = b.emp_id ORDER BY a.last_name ASC;
    `)
    .then(res => console.table(res[0]))
    .catch(err => console.log(err))
  };

  // Add New Employee

  function getRoles() {
    return connection.promise().query(
      `SELECT title, role_id FROM roles;`,
    )
    .then(res => {
      return res[0].map(choice => {
        return choice.title
      })
    })
    .catch(err => console.log(err))
  }

  function getManager() {
    return connection.promise().query(`SELECT emp_id, last_name FROM employees;`)
    .then(res => {
      return res[0].map(choice => {
        return choice.last_name
      })
    })
  }

  function addEmployee() {

    getRoles().then(roleSelect => {
      getManager().then(managerSelect => {
        const addEmp = [
          {
            name: "firstName",
            message: "Please enter the employee's first name:"
          },
          {
            name: "lastName",
            message: "Please enter the employee's last name:"
          },
          {
            type: "list",
            name: "chooseRole",
            message: "Please select the employee's role:",
            choices: roleSelect
          },
          {
            type: "list",
            name: "chooseManager",
            message: "Please select the employee's manager:",
            choices: managerSelect
          }
        ]

        inquirer.prompt(addEmp).then(function(answers) {
          connection.promise().query(`SELECT role_id FROM roles WHERE title=?`, [answers.chooseRole])
          .then(gotRole => {
            connection.promise().query(`SELECT emp_id FROM employees WHERE last_name=?`, [answers.chooseManager])
            .then(gotEmployee => {

              const role_id = gotRole[0][0].role_id;
              const emp_id = gotEmployee[0][0].emp_id;
              return connection.promise().query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`, [answers.firstName, answers.lastName, role_id, emp_id])
              .then(res => console.log(answers.firstName + answers.lastName + " has been successfully added."))
              .catch(err => console.log(err))
            })
          })
        });
      })
    });
  }

  // Update Employee Role

  function updateEmployee() {
    getRoles().then(roleSelect => {
      getManager(). then(empLastName => {
        const upEmp = [
          {
            type: "list",
            name: "lastName",
            message: "Please enter employee's last name:",
            choices: empLastName
          },
          {
            type: "list",
            name: "chooseRole",
            message: "Please select the employee's new role",
            choices: roleSelect
          }
        ]
        
        inquirer.prompt(upEmp).then(function(answers) {
          connection.promise().query(`SELECT emp_id FROM employees WHERE last_name=?`, [answers.lastName])
          .then(gotEmp => {
            connection.promise().query(`SELECT role_id FROM roles WHERE title=?`, [answers.chooseRole])
            .then(gotRole => {

              const role_id = gotRole[0][0].role_id;

              const emp_id = gotEmp[0][0].emp_id;

              return connection.promise().query(`UPDATE employees SET role_id=? WHERE emp_id=?;`, [role_id, emp_id])
              .then(res => console.log(answers.lastName + "'s role has been updated successfully."))
              .catch(err => console.log(err))
            })
          })
        });
      })
    });
  }


  // View All Roles

  function showRoles() {
    return connection.promise().query(`SELECT role_id, title FROM roles;`)
    .then(res => console.table(res[0]))
    .catch(err => console.log(err))
  };


  // Add a New Role

  function getDepts() {
    return connection.promise().query(`SELECT dept_name, dept_id FROM departments ORDER BY dept_name ASC;`)
    .then(res => {
      return res[0].map(deptChoice => {
        return deptChoice.dept_name
      })
    })
    .catch(err => console.log(err))
  }

  function addRole() {
    return getDepts().then(deptChoices => {

      const addRole = [
        {
          name: 'newRole',
          type: 'input',
          message: "What is the new role title?"
        },
        {
          name: 'roleSalary',
          type: 'input',
          message: "What is the salary of the new role?"
        },
        {
          name: 'newRoleDept',
          type: 'list',
          message: "Please select the department ID for this role?",
          choices: deptChoices
        }
      ]

      inquirer.prompt(addRole).then(function(answers) {
        return connection.promise().query(`SELECT dept_id FROM departments WHERE dept_name=?`, [answers.newRoleDept])
        .then(res => {
          const dept_id = res[0][0].dept_id;
          return connection.promise().query(`INSERT INTO roles (title, salary, dept_id) VALUES (?, ?, ?);`, [answers.newRole, answers.roleSalary, dept_id])
          .then(res => console.log(answers.newRole + " has been successfully added to available roles."))
          .catch(err => console.log(err))
        });
      });
    })
  }


  // View All Departments

  function showDepts() {
    return connection.promise().query(`SELECT dept_id, dept_name FROM departments;`)
    .then(res => console.table(res[0]))
    .catch(err => console.log(err))
    };


  // Add a New Department

  function addDept() {
    const addDept = [
      {
        name: 'deptName',
        type: 'input',
        message: "What is the name of the new department?"
      }
    ];

    inquirer.prompt(addDept).then(function(newDept) {
      return connection.promise().query(`INSERT INTO departments (dept_name) VALUES ("${newDept.deptName}");`)
      .then(res => console.log(newDept.deptName + ' has been successfully added to the list of departments'))
      .catch(err => console.log(err))
    })
  }