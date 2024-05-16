//crear un array
let edades      = [10,20,30,40,50];
let nombres     = ["German","Ana","Fran"];
let booleanos   = [true,false,true,false];
let combinados  = [15,"Hola",true];

//Acceder a un elemento especifico de un array
console.log(edades[0]);
console.log(edades); //Miuestra todo
console.log(nombres); //Miuestra todo
console.log(booleanos); //Miuestra todo
console.log(combinados); //Miuestra todo

//Recorrer un array
for (let i = 0; i < edades.length; i++) {
    console.log(edades[i]);
}

//Modificar cada uno de sus elemos a un array e imprimirlos
for(let i = 0; i < edades.length; i++){
    edades[i] = i+1;
}

for(let i = 0; i < edades.length; i++){
    console.log(edades[i]);
}

//Agregar elementos a un array
let notas = [8,4,10,6];
notas[notas.length] = 7;
console.log(notas);

//Extraer elementos de un array a una variable
let nombres2 = ["German","Ana","Fran"];
let nom = nombres[2];
console.log(nom);

//Extraer todos los elementos para algo especifico
let numeros = [10,20,30,40,50];
let suma = 0;

for(let i = 0; i < numeros.length; i++){
    suma += numeros[i];
}

let promedio = suma / numeros.length;
console.log("Promedio: " + promedio);

//Encontrar el mayor o menor
let numeros2 = [10,48,21,54,77];
let menor = numeros2[0];

for (let i = 0; i < numeros2.length; i++) {
    if(numeros2[i] < menor){
        menor = numeros2[i];
    }    
}

console.log("Menor: " + menor);
