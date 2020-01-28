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
    console.log(data)
    connection.query(`INSERT INTO department(name) VALUES (?)`, [data.newdept], (err, results) => {
        if (err) throw err;
        console.log(`\nSuccessfully added ${data.newdept} to the directory.\n`)
        menuReturn();
    })
}

const addDepartmentQs = () => {
    // function to call up list of inquirer questions to add department

    inquirer.prompt([
        {
            message: "What department would you like to add?",
            name: "newdept"
        },
    ]).then (function(response) {
        addDepartment(response)
    })
}

const addRole = (data) => {
    let deptID
    connection.query("SELECT * FROM department", (err, results) => {
        if (err) throw err;
        for (const result of results) {
            if (result.name === data.whichdept) {
                deptID = result.id
            }
        }
    })
    connection.query(`INSERT INTO role (title, salary, department, department_id) VALUES (?, ?, ?, ?)`, [data.title, data.salary, data.department, deptID], (err, results) => {
        if (err) throw err;
        console.log(`\nSuccessfully added ${data.title} to the role directory.\n`)
        menuReturn();
    })
}

const addRoleQs = () => {
    // function to call up list of inquirer questions to add role

    const choicesArray = []
    connection.query("SELECT * FROM department", (err, results) => {
        if (err) throw err;
        for (const result of results) {
            choicesArray.push(result.name)
        }
        inquirer.prompt([
            {
                message: "Which department would you like to add a role to?",
                name: "department",
                type: "list",
                choices: choicesArray,
            },
            {
                message: "What role would you like to add?",
                name: "title"
            },
            {
                message: "What salary would you like to attach to this role?",
                name: "salary"

            }
        ]).then((response) => {
            addRole(response);
        })
    })
}

const addEmployee = (data) => {
    // function to add new employee
}

const addEmployeeQs = () => {
    // function to call of list of inquirer questions to add employee
}

const updateEmployee = () => {
    // function to update an employee    
}

const updateEmployeeQs = () => {
    // function to call list of inquirer questions to update employee
}

const viewDepartments = () => {
    // function to view a list of all departments
    connection.query("SELECT * FROM department", (err, results) => {
        if (err) throw err;
        console.log(`Current Department Listing:`)
        for (const result of results) {
            console.log(`${result.id} | ${result.name}`)
        }
        menuReturn();
    })
}

const viewRoles = () => {
    // funcion to view a list of all roles
    connection.query("SELECT * FROM role", (err, results) => {
        if (err) throw err;
        console.log(`Current Role Listing By Department:\n`)
        for (const result of results) {
            console.log(`${result.id} | ${result.title}`)
        }
        console.log(`\n`)
        menuReturn();
    })
}

const viewEmployees = () => {
    // function to view a list of all employees
}

const menuReturn = () => {
    inquirer.prompt([
        {
            message: "Would you like to Return to Menu or Exit?",
            name: "menu",
            type: "list",
            choices: ["Return to Menu", "Exit"]
        }
    ]).then(function (response) {
        if (response.menu === "Return to Menu") {
            mainMenu();
        } else { exit() }
    })
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
                viewDepartments();
                break;
            case "View role breakdown":
                viewRoles();
                break;
            case "View employee breakdown":
                viewEmployees();
                break;
            case "Add a department":
                addDepartmentQs();
                break;
            case "Add a role":
                addRoleQs();
                break;
            case "Add an employee":
                addEmployeeQs();
                break;
            case "Update an employee":
                updateEmployeeQs();
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