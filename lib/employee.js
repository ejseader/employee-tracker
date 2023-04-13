const db = require('../db/connection');

function showEmployees(cb) {
  db.query('SELECT * FROM employees', (err, data) => {
    if (err) throw err;
    cb(data);
  })
}

function addEmployee(cb) {
  
}


module.exports = { 
  showEmployees,
  addEmployee, 
}


function getEmployess() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM employees', (err, data) => {
      if (err) reject(err);

      resolve(data);
    });
  })
}

async function init() {
  const employees = await getEmployees(employees);
}