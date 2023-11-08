// reactions
const reactions = [
    {
        rxn: "2Na + 2H<sub>2</sub>O &rarr; 2NaOH + H<sub>2</sub>",
        species: ["Na", "H<sub>2</sub>O", "NaOH", "H<sub>2</sub>"],
        coefficients: [2, 2, 2, 1],
        molarMass: [22.989769, 18.01528, 39.997, 2.016]
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
    },
    {
        rxn: "2C<sub>6</sub>H<sub>14</sub>O<sub>4</sub> + 15O<sub>2</sub> &rarr; 12CO<sub>2</sub> + 14H<sub>2</sub>O",
        species: ["C<sub>6</sub>H<sub>14</sub>O<sub>4</sub>", "O<sub>2</sub>", "CO<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [2, 15, 12, 14],
        molarMass: [150.17, 31.999, 44.01, 18.01528]
    },
    {
        rxn: "2NH<sub>3</sub> + CO<sub>2</sub> &rarr; CO(NH<sub>2</sub>)<sub>2</sub> + H<sub>2</sub>O",
        species: ["NH<sub>3</sub>", "CO<sub>2</sub>", "CO(NH<sub>2</sub>)<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [2, 1, 1, 1],
        molarMass: [17.031, 44.01, 60.06, 18.01528]
    },
    {
        rxn: "Cu + 4HNO<sub>3</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O",
        species: ["Cu", "HNO<sub>3</sub>", "Cu(NO<sub>2</sub>)<sub>3</sub>", "NO<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [1, 4, 1, 2, 2],
        molarMass: [63.546, 63.01, 187.56, 46.0055, 18.01528]
    }
];

const generateNumArr = function (num1, num2, inc, dec) {
    let numArray = [];
    if (num1 == num2) {
        return;
    };
    if (num2 > num1) {
        for (let index = num1; index <= num2; index += inc) {
            numArray.push(index.toFixed(dec));
        }
    } else {
        for (let i = num1; i >= num2; i -= inc) {
            numArray.push(i.toFixed(dec));
        }
    };
    return numArray;
};

const selectNum = function (arr) {
    var randomValue = arr[Math.floor(Math.random() * arr.length)];
    // console.log(randomValue);
    return randomValue;
};

// create a function that calculates the mass of product given two reactant's mass
const massProductFromLR = function (m1, m2, mm1, mm2, mm3, coef1, coef2, coef3) {
    let mass = 0;
    const moles1 = m1 / mm1;
    const moles2 = m2 / mm2;
    const moles2Needed = moles1 * (coef2 / coef1);
    if (moles2 > moles2Needed) {
        mass = moles1 * (coef3 / coef1) * mm3;
    } else if (moles2 < moles2Needed) {
        mass = moles2 * (coef3 / coef2) * mm3;
    }
    return mass;
};

// This function roundes a given value to a given number of sig figs
const roundToGivenSigFig = function (sigfig, value) {
    const split = value.toString().split(".");
    const numValue = split[0].length
    const numDecimal = sigfig - numValue
    const numb = Number(value).toFixed(numDecimal)
    return numb;
};

//This function takes in an array parameter (nums) and returns the least number of sig figs 
// must contain decimals not ending in 0
const findLeastSigFig = function (nums) {
    let numArray = [];
    for (let i = 0; i < nums.length; i++) {
        var num = Number(nums[i]);
        var decimal = num.toString().split('.')[1].length;
        var value = num.toString().split('.')[0].length;
        var digits = decimal + value;
        numArray.push(digits);
    }
    return Math.min(...numArray);
};

// create a function that calculates the mass of product given one reactant's mass and one moles
const massProdFromLRwithMole = function (m1, mol, mm1, mm3, coef1, coef2, coef3) {
    let mass = 0;
    const moles1 = m1 / mm1;
    const moles2Needed = moles1 * (coef2 / coef1);
    if (mol > moles2Needed) {
        mass = moles1 * (coef3 / coef1) * mm3;
    } else if (mol < moles2Needed) {
        mass = mol * (coef3 / coef2) * mm3;
    }
    return mass;
};

// create a function that calculates the mass of product given one reactant's mass and one moles
const massProdFromLRwMoles = function (mol1, mol2, mm, coef1, coef2, coef3) {
    let mass = 0;
    const moles2Needed = mol1 * (coef2 / coef1);
    if (mol1 > moles2Needed) {
        mass = mol1 * (coef3 / coef1) * mm;
    } else if (mol1 < moles2Needed) {
        mass = mol2 * (coef3 / coef2) * mm;
    }
    return mass;
};

// create a function that calculates the moles of product given two reactant's mass
const moleProductFromLR = function (m1, m2, mm1, mm2, coef1, coef2, coef3) {
    let mol = 0;
    const moles1 = m1 / mm1;
    const moles2 = m2 / mm2;
    const moles2Needed = moles1 * (coef2 / coef1);
    if (moles2 > moles2Needed) {
        mol = moles1 * (coef3 / coef1);
    } else if (moles2 < moles2Needed) {
        mol = moles2 * (coef3 / coef2);
    }
    return mol;
};

// create a function that calculates the moles of product given two reactant's mass
const moleProductFromLRusingMoles = function (mol1, mol2, coef1, coef2, coef3) {
    let mol = 0;
    const moles2Needed = mol1 * (coef2 / coef1);
    if (mol2 > moles2Needed) {
        mol = mol1 * (coef3 / coef1);
    } else if (mol2 < moles2Needed) {
        mol = mol2 * (coef3 / coef2);
    }
    return mol;
};