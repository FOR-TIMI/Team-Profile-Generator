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

    getQuestions(){
        return [
            ...super.getQuestions(this.getRole()),
            {
                type : 'input',
                name : 'github',
                message: 'Enter your  github username'
            }  
        ]
    }
}


module.exports = Engineer