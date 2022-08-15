const db = require('../db/connection')

function Employees () {}
Employees.prototype.get = function() {

    const sql = "SELECT a.id AS 'ID', a.first_name AS 'First Name', a.last_name AS 'Last Name',b.first_name AS 'Manager', roles.title AS 'Title', roles.salary AS 'Salary', departments.name AS 'Department' FROM employees AS a LEFT JOIN employees AS b ON a.manager_id = b.id LEFT JOIN roles ON roles.id = a.role_id LEFT JOIN departments ON departments.id = roles.dep_id;";

    db.promise().query(sql)
    .then( ([rows,fields]) => {

        console.table('Employees', rows);

    })
    .catch(console.log)
}

Employees.prototype.add = function(role, salary, depid) {
    
    const sql = 'INSERT INTO roles (title, salary, dep_id) VALUES (?, ?, ?)'

    const params = [role, salary, depid];

    db.promise().query(sql, params)

    .then( console.log('Role added to database.'))

    .catch(console.log)

}

Employees.prototype.update = function(id, roleid) {

    const sql = 'UPDATE employees SET role_id = ? WHERE id = ?;';

    const params = [id, roleid]

    db.promise().query(sql, params)

    .then( console.log('Role change comitted to database.'))

    .catch(console.log)

}

module.exports = Employees;