const Employee = require("./Employee")

class Intern extends Employee {
  constructor(ID, email, name, school) {
    super(ID, email, name);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school
  }
}
module.exports = Intern;