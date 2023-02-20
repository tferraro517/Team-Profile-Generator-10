const Employee = require("./Employee")

class Manager extends Employee {
  constructor(ID, email, name, officeNumber) {
    super(ID, email, name);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;