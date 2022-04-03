// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMe = generateMarkdown(readMeData);
  fs.writeFile('./README.md', readMe, err => {
    if (err) throw new Error(err);
    console.log('Readme created! Checkout README.md in this directory to see it!');
  });
};

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
  .then((resp) => {
    const readMe = generateMarkdown(resp);
    fs.writeFile('./README.md', readMe, err => {
      if (err) throw new Error(err);
      console.log('Readme created! Checkout README.md in this directory to see it!');
    });
  });
};

// Function call to initialize app
init();
