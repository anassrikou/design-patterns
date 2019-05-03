class Dog {
    
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log("woof");
    }
}

class Cat {

    constructor(name) {
        this.name = name
    }

    speak() {
        console.log('meow');
    }
}

module.exports = { Dog, Cat }