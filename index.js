const { username, password } = require('./config.json')
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection({

    host: 'localhost',
    user: username,
    password: password,
    database: 'employeetracker'

},

    console.log('Connected to the employee tracker database.')

);

getDepartments = function() {

    const sql = "SELECT * FROM departments;";

    db.promise().query(sql)
    .then( ([rows,fields]) => {

        console.table('Departments', rows);

    })
    .catch(console.log)
    .then( () => db.end());

}

getRoles = function() {

    const sql = 'SELECT roles.*, departments.name AS department FROM roles LEFT JOIN departments ON roles.dep_id = departments.id;'

    db.promise().query(sql)
    .then( ([rows,fields]) => {

        console.table('Roles', rows);

    })
    .catch(console.log)
    .then( () => db.end());
}

getEmployees = function() {

    const sql = 'SELECT employees.id, employees.first_name, employees.last_name, manager_id, roles.title, roles.salary, departments.name AS department FROM employees LEFT JOIN roles ON roles.id = employees.role_id LEFT JOIN departments ON departments.id = roles.dep_id;';

    db.promise().query(sql)
    .then( ([rows,fields]) => {

        console.table('Employees', rows);

    })
    .catch(console.log)
    .then( () => db.end());
}
