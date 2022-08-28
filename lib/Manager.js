const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager'
    }
}

const chris = new Manager('chris',114256,'chris@gmail.com',5423135135)
console.log(`name: ${chris.name} \n role: ${chris.getRole()} \n office number: ${chris.officeNumber}`)