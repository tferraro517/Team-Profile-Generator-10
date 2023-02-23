const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should bring up Employee name", () => {
    const testName = "Norman"
    const employee = new Employee (1, testName, "norman@test.com")
    expect(employee.name).toBe(testName);
  })
})

describe("Employee", () => {
  it("should bring up Employee ID", () => {
    const ID = 1
    const employee = new Employee (ID, "Norman", "norman@test.com")
    expect(employee.ID).toBe(ID);
  })
})
describe("Employee", () => {
  it("should bring up Employee Email", () => {
    const email = "norman@test.com"
    const employee = new Employee (1, "Norman", email)
    expect(employee.email).toBe(email);
  })
})

test('test if we can get the name from the get testName() method', () => { 
  const email = "norman@test.com"
  const employee = new Employee (1, "Norman", email)
  expect(employee.getName()).toBe('Norman');
});

test('test if we can get the name from the get testName() method', () => {
  const ID = 1
  const employee = new Employee (ID, "Norman", "norman@test.com")
  expect(employee.getID()).toBe(1);
});

test('test if we can get the name from the get testName() method', () => {
  const email = "norman@test.com"
  const employee = new Employee (1, "Norman", email)
  expect(employee.getEmail()).toBe(email);
});

test('test if we can get the name from the get testName() method', () => {
  const email = "norman@test.com"
  const employee = new Employee (1, "Norman", email)
  expect(employee.getRole()).toBe('Employee');
});
