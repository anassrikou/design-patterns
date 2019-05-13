const UserBuilder = require('./userBuilder');

const john = new UserBuilder('john doe').workAs('developer').hasSalary(500);
console.log(JSON.stringify(john));

const jane = new UserBuilder('jane doe').workAs('marketer').isManager().hasSalary(700);
console.log(JSON.stringify(jane));