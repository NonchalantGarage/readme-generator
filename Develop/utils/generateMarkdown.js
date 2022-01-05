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


module.exports = input => {
  return `# ${input.title}


${input.description}

{:toc}

## Installation

${input.installation}


## Usage

${input.usage}


## License



## Contributing

${input.contributions}

## Tests

${input.tests}

## Questions

For questions, please reach out via GitHub or the email below.

${input.username}

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
