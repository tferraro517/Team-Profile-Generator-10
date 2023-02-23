// questions in here, inquier lets you ask questions
//index.html need template look at readme gen to look at how i created template, will be template literal and pass infor for each employee
// need fs file
// test instructors in employee
const teamMembers = [];
const fs = require("fs");
const generateTeam = require("./scr/generateTeam");
const inquirer = require("inquirer");
//lib moduels
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Create a function to write README file
function writeToFile(fileName, data) {}

//Create a function to initialize app and questions for readme
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "list",
        name: "role",
        message: "What is your current role?",
        choices: ["Engineer", "Intern", "Manager", "Done"],
      },
    ])
    // generate read me file
    .then((answers) => {
      if (answers.role === "Engineer") {
        askEngineer();
      }
      if (answers.role === "Done") {
        writeHTML();
      }
    });
}
init();
function askEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is your github name?",
      },
    ])
    .then((data) => {});
}
// function to write html file same as line 56
function writeHTML() {
  const readMe = generateTeam(teamMembers);

  fs.writeFile("team.html", readMe, (err) =>
    err ? console.log(err) : console.log("Successfully answered questions!")
  );
}
