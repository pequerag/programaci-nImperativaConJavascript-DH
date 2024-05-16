//1- Validador de contraseña:
/*function validoContrasenia(passParam) {
    let contrasenia = "lala";
    if (passParam === contrasenia){
        return "Contraseña ok";
    }else{
        return "Contraseña mal";
    }
}

let contrOk = validoContrasenia("lala");
console.log(contrOk); */

//2- Calculadora de Índice de Masa Corporal (IMC):
// Crea una función que calcule el IMC utilizando los parámetros de peso y altura. 
// Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC (bajo peso, peso normal, sobrepeso, etc.).
/*
function imc(peso,altura) {
    let imcCalculadoMsg = "";
    let imcCalculado = peso / (altura * altura );
    if (imcCalculado >= 30.0){
        imcCalculadoMsg = 'Obeso';
    } else if(imcCalculado >= 25.0){
        imcCalculadoMsg = 'Sobre peso';
    } else if(imcCalculado >= 18.5){
        imcCalculadoMsg = 'Normal';
    }else{
        imcCalculadoMsg = 'Raquitico';
    }
    return imcCalculadoMsg;
}

console.log(imc(90,1.73));*/

// 3- Conversor de Monedas: Crea una función que convierta una cantidad de dinero de una moneda a otra.
// Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.

// function convertirMoneda(tipoMoneda, monto) {
//     let tasaDolar = 39.9;
//     let tasaEuro = 42;
//     let tasaReal = 8.5;

//     switch (tipoMoneda) {
//         case "dolar":
//             return monto / tasaDolar;
//             break;
//         case "euro":
//             return monto / tasaEuro;
//             break;
//         case "real":
//             return monto / tasaReal;
//             break;
//         default:
//             break;
//     }
// }

// console.log(convertirMoneda("dolar",100));


// 5 - Generador de Mensajes Personalizados: Crea una función que genere un mensaje personalizado para un usuario según su nombre y el momento del día (solo tendremos en consideración si es de mañana, o es de tarde). 
// Utiliza concatenación e interpolación para construir el mensaje, y condicionales (if ternario) para incluir diferentes saludos.


function saludar(nombre, momento) {
    (momento === 'mañana') ? console.log(`Buen dia ${nombre}`) : console.log(`Buenas tardes ${nombre}`);    
}

saludar("German","tarde");