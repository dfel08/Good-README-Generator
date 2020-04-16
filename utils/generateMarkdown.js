function generateMarkdown(data) {
  return `
  # ${data.title}
  ![alt text](https://img.shields.io/badge/License-${data.license}-red)
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
  ## Author's Github Info
  ![alt text](https://api.github.com/users/${data.github}/html_url)<br>
  <https://api.github.com/users/${data.github}/email>
`;
}

module.exports = generateMarkdown;
