const molarity = document.getElementById('molarity');
const weakAcid = document.getElementById('weak-acid');
const teacherAnswer = document.getElementById('teacher-answer');
const pka = document.getElementById('instance-pka');
const acidName = document.getElementById('acid-name');

const randomValue = Math.random(0).toFixed(3);
molarity.textContent = randomValue;

const weakAcidObj = [
    {
        acid: "HF",
        name: "hydrofluoric acid",
        ka: 0.000631
    },
    {
        acid: "CH3COOH",
        name: "acetic acid",
        ka: 0.0000175
    },
    {
        acid: "HCN",
        name: "hydrocyanic acid",
        ka: 0.000000000617
    },
    {
        acid: "HNO2",
        name: "nitrous acid",
        ka: 0.000562
    },
    {
        acid: "C6H5COOH",
        name: "benzoic acid",
        ka: 0.0000625
    },
    {
        acid: "HClO2",
        name: "chlorous acid",
        ka: 0.0115
    },
    {
        acid: "HClO",
        name: "hypochlorous acid",
        ka: 0.0000000398
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
const instancepKa = chosenInstance.ka;
const acidFormula = chosenInstance.name;

weakAcid.textContent = instanceFormula;
pka.textContent = instancepKa;
acidName.textContent = acidFormula;

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