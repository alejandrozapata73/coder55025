
// let alumno1 = "karina"
// let alumno2 = "baltazar"
// let alumno3 = "geronimo"


// //...............0........1............2.........3...........4
// let alumnos = ["baltazar","geronimo","jhonatan","fernando"]
// let alumnosEdades = [25,22,21,42,47,36,45,78]
// let alumnosPreEntrega = [true,true,false,true]
// let alumnosVariado = ["comida",15,true,"cena",28,false]

// let promedioAlumnos = alumnosEdades[0] + alumnosEdades[1]

// console.log(promedioAlumnos)


// console.log(alumnos)
// console.log(alumnos[0])
// console.log(alumnos[4])

// console.log("Cantidad de elementos en Edades: " + alumnosEdades.length)

// let cantidadelementos = alumnosEdades.length//

// //harcodeado
// for (let i = 0; i < alumnosEdades.length; i++) {
//    console.log("hola array: " + i)
//    console.log(alumnosEdades[i])
// }






//Metodos Length

const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.length ); //imprime 3



// recorrer Array
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

// for (let i= 0; i < numeros.length; i++) {
//     alert(numeros[i]);
// }


//Metodo .Push
const miArray2 = ["marca", 3, "palabra"]
console.log(miArray2.length)//3
miArray2.push('otro elemento')
miArray2.push('Cesar')
console.log(miArray2)
console.log(miArray2.length)//5

// console.log(miArray2.length) // ⇒ 4
// console.log(miArray2)

// //["marca", 3, "palabra", “otro elemento”]


// // metodo unshift (al inicio)
console.log(miArray2.length)//
console.log(miArray2.length)//
miArray2.unshift('elemento al inicio')

console.log(miArray2)


// //Quitar elementos .pop()
const nombres = ["Luis", "Ana", "Julia", "Juan"]

nombres.pop()
nombres.pop()
 console.log(nombres) // ["Luis", "Ana", "Julia"]

//quitar elementos .shift()
nombres.shift()
console.log(nombres) // ["Ana", "Julia"]


// //Metodo Splice
const nombreSplice = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombreSplice.splice(1, 3)

console.log(nombreSplice)
// // ['Rita', 'Ana', 'Vanesa']


// //Metodo Join
const nombreJoin = ["Luis", "Ana", "Julia", "Juan"]

console.log( nombreJoin.join(", ") ) 
// // Luis, Ana, Julia

// console.log( nombreJoin.join("*") ) 
// // Luis*Ana*Julia

// //Metodo concat
const perros   = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas)


// //metodo Slice
const nombreSlice    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombreSlice.slice(1, 3); // Nuevo array desde la posición 1 a 3.
console.log(masculinos)
// masculinos contiene ['Pedro','Miguel']


// //metodo IndexOf
const nombreIndex = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log( nombreIndex.indexOf('Rita') ) // ⇒ 0
console.log( nombreIndex.indexOf('Ana') ) // ⇒ 3
console.log( nombreIndex.indexOf('Julieta') ) // ⇒ -1


// //metodo includes
const nombreInclude = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

console.log( nombreInclude.includes('Rita') ) // ⇒ true
console.log( nombreInclude.includes('Miguel') ) // ⇒ true
console.log( nombreInclude.includes('Julieta') ) // ⇒ false

// //metodo Reverse
const nombreReverse = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
nombreReverse.reverse()
console.log( nombreReverse ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']


// //Ejemplo Cargar Array con entradas
// //Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada);
// //    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));



