const path = require('path')

// console.log(path.resolve('./index.js'))
// console.log(path.relative('../','./temp/app.js'))   //create afolder name temp then moved the app.js  and then excuted this :)

// console.log(path.extname('./app.js'))
// console.log(path.dirname('./temp/app.js'))

// console.log(__dirname)
console.log(path.join(__dirname,'app.js'))
