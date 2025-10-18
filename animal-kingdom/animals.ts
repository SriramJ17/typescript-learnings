class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        return "Some generic animal sound"
    }

    move() {
        return "The animal moves around"
    }
}

class Dog extends Animal {
    constructor (name:string) {
        super(name)
    }

    makeSound() {
        return "woof woof"
    }

    move() {
        return "The dog runs around happily"
    }
}

class Bird extends Animal {
    constructor (name:string) {
        super(name)
    }

    makeSound() {
        return "Tweet! Tweet!"
    }

    move() {
        return "The bird flies in the sky"
    }
}

class Fish extends Animal {
    constructor (name:string) {
        super(name)
    }

    makeSound() {
        return "Blub blub (underwater sound)"
    }

    move() {
        return "The fish swims in the water"
    }
}

let animals:Animal[] = [
    new Dog("Tiger"),
    new Bird("Pigeon"),
    new Fish("Shark")
]

for (let animal of animals) {
    console.log (animal.name);
    console.log(animal.makeSound());
    console.log(animal.move());
    console.log("----------------");
}