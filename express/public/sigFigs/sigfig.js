var pool1 = generateNumArr(1, 2, 0.1, 1);
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


const generateOddQuestions = function(){
    for (let index = 1; index <= 3; index+=2) {
        var value1 = selectNum(pool3);
        var value2 = selectNum(pool4);
        var str1 = value1.toString();
        var str2 = value2.toString();
        var answer = addOrSubtract(str1, str2, "add")
        document.getElementById(`q${index}`).textContent = `${value1} + ${value2} = ${answer}`;
    }
};

const generateOddMidQuestions = function(){
    for (let index = 5; index <= 11; index+=2) {
        var value1 = selectNum(pool5);
        var value2 = selectNum(pool1);
        var str1 = value1.toString();
        var str2 = value2.toString();
        var answer = addOrSubtract(str1, str2, "subtract")
        document.getElementById(`q${index}`).textContent = `${value1} - ${value2} = ${answer}`;
    }
};

const generateEvenMidQuestions = function(){
    for (let index = 0; index <= 4; index+=2) {
        var value1 = selectNum(pool9);
        var value2 = selectNum(pool7);
        var str1 = value1.toString();
        var str2 = value2.toString();
        var answer = addOrSubtract(str1, str2, "subtract")
        document.getElementById(`q${index}`).textContent = `${value1} - ${value2} = ${answer}`;
    }
};

const generateEvenQuestions = function(){
    for (let index = 6; index <= 10; index+=2) {
        var value1 = selectNum(pool2);
        var value2 = selectNum(pool8);
        var str1 = value1.toString();
        var str2 = value2.toString();
        var answer = addOrSubtract(str1, str2, "add");
        document.getElementById(`q${index}`).textContent = `${value1} + ${value2} = ${answer}`;
    }
};

const generateCustomQuestion = function(){
    var value1 = selectNum(pool6);
    var value2 = selectNum(pool10);
    var str1 = value1.toString();
    var str2 = value2.toString();
    var answer1 = addOrSubtract(str1, str2, "add");
    document.getElementById('q12').textContent = `${value1} + ${value2} = ${answer1}`;

    var value3 = selectNum(pool8);
    var value4 = selectNum(pool11);
    var str3 = value3.toString();
    var str4 = value4.toString();
    var answer2 = addOrSubtract(str3, str4, "subtract");
    document.getElementById('q13').textContent = `${value3} - ${value4} = ${answer2}`;

    var value5 = selectNum(pool1);
    var value6 = selectNum(pool5);
    var str5 = value5.toString();
    var str6 = value6.toString();
    var answer3 = addOrSubtract(str5, str6, "add");
    document.getElementById('q14').textContent = `${value5} + ${value6} = ${answer3}`;
};

generateCustomQuestion();
generateOddQuestions();
generateOddMidQuestions();
generateEvenMidQuestions();
generateEvenQuestions();


const genOddQuestions = function(){
    for (let index = 16; index <= 20; index+=2) {
        var value1 = selectNum(pool3);
        var value2 = selectNum(pool4);
        var str1 = value1.toString();
        var str2 = value2.toString();
        var answer = multiplyOrDivide(str1, str2, "multiply")
        document.getElementById(`q${index}`).textContent = `${value1} x ${value2} = ${answer}`;
    }
};

const genOddMidQuestions = function(){
    for (let index = 15; index <= 18; index++) {
        var value1 = selectNum(pool5);
        var value2 = selectNum(pool1);
        var str1 = value1.toString();
        var str2 = value2.toString();
        var answer = multiplyOrDivide(str1, str2, "divide")
        document.getElementById(`q${index}`).textContent = `${value1} ÷ ${value2} = ${answer}`;
    }
};

const genEvenMidQuestions = function(){
    for (let index = 19; index <= 22; index++) {
        var value1 = selectNum(pool9);
        var value2 = selectNum(pool7);
        var str1 = value1.toString();
        var str2 = value2.toString();
        var answer = multiplyOrDivide(str1, str2, "multiply")
        document.getElementById(`q${index}`).textContent = `${value1} x ${value2} = ${answer}`;
    }
};

const genEvenQuestions = function(){
    for (let index = 23; index <= 26; index++) {
        var value1 = selectNum(pool2);
        var value2 = selectNum(pool8);
        var str1 = value1.toString();
        var str2 = value2.toString();
        var answer = multiplyOrDivide(str1, str2, "divide");
        document.getElementById(`q${index}`).textContent = `${value1} ÷ ${value2} = ${answer}`;
    }
};

const genCustomQuestion = function(){
    var value1 = selectNum(pool6);
    var value2 = selectNum(pool10);
    var str1 = value1.toString();
    var str2 = value2.toString();
    var answer1 = multiplyOrDivide(str1, str2, "multiply");
    document.getElementById('q27').textContent = `${value1} x ${value2} = ${answer1}`;

    var value3 = selectNum(pool8);
    var value4 = selectNum(pool11);
    var str3 = value3.toString();
    var str4 = value4.toString();
    var answer2 = multiplyOrDivide(str3, str4, "divide");
    document.getElementById('q28').textContent = `${value3} ÷ ${value4} = ${answer2}`;

    var value5 = selectNum(pool1);
    var value6 = selectNum(pool5);
    var str5 = value5.toString();
    var str6 = value6.toString();
    var answer3 = multiplyOrDivide(str5, str6, "multiply");
    document.getElementById('q29').textContent = `${value5} x ${value6} = ${answer3}`;
};

genCustomQuestion();
genOddQuestions();
genOddMidQuestions();
genEvenMidQuestions();
genEvenQuestions();