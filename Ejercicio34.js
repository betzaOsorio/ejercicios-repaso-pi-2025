/*34. Promedio por estudiante (matriz)

Tema: matriz + anidado

const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]
Calcula y muestra el promedio de cada estudiante en una lista.*/


const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]

const promedios = []
for (let i = 0; i < notas.length; i++) {
    let suma = 0;
    for (let j = 0; j < notas[i].length; j++) {
        suma += notas[i][j];
    }
    const promedio = suma / notas[i].length;
    promedios.push(promedio);
}
console.log("Promedios por estudiante:");
for (let i = 0; i < promedios.length; i++) {
    console.log(`Estudiante ${i + 1}: ${promedios[i]}`);
}
