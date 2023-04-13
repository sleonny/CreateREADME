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
      message: 'Why did you create this project? Include what problems it solves and what you learned building it.',
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
      message: 'What is the intended use of the project?',
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
      message: 'What is the URL of your project?',
    },
  ])

  .then((data) => {
    let licenseBadgeUrl = '';
    let licenseDescription = '';
    switch (data.license) {
      case 'Apache License 2.0':
        licenseBadgeUrl = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
        licenseDescription = 'This project is licensed under the Apache License 2.0.';
        break;
      case 'GNU General Public License 2.0':
        licenseBadgeUrl = 'https://img.shields.io/badge/License-GPLv2-blue.svg';
        licenseDescription = 'This project is licensed under the GNU General Public License 2.0.';
        break;
      case 'MIT License':
        licenseBadgeUrl = 'https://img.shields.io/badge/License-MIT-yellow.svg';
        licenseDescription = 'This project is licensed under the MIT License.';
        break;
      case 'Boost Software License 1.0':
        licenseBadgeUrl = 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';
        licenseDescription = 'This project is licensed under the Boost Software License 1.0.';
        break;
      case 'Eclipse Public License 2.0':
        licenseBadgeUrl = 'https://img.shields.io/badge/License-EPL%202.0-red.svg';
        licenseDescription = 'This project is licensed under the Eclipse Public License 2.0.';
        break;
      case 'None':
        licenseBadgeUrl = '';
        licenseDescription = '';
        break;
    }

    let toc = '';
    if (data.toc) {
       toc = 
        `## Table of Contents

        - [Description]
        - [Installation]
        - [Usage]
        - [Credits]
        - [License]
        - [Features]
        - [Contributing]
        - [App url]`;
    }

    // Construct the license section of the markdown with the badge URL
    const licenseMarkdown = licenseBadgeUrl ? `[![License](${licenseBadgeUrl})](${data.url})\n\n${licenseDescription}` : '';

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
    
    ${licenseMarkdown}
    
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
        console.log(`Created ${filename}`)
      }
    });
  });