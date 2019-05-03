const { Dog, Cat } = require('./pets');

const petFactory = (type, name) => {
    if (type === "dog")
        return new Dog(name);
    else
        return new Cat(name);
}

module.exports = petFactory;