
// write a function that generates a list of numbers from num1 to num2, given an incrementor (inc) and number of decimals
const generateNum = function (num1, num2, inc, dec) {
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

    console.log(numArray)
};

// generateNum(15.524, 15.25, 0.001, 3);


// write a function that adds or subtracts two numbers and return the correct number of decimals
// be sure to treat num1 and num2 as strings
const addOrSubtract = function(num1, num2, operation){
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
    var decimalHelper = 10**leastDecimal;
    var answer = Math.round(sum * decimalHelper)/decimalHelper
    answer = answer.toFixed(leastDecimal);
    return answer;
};

console.log(addOrSubtract("4.051", "0.0094", "add"));


