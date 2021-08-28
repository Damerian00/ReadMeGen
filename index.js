
  // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs  = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: "What's the name of your project?",
    },
    {
      type: 'input',
      name: 'pName',
      message: "What is the name that you would like displayed for the author of the project.",
   
    },
    {
      type: 'input',
      name: 'describe',
      message: "Please provide a short description of your project.",
   
    },
    {
        type: 'input',
        name: 'install',
        message: "Please provide any installation instructions for this project.",
     
      },
      {
        type: 'input',
        name: 'sShot',
        message: "Please provide the file path with name and extension to add the screen shot to the readme.",
     
      },
      {
        type: 'input',
        name: 'gHub',
        message: "What is your gitHub user name?",
     
      },
      {
        type: 'input',
        name: 'cEmail',
        message: "What is your email?",
     
      },

    {
      type: 'list',
      name: 'licensing',
      message: "What's your preferred method of communication",
      choices: ['WTFPL', 'MIT License', 'GNU General Public License version 3'],
    },
    
    
  ];
  
  
  // Function call to initialize app
  init();
  
  // TODO: Create a function to initialize app
  function init() {
  inquirer.prompt(questions).then((answers) => {
    const fileName = 'README.md'; 
    writeToFile(fileName, answers)
  });
}
  
//TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  let lic;
  if (answers.licensing === "MIT License") {
    lic = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (answers.licensing === "GNU General Public License version 3") {
    lic = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    lic = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  }


    const readMeString =
    ` 
${lic}

<br />

# Project Name: ${answers.projectTitle}

<br />

<!-- TABLE OF CONTENTS -->
## Table Of Contents:

1. -[Project Description](#about-the-project)
2. -[Installation](#installation)
3. -[Project Preview](#project-preview)
4. -[Contact](#contact)
5. -[Licensing](#licensing-for-this-project)

<br />

<!-- ABOUT THE PROJECT -->
## About the Project:
         ${answers.describe}

<br />

## Installation:
    ${answers.install}

<br />

## Project Preview
![Project Preview](${answers.sShot})

<br />

## Contact
  ${answers.pName} - (https://github.com/${answers.gHub}) - GitHub Name
  or you can reach out to me here: <a href="mailto:${answers.cEmail}">Email me here!</a>

<br />
 
### Licensing for this project:
        ${answers.licensing}    
        
        `;

        fs.writeFile(fileName, readMeString, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
}


  
  



/*

*/