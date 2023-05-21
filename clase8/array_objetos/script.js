class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("arroz", "125"));

//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
    console.log(producto.nombre)
}


