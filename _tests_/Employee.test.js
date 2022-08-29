const Employee = require('../lib/Employee')




test('checks if the name exists ', () => {
  const tess = new Employee('tess',114256,'tess@gmail.com');
    expect(tess.getName()).toBe('tess');
    expect(tess.getId()).toBe(114256);
    expect(tess.getEmail()).toBe('tess@gmail.com');
    expect(tess.getRole()).toBe('Employee');
  });

  test('checks if the name exists ', () => {
    const tom = new Employee('tom',11332567,'tom@gmail.com');
      expect(tom.getName()).toBe('tom');
      expect(tom.getId()).toBe(11332567);
      expect(tom.getEmail()).toBe('tom@gmail.com');
      expect(tom.getRole()).toBe('Employee');
    });


