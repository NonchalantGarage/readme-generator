// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license){
    return '';
  }
  else {
    return ` 
    ![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
}

const renderLicenseLink = license => {
  switch (license) {
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    case "MPL":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    case "PERL":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    default:
      return "";

  }
}

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// `

// `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// `

// `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

// `

// `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license){
    return '';
  }
  return renderLicenseBadge(license)
};
// TODO: Create a function to generate markdown for README


module.exports = input => {
  return `# ${input.title}


${input.description}

## Table of Contents
    
[Installation](#installation)
[Usage](#usage)
[License](#licenses)

## Installation

${input.installation}


## Usage

${input.usage}


## Licenses


${renderLicenseSection(input.license)}


## Contributing

${input.contributions}

## Tests

${input.tests}

## Questions

For questions, please reach out via GitHub or the email below.

https://github.com/${input.username}

${input.email}
`
}
;
// const mockData = {
//   title: 'Read Me Automation',
//   description: 'Project to generate read me',
//   installation: 'Installation package',
//   usage: 'Use it as promised',
//   license: [ 'MIT', 'BSD', 'GPL' ],
//   contributions: '',
//   tests: 'Test using TDD',
//   username: 'NonchalantGarage',
//   email: 'my Email'
// }


// console.log(generateMarkdown(mockData));
