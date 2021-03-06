  // TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const {writeFile} = require('../Develop/writefile')

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
        type: 'checkbox',
        name: 'license',
        choices: ['MIT', 'BSD','MPL'],
        message: 'Select your licenses',
    },
    // Contributing
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter comments on how to contribute',
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Explain the testing procedures',
    },
    // Questions 
    {
        type:'input',
        name: 'username',
        message: 'Enter your GitHub username',
    },
    {
        type:'input',
        name: 'email',
        message: 'Enter your email address',
    }
        
    ])
   
};   

promptUser()
    .then(readmeData => {
        console.log(readmeData);
        return generateMarkdown(readmeData);
    })
    .then(reademePage =>{
        return writeFile(reademePage)
    });


 
    
