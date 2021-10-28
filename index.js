const fs = require('fs')

// -----------------this will print after the consaole which is out of the function---------------
// fs.readFile('./test.txt' , (error,data) =>{
// fs.readFile('./test.txt' , 'utf8' , (error,data) =>{

//   if (error)
//     console.log(error)
//   else
//     console.log(data)
//     // console.log(data.toString())
// })
//------------------use this to make the file inside function to run ---------------------

console.log(fs.readFileSync('./test.txt' , 'utf8'))
console.log("I'm a random file")