const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern')


class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager'
    }

    getQuestions(){
        return [
            ...super.getQuestions(this.getRole()),
            {
                type : 'input',
                name : 'officeNumber',
                message: 'Enter your  office number'
            }  
        ]
    }

    addEmployee(){
        inquirer
        .prompt([{
            type: 'confirm',
            name: 'addEmployee',
            message: 'Want to add another Employee ? (just hit enter for YES)?',
            default: true,

          }])
        .then((answers) => {
               answers.addEmployee && this.promptEmployees()
            })
     }

     promptEmployees(){
        inquirer
        .prompt([{
            type : 'list',
            name: 'employee',
            message: 'what Employee do you want to add?',
            choices : ['Engineer','Intern']
          }])
          .then((answers) => {
            return answers.employee === 'Engineer' ? this.getEngineerData() : this.getInternData()

          })
     }

     getEngineerData(){
        const questions = new Engineer().getQuestions();

        inquirer
        .prompt(questions)
        .then((answers) => {
            const {id, name, email,github} = answers

         //create a new Intern Instance
        const engineer = new Engineer(name,id,email,github)
        
        engineer.createCard(engineer)
        
        //To go back to add employee options
        this.addEmployee()
        })
     }

     getInternData(){
        const questions = new Intern().getQuestions()

        inquirer
        .prompt(questions)
        .then(answers => {
            const {id, name, email,school} = answers
           

            //create a new Intern Instance
            const intern = new Intern(name,id,email,school)
            
            //To create a new employee card for the manager
            intern.createCard(intern);


            //To go back to add employee options
            this.addEmployee()
        })

     }
     
}



module.exports = Manager