function generateLicenseBadge(license) {
    if (license !== 'None') {
        return '';
    }

    const licenseBadge = `![GitHub license](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;

    return licenseBadge;
}
function generateLicense(license) {
    if (license !== 'None') {
        return '\n* [License](#license)\n';
    }
    return '';
}
function generateLicenseSection(license) {
    if (license !== 'None') {
        return `## License \nThis project is licensed under the ${license} license.`;
    }
    return '';
}
function generateMarkdown(data) {
    return `# ${data.title}
${generateLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${generateLicense(data.license)}
* [Credits](#credits)
* [Features](#features)
* [Badges](#badges)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.installation}

## Usage
${data.usage}
${generateLicenseSection(data.license)}

## Credits
${data.Credits}

## Features
${data.Features}

## Badges
${data.Badges}

## Tests
${data.tests}

## Questions
If you have any questions, please contact me at ${data.email}.\n
GitHub: [${data.username}]
}`;
}

module.exports = generateMarkdown;
