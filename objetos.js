

// crear un objeto
let persona = {
    nombre : "German",
    apellido : "Pequera",
    edad: 30,
    coloresFavoritos : ["Azul","Negro"],
    saludar : function() {
        return "Hola, mundo soy " + this.nombre;
    }
};

// acceder a kas propiedades del objeto
console.log(persona);
console.log(persona.nombre);
console.log(persona.coloresFavoritos);
console.log(persona.coloresFavoritos[1]);


// cargar una nueva propiedad 
persona.deporteFavorito = "Futbol";
persona.edad = 31;
console.log(persona);

// eliminar una propiedad
delete persona.deporteFavorito;
console.log(persona);

// acceder a un metodo del objeto
console.log(persona.saludar());

// this
