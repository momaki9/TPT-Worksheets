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
        ka: 0.000631,
        mm: 20.00624316
    },
    {
        acid: "CH3COOH",
        name: "acetic acid",
        ka: 0.0000175,
        mm: 60.04936
    },
    {
        acid: "HCN",
        name: "hydrocyanic acid",
        ka: 0.000000000617,
        mm: 27.02387
    },
    {
        acid: "HNO2",
        name: "nitrous acid",
        ka: 0.000562,
        mm: 47.01307
    },
    {
        acid: "C6H5COOH",
        name: "benzoic acid",
        ka: 0.0000625,
        mm: 122.11304
    },
    {
        acid: "HClO2",
        name: "chlorous acid",
        ka: 0.0115,
        mm: 68.45264
    },
    {
        acid: "HClO",
        name: "hypochlorous acid",
        ka: 0.0000000398,
        mm: 52.45324
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

// version 2
const chosenInstVTwo = instanceGenerstor(weakAcidObj);
document.getElementById('acid-name-v2').textContent = chosenInstVTwo.name;
document.getElementById('weak-acid-v2').textContent = chosenInstVTwo.acid;

const randomNumber = function(value) {
    const randomV = Math.random(0) * value + value
    return randomV.toFixed(2)
};

const chosenMass = randomNumber(10);
document.getElementById('mass-amount').textContent = chosenMass;

const chosenVolume = randomNumber(1);
document.getElementById('soln-volume').textContent = chosenVolume;
document.getElementById('mm').textContent = chosenInstVTwo.mm;
document.getElementById('ka-v2').textContent = chosenInstVTwo.ka;
// Answers are calculated by first converting the mass to moles using the molar mass, then finding the molarity. 
// next use the ka to find the [H+] from which the pH and pOH can be determined
const versionTwoAnswer = () => {
    const moles = chosenMass / chosenInstVTwo.mm;
    const molarity = moles / chosenVolume;
    const ka = chosenInstVTwo.ka;
    const stepOne = ka * molarity;
    const stepTwo = Math.sqrt(stepOne);
    const pH = -1 * Math.log10(stepTwo).toFixed(3);
    const pOH = 14 - pH;
    document.getElementById('v2-ph-ans').textContent = pH;
    document.getElementById('v2-poh-ans').textContent = pOH;
};

versionTwoAnswer();

// version 3
const chosenInstVThree = instanceGenerstor(weakAcidObj);
document.getElementById('acid-name-v3').textContent = chosenInstVThree.name;
document.getElementById('weak-acid-v3').textContent = chosenInstVThree.acid;
document.getElementById('mm-v3').textContent = chosenInstVThree.mm;
document.getElementById('ka-v3').textContent = chosenInstVThree.ka;
const chosenVolumeVThreee = randomNumber(100);
document.getElementById('soln-volume-v3').textContent = chosenVolumeVThreee;

const randompOH = function(value) {
    const randomV = Math.random(0) + value
    return randomV.toFixed(3)
};

const chosenpOH = randompOH(10);
document.getElementById('given-poh').textContent = chosenpOH;

// Answer is calculated by first converting the pOH to pH, then converting to H+
// use the Ka expression to calculate the molarity. Then convert to moles using the given volume. Finally convert moles to mass using the molar mass
const versionThreeAnswer = () => {
    const pH = 14 - chosenpOH;
    const concH = Math.pow(10, -pH);
    // x squared
    const stepOne = Math.pow(concH, 2);
    // molarity of acid
    const stepTwo = stepOne / chosenInstVThree.ka
    document.getElementById('v3-molarity').textContent = stepTwo;
    // converting volume to liters
    const stepThree = chosenVolumeVThreee / 1000;
    // converting to moles
    const stepFour = stepTwo * stepThree;
    // converting to mass
    const mass = stepFour * chosenInstVThree.mm
    document.getElementById('v3-ans').textContent = mass;
};

// Make sure values are reasonable -- double check the math as well
versionThreeAnswer();
