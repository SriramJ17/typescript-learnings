// Write a function to add a list of numbers.

function sumOfnumbers (nums:number[] = []) {
    let total = 0;
    for(let num of nums) {
        total = total+num;
    }
    return total
}

console.log(sumOfnumbers([1,2,3,4]))