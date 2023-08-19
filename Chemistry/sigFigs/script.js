const numbers = [95.0, 0.04, 0.08, 0.0000098, 2023, 205000, 1.5003, 6.022, 0.02001, 500.09, 920, 783.010, 40.0, 0.00000031, 22000];

const divEl = document.getElementById("sig-fig");

const randomValue = Math.random();

let valueOne = numbers[0] * randomValue;
valueOne = (Math.round(valueOne * 100) /100).toFixed(1)
const questionOne = document.createElement("h3");
questionOne.textContent = `1. Original value = 95.0; New value = ${valueOne}`;
divEl.appendChild(questionOne);

let valueTwo = numbers[1] * randomValue;
valueTwo = (Math.round(valueTwo * 100) /100)
const questionTwo = document.createElement("h3");
questionTwo.textContent = `2. Original value(${numbers[1]}) = 4.0e-2; New value = ${valueTwo.toExponential(1)}`;
divEl.appendChild(questionTwo);

const random = function () {
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        const modified = numbers[index] * randomValue;
        const roundedMod = modified.toFixed(2)
        const subEl = document.createElement("p");
        subEl.textContent = element + " or another value is equal to " + roundedMod;

        divEl.appendChild(subEl)
    }
}

random();
