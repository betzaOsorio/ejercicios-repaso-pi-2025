/*27. Juego del número secreto

Tema: do...while con condición

const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
console.log(`El número secreto es: ${NUMERO_SECRETO}`)
Crea un juego que pide números hasta adivinar el número secreto.

Muestra: "¡Adivinaste!" cuando el intento sea correcto.

Haz que el valor de intento cambie dentro del bucle.*/

const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1; // Genera un número secreto entre 1 y 100
console.log(`El número secreto es: ${NUMERO_SECRETO}`); // Muestra el número secreto (solo para depuración)
let intento; // Inicializa la variable intento

do {
    intento = parseInt(prompt("Adivina el número secreto (entre 1 y 100):")); // Pide un número al usuario
    if (intento === NUMERO_SECRETO) { // Si el intento es correcto
        console.log("¡Adivinaste!"); // Muestra mensaje de éxito
    } else if (intento < NUMERO_SECRETO) { // Si el intento es menor que el número secreto
        console.log("Demasiado bajo. Intenta de nuevo."); // Indica que el intento fue bajo
    } else { // Si el intento es mayor que el número secreto
        console.log("Demasiado alto. Intenta de nuevo."); // Indica que el intento fue alto
    }
}
while (intento !== NUMERO_SECRETO); // Repite hasta que el intento sea correcto