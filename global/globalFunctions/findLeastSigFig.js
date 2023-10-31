//This function takes in an array parameter (nums) and returns the least number of sig figs 
// must contain decimals not ending in 0
const findLeastSigFig = function (nums) {
    let numArray = [];
    for (let i = 0; i < nums.length; i++) {
        var num = Number(nums[i]);
        var decimal = num.toString().split('.')[1].length;
        var value = num.toString().split('.')[0].length;
        var digits = decimal + value;
        numArray.push(digits);
    }
    console.log(Math.min(...numArray))
    return numArray;
};

// console.log(multiplyOrDivide([30.2, 2.105, 6.01, 2.006, 10.01]))