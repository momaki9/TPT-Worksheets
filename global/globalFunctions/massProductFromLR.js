// create a function that calculates the mass of product given two reactant's mass
const massProductFromLR = function (m1, m2, mm1, mm2, mm3, coef1, coef2, coef3) {
    let mass = 0;
    const moles1 = m1 / mm1;
    const moles2 = m2 / mm2;
    const moles2Needed = moles1 * (coef2 / coef1);
    if (moles2 > moles2Needed) {
        mass = moles1 * (coef3/coef1) * mm3;
    }
    else if (moles2 < moles2Needed) {
        mass = moles2 * (coef3/coef2) * mm3;
    }
    return mass;
};
