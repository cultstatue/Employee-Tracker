const db = require('../db/connection')

function Departments () {}
Departments.prototype.get = function() {

    const sql = "SELECT * FROM departments;";

    db.promise().query(sql)
    .then( ([rows,fields]) => {

        console.table('Departments', rows);

    })
    .catch(console.log)
    

}

Departments.prototype.getArray = function() {

    const sql = "SELECT name FROM departments;";

    db.promise().query(sql)
    .then( ([rows,fields]) => {


    })
    .catch(console.log)

}

Departments.prototype.add = function(department) {

    const sql = 'INSERT INTO departments (name) VALUES (?)'

    const params = department

    db.promise().query(sql, params)

    .then( console.log('Department added to database.'))

    .catch(console.log)
}

module.exports = Departments