const input = document.querySelector('input')
const button = document.querySelector('button')
const div = document.querySelector('div')

// div.innerHTML = localStorage.getItem('InputValue')
// button.addEventListener('click' , (req , res) => {
//   localStorage.setItem('InputValue', input.value)
//   div.innerHTML = input.value
// })

// localStorage.setItem('InputValue', "something")
// console.log(localStorage.getItem("InputValue"))


// ------------STRIGNGIFY METHOD ------------------
const arr = [1, 2, 3, 4,5]

localStorage.setItem('val' , JSON.stringify(arr))

console.log(JSON.parse(localStorage.getItem('val')))