const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector("#add")
const sub = document.querySelector("#sub")
const multiply = document.querySelector('#multiply')
const resultBox = document.querySelector('.result')

// console.log(a ,b)
// console.log(add ,multiply)
// console.log(result)
              //  TO ADD NUMBERS
// const sum =() => {
//   const result = parseInt(a.value) + parseInt(b.value)
//   resultBox.innerHTML = result
//   // resultBox.textContent = result // can be used like this also

// }
// add.addEventListener('click' , sum)

//               // TO MULTIPLY NUMBERS
// const product =() => {
//   const result = parseInt(a.value) *  parseInt(b.value)
//   resultBox.innerHTML = result
//   // resultBox.textContent = result // can be used like this also

// }
// multiply.addEventListener('click' , product)
                //  ABOVE CODE TAKES ALOT OF CODE LINE

                // USING BELOW CODE REDUCES THE LONES OF CODE
const calculate = (event , operation) => {
  // console.log(event.target)
  // if (operation == 'add'){
  //   console.log('adding')
  // }else if (operation == 'multiply'){
  //   console.log('multiply')
              // IF-ELSE IS MORE COMPLEX
               
              // SWITCH BETTER WAY TO USE
  switch (operation) {
    case "add":
      resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
      break;
    case "multiply":
      resultBox.innerHTML = parseInt(a.value) *  parseInt(b.value)
      break;
    case "sub":
      resultBox.innerHTML = parseInt(a.value) -  parseInt(b.value)
      break;
  }
  }


add.addEventListener('click' , (event) =>{
  // return calculate('add')// same
   calculate(event , 'add')

})

multiply.addEventListener('click', (event) =>{
 calculate(event , 'multiply')
  // return calculate('multiply') // same

})
sub.addEventListener('click', (event) =>{
  calculate(event , 'sub')
   // return calculate('sub') // same
 
 })





