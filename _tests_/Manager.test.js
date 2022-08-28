const Manager = require('../lib/Manager')

const chris = new Manager('chris',114256,'chris@gmail.com',5423135135)


test('checks if the name exists ', () => {
    expect(chris.getName()).toBe('chris');
  });
test('checks if the id exists and is the same as the id passed in ', () => {
    expect(chris.getId()).toBe(114256);
  });
test('checks if the email is the same as the email passed in ', () => {
    expect(chris.getEmail()).toBe('chris@gmail.com');
  });
test('checks if the officeNumber is the same as the email passed in ', () => {
    expect(chris.officeNumber).toBe(5423135135);
  });
test('checks if the email is the same as the email passed in ', () => {
    expect(chris.getRole()).toBe('Manager');
  });