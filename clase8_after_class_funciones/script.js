// console.log("funciona")


// //funciones declarativas...

// function saludar(nombre){

//     console.log("hola estoy saludando: " + nombre)
// }

// saludar("Karina")



// function saludarRetorno(nombre){

//     // console.log("hola estoy saludando: " + nombre)

//     return nombre
// }


// saludarRetorno("Maria")

// console.log(saludarRetorno("Maria"))

// let guardarRetorno = saludarRetorno("Maria")


// alert(guardarRetorno)
// console.log("resultado de retorno" + guardarRetorno)


// //funciones expresivas

// let saludarExpress = function (){ 
//     console.log("saludo Express")
// }

// let hablarExprres = function (){
//     console.log("hola estoy hablando")
// }

// //primera fase
// let cantarRetorno = function(cancion){
//     return cancion
// }

// //fase 2
// let cantarRetorno2 = (cancion) =>{
//     return cancion
// }

// //fase 3
// let cantarRetorno3 = (cancion) => cancion


// saludarExpress()
// hablarExprres()
// cantarRetorno("Guardianes")


//funciones de orden superior...

// function funcionesOrdenSuperior( function saludar() {console.log("hola")} )

let numeros = [1,2,3,4,2];

let suma = [];

//foreach

for ( let elemento of numeros){

}


numeros.forEach( (numeros)=>console.log(numeros) )

//map...devolverme un array

let numerosSuma = numeros.map((numero)=>numero + 1)
// numerosSuma = [2,3]
//...1 = 1+1....2
console.log(numerosSuma)

//filter..puede generar un array
let pares = numeros.filter((numero)=>numero>2)
//

console.log(pares)

//reduce

let sumaValores = numeros.reduce((acumulador,numero)=>acumulador+numero,0)

console.log(sumaValores)


let productos = [
    {
        id: 1,
        nombre: "oreo",
        precio: 150

    },
    {
        id: 2,
        nombre: "mana",
        precio: 400

    },
    {
        id: 3,
        nombre: "pepas",
        precio: 250

    },
    {
        id: 4,
        nombre: "don satur",
        precio: 100

    }

]

function cualquiera(x){
    console.log(x)
}

console.log("***recorrido for***")
for (let i=0;i<productos.length;i++){

    console.log(productos[i].nombre)

}

console.log("********** Orden superior*****")

productos.forEach((elementoArecorrer)=>console.log(elementoArecorrer.nombre))

let mayoresA150 = productos.filter((elemento)=>elemento.precio>150)

console.log(mayoresA150)

let sumaTotal = productos.reduce()