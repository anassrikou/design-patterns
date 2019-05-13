const User = require('./user');

class UserBuilder {

	constructor(name) {
		this.name = name;
	}
	
	workAs(job) {
		this.job = job;
		return this;
	}

	isManager() {
		this.isManager = true;
		return this;
	}

	hasSalary(salary) {
		this.salary = salary;
		return this;
	}

	build() {
		return new User(this);
	}
}

module.exports = UserBuilder;