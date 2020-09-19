const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [

];

function createManager() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is Manager's name?",
            name: "name"
        }, 
        {
            type: "input",
            message: "What is Manager's ID?",
            name: "id"
        }, 
        {
            type: "input",
            message: "What is Manager email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is Manager office number?",
            name: "office",
        }
    ]).then(function (answers) {
        const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
        teamMembers.push(manager);
        addMember();
        });
    }

function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]

        }
    ]).then(function(answer) {
        if(answer.type === "Engineer") {
            createEngineer();
        }
        else if (answer.type === "Intern") {
            createIntern();
        }
        else {
            fs.writeFileSync(outputPath, render(teamMembers));
        }

    })
}
    function createEngineer () {
        inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's github username?"
        }
        
        ]).then(function (answers) {
                const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
                teamMembers.push(engineer);
                addMember();
            });
        
        }

    function createIntern () {
        inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }
                
        ]).then(function (answers) {
            const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
            teamMembers.push(intern);
            addMember();
        });
                
        }

    createManager();
