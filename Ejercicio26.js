/*26. Suma hasta 100

Tema: acumulador en while

const numeros = [10, 15, 20, 25, 30, 5]
Usa un ciclo while para sumar los elementos hasta que la suma llegue o supere 100.

Imprime la suma y cuántos números usaste.*/

const numeros = [10, 15, 20, 25, 30, 5]; // Array de números
let suma = 0; // Inicializa la suma en 0
let contador = 0; // Inicializa el contador de números usados

while (suma < 100 && contador < numeros.length) { // Mientras la suma sea menor a 100 y no se hayan usado todos los números
    suma += numeros[contador]; // Suma el número actual al total
    contador++; // Incrementa el contador
}
