var quest0 = document.getElementById('q0');

var pool1 = generateNumArr(1, 2, 0.001, 3);
var pool2 = generateNumArr(12, 20, 0.1, 2);
var pool3 = generateNumArr(12, 13, 0.0001, 4);
var pool4 = generateNumArr(40, 50, 0.015, 3);
var pool5 = generateNumArr(7, 8, 0.01, 2);
var pool6 = generateNumArr(1, 2, 0.001, 3);
var pool7 = generateNumArr(12, 20, 0.1, 2);
var pool8 = generateNumArr(12, 13, 0.0001, 4);
var pool9 = generateNumArr(40, 50, 0.015, 3);
var pool10 = generateNumArr(7, 8, 0.01, 2);
var pool11 = generateNumArr(7, 8, 0.01, 2);

var inst1Value1 = selectNum(pool1);
var inst1Value2 = selectNum(pool2);

var str1 = inst1Value1.toString();
var str2 = inst1Value2.toString();

var answer = addOrSubtract(str1, str2, "add")

quest0.textContent = `${inst1Value1} + ${inst1Value2} = ${answer}`;

const generateQuestions = function(){
    for (let index = 1; index <= 10; index++) {
        var value1 = selectNum(pool3);
        var value2 = selectNum(pool5);
        var str1 = value1.toString();
        var str2 = value2.toString();
        var answer = addOrSubtract(str1, str2, "add")
        document.getElementById(`q${index}`).textContent = `${value1} + ${value2} = ${answer}`;
    }
}

generateQuestions();