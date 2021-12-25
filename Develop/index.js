  // TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const test ="test";
console.log(test);


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
            name: 'Description',
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
        // Installation
        // Usage
        // License
        // Contributing
        // Tests 
        // Questions 
    ]);
};   
// TODO: Create an array of questions for user input
const questions = [
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser();