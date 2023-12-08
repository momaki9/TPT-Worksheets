const questionTextElm = document.getElementById("question-text");
const contentElm = document.getElementById("content");

const massValueArray = generateNumArr(0.2, 0.3, 0.001, 3);
const mass = selectElm(massValueArray);

const productMassValues = generateComubstionMasses(mass, combustionEquations.compMM, combustionEquations.prods.mm[0], combustionEquations.prods.mm[1], combustionEquations.coef, combustionEquations.prods.coef[0], combustionEquations.prods.coef[1]);

console.log(productMassValues)

const massProd1 = productMassValues[0];
const massProd2 = productMassValues[1];

questionTextElm.innerHTML = `Combustion of a ${mass}-g sample of a compound containing carbon, hydrogen, and oxygen yields ${massProd1.toFixed(4)} g CO<sub>2</sub> and ${massProd2.toFixed(4)} g H<sub>2</sub>O. What is the emppirical formula of this compound?`;

//m, m1, m2, mm1, mm2, coef1, coef2, mmC, mmH, mmO
const htmlAns = combustionProbSolver(mass, massProd1, massProd2, combustionEquations.prods.mm[0], combustionEquations.prods.mm[1],1,2, unknownCompounds.elms.mm[0], unknownCompounds.elms.mm[1], unknownCompounds.elms.mm[2]);

contentElm.innerHTML = htmlAns;