const { username, password } = require('../config.json')
const mysql = require('mysql2');

const db = mysql.createConnection({

    host: 'localhost',
    user: username,
    password: password,
    database: 'employeetracker'

},

    console.log('Connected to the employee tracker database.')

);

module.exports = db;