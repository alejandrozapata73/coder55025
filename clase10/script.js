function llamandoEventoEnlinea(){
    console.log("hola evento en linea...no usar jamas!!!")
}


let boton2 = document.getElementById("boton2")

boton2.onclick = () => { console.log("probando evento")}

let variable = 100

let productos = {
    id: 0001,
    nombre: "mouse",
    marca: "logitech",
    precio: 2500
}




// function eventoA () {

//     console.log("hola")
// }

// let eventoB = function () {
//     console.log("expresiva")
// }

// let eventoC = () => { console.log("hola anonimus!!!")}

let boton3 = document.getElementById("boton3")

boton3.addEventListener("click", llamandoBoton3)

function llamandoBoton3() {
    console.log("hola probando escuchadores")
}

let contadorPython = 0

let python = document.getElementById("python")
let tituloH2 = document.getElementById("title")
let boton4 = document.getElementById("boton4")

python.addEventListener("mouseover", contarPython)
python.addEventListener("click", cambiarValor)

boton4.addEventListener("click",aparecerPython)


function aparecerPython(){

    python.style.display = "block"

}


function contarPython(){
    console.log("estoy contando")

    contadorPython++

    console.log("contar: " + contadorPython)

}

function cambiarValor(){
    console.log("probando cambiar valor")
    tituloH2.innerHTML = "<h2>Productos:" +productos.id + "</h2>" + "nombre: " + productos.nombre


    python.style.backgroundColor = "red"
    python.style.display = "none"

}




let inputForm1 = document.getElementById("inputForm1")
let inputForm2 = document.getElementById("inputForm2")
let inputForm3 = document.getElementById("inputForm3")

let botonValor = document.getElementById("botonValor")
botonValor.addEventListener("click", mostrarValorDatos)


function mostrarValorDatos(){

    console.log("probando valores inputs")
    console.log(inputForm1.value)
    console.log(inputForm2.value)
    console.log(inputForm3.value)

}


inputForm1.addEventListener("keydown", presionTeclasDown )
inputForm1.addEventListener("keyup", presionTeclasUp )
inputForm2.addEventListener("change",mostrarValor)

function mostrarValor() {

    console.log("mostrar valor")
}



function presionTeclasDown() {

    console.log("tecleando!!!")

}

function presionTeclasUp(){
    console.log("soltando tecla")
}



let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value);  
}


