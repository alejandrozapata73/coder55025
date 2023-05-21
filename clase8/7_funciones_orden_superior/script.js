
// n=10
// m=12
// //m>n...12>10
// function mayorQue(n) {
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)

// let mayorQueCinco = mayorQue(5)

// console.log( mayorQueDiez(12) )  //  true
//  console.log( mayorQueDiez(8) )  //  false 8 > 10
// //  console.log( mayorQueDiez(15) )  //  true 15 > 10
// //  console.log( mayorQueDiez(5) )  //  false 5 > 10


// //  console.log( mayorQueCinco(6) )  //  true 6 > 5


// op="sumar"

// function asignarOperacion(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b
//     } else if (op == "restar") {
//         return (a, b) => a - b
//     }
// }

// // let suma = asignarOperacion("restar")


// // console.log( suma(4, 6) )  //  10



// // function valor(op){

// //     console.log(op)

// // }

// // valor("restar")



// // // //Ejemplo 1
// // arr = [1, 2, 3, 4]
// // fn = console.log()

// // function porCadaUno(arr, fn) {

// //     for (const el of arr) {

// //         console.log(el)
// //          fn(el)
// //     }

// // }

// // // const numeros= [1, 2, 3, 4]

// // // porCadaUno(numeros, console.log)
// // // 1
// // // 2
// // // 3
// // // 4

// // // //ejemplo 2
// // // let total = 0
// // // const numeros= [1, 2, 3, 4]

// // // // //...
// // // // function acumular(num) {
// // // //     total += num
// // // // }

// // // // porCadaUno(numeros, acumular)
// // // // console.log(total) // 10


// // // // //Ejemplo 3
// // // // const quemacerebro = []

// // // // porCadaUno(numeros, (papa)=> {
// // // //     quemacerebro.push(papa * 10)
// // // // })

// // // // // 1..2
// // // // // 2...4
// // // // // 3...6
// // // // // 4..8

// // // // console.log(duplicado) // [2, 4, 6, 8]


// // // const duplicado = []

// // // porCadaUno(numeros, (el)=> { duplicado.push(el * 2) } )

// // // console.log(duplicado) // [2, 4, 6, 8]


// // // // //otra forma
// // // // function asignarOperacion(op) {
// // // //     if (op == "sumar") {
// // // //         return sumar;
// // // //     } else if (op == "restar") {
// // // //         return restar;
// // // //     }
// // // // }


// // // // function sumar(a, b)
// // // // {
// // // //   return a + b;
// // // // }


// // // // function restar(a, b)
// // // // {
// // // //   return a - b;
// // // // }

// // // // var op = asignarOperacion("sumar")

// // // // console.log(op(2, 3))



// // const numeros = [1, 2, 3, 4, 5, 6,10,12,25,48]


// // numeros.forEach( (el)=> {console.log(el)} )



// // for(let i=0;i<numeros.length;i++){

// //     console.log(numeros[i])

// // }


// // /*

// // 0-1
// // 1-

// // */





// // // //+++Find+++

// // const cursos = [
// //     {
// //         nombre: 'Javascript', 
// //         precio: 15000
// //     },
// //     {
// //         nombre: 'ReactJS',
// //         precio: 22000
// //     },
// // ]

// // const resultado = cursos.find( (el) => el.nombre === "ReactJS" )
// // // [0].nombre->'javascript=="ReactJS"
// // // [1].nombre-> 'ReactJS' === 'ReactJS
// //  const resultado2 = cursos.find((el) => el.nombre === "DW")

// // console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
// //  console.log(resultado2) // undefined

// // //+++++++Filter

// // const cursos = [
// //     {nombre: 'Javascript', precio: 15000},
// //     {nombre: 'ReactJS', precio: 22000},
// //     {nombre: 'AngularJS', precio: 22000},
// //     {nombre: 'Desarrollo Web', precio: 16000},
// // ]

// // const resultado = cursos.filter((el) => el.nombre.includes('JS'))

// // const resultado2 = cursos.filter((el) => el.precio < 20000)
// // .......................................

// //  console.log(resultado)

// //  console.log(resultado2)
// // /* [
// //     {nombre: 'ReactJS', precio: 22000},
// //     {nombre: 'Angular', precio: 22000}
// // ] */

// // console.log(resultado2) // []


// // //+++++++++++++some+++++

// // console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// // true
// // console.log( cursos.some((el) => el.nombre == "VueJS")) 
// // false

//+++++map
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((indice) => indice.nombre)
// const precios = cursos.map((el) =>  el.precio)
console.log(nombres)
// console.log(precios)
// console.log(precios[0]);

// //++++++++++++Reduce+++++++++++++

const numeros = [1, 2, 3, 4, 5, 6]

const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21


// const miCompra = [
//     {
//         nombre: 'JavaScript',
//         precio: 500
//     },
//     {
//         nombre: 'ReactJS',
//         precio: 500
//     }
// ]

// const totalCompra = miCompra.reduce((acumulado,el)=> acumulado + el.precio,0);

// console.log(totalCompra)


// console.log(new Date(2022,1,15))

const numeros2 = [ 40, 1, 5, 200 ];

numeros2.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros2.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]

// console.log( new Date() )


//Ejemplo.. compra
const miCompra = [
    {
        nombre: 'JavaScript',
        precio: 500
    },
    {
        nombre: 'ReactJS',
        precio: 500
    },
    {
        nombre: 'PHP',
        precio: 500
    },
    {
        nombre: 'Java',
        precio: 500
    },
    {
        nombre: 'Python',
        precio: 500
    }
]

const totalCompra = miCompra.reduce((acumulado,el)=> acumulado + el.precio,0);

console.log(totalCompra)







// números entre 0 y 10
console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.random() * 30 + 20 )




const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() )



console.log( new Date() )



console.log(new Date(2020, 1, 15))
// Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)


const casiNavidad2 = new Date("December 25, 2021 23:59:59")
console.log(casiNavidad2)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)




