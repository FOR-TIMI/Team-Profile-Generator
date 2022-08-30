
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

    createCard(data){
       const cardHTML = setFileHtml(data);
       appendToFile(cardHTML);  
    }


    getQuestions(){
      return  [
          {
              type : 'input',
              name : 'name',
              message: `Enter the team ${this.getRole()}'s name`
          },
          {
              type : 'input',
              name : 'id',
              message: 'Enter a your employee ID'
      
          },
          {
              type : 'input',
              name : 'email',
              message: 'Enter you email address'
      
          }
    
          
      ]
  }

  
}

module.exports = Employee


