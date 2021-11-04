// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((request, response ) => {
//   const {url} = request
//   if (url=='/login'){
//     response.write('<h1>LOGIN</h1>')
//     response.end()
//   }
//   if (url=='/signup'){
//     response.write('<h1>SIGNUP</h1>')
//     response.end()
//   }

// })

// server.listen(3000, () => {
//   console.log(`server listening at PORT: ${3000}`)
// })

const express = require('express')
const app =express()

app.get('/login' , (req , res ) => {
  res.send('this is a LOGIN')
})

app.get('/signup' , (req , res ) => {
  res.send('this is a SIGNUP')
})

app.listen(3000, () => {
  console.log("Server listening at post 3000")
})