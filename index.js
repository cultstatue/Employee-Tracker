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

    db.promise().query("SELECT * FROM departments")
    .then( ([rows,fields]) => {

        console.table(rows);

    })
    .catch(console.log)
    .then( () => db.end());

}
