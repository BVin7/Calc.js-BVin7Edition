const calculatorScreenInput = document.getElementById("calculator-screen-input");
const calculatorButtons = document.querySelectorAll(".onscreen-buttons");
const clearAllButton = document.getElementById("clear-all");
const equalsButton = document.getElementById("equals");
const allowedKeysList = ["c", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%"];
const evaluationArray = [];

calculatorScreenInput.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (allowedKeysList.includes(event.key)) {
        calculatorScreenInput.value += event.key;
        evaluationArray.push(event.key);
        console.log(evaluationArray);
        return;
    };

    if (event.key === "Backspace") {
        calculatorScreenInput.value = calculatorScreenInput.value.slice(0, -1);
    };

    if (event.key === "Enter") {
        calculate();
    };
});

calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculatorScreenInput.value += button.dataset.value;
        evaluationArray.push(button.dataset.value);
        console.log(evaluationArray);
        calculatorScreenInput.focus();
    });
});

clearAllButton.addEventListener("click", () => {
    calculatorScreenInput.value = "";
    calculatorScreenInput.focus();
});

equalsButton.addEventListener("click", () => {
    calculate();
})

function calculate() {
    console.log(calculatorScreenInput.value);
    calculatorScreenInput.focus();
};