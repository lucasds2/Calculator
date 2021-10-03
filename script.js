
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".sub-operators img")
const numbersArray = Array.from(numbers)
numbersArray.forEach((number) => {
  number.addEventListener("click", () => {
    let value = number.innerText
    document.querySelector(".result").innerHTML += value
  })
})
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    let operatorValue = operator.id
    document.querySelector(".result").innerHTML += operatorValue
  })
})

function inputNumbersKeyboard(){
  window.document.addEventListener("keydown", function(event){
    let transformNumber = Number(event.key)
    let isNumber = transformNumber || event.key === Number
    if(isNumber){
    document.querySelector(".result").innerHTML += transformNumber
    }
    else if (event.key === "0"){
      document.querySelector('.result').innerHTML += transformNumber
    }
    else if (event.key === "+"){
      document.querySelector('.result').innerHTML += event.key
    }
    else if (event.key === "-"){
      document.querySelector('.result').innerHTML += event.key
    }
    else if (event.key === "*"){
      document.querySelector('.result').innerHTML += event.key
    }
    else if (event.key === "/"){
      document.querySelector('.result').innerHTML += event.key
    }
    else if(event.key === "Backspace"){
      backspace()
    }
    else if(event.key === "Enter"){
      calcOperation()
    }
    else{
      return("Apenas números e operadores")
    }
  })
  
}

function cleanAll(){
  document.querySelector(".result").innerHTML = ""
}

function backspace(){
  let result = document.querySelector(".result").innerHTML
  document.querySelector('.result').innerHTML = result.substring(0, result.length -1)
}

function calcOperation(){
  let resultInnerHTMl = document.querySelector(".result").innerHTML
  if(resultInnerHTMl){
    document.querySelector(".result").innerHTML = eval(resultInnerHTMl)
  }
}

window.addEventListener("load", inputNumbersKeyboard())
