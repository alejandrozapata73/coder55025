// localStorage.setItem('bienvenida', '¡Hola Coder!');
// localStorage.setItem('esValido', true);
// localStorage.setItem('unNumero', 20);

// localStorage.setItem('alumno1', "jonathan");

// localStorage.setItem('alumno2', "Karina");



// localStorage.setItem("usuarioNerdFlix","Lucas")


// console.log(localStorage.getItem("usuarioNerdFlix"))

// let variableRecuperada = localStorage.getItem("usuarioNerdFlix")


// let usuarioX = document.getElementById("usuarioX")
// let botonlocalX = document.getElementById("botonlocalstorage")
// let titulo = document.getElementById("title")

// botonlocalX.addEventListener("click", ponerUsuarioLS)

// function ponerUsuarioLS(){

//     usuarioX.innerHTML = usuarioRecuperadoX
// }


// let usuarioLocalStorage = prompt("ingrese su usuario")

// localStorage.setItem("usuarioX",usuarioLocalStorage)

// let usuarioRecuperadoX = localStorage.getItem("usuarioX")

// console.log(usuarioRecuperadoX)

// sessionStorage.setItem('esValido', false);



// let usuario = prompt("ingrese su usario")

for (let i = 0; i < localStorage.length; i++) {

    let clave = localStorage.key(i);

    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));


}

localStorage.removeItem('bienvenida');
localStorage.removeItem('Papa');
localStorage.removeItem('papa');

// localStorage.clear() 


let productoTienda = {
    id:0001,
    nombre: "mana",
    precio: 350
}


let botonLocalStorage = document.getElementById("boton4")
let vaciarCarrito = document.getElementById("boton5")

vaciarCarrito.addEventListener("click", vaciarCarritoFinal)

function vaciarCarritoFinal(){

    localStorage.clear()

}


botonLocalStorage.addEventListener("click", agregarLocalStorage)


function agregarLocalStorage(){

    localStorage.setItem("nombreProducto1",productoTienda.nombre)

}


