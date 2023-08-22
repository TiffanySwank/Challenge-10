const fs = require('fs');
const inquirer = require('inquirer');
const { createLogo } = require('./logo');

// Define the questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function (input) {
      return input.length <= 3;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hex):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hex):',
  },
];

// Prompt the user for input
inquirer.prompt(questions).then((answers) => {
  const svgContent = createLogo(answers);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});