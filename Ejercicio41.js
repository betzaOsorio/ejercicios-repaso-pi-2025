/*41. Generar contraseña aleatoria

Tema: lógica con bucle dentro de función

Crea una función generarContraseña(longitud). Debe retornar una contraseña aleatoria con letras y números.

Ejemplo: "a7d3g8" si la longitud es 6.

(No necesitas usar caracteres especiales).*/

function generarContraseña(longitud) {
    let caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }
    return contraseña;
}

let longitud = parseInt(prompt("Introduce la longitud de la contraseña:"));
let contraseñaGenerada = generarContraseña(longitud);   
alert("Contraseña generada: " + contraseñaGenerada);