
// console.log("hola probando....")


//setTimeout( funcion/instruccion , tiempo)

// setTimeout(()=> {
//     console.log("Proceso asincrónico")
// }, 3000)

// console.log("Inicia proceso")

// setTimeout(()=> {
//   console.log("Fin proceso")
  
// }, 2000)

// setTimeout(()=> {
//   console.log("Fin proceso")
//   alert("desea aceptar las cookies")
  
// }, 4000)

// setTimeout(()=> {
//   console.log("Fin proceso")
  
// }, 3000)


console.log("Mitad de proceso")





//Ejemplo aparecer y desaparecer clase
const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('btn-danger')

    setTimeout(() => {
        popup.classList.remove('btn-danger')
        
    }, 2500)
})



//ejemplo hola mundo sincronico
// for (let letra of "hola") {
//     console.log(letra)
// }

// for (let letra of "mundo") {
//     console.log(letra)
// }

// //asincronico
// for (let letra of "hola") {

//     setTimeout(() => {
//         console.log(letra)
//     }, 1000)

// }

// for (let letra of "mundo") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 3000)
// }

// setTimeout(() => {
//   console.log("Adidas")
// }, 4000)

// setTimeout(() => {
//   console.log("Nike")
//   alert("maroleooo")
//   prompt("decea comprar algo")
// }, 8000)

// setTimeout(() => {
//   console.log("Maroleo")
//   alert("MAroleoooooooo")
// }, 1000)

// setTimeout(() => {
//   console.log("Manaos")
//   confirm("cerrar")
// }, 3000)

// setTimeout(() => {
//   console.log("s")


// }, 500)



// //ejemplo time en cero
// console.log("Inicia proceso")

// setTimeout(()=> {
//     console.log("Mitad de proceso")
// }, 0)

// console.log("Fin proceso")



//ejemplo call
// function multiply (x, y) {    
//     return x * y;
// }

// function printSquare (x) {    
//     let s = multiply(x, x);    
//     console.log(s);
// }

// printSquare(5);



//Set interval++++
// setInterval(() => {
//     console.log("Tic")
//     confirm("acepta las cokies")
// }, 5000)


//Clear interval+++++++++++
let counter = 0
const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 2000)


//clear timeout++++++++++
console.log("Inicio")

const fin = setTimeout(() => {
    console.log("fin")
}, 5)

clearTimeout(fin)



//Promesas++++++


//ejemplo 1
// const eventoFuturo2 = () => {
//     return new Promise( (resolve, reject) => {
//         //cuerpo de la promesa
//     } )
// }
// console.log( eventoFuturo2() ) 



// //ejemplo 2
// const eventoFuturo3 = (res) => {

//     return new Promise( (resolve, reject) => {
//         if (res === true) {
//             resolve('Promesa resuelta')
//         } else {
//             reject('Promesa rechazada')
//         }
//     })

// }


// console.log( eventoFuturo3(true) ) // Promise { 'Promesa resuelta' }
// //  console.log( eventoFuturo3(false) ) // Promise { <rejected> 'Promesa rechazada' }

// //ejemplo resumido
// const eventoFuturo4 = res => new Promise((resolve,reject)=> {
//     res ? resolve('promesa resuelta res') : reject('promesa rechazada res');
// });

// //  console.log( eventoFuturo(true) ) 
// //  console.log( eventoFuturo(false) ) 


// //Ejemplo 3
// const eventoFuturo5 = (res) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
//         }, 2000)
//     })
// }

// console.log( eventoFuturo5(true) ) // Promise { <pending> }
// console.log( eventoFuturo5(false) ) // Promise { <pending> }



// //then & catch ++++++++++++++++

// const eventoFuturo6 = (res) => {
//   return new Promise( (resolve, reject) => {
//       if (res === true) {
//           resolve('Promesa resuelta')
//       } else {
//           reject('Promesa rechazada')
//       }
//   })
// }


// eventoFuturo6(true)
//   .then( (response) => {
//       console.log(response) // Promesa resuelta
//   })

// eventoFuturo6(false)
//   .catch( (error) => {
//       console.log(error) // Promesa rechazada
//   })



// // //Finally
// eventoFuturo(false)
//   .then( (response) => {
//       console.log(response)
//   })
//   .catch( (error) => {
//       console.log(error)
//   })
//   .finally( () => {
//       console.log("Fin del proceso")
//   })


  //Ejemplo Practico

  const BD = [
      {id: 1, nombre: 'Producto 1', precio: 1500},
      {id: 2, nombre: 'Producto 2', precio: 2500},
      {id: 3, nombre: 'Producto 3', precio: 3500},
      {id: 4, nombre: 'Producto 4', precio: 3500},
  ]
  
  const pedirProductos = () => {
      return new Promise( (resolve, reject) => {
          setTimeout(() => {
              resolve(BD)
          }, 3000)
      })
  }


  let productos = []

  const renderProductos = (arr) => {
    //  
    console.log(arr)
      
  }
  
  // asincrónicamente pedimos los datos y generamos la vista
  pedirProductos()
      .then((res) => {
          productos = res
          renderProductos(productos)
      })

      .catch(()=>{
        console.log("algo salio mal")
      })

      .finally(()=>{
        console.log("promesa exitosa")
      })

     
    
  
  