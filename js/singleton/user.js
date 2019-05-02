const logger = require('./logger');

class User {

    constructor(name = 'john doe') {
        this.name = name
        logger.write(`creating new user with the name: ${this.name}`);
    }

    say(something) {
        logger.write(`${this.name} said: ${something}`);
        console.log(something);
    }

}

module.exports = User;