class User {

	constructor(builder) {
		this._name = builder.name;
		this._job = builder.job || "unemployed";
		this._salary = builder.salary || 0;
		this._isManager = builder.isManager || false;
	}

}

module.exports = User;