const molarity = document.getElementById('molarity');
const weakAcid = document.getElementById('weak-acid');
const teacherAnswer = document.getElementById('teacher-answer-ph');
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
];
/*
pOH range	            Vol
8.4 - 9.4 for HCN	  ~ 2L
10.9 -11.9 for HNO2   ~ 2L
~12	~3L for HF
9.5 - 10.3	for HClO  ~ 2L
*/
const weakAcidObjThree = [
    {
        acid: "HF",
        name: "hydrofluoric acid",
        ka: 0.000631,
        mm: 20.00624316,
        pValue: 11.8
    },
    {
        acid: "HCN",
        name: "hydrocyanic acid",
        ka: 0.000000000617,
        mm: 27.02387,
        pValue: 9
    },
    {
        acid: "HNO2",
        name: "nitrous acid",
        ka: 0.000562,
        mm: 47.01307,
        pValue: 11.4
    },
    {
        acid: "HClO",
        name: "hypochlorous acid",
        ka: 0.0000000398,
        mm: 52.45324,
        pValue: 9.8
    }                    
];

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
    const pOHans = 14 - answer;
    document.getElementById('teacher-answer-pOH').textContent = pOHans;
};

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
    document.getElementById('v2-poh-ans').textContent = pOH.toFixed(3);
};

versionTwoAnswer();

// version 3
const chosenInstVThree = instanceGenerstor(weakAcidObjThree);
document.getElementById('acid-name-v3').textContent = chosenInstVThree.name;
document.getElementById('weak-acid-v3').textContent = chosenInstVThree.acid;
document.getElementById('mm-v3').textContent = chosenInstVThree.mm;
document.getElementById('ka-v3').textContent = chosenInstVThree.ka;
const chosenVolumeVThreee = randomNumber(1.5);
document.getElementById('soln-volume-v3').textContent = chosenVolumeVThreee;

const randompValue = function(value) {
    const randomV = Math.random() + value
    return randomV.toFixed(3)
};

const chosenpOH = randompValue(chosenInstVThree.pValue);
document.getElementById('given-poh').textContent = chosenpOH;

// Answer is calculated by first converting the pOH to pH, then converting to H+
// use the Ka expression to calculate the molarity. Then convert to moles using the given volume. Finally convert moles to mass using the molar mass
const versionThreeAnswer = () => {
    const pH = 14 - chosenpOH;
    const concH = Math.pow(10, -pH);
    // x squared
    const stepOne = Math.pow(concH, 2);
    // ka * x
    const fixCalcO = concH * chosenInstVThree.ka;
    const fixCalcT = fixCalcO + stepOne;
    // molarity of acid
    const stepTwo = fixCalcT / chosenInstVThree.ka
    document.getElementById('v3-molarity').textContent = stepTwo;
    // converting volume to liters
    // const stepThree = chosenVolumeVThreee / 1000;
    // converting to moles
    const stepFour = stepTwo * chosenVolumeVThreee;
    // converting to mass
    const mass = stepFour * chosenInstVThree.mm
    document.getElementById('v3-ans').textContent = mass.toExponential();
};

// Make sure values are reasonable -- double check the math as well
versionThreeAnswer();

// version 4 (question #5)
const instanceFiveQuestion = instanceGenerstor(weakAcidObj);
document.getElementById('acid-form-v4').textContent = instanceFiveQuestion.acid;
document.getElementById('acid-name-v4').textContent = instanceFiveQuestion.name;

const instanceFivepH = randompValue(4);
document.getElementById('given-ph').textContent = instanceFivepH;

const versionFourAnswer = function () {
    //convert given pH to [H+]
    const concH = Math.pow(10, -instanceFivepH);
    // use Ka expression to solve for molarity
    const concHsquared = Math.pow(concH, 2);
    const molarity = concHsquared/instanceFiveQuestion.ka;
    document.getElementById('v4-answer').textContent = molarity.toExponential();

};

versionFourAnswer();

//TODO -- make sure assumptions are good across ALL instances!
//TODO -- give Ka values
//TODO -- after addressing question 4, focus on easily creating different versions to make more products