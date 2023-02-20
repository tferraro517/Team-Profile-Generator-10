const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should bring up Employee name", () => {
    const testName = "Norman"
    const employee = new Employee (1, testName, "norman@test.com")
    expect(employee.name).toBe(testName);
  })
})
// do id where testname is
