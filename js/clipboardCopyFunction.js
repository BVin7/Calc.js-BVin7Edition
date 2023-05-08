//VARIABLES
const resultsInput = document.getElementById("results-input");
const copyToClipboardButton = document.getElementById("copy-to-clipboard-button");

//FUNCTIONS
export function copyResultsToClipboard() {
  navigator.clipboard.writeText(resultsInput.value);
  if (copyToClipboardButton.classList.contains("misc-buttons-dark-theme")) {
      copyToClipboardButton.classList.add("copied-message-dark-theme");
      setTimeout(() => {
          copyToClipboardButton.classList.remove("copied-message-dark-theme");
      }, 2000);
  } else if (copyToClipboardButton.classList.contains("misc-buttons-light-theme")) {
      copyToClipboardButton.classList.add("copied-message-light-theme");
      setTimeout(() => {
          copyToClipboardButton.classList.remove("copied-message-light-theme");
      }, 2000);
  };
};
