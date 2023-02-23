const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should bring up Manager name", () => {
    const testName = "Norman"
    const employee = new Manager (1, testName, "norman@test.com")
    expect(employee.name).toBe(testName);
  })
})

describe("Manager", () => {
  it("should bring up Manager ID", () => {
    const ID = 1
    const employee = new Manager (ID, "Norman", "norman@test.com")
    expect(employee.ID).toBe(ID);
  })
})
describe("Manager", () => {
  it("should bring up Manager Email", () => {
    const email = "norman@test.com"
    const employee = new Manager (1, "Norman", email)
    expect(employee.email).toBe(email);
  })
})

test('test if we can get the name from the get testName() method', () => { 
  const email = "norman@test.com"
  const employee = new Manager (1, "Norman", email)
  expect(employee.getName()).toBe('Norman');
});

test('test if we can get the name from the get testName() method', () => {
  const ID = 1
  const employee = new Manager (ID, "Norman", "norman@test.com")
  expect(employee.getID()).toBe(1);
});

test('test if we can get the name from the get testName() method', () => {
  const email = "norman@test.com"
  const employee = new Manager (1, "Norman", email)
  expect(employee.getEmail()).toBe(email);
});

test('test if we can get the name from the get testName() method', () => {
  const email = "norman@test.com"
  const employee = new Manager (1, "Norman", email)
  expect(employee.getRole()).toBe('Manager');
});

test('test if we can get the name from the get testName() method', () => {
  const officeNumber = 10
  const email = "Norman@Norman.com"
  const employee = new Manager (1, "Norman", email, officeNumber)
  expect(employee.getOfficeNumber()).toBe(10);
});