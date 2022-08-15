const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const Departments = require('./utils/departments');
const Roles = require('./utils/roles');
const Employees = require('./utils/employees');

function initApp () {}

initApp.prototype.startPrompt = function() {

    inquirer
    .prompt({

        type: 'list',
        name: 'option',
        message: "What would you like to do?",
        choices: [

            'View All Departments',
            'Add a Department',
            'View All Roles',
            'Add a Role',
            'View all Employees',
            'Add an Employee',
            "Update an Employee's role",
            "Quit"
        ]
    })
    .then(choice => {

        if(choice.option === 'View All Departments') {

            new Departments().get();
            this.returnPrompt();

        } else if (choice.option === 'Add a Department') {
            
            this.addDep();

        } else if (choice.option === 'View All Roles') {

            new Roles().get()
            this.returnPrompt();

        } else if (choice.option === 'Add a Role') {

            this.addRole();

        } else if (choice.option === 'View all Employees') {

            new Employees().get();
            this.returnPrompt();

        } else if (choice.option === 'Add an Employee') {
            console.log("add employee")
        } else if (choice.option === "Update an Employee's role") {
            console.log("update an employee")
        } else if (choice.option === "Quit") {
            console.log("goodbye!")
            return;
        }
    })


}

initApp.prototype.addDep = function() {

    inquirer
    .prompt ({

        type: "input",
        name: "depname",
        message: "please enter the new Department's name.",
        validate: depInput => {

            if (depInput) {
                return true;
            } else {
                console.log("Please enter your new Department's name.");
                return false;
            }
        }

    })
    .then((input) => {

        new Departments().add(input.depname);
        this.returnPrompt();
    })
}

initApp.prototype.addRole = function() {

    inquirer
    .prompt ([

        {

            type: "input",
            name: "rolename",
            message: "Please enter the new position's title.",
            validate: input => {

                if (input) {
                    return true;
                } else {
                    console.log('Please enter the position title');
                    return false;
                }
            }

        },
        {

            type: "input",
            name: "salary",
            message: "Please enter the new position's salary",
            validate: input => {

                if(input.match(/^[0-9]+$/) != null)
                {
                    return true;
                }
                else
                {   
                    console.log('Please enter a salary amount.');
                    return false;
                }
            }

        },
        {

            type: "list",
            name: "department",
            message: "Please choose the new role's associated department",
            choices: []

        },
        
    ])
    .then((input) => {

        // new Roles().add();
        // this.returnPrompt();
    })

}

initApp.prototype.returnPrompt = function() {

    inquirer
    .prompt({

        type: 'list',
        name: 'more',
        message: "Would you like to return to the main menu?",
        choices: [

            "return",
            "quit"
        ]

    })

    .then(choice => {

        if(choice.more === "return") {

            this.startPrompt();
        }
        else if(choice.more === "quit") {

            console.log("goodbye!")

        }
    })
}

// new initApp().startPrompt();

new Departments().getArray();



