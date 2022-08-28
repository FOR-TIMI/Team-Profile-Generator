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

module.exports = Employee



