
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
const addOrSubtract = function(num1, num2){
    var firstNum = Number(num1);
    var secondNum = Number(num2);
    var sum = Number(firstNum) + Number(secondNum)
    console.log(sum)
    // if (!Number.isInteger(num1) && !Number.isInteger(num2)){
        console.log(num1.toString().split('.')[1].length);
        console.log(num2.toString().split('.')[1].length);
    // }
};

addOrSubtract("4.20198", "3.001")


