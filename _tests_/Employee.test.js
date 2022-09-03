const Employee = require('../lib/Employee')


const tom = new Employee('tom',11332567,'tom@gmail.com');



 test('checks if the name exists ', () => {
    expect(tom.getName()).toBe('tom');

  });

  test('checks if role is employee',() =>{
    expect(tom.getRole()).toBe('Employee');
  })

  
  test('checks if the id is accurate ', () => {
    expect(tom.getId()).toBe(11332567)
    });

  test('checks if the email is accurate ', () => {
    expect(tom.getEmail()).toBe('tom@gmail.com');

    });

  test('should get the questions for all employees', () => {
    const employeeQuestions = [
      {
          type : 'input',
          name : 'name',
          message: `Enter the team Employee's name`
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
    expect(tom.getQuestions()).toEqual(employeeQuestions)
  })



