// This calculator is built using interface concept

interface Values {
    a:number
    b:number 
}

function addNumber(values: Values) {
    return values.a+values.b;
}

function subNumber(values: Values) {
    return values.a-values.b;
}

function mulNumber(values: Values) {
    return values.a*values.b;
}

let addition_num = {a: 1,b: 2}
let subtraction_num = {a: 1,b: 2}
let multiplication_num = {a: 1,b: 2}

console.log(addNumber(addition_num))
console.log(subNumber(subtraction_num))
console.log(mulNumber(multiplication_num))
