const inquirer = require('inquirer');
const Manager = require('./lib/Manager');



function init(){
    let manager = new Manager();
    const app = {}
    app.setManagerData = function(){
        inquirer
        .prompt(manager.questions())
        .then(answers => {
              const {id, name, email,officeNumber} = answers
              manager.id = id;
              manager.name = name;
              manager.email = email;
              manager.officeNumber = officeNumber;
              manager.role = manager.getRole();
 
              manager.addEmployee();
            })
    }
    app.setManagerData();

}






init();






  