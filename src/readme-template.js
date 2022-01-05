const generateMarkdown = (input)=>{
return `# ${input.title}


${input.description}

${input.toc}


## Installation

${input.installation}


## Usage

${input.usage}


## License
${input.MIT}
${input.BSD}
${input.GPL}



## Contributing

${input.contributions}

## Tests

${input.tests}

## Questions

For questions, please reach out via GitHub or the email below.

${input.questions-username}
${input.questions-email}
`
}

module.exports= generateMarkdown();