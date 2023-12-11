const questionTextElm = document.getElementById("question-text");
const contentElm = document.getElementById("content");

const massValueArray = generateNumArr(0.2, 0.3, 0.001, 3);
const mass = selectElm(massValueArray);
const inst = selectElm(instancesV2);

const productMassValues = generateComubstionMasses(mass, inst.compMM[0], inst.compMM[3], inst.compMM[2], inst.compCoef[0], inst.compCoef[2], inst.compCoef[3]);

const massProd1 = productMassValues[0];
const massProd2 = productMassValues[1];

questionTextElm.innerHTML = `Combustion of a ${mass}-g sample of a compound containing carbon, hydrogen, and oxygen yields ${massProd1.toFixed(4)} g CO<sub>2</sub> and ${massProd2.toFixed(4)} g H<sub>2</sub>O. What is the emppirical formula of this compound? (Compound name = ${inst.name})`;

//m, m1, m2, mm1, mm2, coef1, coef2, mmC, mmH, mmO
const htmlAns = combustionProbSolver(mass, massProd1, massProd2, inst.compMM[3], inst.compMM[2],inst.elmCoef[0],inst.elmCoef[1],inst.elmMM[0],inst.elmMM[1],inst.elmMM[2]);

contentElm.innerHTML = htmlAns;

const questionTextElm2 = document.getElementById("question-text-2");
const contentElm2 = document.getElementById("content-2");

const mass2 = selectElm(massValueArray);
const inst2 = selectElm(instancesV1);

const productMassValues2 = generateComubstionMasses(mass2, inst.compMM[0], inst.compMM[3], inst.compMM[2], inst.compCoef[0], inst.compCoef[2], inst.compCoef[3]);

const massProd12 = productMassValues2[0];
const massProd22 = productMassValues2[1];

questionTextElm2.innerHTML = `Combustion of a ${mass2}-g sample of a compound containing carbon and hydrogen yields ${massProd12.toFixed(4)} g CO<sub>2</sub> and ${massProd22.toFixed(4)} g H<sub>2</sub>O. What is the emppirical formula of this compound? (Compound name = ${inst2.name})`;

//m, m1, m2, mm1, mm2, coef1, coef2, mmC, mmH, mmO
const htmlAns2 = combustionProbSolver(mass, massProd1, massProd2, inst.compMM[3], inst.compMM[2],inst.elmCoef[0],inst.elmCoef[1],inst.elmMM[0],inst.elmMM[1],inst.elmMM[2]);

contentElm.innerHTML = htmlAns2;