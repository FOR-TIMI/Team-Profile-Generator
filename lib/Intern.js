const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return 'Intern'
    }

    questions(){
        return [
            ...super.questions(this.getRole()),
            {
                type : 'input',
                name : 'school',
                message: 'school'
            }  
        ]
    }
}


module.exports = Intern