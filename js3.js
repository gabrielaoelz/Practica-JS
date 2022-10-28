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

function procesar () {
    let limite = parseInt(document.getElementById('cantidad').value);
    let cantidad = 0;
    let numero = 2;
    let resultadoTxt = '1';
    
    while (cantidad <= limite) {
         let suma = 1;
         
         for (let divisor = 2; divisor < numero; divisor++) {
              if (n % divisor == 0) {
                   resultadoTxt += ` + ${divisor}`;
                   suma += divisor
              }
         }
         resultadoTxt += ` = ${suma} <br>\n`;
         
         if (suma == n) {
              document.getElementById('resultados').innerHTML = resultadoTxt
         }
    }
}

function numPerfecto() {
    let limite = parseInt(document.getElementById('cantidad').value);
    let perfectos = 0;
    let resultado = '';
    let div = document.getElementById('resultado');

    for ( let n = 2; perfectos < limite; n++) {
         let suma = 0;
         for ( let divisor = 1; divisor < n; divisor++ ) {
              if ( n % divisor == 0 ) {
                   suma += divisor;
              }
         }
         if ( suma == n ) {
              resultado += `<p>${ n }</p>\n`;
              perfectos ++;
         }
    }
    div.innerHTML = resultado;
}

let numero = 6;

let suma = 0;

for (let d = 1; d < numero; d++) {
    if ( numero % d == 0 ) {
         suma += d
    }
}
if ( suma == numero ) {
    console.log(`Numero perfecto: ${suma}`)
}