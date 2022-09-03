const Employee = require('./Employee');



class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

  getRole(){
        return 'Manager'
    }

  get questions(){
        return [
            ...super.getQuestions(this.role),
            {
                type : 'input',
                name : 'officeNumber',
                message: 'Enter your  office number'
            }  
        ]
    }
     
}



module.exports = Manager