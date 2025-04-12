/*17. Mayor de tres números

Tema: if-else anidado

let a = 10,
    b = 5,
    c = 7
Muestra cuál es el número mayor entre los tres.*/

let a = 10,
    b = 5,
    c = 7
if (a > b) {
    if (a > c) {
        console.log("El mayor es " + a)
    } else {
        console.log("El mayor es " + c)
    }
}else {
    if (b > c) {
        console.log("El mayor es " + b)
    } else {
        console.log("El mayor es " + c)
    }
} 
