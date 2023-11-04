//This function uses the molarity, volume, and molar mass of a substance to  calculate the mass
const molarityToMass = function (molarity, vol, mm) {
    const volumeInL = vol / 1000;
    const moles = molarity * volumeInL;
    const mass = moles * mm;
    return mass;
};

// This function uses the molarity and volume (mL) of one species to determine the mass of other species (stoichiometry)
const molarityToMassOther = function (molarity, vol, coef1, coef2, mm) {
    const volumeInL = vol / 1000;
    const moles = molarity * volumeInL;
    const mass = moles * (coef2 / coef1) * mm;
    return mass;
};
