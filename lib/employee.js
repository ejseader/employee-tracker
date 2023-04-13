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