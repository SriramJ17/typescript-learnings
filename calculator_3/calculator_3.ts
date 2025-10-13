//Creating a simple calculator using class concept
class Calculator{
    a: number;
    b: number;

    constructor(a:number,b:number) {
        this.a = a;
        this.b = b;
    }

    addNumber() {
        return this.a+this.b;
    }

    subNumber() {
        return this.a-this.b;
    }

    mulNumber() {
        return this.a*this.b;
    }
}

let favouritenums = new Calculator(1,2);

console.log(favouritenums.addNumber())
console.log(favouritenums.subNumber())
console.log(favouritenums.mulNumber())



