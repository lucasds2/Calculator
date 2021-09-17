
function inputNumbers(number){
  let num = document.querySelector(".result").innerHTML
  document.querySelector(".result").innerHTML = num + number
}

function inputNumbersKeyboard(){
  window.document.addEventListener("keydown", function(event){
    console.log(event)
    let num = document.querySelector(".result").innerHTML
    if(event.key === "0"){
      document.querySelector(".result").innerHTML = num + '0'
    }
    else if(event.key === "1"){
      document.querySelector(".result").innerHTML = num + '1'
    }
    else if(event.key === "2"){
      document.querySelector(".result").innerHTML = num + '2'
    }
    else if(event.key === "3"){
      document.querySelector(".result").innerHTML = num + '3'
    }
    else if(event.key === "4"){
      document.querySelector(".result").innerHTML = num + '4'
    }
    else if(event.key === "5"){
      document.querySelector(".result").innerHTML = num + '5'
    }
    else if(event.key === "6"){
      document.querySelector(".result").innerHTML = num + '6'
    }
    else if(event.key === "7"){
      document.querySelector(".result").innerHTML = num + '7'
    }
    else if(event.key === "8"){
      document.querySelector(".result").innerHTML = num + '8'
    }
    else if(event.key === "9"){
      document.querySelector(".result").innerHTML = num + '9'
    }
    else if(event.key === "+"){
      document.querySelector(".result").innerHTML = num + '+'
    }
    else if(event.key === "-"){
      document.querySelector(".result").innerHTML = num + '-'
    }
    else if(event.key === "*"){
      document.querySelector(".result").innerHTML = num + '*'
    }
    else if(event.key === "/"){
      document.querySelector(".result").innerHTML = num + '/'
    }
    else if(event.key === "Backspace"){
      backspace()
    }
    else if(event.key === "="){
      calcOperation()
    }else{
      alert("Apenas números e símbolos")
    }
  })
  
}



function clean(){
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









































// if(number1){
//   function putNumber1(){
//     result.innerHTML += number1.textContent
//   }
//   number1.addEventListener("click", putNumber1)
// }

// if(number2){
//   function putNumber2(){
//     result.innerHTML += number2.textContent
//   }
//   number2.addEventListener("click", putNumber1)
// }

// if(number3){
//   function putNumber3(){
//     result.innerHTML += number1.textContent
//   }
//   number3.addEventListener("click", putNumber1)
// }

// if(number4){
//   function putNumber4(){
//     result.innerHTML += number1.textContent
//   }
//   number4.addEventListener("click", putNumber1)
// }

// if(number5){
//   function putNumber5(){
//     result.innerHTML += number1.textContent
//   }
//   number5.addEventListener("click", putNumber1)
// }

// if(number6){
//   function putNumber6(){
//     result.innerHTML += number1.textContent
//   }
//   number6.addEventListener("click", putNumber1)
// }

// if(number7){
//   function putNumber7(){
//     result.innerHTML += number1.textContent
//   }
//   number7.addEventListener("click", putNumber1)
// }

// if(number8){
//   function putNumber8(){
//     result.innerHTML += number1.textContent
//   }
//   number8.addEventListener("click", putNumber1)
// }

// if(number9){
//   function putNumber9(){
//     result.innerHTML += number1.textContent
//   }
//   number9.addEventListener("click", putNumber1)
// }


  
  
  
  
  
  
  