//Creating a simple calculator using class concept
var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculator.prototype.addNumber = function () {
        return this.a + this.b;
    };
    Calculator.prototype.subNumber = function () {
        return this.a - this.b;
    };
    Calculator.prototype.mulNumber = function () {
        return this.a * this.b;
    };
    return Calculator;
}());
var favouritenums = new Calculator(1, 2);
console.log(favouritenums.addNumber());
console.log(favouritenums.subNumber());
console.log(favouritenums.mulNumber());
