/*7. Aplicar descuento

Tema: operadores aritméticos y porcentaje

let precioOriginal = 200
let descuento = 20 // porcentaje
Calcula y muestra el precio final después del descuento.*/

let precioOriginal = 200;
let descuento = 20; 
let precioFinal = precioOriginal - (precioOriginal * (descuento / 100))
console.log("El precio final después del descuento es: " + precioFinal)