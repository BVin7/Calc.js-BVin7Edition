const switchThemeButton = document.getElementById("switch-theme-button");
const calculatorScreenInput = document.getElementById("calculator-screen-input");
const calculatorButtons = document.querySelectorAll(".onscreen-buttons");
const clearAllButton = document.getElementById("clear-all");
const equalsButton = document.getElementById("equals");
const resultsInput = document.getElementById("results-input");
const allowedKeysList = ["c", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%"];

switchThemeButton.addEventListener("click", () => {
    const bodyBackground = document.querySelector("body");
    switch (bodyBackground.classList.value) {
        case "body-dark-theme":
            bodyBackground.classList.remove("body-dark-theme");
            bodyBackground.classList.add("body-light-theme");
            break;
        case "body-light-theme":
            bodyBackground.classList.remove("body-light-theme");
            bodyBackground.classList.add("body-dark-theme");
            break;
    };

    const headerThree = document.querySelector("h3");
    switch (headerThree.classList.value) {
        case "h3-dark-theme":
            headerThree.classList.remove("h3-dark-theme");
            headerThree.classList.add("h3-light-theme");
            break;
        case "h3-light-theme":
            headerThree.classList.remove("h3-light-theme");
            headerThree.classList.add("h3-dark-theme");
            break;
    };

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        switch (button.classList.value) {
            case "misc-buttons misc-buttons-dark-theme":
                button.classList.remove("misc-buttons-dark-theme");
                button.classList.add("misc-buttons-light-theme");
                switchThemeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
             </svg>`;
                break;
            case "misc-buttons misc-buttons-light-theme":
                button.classList.remove("misc-buttons-light-theme");
                button.classList.add("misc-buttons-dark-theme");
                switchThemeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
                <path d="M6.343 17.657l-1.414 1.414"></path>
                <path d="M6.343 6.343l-1.414 -1.414"></path>
                <path d="M17.657 6.343l1.414 -1.414"></path>
                <path d="M17.657 17.657l1.414 1.414"></path>
                <path d="M4 12h-2"></path>
                <path d="M12 4v-2"></path>
                <path d="M20 12h2"></path>
                <path d="M12 20v2"></path>
             </svg>`;
                break;
            case "calculator-buttons onscreen-buttons dark-theme-calculator-buttons":
                button.classList.remove("dark-theme-calculator-buttons");
                button.classList.add("light-theme-calculator-buttons");
                break;
            case "calculator-buttons onscreen-buttons light-theme-calculator-buttons":
                button.classList.remove("light-theme-calculator-buttons");
                button.classList.add("dark-theme-calculator-buttons");
                break;
            case "calculator-buttons dark-theme-calculator-buttons":
                button.classList.remove("dark-theme-calculator-buttons");
                button.classList.add("light-theme-calculator-buttons");
                break;
            case "calculator-buttons light-theme-calculator-buttons":
                button.classList.remove("light-theme-calculator-buttons");
                button.classList.add("dark-theme-calculator-buttons");
                break;
        };
    });

    const input = document.querySelectorAll("input");
    input.forEach((input) => {
        switch (input.classList.value) {
            case "input-dark-theme":
                input.classList.remove("input-dark-theme");
                input.classList.add("input-light-theme");
                break;
            case "input-light-theme":
                input.classList.remove("input-light-theme");
                input.classList.add("input-dark-theme");
                break;
        };
    });
});

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
};

function clearAll() {
    calculatorScreenInput.value = "";
    resultsInput.value = "";
    calculatorScreenInput.focus();
};