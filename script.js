const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".sub-operators img")

for (let i = 0; i < numbers.length; i++) {
  const isNumber = numbers[i]
  const valueOfNumbers = Number(isNumber.innerText)
  if (i <= 3) {
    const isOperators = operators[i]
    const idOfOperators = isOperators.id
    isOperators.addEventListener("click", () => {
      divResult(idOfOperators)
    })
  }
  isNumber.addEventListener("click", () => {
    divResult(valueOfNumbers)
    console.log(valueOfNumbers)
  })
}


function inputNumbersKeyboard() {
  window.document.addEventListener("keydown", function (user) {
    let arrayWithValues = []
    arrayWithValues.push(user.key)
    let isNumber = isNaN(user.key)
    let isOperators = arrayWithValues[0] === "+" || arrayWithValues[0] === "-" || arrayWithValues[0] === "*" || arrayWithValues[0] === "/"
    if (!isNumber) {
      divResult(user.key)
    } else if (isOperators) {
      divResult(user.key)
    } else if (user.key === "Backspace") {
      backspace()
    } else if (user.key === "Enter") {
      calcOperation()
    } else {
      return ("Apenas números e operadores")
    }
  })

}

function cleanAll() {
  document.querySelector(".result").innerHTML = ""
}

function backspace() {
  let result = document.querySelector(".result").innerHTML
  document.querySelector('.result').innerHTML = result.substring(0, result.length - 1)
}

function calcOperation() {
  let resultInnerHTMl = document.querySelector(".result").innerHTML
  if (resultInnerHTMl) {
    document.querySelector(".result").innerHTML = eval(resultInnerHTMl)
    console.log(document.querySelector(".result").innerHTML = eval(resultInnerHTMl))
  }
}

function divResult(value) {
  document.querySelector(".result").innerHTML += value
}

window.addEventListener("load", inputNumbersKeyboard())