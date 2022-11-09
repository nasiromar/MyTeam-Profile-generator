const Manager = require('../lib/Manager')
test("getRole() should return \"Manager\"", () => {
    const expectedValue = "Manager";
    const e = new Employee("Nasir", 1, "nasir@nasir.com",'123');
    expect(e.getRole()).toBe(expectedValue);
  });

  test("getOfficeNumber() should return \"Nasiromar\"", () => {
    const expectedValue = "123";
    const e = new Manager("Nasir", 1, "nasir@nasir.com",expectedValue);
    expect(e.getOfficeNumber()).toBe(expectedValue);
  });
