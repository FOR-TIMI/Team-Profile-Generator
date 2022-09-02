const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const {saveData} = require('./src/fileData')





function init(){
    const managerQuestions = new Manager().questions;
    const app = {}
    app.setManagerData = function(){
        inquirer
        .prompt(managerQuestions)
        .then(answers => {
            const {id, name, email,officeNumber} = answers

            //create a new manager Instance
            const manager = new Manager(name,id,email,officeNumber)

            // employeeArr.push(manager);

            //To create a new employee card for the manager
            // manager.createCard(manager);

            saveData({data:{manager}})

            //To add a new employee
            manager.addEmployee()
        })

    }
    app.setManagerData();
}
init();






  