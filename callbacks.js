// Funcion que recorre array y ejecuta un callbacks
function procesarArray(array, callbacks) {
    for (let i = 0; i < array.length; i++) {
        callbacks(array[i]);
    }    
}

// Funcion de callbaks que muestre los elementos del array
function mostrarElemento(elemento) {
    console.log(elemento);
}

function multiplicarPorDos(elemento) {
    console.log(elemento * 2 );
}

function calcularCuadrado(elemento) {
    console.log(elemento * elemento);
}
// crear nuestro array
let miArray = [1,2,3,4,5];

//Llamada a la funcion
procesarArray(miArray,mostrarElemento);
procesarArray(miArray,multiplicarPorDos);
procesarArray(miArray,calcularCuadrado);
