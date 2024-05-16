
let saludo = "Hola!";
console.log(saludo[2]);

// .length
console.log(saludo.length);

let nombres = ["German","Ana","Fran"];
console.log(nombres.length);
console.log(nombres[2].length);

// .indexof() Busca en el string el string que le pasemos por parametro y retorna el primer indice que encontro
let saludo2 = "Hola! Estamos programando";

console.log(saludo2.indexOf("o"));

console.log(saludo2.indexOf("Estamos"));

// .slice() Corta el String y retorna una parte 
let Frase = "Hola! como estas?"
// Opcion 1 Donde comenzar y donde finalizar
console.log(Frase.slice(6,11));

// Opcion 2 Le damos valor de inicio pero no de cierre
Frase = "Hola! como estas?"
console.log(Frase.slice(6));

// Opcion 3 Con valores negativos, empieza a contar desde el final
Frase = "Hola! como estas?"
console.log(Frase.slice(-10));


// .trim() elimina los espacios al inicio y final

let nombre = "    German Pequera     ";
console.log(nombre.trim());


// .split() Divide el string en distintas partes
Frase = "Hola! como estas?";
console.log(Frase.split(" "));

let nuevoArray = Frase.split(", ");
console.log(nuevoArray);


// .replace()
Frase = "Me encanta Java";

let fraseNueva = Frase.replace("Java","Javasript")
console.log(fraseNueva);