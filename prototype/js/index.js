const user_prototype = require('./user_prototype');

const john = user_prototype.clone();
john.name = "john doe";
john.giveMoney(200);
john.addItem('chocolate');
console.log(`${john.name} has ${john.money} and will buy [${john.items}]`);

const jane = user_prototype.clone();
jane.name = "jane doe";
jane.giveMoney(400);
jane.addItem('honey');
console.log(`${jane.name} has ${jane.money} and will buy [${jane.items}]`);
