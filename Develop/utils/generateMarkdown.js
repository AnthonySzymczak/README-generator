
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  /*  if 
      ${andswers.license} = '' 
    return`
    ![badge](https://img.shields.io/badge/license-${answers.license}-yellow)
    
    `
    else{
    return `[]`  
    
     };
  
  */ 
  
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
  return `# ${data.title}
  <h1>${answers.title}</h1>
  
  ##Table of Contents :
  -[License](#license)
  -[Descption of application](#description)
  -[Usage of application](#usage)
  -[Packages needed for installation](#install)
  -[Contributers of this application](#contributers)
  -[Tests Ran](#allTest)

  ## License
  ${answers.license}
  ## Description of application
  ${answers.description}
  ## Usage of application
  ${answers.usage}
  ## Packages needed for installation
  ${answers.install}
  ## Contributers of this application
  ${answers.contributers}
  ## Tests Ran
  ${answers.allTest}


`;
}






module.exports = generateMarkdown;
