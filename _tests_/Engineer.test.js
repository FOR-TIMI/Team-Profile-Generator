const Engineer = require('../lib/Engineer')

const simi = new Engineer('simi',114256,'simi@gmail.com','For-Timi')



 test('checks if the name exists ', () => {
    expect(simi.getName()).toBe('simi');

  });

  test('checks if role is Engineer',() =>{
    expect(simi.getRole()).toBe('Engineer');
  })

  
  test('checks if the id is accurate ', () => {
    expect(simi.getId()).toBe(114256)
    });

  test('checks if the email is accurate ', () => {
    expect(simi.getEmail()).toBe('simi@gmail.com');

    });

  test('checks if the github is accurate ', () => {
    expect(simi.getGithub()).toBe('For-Timi');

    });

  test('should get the questions for all engineers', () => {
    const engineerQuestions = [
      {
          type : 'input',
          name : 'name',
          message: `Enter the team Engineer's name`
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
        name : 'github',
        message: 'Enter your  github username'
    }    
  ]
    expect(simi.getQuestions()).toEqual(engineerQuestions)
  })
