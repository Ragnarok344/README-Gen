// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generator.js');
const path = require('path');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.'
    },
    {
         type: 'input',
        name: 'Features',
        message: 'Please provide features of your project'
    },
    {
        type: 'input',
        name: 'Badges',
        message: 'Any Badges you would like to add to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
        default: 'npm test',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    
    }
]

// write README file
function addRead(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function to initialize app
function initialize() {
inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating your README...');
    addRead('README.md', generateREADME({...inquirerResponses}));
});
}

// Function call to initialize app
initialize();
