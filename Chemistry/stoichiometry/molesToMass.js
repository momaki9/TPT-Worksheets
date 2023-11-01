// This function converts the moles of one species to the mass of another (stoichiometry)
const molesToMass = function (moles1, stoich1, stoich2, mm) {
    const stoichRatio = stoich2 / stoich1;
    const moles2 = moles1 * stoichRatio;
    const mass = moles2 * mm;
    return mass;
};