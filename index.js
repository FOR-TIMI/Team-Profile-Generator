const inquirer = require('inquirer');
const Manager = require('./lib/Manager');


function init(){
    let mq = new Manager();
    const app = {}
    
    app.managerInfo = function(){
        inquirer
        .prompt(mq.questions())
        .then(answers => {
              answers.role = mq.getRole()
              console.log(answers)
            })
    }


    app.managerInfo()

}

init()

//Manager
//Name, Employee ID, email address and office number

//option to add an engineer or an intern

// Engineer
//Name, Employee ID, email address, github username then back to menu

//Intern
//Name, Employee ID, email address, school, back to menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// const output = [];

// const questions = [
//       {
//           type : 'input',
//           name : 'Manager name',
//           message: 'Enter the team manager\'s name'
//       },
//       {
//           type : 'input',
//           name : 'id',
//           message: 'Enter a your employee ID'
  
//       },
//       {
//           type : 'input',
//           name : 'email address',
//           message: 'Enter you email address'
  
//       },

      
//   ]



// const choiceOfDepartments= [   // {
//     type: 'confirm',
//     name: 'addDepartment',
//     message: 'Want to add another department ? (just hit enter for YES)?',
//     default: true,
//   },    
// {
//     type : 'list',
//     name: 'department',
//     message: 'what department do you want to add?',
//     choices : ['Engineer','Intern']
//   }]

// inquirer
  
//   .prompt(questions)
//   .then((answers) => {
//     output.push(answers);

//     inquirer
//         .prompt(choiceOfDepartments)
//         .then((answers) => {
//             console.log(answers)
//            if(answers.addDepartment === 'Yes'){
//                 if(answers.department === 'Engineer'){
//                     return askEngineer();
//                 }
//                 else if(answers.department === 'Intern'){
//                     return askIntern()
//                 }
//             }
            
//            })



//   });


//   function askEngineer(){
    // Engineer
//Name, Employee ID, email address, github username then back to menu

//Intern
//Name, Employee ID, email address, school, back to menu
//     const engineerQuestions = [ {
//         type : 'input',
//         name : 'Engineer',
//         message: 'Enter the team Engineer\'s name'
//     },
//     {
//         type : 'input',
//         name : 'id',
//         message: 'Enter a your employee ID'

//     },
//     {
//         type : 'input',
//         name : 'email address',
//         message: 'Enter you email address'

//     }]
//     inquirer
//     .prompt(engineerQuestions)
//     .then((answers) => {
//       output.push(answers);
//       console.log(output)
//       inquirer
//       .prompt(choiceOfDepartments)
//       .then((answers) => {
//         if(answers.addDepartment === 'Yes'){
//             if(answers.department === 'Engineer'){
//                 return askEngineer();
//             }
//             else if(answers.department === 'Intern'){
//                 return askIntern()
//             }
//         }
        
//        })
//     });
//   }

//   function askIntern(){

   
    // Engineer
//Name, Employee ID, email address, github username then back to menu

//Intern
//Name, Employee ID, email address, school, back to menu
//     const internQuestions = [ {
//         type : 'input',
//         name : 'Intern',
//         message: 'Enter the Intern\'s name'
//     },
//     {
//         type : 'input',
//         name : 'id',
//         message: 'Enter a your employee ID'

//     },
//     {
//         type : 'input',
//         name : 'email address',
//         message: 'Enter you email address'

//     }]

//     inquirer
//     .prompt(internQuestions)
//     .then((answers) => {
        
//       output.push(answers);
//       console.log(output)
//       inquirer
//       .prompt(choiceOfDepartments)
//       .then((answers) => {
//         if(answers.addDepartment === 'Yes'){
//             if(answers.department === 'Engineer'){
//                 return askEngineer();
//             }
//             else if(answers.department === 'Intern'){
//                 return askIntern()
//             }
//         }
        
//        })
//     });
//   }


  