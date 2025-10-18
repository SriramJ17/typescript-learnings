// This calculator is built using interface concept
function addNumber(values) {
    return values.a + values.b;
}
function subNumber(values) {
    return values.a - values.b;
}
function mulNumber(values) {
    return values.a * values.b;
}
var addition_num = { a: 1, b: 2 };
var subtraction_num = { a: 1, b: 2 };
var multiplication_num = { a: 1, b: 2 };
console.log(addNumber(addition_num));
console.log(subNumber(subtraction_num));
console.log(mulNumber(multiplication_num));
