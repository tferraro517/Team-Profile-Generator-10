const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should bring up Engineer name", () => {
    const testName = "Norman"
    const employee = new Engineer (1, testName, "norman@test.com")
    expect(employee.name).toBe(testName);
  })
})

describe("Engineer", () => {
  it("should bring up Engineer ID", () => {
    const ID = 1
    const employee = new Engineer (ID, "Norman", "norman@test.com")
    expect(employee.ID).toBe(ID);
  })
})
describe("Engineer", () => {
  it("should bring up Engineer Email", () => {
    const email = "norman@test.com"
    const employee = new Engineer (1, "Norman", email)
    expect(employee.email).toBe(email);
  })
})

test('test if we can get the name from the get testName() method', () => { 
  const email = "norman@test.com"
  const employee = new Engineer (1, "Norman", email)
  expect(employee.getName()).toBe('Norman');
});

test('test if we can get the name from the get testName() method', () => {
  const ID = 1
  const employee = new Engineer (ID, "Norman", "norman@test.com")
  expect(employee.getID()).toBe(1);
});

test('test if we can get the name from the get testName() method', () => {
  const email = "norman@test.com"
  const employee = new Engineer (1, "Norman", email)
  expect(employee.getEmail()).toBe(email);
});

test('test if we can get the name from the get testName() method', () => {
  const email = "norman@test.com"
  const employee = new Engineer (1, "Norman", email)
  expect(employee.getRole()).toBe('Engineer');
});

test('test if we can get the name from the get testName() method', () => {
  const gitHub = "engineer123"
  const email = "Norman@Norman.com"
  const employee = new Engineer (1, "Norman", email, gitHub)
  expect(employee.getGithub()).toBe('engineer123');
});