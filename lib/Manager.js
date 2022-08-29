const Employee = require('./Employee')

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
                name : ' office number',
                message: 'Enter your  office number'
            }  
        ]
    }
}



module.exports = Manager