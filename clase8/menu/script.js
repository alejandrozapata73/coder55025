let productos;
let totalPagar;
let opcionTeclado;

let productoTeclado = "redDragon"
let precioTeclado = 200

function comprarTeclado(){
     opcionTeclado = parseInt(prompt("ingrese algun modelo 1-Red Dragon 2-Genius"))

    if(opcionTeclado==1){
        productos = productos + productoTeclado;
        totalPagar = totalPagar + precioTeclado
    }
}

let opcion;

do{
    opcion = parseInt(prompt("que quiere hacer 1-comprar remera 2-comprar pantalon 3-salir"))

    switch(opcion){
        case 1:
            console.log("comprar remera")
            comprarTeclado();
            break
        case 2:
            console.log("comprar pantalon")
            break
        case 3:
            console.log("salir")
            break
        default:
            console.log("no ha elegido ninguna opcion")
            alert("no ha elegido ninguna opcion")
        break
    }
}while(opcion!=3)

console.log(totalPagar)