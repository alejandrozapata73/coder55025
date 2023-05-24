console.dir(document)

console.dir(document.head)
console.dir(document.body);


// document.getElementById("app")

console.log(document.getElementById("app"))


let div1 = document.getElementById("app")
let parrafo1 = document.getElementById("parrafo1")

// let edadRamiro = parseInt(prompt("ingrese la edad de Ramiro"))



function cambiarColor(){

    parrafo1.innerHTML = "<h1>Comision 2023</h1>"

}

// cambiarColor()


// parrafo1.textContent = "<h1>Comision 2024</h1>"


 console.log(div1.innerHTML)
 console.log(parrafo1.innerHTML)
console.log(div1.textContent)




// //by classname
let paises = document.getElementsByClassName("paises");

console.log(paises[0])

console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);


// //by TagName
let contenedores = document.getElementsByTagName("div");


console.log("Total elementos encontrados con Tag" + contenedores.length)

//web scrapping...
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);


// //Recorrer HTML
let paisesForof       = document.getElementsByClassName("paises");
let contenedoresForof = document.getElementsByTagName("div");

for (const pais of paisesForof) {
    console.log(pais.innerHTML);
}

for (const div of contenedoresForof) {
    console.log(div.innerHTML);
}


let conjuntoLeng = document.getElementsByClassName("list-group-item")


console.log(conjuntoLeng.length)//0-6

console.log(conjuntoLeng[0].textContent)


conjuntoLeng[4].innerHTML = "java"


// parrafo1.className = "casa"


let parrafoCreado = document.createElement("p"); //crear <p></p>

// let divCreado = document.createElement("div")

// divCreado.append(parrafoCreado)

// console.log(divCreado.textContent)



parrafoCreado.innerHTML = "¡Hola Coder!"; 

console.log(parrafoCreado.innerText)


// document.body.append(parrafoCreado);

// Insertar HTML interno

// // Añadir el nodo Element como hijo de body


let divNuevo = document.getElementById("elementosDiv")

divNuevo.append(parrafoCreado)



 //CODIGO JS

//  let ingreseValor = prompt("ingrese un valor X")



 let input1 = document.getElementById("nombre")

 input1.value = 50

//  document.getElementById("nombre").textContent = "javier"
 
 let input2 = document.getElementById("edad")
input2.value   = 50;

console.log(input1.value + input2.value)


let nombre = "juan"

let apellido = "perez"

let nombreCompelto = "su nombre es: "+ nombre + "y su apellido es: " + apellido
let nombreCompleto2 = ` su nombres es: ${nombre} y su apellido es ${apellido} `;


let producto = { 
    id: 1, 
    nombre: "Arroz", 
    precio: 125 
    };

let concatenado = "ID : "  + producto.id + " - Producto: " + producto.nombre + "$ "+producto.precio;

let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}  ${4+5}`;

//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);


let productoObjeto   = 
    { 
     id: 1, 
     nombre: "Arroz",
     precio: 125 
    };

    

let contenedor = document.createElement("div");

//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${productoObjeto.id}</h3>
                        <p>  Producto: ${productoObjeto.nombre}</p>
                        <b> $ ${productoObjeto.precio}</b>`;

//Agregamos el contenedor creado al body
document.body.appendChild(contenedor);



const productosVarios = [
                  { id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}
                ];


let contenedorStock = document.getElementById("stock")
console.log(contenedorStock)


function mostrarElementos(){

for (const producto of productosVarios) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;

    contenedorStock.appendChild(contenedor);
}
}