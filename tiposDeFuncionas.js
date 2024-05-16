// Funciones declaradas 
//estas son elevadas al inicio de su ambito, x lo que se pueden llamar antesde su definicion
function suma(num1,num2){
    return num1 + num2;
}

// Funciones expresadas
//console.log(resta(10,5)); // no funciona, hay que usarla luego de declarala
let resta = function(num1,num2) {
    return num1 - num2;
}
console.log(resta(10,5));

// Funciones flecha (Arrow Functions)
let multiplicacion = (num1,num2) => {
    return num1 * num2;
}

console.log(multiplicacion(4,3));


