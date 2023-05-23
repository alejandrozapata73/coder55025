console.dir(document)

console.dir(document.head)
console.dir(document.body);


let div1 = document.getElementById("app")

console.log(div1.innerHTML)
console.log(div1.textContent)




//by classname
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);


//by TagName
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);


//Recorrer HTML
let paisesForof       = document.getElementsByClassName("paises");
let contenedoresForof = document.getElementsByTagName("div");

for (const pais of paisesForof) {
    console.log(pais.innerHTML);
}

for (const div of contenedoresForof) {
    console.log(div.innerHTML);
}
