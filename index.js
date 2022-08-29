const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');




function init(){
    const managerQuestions = new Manager().getQuestions();
    const app = {}
    app.setManagerData = function(){
        inquirer
        .prompt(managerQuestions)
        .then(answers => {
            const {id, name, email,officeNumber} = answers

            //create a new manager Instance
            const manager = new Manager(name,id,email,officeNumber)

            //To create a new employee card for the manager
            manager.createEmployeeCard();

            //To add a new employee
            manager.addEmployee()
        })

    }
    app.setManagerData();
}

init();






  