/*
Main sections of code used:

Functions:

renderLicenseBadge
renderLicenseLink
renderLicenseSection
generateMarkdown


*/ 
// TODO: Create a function that returns a license badge based on which license is passed in, If there is no license, return an empty string
function renderLicenseBadge(license) {

//Render Apach License Badge
if(license === 'Apache License 2.0'){
  return `
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 
  `
  } 
  //Render GNU General Public License v3.0 Badge
  else if(license === 'GNU General Public License v3.0'){
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
    `
  } 
  //Render MIT License Badge
  else if(license === 'MIT license'){
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
  }
  //Render BSD 2-Clause "Simplified" License Badge
  else if(license === 'BSD 2-Clause "Simplified" License'){
   return `
   [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
   `
  }
  // Render BSD 3-Clause"New" or "Revised"License Badge
  else if(license === 'BSD 3-Clause"New" or "Revised"License'){
    return `
    [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    `
  }
  // Render Boost Software License 1.0 Badge
  else if(license === 'Boost Software License 1.0'){
    return `
    [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
   `
  }
  // Render Creative Commons Zero v1.0 Universal Badge
  else if(license === 'Creative Commons Zero v1.0 Universal'){
    return `
    [![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
    `
  }
  // Render Eclipse Public License 2.0 Badge
  else if(license === 'Eclipse Public License 2.0'){
   return `
   [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0) 
        `
  }
  // Render GNU Affero General Public License v3.0 Badge
  else if(license === 'GNU Affero General Public License v3.0'){
    return `
    [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
        `
  }
  // Render GNU General Public License v2.0 Badge
  else if(license === 'GNU General Public License v2.0'){
    return `
    [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) 
        `
  }
  // Render GNU Lesser General Public License v2.1 Badge
  else if(license === 'GNU Lesser General Public License v2.1'){
    return `
  [![License: GPL v2.1](https://img.shields.io/badge/License-GPL%20v2.1-blue.svg)](https://opensource.org/licenses/LGPL-2.1) 
        `
  }
  // Render Mozilla Public License 2.0 Badge
  else if(license === 'Mozilla Public License 2.0'){
    return `
    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
        `
  }
  // Render The Unlicense Badge
  else if(license === 'The Unlicense'){
    return `
    [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
    `
  }
  // Render an empty string if the option 'No License' is selected
  else if(license === 'No license'){
    return ` `
  }
};

//References for shields and licenses
//[shields.io](https://shields.io/).  
//https://opensource.org/licenses

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  // if / else if block to render licenses

// Render Apache Liscense 2.0
 if(license === 'Apache Liscense 2.0'){
   return `
[${license}](https://opensource.org/licenses/Apache-2.0) 
       `
}

// Render GNU General Public License v3.0
else if(license === 'GNU General Public License v3.0'){
return `
[${license}](https://opensource.org/licenses/GPL-3.0) 
 `
}

// Render MIT license
else if(license === 'MIT license'){
return `
[${license}](https://opensource.org/licenses/MIT) 
`
}

// Render BSD 2-Clause "Simplified" License
else if(license === 'BSD 2-Clause "Simplified" License'){
return `
[${license}](https://opensource.org/licenses/BSD-2-Clause) 
`
}

// Render BSD 3-Clause"New" or "Revised"License
else if(license === 'BSD 3-Clause"New" or "Revised"License'){
return `
[${license}](https://opensource.org/licenses/BSD-3-Clause) 
`
}

// Render Boost Software License 1.0
else if(license === 'Boost Software License 1.0'){
return `
[${license}](https://opensource.org/licenses/BSL-1.0) 
`
}

// Render Creative Commons Zero V1.0 Universal
else if(license === 'Creative Commons Zero v1.0 Universal'){
return `
[${license}](https://choosealicense.com/licenses/cc0-1.0/) 
`
}

// Render Eclipse Public License 2.0 
else if(license === 'Eclipse Public License 2.0'){
return `
[${license}](https://opensource.org/licenses/EPL-2.0) 
`
}

// Render GNU Affero General Public License v3.0
else if(license === 'GNU Affero General Public License v3.0'){
return `
[${license}](https://opensource.org/licenses/AGPL-3.0) 
`
}

// Render GNU General Public License v2.0
else if(license === 'GNU General Public License v2.0'){
return `
[${license}](https://opensource.org/licenses/GPL-2.0) 
`
}

// Render GNU Lesser General Public License v2.1
else if(license === 'GNU Lesser General Public License v2.1'){
return `
[${license}](https://opensource.org/licenses/LGPL-2.1) 
`
}

// Render Mozilla Public License 2.0
else if(license === 'Mozilla Public License 2.0'){
return `
[${license}](https://opensource.org/licenses/MPL-2.0) 
`
}
// Render The Unlicense
else if(license === 'The Unlicense'){
return `
[${license}](https://opensource.org/licenses/unlicense)
`
}

// If the option No License is selected, Return an empty string
else if(license === 'No license'){
return ` `
}      
};
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
  

Link to the Repository
${data.myGithub}

Creator's Website
${data.myWebsite}

  If you have any further questions, you can reach me at the following email
  : <${data.myEmail}>
`;
}

module.exports = generateMarkdown;
