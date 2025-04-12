/*40. Validar correo electrónico

Tema: lógica dentro de función

Crea una función validarCorreo(correo). Debe verificar si el string contiene "@" y "."

Si es así, muestra "Correo válido", si no, "Correo inválido".

Solicita un correo al usuario.*/
function validarCorreo(correo) {
    if (correo.includes("@") && correo.includes(".")) {
        return "Correo válido";
    } else {
        return "Correo inválido";
    }
}

let correo = prompt("Introduce tu correo electrónico:");
let resultado = validarCorreo(correo);  
alert(resultado);

