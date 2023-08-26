const instance = randomRxn(reactions);
const instRxn = instance.rxn;
const instanceValues = generateNumArr(20,200,0.1,1);
const mass = selectNum(instanceValues);
const text = `Calculate how much ${instance.species[3]} can be produced from ${mass} g of ${instance.species[0]}.`
document.getElementById('mass-to-mass').innerHTML = text;
document.getElementById('rxn').innerHTML = instRxn;
console.log(text);
