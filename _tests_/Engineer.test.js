const Engineer = require('../lib/Engineer')

const simi = new Engineer('simi',114256,'simi@gmail.com','For-Timi')


test('checks if the name exists ', () => {
    expect(simi.getName()).toBe('simi');
  });
test('checks if the id exists and is the same as the id passed in ', () => {
    expect(simi.getId()).toBe(114256);
  });
test('checks if the email is the same as the email passed in ', () => {
    expect(simi.getEmail()).toBe('simi@gmail.com');
  });
test('checks if the gitHub account is the same as the email passed in ', () => {
    expect(simi.getGithub()).toBe('For-Timi');
  });
test('checks if the email is the same as the email passed in ', () => {
    expect(simi.getRole()).toBe('Engineer');
  });