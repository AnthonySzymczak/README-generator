
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for(let i = 0; i<license.license.length;i++)
  {

 //     ${data.license} = '' 
    return ` 
    ![badge](https://img.shields.io/badge/license-${data.license}-yellow)
    [${data.license}](https://opensource.org/licenses/${data.license})
    
    `

    //https://opensource.org/licenses
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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
  ## License
  ${data.license}
  ## Contributers of this application
  ${data.contributers}
  ## Tests Ran
  ${data.allTest}

  ## Have questions for the developer? Here are their links! 


  [Link to the Repository]()
  [Website]()

  If you have any further questions, you can reach me at the following email
  : <${data.email}>
`;
}






module.exports = generateMarkdown;
