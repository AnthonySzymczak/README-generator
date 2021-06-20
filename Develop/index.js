// TODO: Include packages needed for this application

//Variable declaration
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Questions Array for User input
const questions =[
    //Q1
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project? : '
        },
    //Q2
        {
            type:'input',
            name: 'description',
            message: 'Please write a description of your project: '

        },
    //Q3
        {
            type: 'input',
            name:'usage',
            message:'What is the "user story" or usage of this project : ',
        },
    //Q4
        {
            type: 'input',
            name: 'install',
            message: 'Please mention your installation instructions :'
        },
    //Q5
        {
            type: 'input',
            name:'contributors',
            message:'Who contributed to this project? List them here:'
        },
    //Q6
        {
            type: 'input',
            name: 'tests',
            message: 'Are there any specific tests you or your contributers have run? List them here: '
        },
    //Q7
        {
            type: 'list',
            name: 'license',
            message: 'Will this project include a license? ',
            choices: [
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT license',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause"New" or "Revised"License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',
                'No license'
            ]},
    //Q8
            {
                type: 'input',
                name: 'myGithub',
                message: 'Enter your Github repository link here: '

            },
    //Q9
            {
                type: 'input',
                name: 'myWebsite',
                message: 'Enter your Website link here: '

            },
    //Q10
            {
                type: 'input',
                name: 'myEmail',
                message: 'Enter your professional e-mail here: '

            }
            ];
        

//Prompt User declaration, then write to file
            const promptUser = () => {
                return inquirer.prompt(questions).then(data => {
                    return writeToFile("README", data);
                    
                })
            };



// TODO: Create a function to write README file
//Function That Writes inputs to README.md
function writeToFile(fileName, data) {
    fs.writeFile(fileName +'.md', generateMarkdown(data), function(err) {

if (err) {
    return console.log(err);
  }

  console.log('Done!');

});
};

// TODO: Create a function to initialize app
function init() {
    promptUser();
};
// Function call to initialize app
init();
