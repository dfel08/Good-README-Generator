var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");
const { BadgeFactory } = require('gh-badges')

const bf = new BadgeFactory()

const format = {
  text: ['build', 'passed'],
  color: 'green',
  template: 'flat',
}

const createBadge = bf.create(format)


const data = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please enter a description for the title."
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Enter a table of contents.",
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter installation instructions.",
    },
    {
        type: "input",
        name: "License",
        message: "What license is this project under?",
    },
    {
        type: "input",
        name: "Contributors",
        message: "List the contributors, or if none, say 'No Contributors'.",
    },
    {
        type: "input",
        name: "Tests",
        message: "Enter the tests used to ensure functionality, or put 'No Tests'",
    },
    {
        question9: "Enter builder's username for GitHub.",
        answers: "\n"
    },
];


function writeToFile(fileName, data) {

}

function init() {

}

init();
