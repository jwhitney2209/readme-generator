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
  ## Description
  ${data.projectDesc}
  ## Installation Instructions
  ${data.projectInstallInstructions}
  ## App Usage
  ${data.projectAppUsage}
  ## Contribution Guidelines
  ${data.projectGuidelines}
  ## Test Application
  ${data.projectTestApp}
  ## Github Username
  ${data.projectGithubUsername}
  ## Email
  ${data.projectUserEmail}
`;
}

module.exports = generateMarkdown;
