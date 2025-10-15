// Write a function to add a list of numbers.
function sumOfnumbers(nums) {
    if (nums === void 0) { nums = []; }
    var total = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        total = total + num;
    }
    return total;
}
console.log(sumOfnumbers([1, 2, 3, 4]));
