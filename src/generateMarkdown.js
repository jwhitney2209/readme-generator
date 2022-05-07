// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `
  ![badge](https://img.shields.io/badge/License-${license}-brightgreen)
  `
}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `
  This application is covered by the [${license}](https://opensource.org/licenses/${license}) license.
  `
}


// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License
  `
}


// generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.projectDesc}

  ## Table of Contents:
  - [ Description ](#description)
  - [ Installation ](#installation)
  - [ Usage ](#usage)
  - [ Contributing ](#contributing)
  - [ Tests ](#tests)
  - [ Questions ](#questions)

  ## Installation

  ${data.projectInstallInstructions}
 

  ## Usage
  ${data.projectAppUsage}

  ## Contributing
  ${data.projectGuidelines}

  ## Tests

  ${data.projectTestApp}


  ## Questions
  If you have any questions, you can [email](mailto:${data.projectUserEmail}) me. <br />
  Check out my Github [${data.projectGithubUsername}](https://github.com/${data.projectGithubUsername})

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
`;
}

module.exports = generateMarkdown;
