// for (var i=0;i<10;i++)
// console.log('iteration',i+1)
// console.log(window) //   WILL GET AN ERROR

// setTimeout( () =>{
//   console.log('hii')
// }, 5000)

const greet = () => 'hii'
module.exports.greet = greet
console.log(module)

