const unknownCompounds =
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


// glucose combustion as an example
const combustionEquations = [
    {
        eqn: "C6H12O6 + 6O2 => 6H2O + 6CO2",
        compMM: [180.1548, 31.998, 18.015, 44.009],
        elmMM: [12.011, 1.0079, 15.999],
        compCoef: [1, 6, 6, 6],
        elmCoef: [1, 2]
    },
    {
        eqn: "C2H5OH + 3O2 => 2CO2 + 3H2O",
        compMM: [46.0684, 31.998, 18.015, 44.009],
        elmMM: [12.011, 1.0079, 15.999],
        compCoef: [1, 3, 2, 3],
        elmCoef: [1, 2]
    },
    {
        eqn: "2C3H6O2 + 7O2 => 6CO2 + 6H2O",
        compMM: [74.0784, 31.998, 18.015, 44.009],
        elmMM: [12.011, 1.0079, 15.999],
        compCoef: [2, 7, 6, 6],
        elmCoef: [1, 2]
    }
];
//mm, mm1, mm2, coef, coef1, coef2, coefC, coefH, mmC, mmH, mmO
const generateComubstionMasses = function (mass, mm, mm1, mm2, coef, coef1, coef2) {
    const moles = mass / mm;
    const massP1 = moles * (coef1 / coef) * mm1;
    const massP2 = moles * (coef2 / coef) * mm2;

    return [massP1, massP2]
};

const combustionProbSolver = (m, m1, m2, mm1, mm2, coef1, coef2, mmC, mmH, mmO) => {
    const molC = (m1 / mm1) * coef1;
    const massC = molC * mmC;
    const molH = (m2 / mm2) * coef2;
    const massH = molH * mmH;
    const massO = m - (massC + massH);
    const molO = massO / mmO;
    const smallest = Math.min(molC, molH, molO);
    let sub1 = molC / smallest;
    let sub2 = molH / smallest;
    let sub3 = molO / smallest;
    console.log(`C = ${sub1} H = ${sub2} O = ${sub3}`)
    console.log(`C = ${sub1.toFixed(2)} H = ${sub2.toFixed(2)} O = ${sub3.toFixed(2)}`)

    if (sub1.toFixed(2) == 1.00 && sub2.toFixed(2) == 1.00 && sub3.toFixed(2) == 1.00) {
        return `CHO`;
    } else if (sub1.toFixed(2) == 1.00 && sub2 != 1 && sub3.toFixed(2) == 1.00) {
        return `CH<sub>${sub2.toFixed(0)}</sub>O`;
    } else if (sub1.toFixed(0) != 1 && sub2 != 1 && sub3 == 1) {
        return `C<sub>${sub1.toFixed(0)}</sub>H<sub>${sub2.toFixed(0)}</sub>O`;
    } else if (sub1.toFixed(2) == 1.50 && sub2.toFixed(2) == 3.00 && sub3.toFixed(2) == 1.00) {
        sub1 = 3;
        sub2 = 6;
        sub3 = 2;
        return `C<sub>${sub1}</sub>H<sub>${sub2}</sub>O<sub>${sub3}</sub>`;
    }
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