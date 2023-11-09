// include one (or more) 'duplicate' + some new styles below
// TODO: try to work in molarity!

const massValueArray1 = generateNumArr(10.0, 20.0, 0.1, 1);
const moleArray1 = generateNumArr(0.2, 0.7, 0.0001, 4);
// 1) same as version 1 style 1 but 1 given mole (use massProdFromLRwithMole)
const contentEl1 = document.getElementById("modified-1");
for (let i = 0; i < 3; i++) {
    const mass = selectNum(massValueArray1);
    const mol = selectNum(moleArray1);
    const inst = selectNum(reactions);
    const R1 = inst.species[0];
    const R2 = inst.species[1];
    const P = inst.species[2];
    const EQN = inst.rxn;
    const mm1 = inst.molarMass[0];
    const mm3 = inst.molarMass[2];
    const coef1 = inst.coefficients[0];
    const coef2 = inst.coefficients[1];
    const coef3 = inst.coefficients[2];
    // needed params for massProdFromLRwithMole: m1, mol, mm1, mm3, coef1, coef2, coef3
    const unroundedAns = massProdFromLRwithMole(mass, mol, mm1, mm3, coef1, coef2, coef3);
    const ans = roundToGivenSigFig(3, unroundedAns);
    // needed params for identifyLRfromOneMolandOneMass: R1, R2, mass, mol, coef1, coef2, mm
    const LR = identifyLRfromOneMolandOneMass(R1, R2, mass, mol, coef1, coef2, mm1)
    const listEl = document.createElement('li');
    listEl.setAttribute('id', i);
    listEl.innerHTML = `Find the limiting reactant when ${mass} g of ${R1} reacts with ${mol} moles of ${R2}. What mass of ${P} can be produced? ${EQN}`;
    const paraEl = document.createElement("p");
    paraEl.innerHTML = `Limiting reactant is ${LR[0]} and mass produced = ${ans} g ${P}`;
    contentEl1.appendChild(listEl);
    listEl.appendChild(paraEl);
};

// 2) same as v1 style 2 but 2 given moles (use identifyLRfromMoles)
const moleArray2 = generateNumArr(0.1, 0.9, 0.001, 3);
const contentEl2 = document.getElementById("modified-2");
for (let i = 0; i < 3; i++) {
    const mol1 = selectNum(moleArray2);
    const mol2 = selectNum(moleArray2);
    const inst = selectNum(reactions);
    const R1 = inst.species[0];
    const R2 = inst.species[1];
    const EQN = inst.rxn;
    const coef1 = inst.coefficients[0];
    const coef2 = inst.coefficients[1];
    // needed params for identifyLRfromMoles: R1, R2, mol1, mol2, coef1, coef2
    const LR = identifyLRfromMoles(R1, R2, mol1, mol2, coef1, coef2);
    const listEl = document.createElement('li');
    listEl.setAttribute('id', i);
    listEl.innerHTML = `Find the limiting reactant when ${mol1} moles of ${R1} reacts with ${mol2} moles of ${R2}. The balanced chemical equation is ${EQN}`;
    const paraEl = document.createElement("p");
    paraEl.innerHTML = `Answer: ${LR[0]}`;
    contentEl2.appendChild(listEl);
    listEl.appendChild(paraEl);
};

// 3) same as v3 but ask about moles product (use moleProductFromLR)
const massValueArray2 = generateNumArr(30.0, 50.0, 0.1, 1);
const contentEl3 = document.getElementById("modified-3");
for (let i = 0; i < 3; i++) {
    const mass1 = selectNum(massValueArray2);
    const mass2 = selectNum(massValueArray2);
    const inst = selectNum(reactions);
    const R1 = inst.species[0];
    const R2 = inst.species[1];
    const P = inst.species[2];
    const EQN = inst.rxn;
    const mm1 = inst.molarMass[0];
    const mm2 = inst.molarMass[1];
    const coef1 = inst.coefficients[0];
    const coef2 = inst.coefficients[1];
    const coef3 = inst.coefficients[2];
    // needed params for moleProductFromLR: 
    const unroundedAns = moleProductFromLR(mass1, mass2, mm1, mm2, coef1, coef2, coef3);
    const ans = roundToGivenSigFig(4, unroundedAns);
    // needed params for identifyLRfromOneMolandOneMass: R1, R2, mass, mol, coef1, coef2, mm
    const listEl = document.createElement('li');
    listEl.setAttribute('id', i);
    listEl.innerHTML = `For the reaction below, how many moles of ${P} can be produced if ${mass1} g of ${R1} reacts with ${mass2} g of ${R2}? ${EQN}`;
    const paraEl = document.createElement("p");
    paraEl.innerHTML = `Moles produced = ${ans} mol ${P}`;
    contentEl3.appendChild(listEl);
    listEl.appendChild(paraEl);
};

// 4) same as v2 (#4) but use moles or ask for moles
const massValueArray3 = generateNumArr(20.0, 40.0, 0.1, 1);
const contentEl4 = document.getElementById("modified-4");
for (let i = 0; i < 2; i++) {
    const mass1 = selectNum(massValueArray3);
    const mass2 = selectNum(massValueArray3);
    const inst = selectNum(reactions);
    const R1 = inst.species[0];
    const R2 = inst.species[1];
    const P = inst.species[2];
    const EQN = inst.rxn;
    const mm1 = inst.molarMass[0];
    const mm2 = inst.molarMass[1];
    const mm3 = inst.molarMass[2];
    const coef1 = inst.coefficients[0];
    const coef2 = inst.coefficients[1];
    const coef3 = inst.coefficients[2];
    // needed params for massProductFromLR: m1, m2, mm1, mm2, mm3, coef1, coef2, coef3
    const unroundedAns = massProductFromLR(mass1, mass2, mm1, mm2, mm3, coef1, coef2, coef3);
    const massAns = roundToGivenSigFig(3, unroundedAns);
    const unroundedMol = unroundedAns / mm3;
    const molAns = roundToGivenSigFig(4,unroundedMol)
    // needed params for identifyLRfromMass: R1, R2, mass1, mass2, coef1, coef2, mm1, mm2
    const LR = identifyLRfromMass(R1, R2, mass1, mass2, coef1, coef2, mm1, mm2)
    const listEl = document.createElement('li');
    listEl.setAttribute('id', i);
    listEl.innerHTML = `Consider the balanced equation below. Identify the limiting reactant if ${mass1} g of ${R2} reacts with ${mass2} g of ${R1}. How much (in grams) of ${P} can be produced? How many moles of ${P} can be produced? ${EQN}`;
    const paraEl = document.createElement("p");
    paraEl.innerHTML = `Limiting reactant is ${LR[0]}; mass produced = ${massAns} g; moles produced = ${molAns} mol`;
    contentEl4.appendChild(listEl);
    listEl.appendChild(paraEl);
};

for (let i = 2; i < 4; i++) {
    const mass1 = selectNum(massValueArray3);
    const mass2 = selectNum(massValueArray3);
    const inst = selectNum(reactions);
    const R1 = inst.species[0];
    const R2 = inst.species[1];
    const P = inst.species[2];
    const EQN = inst.rxn;
    const mm1 = inst.molarMass[0];
    const mm2 = inst.molarMass[1];
    const mm3 = inst.molarMass[2];
    const coef1 = inst.coefficients[0];
    const coef2 = inst.coefficients[1];
    const coef3 = inst.coefficients[2];
    const mole2Unrounded = mass2 / mm2;
    const mole2 = roundToGivenSigFig(4, mole2Unrounded)
    // needed params for massProductFromLR: m1, m2, mm1, mm2, mm3, coef1, coef2, coef3
    const unroundedAns = massProductFromLR(mass1, mass2, mm1, mm2, mm3, coef1, coef2, coef3);
    const massAns = roundToGivenSigFig(3, unroundedAns);
    const unroundedMol = unroundedAns / mm3;
    const molAns = roundToGivenSigFig(4,unroundedMol)
    // needed params for identifyLRfromMass: R1, R2, mass1, mass2, coef1, coef2, mm1, mm2
    const LR = identifyLRfromMass(R1, R2, mass1, mass2, coef1, coef2, mm1, mm2)
    const listEl = document.createElement('li');
    listEl.setAttribute('id', i);
    listEl.innerHTML = `Consider the balanced equation below. Identify the limiting reactant if ${mass1} g of ${R2} reacts with ${mole2} moles of ${R1}. How much (in grams) of ${P} can be produced? How many moles of ${P} can be produced? ${EQN}`;
    const paraEl = document.createElement("p");
    paraEl.innerHTML = `Limiting reactant is ${LR[0]}; mass produced = ${massAns} g; moles produced = ${molAns} mol`;
    contentEl4.appendChild(listEl);
    listEl.appendChild(paraEl);
};

//TODO: go back and verify correct answers for cases where R1 and R2 and swapped