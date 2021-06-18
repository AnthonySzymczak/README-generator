// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  return`
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  `
  
  //[shields.io](https://shields.io/).  
  //https://opensource.org/licenses
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
 if(license === 'Apache Liscense 2.0'){
   return `
       [${license}](https://opensource.org/licenses/Apache-2.0) 
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
    
    ##Table of Contents :
    -[Packages needed for installation](#install)
    -[Usage of application](#usage)
    -[License](#license)
    -[Contributors of this application](#contributors)
    -[Tests Ran](#allTests)
    -[Questions](#questions)
    
    ## Packages needed for installation
    ${data.install}
    ## Usage of application
    ${data.usage}
    
    ${renderLicenseSection(data.license)}
  
  
  ## Contributers of this application
  ${data.contributors}
  ## Tests Ran
  ${data.allTests}
  
  ## Have questions for the developer? Here are their links! 
  

  [Link to the Repository]()
  [Website]()

  If you have any further questions, you can reach me at the following email
  : <${data.myEmail}>
`;
}

module.exports = generateMarkdown;
