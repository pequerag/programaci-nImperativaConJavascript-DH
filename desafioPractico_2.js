//Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo.
//La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()
/*
let array1 = ["German","Ana","Fran"];
let array2 = ["Pequera","Alvarez","Otro"];

function unirArrays(array1,array2) {    
   return arrayUnido = array1.concat(array2) 
}

console.log(unirArrays(array1,array2));
*/
//Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro 
//y elimine el primer elemento. La función debe devolver el elemento eliminado.
/*
let array = [5,8,7];
function eliminoPrimero(array){
    return array.shift();
}

console.log("Eliminado: " + eliminoPrimero(array));
*/


//Convertir texto: Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas
//respectivamente. La función deberá mostrar los resultados por consola. 
//Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()
/*
function convertidorString(texto){
    console.log(texto.toUpperCase());
    console.log(texto.toLowerCase());
}

let textoOriginal = 'Hola mundo!';
convertidorString(textoOriginal);
*/

//Manipulación de objetos: Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación.
//Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores.
//Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. Llama nuevamente a la función creada para visualizar el cambio efectuado.
/*
let persona = {
    nombre : "German",
    edad : 38,
    ocupacion : "desarrollador" 
}

mostrarProps(persona); 
persona.ocupacion = "Desempleado";
persona.habilidad = "poca";
mostrarProps(persona);

function mostrarProps(persona){
    console.log(persona.nombre);
    console.log(persona.edad);
    console.log(persona.ocupacion);
    console.log(persona);
    
}
*/


//Objetos anidados: Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’,
// donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número.
//Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las 
// propiedades del objeto.

let persona = {
    nombre : "German",
    edad : 38,
    ocupacion : "desarrollador" ,
    ubicacion : {
        codigoPostal : 11600,
        cuidad : "Montevideo" ,
        calle : "Jose Gestal",
        numero : 11232
    }
}

console.log(persona);