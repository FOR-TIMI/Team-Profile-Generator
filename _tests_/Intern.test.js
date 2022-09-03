const Intern = require('../lib/Intern')

const timi = new Intern('timi',114256,'timi@gmail.com','University of Toronto')


test('checks if the name exists ', () => {
  expect(timi.getName()).toBe('timi');

});

test('checks if role is Intern',() =>{
  expect(timi.getRole()).toBe('Intern');
})


test('checks if the id is accurate ', () => {
  expect(timi.getId()).toBe(114256)
  });

test('checks if the email is accurate ', () => {
  expect(timi.getEmail()).toBe('timi@gmail.com');

  });

test('checks if the school is accurate ', () => {
  expect(timi.getSchool()).toBe('University of Toronto');

  });

test('should get the questions for all interns', () => {
  const internQuestions = [
    {
        type : 'input',
        name : 'name',
        message: `Enter the team Intern's name`
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
      name : 'school',
      message: 'school'
  }    
]
  expect(timi.getQuestions()).toEqual(internQuestions)
})