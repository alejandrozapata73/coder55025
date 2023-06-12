console.log("hola probando proyeto cerveza")


const productos = [

    {
        id: 001,
        nombre: "Andes Origne",
        precio: 400,
        imagen: "./img/Andes.jpg",

    },

    {
        id: 002,
        nombre: "Honey",
        precio: 550,
        imagen: "./img/Bierhaus.jpg",

    },

    {
        id: 003,
        nombre: "Budwy",
        precio: 750,
        imagen: "./img/Budweiser.jpg",

    },

    {
        id: 004,
        nombre: "Corona",
        precio: 630,
        imagen: "./img/Corona.jpg",

    },

    {
        id: 005,
        nombre: "Guinnes",
        precio: 450,
        imagen: "./img/Guiness.jpg",

    },

    {
        id: 006,
        nombre: "Patagonia",
        precio: 480,
        imagen: "./img/Patagonia.jpg",

    }

]


let carritoCompras = []

console.log(productos)

let contenedorProductos = document.getElementById("contenedorProductos")



console.log(contenedorProductos)

productos.forEach((productoSolo)=>{

    console.log(productoSolo.id)
    console.log(productoSolo.nombre)

    let contenedor = document.createElement("div")

    contenedor.innerHTML = `
    
    <div class="col">
    <div class="card">
      <img src="${productoSolo.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${productoSolo.nombre}</h5>
        <h2>${productoSolo.precio}</h2>
        <p class="card-text">This is a longer card with supporting text below as a natural      lead-in to additional content. This content is a little bit longer.</p>
         </div>
         <div class="d-grid gap-2">
    <button id="botonComprar" class="btn btn-primary" type="button">Comprar</button>
  
</div>
        </div>
    </div>
    
    `

    contenedorProductos.append(contenedor)

    





})

