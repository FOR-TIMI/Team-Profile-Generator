const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern')

Intern

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager'
    }

    questions(){
        return [
            ...super.questions(this.getRole()),
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
        const engineer = new Engineer();

        inquirer
        .prompt(engineer.questions())
        .then((answers) => {
            const {id, name, email,github} = answers
            engineer.id = id;
            engineer.name = name;
            engineer.email = email;
            engineer.github = github;
            engineer.role = engineer.getRole();
       
        
            console.log(engineer)
            this.addEmployee()
        })
     }

     getInternData(){
        const intern = new Intern()

        inquirer
        .prompt(intern.questions())
        .then(answers => {
            const {id, name, email,school} = answers

            intern.id = id;
            intern.name = name;
            intern.email = email;
            intern.school = school;
            intern.role = intern.getRole();


            console.log(intern);


            this.addEmployee()
        })

     }
}



module.exports = Manager