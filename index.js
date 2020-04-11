var fs = require("fs")

const data = [
    {
        question1: "What is the project title?",
        answers: "\n"
    },
    {
        question2: "Please write a description.",
        answers: "\n"
    },
    {
        question3: "Enter a table of contents.",
        answers: "\n"
    },
    {
        question4: "Enter installation instructions.",
        answers: "\n"
    },
    {
        question5: "What are the usage limitations?",
        answers: "\n"
    },
    {
        question6: "What license is this project under?",
        answers: "\n"
    },
    {
        question7: "List the contributors, or if none, say 'No Contributors'.",
        answers: "\n"
    },
    {
        question8: "Enter the tests used to ensure functionality.",
        answers: "\n"
    },
    {
        question9: "Enter builder's username for GitHub.",
        answers: "\n"
    },
];
for (var i = 0; i < data[i].answers.length; i++) {
    fs.appendFile("README.md", data.answers[i], function(err) {
        if (err) throw err;
        console.log("Saved!")
    })
}

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
