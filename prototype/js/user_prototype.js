const User = require('./user');

const user_prototype = new User();
user_prototype.addItem('bread');
user_prototype.addItem('milk');
user_prototype.addItem('sugar');

module.exports = user_prototype;