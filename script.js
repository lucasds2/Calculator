class Calculator {
  constructor(previousValueText, currentValueText) {
    this.previousValueText = previousValueText;
    this.currentValueText = currentValueText;
    this.clearAll()
  }

  clearAll() {
    this.previousValue = ""
    this.currentValue = ""
    this.operators = undefined
  }

  backspace() {
    this.currentValue = this.currentValue.toString().slice(0, -1)
  }

  inputNumber(number) {
    if (number === "." && this.currentValue.includes(".")) return
    this.currentValue = this.currentValue.toString() + number.toString()
  }

  inputOperator(operator) {
    if (this.currentValue === "") return
    if (this.previousValue !== null) {
      this.perfomedOperation()
    }
    this.operation = operator
    this.previousValue = this.currentValue
    this.currentValue = ""
  }

  perfomedOperation() {
    let perfomed;
    let prevValue = parseFloat(this.previousValue)
    let currentV = parseFloat(this.currentValue)
    if (isNaN(currentV || isNaN(prevValue))) return
    switch (this.operation) {
      case "+":
        perfomed = currentV + prevValue
        break;
      case "-":
        perfomed = currentV - prevValue
        break;
      case "*":
        perfomed = currentV * prevValue
        break;
      case "/":
        perfomed = currentV / prevValue
        break;
      default:
        return
    }
    this.currentValue = perfomed
    this.operation = undefined
    this.previousValue = ""
  }

  updateDisplay() {
    this.currentValueText.innerText = this.currentValue
    this.previousValueText.innerText = this.previousValue
  }
}

const numbersButton = document.querySelectorAll(".number");
const previousValueText = document.querySelector(".previous-value");
const currentValueText = document.querySelector(".current-value");
const operatorsButton = document.querySelectorAll(".operator");
const clearAllButton = document.querySelector(".clear-all");
const backspaceButton = document.querySelector(".backspace");
const calcButton = document.querySelector(".calc");

const calculator = new Calculator(previousValueText, currentValueText)

numbersButton.forEach(number => {
  number.addEventListener("click", () => {
    calculator.inputNumber(number.innerText)
    calculator.updateDisplay()
  })
})

operatorsButton.forEach(operator => {
  operator.addEventListener("click", () => {
    calculator.inputOperator(operator.innerText)
    calculator.updateDisplay()
  })
})

calcButton.addEventListener("click", () => {
  calculator.perfomedOperation()
  calculator.updateDisplay()
})

clearAllButton.addEventListener("click", () => {
  calculator.clearAll()
  calculator.updateDisplay()
})

backspaceButton.addEventListener("click", () => {
  calculator.backspace()
  calculator.updateDisplay()
})

backspaceButton.innerHTML = "<"
