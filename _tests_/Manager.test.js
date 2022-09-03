const Manager = require('../lib/Manager')

const chris = new Manager('chris',114256,'chris@gmail.com',5423135135)


test('checks if the name exists ', () => {
  expect(chris.getName()).toBe('chris');

});

test('checks if role is Manager',() =>{
  expect(chris.getRole()).toBe('Manager');
})


test('checks if the id is accurate ', () => {
  expect(chris.getId()).toBe(114256)
  });

test('checks if the email is accurate ', () => {
  expect(chris.getEmail()).toBe('chris@gmail.com');

  });

test('checks if the office number is accurate ', () => {
  expect(chris.officeNumber).toBe(5423135135);

  });

test('should get the questions for all managers', () => {
  const managerQuestions = [
    {
        type : 'input',
        name : 'name',
        message: `Enter the team Manager's name`
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

    },
    {
      type : 'input',
      name : 'officeNumber',
      message: 'Enter your  office number'
  }    
]
  expect(chris.questions).toEqual(managerQuestions)
})