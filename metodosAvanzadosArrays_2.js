// .map() Modifica todos los elementos del array segun la funcion que se pase por parametro

let numeros = [2,4,6];

let numerosMultiplicados = numeros.map(function(num){
    return num * 2;
});

console.log(numerosMultiplicados);

// .filter() recorre todo el array y filtra los elementos segun la condicion indicada
let edades = [22,8,17,14,35];

let mayores = edades.filter(function(edad) {
    return edad >= 18;
});

console.log(mayores);

// .reduce() recorre todo el array y retorna un unico valor
let nums = [5,7,16];

let suma = nums.reduce(function(acum,num){
    return acum + num;
})
console.log(suma);


// .forEach() itera sobre el array, no retorna nada
let paises = ["Argentina","Uruguay","Brasil"];

paises.forEach(function(pais){
    console.log(pais);
});

