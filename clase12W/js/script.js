

class ProductosDC{

    constructor(id,nombre,edicion, descripcion, precio, cantidad, img){

        this.id = id;
        this.nombre = nombre;
        this.edicion = edicion;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad
        this.img = img

    }


}



const producto1 = new ProductosDC(001,"tazaDC","DC","taza de acrilico bla bla bla", 850, 25, "carpeta");

const producto2 = new ProductosDC(002,"tazaMarvel","Spider","taza de acrilico bla bla bla", 350, 25,"carpeta");

const producto3 = new ProductosDC(003,"tazaXmen","logan","taza de acrilico bla bla bla", 850, 25,"carpeta");

const producto4 = new ProductosDC(004,"tazaLuffi","luffi","taza de acrilico bla bla bla", 850, 25,"carpeta");

const producto5 = new ProductosDC(005,"tazaSpider","spider","taza de acrilico bla bla bla", 850, 25);


const arrayTazas = [producto1,producto2,producto3,producto4,producto5]


//..........................................................................


// const arrayVacio = []

// for (let algo of arrayVacio ){



// }


/*

const cursosDesaWeb = [0,1,2];

 cursosDesaWeb.push(new cursoDesaWeb("Desarrollo Web", "Lunes y Miércoles 19hs a 21hs", "28 Semanas","112 horas", "Inicial", "6/7/2023", "Ninguno", 112000, false ));

 cursosDesaWeb.push(new cursoDesaWeb("React", "Lunes y Miércoles 19hs a 21hs", "28 Semanas","112 horas", "Inicial", "6/7/2023", "Ninguno", 112000, false ));

 cursosDesaWeb.push(new cursoDesaWeb("Testing", "Lunes y Miércoles 19hs a 21hs", "28 Semanas","112 horas", "Inicial", "6/7/2023", "Ninguno", 112000, false ));


*/



//

console.log(arrayTazas)



const remerasX = [

    {
        id: 001,
        nombre: "remera Xmen",
        precio: 850
    },
    {
        id: 002,
        nombre: "remera Xmen",
        precio: 850
    },
    {
        id: 003,
        nombre: "remera Xmen",
        precio: 850
    }

]



