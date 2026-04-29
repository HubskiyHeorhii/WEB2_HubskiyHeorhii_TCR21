"use strict";

/* Замикання + каррінг */
function createConverter(a, b) {
    return function(temp) {
        return temp * a + b;
    };
}

function convert() {
    const value = Number(document.getElementById("tempInput").value);
    const type = document.getElementById("type").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(value)) {
        resultDiv.innerHTML = "<p>Введіть коректне число!</p>";
        return;
    }

    let result;

    if (type === "CtoF") {
        const cToF = createConverter(9 / 5, 32);
        result = cToF(value);
    } else {
        const fToC = createConverter(5 / 9, -32 * 5 / 9);
        result = fToC(value);
    }

    resultDiv.innerHTML =
        `<p>Результат: <span>${result.toFixed(2)}</span></p>`;

    console.log("Результат:", result);
}