const calculatorScreenInput = document.getElementById("calculator-screen-input");
const calculatorButtons = document.querySelectorAll(".onscreen-buttons");
const clearAllButton = document.getElementById("clear-all");
const equalsButton = document.getElementById("equals");
const resultsInput = document.getElementById("results-input");
const allowedKeysList = ["c", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%"];

calculatorScreenInput.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (allowedKeysList.includes(event.key)) {
        calculatorScreenInput.value += event.key;
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
        calculatorScreenInput.focus();
    });
});

clearAllButton.addEventListener("click", () => {
    clearAll();
});

equalsButton.addEventListener("click", () => {
    calculate();
})

function calculate() {
    console.log(calculatorScreenInput.value);
    const results = eval(calculatorScreenInput.value);
    resultsInput.value = results;
    calculatorScreenInput.focus();
    calculatorScreenInput.value = "";
};

function clearAll() {
    calculatorScreenInput.value = "";
    resultsInput.value = "";
    calculatorScreenInput.focus();
};