/*
Write a function in TypeScript named generateFibonacci that:

Takes one parameter n: number

Returns an array of the first n Fibonacci numbers.

Example:
generateFibonacci(6)  // Output: [0, 1, 1, 2, 3, 5]
*/

function generateFibonacci(n:number):number[] {
    let x=0;
    let y=1;
    let fib = [x,y]
    
    for (let i=2;i<n;i++) {
        let z=x+y;
        fib.push(z);
        x=y,
        y=z;
    }
    return fib;

}

console.log(generateFibonacci(6))


