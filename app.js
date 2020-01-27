const inquirer = require("inquirer")
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysqlis110%fabulous!',
    database: 'roster_db'
});


const addDepartment = (data) => {
// function to add new department
}

const addDepartmentQs = () => {
// function to call up list of inquirer questions to add department
}

const addRole = (data) => {
// function to add new role
}

const addRoleQs = () => {
// functin to call up list of inquirer questions to add role
}

const addEmployee = (data) => {
// function to add new employee
}

const addEmployeeQs = () => {
// function to call of list of inquirer questions to add employee
}

const viewDepartments = () => {
// function to view a list of all departments
}

const viewRoles = () => {
// funcion to view a list of all roles
}

const viewEmployees = () => {
// function to view a list of all employees
}

const exit = () => {
    console.log(`Thank you for using our program today.`)
    connection.end();
}

const mainMenu = () => {
    console.log(`Please choose from the following options:`)
    inquirer.prompt([
        {
            message: "View departments breakdown",
            name: "viewdepts"
        },
        {
            message: "View role breakdown",
            name: "viewroles"
        },
        {
            message: "View employee breakdown",
            name: "viewemps"
        },
        {
            message: "Add a department",
            name: "adddepts"
        },
        {
            message: "Add a role",
            name: "addrole"
        },
        {
            message: "Add an employee",
            name: "addemp"
        },
        {
            message: "Update an employee",
            name: "updateemp"
        }
        {
            message: "Exit",
            name: "exit"
        }
    ])
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`Now connected as id ${connection.threadId}`)
    mainMenu();
})