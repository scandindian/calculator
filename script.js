let currentInput = "";

// Appending input to display on button click
function appendInput(input) {
  if (currentInput === "0") {
    currentInput = input;
  } else {
    currentInput += input;
  }
  updateDisplay();
}

// Calculating result based on the input using eval
function calculateResult() {
  currentInput = eval(currentInput);
  updateDisplay();
}

// Clear display and reset to 0
function clearDisplay() {
  currentInput = "0";
  updateDisplay();
}

// Update display box
function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = currentInput;
}

updateDisplay();
