//This function detemines the excess mass (in g) given mass of 2 reactants, their coefficients, and their molar masses
//This function returns excess mass (excessMass)
const excessMassFromLR = function (mass1, mass2, coef1, coef2, mm1, mm2, R1, R2) {
    const moles1 = mass1 / mm1;
    const moles2 = mass2 / mm2;
    const moles2Needed = moles1 * (coef2 / coef1);
    let molesUsed = 0;
    let excessMass = 0;
    let LR;
    let ER;
    if (moles2Needed > moles2) {
        const moles1Needed = moles2 * (coef1 / coef2);
        molesUsed = moles1 - moles1Needed;
        excessMass = molesUsed * mm1;
        LR = R2;
        ER = R1;
    } else if (moles2Needed < moles2) {
        const moles2Needed = moles1 * (coef2 / coef1);
        molesUsed = moles2 - moles2Needed;
        excessMass = molesUsed * mm2;
        LR = R1;
        ER = R2;
    } else {
        excessMass = 0;
    }
    return [excessMass, LR, ER];
};

const reactions = [
    {
        rxn: "2Na + 2H<sub>2</sub>O &rarr; 2NaOH + H<sub>2</sub>",
        species: ["Na", "H<sub>2</sub>O", "NaOH", "H<sub>2</sub>"],
        coefficients: [2, 2, 2, 1],
        molarMass: [22.989769, 18.01528, 39.997, 2.016]
    },
    {
        rxn: "Cu + 4HNO<sub>3</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O",
        species: ["Cu", "HNO<sub>3</sub>", "Cu(NO<sub>2</sub>)<sub>3</sub>", "NO<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [1, 4, 1, 2, 2],
        molarMass: [63.546, 63.01, 187.56, 46.0055, 18.01528]
    },
    {
        rxn: "AgNO<sub>3</sub> + NaCl &rarr; AgCl + NaNO<sub>3</sub>",
        species: ["AgNO<sub>3</sub>", "NaCl", "AgCl", "NaNO<sub>3</sub>"],
        coefficients: [1, 1, 1, 1],
        molarMass: [169.87, 58.44, 143.32, 84.9947]
    },
    {
        rxn: "2Fe + 3H<sub>2</sub>SO<sub>4</sub> &rarr; Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3H<sub>2</sub>",
        species: ["Fe", "H<sub>2</sub>SO<sub>4</sub>", "Fe<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub>", "H<sub>2</sub>"],
        coefficients: [2, 3, 1, 3],
        molarMass: [55.845, 98.07228, 399.8598, 2.016]
    },
    {
        rxn: "Mg(OH)<sub>2</sub> + 2HCl  &rarr;  MgCl<sub>2</sub> + 2H<sub>2</sub>O",
        species: ["Mg(OH)<sub>2</sub>", "HCl", "MgCl<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [1, 2, 1, 2],
        molarMass: [58.31848, 36.45384, 95.196, 18.01528]
    },
    {
        rxn: "2H<sub>3</sub>PO<sub>4</sub> + 3Mg(OH)<sub>2</sub>  &rarr;  Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 6H<sub>2</sub>O",
        species: ["H<sub>3</sub>PO<sub>4</sub>", "Mg(OH)<sub>2</sub>", "Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [2, 3, 1, 6],
        molarMass: [97.994882, 58.31848, 262.3854724, 18.01528]
    }
];

const randomRxn = function (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

const instanceNums = generateNumArr(11, 50, 0.01, 2);
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
const qText2 = `Given the following equation, find the limiting reactant when ${firstMass2} g of ${reactionInst2.species[0]} reacts with ${secondMass2} g of ${reactionInst2.species[1]}. How much ${reactionInst2.species[2]} can be produced?`;
const qText3 = `For the reaction below, how much ${reactionInst3.species[3]} is produced if ${firstMass3} g of ${reactionInst3.species[0]} reacts with ${secondMass3} g of ${reactionInst3.species[1]}?`;
const qText4 = `Consider the reaction below. How much ${reactionInst4.species[2]} can be produced if ${firstMass4} g of ${reactionInst4.species[0]} reacts with ${secondMass4} g of ${reactionInst4.species[1]}?`;
const qText5 = `Find the limiting reagent and determine how much ${reactionInst5.species[3]} could be produced if ${firstMass5} g of ${reactionInst5.species[0]} reacts with ${secondMass5} g of ${reactionInst5.species[1]}.`;

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

const firstAnswer1 = massToMassStoic(firstMass1, reactionInst1.coefficients[0], reactionInst1.coefficients[3], reactionInst1.molarMass[0], reactionInst1.molarMass[3]);
const secondAnswer1 = massToMassStoic(secondMass1, reactionInst1.coefficients[1], reactionInst1.coefficients[3], reactionInst1.molarMass[1], reactionInst1.molarMass[3]);

const firstAnswer2 = massToMassStoic(firstMass2, reactionInst2.coefficients[0], reactionInst2.coefficients[2], reactionInst2.molarMass[0], reactionInst2.molarMass[2]);
const secondAnswer2 = massToMassStoic(secondMass2, reactionInst2.coefficients[1], reactionInst2.coefficients[2], reactionInst2.molarMass[1], reactionInst2.molarMass[2]);

const firstAnswer3 = massToMassStoic(firstMass3, reactionInst3.coefficients[0], reactionInst3.coefficients[3], reactionInst3.molarMass[0], reactionInst3.molarMass[3]);
const secondAnswer3 = massToMassStoic(secondMass3, reactionInst3.coefficients[1], reactionInst3.coefficients[3], reactionInst3.molarMass[1], reactionInst3.molarMass[3]);

const firstAnswer4 = massToMassStoic(firstMass4, reactionInst4.coefficients[0], reactionInst4.coefficients[2], reactionInst4.molarMass[0], reactionInst4.molarMass[2]);
const secondAnswer4 = massToMassStoic(secondMass4, reactionInst4.coefficients[1], reactionInst4.coefficients[2], reactionInst4.molarMass[1], reactionInst4.molarMass[2]);

const firstAnswer5 = massToMassStoic(firstMass5, reactionInst5.coefficients[0], reactionInst5.coefficients[3], reactionInst5.molarMass[0], reactionInst5.molarMass[3]);
const secondAnswer5 = massToMassStoic(secondMass5, reactionInst5.coefficients[1], reactionInst5.coefficients[3], reactionInst5.molarMass[1], reactionInst5.molarMass[3]);

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

//second version

// calculate excess reactant
const qText1_2 = `For the reaction below, determine the limiting reactant and how much ${reactionInst1.species[3]} can be produced if ${firstMass1} g of ${reactionInst1.species[0]} reacts with ${secondMass1} g of ${reactionInst1.species[1]}? How much of the excess reactant will be left?`;
// calculate other product as well
const qText2_2 = `Given the following equation, find the limiting reactant when ${firstMass2} g of ${reactionInst2.species[0]} reacts with ${secondMass2} g of ${reactionInst2.species[1]}. How much ${reactionInst2.species[2]} can be produced? How much ${reactionInst2.species[3]} can be produced?`;
//one reactant given in moles
const qText3_2 = `For the reaction below, how much ${reactionInst3.species[3]} is produced if ${firstMass3} g of ${reactionInst3.species[0]} reacts with ${secondMass3} g of ${reactionInst3.species[1]}?`;
//one reactant given volume and molarity
const qText4_2 = `Consider the reaction below. How much ${reactionInst4.species[2]} can be produced if ${firstMass4} g of ${reactionInst4.species[0]} reacts with ${secondMass4} g of ${reactionInst4.species[1]}?`;
//calculate excess reactant
const qText5_2 = `Find the limiting reagent and determine how much ${reactionInst5.species[3]} could be produced if ${firstMass5} g of ${reactionInst5.species[0]} reacts with ${secondMass5} g of ${reactionInst5.species[1]}.`;

document.getElementById('LR-q1-2').innerHTML = qText1_2;
document.getElementById('eqn1-2').innerHTML = reactionInst1.rxn;

document.getElementById('LR-q2-2').innerHTML = qText2_2;
document.getElementById('eqn2-2').innerHTML = reactionInst2.rxn;

document.getElementById('LR-q3-2').innerHTML = qText3_2;
document.getElementById('eqn3-2').innerHTML = reactionInst3.rxn;

document.getElementById('LR-q4-2').innerHTML = qText4_2;
document.getElementById('eqn4-2').innerHTML = reactionInst4.rxn;

document.getElementById('LR-q5-2').innerHTML = qText5_2;
document.getElementById('eqn5-2').innerHTML = reactionInst5.rxn;

const firstAnswer1_2 = massToMassStoic(firstMass1, reactionInst1.coefficients[0], reactionInst1.coefficients[3], reactionInst1.molarMass[0], reactionInst1.molarMass[3]);
const secondAnswer1_2 = massToMassStoic(secondMass1, reactionInst1.coefficients[1], reactionInst1.coefficients[3], reactionInst1.molarMass[1], reactionInst1.molarMass[3]);

const firstAnswer2_2 = massToMassStoic(firstMass2, reactionInst2.coefficients[0], reactionInst2.coefficients[2], reactionInst2.molarMass[0], reactionInst2.molarMass[2]);
const secondAnswer2_2 = massToMassStoic(secondMass2, reactionInst2.coefficients[1], reactionInst2.coefficients[2], reactionInst2.molarMass[1], reactionInst2.molarMass[2]);

const firstAnswer2_3 = massToMassStoic(firstMass2, reactionInst2.coefficients[0], reactionInst2.coefficients[3], reactionInst2.molarMass[0], reactionInst2.molarMass[3]);
const secondAnswer2_3 = massToMassStoic(secondMass2, reactionInst2.coefficients[1], reactionInst2.coefficients[3], reactionInst2.molarMass[1], reactionInst2.molarMass[3]);

const firstAnswer3_2 = massToMassStoic(firstMass3, reactionInst3.coefficients[0], reactionInst3.coefficients[3], reactionInst3.molarMass[0], reactionInst3.molarMass[3]);
const secondAnswer3_2 = massToMassStoic(secondMass3, reactionInst3.coefficients[1], reactionInst3.coefficients[3], reactionInst3.molarMass[1], reactionInst3.molarMass[3]);

const firstAnswer4_2 = massToMassStoic(firstMass4, reactionInst4.coefficients[0], reactionInst4.coefficients[2], reactionInst4.molarMass[0], reactionInst4.molarMass[2]);
const secondAnswer4_2 = massToMassStoic(secondMass4, reactionInst4.coefficients[1], reactionInst4.coefficients[2], reactionInst4.molarMass[1], reactionInst4.molarMass[2]);

const firstAnswer5_2 = massToMassStoic(firstMass5, reactionInst5.coefficients[0], reactionInst5.coefficients[3], reactionInst5.molarMass[0], reactionInst5.molarMass[3]);
const secondAnswer5_2 = massToMassStoic(secondMass5, reactionInst5.coefficients[1], reactionInst5.coefficients[3], reactionInst5.molarMass[1], reactionInst5.molarMass[3]);

// testing answer from different function
// firstMass1, reactionInst1.coefficients[0],reactionInst1.coefficients[3], reactionInst1.molarMass[0], reactionInst1.molarMass[3]
// params for below function: mass1, mass2, coef1, coef2, mm1, mm2
const comparingFinalAns1_2 = excessMassFromLR(firstMass1, secondMass1, reactionInst1.coefficients[0], reactionInst1.coefficients[1], reactionInst1.molarMass[0], reactionInst1.molarMass[1], reactionInst1.species[0], reactionInst1.species[1]);
const finalAnswer1_2 = compareAndReturnSmaller(firstAnswer1_2, secondAnswer1_2);

document.getElementById('ans1-2').innerHTML = `LR is ${comparingFinalAns1_2[1]}; ${finalAnswer1_2.toFixed(2)} g produced; ${comparingFinalAns1_2[0].toFixed(2)} g excess of ${comparingFinalAns1_2[2]}.`;

const limitingReactant = excessMassFromLR(firstMass2, secondMass2, reactionInst2.coefficients[0], reactionInst2.coefficients[1], reactionInst2.molarMass[0], reactionInst2.molarMass[1], reactionInst2.species[0], reactionInst2.species[1])
const finalAnswer2_2 = compareAndReturnSmaller(firstAnswer2_2, secondAnswer2_2);
const finalAnswer2_3 = compareAndReturnSmaller(firstAnswer2_3, secondAnswer2_3);
document.getElementById('ans2-2').innerHTML = `LR is ${limitingReactant[1]}; ${finalAnswer2_2.toFixed(2)} g ${reactionInst2.species[2]}; ${finalAnswer2_3.toFixed(2)} g ${reactionInst2.species[3]}.`;

const finalAnswer3_2 = compareAndReturnSmaller(firstAnswer3_2, secondAnswer3_2);
document.getElementById('ans3-2').textContent = `Answer = ${finalAnswer3_2.toFixed(2)} g`;

const finalAnswer4_2 = compareAndReturnSmaller(firstAnswer4_2, secondAnswer4_2);
document.getElementById('ans4-2').textContent = `Answer = ${finalAnswer4_2.toFixed(2)} g`;

const finalAnswer5_2 = compareAndReturnSmaller(firstAnswer5_2, secondAnswer5_2);
document.getElementById('ans5-2').textContent = `Answer = ${finalAnswer5_2.toFixed(2)} g`;


// version 1 - Identify

const allReactions = [
    {
        rxn: "Cu + 4HNO<sub>3</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O",
        species: ["Cu", "HNO<sub>3</sub>", "Cu(NO<sub>3</sub>)<sub>2</sub>", "NO<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [1, 4, 1, 2, 2],
        molarMass: [63.546, 63.012, 187.56, 46.0055, 18.01528]
    },
    {
        rxn: "2Na + 2H<sub>2</sub>O &rarr; 2NaOH + H<sub>2</sub>",
        species: ["Na", "H<sub>2</sub>O", "NaOH", "H<sub>2</sub>"],
        coefficients: [2, 2, 2, 1],
        molarMass: [22.990, 18.015, 39.997, 2.016]
    },
    {
        rxn: "AgNO<sub>3</sub> + NaCl &rarr; AgCl + NaNO<sub>3</sub>",
        species: ["AgNO<sub>3</sub>", "NaCl", "AgCl", "NaNO<sub>3</sub>"],
        coefficients: [1, 1, 1, 1],
        molarMass: [169.874, 58.44, 143.32, 84.9947]
    },
    {
        rxn: "2Fe + 3H<sub>2</sub>SO<sub>4</sub> &rarr; Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3H<sub>2</sub>",
        species: ["Fe", "H<sub>2</sub>SO<sub>4</sub>", "Fe<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub>", "H<sub>2</sub>"],
        coefficients: [2, 3, 1, 3],
        molarMass: [55.845, 98.072, 399.8598, 2.016]
    },
    {
        rxn: "Mg(OH)<sub>2</sub> + 2HCl  &rarr;  MgCl<sub>2</sub> + 2H<sub>2</sub>O",
        species: ["Mg(OH)<sub>2</sub>", "HCl", "MgCl<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [1, 2, 1, 2],
        molarMass: [58.31848, 36.45384, 95.196, 18.01528]
    },
    {
        rxn: "2H<sub>3</sub>PO<sub>4</sub> + 3Mg(OH)<sub>2</sub>  &rarr;  Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 6H<sub>2</sub>O",
        species: ["H<sub>3</sub>PO<sub>4</sub>", "Mg(OH)<sub>2</sub>", "Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [2, 3, 1, 6],
        molarMass: [97.994882, 58.31848, 262.3854724, 18.01528]
    },
    {
        rxn: "2C<sub>6</sub>H<sub>14</sub>O<sub>4</sub> + 15O<sub>2</sub> &rarr; 12CO<sub>2</sub> + 14H<sub>2</sub>O",
        species: ["C<sub>6</sub>H<sub>14</sub>O<sub>4</sub>", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [2, 15, 12, 14],
        molarMass: [150.174, 31.998, 44.01, 18.01528]
    },
    {
        rxn: "2NH<sub>3</sub> + CO<sub>2</sub> &rarr; CO(NH<sub>2</sub>)<sub>2</sub> + H<sub>2</sub>O",
        species: ["NH<sub>3</sub>", "CO<sub>2</sub>", "CO(NH<sub>2</sub>)<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [2, 1, 1, 1],
        molarMass: [17.031, 44.009, 60.06, 18.01528]
    },
    {
        rxn: "2Al + 6HCl &rarr; 2AlCl<sub>3</sub> + 3H<sub>2</sub>",
        species: ["Al", "HCl", "AlCl<sub>3</sub>", "3H<sub>2</sub>"],
        coefficients: [2, 6, 2, 3],
        molarMass: [26.982, 36.458, 133.332, 2.016]
    },
    {
        rxn: "CO + 2H<sub>2</sub> &rarr; CH<sub>3</sub>OH",
        species: ["CO", "2H<sub>2</sub>", "CH<sub>3</sub>OH"],
        coefficients: [1, 2, 1],
        molarMass: [28.01, 2.016, 32.04]
    }
];

const identifyLRfromMass = function (R1, R2, mass1, mass2, coef1, coef2, mm1, mm2) {
    const moles1 = mass1 / mm1;
    const moles2 = mass2 / mm2;
    const moles2Needed = moles1 * (coef2 / coef1);
    let LR;
    let ER;
    if (moles2Needed > moles2) {
        LR = R2;
        ER = R1;
    } else if (moles2Needed < moles2) {
        LR = R1;
        ER = R2;
    }
    return [LR, ER];
};

const massValueArray = generateNumArr(10.1, 60.9, 0.2, 1);
const contentEl1 = document.getElementById("LR-v1-1");
const contentEl2 = document.getElementById("LR-v1-2");
const contentEl3 = document.getElementById("LR-v1-3");
const contentEl4 = document.getElementById("LR-v1-4");

for (let i = 0; i < 3; i++) {
    const instanceRxn = selectNum(allReactions);
    const rxn = instanceRxn.rxn;
    const R1 = instanceRxn.species[0];
    const coef1 = instanceRxn.coefficients[0];
    const mm1 = instanceRxn.molarMass[0];
    const R2 = instanceRxn.species[1];
    const coef2 = instanceRxn.coefficients[1];
    const mm2 = instanceRxn.molarMass[1];
    const mass1 = selectNum(massValueArray);
    const mass2 = selectNum(massValueArray);
    const answer = identifyLRfromMass(R1, R2, mass1, mass2, coef1, coef2, mm1, mm2)[0];
    const listEl = document.createElement("li");
    listEl.setAttribute("id", `instance-${i}`)
    listEl.innerHTML = `Find the limiting reactant when ${mass1} g of ${R1} reacts with ${mass2} g of ${R2} according to the balanced chemical equation: ${rxn} (Answer is ${answer})`;
    contentEl1.appendChild(listEl);
};

for (let i = 3; i < 6; i++) {
    const instanceRxn = selectNum(allReactions);
    const rxn = instanceRxn.rxn;
    const R1 = instanceRxn.species[0];
    const coef1 = instanceRxn.coefficients[0];
    const mm1 = instanceRxn.molarMass[0];
    const R2 = instanceRxn.species[1];
    const coef2 = instanceRxn.coefficients[1];
    const mm2 = instanceRxn.molarMass[1];
    const mass1 = selectNum(massValueArray);
    const mass2 = selectNum(massValueArray);
    const answer = identifyLRfromMass(R1, R2, mass1, mass2, coef1, coef2, mm1, mm2)[0];
    const listEl = document.createElement("li");
    listEl.setAttribute("id", `instance-${i}`)
    listEl.innerHTML = `Consider the balanced equation ${rxn} Identify the limiting reactant if ${mass1} g of ${R1} reacts with ${mass2} g of ${R2}. (Answer is ${answer})`;
    contentEl2.appendChild(listEl);
};

for (let i = 6; i < 9; i++) {
    const instanceRxn = selectNum(allReactions);
    const rxn = instanceRxn.rxn;
    const R1 = instanceRxn.species[0];
    const coef1 = instanceRxn.coefficients[0];
    const mm1 = instanceRxn.molarMass[0];
    const R2 = instanceRxn.species[1];
    const coef2 = instanceRxn.coefficients[1];
    const mm2 = instanceRxn.molarMass[1];
    const mass1 = selectNum(massValueArray);
    const mass2 = selectNum(massValueArray);
    const answer = identifyLRfromMass(R1, R2, mass1, mass2, coef1, coef2, mm1, mm2)[0];
    const listEl = document.createElement("li");
    listEl.setAttribute("id", `instance-${i}`)
    listEl.innerHTML = `Identify the limiting reactant when ${mass1} g of ${R1} reacts with ${mass2} g of ${R2} ${rxn} (Answer is ${answer})`;
    contentEl3.appendChild(listEl);
};

for (let i = 9; i < 12; i++) {
    const instanceRxn = selectNum(allReactions);
    const rxn = instanceRxn.rxn;
    const R1 = instanceRxn.species[0];
    const coef1 = instanceRxn.coefficients[0];
    const mm1 = instanceRxn.molarMass[0];
    const R2 = instanceRxn.species[1];
    const coef2 = instanceRxn.coefficients[1];
    const mm2 = instanceRxn.molarMass[1];
    const mass1 = selectNum(massValueArray);
    const mass2 = selectNum(massValueArray);
    const answer = identifyLRfromMass(R1, R2, mass1, mass2, coef1, coef2, mm1, mm2)[0];
    const listEl = document.createElement("li");
    listEl.setAttribute("id", `instance-${i}`)
    listEl.innerHTML = `Given the following equation, find the limiting reactant when ${mass1} g of ${R1} reacts with ${mass2} g of ${R2}. ${rxn} (Answer is ${answer})`;
    contentEl4.appendChild(listEl);
};

// TODO: Could add more variation if moles are used instead of mass for either or both reactants
// TODO: fix questions where LR is being asked