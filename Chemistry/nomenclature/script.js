var chemEq = document.getElementById('chem-equation');
var equation = 'H<sub>2</sub>SO<sub>4</sub>';
var instances = [
    {
        rxn: "__H<sub>2</sub>SO<sub>4</sub>",
        ans: "2H<sub>2</sub>SO<sub>4</sub>"
    },
    {
        rxn: "H<sub>2</sub>SO<sub>3</sub>",
        ans: "2H<sub>2</sub>SO<sub>3</sub>"
    }
];

chemEq.innerHTML = `dynamic text: ${instances[0].rxn} Answer is ${instances[0].ans} `;
