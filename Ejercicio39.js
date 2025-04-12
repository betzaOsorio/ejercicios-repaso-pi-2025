/*39. Suma de arreglo

Tema: función con arreglo como parámetro

Crea una función sumarArreglo(arreglo). Debe retornar la suma total de los números 
ingresados por el usuario según un menú interactivo que permita ingresar un número y 
luego preguntar si desea ingresar más números hasta que ya no desee ingresar más números 
y que muestre la suma.

Utiliza push para ingresar cada número dado por el usuario*/

function sumarArreglo(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

let arreglo = [];
let continuar = true;
while (continuar) {
    let numero = parseFloat(prompt("Ingrese un número:"));
    arreglo.push(numero);
    continuar = confirm("¿Desea ingresar otro número?");
}
let resultado = sumarArreglo(arreglo);
console.log("La suma total es: " + resultado);
console.log("Los números ingresados son: " + arreglo.join(", "));



