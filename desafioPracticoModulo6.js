// 1- BubbleSort: Crea una función que reciba por parámetro un array de números y los ordene de menor a mayor mediante el ordenamiento burbuja.
function ordenarArray(array) {
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]){
                let aux = array[i];
                array[i] = array[i+1];
                array[i+1] = aux;
            }
        }    
    }
    return array;
}

let arrayDesordenado = [5,9,1,7,83,1,454,12,23,5981];
console.log(ordenarArray(arrayDesordenado));


// 2 - Indicar ordenamiento: Crea una función que reciba por parámetro un array de números e indique si el array se encuentra ordenado de forma ascendente o no.
function arrayEstaOrdenadoAscendente(array){
    for (let index = 0; index < array.length; index++) {
        if(array[index] > array[index+1]){
            return false;
        }        
    }
    return true;
}

let array2 = [1,2,33,4,2,6];
arrayEstaOrdenadoAscendente(array2) ? console.log("Ordenado ascendente") : console.log("NO Ordenado ascendente");


// 3 -Contar la cantidad de veces que aparece un número en un array: 
// Crea una función que reciba por parámetro un número y un array de números, y devuelva la cantidad de veces que aparece ese número en el array utilizando búsqueda lineal.

function cntOcurrencias(array, numero){
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === numero){
            contador++;
        }        
    }
    return contador;
}

let array3 = [1,5,8,6,2,5,8,5,1,5,6,9,7,5,5,1];
console.log("Cantidad de veces el numero 5 en el array  " + cntOcurrencias(array3,5));


// 4 - Obtener votos: Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares —lo que se tiene en el array son objetos definidos con el nombre de un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5 temas y una cantidad de votos para cada uno. Los votos obtenidos deben estar desordenados. Una vez creado el array, se deberá escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo, considerando:
let temasVotos = [
    {tema: "La vida es asi", votos: 54},
    {tema: "The Rich History", votos: 12},
    {tema: "Authenticity of Delta", votos: 87},
    {tema: "Delta Blues Legacy", votos: 5},
    {tema: "History and Authenticity", votos: 35}
]

console.table(temasVotos);

//busqueda linea
function votosTemasLineal(array,tema){
    for (let i = 0; i < array.length; i++) {        
        if(array[i].tema === tema){
            return array[i].votos;   
        }
    }
    return -1;
}

console.log("Votos del tema: " + votosTemasLineal(temasVotos,"The Rich History"));

//busqueda binaria