function consultarArticulo () {

    

    do{

        var opcion = prompt("INGRESE EL NUMERO DEL ARTICULO QUE DESEA COMPRAR: \n 1) REMERA \n 2) PANTALON \n 3) ZAPATILLA \n 4-salir");

        if (opcion == 1) {
            alert("remera")
        }
        else if (opcion == 2) {
            alert("pantalon")
        }
        else if (opcion == 3) {
            alert("zapatilla")
        }else if(opcion==4){
            console.log("salir")
        }
        else {
            alert("NUMERO DE ARTICULO INCORRECTO, INTENTE NUEVAMENTE");
            
        }
    }while(opcion!=4)

   
}

consultarArticulo();