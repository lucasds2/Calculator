const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let arr = [];

for (let i = 0; i < numbers.length; i++) {
  const isNumber = numbers[i];
  const valueOfNumbers = isNumber.innerText;
  if (i <= 3) {
    const isOperators = operators[i];
    const valueOfOperators = isOperators.innerText;
    isOperators.addEventListener("click", () => {
      divResult(valueOfOperators);
    });
  }
  isNumber.addEventListener("click", () => {
    divResult(valueOfNumbers);
  });
}

function keyboardInput() {
  window.document.addEventListener("keydown", function (user) {
    let arrayWithValues = [];
    arrayWithValues.push(user.key);
    let isNumber = isNaN(user.key);
    let isOperators =
      arrayWithValues[0] === "+" ||
      arrayWithValues[0] === "-" ||
      arrayWithValues[0] === "*" ||
      arrayWithValues[0] === "/";
    if (!isNumber) {
      divResult(user.key);
    } else if (isOperators) {
      divResult(user.key);
    } else if (user.key === "Backspace") {
      buttons.backspaceKeyboard();
    } else if (user.key === "Enter") {
      calcOperation();
    } else {
      return "Apenas números e operadores";
    }
  });
}

function numberWithCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class Buttons {
  constructor(buttonClear, buttonBackspace, buttonCalc) {
    this.buttonClear = buttonClear;
    this.buttonBackspace = buttonBackspace;
    this.buttonCalc = buttonCalc;
    this.resultInner = document.querySelector(".result");
  }

  clearAll() {
    this.buttonClear.addEventListener("click", () => {
      this.resultInner.innerHTML = "";
    });
  }

  backspace() {
    this.buttonBackspace.addEventListener("click", () => {
      let resultHTML = this.resultInner.innerHTML;
      this.resultInner.innerHTML = resultHTML.substring(
        0,
        resultHTML.length - 1
      );
    });
  }

  backspaceKeyboard() {
    let resultHTML = this.resultInner.innerHTML;
    this.resultInner.innerHTML = resultHTML.substring(0, resultHTML.length - 1);
  }

  calcOperation() {
    this.buttonCalc.addEventListener("click", () => {
      if (this.resultInner.innerHTML !== "") {
        this.resultInner.innerHTML = numberWithCommas(
          eval(this.resultInner.innerHTML)
        );
      }
    });
  }
}

let buttonClear = document.querySelector(".clear-all");
let buttonBackspace = document.querySelector(".backspace");
let buttonCalc = document.querySelector(".calc");

const buttons = new Buttons(buttonClear, buttonBackspace, buttonCalc);
buttons.clearAll();
buttons.backspace();
buttons.calcOperation();

function divResult(value) {
  document.querySelector(".result").innerHTML += value;
}

window.addEventListener("load", keyboardInput());
