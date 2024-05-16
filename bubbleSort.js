
let array = [5,4,1,6,3,2];
for (let j = 0; j < array.length; j++){
    for (let i = 0; i < array.length; i++) {
        if(array[i] > array[i + 1]){
            let aux = array[i];
            array[i] = array[i + 1];
            array[i + 1] = aux;
        }
    }
}

console.log(array);


let palabras = ["zapato","arroz","pelota","ajo"];
for (let j = 0; j < palabras.length; j++){
    for (let i = 0; i < palabras.length; i++) {
        if(palabras[i] > palabras[i + 1]){
            let aux = palabras[i];
            palabras[i] = palabras[i + 1];
            palabras[i + 1] = aux;
        }
    }
}

console.log(palabras);

let objetos = [
    {
        nombre: "German",
        edad: 38
    },
    {
        nombre: "Ana",
        edad: 35
    },
    {
        nombre: "Fran",
        edad: 3
    },
    {
        nombre: "Logan",
        edad: 15
    },
]


for (let j = 0; j < objetos.length; j++){
    for (let i = 0; i < objetos.length - 1; i++) {
        if(objetos[i].edad > objetos[i + 1].edad){
            let aux = objetos[i];
            objetos[i] = objetos[i + 1];
            objetos[i + 1] = aux;
        }
    }
}

console.log(objetos);