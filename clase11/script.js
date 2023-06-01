// localStorage.setItem('bienvenida', '¡Hola Coder!');
// localStorage.setItem('esValido', true);
// localStorage.setItem('unNumero', 20);

// localStorage.setItem('alumno1', "jonathan");

// // localStorage.setItem('alumno2', "Karina");



// // localStorage.setItem("usuarioNerdFlix","Lucas")


// // console.log(localStorage.getItem("usuarioNerdFlix"))

// // let variableRecuperada = localStorage.getItem("usuarioNerdFlix")


// // let usuarioX = document.getElementById("usuarioX")
// // let botonlocalX = document.getElementById("botonlocalstorage")
// // let titulo = document.getElementById("title")

// // botonlocalX.addEventListener("click", ponerUsuarioLS)

// // function ponerUsuarioLS(){

// //     usuarioX.innerHTML = usuarioRecuperadoX
// // }


// // let usuarioLocalStorage = prompt("ingrese su usuario")

// // localStorage.setItem("usuarioX",usuarioLocalStorage)

// // let usuarioRecuperadoX = localStorage.getItem("usuarioX")

// // console.log(usuarioRecuperadoX)

// // sessionStorage.setItem('esValido', false);



// // let usuario = prompt("ingrese su usario")

// for (let i = 0; i < localStorage.length; i++) {

//     let clave = localStorage.key(i);

//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));


// }

// localStorage.removeItem('bienvenida');
// localStorage.removeItem('Papa');
// localStorage.removeItem('papa');

// // localStorage.clear() 


// let productoTienda = {
//     id:0001,
//     nombre: "mana",
//     precio: 350
// }


// let botonLocalStorage = document.getElementById("boton4")
// let vaciarCarrito = document.getElementById("boton5")

// vaciarCarrito.addEventListener("click", vaciarCarritoFinal)

// function vaciarCarritoFinal(){

//     localStorage.clear()

// }


// botonLocalStorage.addEventListener("click", agregarLocalStorage)


// function agregarLocalStorage(){

//     localStorage.setItem("nombreProducto1",productoTienda.nombre)

// }


// const enJSON2 = JSON.stringify(productoTienda)


// localStorage.setItem("producto2", enJSON2)


// console.log(localStorage.getItem("producto2"))


// const producto1 = { 
//     id: 2, 
//     producto: "Arroz" 
// };


// const enJSON    = JSON.stringify(producto1);

// console.log(enJSON); // {"id":2,"producto":"Arroz"}

// console.log(typeof producto1); // object

// console.log(typeof enJSON);    // string

// localStorage.setItem("producto10", enJSON);
// // Se guarda {"id":2,"producto":"Arroz"}


// let productoCapturadoLocal = localStorage.getItem("producto10")

// console.log(productoCapturadoLocal)

// console.log(typeof productoCapturadoLocal)


// const productoCapturadoLocalParseado  = JSON.parse(localStorage.getItem("producto10"));

// console.log(typeof productoCapturadoLocalParseado)



// const productosGenerales = [{ id: 1,  producto: "Arroz", precio: 125 },
//                   {  id: 2,  producto: "Fideo", precio: 70 },
//                   {  id: 3,  producto: "Pan"  , precio: 50},
//                   {  id: 4,  producto: "Flan" , precio: 100}];

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };


// //Almacenar producto por producto
// for (const producto of productosGenerales) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }

// /*
// key......valor
// 1........{ id:    producto....precio }
// 2........{ id:    producto....precio }



// */



// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productosGenerales));


// let elemento1 = JSON.parse(localStorage.getItem("1"))

// console.log(elemento1)
// console.log(elemento1.producto)



// class Producto {

//     constructor(obj) {
//         this.nombre  = obj.producto.toUpperCase();
//         this.precio  = parseFloat(obj.precio);
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }

// }


// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));

// console.log(almacenados)


// const carrito = [];
// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.

// for (const objeto of almacenados)
//     carrito.push(new Producto(objeto));
// //Ahora tenemos objetos productos y podemos usar sus métodos



// for (const producto of carrito)
//     producto.sumaIva();


let usuario = "casa";

var usuario2 = {

    id: 0005,
    nombre: "alejandro",
    pass: 123456

}

localStorage.setItem("usuario", JSON.stringify(usuario2))

let usuarioEnLS = localStorage.getItem("usuario")


// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (!usuarioEnLS) {
    usuario = usuarioEnLS
} else {
    usuario = prompt("Ingrese su nombre de usuario")
}
