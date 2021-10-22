let valve = new Promise((resolve , reject) => {
  setTimeout( () =>{
    resolve('hello')
  }, 3000)
})
console.log(valve)

setTimeout( () => {
  console.log(valve)
} ,4000)
<<<<<<< HEAD
=======
// function greet{
//   console.log('Hello Whats Up')
// }
// greet()
>>>>>>> a1fe574cca32dae68d89c6dfa79609ad5a0ec118
