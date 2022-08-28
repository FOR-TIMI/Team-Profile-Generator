const Employee = require('../lib/Employee')

const tess = new Employee('tess',114256,'tess@gmail.com');


test('checks if the name exists ', () => {
    expect(tess.getName()).toBe('tess');
  });
test('checks if the id exists and is the same as the id passed in ', () => {
    expect(tess.getId()).toBe(114256);
  });
test('checks if the email is the same as the email passed in ', () => {
    expect(tess.getEmail()).toBe('tess@gmail.com');
  });
test('checks if the email is the same as the email passed in ', () => {
    expect(tess.getRole()).toBe('Employee');
  });