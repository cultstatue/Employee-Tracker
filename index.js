const { username, password} = require('./config.json')
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

db.query(`SELECT * FROM departments`, (err, rows) => {

  console.table(rows);

});

