
let array = [14,3,51,7,98,110,5,17,13,48];
let elementoBuscado = 3;

function busquedaLineal(array,elementoBuscado) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === i){
            return i;
        }
    }
    return -1;
}

