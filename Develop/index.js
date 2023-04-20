const inquirer = require("inquirer");
const fs = require("fs");

let licenseBadgeUrl = "";
let licenseDescription = "";

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What would you like the title of your README to be?",
    },
    {
      type: "input",
      name: "description",
      message:
        "Why did you create this project?  Include what problems it solves and what you learned building it.",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the intended use of the project?",
    },
    {
      type: "list",
      name: "license",
      message: "What, if any, license have you attached to the project?",
      choices: [
        "Apache License 2.0",
        "GNU General Public License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "Eclipse Public License 2.0",
        "None",
      ],
    },
    {
      type: "input",
      name: "credit",
      message:
        "What collaborators or 3rd party applications would you like to acknowledge?",
    },

    {
      type: "input",
      name: "tests",
      message: "Please provide instructions for any tests",
    },
    {
      type: "input",
      name: "contribute",
      message:
        "Please tell other developers how they can contribute to the project.",
    },
    {
      type: "input",
      name: "url",
      message: "What is the URL of your project?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github user name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])
  .then((data) => {
    let licenseBadgeUrl = "";
    let licenseDescription = "";
    switch (data.license) {
      case "Apache License 2.0":
        licenseBadgeUrl =
          "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
        licenseDescription =
          "This project is licensed under the Apache License 2.0.";
        break;
      case "GNU General Public License 2.0":
        licenseBadgeUrl = "https://img.shields.io/badge/License-GPLv2-blue.svg";
        licenseDescription =
          "This project is licensed under the GNU General Public License 2.0.";
        break;
      case "MIT License":
        licenseBadgeUrl = "https://img.shields.io/badge/License-MIT-yellow.svg";
        licenseDescription = "This project is licensed under the MIT License.";
        break;
      case "Boost Software License 1.0":
        licenseBadgeUrl =
          "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
        licenseDescription =
          "This project is licensed under the Boost Software License 1.0.";
        break;
      case "Eclipse Public License 2.0":
        licenseBadgeUrl =
          "https://img.shields.io/badge/License-EPL%202.0-red.svg";
        licenseDescription =
          "This project is licensed under the Eclipse Public License 2.0.";
        break;
      case "None":
        licenseBadgeUrl = "";
        licenseDescription = "";
        break;
    }

    // Construct the license section of the markdown with the badge URL
    const licenseMarkdown = licenseBadgeUrl
      ? `[![License](${licenseBadgeUrl})](${data.url})\n\n${licenseDescription}`
      : "";

    const filename = "README.md";
    const markdown = `
    
    # ${data.title}

    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

    ## Description
    
    ${data.description}
    
   ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    
    ## Installation

    ${data.installation}

    ## Usage
    
    ${data.usage}

    ## License
    
    ## License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    This application is covered by the ${data.license} license. 
    
    ## Credits
    
    ${data.credit}  
  
    ## Tests

    ${data.tests}
    
    ## How to Contribute
    
    ${data.contribute}
    
    ## App url
    
    ${data.url}
    
    ## Questions?
    
    Come see me on GitHub @ [${data.github}](https://github.com/${data.github});
    Or
    Email me @ ${data.email}`;

    fs.writeFile(filename, markdown, (err) => {
      if (err) {
        console.log(error);
      } else {
        console.log(`Created ${filename}`);
      }
    });
  });
