/* Practica */
let hora = 24;
let frecuencia = 5;
let cantidad = 24/frecuencia;
if(cantidad < 5) {
    cantidad = 5;
}
if (cantidad>13){
    cantidad =13;
}
for(let i=1; i <cantidad; i++){

        if(hora > 23) {
            hora = hora-24;
        }
    console.log("Toma: "+i+"/ Hora: " + hora);
    hora = hora+frecuencia;

}
