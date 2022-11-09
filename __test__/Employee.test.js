const Employee = require('../lib/Employee')
test("getRole() should return \"Employee\"", () => {
    const expectedValue = "Employee";
    const e = new Employee("Nasir", 1, "nasir@nasir.com");
    expect(e.getRole()).toBe(expectedValue);
  });

  test("getName() should return \"Nasir\"", () => {
    const expectedValue = "Nasir";
    const e = new Employee("Nasir", 1, "nasir@nasir.com");
    expect(e.getName()).toBe(expectedValue);
  });
