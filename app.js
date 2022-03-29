// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const license = require(./utils);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'projectDesc',
    message: 'Please write a small description of your project.'
  },
  {
    type: 'input',
    name: 'projectInstallInstructions',
    message: 'What are the installation instructions for your project?'
  },
  {
    type: 'input',
    name: 'projectAppUsage',
    message: 'How can this application be used?'
  },
  {
    type: 'input',
    name: 'projectGuidelines',
    message: 'What are the guidelines for contributing to this project?'
  },
  {
    type: 'input',
    name: 'projectTestApp',
    message: 'How do we test the application?'
  },
  {
    type: 'input',
    name: 'projectGithubUsername',
    message: 'What is your Github Username?'
  },
  {
    type: 'input',
    name: 'projectUserEmail',
    message: 'What is your email address?'
  },
];

inquirer.prompt(questions).then((resp) => {
  // console.log(JSON.stringify(resp, null, ''));
  console.log(`Project Title: ${resp.projectTitle}`);
  console.log(`Description: ${resp.projectDesc}`);
  console.log(`Installation Instructions: ${resp.projectInstallInstructions}`);
  console.log(`App Usage: ${resp.projectAppUsage}`);
  console.log(`Contribution Guidelines: ${resp.projectGuidelines}`);
  console.log(`How To Test: ${resp.projectTestApp}`);
  console.log(`Github Username: ${resp.projectGithubUsername}`);
  console.log(`Email: ${resp.projectUserEmail}`);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
