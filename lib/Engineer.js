const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(ID, email, name, gitHub) {
    super(ID, email, name);
    this.gitHub = gitHub;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.gitHub
  }
}
module.exports = Engineer;