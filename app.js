// fetch('https://jsonplaceholder.typicode.com/users')
//    .then(res => res.json())
//     .then(data => {
//        data.forEach(user => {
//              console.log(data)
//        })
//  })    
       
const fetchData = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()
console.log(data)
}
fetchData()