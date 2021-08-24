
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
      name: 'describe',
      message: "Please provide a short description of your project.",
   
    },
    {
        type: 'input',
        name: 'install',
        message: "Please provide a any installation instructions for this project.",
     
      },
    {
      type: 'list',
      name: 'licensing',
      message: "What's your preferred method of communication",
      choices: ['Existing projects and communities', 'MIT License', 'GNU General Public License version 3'],
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
    const readMeString =
    `  
# Project Name: ${answers.projectTitle}

## Table Of Contents:

-[Project Description](#about-the-project)
-[Installation](#installation)
-[Licensing](##licensing)


## About the Project:
         ${answers.describe}

## Installation:
    ${answers.install}


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