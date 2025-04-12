/*37. Área de un triángulo

Tema: función con retorno

Crea una función calcularAreaTriangulo(base, altura). Debe retornar el área usando la fórmula (base * altura) / 2.

Llama a la función con los valores ingresados por el usuario e imprime el resultado.*/

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
base = 9
altura = 5
area = calcularAreaTriangulo(base, altura)
console.log("El área del triángulo es: " + area)