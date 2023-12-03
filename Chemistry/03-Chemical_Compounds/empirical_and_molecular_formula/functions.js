
const randomElmFromArray = function (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

const determineMassPercent = function (obj) {
    let sum = 0;
    let percentArray = [];
    for (let i = 0; i < obj.elmMM.length; i++) {
        sum = sum + obj.elmMM[i] * obj.coef[i];
    };
    console.log(sum);
    for (let index = 0; index < obj.coef.length; index++) {
        const percent = (obj.coef[index] * obj.elmMM[index]) / sum * 100;
        percentArray.push(percent.toFixed(2))
    };
    return percentArray;
};

