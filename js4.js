/* Forma 1: Con Nombre */

function divisores(numero) {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

/* Forma 2: Sin Nombre */
const divisoresV2 = function(numero) {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

/* Forma 3: Simplificada */
const divisoresV3 = numero => {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            total++;
        }
    }
    return total;
};

console.log(`Total de divisores: ${divisores(32)}`);
console.log(`Total de divisores: ${divisoresV2(32)}`);
console.log(`Total de divisores: ${divisoresV3(32)}`);


function calcular() {
    let numero = parseInt(document.getElementById("numero").value);    
    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero);
}


function cambiarimg() {
    let opcion = parseInt(document.getElementById("opcion").value);   
    let base = document.getElementById("imagen"); 
    let nombre = document.getElementById("nombre");
    nombre.textContent = ""; 
    switch (opcion) {
        case 1:
            base.src = "https://cdn.pixabay.com/photo/2022/01/27/21/39/flower-6973184__340.jpg";
            break;
        case 2:
            base.src = "https://cdn.pixabay.com/photo/2022/08/31/20/47/concert-7424190__340.jpg";
            break;
        case 3:
            base.src = "https://cdn.pixabay.com/photo/2021/05/28/22/54/carnations-6292136__340.jpg";
            break;
        case 4:
            base.src = "https://cdn.pixabay.com/photo/2021/12/14/16/15/city-6870803__340.jpg";
            break;
        default:
            base.src = "https://cdn.pixabay.com/photo/2022/10/26/21/14/leaves-7549449__340.jpg"
            break;

    }
    
}