const inquirer = require('inquirer');
const Manager = require('./lib/Manager');



function init(){
   
    const app = {}
    app.setManagerData = function(){
        const questions = new Manager('chris',1234124,'chris@ym.com',21412)
        var props = Object.getOwnPropertyNames(questions);
        // const props = Object.getOwnPropertyNames(role);

        //loop through arguments
    
        //set property to the argument
        for(let property of props){
            Manager[property] = property
        }

        console.log(questions)
        

        // inquirer
        // .prompt(questions())
        // .then(answers => {
        //       const {id, name, email,officeNumber} = answers
        //       manager.id = id;
        //       manager.name = name;
        //       manager.email = email;
        //       manager.officeNumber = officeNumber;
        //       manager.role = manager.getRole();
 
        //       manager.addEmployee();
        //     })
    }
    app.setManagerData();

}






init();






  