var arr = ['go to GYM', 'eat food' , 'clean house']
// for (var i=0 ; i<arr.length; i++){
//   console.log(arr[i])
// }
            // CALLBACKFUNCTION 
// var callbackfunction = (element , mystery) =>{
//   console.log(element , mystery)
// }
// arr.forEach(callbackfunction)

           // can be used like this also
arr.forEach((element , index) => {
  console.log(element,index)
})