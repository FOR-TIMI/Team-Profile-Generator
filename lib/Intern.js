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
}

const timi = new Intern('timi',114256,'timi@gmail.com','University of Toronto')
console.log(`name: ${timi.name} \n role: ${timi.getRole()} \n school: ${timi.getSchool()}`)

module.exports = Intern