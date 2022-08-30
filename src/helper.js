const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const classes = { Intern, Engineer,Manager};
const fs = require('fs');



function setData(role){
    try{
        //creating a new dynamic employee based on their role
        role = classes[role]
        
        //Create a new employee instance
        const Employee = new role()


        //to get all the properties of the new employee depending on their role
        const props = Object.getOwnPropertyNames(Employee);


        //set all properties of the new employee to it argument
        props.forEach((property,i) => {
        Employee[property] = arguments[i+1]
            })

            console.log(Employee)

           
    }
    catch(e){
        console.log('Only Managers can add new employees',e)
    }
    

}

function setFileHtml(data){
    return `${data}`
}

       
function appendToFile(data){
  fs.appendFile('team.html',data,(err) =>{
    console.log(err)
  })
};  



