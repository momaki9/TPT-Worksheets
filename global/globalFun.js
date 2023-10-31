//---------Gas Law Functions----------------
// write a function that returns pressure or volume given moles (n) and temperature (T) in kelvin
// this function should return the answer with the correct number of sig figs
// NOTE: as long as the temperature value has equal to or more sig fig than knownVar or n, the sig figs in the ans is good
// PV = nRT > P = nRT/V (or if solving for V; V = nRT/P)
const calcPressOrVolum = function(knownVar,n,T,){
    const R = 0.08206;
    const result = (n*R*T)/knownVar;
    const decimalInMoles = n.toString().split(".")[1].length;
    const nonDecimalInMoles = n.toString().split(".")[0].length;
    const numOfDigitsInMoles = decimalInMoles + nonDecimalInMoles;
    
    const decimalInKnownVar = knownVar.toString().split(".")[1].length;
    const nonDecimalInKnownVar = knownVar.toString().split(".")[0].length;
    const numOfDigitsInKnownVar = decimalInKnownVar + nonDecimalInKnownVar;

    const correctDigits = Math.min(numOfDigitsInKnownVar, numOfDigitsInMoles);
    // console.log(n.toString().split("."))
    const digitsInResult = result.toString().split(".")[0].length;
    const decimalsInAns = correctDigits - digitsInResult;
    // console.log(correctDigits);
    var decimalHelper = 10 ** decimalsInAns;
    var answer = Math.round(result * decimalHelper) / decimalHelper
    answer = answer.toFixed(decimalsInAns);
    return answer;
};

// console.log(calcPressOrVolum(1.20,1.319,342));
// try multiplying by 10,100,1000,1000 then count the num of digits
const splitF = function(num){
    num = num + 0.00000000000001
    let test = num.toString();
    console.log(typeof num);
    console.log(typeof test);
    let numofDig = num.toString().split(".")[0].length;
    let numofDec = num.toString().split(".")[1].length;
    return [numofDig, numofDec]
}

console.log(splitF(23.40000))