// get display element
const display = document.getElementById("display");

// append number to display
function appendNumber(number) {
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
}

// append operator to display
function appendOperator(operator) {
  // prevent multiple operators in a row
  const lastChar = display.value[display.value.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) {
    return;
  }
  
  // prevent operator at the start
  if (display.value === "") {
    return;
  }
  
  display.value += operator;
}

// append decimal point
function appendDecimal() {
  // prevent multiple decimals in the same number
  const lastNumber = display.value.split(/[+\-*/]/).pop();
  if (lastNumber.includes(".")) {
    return;
  }
  
  display.value += ".";
}

// delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") {
    display.value = "0";
  }
}

// clear the display
function clearDisplay() {
  display.value = "0";
}

// calculate the result
function calculate() {
  try {
    // prevent ending with operator
    const lastChar = display.value[display.value.length - 1];
    if (["+", "-", "*", "/"].includes(lastChar)) {
      return;
    }
    
    // evaluate the expression
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
    setTimeout(() => {
      display.value = "0";
    }, 1500);
  }
}

// allow Enter key to calculate
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calculate();
  }
});
