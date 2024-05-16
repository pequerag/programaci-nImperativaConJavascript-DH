const prompt = require("prompt-sync")({sigint:true});

// Array para almacenar todas las tareas
let tareas = [];
let categoriasNombre = [
   "Trabajo",
   "Personal",
];

//Funcion que muestra todas las categorias
function motrarTodasLasCategorias(){
    console.log("Categorias existentes: ");    
    categoriasNombre.forEach(function(categoria, indice){
        console.log(indice + " : " + categoria);
    });
};

// funcion que sirve para cargar nuevas caterorias por el usuario
function agregarNuevaCategoria(nombreCategoria) {
    categoriasNombre.push(nombreCategoria);
    console.log("Categoria " + nombreCategoria + " agregada correctamente.");
}


// Funcion para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
    motrarTodasLasCategorias();
    let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria para la tarea: "));
    if(numeroCategoria >= 0 && numeroCategoria < categoriasNombre.length){
        tareas.push({nombre : nombreRecibido, compleada : false, fechaLimite: fechaLimiteRecibida, categoria: numeroCategoria});
        console.log("Tarea agregada con exito!"); 
    }else{
        console.log("Numero de categoria incorrecto"); 
    }
}


// Eliminar una tarea
function eliminarTarea(indice) {
    if(indice >= 0 && indice < tareas.length){
        tareas.splice(indice,1);
        console.log("Tarea eliminada correctamente");
    }else{
        console.log("Indice de tarea invalido");
    }
}

//Marcar tarea como completada
function completarTarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].compleada = true;
        console.log("Tarea completada");
    }else{
        console.log("Indice de tarea invalido");
    }
}


//Funcion para modificar una tarea especifica
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null, nuevoNumeroCategoria) {
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].nombre         = nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;
        tareas[indice].fechaLimite    = nuevaFechaLimite !== undefined ? nuevaFechaLimite : tareas[indice].fechaLimite;
        tareas[indice].nuevaCategoria = nuevoNumeroCategoria !== undefined ? nuevoNumeroCategoria : tareas[indice].nuevaCategoria;
        console.log("Modificacion correcta!");
    }else{
        console.log("Indice de tarea invalido");
    }
}

// Funcion que filtra tareas por categorias
function filtrarTareasPorCategorias(numeroCategoria) {
    return nuevoArray = tareas.filter(function(tarea){
        return tarea.categoria === numeroCategoria;
    });
};

// funcion que muestra cnt de tareas completadas
function contarTareasCompletadasPorCategoria(numeroCategoria){
    let tareasFiltradas = filtrarTareasPorCategorias(numeroCategoria);
    let tareasCompletadas = tareasFiltradas.reduce(function(contador,tarea){
        return tarea.compleada ? contador++ : contador;
    });
    let tareasEnTotal = tareasFiltradas.length;
    console.log("Tareas completadas de la categoria " + numeroCategoria + " : " + tareasCompletadas + " de "+ tareasEnTotal + " tareas.");
}

// funcion que muestra todas las tareas no completadas
function mostrarTareasNoCompletadas(params) {
    console.log("Tareas no completadas: ")
    tareas.forEach(function(tarea){
        if(!tarea.compleada){
            console.log("- Nombre: " + tarea.nombre + ", Categoria: " + categoriasNombre[tarea.categoria]);
        };
    });
}


// Funcion para ordenar tareas por la propiedad 'nombre' utlizando BobbleSort
function ordenarTareasPorFechaLiminte() {
    for (let j = 0; j < tareas.length; j++) {
        for (let i = 0; i < tareas.length - 1; i++) {
            if(tareas[i].fechaLimite > tareas[i+1]){
                tareaAux  = tareas[i];
                tareas[i] = tareas[i + 1 ];
                tareas[i + 1 ] = tareaAux;
            }         
        }                
    }
}

// Funcion para ordenar tareas por la propiedad 'fechaLiminte' utlizando BobbleSort
function ordenarTareasPorNombre() {
    for (let j = 0; j < tareas.length; j++) {
        for (let i = 0; i < tareas.length - 1; i++) {
            if(tareas[i].nombre > tareas[i+1]){
                tareaAux  = tareas[i];
                tareas[i] = tareas[i + 1 ];
                tareas[i + 1 ] = tareaAux;
            }         
        }                
    }
}


//Funcion que busca una tarea por nombre y retorna su posicion
function buscarTareaPorNombre(nombreTarea) {
    let inicio = 0;
    let fin = tareas.length - 1;

    while(inicio <= fin){
        let posicionElementoMedio  = Math.round((inicio + fin) /2);
        if(tareas[posicionElementoMedio].nombre === nombreTarea){
            return posicionElementoMedio;
        }else if(tareas[posicionElementoMedio].nombre < nombreTarea){
            inicio = posicionElementoMedio + 1;
        }else{
            fin = posicionElementoMedio - 1;
        }
    }
    return -1;
}


// Funcion para mostrar el menu
function mostrarMenu() {
    console.log(" --- Menu ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar Tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("6. Mostrar todas las categorias");
    console.log("7. Agregar nueva categoria");
    console.log("8. Filtrar tareas por categoria");
    console.log("9. Visualizar cantidad de tareas completadas por categoria");
    console.log("10. Visualizar todas las tareas no completadas");
    console.log("11. Ordenar las tareas alfabeticamente");
    console.log("12. Ordenar las tareas fecha liminte");
    console.log("13. Buscar la tarea por Nombre");
    console.log("0. Salir");
    console.log(" ");
}

// Funcion para interactura con el usuario
function interactuarConUsuario() {
    let opcion = -1;

    while (opcion != 0) {
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese la opcion seleccionada:"));


        switch (opcion) {
            case 1:
                let nombreTarea = prompt("Ingrese el nombre de la terea:");
                agregarTarea(nombreTarea);
                break;
            case 2:
                let indiceAEliminar = parseInt(prompt("Ingrese el indice de la terea a eliminar"));
                eliminarTarea(indiceAEliminar);
                break;
            case 3:
                let indiceACompletar = parseInt(prompt("Ingrese el indice de la terea a completar"));
                completarTarea(indiceACompletar);
                break;
            case 4:
                let indice = parseInt(prompt("Ingrese el indice de la terea a modificar: "));
                if(indice >= 0 && indice < tareas.length){
                    let opcion = parseInt(prompt("Propiedad a elimar: 1-Nombre, 2- Fecha Limite, 3-Categoria")); 
                    switch (opcion) {
                        case 1:
                            let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea");
                            modificarTarea(indice,nuevoNombre);
                            break;
                        case 2:
                            let nuevaFecha = prompt("Ingrese la nueva fecha de la tarea");
                            modificarTarea(indice,undefined,nuevaFecha);
                            break;
                        case 3:
                            let nuevaCategoria = parseInt(prompt("Ingrese la nueva categoria de la tarea"));
                            if(nuevaCategoria >= 0 && nuevaCategoria < categoriasNombre.length){
                                modificarTarea(indice,undefined,undefined,nuevaCategoria);                            
                            }else{
                                console.log("Categoria invalida");
                            }
                            break;                    
                        default:
                            break;
                    } 
                }else{
                    console.log("Indice de tareas incorrecto");
                }
                break;
            case 5: 
                console.log(" -- LISTA DE TAREAS -- ");
                console.log(tareas);
                break;
            case 6: 
                console.log(" -- LISTA DE CATEGORIAS -- ");
                console.log(motrarTodasLasCategorias());
                break;
            case 7: 
                let nuevaCategoria = prompt("Ingrese la nueva categoria: ");
                agregarNuevaCategoria(nuevaCategoria);
                break;    
            case 8: 
                motrarTodasLasCategorias();
                let categoriaFiltro = parseInt(prompt("Ingrese la categoria: "));
                let tareasCategoria = filtrarTareasPorCategorias(categoriaFiltro);
                console.log("Tareas de la categoria " + categoriaFiltro);
                console.log(tareasCategoria);
                break;    
            case 9: 
                motrarTodasLasCategorias();
                let nroCategoriaFiltro = parseInt(prompt("Ingrese la categoria: "));
                contarTareasCompletadasPorCategoria(nroCategoriaFiltro);
                break;    
            case 10: 
                mostrarTareasNoCompletadas();
                break;    
            case 11: 
                ordenarTareasPorNombre();
                console.log("Tareas por nombre: ");
                console.log(tareas);
                break;    
            case 12: 
                ordenarTareasPorFechaLiminte();
                console.log("Tareas por Fecha: ");
                console.log(tareas);
                break;    
            case 13: 
                ordenarTareasPorNombre();
                console.log("Indice tarea: " + buscarTareaPorNombre(prompt("Ingrese el nombre de la tarea a buscar: ")));

                break;    
            default:
                break;
        }        
    }
}

interactuarConUsuario();