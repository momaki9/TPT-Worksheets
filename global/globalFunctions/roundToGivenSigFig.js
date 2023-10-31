// This function roundes a given value to a given number of sig figs
const roundToGivenSigFig = function (sigfig, value) {
    const split = value.toString().split(".");
    const numValue = split[0].length
    const numDecimal = sigfig - numValue
    const numb = Number(value).toFixed(numDecimal)
    return numb;
};

// roundToGivenSigFig(4,41.12359)