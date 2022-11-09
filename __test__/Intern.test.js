const Intern = require('../lib/Intern')
test("getRole() should return \"Intern\"", () => {
    const expectedValue = "Intern";
    const e = new Intern("Nasir", 1, "nasir@nasir.com",'berkly');
    expect(e.getRole()).toBe(expectedValue);
  });

  test("getSchool() should return \"Nasiromar\"", () => {
    const expectedValue = "stanford";
    const e = new Intern("Nasir", 1, "nasir@nasir.com",expectedValue);
    expect(e.getSchool()).toBe(expectedValue);
  });
