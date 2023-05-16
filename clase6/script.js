// // // let mate = amargo;
// // // let mate = dulce;
// // // let mate = lavado;
// // // let mate = vacio;


// // //objetos literales

// // const mate = { 
// //     //llave.......valor
// //         nombre: "Homero",
// //         estadoAgua: "caliente", 
// //         tipo: "amargo",
// //         caliente: true,
// //         cantidad: 5
// // }

// // const mario = {

// //     nombre: "mario",
// //     color: "rojo",
// //     edad: 38,
// //     profesion: "plomero",
// //     herramientas: true,
// //     bigote: true,
// //     vidas: 3

// // }

// // console.log("el mate se llama: " + mate.nombre)
// // alert("el mante se llama: " + mate.nombre)


// // document.write("el mate se llama: " + mate.nombre)
// // console.log(mate.estadoAgua)
// // console.log(mate.tipo)

// // //....
// // mario.vidas = mario.vidas - 1

// // console.log(mario.nombre + mario.color)

// // mario.bigote = !false

// // //...
// // mario.vidas = 1
// // console.log(mario.bigote)


// function Persona (nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad 	 = edad;
//     this.calle  = calle;
// }

// const persona1 = new Persona("Marge", 39, "Av. Siempreviva 742");



// persona1.nombre = "homero"


// const persona2 = new Persona("bart",15,"av siempre")

// const persona3 = new Persona("otto",38,"N/S")

// console.log(persona1.nombre)//homero



// console.log(persona2.nombre)//bart


// console.log(persona3.nombre)//otto


// //Tienda...

// function Bebidas(nombre,precio, marca,stock) {

//     this.nombre = nombre,
//     this.precio = precio,
//     this.marca = marca,
//     this.stock = stock

// }

// function Clientes(nombre, apellido, edad, sexo, dni){


// }

// function Pacientes(){

// // }

// // function Remeras(tipo, talle, color,){

// // }

// // // function Pantalones(){


// // // }

// // // const pepsi = new Bebidas("Pepsi",300,"pepsi",150)

// // // const cocacola = new Bebidas("coca",350,"coca",400)

// // // const manaos = new Bebidas("cola",250,"manaos",140)



// // function Persona(nombre, edad, calle) {
// //     this.nombre = nombre;
// //     this.edad   = edad;
// //     this.calle  = calle;
// //     this.trabajo = true

// //     //metodo
// //     this.hablar = function(){ 
// //                   console.log("HOLA SOY "+ this.nombre)
                  
// //                 }

// //     this.saltar = function(){
// //         console.log("estoy saltando")
// //     }
// // }
// // const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");


// // console.log(persona1.nombre)
// // console.log(persona1.edad)
// // console.log(persona1.trabajo)
// // console.log(persona1.hablar())
// // console.log(persona1.saltar())



// // function Archivo (nombre,peso){
// //         this.nombre = nombre,
// //         this.peso = peso,
// //         this.eliminado = false

// //         this.eliminar = function(){
// //             console.log("esta borrado")
// //             this.eliminado = true
// //         }
// // }

// // const word1 = new Archivo("tesis","150k")

// // console.log(word1.nombre)
// // console.log(word1.peso)
// // console.log(word1.eliminado)

// // //metodo
// // // word1.eliminar()


// // console.log(word1.eliminado)



// // let cadena = "HOLA CODER";
// // //Propiedad de objeto String: Largo de la cadena.
// // console.log(cadena.length);
// // //Método de objeto String: Pasar a minúscula.
// // console.log(cadena.toLowerCase());
// // //Método de objeto String: Pasar a mayúscula.
// // console.log(cadena.toUpperCase());

// // console.log(cadena)


// // const persona10 = { 
// //     nombre: "Homero",
// //     edad: 39, 
// //     calle: "Av. Siempreviva 742"
// // };
// // //devuelve true porque la clave "nombre" existe en el objeto persona1
// // console.log( "dni" in persona10);
// // //devuelve false porque la clave "origen" no existe en el objeto persona1
// // console.log( "origen" in persona10);
// // //recorremos todas las propiedades del objeto con el ciclo for...in
// // for (const propiedad in persona10) {
// //     console.log(persona10[propiedad]);
// // }


// class Persona{

//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad   = edad;
//         this.calle  = calle;
//         this.kalorias = 0
//     }

//     //
//     hablar(){
//         console.log("HOLA SOY "+ this.nombre);
//     }

//     comer(kaloriasRecibidas){
//         console.log("estoy comiendo")
//         this.kalorias = this.kalorias + kaloriasRecibidas
//     }

//     ejercicio(){

//         //... disminuir
//     }



// }

// const personaA = new Persona("Homero", 39, "Av. Siempreviva 742");

// const personaB = new Persona("bart",14,"Av. Siempreviva 742")

// personaA.hablar()
// personaA.comer(1200)
// personaA.comer(5000)


// console.log(personaA.kalorias)//



// //preguntas entregable.....

// //francisco...
// /*

// -variable...
// -constante..
// -condicional...()
// -switch
// -while, dowhile, for
// -prompt
// -alert
// -funcion

// */

// var nombreUsuario = prompt("nombre usuario")
//  alert("el nombre de usuario es: " + nombreUsuario)

// //funcion en carrito





let harryPotter = 150

let elSeñorAnillos = 60


console.log(harryPotter)

function incrementarStock(cantidad){

    harryPotter = harryPotter + cantidad

}

function restarStock(){


}

incrementarStock(15)

incrementarStock(20)


console.log(harryPotter)

if(libro==true){


}



while(libro==10){



}

for(let i=0;i<10;i++){



}
