const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const classes = { Intern, Engineer,Manager}


    //  const {id, name, email,officeNumber} = answers
    //           manager.id = id;
    //           manager.name = name;
    //           manager.email = email;
    //           manager.officeNumber = officeNumber;
    //           manager.role = manager.getRole();
 
    //           manager.addEmployee();



function setData(role){
    try{
//creating a new dynamic employee based on their role
role = classes[role]
     
const Employee = new role()

//to get all the properties of the new employee depending on their role
const props = Object.getOwnPropertyNames(Employee);



//set all properties of the new employee to it argument
props.forEach((property,i) => {
   Employee[property] = arguments[i+1]
})

// Manager.addEmployee()

console.log(Employee) 
    }
    catch(e){
        console.log('Only Managers can add new employees',e)
    }
    

}

setData('Manager','chris',2323,'chris@gmail.com','UofT')