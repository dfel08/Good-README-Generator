var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");
const { BadgeFactory } = require('gh-badges')
const generateMarkdown = require("./utils/generateMarkdown")


// const createdBadge = bf.create(format)
// fs.writeFile(createdBadge)

inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description for the title."
        },
        {
            type: "input",
            name: "installation",
            message: "Enter installation instructions.",
        },
        {
            type: "input",
            name: "license",
            message: "What license is this project under?",
        },
        {
            type: "input",
            name: "contributors",
            message: "List the contributors, or if none, say 'No Contributors'.",
        },
        {
            type: "input",
            name: "tests",
            message: "Enter the tests used to ensure functionality, or put 'No Tests'",
        },
        {
            type: "input",
            name: "github",
            message: "Enter builder's username for GitHub.",
        },
        {
            type: "input",
            name: "usage",
            message: "Specify usage restrictions."
        }
    ]
).then((data) => {
    var readMe = generateMarkdown(data)
    console.log(readMe)
    function writeToFile(fileName, data) {
        return fs.writeFileSync(fileName + ".md", data)
    }
    writeToFile(data.title, readMe);
})




//init();
