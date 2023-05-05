


// //problema promedio edad



// // // var edadAlumnoA = parseInt(prompt("ingrese su edad A"))
// // // var nombreAlumno = prompt("ingrese su nombre")

// // //contador
// // var contarhomeros=0

// // // 0 + 1

// // contarhomeros = contarhomeros + 1

// // contarhomeros = contarhomeros + 1

// // contarhomeros = contarhomeros + 1

// // contarhomeros += 1

// // contarhomeros++
// // contarhomeros++
// // contarhomeros++
// // contarhomeros++

// // contarhomeros--

// // console.log(contarhomeros)





// //  console.log(contarhomeros)

// //  if((edadAlumnoA>=18) && (nombreAlumno =="homero")){

// //      alert("es mayor de edad")
// //     alert("se aceptan homeros")
// //     contarhomeros++

// //  }else{
// //      alert("quedas afuera de los ...")
// //  }

// //  if((edadAlumnoA>=18) && (nombreAlumno =="homero")){

// //     alert("es mayor de edad")
// //    alert("se aceptan homeros")
// //    contarhomeros++

// // }else{
// //     alert("quedas afuera de los ...")
// // }


// // if((edadAlumnoA>=18) && (nombreAlumno =="homero")){

// //     alert("es mayor de edad")
// //    alert("se aceptan homeros")
// //    contarhomeros++

// // }else{
// //     alert("quedas afuera de los ...")
// // }


// // if((edadAlumnoA>=18) && (nombreAlumno =="homero")){

// //     alert("es mayor de edad")
// //    alert("se aceptan homeros")
// //    contarhomeros++

// // }else{
// //     alert("quedas afuera de los ...")
// // }




// // var edadAlumnoB = parseInt(prompt("ingrese su edad B"))



// //...............
// /*
// i=0..true
// i=1..true
// i=2..true
// i=3..

// */

// //

// console.log(10%3) // 10/3 = 3..1

// //Pruebas de escritorio..

// var vidas=3

// const NUMEROMAGICO = 7

// var pedirNumero = 0


// // for (let i = 0; i <50; i++) {

// //     //modulo...%
// //     pedirNumero = parseInt(prompt("elegir numero"))
    
// //     if(pedirNumero==NUMEROMAGICO){
// //         alert("GANASTE!!!")
// //         break
        
// //     }else{

// //         alert("intente de nuevo")
// //         vidas --
// //         console.log(vidas)
// //     }

// // }

// //acumuladores...
// // --45---80----90


// var acumulador = 0

// acumulador = acumulador + 45

// acumulador = acumulador + 90

// var edadUsuario=0
// var edadAcumulada = 0

// for(let i=0;i<3;i++){

//     edadUsuario = parseInt(prompt("ingrese su edad"))

//     edadAcumulada = edadAcumulada + edadUsuario

// }

// // console.log("acumu: " + edadAcumulada)

// var contador = 150

// while(contador<100){

//     if(contador==50){
//         break
//     }

//     console.log("ejecutar codigo: " + contador)
//     contador++
    
// }



// contador=150

// do {
    

//     console.log("hola contador: " + contador)

// }while(contador<100)


var dia = 2

if(dia==1){
    alert("Es lunes")
}else if(dia==2){
    alert("es martes")
}else if(dia==3){
    alert("es Miercoles")
}else{
    alert("no ha elegido nada")
}




var dinero = 15000

var opcion = prompt("ingrese alguna opcion del cajero")


switch(opcion) {
    case "1":
      alert("Extraer")
       var extraDinero = parseInt(prompt("ingrese un monto a extraer"))
       dinero = dinero - extraDinero
       alert("te quedan " + dinero)

      break
    case "2":
        alert("Consultar")
        alert("usted tiene el saldo: " + dinero)
      break
    case "3":
        alert("transferir")
    break
    default:
        alert("no ha elegido una opcion")
    break;
   }
   