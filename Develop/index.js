const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What would you like the title of your README to be?',
    },
    {
      type: 'input',
      name: 'motivation',
     message: 'What motivated you to create this project?',
    },
    {
      type: 'input',
      name: 'build',
      message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does this project solve?',
      },
      {
        type: 'input',
        name: 'learn',
        message: 'What did you learn building this project?',
      },
      {
        type: 'confirm',
        name: 'toc',
        message: 'Would you like to include a table of contents?',
      },
      {
        type: 'input',
        name: 'installation',
       message: 'How do you install this project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use of the project?'
      },
      {
          type: 'input',
          name: 'credit',
          message: 'What collaborators or 3rd party applications would you like to acknowledge?',
        },
        {
          type: 'input',
          name: 'license',
          message: 'What, if any, license have you attached to the project?',
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please tell us about any additional features of the project you want to highlight.',
          },
          {
            type: 'input',
            name: 'contribute',
            message: 'Please tell other developers how they can contribute to the project.',
          },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
inquirer
  .prompt(questions)
  .then((data) => {
    let toc = '';
    if (data.toc) {
       toc = 
        `## Table of Contents
        
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        - [Features](#features)
        - [Contributing](#contributing)`;
    }
    const filename = 'README.md';
    const markdown = `
    
    # ${data.title}
    
    ${toc}
    
    ## Description
    
    ${data.motivation}
    ${data.build}
    ${data.problem}
    ${data.learn}

    ## Installation

    ${data.installation}

    ## Usage
    
    ${data.usage}
    
    ## Credits
    
    ${data.credit}
    
    ## License
    
    ${data.license}
    
    ## Addtional Features
    
    ${data.features}
    
    ## How to Contribute
    
    ${data.contribute}`;

    
  })
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
