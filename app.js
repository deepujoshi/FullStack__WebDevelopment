let valve = new Promise((resolve , reject) => {
  setTimeout( () =>{
    resolve('hello')
  }, 3000)
})
console.log(valve)

setTimeout( () => {
  console.log(valve)
} ,4000)
// function greet{
//   console.log('Hello Whats Up')
// }
// greet()
