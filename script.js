
function inputNumbers(number){
  let num = document.querySelector(".result").innerHTML
  document.querySelector(".result").innerHTML = num + number
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


  
  
  
  
  
  
  