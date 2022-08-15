const db = require('../db/connection')

function Roles() {}
Roles.prototype.get = function() {

    const sql = 'SELECT roles.*, departments.name AS department FROM roles LEFT JOIN departments ON roles.dep_id = departments.id;'

    db.promise().query(sql)
    .then( ([rows,fields]) => {

        console.table('Roles', rows);

    })
    .catch(console.log)
}

Roles.prototype.add = function(title, salary, depid) {

    const sql = 'INSERT INTO roles (title, salary, dep_id) VALUES (?, ?, ?)'

    const params = [title, salary, depid];

    db.promise().query(sql, params)

    .then( console.log('role added to database.'))

    .catch(console.log)
}

module.exports = Roles;