const reactions = [
    {
        rxn: "2Na+2H2O-->2NaOH+H2",
        species: ["Na", "H2O", "NaOH", "H2"],
        coefficients: [2, 2, 2, 1],
        molarMass: [22.989769, 18.01528, 39.997, 2.016]
    },
    {
        rxn: "Cu+4HNO3-->Cu(NO3)2+2NO2+2H2O",
        species: ["Cu", "HNO3", "Cu(NO3)2", "NO2", "H2O"],
        coefficients: [1, 4, 1, 2, 2],
        molarMass: [63.546, 63.01, 187.56, 46.0055, 18.01528]
    },
    {
        rxn: "AgNO3+NaCl-->AgCl+NaNO3",
        species: ["AgNO3", "NaCl", "AgCl", "NaNO3"],
        coefficients: [1, 1, 1, 1],
        molarMass: [169.87, 58.44, 143.32, 84.9947]
    }
];

const randomRxn = function(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

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

instanceEquation.textContent = instanceRxn.rxn;
startingSpecies.textContent = instanceRxn.species[0];
mmStarting.textContent = instanceRxn.molarMass[0];
endingSpecies.textContent = instanceRxn.species[2];
mmEnding.textContent = instanceRxn.molarMass[2];

const teacherAnswer = function() {
    const answer = parseFloat(instanceMass) / instanceRxn.molarMass[2] * instanceRxn.coefficients[0] / instanceRxn.coefficients[2];    
    return answer.toFixed(3);
}

document.getElementById('TA-one').textContent = teacherAnswer();