// 'let' and 'var' 
     
// let is a block scope
// var is a global scope

// if (true){
//     let Name = 'Ferrari'
//     console.log(Name)
//     }

// for(var i=0;i<10;i++){
//     }
// console.log(i)   //OUTPUT COMES

// for(let i=0;i<10;i++){
// }
// console.log(i) // OUTPUT ERROR

if (true){
    var Name = 'Ferrari'
        if (true){
            console.log(Name)
        }
    }   
