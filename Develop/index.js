  // TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const promptUser = () => {
    return inquirer
    .prompt([
        // what is the title of your project
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your README.md?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    return console.log('Please enter a title');
                }
        },
    },
        // Description 
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description for your project',
        validate: descriptionInput => {
            if (descriptionInput){
                return true
            } else {
                return console.log('Please enter a description')
            }
        },
    },   
    // ToC

    {
        type: 'confirm',
        name: 'toc',
        message: 'Would you like to add a table of contents?',
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions', 
    },
    // Usage

    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage examples'
    },
    // Licenses
    {
        type: 'input',
        name: 'license',
        message: 'List your licenses',
    },
    // Contributing
    {
        type: 'input',
        name: 'contributors',
        message: 'Enter comments on how to contribute',
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Explain the testing procedures',
    },
    {
        type:'input',
        name: 'questions-username',
        message: 'Enter your GitHub username',
    },
    {
        type:'input',
        name: 'questions-email',
        message: 'Enter your email address',
    }
         
        // Questions 
    ])
    .then(input => console.log(input))
};   
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser();