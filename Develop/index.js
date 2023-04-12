const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What would you like the title of your README to be?',
    },
    {
      type: 'input',
      name: 'description',
     message: 'Why did you create this project?  Include what problems it solves and what you learned building it.',
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
          type: 'list',
          name: 'license',
          message: 'What, if any, license have you attached to the project?',
          choices: ['Apache License 2.0', 'GNU General Public License 2.0', 'MIT License','Boost Software License 1.0', 'Eclipse Public License 2.0', 'None'],
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
          {
            type: 'input',
            name: 'url',
            message: 'What is the url of your project?',
          },
  ])

  .then((data) => {
    let toc = '';
    if (data.toc) {
       toc = 
        `## Table of Contents
        
        - [Installation]
        - [Usage]
        - [Credits]
        - [License]
        - [Features]
        - [Contributing]
        - [App url]`;
    }
    const filename = 'README.md';
    const markdown = `
    
    # ${data.title}
    
    ${toc}
    
    ## Description
    
    ${data.description}
   
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
    
    ${data.contribute}
    
    ## App url
    
    ${data.url}`;

    fs.writeFile(filename, markdown, (err) => {
      if (err) {
        console.log(error);
      } else {
        console.log('Created ${filename}')
      }
    });
  });