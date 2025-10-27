/*
Create a base class called Shape that has:

a property color: string

a method describe() that prints "A shape of color <color>".

Then create a subclass Circle that:

has an additional property radius: number

overrides the describe() method to print "A <color> circle with radius <radius>".

Finally, create an instance of Circle and call describe()
*/

class Shape {
    color: string;

    constructor(color:string) {
        this.color=color;
    }

    describe() {
        console.log(`A shape of color ${this.color}`)
    }
}

class Circle extends Shape {
    radius: number

    constructor(radius:number,color:string) {
        super(color),
        this.radius=radius;
    }

    describe():string {
        return `A ${this.color} circle with radius ${this.radius}`
    }
}

let circle= new Circle(10,"BLUE")
console.log(circle.describe());

