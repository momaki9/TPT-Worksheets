
// write a function that generates a list of numbers from num1 to num2, given an incrementor (inc) and number of decimals
const generateNumArr = function (num1, num2, inc, dec) {
    let numArray = [];
    if (num1 == num2) {
        return;
    };
    if (num2 > num1) {
        for (let index = num1; index <= num2; index += inc) {
            numArray.push(index.toFixed(dec));
        }
    } else {
        for (let i = num1; i >= num2; i -= inc) {
            numArray.push(i.toFixed(dec));
        }
    };
    return numArray;
};

generateNumArr(19, 21, 0.1, 1);

// write a function that randomly returns one value from an array (array given as param)
const selectNum = function(arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomValue);
    return randomValue;
};

var testArr = generateNumArr(11, 12, 0.1, 1);
console.log(testArr)
console.log(selectNum(testArr))


// write a function that adds or subtracts two numbers and return the correct number of decimals
// be sure to treat num1 and num2 as strings
const addOrSubtract = function (num1, num2, operation) {
    var firstNum = Number(num1);
    var secondNum = Number(num2);
    var sum = 0;
    if (operation == "add") {
        sum = Number(firstNum) + Number(secondNum);
    } else if (operation == "subtract") {
        sum = Number(firstNum) - Number(secondNum);
    };
    var decimal1 = num1.toString().split('.')[1].length;
    var decimal2 = num2.toString().split('.')[1].length;
    var leastDecimal = Math.min(decimal1, decimal2)
    var decimalHelper = 10 ** leastDecimal;
    var answer = Math.round(sum * decimalHelper) / decimalHelper
    answer = answer.toFixed(leastDecimal);
    return answer;
};

// console.log(addOrSubtract("4.051", "0.0094", "add"));

const multiplyOrDivide = function (num1, num2, operation) {
    var firstNum = Number(num1);
    var secondNum = Number(num2);
    var total = 0;
    if (operation == "multiply") {
        total = Number(firstNum) * Number(secondNum);
    } else if (operation == "divide") {
        total = Number(firstNum) / Number(secondNum);
    };
    var decimal1 = num1.toString().split('.')[1].length;
    var value1 = num1.toString().split('.')[0].length;
    var digits1 = decimal1 + value1;
    var decimal2 = num2.toString().split('.')[1].length;
    var value2 = num2.toString().split('.')[0].length;
    var digits2 = decimal2 + value2;
    // console.log(`num of sigfigs in first value is ${digits1} and in second value is ${digits2}`)
    var leastSigFig = Math.min(digits1, digits2)
    var value3 = total.toString().split('.')[0].length;
    var decimalInAns = leastSigFig - value3;
    // console.log(leastSigFig)
    // console.log(decimalInAns)
    var decimalHelper = 10 ** decimalInAns;
    var answer = Math.round(total * decimalHelper) / decimalHelper
    answer = answer.toFixed(decimalInAns);
    return answer;
};

console.log(multiplyOrDivide("4.51", "1.405", "multiply"));
