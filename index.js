
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
      type: 'list',
      name: 'liscensing',
      message: "What's your preferred method of communication",
      choices: ['community', 'MIT License', ' GNU GPLv3'],
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
    // const readMeString =
    // `  
    // # ${answers.projectTitle}
    // ## ${answers.describe}
    // ## ${answers.liscensing}    
        
    //     `;
    console.log(fileName);
    console.log(answers.projectTitle);
    console.log(answers.describe);
    console.log(answers.liscensing);
    //     fs.writeFile(fileName, readMeString);
}


  
  



/*

*/