

// .push() Inserta al final
let colores = ["Rojo","Naranja","Azul"];

colores.push("Verde");
console.log(colores);
colores.push("Amarillo","Violeta");
console.log(colores);

// .pop() Elimina el ultimo
let colorEliminado = colores.pop();
console.log(colorEliminado);
console.log(colores);

// .shift() Elimina el primero
colorEliminado = colores.shift()
console.log(colorEliminado);
console.log(colores);

// .unshift() Agrega al inicio del array
colores.unshift("Rosado");
console.log(colores);

// .join() une los elementos de un array

let dias = ["Luenes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo","Viernes"];
let todosJuntos = dias.join("-");
console.log(dias);
console.log(todosJuntos);

// .indexOf() retorna el indice del elemento o -1 si no esta en el array
console.log("Indice: " + dias.indexOf("Viernes"));


// .lastIndexOf() lo mismo que el anterior pero lo hace de atras hacia delante y del primero que encuentre
console.log("Indice: " + dias.lastIndexOf("Viernes"));

// .includes() Hace una busqueda y retorna true o false
console.log(dias.includes("Jueves"));


