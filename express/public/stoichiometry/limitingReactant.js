const instanceNums = generateNumArr(11,50,0.01,2)
const firstMass1 = selectNum(instanceNums);
const secondMass1 = selectNum(instanceNums);
const reactionInst1 = randomRxn(reactions);

const firstMass2 = selectNum(instanceNums);
const secondMass2 = selectNum(instanceNums);
const reactionInst2 = randomRxn(reactions);

const firstMass3 = selectNum(instanceNums);
const secondMass3 = selectNum(instanceNums);
const reactionInst3 = randomRxn(reactions);

const firstMass4 = selectNum(instanceNums);
const secondMass4 = selectNum(instanceNums);
const reactionInst4 = randomRxn(reactions);

const firstMass5 = selectNum(instanceNums);
const secondMass5 = selectNum(instanceNums);
const reactionInst5 = randomRxn(reactions);

const qText1 = `For the reaction below, how much ${reactionInst1.species[3]} is produced if ${firstMass1} g of ${reactionInst1.species[0]} reacts with ${secondMass1} g of ${reactionInst1.species[1]}?`;
const qText2 = `For the reaction below, how much ${reactionInst2.species[2]} is produced if ${firstMass2} g of ${reactionInst2.species[0]} reacts with ${secondMass2} g of ${reactionInst2.species[1]}?`;
const qText3 = `For the reaction below, how much ${reactionInst3.species[3]} is produced if ${firstMass3} g of ${reactionInst3.species[0]} reacts with ${secondMass3} g of ${reactionInst3.species[1]}?`;
const qText4 = `For the reaction below, how much ${reactionInst4.species[2]} is produced if ${firstMass4} g of ${reactionInst4.species[0]} reacts with ${secondMass4} g of ${reactionInst4.species[1]}?`;
const qText5 = `For the reaction below, how much ${reactionInst5.species[3]} is produced if ${firstMass5} g of ${reactionInst5.species[0]} reacts with ${secondMass5} g of ${reactionInst5.species[1]}?`;

document.getElementById('LR-q1').innerHTML = qText1;
document.getElementById('eqn1').innerHTML = reactionInst1.rxn;

document.getElementById('LR-q2').innerHTML = qText2;
document.getElementById('eqn2').innerHTML = reactionInst2.rxn;

document.getElementById('LR-q3').innerHTML = qText3;
document.getElementById('eqn3').innerHTML = reactionInst3.rxn;

document.getElementById('LR-q4').innerHTML = qText4;
document.getElementById('eqn4').innerHTML = reactionInst4.rxn;

document.getElementById('LR-q5').innerHTML = qText5;
document.getElementById('eqn5').innerHTML = reactionInst5.rxn;

const firstAnswer1 = massToMassStoic(firstMass1, reactionInst1.coefficients[0],reactionInst1.coefficients[3], reactionInst1.molarMass[0], reactionInst1.molarMass[3]);
const secondAnswer1 = massToMassStoic(secondMass1, reactionInst1.coefficients[1],reactionInst1.coefficients[3], reactionInst1.molarMass[1], reactionInst1.molarMass[3]);

const firstAnswer2 = massToMassStoic(firstMass2, reactionInst2.coefficients[0],reactionInst2.coefficients[2], reactionInst2.molarMass[0], reactionInst2.molarMass[2]);
const secondAnswer2 = massToMassStoic(secondMass2, reactionInst2.coefficients[1],reactionInst2.coefficients[2], reactionInst2.molarMass[1], reactionInst2.molarMass[2]);

const firstAnswer3 = massToMassStoic(firstMass3, reactionInst3.coefficients[0],reactionInst3.coefficients[3], reactionInst3.molarMass[0], reactionInst3.molarMass[3]);
const secondAnswer3 = massToMassStoic(secondMass3, reactionInst3.coefficients[1],reactionInst3.coefficients[3], reactionInst3.molarMass[1], reactionInst3.molarMass[3]);

const firstAnswer4 = massToMassStoic(firstMass4, reactionInst4.coefficients[0],reactionInst4.coefficients[2], reactionInst4.molarMass[0], reactionInst4.molarMass[2]);
const secondAnswer4 = massToMassStoic(secondMass4, reactionInst5.coefficients[1],reactionInst5.coefficients[2], reactionInst5.molarMass[1], reactionInst5.molarMass[2]);

const firstAnswer5 = massToMassStoic(firstMass5, reactionInst5.coefficients[0],reactionInst5.coefficients[3], reactionInst5.molarMass[0], reactionInst5.molarMass[3]);
const secondAnswer5 = massToMassStoic(secondMass5, reactionInst5.coefficients[1],reactionInst5.coefficients[3], reactionInst5.molarMass[1], reactionInst5.molarMass[3]);

const finalAnswer1 = compareAndReturnSmaller(firstAnswer1, secondAnswer1);
document.getElementById('ans1').textContent = `Answer = ${finalAnswer1.toFixed(2)} g`;

const finalAnswer2 = compareAndReturnSmaller(firstAnswer2, secondAnswer2);
document.getElementById('ans2').textContent = `Answer = ${finalAnswer2.toFixed(2)} g`;

const finalAnswer3 = compareAndReturnSmaller(firstAnswer3, secondAnswer3);
document.getElementById('ans3').textContent = `Answer = ${finalAnswer3.toFixed(2)} g`;

const finalAnswer4 = compareAndReturnSmaller(firstAnswer4, secondAnswer4);
document.getElementById('ans4').textContent = `Answer = ${finalAnswer4.toFixed(2)} g`;

const finalAnswer5 = compareAndReturnSmaller(firstAnswer5, secondAnswer5);
document.getElementById('ans5').textContent = `Answer = ${finalAnswer5.toFixed(2)} g`;