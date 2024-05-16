const prompt = require("prompt-sync")({sigint:true});



function suma(num1,num2) {
    return num1 + num2;
}

function resta(num1,num2){
    return num1 - num2;
}

function multiplicar(num1,num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 == 0) {
        return "No se puede dividir entre 0";
    }else{
        return num1 / num2;
    }
}


console.log("**************** Calculadora digital *********************");
console.log("Opciones:");
console.log("1 - Suma");
console.log("2 - Resta");
console.log("3 - Multiplicacion");
console.log("4 - Division");
let opcion = parseInt(prompt("Ingrese una opcion: "));
let num1;
let num2;
let resultado;
switch (opcion) {
    case 1:
        num1 = parseInt(prompt("indique el primer numero"));
        num2 = parseInt(prompt("indique el segundo numero"));
        resultado = suma(num1,num2);
        console.log("El resulado de la suma es: " + resultado)
        break;
    case 2:
        num1 = parseInt(prompt("indique el primer numero"));
        num2 = parseInt(prompt("indique el segundo numero"));
        resultado = resta(num1,num2);
        console.log("El resulado de la resta es: " + resultado)
        break;
    case 3:
        num1 = parseInt(prompt("indique el primer numero"));
        num2 = parseInt(prompt("indique el segundo numero"));
        resultado = multiplicar(num1,num2);
        console.log("El resulado de la multiplicacion es: " + resultado)
        break;
    case 4:
        num1 = parseInt(prompt("indique el primer numero"));
        num2 = parseInt(prompt("indique el segundo numero"));
        resultado = division(num1,num2);
        console.log("El resulado de la division es: " + resultado)
        break;

    default:
        console.log("opcion incorrecta")
        break;
}