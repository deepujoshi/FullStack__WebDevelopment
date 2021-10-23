const table = document.querySelector('table')
console.log(table)

fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
    .then(data => {
       data.forEach(user => {
         let newRow = document.createElement('tr')
         let dataID = document.createElement('td')
         let dataIDTextNode = document.createTextNode(user.id)
         dataID.appendChild(dataIDTextNode)
         newRow.appendChild(dataID)

         table.appendChild(newRow)

         let newRow1 = document.createElement('tr')
         let dataID1 = document.createElement('td')
         let dataIDTextNode1 = document.createTextNode(user.name)
         dataID1.appendChild(dataIDTextNode1)
         newRow1.appendChild(dataID1)

         table.appendChild(newRow1)

        //  let newRow = document.createElement('tr')
        //  let dataID = document.createElement('td')
        //  let dataIDTextNode = document.createTextNode(user.email)
        //  dataID.appendChild(dataIDTextNode)
        //  newRow.appendChild(dataID)

        //  table.appendChild(newRow)

        //  let newRow = document.createElement('tr')
        //  let dataID = document.createElement('td')
        //  let dataIDTextNode = document.createTextNode(user.username)
        //  dataID.appendChild(dataIDTextNode)
        //  newRow.appendChild(dataID)

        //  table.appendChild(newRow)


       })
})