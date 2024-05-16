
let arrayGastos = [
    [10,5,80,3,45,12,45],
    [20,5,90,3,45,12,45],
    [10,15,580,3,45,12,45],
    [101,5,80,38,45,412,45]
];

console.table(arrayGastos);

function gastosSemana(semana) {
    return arrayGastos[semana].reduce(function(acum,num){
        return acum + num;
    })
};

function gastosSemama_2(semana) {
    let total = 0;
    for (let i = 0; i < arrayGastos[semana].length; i++) {
        total += arrayGastos[semana][i]        
    }
    return total;
};

console.log("Gastos semana 0: " + gastosSemana(1));
console.log("Gastos semana 0: " + gastosSemama_2(1));

function gastosDia(dia) {
    let totalDia = 0;
    for (let i = 0; i < arrayGastos.length; i++) {
        totalDia += arrayGastos[i][dia];                    
    }
    return totalDia;
}

console.log("Gastos dia 0: " + gastosDia(6));

function gastosPorSemana() {
    for (let i = 0; i < arrayGastos.length; i++) {
        console.log("Gastos Semana " + i + " : "+ arrayGastos[i].reduce(function(acum,num) {
            return acum + num;
        }))    
    }
}

gastosPorSemana();