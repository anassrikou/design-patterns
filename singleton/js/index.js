const logger = require('./logger');
const User = require('./user');

const user = new User('jane');

logger.write('hello world!');

user.say('hi world!');