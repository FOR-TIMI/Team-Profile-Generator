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

    getQuestions(){
        return [
            ...super.getQuestions(this.getRole()),
            {
                type : 'input',
                name : 'school',
                message: 'school'
            }  
        ]
    }
}


module.exports = Intern