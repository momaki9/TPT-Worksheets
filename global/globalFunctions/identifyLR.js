// This function identifies the limiting reactant given the formula of 2 reactant, their masses, their coefficients, and their molar masses
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

// 2Na + 2H2O --> 2NaOH + H2
console.log(identifyLRfromMass("Na", "H2O", 43.57, 22.75, 2, 2, 22.989769, 18.01528));
