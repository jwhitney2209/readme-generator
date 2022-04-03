// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  <a name="desc"></a>
  ## Description
  ${data.projectDesc}

  ## Table of Contents:
  1. [ Description ](#desc)
  2. [ Installation ](#instructions)
  3. [ Usage ](#usage)
  4. [ Contributing ](#guidelines)
  5. [ Tests ](#test)
  6. [ Questions ](#questions)
  7. [ Email ](#email)

  <a name="instructions"></a>
  ## Installation
  ${data.projectInstallInstructions}

  <a name="usage"></a>
  ## Usage
  ${data.projectAppUsage}

  <a name="guidelines"></a>
  ## Contributing
  ${data.projectGuidelines}

  <a name="test"></a>
  ## Tests
  ${data.projectTestApp}

  <a name="questions"></a>
  ## Questions
  If you have any questions, you can [email](mailto:${data.projectUserEmail}) me.
  Check out my [Github](https://github.com/${data.projectGithubUsername})
  
`;
}

module.exports = generateMarkdown;
