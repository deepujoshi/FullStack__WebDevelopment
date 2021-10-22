// let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
//   let pasrseData = res.json()
//   console.log(pasrseData)
  
// })

let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
  console.log(data)
})

// console.log(response)

// setTimeout( () => {
//   console.log(response)
  
//   console.log(data)
// },3000)