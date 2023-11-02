
// 2 reactant 2 product 
const reactionsV1 = [
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
    }
];

// 2 reactants and 1 product
const reactionsV2 = [
    {
        rxn: "2Al + 6HCl &rarr; 2AlCl<sub>3</sub> + 3H<sub>2</sub>",
        species: ["Al", "HCl", "AlCl<sub>3</sub>", "3H<sub>2</sub>"],
        coefficients: [2, 6, 2, 3],
        molarMass: [28.01, 2.016, 32.04]
    },
    {
        rxn: "CO + 2H<sub>2</sub> &rarr; CH<sub>3</sub>OH",
        species: ["CO", "2H<sub>2</sub>", "CH<sub>3</sub>OH"],
        coefficients: [1, 2, 1],
        molarMass: [28.01, 2.016, 32.04]
    }
];

// 2 reactants and 3 products
const reactionsV3 = [
    {
        rxn: "Cu + 4HNO<sub>3</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub> + 2H<sub>2</sub>O",
        species: ["Cu", "HNO<sub>3</sub>", "Cu(NO<sub>2</sub>)<sub>3</sub>", "NO<sub>2</sub>", "H<sub>2</sub>O"],
        coefficients: [1, 4, 1, 2, 2],
        molarMass: [63.546, 63.01, 187.56, 46.0055, 18.01528]
    }
];

// 1 reactant 2 products
const reactionsV4 = [
    {
        rxn: "2Ag<sub>2</sub>O &rarr; 4Ag + O<sub>2</sub>",
        species: ["Ag<sub>2</sub>O", "Ag", "O<sub>2</sub>"],
        coefficients: [2, 4, 1],
        molarMass: [231.735, 107.8682, 31.999]
    }
];

// 3 reactant 3 product
const reactionsV5 = [
    {
        rxn: "2NaOH + Cl<sub>2</sub> + 2NH<sub>3</sub> &rarr; N<sub>2</sub>H<sub>4</sub> + 2NaCl + 2H<sub>2</sub>O",
        species: ["NaOH", "Cl<sub>2</sub>", "NH<sub>3</sub>", "N<sub>2</sub>H<sub>4</sub>", "NaCl", "H<sub>2</sub>O"],
        coefficients: [2, 1, 2, 1, 2, 2],
        molarMass: [39.997, 35.453, 17.031, 32.0452, 58.44, 18.01528]
    }
]