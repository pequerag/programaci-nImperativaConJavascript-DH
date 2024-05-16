/* .slice()
Sintaxys: let newArray = arrayOriginal.slice(inicio,fin);
*/

// let frutas = ["Manzana","Naranja","Banana","Frutilla","Kiwi"];
// let primerasTres = frutas.slice(0,3);
// console.log(primerasTres);

// let desdeNaranja = frutas.slice(1);
// console.log(desdeNaranja);

// let ultimasDos = frutas.slice(-2);
// console.log(ultimasDos);

// let entreDosIndices = frutas.slice(-3,4);
// console.log(entreDosIndices);

/* .splice()
    Sintaxos: arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elemento2, ...)
    inicio: desde donde se empiecan a hacer los cambios

*/

// let meses = ["Enero","Febrero","Marzo","Abril","Mayo"];
// meses.splice(1,2,"NuevoMes1","NuevoMes2");
// console.log(meses);

// meses.splice(2,0,"NuevoMes1"); // No elimina, solo agrega los elementos en ese indice
// console.log(meses);


/* .sort()
    array.sort();
*/

// let numeros =[1,5,8,7,4,,6,9,7];
// console.log(numeros.sort());

// let palabras =["perro","gato","arroz","kiwi","limon",];
// console.log(palabras.sort());


/* .find()
    Sintaxis: let resultado = array.find(funcionDePrueba(elemento));
 */

    let edades = [25,18,8,65,24]

    let mayorDeEdad = edades.find( edad => edad >= 18);
    console.log(mayorDeEdad);

    let primerEdadMayor = edades.find( edad => edad = 30); // esto esta raro..
    console.log("1- " + primerEdadMayor);