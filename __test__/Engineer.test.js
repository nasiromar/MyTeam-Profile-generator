const Engineer = require('../lib/Engineer')
test("getRole() should return \"Engineer\"", () => {
    const expectedValue = "Engineer";
    const e = new Engineer("Nasir", 1, "nasir@nasir.com",'adam');
    expect(e.getRole()).toBe(expectedValue);
  });

  test("getGithub() should return \"Nasiromar\"", () => {
    const expectedValue = "Nasiromar";
    const e = new Engineer("Nasir", 1, "nasir@nasir.com",expectedValue);
    expect(e.getGithub()).toBe(expectedValue);
  });
