

// //Ternarios
// let numero = -10;

// if (numero > 0) {
//     console.log("Positivo");
// } else{ 
//     console.log("Negativo");
// }

// (numero > 0) ? console.log("Positivo") :  console.log("Negativo");

// let edad = 30;
// let mensaje
// if (edad >= 18) {
//     mensaje = "mayor";
// } else{
//     mensaje = "menor"
// };

// console.log(mensaje);

// mensaje = (edad >=18) ? "mayor": "menor";
// console.log(mensaje);

// //Ternarios con mas de una instruccion
// // se separan las instrucciones con coma

// (edad >=18) ? (mensaje = "Mayor de eddad", edad =25, console.log("Eres mayor de edad!!!")) : (mensaje = "Menor de eddad", edad =25, console.log("Eres mayor de edad!!!"));
// console.log (mensaje);
// console.log (edad);

// let clima = "soleado";
// let temp = 28;
// let mensaje = "";


// if (clima === "soleado" || temp >= 25) {
//     console.log("Esta caluroso");
// } else {
//     console.log("Esta fresco");
// }

// let puntuacion = 82;

// if (puntuacion >= 90) {
//     console.log("Nota A");
// } else if(puntuacion >= 80){
//     console.log("Nota B");
// } else if(puntuacion >= 70){
//     console.log("Nota C");
// }else{
//     console.log("Nota D");
// }

//switch

let diaSemana = 3;
let mensaje = "";

switch (diaSemana) {
    case 1: 
        mensaje = "Lunes"
        break;
    case 2:
        mensaje = "Martes"
        break;
    case 3: 
        mensaje = "Miercoles"
        break;
    case 4: 
        mensaje = "Jueves"
        break;
    case 5:
        mensaje = "Viernes"
        break;
    case 6:
        mensaje = "Sabado"
        break;
    case 7:
        mensaje = "Domingo"
        break;

    default:
        mensaje = "Sin dia"
        break;
}

console.log(mensaje);