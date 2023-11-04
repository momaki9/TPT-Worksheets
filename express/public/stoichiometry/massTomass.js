const instance1 = randomRxn(reactions);
const instance2 = randomRxn(reactions);
const instance3 = randomRxn(reactions);
const instance4 = randomRxn(reactions);
const instance5 = randomRxn(reactions);

const instRxn1 = instance1.rxn;
const instRxn2 = instance2.rxn;
const instRxn3 = instance3.rxn;
const instRxn4 = instance4.rxn;
const instRxn5 = instance4.rxn;

const instanceValues = generateNumArr(10, 99, 0.1, 1);

const mass1 = selectNum(instanceValues);
const mass2 = selectNum(instanceValues);
const mass3 = selectNum(instanceValues);
const mass4 = selectNum(instanceValues);
const mass5 = selectNum(instanceValues);

const text1 = `Calculate how much ${instance1.species[3]} can be produced from ${mass1} g of ${instance1.species[0]}.`;
const text2 = `Calculate how much ${instance2.species[3]} can be produced from ${mass2} g of ${instance2.species[1]}.`;
const text3 = `Calculate how much ${instance3.species[2]} can be produced from ${mass3} g of ${instance3.species[0]}.`;
const text4 = `Calculate how much ${instance4.species[2]} can be produced from ${mass4} g of ${instance4.species[1]}.`;
const text5 = `Calculate how much ${instance5.species[2]} can be produced from ${mass5} g of ${instance5.species[0]}.`;

document.getElementById('mass-to-mass-q1').innerHTML = text1;
document.getElementById('rxn1').innerHTML = instRxn1;
document.getElementById('mass-to-mass-q2').innerHTML = text2;
document.getElementById('rxn2').innerHTML = instRxn2;
document.getElementById('mass-to-mass-q3').innerHTML = text3;
document.getElementById('rxn3').innerHTML = instRxn3;
document.getElementById('mass-to-mass-q4').innerHTML = text4;
document.getElementById('rxn4').innerHTML = instRxn4;
document.getElementById('mass-to-mass-q5').innerHTML = text5;
document.getElementById('rxn5').innerHTML = instRxn5;

const answer1 = massToMassStoic(mass1,instance1.coefficients[0],instance1.coefficients[3],instance1.molarMass[0],instance1.molarMass[3]);
const answer2 = massToMassStoic(mass2,instance2.coefficients[1],instance2.coefficients[3],instance2.molarMass[1],instance2.molarMass[3]);
const answer3 = massToMassStoic(mass3,instance3.coefficients[0],instance3.coefficients[2],instance3.molarMass[0],instance3.molarMass[2]);
const answer4 = massToMassStoic(mass4,instance4.coefficients[1],instance4.coefficients[2],instance4.molarMass[1],instance4.molarMass[2]);
const answer5 = massToMassStoic(mass5,instance5.coefficients[0],instance5.coefficients[2],instance5.molarMass[0],instance5.molarMass[2]);

document.getElementById("TA1").textContent = "The correct answer is " + answer1.toFixed(2);
document.getElementById("TA2").textContent = "The correct answer is " + answer2.toFixed(2);
document.getElementById("TA3").textContent = "The correct answer is " + answer3.toFixed(2);
document.getElementById("TA4").textContent = "The correct answer is " + answer4.toFixed(2);
document.getElementById("TA5").textContent = "The correct answer is " + answer5.toFixed(2);