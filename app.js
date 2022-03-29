var inquirer = require('inquirer');

// Questions
// 1. What is the title of your project?
// 2. Please write a small description of your project.
// 3. What are the installation instructions for your project?
// 4. How can this application be used?
// 5. What are the guidelines for contributing to this project?
// 6. How do we test the application?
// 7. What is your Github Username?
// 8. What is your email address?

// README Sections
// 1. Description
// 2. Installation
// 3. Usage
// 4. Contributing
// 5. Tests
// 6. Questions

// License Options LIST
// add badge near top of README 

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

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, ''));
});