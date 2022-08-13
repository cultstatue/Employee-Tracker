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

addDepartment = function() {

    const sql = 'INSERT INTO departments (name) VALUES (?)'

    const params = "Test Department"

    db.promise().query(sql, params)

    .then( console.log('Department added to database.'))

    .catch(console.log)
}

getRoles = function() {

    const sql = 'SELECT roles.*, departments.name AS department FROM roles LEFT JOIN departments ON roles.dep_id = departments.id;'

    db.promise().query(sql)
    .then( ([rows,fields]) => {

        console.table('Roles', rows);

    })
    .catch(console.log)
}

addRole = function() {

    const sql = 'INSERT INTO roles (title, salary, dep_id) VALUES (?, ?, ?)'

    const params = ["Test Role", 200, 3];

    db.promise().query(sql, params)

    .then( console.log('role added to database.'))

    .catch(console.log)
}

getEmployees = function() {

    const sql = "SELECT a.id AS 'ID', a.first_name AS 'First Name', a.last_name AS 'Last Name',b.first_name AS 'Manager', roles.title AS 'Title', roles.salary AS 'Salary', departments.name AS 'Department' FROM employees AS a LEFT JOIN employees AS b ON a.manager_id = b.id LEFT JOIN roles ON roles.id = a.role_id LEFT JOIN departments ON departments.id = roles.dep_id;";

    db.promise().query(sql)
    .then( ([rows,fields]) => {

        console.table('Employees', rows);

    })
    .catch(console.log)
}

addEmployee = function() {
    
    const sql = 'INSERT INTO roles (title, salary, dep_id) VALUES (?, ?, ?)'

    const params = ["Test Role", 200, 3];

    db.promise().query(sql, params)

    .then( console.log('Role added to database.'))

    .catch(console.log)

}

updateEmployee = function() {

    const sql = 'UPDATE employees SET role_id = ? WHERE id = ?;';

    const params = [2,1]

    db.promise().query(sql, params)

    .then( console.log('Role change comitted to database.'))

    .catch(console.log)

}