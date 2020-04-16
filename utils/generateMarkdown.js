function generateMarkdown(data, githubData) {
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
  ![alt text](${githubData.avatar_url})<br>
  [Email](${githubData.email})
`;
}

module.exports = generateMarkdown;
