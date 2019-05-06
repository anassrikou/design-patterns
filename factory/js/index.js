const petFactory = require('./petFactory');

const pets = { dog: petFactory("dog", "max"), cat: petFactory("cat", "max") };

function get_pet(pet) {
    return pets[pet];
}

const d = get_pet('dog');
d.speak();

const c = get_pet('cat');
c.speak();
