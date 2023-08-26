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

const lowRandomMass = () => {
    const lowRandomValue = Math.random() * 9 + 1;
    return lowRandomValue.toFixed(2);
};

const highRandomMass = () => {
    const highRandomValue = Math.random() * 80 + 20;
    return highRandomValue.toFixed(2);
};

const massEl = document.getElementById('mass-amount')
const instanceMass = highRandomMass();
massEl.textContent = instanceMass;

const instanceRxn = randomRxn(reactions);
const instanceEquation = document.getElementById('instance-equation');
const startingSpecies = document.getElementById('starting-species');
const endingSpecies = document.getElementById('ending-species');
const mmStarting = document.getElementById('mm-starting');
const mmEnding = document.getElementById('mm-ending');

instanceEquation.innerHTML = instanceRxn.rxn;
startingSpecies.innerHTML = instanceRxn.species[0];
mmStarting.textContent = instanceRxn.molarMass[0];
endingSpecies.textContent = instanceRxn.species[2];
mmEnding.textContent = instanceRxn.molarMass[2];

const teacherAnswer = function () {
    const answer = parseFloat(instanceMass) / instanceRxn.molarMass[2] * instanceRxn.coefficients[0] / instanceRxn.coefficients[2];
    return answer.toFixed(3);
};

document.getElementById('TA-one').textContent = teacherAnswer();