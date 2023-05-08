//IMPORTED FUNCTIONS SECTION
import {
    addPressedKeyToCalculatorScreen,
    removeLastCharacterFromCalculatorScreen,
    addClickedButtonValueToCalculatorScreen,
    calculate,
    clearAll,
} from "./calculatorFunctions.js";

import {
    switchBackgroundTheme,
    switchHeaderThreeTheme,
    switchButtonsTheme,
    switchInputTheme
} from "./switchThemeFunctions.js";

import { copyResultsToClipboard } from "./clipboardCopyFunction.js";

//GLOBAL VARIABLES SECTION
const switchThemeButton = document.getElementById("switch-theme-button");
const calculatorScreenInput = document.getElementById("calculator-screen-input");
const calculatorButtons = document.querySelectorAll(".onscreen-buttons");
const clearAllButton = document.getElementById("clear-all");
const equalsButton = document.getElementById("equals");
const copyToClipboardButton = document.getElementById("copy-to-clipboard-button");
const allowedKeysList = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%"];

//CODE SECTION
switchThemeButton.addEventListener("click", () => {
    switchBackgroundTheme();
    switchHeaderThreeTheme();
    switchButtonsTheme();
    switchInputTheme();
});

calculatorScreenInput.addEventListener("keydown", (pressedDownKey) => {
    console.log(pressedDownKey);
    if(allowedKeysList.includes(pressedDownKey.key)) {
        addPressedKeyToCalculatorScreen(pressedDownKey);
    };

    switch (pressedDownKey.key) {
        case "Dead":
            calculatorScreenInput.blur();
            setTimeout(() => calculatorScreenInput.focus());
            break;
        case "Backspace":
            removeLastCharacterFromCalculatorScreen();
            break;

        case "Enter":
            calculate();
            break;

        default:
            pressedDownKey.preventDefault();
    };
});

calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        addClickedButtonValueToCalculatorScreen(button);
    });
});

clearAllButton.addEventListener("click", () => {
    clearAll();
});

equalsButton.addEventListener("click", () => {
    calculate();
})

copyToClipboardButton.addEventListener("click", () => {
    copyResultsToClipboard();
});
