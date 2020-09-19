## Table of Contents
#### Installation
#### Usage
#### Licenses
#### Tests

## Summary
This application is a software engineering team generator command line application. It prompts the user for information about the team manager and then information about the team members. The user input any number of team members, mixing engingeers and interns. This application also pass unit tests. When the user completes building the team, the application will generate an HTML file that displays a nicely formatted team roster based on the information provided by the user.

## Installation

* Uses the [Inquirer npm package] to prompt user for their email, id, and specific information based on their role with company.
* Run Node CLI to gather information about each employee
* In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.
* The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

## Usage

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## Tests

There are also unit tests to help you build the classes necessary.

It is recommended that you follow this workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

🎗 Remember, you can run the tests at any time with `npm run test`

It is recommended that you start with a directory structure that looks like this:

```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```


## Video to Demonstrate


<iframe src="https://drive.google.com/file/d/1xu40jAUOfhDgZ8mE_YbPE14IrhBGw9cN/preview" width="640" height="480"></iframe>
