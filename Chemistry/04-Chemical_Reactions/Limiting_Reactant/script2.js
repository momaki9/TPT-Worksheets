const contentEl_v2 = document.getElementById("content-v2");
const massValueArr = generateNumArr(20.1,75.1,0.2,1);

for (let i = 0; i < 3; i++) {
    const mass1 = selectNum(massValueArr);
    const mass2 = selectNum(massValueArr);
    const chosenInst = selectNum(reactions);
    const chosenReactant1 = chosenInst.species[0];
    const chosenReactant2 = chosenInst.species[1];
    const chosenProduct= chosenInst.species[2];
    const chosenRxn = chosenInst.rxn;
    const listEl = document.createElement('li');
    listEl.setAttribute("id", i);
    listEl.innerHTML = `Determine how much (in g) ${chosenProduct} can be produced when ${mass1} g of ${chosenReactant2} reacts with ${mass2} g of ${chosenReactant1} according to the balanced chemical equation below: ${chosenRxn}`;
    contentEl_v2.appendChild(listEl);
    //params are: m1, m2, mm1, mm2, mm3, coef1, coef2, coef3
    const unroundedAns = massProductFromLR(mass1,mass2,chosenInst.molarMass[0],chosenInst.molarMass[1],chosenInst.molarMass[2],chosenInst.coefficients[0],chosenInst.coefficients[1],chosenInst.coefficients[2]);
    const answer = roundToGivenSigFig(3,unroundedAns)
    const paraEl = document.createElement('p');
    paraEl.textContent = `Answer is ${answer} g`;
    listEl.appendChild(paraEl)
};


for (let i = 3; i < 6; i++) {
    const mass1 = selectNum(massValueArr);
    const mass2 = selectNum(massValueArr);
    const chosenInst = selectNum(reactions);
    const chosenReactant1 = chosenInst.species[0];
    const chosenReactant2 = chosenInst.species[1];
    const chosenProduct= chosenInst.species[2];
    const chosenRxn = chosenInst.rxn;
    const listEl = document.createElement('li');
    const paraEl = document.createElement('p');
    listEl.setAttribute("id", i);
    listEl.innerHTML = `Consider the balanced equation. Identify the limiting reactant if ${mass1} g of ${chosenReactant1} reacts with ${mass2} g of ${chosenReactant2}. How much (in grams) of ${chosenProduct} can be produced? ${chosenRxn}`;
    contentEl_v2.appendChild(listEl);
    const unroundedAns = massProductFromLR(mass1,mass2,chosenInst.molarMass[0],chosenInst.molarMass[1],chosenInst.molarMass[2],chosenInst.coefficients[0],chosenInst.coefficients[1],chosenInst.coefficients[2]);
    const answer = roundToGivenSigFig(3,unroundedAns)
    paraEl.textContent = `Answer is ${answer} g`;
    listEl.appendChild(paraEl)
};