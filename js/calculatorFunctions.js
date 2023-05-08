//VARIABLES
const calculatorScreenInput = document.getElementById("calculator-screen-input");
const resultsInput = document.getElementById("results-input");

//FUNCTIONS
function addPressedKeyToCalculatorScreen(pressedKey) {
  calculatorScreenInput.value += pressedKey.key;
  return;
};

function removeLastCharacterFromCalculatorScreen() {
  calculatorScreenInput.value = calculatorScreenInput.value.slice(0, -1);
};

function addClickedButtonValueToCalculatorScreen(clickedButton) {
  calculatorScreenInput.value += clickedButton.dataset.value;
  calculatorScreenInput.focus();
};

function calculate() {
  resultsInput.value = "ERROR!";
  resultsInput.classList.add("error-message");

  const results = eval(calculatorScreenInput.value);

  resultsInput.classList.remove("error-message");
  resultsInput.value = results;
  calculatorScreenInput.focus();
};

function clearAll() {
  calculatorScreenInput.value = "";
  resultsInput.value = "";
  if(resultsInput.classList.contains("error-message")) {
      resultsInput.classList.remove("error-message");
  };
  calculatorScreenInput.focus();
};

export {
  addPressedKeyToCalculatorScreen,
  removeLastCharacterFromCalculatorScreen, 
  addClickedButtonValueToCalculatorScreen, 
  calculate, 
  clearAll
};
