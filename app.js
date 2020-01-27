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