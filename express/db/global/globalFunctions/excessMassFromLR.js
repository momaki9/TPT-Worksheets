//This function detemines the excess mass (in g) given mass of 2 reactants, their coefficients, and their molar masses
//This function returns excess mass (excessMass)
const excessMassFromLR = function (mass1, mass2, coef1, coef2, mm1, mm2) {
    const moles1 = mass1 / mm1;
    const moles2 = mass2 / mm2;
    const moles2Needed = moles1 * (coef2 / coef1);
    let molesUsed = 0;
    let excessMass = 0;
    if (moles2Needed > moles2) {
        const moles1Needed = moles2 * (coef1 / coef2);
        molesUsed = moles1 - moles1Needed;
        excessMass = molesUsed * mm1;
    } else if (moles2Needed < moles2) {
        const moles2Needed = moles1 * (coef2 / coef1);
        molesUsed = moles2 - moles2Needed;
        excessMass = molesUsed * mm2;
    } else {
        excessMass = 0;
    }
    return excessMass;
};

// console.log(excessMassFromLR(3,30,1,4,63.546,63.01));