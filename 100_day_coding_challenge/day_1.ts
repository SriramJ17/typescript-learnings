/*
Requirements:

Create a base class called Animal that has:

a method makeSound(): void that logs "Some generic animal sound".

Create two subclasses:

Dog → overrides makeSound() to log "Woof!"

Cat → overrides makeSound() to log "Meow!"

Create an array of type Animal[] and store different animals (both Dog and Cat objects) in it.

Use a loop to call makeSound() for each element in the array.
→ Each animal should make its own sound (that’s polymorphism in action).
*/

class Animal {
    makeSound(): void {
        console.log("Some generic animal sound")
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!")
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!")
    }
}

let animals:Animal[]=[
    new Dog(),
    new Cat()
]

for (let z of animals) {
    z.makeSound()
}