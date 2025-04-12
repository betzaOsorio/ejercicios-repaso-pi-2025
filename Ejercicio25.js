/*25. Menú interactivo (simulado)

Tema: do...while

Simula un menú que se muestra al menos una vez.

Si opcion es "A", muestra "Bienvenid@".

Si opcion es "B", permita la entrada de un nombre y muestra "Bienvenid@ ${nombreIngresado}".

Repite mientras opcion no sea "3".*/


let opcion; // Variable para almacenar la opción del menú
let nombreIngresado; // Variable para almacenar el nombre ingresado
do {
    // Muestra el menú y pide la opción al usuario
    opcion = prompt("Seleccione una opción:\nA. Bienvenido\nB. Bienvenid@ con nombre\n3. Salir");

    switch (opcion) { // Evalúa la opción seleccionada
        case "A":
            console.log("Bienvenid@"); // Mensaje de bienvenida sin nombre
            break;
        case "B":
            nombreIngresado = prompt("Ingrese su nombre:"); // Pide el nombre al usuario
            console.log(`Bienvenid@ ${nombreIngresado}`); // Mensaje de bienvenida con nombre
            break;
        case "3":
            console.log("Saliendo del menú..."); // Mensaje de salida del menú
            break;
        default:
            console.log("Opción no válida, por favor intente nuevamente."); // Mensaje de opción inválida
    }
}
while (opcion !== "3"); // Repite el menú mientras la opción no sea "3"