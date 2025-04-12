/*28. Validación de contraseña

Tema: verificación en do...while

const CONTRASENA_CORRECTA = 'claveSegura'
Repite el ingreso de contraseña hasta que coincida con la correcta.

Muestra "Contraseña incorrecta" cada vez que falle y "Acceso permitido" al final.*/

const CONTRASENA_CORRECTA = 'claveSegura'
let contrasenaIngresada = '';
let intentos = 0;
do {
    contrasenaIngresada = prompt('Ingrese la contraseña: ');
    intentos++;
    if (contrasenaIngresada !== CONTRASENA_CORRECTA) {
        console.log('Contraseña incorrecta. Intente nuevamente.');
    }
}
while (contrasenaIngresada !== CONTRASENA_CORRECTA && intentos < 3);
