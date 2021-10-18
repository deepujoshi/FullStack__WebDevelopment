
// console.log(this)
// console.log(this.alert('HII'))

// let car ={
//     Name:'C Class' ,
//     Manufacturer: 'Mercedes' ,
//     print:function (a){
//         console.log(a)
//     }
// }
// console.log(car)

// let car ={
//         Name:'C Class' ,
//         Manufacturer: 'Mercedes' ,
//         print:function (){
//             console.log(this)
//         }
//     }
//     car.print()

let car ={
            Name:'C Class' ,
            Manufacturer: 'Mercedes' ,
            print:function (){
                console.log(this.Name + ' was manufactured by ' + this.Manufacturer)
                
                            // ES6--Template String
                            // Better way to use it
                console.log(`${this.Name} was created by ${this.Manufacturer}`)
            }
        }   
        car.print()