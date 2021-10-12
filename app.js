// ARROW FUNCTIONS
// Its just replacing "function" keyword with "=>"

// var add = (a=0,b=0) => {
//   var sum = a + b
//   return sum
// }
// console.log(add(10,20))

// can use like this
var add = (a=0,b=0) => {
  return a + b
}
console.log(add(10,20))

// can be used like this also
var add = (a=0,b=0) => a + b
console.log(add(10,20))


// Arrow Function example
// const greet = (Name) => {
//   return 'hi ' + Name
// }
// console.log(greet('Deepthi'))

        // OR
// if we just have one parameter USE LIKE THIS

const greet = Name =>'hi ' + Name

console.log(greet('Deepu'))

      
