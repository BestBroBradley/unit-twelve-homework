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
            message: "Please choose from the following options:",
            name: "userchoice",
            type: "rawlist",
            choices: ["View departments breakdown", "View role breakdown", "View employee breakdown", "Add a department", "Add a role", "Add an employee", "Update an employee", "Exit"]
        }
    ]).then(answers => {
        switch (answers.userchoice) {
            case "View departments breakdown":
                break;
            case "View role breakdown":
                break;
            case "View employee breakdown":
                break;
            case "Add a department":
                break;
            case "Add a role":
                break;
            case "Add an employee":
                break;
            case "Update an employee":
                break;
            case "Exit":
                exit();
                break;
            default:
                break;
        }
    })
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`Now connected as id ${connection.threadId}`)
    mainMenu();
})