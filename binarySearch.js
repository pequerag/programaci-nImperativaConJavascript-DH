
let array = [1,2,3,4,5,6,7,8,9];
let nroBuscar = 3;

function busquedaBinaria(array,valorBuscado) {
    let indiceDeInicio = 0;
    let indiceDeFin = array.length -1;

    while (indiceDeInicio <= indiceDeFin) {
         const INDICEMITAD = Math.round((indiceDeInicio + indiceDeFin) / 2);
         const ELEMENTOMEDIO = array[INDICEMITAD];
         if(ELEMENTOMEDIO == valorBuscado){
            return INDICEMITAD;
         }

         if(ELEMENTOMEDIO > valorBuscado){
            indiceDeFin = INDICEMITAD - 1;
         }else{
            indiceDeInicio = INDICEMITAD + 1;
         }
    }
    return null
}