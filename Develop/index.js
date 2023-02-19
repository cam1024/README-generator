// declaring all the global require's
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
console.log("Welcome to my README generator")
console.log("Answer the following questions to generate a high quality README for your project")

// TODO: Create an array of questions for user input
const questions = [
    // name of the project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: your_Input => {
            if (your_Input){
                return true;
            } else {
                console.log('Enter a title to continue!');
                return false;
            }
        }
    },
    //Description of the project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.',
        validate: your_Description => {
            if (your_Description){
                return true;
            } else {
                console.log('Enter a description of your project to continue!');
                return false;
            }
        }
    },
    // Installation instructions for the project
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: your_Installation => {
            if (your_Installation){
                return true;
            } else {
                console.log('Enter the step of installation to continue');
                return false;
            }
        }
    },
    // Usage info
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
        validate: your_Usage => {
            if (your_Usage){
                return true;
            } else {
                console.log('Enter the information on how to use project.');
                return false;
            }
        }
    },
    //Licensing avaiable
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license that will best suit your project.',
        choices: [ 'GPL v3.0', 'Apache','MIT', 'other','None'],
        validate: your_License => {
            if (your_License){
                return true;
            } else {
                console.log('Select a license for the project.');
                return false;
            }
        }
    },
    // Contributors for the code
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to this project?',
        validate: your_Contribution => {
            if (your_Contribution){
                return true;
            } else {
                console.log('Provide information on how to contribute to the project.');
                return false;
            }
        }
    },
    //Test Instructions

    {
        type: 'input',
        name: 'test',
        message: 'How can users test this project?',
        validate: your_Test => {
            if (your_Test){
                return true;
            } else {
                console.log('Explain how to test this project.');
                return false;
            }
        }
    },
    // Github username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: github_input => {
            if (github_input){
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
    //Email address 
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for those who may have any questions about your project.',
        validate: email_input => {
            if (email_input){
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    },
];

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err){
            return console.log(err);
        }
        console.log ("Success! You can now preview your README file");
    });
};

//function to initialize app
function init() {
    const prompt = inquirer.createPromptModule()
    prompt(questions).then(function(userInput){
        console.log(userInput)
        writeToFile("generatedREADME.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();

// exports
module.exports = questions;