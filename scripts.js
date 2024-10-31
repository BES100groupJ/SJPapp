function appendNumber(number) {
    document.getElementById("display").value += number;
  }
  
  function appendOperator(operator) {
    document.getElementById("display").value += operator;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function appendDot() {
    const display = document.getElementById("display").value;
    if (!display.includes(".")) {
      document.getElementById("display").value += '.';
    }
  }
  
  function calculate() {
    try {
      const display = document.getElementById("display");
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  function appendNumber(number) {
    document.getElementById("display").value += number;
  }
  
  function appendOperator(operator) {
    const display = document.getElementById("display");
    const lastChar = display.value.slice(-1);
  
    // Prevents consecutive operators
    if ("+-*/".includes(lastChar)) {
      display.value = display.value.slice(0, -1) + operator;
    } else {
      display.value += operator;
    }
  }
  
  function clearDisplay() {
    document.getElementById("display").value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function appendDot() {
    const display = document.getElementById("display").value;
    if (!display.includes(".")) {
      document.getElementById("display").value += '.';
    }
  }
  
  function calculate() {
    const display = document.getElementById("display");
    try {
      // Evaluate the expression in display
      display.value = eval(display.value) || "";
    } catch (error) {
      display.value = 'Error';
    }
  }
  