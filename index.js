
//To import inquirer package
const inquirer = require('inquirer');

//To import all classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//To import helper function
const {createTeams} = require('./src/Teams')

//To initiallize the application
function init(){
    const app = {}

    //To save all Employee data
    const allEmployees = []

    // prompt to set manager data 
    app.setManagerData = function(){
     
        //create new instance of the manager class
     const managerQuestions = new Manager().questions;

        inquirer
        .prompt(managerQuestions)
        .then( answers => {
            const {id, name, email,officeNumber} = answers

            //Creates a new Instance of the manager class
            const manager = new Manager(name,id,email,officeNumber)

            //Add manager to the list of employees
            allEmployees.push(manager)
            

            //To add a new employee
            this.addEmployee()
        })

    }
   
    //prompt to select employee to add
     app.promptEmployeeList = function(){
        inquirer
        .prompt([{
            type : 'list',
            name: 'employee',
            message: 'what Employee do you want to add?',
            choices : ['Engineer','Intern']
          }])
          .then((answers) => {
            return answers.employee === 'Engineer' ? this.setEngineerData() : this.setInternData()

          })
     }

    //prompt to add employees
    app.addEmployee = function(){
        inquirer
        .prompt([{
            type: 'confirm',
            name: 'addEmployee',
            message: 'Want to add another Employee ? (just hit enter for YES)?',
            default: true,
          }])
        .then((answers) => {
               answers.addEmployee ? this.promptEmployeeList() : createTeams(allEmployees);
            })
     }

     //prompt to set Engineer data
     app.setEngineerData = function(){
        const questions = new Engineer().getQuestions();

        inquirer
        .prompt(questions)
        .then((answers) => {
        
        const {id, name, email,github} = answers

         //create a new Engineer Instance
        const engineer = new Engineer(name,id,email,github)
        
        //To add the newly created instance of the engineer to the array
        allEmployees.push(engineer)

        
        //To go back to add employee options
        this.addEmployee()
        })
     }
      
     //prompt to set Intern data
     app.setInternData = function(){
        
        //get the questions for Interns
        const questions = new Intern().getQuestions()
       
        inquirer
        .prompt(questions)
        .then(answers => {
            const {id, name, email,school} = answers
           
            //create a new Intern Instance
            const intern = new Intern(name,id,email,school)
            
            //To add the newly created intern to the employee list or array
           allEmployees.push(intern)
           console.log(allEmployees)
          

            //To go back to add employee options
            this.addEmployee()
        })

     }

     app.setManagerData();

}

//To run the application
init();


