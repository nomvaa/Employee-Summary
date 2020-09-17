// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./employee') 

class Engineer extends Employee {
    constructor (name, id, email, gitHubUser) {
        super (name, id, email);
        this.gitHubUser= gitHubUser;
    };

    getGitHubUser() {
        return this.gitHubUser;
    };

    getRole() {
        return "Engineer";
    };
};

module.exports = "Engineer";