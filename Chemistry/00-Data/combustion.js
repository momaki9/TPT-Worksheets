const unknownCompounds = [
    {
        emFormula: "C<sub>3</sub>H<sub>4</sub>O<sub>3</sub>",
        molFormula: "",
        products: ["CO<sub>2</sub>", "H<sub>2</sub>O"],
        prodMM: [44.009, 18.015],
        elms: {
            elm: ["C", "H", "O"],
            mm: [12.011, 1.0079, 15.999]
        }
    }
];

// glucose combustion as an example
const combustionEquations = 
    {
        eqn: "C6H12O6 + 6O2 => 6H2O + 6CO2",
        compMM: 180.1548,
        coef: 1,
        prods: {
            prod: ["CO2", "H2O"],
            mm: [44.009, 18.015],
            coef: [6, 6]
        }
    }


const generateComubstionMasses = function (mass, mm, mm1, mm2, coef, coef1, coef2) {
    const moles = mass / mm;
    const massP1 = moles * (coef1 / coef) * mm1;
    const massP2 = moles * (coef2 / coef) * mm2;

    return [massP1, massP2]
};

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

const selectElm = function (arr) {
    var elm = arr[Math.floor(Math.random() * arr.length)];
    return elm;
};