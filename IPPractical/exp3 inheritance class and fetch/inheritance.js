// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method in the base class
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Derived class (inherits from Animal)
class Dog extends Animal {
    constructor(name, breed) {
        // Call the parent class constructor
        super(name);
        this.breed = breed;
    }

    // Method specific to Dog class
    speak() {
        console.log(`${this.name}, the ${this.breed}, barks!`);
    }

    // Additional method in the Dog class
    run() {
        console.log(`${this.name} is running!`);
    }
}

// Create an instance of the base class
const genericAnimal = new Animal('Animal');
genericAnimal.speak(); // Output: Animal makes a sound.

// Create an instance of the derived class
const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Output: Rex, the German Shepherd, barks!
dog.run();   // Output: Rex is running!
