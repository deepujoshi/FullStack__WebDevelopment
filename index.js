const fs = require('fs')

fs.writeFile('./test.txt' ,"HI", (error) =>{
  if (error)
    console.log(error)
  })
