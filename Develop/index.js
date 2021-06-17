// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

let i = 0;
const questions =[
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project? : '
        },
        {
            type:'input',
            name: 'description',
            message: 'Please write a description of your project: '

        },
        {
            type: 'input',
            name:'usage',
            message:'What is the "user story" or usage of this project : ',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please mention your installation instructions :'
        },
        {
            type: 'input',
            name:'contributors',
            message:'Who contributed to this project? List them here:'
        },
        {
            type: 'input',
            name: 'allTests',
            message: 'Are there any specific tests you or your contributers have run? List them here: '
        },
        {
            type: 'list',
            name: 'license',
            message: 'Will this project include a license? ',
            choices: [
                'Apache Liscense 2.0',
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
                'The Unlicense'
            ]},
            {
                type: 'input',
                name: 'myGithub',
                message: 'Enter your Github repository link here: '

            },
            {
                type: 'input',
                name: 'myEmail',
                message: 'Enter your professional e-mail here: '

            }
            ];
        


            const promptUser = () => {
                return inquirer.prompt(questions).then(projectData => {
                    renderLicenseLink(projectData);
                    return writeToFile("README",projectData);
                    
                })
            };
// TODO: Create a function to write README file
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
