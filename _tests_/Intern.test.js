const Intern = require('../lib/Intern')

const timi = new Intern('timi',114256,'timi@gmail.com','University of Toronto')


test('checks if the name exists ', () => {
    expect(timi.getName()).toBe('timi');
  });
test('checks if the id exists and is the same as the id passed in ', () => {
    expect(timi.getId()).toBe(114256);
  });
test('checks if the email is the same as the email passed in ', () => {
    expect(timi.getEmail()).toBe('timi@gmail.com');
  });
test('checks if the University is the same as the email passed in ', () => {
    expect(timi.getSchool()).toBe('University of Toronto');
  });
test('checks if the email is the same as the email passed in ', () => {
    expect(timi.getRole()).toBe('Intern');
  });