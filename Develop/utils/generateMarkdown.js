// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache Liscense 2.0'){
    return `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 
  `
}
  
}
//References for shields and licenses
//[shields.io](https://shields.io/).  
//https://opensource.org/licenses

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
 if(license === 'Apache Liscense 2.0'){
   return `
[${license}](https://opensource.org/licenses/Apache-2.0) 
       `
      }
      else if(license === 'GNU General Public License v3.0'){
        return `
     [${license}](https://opensource.org/licenses/GPL-3.0) 
            `
           }
      else if(license === 'MIT license'){
        return `
      [${license}](https://opensource.org/licenses/MIT) 
                `
      }else if(license === 'BSD 2-Clause "Simplified" License'){
       return `
      [${license}](https://opensource.org/licenses/BSD-2-Clause) 
                    `
      }else if(license === 'BSD 3-Clause"New" or "Revised"License'){
        return `
     [${license}](https://opensource.org/licenses/BSD-3-Clause) 
            `
      }else if(license === 'Boost Software License 1.0'){
        return `
     [${license}](https://opensource.org/licenses/BSL-1.0) 
            `
      }else if(license === 'Creative Commons Zero v1.0 Universal'){
        return `
     [${license}](https://choosealicense.com/licenses/cc0-1.0/) 
            `
      }else if(license === 'Eclipse Public License 2.0'){
        return `
     [${license}](https://opensource.org/licenses/EPL-2.0) 
            `
    }else if(license === 'GNU Affero General Public License v3.0'){
      return `
   [${license}](https://opensource.org/licenses/AGPL-3.0) 
          `
    }else if(license === 'GNU General Public License v2.0'){
      return `
   [${license}](https://opensource.org/licenses/GPL-2.0) 
          `
    }else if(license === 'GNU Lesser General Public License v2.1'){
      return `
   [${license}]https://opensource.org/licenses/LGPL-2.1) 
          `
    }else if(license === 'Mozilla Public License 2.0'){
      return `
   [${license}](https://opensource.org/licenses/MPL-2.0) 
          `
    } 
      
    }
    // TODO: Create a function that returns the license section of README
    // If there is no license, return an empty string
    function renderLicenseSection(license) {
     return`
## License
${license}
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
    `
  }
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
# ${data.title}
    
## Description of application
${data.description}

## Table of Contents :
*[Install](#install)
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)
*[Tests](#tests)
*[Questions](#questions)
    
## Install
${data.install}
## Usage
${data.usage}
    
${renderLicenseSection(data.license)}
  
## Contributors
${data.contributors}
## Tests
${data.tests}
# Questions
## Have questions for the developer? Here are their links! 
  

[Link to the Repository]()
<br></br>
[Website]()

  If you have any further questions, you can reach me at the following email
  : <${data.myEmail}>
`;
}

module.exports = generateMarkdown;
