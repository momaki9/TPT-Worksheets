const molarity = document.getElementById('molarity');
const weakAcid = document.getElementById('weak-acid');
const teacherAnswer = document.getElementById('teacher-answer');
const pka = document.getElementById('instance-pka');

const randomValue = Math.random(0).toFixed(3);
molarity.textContent = randomValue;

const weakAcidObj = [
    {
        acid: "HF",
        pka: 0.00035
    },
    {
        acid: "CH3COOH",
        pka: 0.0000158
    },
    {
        acid: "HCN",
        pka: 0.00000000049
    },
    {
        acid: "H2S",
        pka: 0.000000095
    },
    {
        acid: "H3PO4",
        pka: 0.0076
    }        
]

const randomIndex = (arr) => {
    const index = Math.floor(Math.random()* arr.length);
    return arr[index];
};

const instanceGenerstor = (arr) => {
    const index = Math.floor(Math.random()* arr.length);
    return arr[index];
};  

const chosenInstance = instanceGenerstor(weakAcidObj);
const instanceFormula = chosenInstance.acid;
const instancepKa = chosenInstance.pka;

weakAcid.textContent = instanceFormula;
pka.textContent = instancepKa;

const calculateAnswer = () => {
    const stepOne = instancepKa * randomValue;
    const stepTwo = Math.sqrt(stepOne);
    const answer = -1 * Math.log10(stepTwo).toFixed(3);
    teacherAnswer.textContent = answer;
}
document.getElementById('refresh-btn').addEventListener('click', () => {
    window.location.reload();
});

calculateAnswer();