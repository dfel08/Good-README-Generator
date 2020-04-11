var fs = require("fs")

const questions = [
    {
        question1: "What is the project title?",
        answer1: ""
    },
    {
        question2: "Please write a description.",
        answer2: ""
    },
    {
        question3: "Enter a table of contents.",
        answer3: ""
    },
    {
        question4: "Enter installation instructions.",
        answer4: ""
    },
    {
        question5: "What are the usage limitations?",
        answer5: ""
    },
    {
        question6: "What license is this project under?",
        answer6: ""
    },
    {
        question7: "List the contributors, or if none, say 'No Contributors'.",
        answer7: ""
    },
    {
        question8: "Enter the tests used to ensure functionality.",
        answer8: ""
    },
    {
        question9: "Enter builder's username for GitHub.",
        answer9: ""
    },
];

fs.appendFile("README.md", questions, function(err) {
    if (err) throw err;
    console.log("Saved!")
})

const { BadgeFactory } = require('gh-badges')

const bf = new BadgeFactory()

const format = {
  text: ['build', 'passed'],
  color: 'green',
  template: 'flat',
}

const createBadge = bf.create(format)

function writeToFile(fileName, data) {

}

function init() {

}

init();
