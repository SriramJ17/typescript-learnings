
class Vehicle {
    brand: string;

    constructor (brand:string) {
        this.brand=brand;
    }

    displayInfo() {
        return `This is a vehicle made by ${this.brand}`
    } 
}

class Car extends Vehicle {
    numDoors: number;
    constructor (brand:string,numDoors: number) {
        super(brand),
        this.numDoors=numDoors;
    }

    displayInfo() {
        return `This is a ${this.brand} car with ${this.numDoors} doors.`
    }
}

class Bike extends Vehicle {
    type: string;
    constructor (brand:string,type: string) {
        super(brand),
        this.type=type;
    }

    displayInfo() {
        return `This is a ${this.type} bike made by ${this.brand}.`
    }
}

let car1 = new Car("BMW",4)
let bike1 = new Bike("Yamaha", "Sport")

console.log(car1.displayInfo())
console.log(bike1.displayInfo())