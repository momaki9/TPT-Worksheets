const oneRxn = document.getElementById('rxn');
const molarMass = document.getElementById('mm');

const rxn = selectNum(reactions);
const mm = rxn.molarMass;
oneRxn.innerHTML = rxn.rxn;

for (let i = 0; i < mm.length; i++) {
    const listEl = document.createElement("li");
    listEl.textContent = mm[i]
    molarMass.appendChild(listEl)
    
};

