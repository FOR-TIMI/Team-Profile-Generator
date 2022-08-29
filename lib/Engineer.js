const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return 'Engineer'
    }

    questions(){
        return [
            ...super.questions(this.getRole()),
            {
                type : 'input',
                name : 'github',
                message: 'Enter your  github username'
            }  
        ]
    }
}


module.exports = Engineer