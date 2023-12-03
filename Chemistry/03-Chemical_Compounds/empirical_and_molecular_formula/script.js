const contentElm = document.getElementById("emf");

const instance = randomElmFromArray(formulas);
console.log(instance);

const percentArr = determineMassPercent(instance);
console.log(percentArr);

let algoText = "";
let subtext = "";

for (let i = 0; i < percentArr.length; i++) {
    if (i === percentArr.length - 1) {
        subtext = `and ${percentArr[i]} % ${instance.elm[i]}`
    } else {
        subtext = `${percentArr[i]} % ${instance.elm[i]}, `;
    }
    algoText = algoText + subtext;
};

contentElm.textContent = `A compound of ${instance.des} consists of ${algoText}, by mass. What is its empirical formula?`;

const paraEl = document.createElement("p");
paraEl.innerHTML = `Answer is ${instance.eFormula}`;
contentElm.appendChild(paraEl);