
function inputNumbers(number){
  let num = document.querySelector(".result").innerHTML
  document.querySelector(".result").innerHTML = num + number
}

function inputNumbersKeyboard(){
  window.document.addEventListener("keydown", function(event){
    let transformNumber = Number(event.key)
    let isNumber = transformNumber || event.key === Number
    let num = document.querySelector(".result").innerHTML
    if(isNumber){
    document.querySelector(".result").innerHTML = num + transformNumber
    }
    else if (event.key === "0"){
      document.querySelector('.result').innerHTML = num + transformNumber
    }
    else if (event.key === "+"){
      document.querySelector('.result').innerHTML = num + event.key
    }
    else if (event.key === "-"){
      document.querySelector('.result').innerHTML = num + event.key
    }
    else if (event.key === "*"){
      document.querySelector('.result').innerHTML = num + event.key
    }
    else if (event.key === "/"){
      document.querySelector('.result').innerHTML = num + event.key
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



  
  
  
  
  
  
// let num = document.querySelector(".result").innerHTML
// if(event.key === "0"){
//   document.querySelector(".result").innerHTML = num + '0'
// }
// else if(event.key === "1"){
//   document.querySelector(".result").innerHTML = num + '1'
// }
// else if(event.key === "2"){
//   document.querySelector(".result").innerHTML = num + '2'
// }
// else if(event.key === "3"){
//   document.querySelector(".result").innerHTML = num + '3'
// }
// else if(event.key === "4"){
//   document.querySelector(".result").innerHTML = num + '4'
// }
// else if(event.key === "5"){
//   document.querySelector(".result").innerHTML = num + '5'
// }
// else if(event.key === "6"){
//   document.querySelector(".result").innerHTML = num + '6'
// }
// else if(event.key === "7"){
//   document.querySelector(".result").innerHTML = num + '7'
// }
// else if(event.key === "8"){
//   document.querySelector(".result").innerHTML = num + '8'
// }
// else if(event.key === "9"){
//   document.querySelector(".result").innerHTML = num + '9'
// }
// else if(event.key === "+"){
//   document.querySelector(".result").innerHTML = num + '+'
// }
// else if(event.key === "-"){
//   document.querySelector(".result").innerHTML = num + '-'
// }
// else if(event.key === "*"){
//   document.querySelector(".result").innerHTML = num + '*'
// }
// else if(event.key === "/"){
//   document.querySelector(".result").innerHTML = num + '/'
// }