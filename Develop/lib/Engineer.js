// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./employee') 

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super (name, id, email);
        this.gitHub= gitHub;
    };

    getGitHubUser() {
        return this.gitHub;
    };

    getRole() {
        return "Engineer";
    };
};

module.exports = Engineer;