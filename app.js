const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// const writeFileAsync = 
// function promptUser() {
//     return 
inquirer
  .prompt([
    {
      type: "list",
      name: "role",
      message: "What is employee's role in the company?",
      choices: [
        "Manager",
        "Engineer",
        "Intern"
      ]
    },
    {
      type: "input",
      name: "email",
      message: "Please enter employee's email address:"
    }
])
.then(function(data) {
  let filename = data.name.toLowerCase().split(' ').join('') +
  ".html";
  fs.writeFile(filename, HTML.stringify(data, null, '\t'), function(err) {
   if (err) {
       return console.log(err);
   }
   console.log("Success!");
});
});