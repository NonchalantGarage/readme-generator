  // TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

// fs.writeFile('README.MD', generateReadMe(), err =>{
//     if(err) throw err;

//     console.log('README complete! Check out dist directory to see the output!');

// })

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
        choices: ['MIT', 'BSD', 'GPL'],
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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
promptUser()
    .then(readmeData => {
        console.log(readmeData)
    });


    //     // return generateMarkdown(readmeData);
    // })
    // .then(reademePage =>{
    //     return fs.writeFile(reademePage)
    // });
