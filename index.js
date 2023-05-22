const inquirer = require('inquirer');
const fs = require('fs');
const README= ({Title, description, installation, usage, contributions, test, LinkedIn, GitHub, email}) => 
`# ${Title}


## Description


${description}


## Table of Contents


* [Installation](./README.md/#installation)
* [Usage](./README.md/#usage)
* [Contributions](./README.md/#contributions)
* [Tests](./README.md/#tests)
* [Questions](./README.md/#questions)


## Installation


${installation}


## Usage


${usage}


## Contributors


${contributions}


## Tests


${test}


## Questions


* GitHub: ${GitHub}


* LinkedIn: ${LinkedIn}


How to reach me for further information: ${email}`;
inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description for your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage information:',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Contributions information:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test instructions:',
      },
      {
        type: 'input',
        name: 'LinkedIn',
        message: 'What is the link to your LinkedIn?',
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'What is the link to your GitHub?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address:',
      },
])
.then((answers) => {
    fs.writeFile('README.md', README(answers), (err) => 
        err ? console.log(err) : console.log('Successfully created README!')
    )
})