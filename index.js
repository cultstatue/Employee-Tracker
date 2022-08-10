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

    const sql = 'SELECT roles.*, departments.name AS dep_name FROM roles LEFT JOIN departments ON roles.dep_id = departments.id;'

    db.promise().query(sql)
    .then( ([rows,fields]) => {

        console.table('Roles', rows);

    })
    .catch(console.log)
    .then( () => db.end());
}
