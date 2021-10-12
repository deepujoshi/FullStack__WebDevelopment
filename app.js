// ARROW FUNCTIONS
// Its just replacing "function" keyword with "=>"

var add = (a=0,b=0) => {
  var sum = a + b
  return sum
}
console.log(add(10,20))