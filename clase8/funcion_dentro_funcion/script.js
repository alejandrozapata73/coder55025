function entrada(){
    return prompt("INGRESAR DATO");
}



function procesamiento(valor){
    return "LA ENTRADA ES "+valor
}



function salida(valor){
    alert(valor);
}
//SUMAR LA OTRA FORMA DE LLAMADA
salida(procesamiento(entrada()));