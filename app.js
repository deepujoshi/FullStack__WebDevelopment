// FUNCTIONS

// just fuctions
// fuction greet(){
// console.log('hello')
// }
// greet ("Deepthi")


// fuctions with paraments
// function greet(Name, age){
//   console.log(Name, age)
//   console.log('hello')
// }
// greet('deepthi', 19)

// Passing Default paramenters
// function greet (Name='john' , age=99){
//   console.log(Name, age)
//   console.log(Name + " your age is  " + age)
// } 
// greet('deepthi', 21)


// function sum(a , b){
//   console.log(a + b)
// }
// sum(10, 20)
// sum(10) // output will be " NaN(Not a Number) "

function add(a=0,b=0){
  var sum = a+b 
  return sum
}
// console.log(sum) // retuns an error cuz function variables are limited to the function scope only
                    //  U can't get the output is used like this 
// console.log(add(10,20)) OR
var result = add(10,20)
console.log(result)
