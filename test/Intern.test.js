const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should bring up Intern name", () => {
    const testName = "Norman"
    const employee = new Intern (1, testName, "norman@test.com")
    expect(employee.name).toBe(testName);
  })
})

describe("Intern", () => {
  it("should bring up Intern ID", () => {
    const ID = 1
    const employee = new Intern (ID, "Norman", "norman@test.com")
    expect(employee.ID).toBe(ID);
  })
})
describe("Intern", () => {
  it("should bring up Intern Email", () => {
    const email = "norman@test.com"
    const employee = new Intern (1, "Norman", email)
    expect(employee.email).toBe(email);
  })
})

test('test if we can get the name from the get testName() method', () => { 
  const email = "norman@test.com"
  const employee = new Intern (1, "Norman", email)
  expect(employee.getName()).toBe('Norman');
});

test('test if we can get the name from the get testName() method', () => {
  const ID = 1
  const employee = new Intern (ID, "Norman", "norman@test.com")
  expect(employee.getID()).toBe(1);
});

test('test if we can get the name from the get testName() method', () => {
  const email = "norman@test.com"
  const employee = new Intern (1, "Norman", email)
  expect(employee.getEmail()).toBe(email);
});

test('test if we can get the name from the get testName() method', () => {
  const email = "norman@test.com"
  const employee = new Intern (1, "Norman", email)
  expect(employee.getRole()).toBe('Intern');
});

test('test if we can get the name from the get testName() method', () => {
  const school = "Yale"
  const email = "Norman@Norman.com"
  const employee = new Intern (1, "Norman", email, school)
  expect(employee.getSchool()).toBe('Yale');
});