function generateMarkdown(data) {
  return `
  # ${data.title}
  <img href="https://img.shields.io/badge/<License>-<${data.license}>-<red>"></img>
  ${data.description}
  ### Table of Contents
    * Installation
    * Usage
    * Contributors
    * Tests
    * Github Info
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Github Info
  https://api.github.com/users/${data.github}/avatar_url
  https://api.github.com/users/${data.github}/email
`;
}

module.exports = generateMarkdown;
