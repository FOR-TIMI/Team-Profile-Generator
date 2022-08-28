class Employee{
    constructor(name,id,email){
        this.name = name
        this.id = id
        this.email = email
    }

    getName(){
     return this.name
    }

    getId(){
      return this.id
    }
    getEmail(){
     return this.email
    }
    getRole(){
      return `Employee`
    }
}

const james = new Employee('james',114256,'james@gmail.com')
console.log(`name: ${james.name} \n role: ${james.getRole()}`)

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
}

const simi = new Engineer('simi',114256,'simi@gmail.com','For-Timi')
console.log(`name: ${simi.name} \n role: ${simi.getRole()} \n github: ${simi.getGithub()}`)

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